describe('Check broken links on the page', () => {
    it('Finds and reports broken links', () => {
        // Visit the website
        cy.visit('https://demo.opencart.com/'); // Replace with your target URL

        // Get all anchor elements
        cy.get('a').each(($link) => {
            const href = $link.prop('href');

            // Ensure the link has a valid href attribute
            if (href && href.startsWith('http')) {
                // Send an API request to the href
                cy.request({
                    url: href,
                    failOnStatusCode: false, // Prevent Cypress from failing on non-2xx responses
                }).then((response) => {
                    // Check if the status code is not in the 200-399 range (indicating a broken link)
                    if (response.status < 200 || response.status > 399) {
                        cy.log(`Broken link found: ${href} - Status: ${response.status}`);
                    }
                });
            }
        });
    });
});
