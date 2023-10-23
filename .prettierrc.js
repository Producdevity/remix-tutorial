/** @type {import("prettier").Config} */
const config = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
  ]
}

export default config
