"use strict";
/// <reference types="cypress" />
//@ts-check
describe('Test Foot Panel...', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('verify page footer elements and actions', () => {
        cy.getByDataId('footer_privacy_link').click().should("contain", "a");
        cy.getByDataId('footer_terms_link').click().should("contain", "a");
        cy.getByDataId('footer_reference_link').click().location('pathname').should('contain', 'my link');
        cy.url().should('include', 'some uri');
        const footNote = cy.getByDataId('footer_note');
        footNote.should('have.class', 'copy right');
        footNote.should('not.be.empty');
    });
});
