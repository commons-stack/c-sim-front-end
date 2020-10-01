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
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    'no-console': 'warn',
    'no-debugger': 'warn',
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'never'],
    'arrow-parens': [2, 'as-needed'],
  },
}
