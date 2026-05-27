/**
 * Build Postman publish payload for mirror deployment repo.
 *
 * Output layout:
 *   <outDir>/postman/SERIES.md
 *   <outDir>/postman/vol-01-start/*.pdf
 *   <outDir>/postman/vol-01-start/*.json   (optional, from publish-assets/)
 *
 * Usage:
 *   node scripts/build-postman-publish.mjs
 *   node scripts/build-postman-publish.mjs --out-dir .deploy-mirror --include-json
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'
import { buildPdfFilename } from '../_shared/guide/pdf-title.mjs'
import { extractSeriesOutlineForPublish } from '../_shared/guide/extract-series-outline.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

const args = process.argv.slice(2)
const outDir = resolveArgValue(args, '--out-dir') ?? '.deploy-mirror'
const includeJson = args.includes('--include-json')

const postmanRoot = path.join(repoRoot, 'series', 'postman')
const volRoot = path.join(postmanRoot, 'vol-01-start')
const partsDir = path.join(volRoot, 'parts')
const publishAssetsDir = path.join(volRoot, 'publish-assets')
const exportScript = path.join(repoRoot, 'scripts', 'export-guide-pdf.mjs')

const outRoot = path.resolve(repoRoot, outDir)
const outPostman = path.join(outRoot, 'postman')
const outVol = path.join(outPostman, 'vol-01-start')

await fs.rm(outRoot, { recursive: true, force: true })
await fs.mkdir(outVol, { recursive: true })

const partIds = await resolvePublishPartIds(partsDir)
if (!partIds.length) {
  throw new Error(`No publish parts configured under: ${partsDir}`)
}

for (const partId of partIds) {
  const partPath = `postman/vol-01-start/${partId}`
  await runNode(exportScript, [partPath], repoRoot)

  const metaPath = path.join(partsDir, partId, 'meta.json')
  const meta = JSON.parse(await fs.readFile(metaPath, 'utf8'))
  const pdfName = buildPdfFilename(meta)
  const srcPdf = path.join(partsDir, partId, pdfName)
  const dstPdf = path.join(outVol, pdfName)
  await fs.copyFile(srcPdf, dstPdf)
}

const srcSeriesMd = path.join(postmanRoot, 'SERIES.md')
const dstSeriesMd = path.join(outPostman, 'SERIES.md')
const seriesFull = await fs.readFile(srcSeriesMd, 'utf8')
await fs.writeFile(dstSeriesMd, extractSeriesOutlineForPublish(seriesFull), 'utf8')

if (includeJson) {
  await copyJsonRecursive(publishAssetsDir, outVol)
}

console.log('Publish payload ready:')
console.log('  ', outRoot)
console.log('  parts:', partIds.join(', '))
console.log('  includeJson:', includeJson)

async function listPartIds(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()
}

/** publish-parts.json 이 있으면 해당 파트만 미러 대상 (없으면 parts/ 전체) */
async function resolvePublishPartIds(dir) {
  const manifestPath = path.join(dir, '..', 'publish-parts.json')
  try {
    const raw = await fs.readFile(manifestPath, 'utf8')
    const ids = JSON.parse(raw)
    if (!Array.isArray(ids) || !ids.length) {
      throw new Error('publish-parts.json must be a non-empty array of part folder names')
    }
    for (const id of ids) {
      const partDir = path.join(dir, id)
      try {
        const st = await fs.stat(partDir)
        if (!st.isDirectory()) throw new Error(`not a directory: ${id}`)
      } catch {
        throw new Error(`publish-parts.json references missing part: ${id}`)
      }
    }
    return ids
  } catch (err) {
    if (err && err.code === 'ENOENT') return listPartIds(dir)
    throw err
  }
}

function resolveArgValue(argv, key) {
  const i = argv.indexOf(key)
  if (i === -1) return undefined
  return argv[i + 1]
}

function runNode(script, scriptArgs, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...scriptArgs], {
      cwd,
      stdio: 'inherit',
      env: process.env,
    })
    child.on('error', reject)
    child.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Command failed: node ${script} ${scriptArgs.join(' ')} (exit ${code})`))
    })
  })
}

async function copyJsonRecursive(srcDir, dstDir) {
  try {
    const entries = await fs.readdir(srcDir, { withFileTypes: true })
    for (const entry of entries) {
      const src = path.join(srcDir, entry.name)
      const dst = path.join(dstDir, entry.name)
      if (entry.isDirectory()) {
        await fs.mkdir(dst, { recursive: true })
        await copyJsonRecursive(src, dst)
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.json')) {
        await fs.mkdir(path.dirname(dst), { recursive: true })
        await fs.copyFile(src, dst)
      }
    }
  } catch (err) {
    if (err && err.code === 'ENOENT') return
    throw err
  }
}
