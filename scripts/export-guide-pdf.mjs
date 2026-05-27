/**
 * Vue PDF 뷰 → PDF (2-pass, 페이지 1:1)
 * Usage: node export-guide-pdf.mjs postman/vol-01-start/1-1-postman-intro [output.pdf]
 */
import puppeteer from 'puppeteer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import http from 'node:http'
import { build } from '../app/node_modules/vite/dist/node/index.js'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { buildPdfDocumentTitle, buildPdfFilename } from '../_shared/guide/pdf-title.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const appRoot = path.join(repoRoot, 'app')
const distDir = path.join(appRoot, 'dist')

const partPath = process.argv[2]
const pdfName = process.argv[3] || 'index.pdf'

if (!partPath) {
  console.error('Usage: node export-guide-pdf.mjs <series/vol/part> [output.pdf]')
  console.error('Example: node export-guide-pdf.mjs postman/vol-01-start/1-1-postman-intro')
  process.exit(1)
}

const segments = partPath.split('/')
if (segments.length !== 3) {
  console.error('Part path must be: <series>/<vol>/<part-id>')
  process.exit(1)
}

const [series, vol, partId] = segments
const metaPath = path.join(repoRoot, 'series', series, vol, 'parts', partId, 'meta.json')
if (!fs.existsSync(metaPath)) {
  console.error('meta.json not found:', metaPath)
  process.exit(1)
}

const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
const pdfDocumentTitle = buildPdfDocumentTitle(meta)
const outDir = path.dirname(metaPath)
const pdfFull = path.join(
  outDir,
  pdfName === 'index.pdf' ? buildPdfFilename(meta) : pdfName,
)
const coverPdfTmp = path.join(outDir, '.guide-cover-tmp.pdf')
const bodyPdfTmp = path.join(outDir, '.guide-body-tmp.pdf')

/** 페이지 번호(pdf-lib) 공간은 CSS padding-bottom — margin 사용 시 HTML 1장이 PDF 2장으로 쪼개짐 */
const PDF_MARGIN = {
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
}

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(new URL(req.url ?? '/', 'http://127.0.0.1').pathname)
      const rel = urlPath === '/' ? '/index.html' : urlPath
      let filePath = path.join(distDir, rel)

      if (!filePath.startsWith(distDir)) {
        res.writeHead(403)
        res.end('Forbidden')
        return
      }

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distDir, 'index.html')
      }

      const ext = path.extname(filePath)
      res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' })
      fs.createReadStream(filePath).pipe(res)
    })

    server.listen(0, '127.0.0.1', () => {
      const addr = server.address()
      const port = typeof addr === 'object' && addr ? addr.port : 0
      resolve({ server, port })
    })
    server.on('error', reject)
  })
}

async function mergePdfs(coverPath, bodyPath, outPath, title, meta) {
  const merged = await PDFDocument.create()
  merged.setTitle(title)
  if (meta.series) merged.setAuthor(meta.series)
  if (meta.vol) merged.setSubject(meta.vol)
  merged.setCreator('guide_repo_v0.2')

  const coverDoc = await PDFDocument.load(fs.readFileSync(coverPath))
  const bodyDoc = await PDFDocument.load(fs.readFileSync(bodyPath))

  const [coverPage] = await merged.copyPages(coverDoc, [0])
  merged.addPage(coverPage)

  const bodyPages = await merged.copyPages(bodyDoc, bodyDoc.getPageIndices())
  for (const p of bodyPages) merged.addPage(p)

  fs.writeFileSync(outPath, await merged.save())
}

async function stampPageNumbers(outPath) {
  const bytes = fs.readFileSync(outPath)
  const doc = await PDFDocument.load(bytes)
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const pages = doc.getPages()
  const total = pages.length
  const size = 9
  const color = rgb(0.39, 0.45, 0.55)

  for (let i = 1; i < total; i++) {
    const page = pages[i]
    const { width } = page.getSize()
    const label = `${i + 1} / ${total}`
    const w = font.widthOfTextAtSize(label, size)
    page.drawText(label, {
      x: width - w - 40,
      y: 26,
      size,
      font,
      color,
    })
  }

  fs.writeFileSync(outPath, await doc.save())
}

console.log('Building app...')
await build({
  root: appRoot,
  configFile: path.join(appRoot, 'vite.config.ts'),
})

const { server, port } = await startStaticServer()
const previewUrl = `http://127.0.0.1:${port}/#/pdf/${partPath}`

/** GitHub Actions 등 Linux CI에서는 Chromium sandbox 비활성화 필요 */
function puppeteerLaunchArgs() {
  const args = ['--font-render-hinting=none', '--disable-lcd-text']
  if (process.env.CI) {
    args.push('--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage')
  }
  return args
}

const browser = await puppeteer.launch({
  headless: true,
  args: puppeteerLaunchArgs(),
})

try {
  const page = await browser.newPage()
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 })
  await page.goto(previewUrl, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluate(() => document.fonts.ready)
  await page.emulateMediaType('print')

  console.log('Export:', previewUrl)
  console.log('   title:', pdfDocumentTitle)
  console.log('   ->', pdfFull)

  await page.evaluate(() => {
    document.documentElement.classList.remove('pdf-export-body')
    document.documentElement.classList.add('pdf-export-cover')
  })

  await page.pdf({
    format: 'A4',
    path: coverPdfTmp,
    pageRanges: '1',
    printBackground: true,
    preferCSSPageSize: false,
    displayHeaderFooter: false,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  })

  await page.evaluate(() => {
    document.documentElement.classList.remove('pdf-export-cover')
    document.documentElement.classList.add('pdf-export-body')
  })

  await page.pdf({
    format: 'A4',
    path: bodyPdfTmp,
    printBackground: true,
    preferCSSPageSize: false,
    displayHeaderFooter: false,
    margin: PDF_MARGIN,
  })

  await page.evaluate(() => {
    document.documentElement.classList.remove('pdf-export-body')
  })

  await mergePdfs(coverPdfTmp, bodyPdfTmp, pdfFull, pdfDocumentTitle, meta)
  await stampPageNumbers(pdfFull)

  console.log(`OK (${fs.statSync(pdfFull).size} bytes)`)
} finally {
  await browser.close()
  server.close()
  for (const tmp of [coverPdfTmp, bodyPdfTmp]) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp)
  }
}
