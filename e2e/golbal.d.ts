/// <reference types="cypress"/>

declare namespace Cypress {

   interface Chainable {

	   getByDataId(attribute : string, args?: any): Chainable<Element>; 

   }
}
