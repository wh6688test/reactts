/// <reference types="cypress" />
//@ts-check

describe('Input filed test without submit yet', () => {
  
  const {inputPlaceHolder, hintText, submitButton, inputBox} = {
    inputPlaceHolder: 'input[placeholder]',
    hintText:'label',
    submitButton: 'button[type="submit"]',
    inputBox: "#input",
  };

  const {errorMin, errorPattern, errorRequired}={
      errorMin: "min not satisfied",
      errorPattern: 'pattern not satisfied',
      errorRequired:'required'
  };

  const {expectedInputEnter}={
    expectedInputEnter: 'Please enter valid input',
  };

  beforeEach(() => {
    cy.visit('/')
  });

    it('initial input states', () => {
    // hints exist
    cy.get(hintText).should("have.length", 4)
        .each(($el, index, $list) => {
         expect($el.text().trim()).equal(expectedInputEnter+""+(index+1));

      });

    //submit should be greyed out initially
    cy.get(submitButton)
      .should('be.disabled');

    
    cy.get("#wform1").get("input").should("have.length", 4)
    .each(($el, index, $list) => {
       cy.wrap($el).should("have.attr", "placeholder");
    });
  });

  
  //it.only('typing in different values for input1', () => {
  it('typing in different values for input1', () => {
  
    cy.get(inputBox+'1').as('input1').type('aAB{del}{backspace}2Cd123g').should('have.value', 'aA2Cd');
  });

  it('typing in different values for input2', () => {
    
    cy.get(inputBox+'2').as('input2').type('a{leftarrow}b{rightarrow}1')
      .type('AB{del}{backspace}2Cd123g').should('have.value', 'ba1A2');
  });

  it('typing in different values for input3', () => {
    
    cy.get(inputBox+'3').as('input3').type('a{leftarrow}b{rightarrow}1')
      .type('AB{del}{backspace}2Cd123g').should('have.value', 'ba1A2Cd123g');
  });

  it('typing in different values for input4', () => {
   
    cy.get(inputBox+'4').as('input4').type('AB=12345678910').should('have.value', 'AB=12');
  });

  
  it('error logic and display for input boxes', () => {
      cy.get(inputBox+'4').as('input4').click()
      cy.get(inputBox+'1').as('input1').siblings().should("not.contain.class", 'error-center');
      cy.get(inputBox+'2').as('input2').siblings().should("not.contain.class", 'error-center');
      cy.get(inputBox+'3').as('input3').siblings().should("not.contain.class", 'error-center');
      cy.get(inputBox+'4').as('input4').siblings().should("contain.class", 'error-center');

      cy.get('@input1').click();
      cy.get('@input1').siblings()
      .should("have.class", "error-center")
      .should("contain.text", (errorRequired||errorMin||errorPattern));
      
      cy.get('@input1').type('3r--777').siblings().should('have.text', errorPattern);
      cy.get(submitButton).should('be.disabled');
      cy.get('@input1').clear().type("test1111");
     
      cy.get('@input2').siblings().should("not.contain.class", 'error-center');
      cy.get('@input2').type('1');
      cy.get('@input2').siblings().should("have.text", errorMin).should("have.class", "error-center");
      cy.get(submitButton).should('be.disabled');
      cy.get('@input2').clear().type("test2222");
      
      cy.get('@input3').click().siblings().should("have.text", errorRequired).should("have.class", "error-center");
      cy.get(submitButton).should('be.disabled');
      cy.get("@input3").clear().type("test3333");

      cy.get('@input4').click().siblings().should("have.text", errorMin).should("contain.class", 'error-center');
      cy.get(submitButton).should('be.disabled');
      cy.get('@input4').clear().type("test4444");

      cy.get(submitButton)
      .should('not.be.disabled');

      
  });

});
