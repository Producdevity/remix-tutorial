/** @type {import("prettier").Config} */
exports.module = {
  semi: false,
  trailingComma: "all",
  singleQuote: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
