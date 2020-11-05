/// <reference types="cypress" />
//@ts-check

describe('Submitting with server reject status', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  // Manage AJAX / XHR requests in your app
it('server 400 status', ()=>{
  cy.server();
    // post : group
    cy.route(
      {
      method: 'POST', 
      url:'/group', 
      //body:  {'fixture:groupIn1.json'},
      status:400,
      response: {
        message: 'Item already exists'
      }
      }).as('postGroup');
    //obmit the fields entering
    cy.get('submit').click()
    cy.wait('@postGroup').its('status').should('be', 400);
    cy.location('pathname').should('eq', '/error.html');
    cy.get('#error').should('contain', "Itm already exists");
    
});

it('server 404 status', ()=>{
  cy.server();
    // post : group
    cy.route(
      {method:'GET', 
      url:'/group**', 
      status:404,
      response: {
        message: 'Item does not exist',
      }
    }).as('getGroup');
    //obmit the fields entering
    cy.get('retrieve').click();
    cy.get('@getGroup').its('status').should('be', 404);
    cy.location('pathname').should('eq', '/error.html');
    cy.get('#error').should('contain', "Item does not exist");
    
});

it('server 500 status', ()=>{
  cy.server();
    // get all groups
    cy.route(
      {method:'GET',
      url:'/groups/', 
      status:500,
      response: {
        message: 'general error',
      }
      }).as('allgroup');

    //click UI to have the error response
    cy.get('allgroups').click();
    cy.wait('@allgroup').its('status').should('be', 500);
    cy.location('pathname').should('eq', '/error.html');
    cy.get('#error').should('contain', "Item does not exist");
});


});