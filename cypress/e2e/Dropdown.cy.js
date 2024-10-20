//SELECT TAG 

describe("Dropdown Menu Selection", () => {
    it("Select an option from the dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Use the <select> element and select the option by value
        cy.get('select#dropdown-class-example')
          .select('option2') // Selects the option with value "option2"
          .should('have.value', 'option2'); // Assert that option2 is selected
          
        // Optionally, take a screenshot
        cy.screenshot('dropdown-option-selected');
    });
});

//BOOSTRAP DD

describe("Dropdown Menu Selection - NO SELECT TAG", () => {
    it("Select an option from the dropdown - NO SELECT TAG", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        // Open the dropdown
        cy.get('#select2-billing_country-container').click();

        // Type 'Italy' into the search field and press enter
        cy.get('.select2-search__field')
          .type('Italy')
          .type('{enter}');

        // Assert that the dropdown now shows 'Italy' as the selected country
        cy.get('#select2-billing_country-container')
          .should('contain', 'Italy');

        // Optionally, take a screenshot
        cy.screenshot('dropdown-option-selected');
    });

   //AUTO SUGGESTED DROP DOWN 
   describe('Auto suggested drop down', () => {
    it('Auto Suggest Drop down with Iteration', () => {
        cy.visit('https://www.wikipedia.org/');
        
        // Type 'delhi' in the search input field
        cy.get('#searchInput').click().type('delhi');
        
        // Wait for suggestions and iterate over the results
        cy.get('.suggestion-title').each(($el, index, $list) => {
            const suggestionText = $el.text(); // Get the text of each suggestion
            cy.log('Suggestion Text: ' + suggestionText); // Log the text of the suggestion

            // Print suggestion in the console
            cy.wrap($el).then(($element) => {
                console.log('Suggestion ' + (index + 1) + ': ' + $element.text());
            });

            // If 'Delhi Metro' is found, click on it
            if (suggestionText.includes('Delhi Metro')) {
                cy.wrap($el).click();
            }
        });

        // Verify the correct page was loaded
        cy.url().should('include', 'Delhi_Metro');
    });
});


});
