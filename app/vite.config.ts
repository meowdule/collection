import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

const repoRoot = path.resolve(__dirname, '..')

export default defineConfig({
  /** GitHub Pages(project): https://meowdule.github.io/collection/ */
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [vue()],
  server: {
    port: 5273,
    strictPort: true,
    fs: {
      allow: [repoRoot],
    },
  },
  preview: {
    port: 5274,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@series': path.resolve(__dirname, '../series'),
      '@shared': path.resolve(__dirname, '../_shared'),
    },
  },
})
