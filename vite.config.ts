import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/iwamad-practice/',
  plugins: [react()],

  build: {
    outDir: 'docs',
  },

  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    pool: 'threads',
    fileParallelism: false,
  },
})