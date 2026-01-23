import { defineConfig } from 'vite-plus'

export default defineConfig({
  root: process.cwd(),
  base: process.cwd(),
  test: {
    threads: false,
  },
})
