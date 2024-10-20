describe('ALERTS', () => {

    // 1. JavaScript Alert (Text and OK Button)
    it('JavaScript Alert - OK button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        // Trigger the alert and automatically handle it
        cy.get("button[onclick='jsAlert()']").click();

        // Cypress automatically clicks OK, but let's assert the alert's text
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('I am a JS Alert');
        });

        // Verify the result after the alert is closed
        cy.get('#result').should('have.text', 'You successfully clicked an alert');
    });

   // JavaScript Confirm Alert (OK and Cancel Buttons)
describe('JavaScript Confirm Alert - OK and Cancel buttons', () => {
    it('Handles OK in JavaScript Confirm Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        // Trigger the confirmation alert and handle the OK button
        cy.get("button[onclick='jsConfirm()']").click();
        
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('I am a JS Confirm');
            return true;  // Simulate clicking 'OK'
        });

        cy.get('#result').should('have.text', 'You clicked: Ok');
    });

    it('Handles Cancel in JavaScript Confirm Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        // Trigger the confirmation alert and handle the Cancel button
        cy.get("button[onclick='jsConfirm()']").click();
        
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('I am a JS Confirm');
            return false;  // Simulate clicking 'Cancel'
        });

        cy.get('#result').should('have.text', 'You clicked: Cancel');
    });
});


    
    // 3. JavaScript Prompt Alert (Text Input, OK Button)
    it('JavaScript Prompt Alert - Input and OK button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        // Trigger the prompt alert
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Cypress Test'); // Simulate entering text in the prompt
        });

        cy.contains('Click for JS Prompt').click();

        // Verify the result after entering text in the prompt
        cy.get('#result').should('have.text', 'You entered: Cypress Test');
    });

    // 4. Authenticated Alert (Authentication Required)
    it('Authenticated Alert', () => {
        // To handle Basic Auth in Cypress, you need to provide the credentials in the URL
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');

        // Verify the text after successful login
        cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.');
    });

});
