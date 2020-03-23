'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@underline',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off', // Prettier already takes care of this.
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'all'
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Warnings
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/generic-type-naming': 'warn',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-extraneous-class': 'warn',
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-type-alias': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn'
  },
  overrides: [
    {
      /**
       * `.d.ts` files contain no logic and have different requirements. So some
       * rules are not applicable here.
       */
      files: '*.d.ts',
      rules: {
        'no-shadow': 'off'
      }
    },
    {
      /**
       * Tests should be safe to disable no-non-null-assertion and it's
       * annoying to add return type on tests.
       */
      files: ['tests/**/*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    },
    {
      /**
       * Disable TypeScript specific rules for JS files
       */
      files: ['*.js'],
      rules: {
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
};
