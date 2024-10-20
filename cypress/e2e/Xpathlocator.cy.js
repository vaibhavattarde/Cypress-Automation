describe("xpath locators", () => {
    it("find number of products using xpath", () => {
        cy.visit("https://automationexercise.com/");
        
        // Use .xpath() instead of .get() for XPath selectors
        cy.xpath("//div[@class='single-products']//div[@class='productinfo text-center']")
          .should('have.length', 40);  // Assert that 40 products are displayed
    });
}); 

//intsall cypress plugin
//add entry in command ja <reference types = "cypress-xpath" />
//and e2e.js require)'cypress -xpath')
