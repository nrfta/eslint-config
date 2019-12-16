# @neighborly/eslint-config

Neighborly's shared ESLint config for Javascript, TypeScript, Node.js & Ember.js apps.

- [**`@neighborly/eslint-config`**](/packages/eslint-config):
  The base config that all other configs extend from.
- [**`@neighborly/eslint-config-node`**](/packages/eslint-config-node):
  Adds Node.js-specific rules and sets the environment.
- [**`@neighborly/eslint-config-typescript`**](/packages/eslint-config-typescript):
  Adds support for parsing TypeScript, as well as TypeScript-specific rules.
- [**`@neighborly/eslint-config-ember`**](/packages/eslint-config-ember):
  Adds Ember.js-specific rules.
- [**`@neighborly/eslint-config-ember-typescript`**](/packages/eslint-config-ember-typescript):
  Combines `eslint-config-ember` and `eslint-config-typescript`.

## :exclamation: Requirements

- [ESLint](http://eslint.org/) is required to use this plugin.

## :rocket: Usage

This process is the same for any of the packages included here.

### 1. Install plugin

```shell
yarn add --dev @neighborly/eslint-config
```

### 2. Modify your `.eslintrc.js`:

Shareable configs are designed to work with the extends feature of `.eslintrc` files.

```js
extends: [
  '@neighborly/eslint-config'
]
```

## :nail_care: Prettier

Our ESLint config is setup to be used in conjunction wit Prettier for
formatting code in editors (eg. VS Code, Atom, Sublime, Vim). We include the
base `.prettierrc.js` file in the base package. You can require that file and use that in
your application.

Create a file in the root of your application named `.prettierrc.js` with the
following content:

```js
module.exports = require('@neighborly/eslint-config/.prettierrc.js');
```

# License

Copyright (c) 2019 Neighborly Corporation

Licensed under the [MIT license](LICENSE.md).

# Acknowledgement

Thanks to [@ClarkSource](https://github.com/ClarkSource)'s [eslint-config](https://github.com/ClarkSource/eslint-config)
for the ideas on how to organize this project.
