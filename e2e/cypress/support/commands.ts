// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
//<reference types="cypress"/>
//@ts-check

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "@testing-library/cypress";
declare global {
  namespace Cypress {

    interface Chainable {
     /**
       * @returns {typeof }
       * @memberof Cypress.Chainable
       * @example
       ```
        cy.getByDataId("myselector")
       ```
       */
      getByDataId: (selector: string, args?:[]) => HTMLElement;
    }
  }
};
Cypress.Commands.add("getByDataId", (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args);
  }
);





