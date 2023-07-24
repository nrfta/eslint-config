'use strict';

const prettierrc = require('./.prettierrc.js');

module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: false
  },
  rules: {
    'prettier/prettier': ['error', prettierrc],

    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],

    'no-unused-vars': ['error', { argsIgnorePattern: '^this' }],

    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ], 

    'no-console': [
      'error', 
      { allow: ['error', 'warn', 'info'] }
    ],
  }
};
