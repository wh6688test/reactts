/// <reference types="cypress" />
//@ts-check

describe('SubmitTest', () => {

   const {datatable1, datatitle, datarows, submitButton} = {
    datatable1: '[data-test="datatable"]',
    datatitle:'[data-test="datatable-head"]',
    datarows:'[data-test="table-body"]',
    submitButton: 'button[type="submit"]',
  };

  beforeEach(() => {
    cy.visit('/')

    // load example.json fixture file and store
    // in the test context object
    cy.fixture('groups.json').as('groups');
    cy.server();
  });

//check the service is up and running so the expected api data will be retrieved
it('verify api response groups', () => {
    cy.request(Cypress.env('apiUrl')+'/groups').then(response=> {
        expect(response.status).to.eq(200);
        const body1=response.body   
        expect(body1).to.exist;
        const values=Cypress._.entries(body1[0]);
        expect(JSON.stringify(values)).to.contain("group_attribute")
        .and.to.contain("group_id");
    });
});

 it('retrieved empty group', ()=>{
   //submit button was disabled by default
    cy.get(submitButton).should('has.attr', 'disabled');
    cy.route(
      {
      method: 'GET', 
      url:'/groups', 
      status:200,
      }).as('groups');

    cy.get('#input1').type('nonexists1');
    cy.get('#input2').type('nonexists2');
    cy.get('#input3').type('nonexists3');
    //submit button is still disabled
    cy.get(submitButton).should('has.attr', 'disabled');
    cy.get('#input4').type('nonexists4');

    cy.get(submitButton).should('not.have.attr', 'disabled');
    cy.get(submitButton).click()
    cy.wait('@groups');

    //get the page with only title info with empty data retrieved

    cy.get(datatitle).should('exist').get('th').should("have.length", 4)
    cy.get(datarows).should('contain',  'No matching records found', {matchCase:false});
    cy.get('#error').should('not.exist');
    
});

  it('verify groups data are displayed', function() {
   
     cy.fixture('groups').as('groupsResponse');
     cy.route('GET', '/groups', '@groupsResponse').as('getGroups');

    cy.get('#input1').type('muB2');
    cy.get('#input2').type('muB3');
    cy.get('#input3').type('anyother1');
    cy.get('#input4').type('anyother2');
    cy.get(submitButton).click()
    cy.wait('@getGroups');


      cy.fixture('groups').then( (groups) => {

        const group=groups[0];

        cy.get(datarows).as("datarow").should('exist');
        cy.get('@datarow').get('tr').should("have.length", groups.length+1)
        //4 columns
        cy.get('@datarow').get('td').should('exist').should("have.length",  4)
        .and('contain',group.group_id).and('contain', group.group_attribute.attr1)
        .and('contain', group.group_attribute.attr2)
        .and('contain', group.members.length);
        })
  });
});
