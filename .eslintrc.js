module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  rules: {
    'no-console': 'off',
    'no-undefined': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'vue/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'prettier/prettier': 'off'
  }
}
