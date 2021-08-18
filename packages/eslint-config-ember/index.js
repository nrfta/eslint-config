'use strict';

module.exports = {
  plugins: ['ember', 'ember-best-practices'],
  extends: [
    '@underline',
    'plugin:ember/recommended',
    'plugin:ember-best-practices/recommended'
  ],
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

    // Same thing
    'ember-best-practices/no-observers': 'off',
    'ember/no-observers': 'error',

    // Same thing
    'ember-best-practices/no-attrs-snapshot': 'off',
    'ember/no-attrs-snapshot': 'error',

    // Same thing
    'ember-best-practices/no-attrs': 'off',
    'ember/no-attrs-in-components': 'error',

    // Same thing
    'ember-best-practices/no-broken-super-chain': 'off',

    // Same thing
    'ember-best-practices/no-global-jquery': 'off',
    'ember/no-global-jquery': 'error',

    // Same thing
    'ember-best-practices/no-send-action': 'off',
    'ember/closure-actions': 'error'
  },
  overrides: []
};
