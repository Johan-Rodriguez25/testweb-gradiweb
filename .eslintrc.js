module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'prettier', 'plugin:prettier/reccomended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
