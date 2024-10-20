//go cmnd
//reload cmnd
describe('Navigation command',()=>{
    it('Naviagtion test',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text',"Cameras");
        cy.go('back');
        cy.title().should('eq','Your Store');
        cy.reload();
        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text',"Cameras");

        cy.go(-1)



    })
})