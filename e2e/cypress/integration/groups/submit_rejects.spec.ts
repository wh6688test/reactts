/// <reference types="cypress" />
//@ts-check

describe('Submitting with server reject status', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('server 500 status', () => {

       cy.get('#error').should('not.exist');

        cy.server();
        // post : group
        cy.route(
          {
            method: 'GET',
            url: '/groups',
            status: 500,
            response: {
                message: 'Item already exists'
            },
        }).as('allGroups');

        cy.get('#wform1').submit();

        cy.wait('@allGroups');
    
        cy.get('#error').should('have.text', "Something Went Wrong");
    });

});