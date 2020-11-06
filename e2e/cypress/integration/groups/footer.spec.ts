/// <reference types="cypress" />
//@ts-check

describe('Test Foot Panel...', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  //simple test to check links are clickable
  it('verify page footer elements and actions', () => {
    
    cy.getByDataId('footer_privacy_link').click();
    cy.url().should("include", "/privacy");
    cy.getByDataId('footer_terms_link').click();
    cy.url().should("include", "/terms");
    cy.getByDataId('footer_reference_link').click();
    cy.should("have.attr", "href").and("include", "#link");
    const footNote=cy.getByDataId('footer_note')
    footNote.should('not.be.empty').and('have.class', 'copyright');
  });
})
