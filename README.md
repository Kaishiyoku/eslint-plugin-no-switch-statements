# eslint-plugin-no-switch-statements

ESLint rule for disallowing the switch statement


## Install

```
$ npm install --save-dev eslint eslint-plugin-no-switch-statements
```

## Usage

Configure it in `package.json`.

<!-- EXAMPLE_CONFIGURATION:START -->
```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "plugins": [
      "no-switch-statements"
    ],
    "rules": {
      "no-switch-statements/no-switch": "error"
    }
  }
}
```
<!-- EXAMPLE_CONFIGURATION:END -->


## Rules

<!-- RULES:START -->
- [no-switch](docs/rules/no-switch.md) - prevent the usage of switch statements

<!-- RULES:END -->

## Recommended configuration

This plugin exports a [`recommended` configuration](index.js) that enforces good practices.

To enable this configuration, use the `extends` property in your `package.json`.

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "plugins": [
      "no-switch-statements"
    ],
    "extends": "plugin:no-switch-statements/recommended"
  }
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

MIT © [Andreas Wiedel](https://github.com/kaishiyoku)
