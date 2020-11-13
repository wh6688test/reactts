/// <reference types="cypress" />
//@ts-check

describe('Viewport', () => {
  beforeEach(() => {
    cy.visit("/");

  })
    //adding more meaningful tests with UI has more features
    it('changing to different view ports and reload and back and forth', () => {

    cy.viewport(320, 480)

    cy.viewport(2999, 2999)

    cy.viewport('macbook-15')
    cy.wait(100)
    cy.viewport('macbook-13')
    cy.wait(100)
    cy.viewport('macbook-11')
    cy.wait(100)
    cy.viewport('ipad-2')
    cy.wait(100)
    cy.viewport('ipad-mini')
    cy.wait(100)
    cy.viewport('iphone-6+')
    cy.wait(100)
    cy.viewport('iphone-6')
    cy.wait(100)
    cy.viewport('iphone-5')
    cy.wait(100)
    cy.viewport('iphone-4')
    cy.wait(100)
    cy.viewport('iphone-3')
    cy.wait(100)

    cy.viewport('ipad-2', 'portrait')
    cy.wait(100)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(100);

    cy.reload();
    cy.reload(true);
   
    //cy.go('back').go('forward');
    cy.getByDataId('footer_note').should('be.visible');
    //adding more verifications
    });
});
