

describe('CSS Selector Locators', () => {

    it('Checking the css locator', () => {
        // Visit the website
        cy.visit("https://www.saucedemo.com/");
        
        // Interact with the login form using CSS selectors
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();

        // Assertion to verify that the logo contains the expected text "Swag Labs"
        cy.get(".app_logo").should("contain.text", "Swag Labs"); 
    });

});
