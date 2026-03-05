class HomePage
{
   clickHomeLink() {
       cy.contains('Home').click();
    }


}
module.exports = HomePage