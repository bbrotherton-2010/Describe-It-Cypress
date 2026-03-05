const HomePage = require('../pages/HomePage')

describe('Homepage - not exhaustive', () => {
  const homePage = new HomePage();

  it('Navigates back to homepage', () => {
    cy.visit('/collections/frontpage/products/grey-jacket');
    homePage.clickHomeLink();
    cy.location('href').should('eq', 'https://sauce-demo.myshopify.com/')

  })
  it('Has no accessibility errors', () => {
    cy.visit('/');
    cy.checkAccessibility();
  })

  it('opens all links on left navigation', () => {
    // Add items to page definition
    // Verify the url and page loads > possibly store URL in a parameter instead of hard coded
  })

  it('opens all links on top navigation', () => {
    // Add items to page definition
    // Verify the url and page loads > possibly store URL in a fixture instead of hard coded
  })

  it('opens all links on bottom navigation', () => {
    // Add items to page definition
    // Verify the url and page loads > possibly store URL in a fixture instead of hard coded
  })

  it('opens the cart section',() => {
    // Add cart button to page definition
    // Add cart section to page definition
    // click cart once to expand the cart section at the top of the screen
  })

  it('closes the cart section', () => {
    // click cart to expand
    // click cart again to close
  })

  it('social links have correct URL', () => {
    // URLs stored in fixture
    // Add social buttons to page definition
    // Verify URL > If necessary, find an alternative way to verify page opening since Cypress doesn't support multiple tabs
  })

  it('shows the correct items on the front page', () => {
    // Only possible if these are specific items and not random.
    // Get information from API call
    // Compare to what is on the UI
    // Verify it matches
  })

})

// Ensure the social links have the correct URLs
// If possible, do visual testing on whole page to ensure that no unexpected UI changes occurred