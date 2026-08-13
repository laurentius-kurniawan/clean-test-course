//describe('Shows Appeteasers', () => {
//it('Connect to Dev Server', () => {
//cy.visit('https://hangryhippo.quantic.host/');
//});
// it('selects Handhelds', () => {
//cy.contains('Handhelds').click();
//cy.contains('Cheese Burger');
//cy.contains('Fajita Tacos');
//});//
//it('selects Appeteasers', () => {
//TODO: Add a test to check Appeteasers
//cy.contains('Appeteasers').click();
//cy.contains('Tater Tots');
//cy.contains('Cheese Burger').should('not.exist');
//cy.contains('Fajita Tacos').should('not.exist');
//});
//}); //

describe('Shows Appeteasers', () => {
  it('navigates menu categories and verifies items', () => {
    // 1. Visit page
    cy.visit('https://hangryhippo.quantic.host/');

    // 2. Test Handhelds
    cy.contains('Handhelds').click();
    cy.contains('Cheese Burger').should('be.visible');
    cy.contains('Fajita Tacos').should('be.visible');

    // 3. Test Appeteasers
    cy.contains('Appeteasers').click();
    cy.contains('Tater Tots').should('be.visible');
    cy.contains('Cheese Burger').should('not.exist');
    cy.contains('Fajita Tacos').should('not.exist');
  });
});