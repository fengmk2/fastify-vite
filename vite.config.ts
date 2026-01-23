import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    $schema: './node_modules/oxfmt/configuration_schema.json',
    ignorePatterns: ['.changeset/*.md'],
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
