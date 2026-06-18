import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const appRoot = path.join(repoRoot, 'app')
const require = createRequire(path.join(appRoot, 'package.json'))
const { createServer } = require('vite')
const vue = require('@vitejs/plugin-vue').default

const server = await createServer({
  root: appRoot,
  configFile: path.join(appRoot, 'vite.config.ts'),
  plugins: [vue()],
  logLevel: 'error',
})

function firstSrc(pages) {
  for (const page of pages) {
    if (page.type !== 'content') continue
    for (const b of page.blocks) {
      const figs = []
      if (b.kind === 'steps') figs.push(...b.steps.map((s) => s.figure).filter(Boolean))
      if (b.kind === 'figure') figs.push(b.figure)
      for (const f of figs) {
        if (f.imageSrc) return f.imageSrc
        if (f.placeholderLabel) return `MISSING: ${f.placeholderLabel}`
      }
    }
  }
  return 'none'
}

for (const partId of ['1-1-postman-intro', '1-6-basic-get', '1-4-practice-files']) {
  const modPath = path.join(repoRoot, 'series/postman/vol-01-start/parts', partId, 'pages.ts')
  const mod = await server.ssrLoadModule(pathToFileURL(modPath).href)
  console.log(partId, firstSrc(mod.pages))
}

await server.close()
