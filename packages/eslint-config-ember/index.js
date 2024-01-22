'use strict';

module.exports = {
  plugins: ['ember'],
  extends: ['@underline', 'plugin:ember/recommended'],
  rules: {
    'ember/no-deeply-nested-dependent-keys-with-each': 'error',
    'ember/no-invalid-debug-function-arguments': 'error',
    'ember/no-new-mixins': 'error',
    'ember/no-ember-super-in-es-classes': 'error',
    'ember/no-jquery': 'error',
    'ember/no-test-import-export': 'error',
    'ember-best-practices/require-dependent-keys': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'error',
    'ember/no-unnecessary-route-path-option': 'error',
    'ember/no-test-and-then': 'error',
    'ember/no-empty-glimmer-component-classes': 'off',
    'ember/no-observers': 'error',
    'ember/no-attrs-snapshot': 'error',
    'ember/no-attrs-in-components': 'error',
    'ember/no-global-jquery': 'error',
    'ember/closure-actions': 'error'
  },
  overrides: [
    {
      files: ['**/*.gjs'],
      parser: 'ember-eslint-parser',
      plugins: ['ember'],
      extends: [
        '@underline',
        'plugin:ember/recommended',
        'plugin:ember/recommended-gjs'
      ]
    }
  ]
};
