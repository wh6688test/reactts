/// <reference types="cypress" />

import { isNull } from "cypress/types/lodash"

//@ts-check
describe('Test Body iframe', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('svg image is visible', () => {
       //make sure attachment is svg file
       cy.get('embed').then(iframe1 => {
        
        expect(iframe1.length).equal(1);
        expect(iframe1.get(0).src).contain('svg');
        expect(iframe1.get(0).title).eq('svg image');
        //add check to make sure the image is loaded
       })
  })
})

