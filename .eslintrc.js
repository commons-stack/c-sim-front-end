module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 1,
    'no-debugger': 1,
    quotes: [1, 'single', { avoidEscape: true }],
    semi: [1, 'never'],
    'arrow-parens': [1, 'as-needed'],
    'vue/name-property-casing': [1, 'kebab-case'],
  },
}
