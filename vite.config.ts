import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  fmt: {
    $schema: './node_modules/oxfmt/configuration_schema.json',
    semi: false,
    singleQuote: true,
  },
  lint: {
    $schema: './node_modules/oxlint/configuration_schema.json',
    categories: {
      correctness: 'error',
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
})
