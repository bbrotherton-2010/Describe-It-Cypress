import HomePage from '../pages/homePage'

beforeEach(() => {
  cy.injectAxe()

})

describe('Homepage Navigation', () => {

  it('Navigates back to homepage', () => {
    cy.visit('/collections/frontpage/products/grey-jacket');
    HomePage.clickHomeLink;


  })
})