'use strict';

module.exports = {
  env: {
    node: true,
    browser: false
  },
  plugins: ['node'],
  extends: ['@underline', 'plugin:node/recommended'],
  rules: {
    'node/no-unpublished-require': 'off'
  },
  overrides: [
    {
      files: [
        'ssr/**/*.js',
        'server/**/.js',
        'server/proxies/*.js',
        '.prettierrc.js'
      ],
      rules: {
        'no-process-exit': 'off',
        'node/no-extraneous-require': 'off'
      }
    },
    {
      /**
       * We disable this rule in ssr folder as eslint doesn't know about having
       * another package.json inside of ssr folder.
       */
      files: ['ssr/**/*.js'],
      rules: {
        'node/no-missing-require': 'off'
      }
    }
  ]
};
