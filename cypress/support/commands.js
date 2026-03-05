// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkAccessibility', () => {
  cy.injectAxe()
  cy.checkA11y(null, null, logA11yViolations)
})

function logA11yViolations(violations) {
  if (violations.length) {
    console.log(`Accessibility violations: ${violations.length}`)

    violations.forEach((violation) => {
      console.log(`\nRule: ${violation.description}`)
      console.log(`Severity: ${violation.impact}`)
      console.log(`Affected elements: ${violation.nodes.length}`)

      violation.nodes.forEach((node) => {
        console.log(`  Element: ${node.target}`)
      })
    })
  }
}