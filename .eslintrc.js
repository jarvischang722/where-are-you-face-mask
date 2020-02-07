module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  ecmaFeatures: {
    modules: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 8,
    parser: 'babel-eslint',
  },
  rules: {
    indent: 'off',
    'no-console': 'warn',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['error', { args: 'none' }],
    curly: 'error',
    eqeqeq: 'error',
    'no-throw-literal': 'error',
    'no-var': 'error',
    'dot-notation': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-with': 'error',
    'operator-linebreak': 'error',
    yoda: 'error',
    'quote-props': ['error', 'as-needed'],
    'max-len': ['error', { code: 140 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  },

};
