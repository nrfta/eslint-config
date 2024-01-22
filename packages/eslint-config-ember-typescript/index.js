'use strict';

module.exports = {
  extends: ['@underline/ember', '@underline/typescript'],
  overrides: [
    ...require('@underline/eslint-config-ember').overrides,
    {
      files: ['**/*.gts'],
      parser: 'ember-eslint-parser',
      plugins: ['ember'],
      extends: [
        '@underline/ember',
        '@underline/typescript',
        'plugin:ember/recommended',
        'plugin:ember/recommended-gts'
      ]
    }
  ]
};
