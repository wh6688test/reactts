"use strict";
/// <reference types="cypress" />
//@ts-check
describe('SubmitTest', () => {
    beforeEach(() => {
        cy.visit('/');
        // load example.json fixture file and store
        // in the test context object
        cy.fixture('groups.json').as('groups');
        cy.fixture('group.json').as('group');
        cy.fixture('groupIn.json').as('groupIn');
        cy.server();
    });
    it('successfully created group', () => {
        cy.route({
            method: 'POST',
            url: '/group',
            status: 200
        }).as('postGroup');
        //obmit the fields entering
        cy.get('submit').click();
        cy.wait('@postGroup').its('status').should('eq', 200)
            .its('responseBody').should('be', '@group');
        //adding more ui verifications.
    });
    it('verify api response group', () => {
        cy.request('/group?gid=1').then(response => {
            expect(response.status).to.eq(200);
            expect(JSON.stringify(response.body).should('deep.eq', "@group"));
        });
    });
    it('successfully created group', () => {
        cy.route({
            method: 'GET',
            url: '/group?**',
            status: 200,
            response: '@group'
        }).as('getGroup');
        //obmit the fields entering
        cy.get('submit').click();
        cy.wait('@getGroup').its('status').should('eq', 200)
            .its('responseBody')
            .should('have.property', 'gid')
            .and('include', 'group data');
        //adding more UI verifications
    });
    it('verify api response groups', () => {
        cy.request('/groups').then(response => {
            expect(response.status).to.eq(200);
            expect(JSON.stringify(response.body).should('deep.eq', "@groups"));
        });
    });
    it('cy.fixture() - load a', () => {
        cy.route('GET', 'groups/*', '@groups').as('getGroups');
        cy.get('submit').click();
        cy.wait('@getGroups').its('status').should('eq', 200)
            .its('responseBody')
            .should('have.lengthOf', '@groups'.length)
            .should('deep.equal', '@groups');
        //adding more UI verifications
    });
});
