/*
 ASSERTION
 Implicit assertions are built into Cypress commands, and they run automatically. keyword - should , and 
      eq contain include exist have.length have.value
      not eq not contain not include
Explicit assertions require you to use assertion libraries like expect or assert for custom checks. keywordn- expcept and assert
        expect - bdd 
        assert -tdd
*/
describe("implicit assertion demo" , () =>{

    it(" Impicit assertion related test case" , ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('include','opensource-demo.orangehrmlive')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrmlive')

        // cy.url().should('include','opensource-demo.orangehrmlive')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrmlive')

        cy.url().should('include','opensource-demo.orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding').should("be.visible")
        .and('exist')

        cy.get('a').should('have.length.greaterThan', 0) // Ensure there are links
          .then(($links) => {
            // Log the number of links
            const linkCount = $links.length;
            cy.log('Number of links on the page:', linkCount);

            // Assert a specific number of links if needed
            expect(linkCount).to.equal(5); // Example: change 10 to your expected count

            cy.get("input[placeholder='Username']")
            .type('Admin')
            .should('have.value', 'Admin');
          
          cy.get("input[placeholder='Password']")
            .type('admin123')
            .should('have.value', 'admin123');
          
          cy.get("button[type='submit']").click();
        });
    }) 

    it('Explicit assertion' , ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']") .type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click();

        let expName="xyz";

        cy.get(".oxd-userdropdown-name").then( (x)=>{ 
            
            let actName=x.text()
        //BDD STYLE
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName)

        //TDD STYLE
        assert.equal(actName,expName)
        assert.notEqual(actName,expName)
        })

        
    })
})