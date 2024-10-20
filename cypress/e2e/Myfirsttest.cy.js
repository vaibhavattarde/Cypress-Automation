describe('suite name', () => {

    it('TEST 1 (Positive test) - Visit and Verify Title', () => {
        // Visit the OrangeHRM login page
        cy.visit("https://opensource-demo.orangehrmlive.com");

        // Assert that the page title is correct
        cy.title().should('eq', 'OrangeHRM');
    });

    it('TEST 2 (Negative test) - Visit and Verify Title', () => {
        // Visit the OrangeHRM login page
        cy.visit("https://opensource-demo.orangehrmlive.com");

        // Assert that the page title is INCORRECT
        cy.title().should('eq', 'OrangeHHRM');
    });

});
