import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  root: process.cwd(),
  base: process.cwd(),
  test: {
    threads: false,
  },
})
