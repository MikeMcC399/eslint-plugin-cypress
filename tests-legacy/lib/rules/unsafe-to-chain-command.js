'use strict'

const rule = require('../../../lib/rules/unsafe-to-chain-command')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

const errors = [{ messageId: 'unexpected' }]
const parserOptions = { ecmaVersion: 6 }

ruleTester.run('action-ends-chain', rule, {
  valid: [
    {
      code: 'cy.get("new-todo").type("todo A{enter}"); cy.get("new-todo").type("todo B{enter}"); cy.get("new-todo").should("have.class", "active");',
      parserOptions,
    },
    {
      code: 'cy.focused().should("be.visible");',
      parserOptions,
    },
    {
      code: 'cy.submitBtn().click();',
      parserOptions,
    },
  ],

  invalid: [
    {
      code: 'cy.get("new-todo").type("todo A{enter}").should("have.class", "active");',
      parserOptions,
      errors,
    },
    {
      code: 'cy.get("new-todo").type("todo A{enter}").type("todo B{enter}");',
      parserOptions,
      errors,
    },
    {
      code: 'cy.get("new-todo").focus().should("have.class", "active");',
      parserOptions,
      errors,
    },
    {
      code: 'cy.get("new-todo").customType("todo A{enter}").customClick();',
      options: [{ methods: ['customType', 'customClick'] }],
      parserOptions,
      errors,
    },
    {
      code: 'cy.get("new-todo").customPress("Enter").customScroll();',
      options: [{ methods: [/customPress/, /customScroll/] }],
      parserOptions,
      errors,
    },
  ],
})
