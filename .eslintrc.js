module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "eslint:recommended",
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'import',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'global-require': 'off',
    'import/no-unresolved': 'off',
    'max-len': 'off',
    'semi': [2, 'never'],
  }
}
