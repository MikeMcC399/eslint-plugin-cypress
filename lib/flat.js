const globals = require('globals')
const { name, version } = require('../package.json')

const plugin = {
  meta: { name, version },
  configs: {},
  rules: {
    'assertion-before-screenshot': require('./rules/assertion-before-screenshot'),
    'no-assigning-return-values': require('./rules/no-assigning-return-values'),
    'no-async-before': require('./rules/no-async-before'),
    'no-async-tests': require('./rules/no-async-tests'),
    'no-chained-get': require('./rules/no-chained-get'),
    'no-debug': require('./rules/no-debug'),
    'no-force': require('./rules/no-force'),
    'no-pause': require('./rules/no-pause'),
    'no-unnecessary-waiting': require('./rules/no-unnecessary-waiting'),
    'no-xpath': require('./rules/no-xpath'),
    'require-data-selectors': require('./rules/require-data-selectors'),
    'unsafe-to-chain-command': require('./rules/unsafe-to-chain-command'),
  },
}

const commonGlobals
  = Object.assign({
    cy: false,
    Cypress: false,
    expect: false,
    assert: false,
    chai: false,
  }, globals.browser, globals.mocha)

Object.assign(plugin.configs, {
  globals: {
    name: 'cypress/globals',
    plugins: {
      cypress: plugin,
    },
    languageOptions: {
      globals:
        commonGlobals,
    },
  },
})

Object.assign(plugin.configs, {
  recommended: {
    name: 'cypress/recommended',
    plugins: {
      cypress: plugin,
    },
    rules: {
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/unsafe-to-chain-command': 'error',
    },
    languageOptions: {
      globals:
        commonGlobals,
    },
  },
})

module.exports = plugin
