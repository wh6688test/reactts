/// <reference types="cypress" />
//@ts-check
describe('Waiting', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  

  it('Verify Body Contents', () => {

       //make sure svg image is attached
      
       cy.getByDataId("upper scroll").scrollTo("top").should("be.ok");
       cy.getByDataId("upper scroll").scrollTo("bottom").should("be.ok")
       cy.get('svg').as('img').should('have.length', 1);
       cy.get('@img1').its('title').should('have.text', "title text");
       cy.get('@img').scrollIntoView().should("be.visible")
           .should('have.class', 'btn-success')
           .and('contain', 'Changed')
           .and('have.css', 'cssProperty')
           .and("have.attr", 'attr');
       
  })
})


//add a screen shot test

