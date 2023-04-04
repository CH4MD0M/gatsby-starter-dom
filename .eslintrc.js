module.exports = {
  plugins: ['@typescript-eslint', 'graphql'],
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'eslint:recommended'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',
    'no-console': 'off',
    eqeqeq: 'error',
    'dot-notation': 'error',
    'no-unused-vars': 'error',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc', 'public', 'node_modules', '.cache'],
};
