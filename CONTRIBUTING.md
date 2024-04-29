# Contributing to cypress-io/eslint-plugin-cypress

Thanks for taking the time to contribute! :smile:

## Adding a new rule

To add a new rule:
  * Fork and clone this repository
  * Generate a new rule (a [yeoman generator](https://github.com/eslint/generator-eslint) is available)
  * Write test scenarios then implement logic
  * Describe the rule in the generated `docs` file
  * Run `npm test` to run [Jest](https://jestjs.io/) or
  * Run `npm start` to run [Jest](https://jestjs.io/) in [watchAll](https://jestjs.io/docs/cli#--watchall) mode where it remains active and reruns when source changes are made
  * Make sure all tests are passing
  * Run npm `update:eslint-docs` to update the documentation (see [Documentation tool](#documentation-tool) below)
  * Create a PR

Use the following commit message conventions: https://github.com/semantic-release/semantic-release#commit-message-format

## Documentation tool

The [eslint-doc-generator](https://github.com/bmish/eslint-doc-generator) is an automatic documentation generator for [ESLint](https://eslint.org/) plugins and rules. It is used in this repository to generate the following documentation sections based on rule metadata.

In the [README](README.md) document:

- [README.md > Rules](README.md#rules) rules table

Individual document rules in the [docs/rules](docs/rules/) directory:

- Rule doc titles and notices
- Rule doc options lists
