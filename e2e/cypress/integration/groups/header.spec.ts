/// <reference types="cypress" />
//@ts-check

describe('Input filed test without submit yet', () => {
  
  const {hintText, submitButton, inputBox} = {
    hintText: '.hint-center',
    submitButton: 'button[data-test="button"]',
    inputBox: "#input",
  };

  const {inputPlaceHolder} = {
    inputPlaceHolder: inputBox+'.placeholder',
  };
  const {errorMin, errorPattern, required}={
      errorMin: "min not satisfied",
      errorPattern: 'pattern not satisfied',
      required:'required'
  };

  const {expectedInputEnter}={
    expectedInputEnter: 'Please enter valid input',
  };

  beforeEach(() => {
    cy.visit('/')
  });

    it('initial states', () => {
    // hints exist
    cy.get(hintText)
      .each(($el, index, $list) => {
        $el.should('have.value', expectedInputEnter);
      });

    //submit should be greyed out initially
    cy.get(submitButton)
      .should('be.disabled');

    //hints should be displayed
    cy.get(inputPlaceHolder)
      .each(($el, index, $list) => {
      $el.should('have.value', 'input'+index);
    });
    
    cy.get(inputBox).its('length').should('be', 4).filter('.active').should("have.length", 1);
  });

  it.only('typing in different values', () => {
  
    cy.get(inputBox).eq(1).as('input1').type('a{leftarrow}b{rightarrow}1')
      .type('AB{del}{backspace}2Cd123g').should('have.value', 'ba12C');
  });

  it.only('typing in different values', () => {
    
    cy.get(inputBox).find('2').as('input2').type('a{leftarrow}b{rightarrow}1')
      .type('AB{del}{backspace}2Cd123g').should('have.value', 'ba12C');
  });

  it.only('typing in different values', () => {
    
    cy.get(inputBox).find('3').as('input3').type('a{leftarrow}b{rightarrow}1')
      .type('AB{del}{backspace}2Cd123g').should('have.value', 'ba12C');
  });

  it.only('typing in different values', () => {
   
    cy.get(inputBox).eq(4).as('input4').type('a{leftarrow}b{rightarrow}1')
      .type('AB{del}{backspace}2Cd123g').should('have.value', 'ba12C');
  });

  it('error logic and display', () => {
      cy.get('@input1').type('1').should("contain", errorMin)
      .parent.should('have.class', 'needs-validation');
      cy.get('@input1').type('12--').should('contain', errorPattern)
      .clear().click().should('contain', required);
  });

  it('error logic and display', () => {
      cy.get('@input1').type('1').should("contain", errorMin)
      .parent.should('have.class', 'needs-validation');
      cy.get('@input1').type('12--').should('contain', errorPattern)
      .clear().click().should('contain', required);
  });

  it('error logic and display', () => {
      cy.get('@input1').type('1').should("contain", errorMin)
      .parent.should('have.class', 'needs-validation');
      cy.get('@input1').type('12--').should('contain', errorPattern)
      .clear().click().should('contain', required);
  });

  it('error logic and display', () => {
      cy.get('@input1').type('1').should("contain", errorMin)
      .parent.should('have.class', 'needs-validation');
      cy.get('@input1').type('12--').should('contain', errorPattern)
      .clear().click().should('contain', required);
  });

 it('.not() - remove DOM elements from set of DOM elements', () => {
    // https://on.cypress.io/not
    cy.get('.traversal-disabled .btn')
      .not('[disabled]').should('not.contain', 'Disabled')
  });


  it('.parent() - get parent DOM element from DOM elements', () => {
   
    cy.get('.traversal-mark')
      .parent().should('contain', 'Morbi leo risus')
  })

  it('.parents() - get parent DOM elements from DOM elements', () => {
    // https://on.cypress.io/parents
    cy.get('.traversal-cite')
      .parents().should('match', 'blockquote')
  })


});
