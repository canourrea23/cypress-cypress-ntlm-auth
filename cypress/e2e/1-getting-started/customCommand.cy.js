Cypress.Commands.add('createAssessment', (passCode) => {
    //let passCode;
    //access the set up assessment screen
    cy.login('clinician');
    cy.visit('/setup');
    //search for exisiting user
    cy.get('#nhsNumber').type('777 777 7777');
    cy.get('.pure-button').click();
    //complete the minimum fields to progress (the full Create an assessment test is in another test)
    cy.get('#questionnaireCode').select([1]);
    cy.get('#teamId').select([1]);
    //click on "Set up" button and wait for new page to load
    cy.intercept('POST', '/api/admin/assessments/**').as('createAssessment');
    cy.get('.button-xlarge').click();
    cy.wait('@createAssessment');
    //obtain Pass code
    cy.get('ol > :nth-child(3)').invoke('text').then(text => {
        passCode = text.slice(38, 46);
        cy.log(`The Pass code is: ${passCode}`); //What is being return here?
    });
    cy.wrap(passCode).as('pCode');
    cy.log(passCode, "before return")
    return passCode;
    })
    // And I want to use the passcode value in the test file:
    let assessmentNo, passCode;
    before('Create an assessment and obtain pass code', () => {
        cy.createAssessment(passCode);
        cy.log(passCode);
});



Cypress.Commands.add('createAssessment', (passCode) => {

    //let passCode; 
    //access the set up assessment screen
    // cy.login('clinician');
    cy.visit('https://example.cypress.io/todo');
    //search for exisiting user
    cy.get('#nhsNumber').type('777 777 7777');
    cy.get('.pure-button').click();
    //complete the minimum fields to progress (the full Create an assessment test is in another test)
    cy.get('#questionnaireCode').select([1]); 
    cy.get('#teamId').select([1]);
    //click on "Set up" button and wait for new page to load
    cy.intercept('POST', '/api/admin/assessments/**').as('createAssessment');
    cy.get('.button-xlarge').click();
    cy.wait('@createAssessment');
    //obtain Pass code
    cy.get('ol > :nth-child(3)').invoke('text').then(text => {
        passCode = text.slice(38, 46);
    
        cy.log(`The Pass code is: ${passCode}`);
    });
    cy.wrap(passCode).as('pCode');
    return passCode;
})

//   And I want to use the passcode value in the test file:



//  let assessmentNo, passCode;

// it('Calling custom command', () => {
//     // before('Create an assessment and obtain pass code', () => {

//         cy.createAssessment(passCode);
    
//         cy.log(passCode);
    
//     //   });

// })  


// Cypress.Commands.add('createAssessment', (passCode) => {

 

//     //let passCode;
  
//     //access the set up assessment screen
  
//     cy.login('clinician');
  
//     cy.visit('/setup');
  
//     //search for exisiting user
  
//     cy.get('#nhsNumber').type('777 777 7777');
  
//     cy.get('.pure-button').click();
  
//     //complete the minimum fields to progress (the full Create an assessment test is in another test)
  
//     cy.get('#questionnaireCode').select([1]);
  
//     cy.get('#teamId').select([1]);
  
//     //click on "Set up" button and wait for new page to load
  
//     cy.intercept('POST', '/api/admin/assessments/**').as('createAssessment');
  
//     cy.get('.button-xlarge').click();
  
//     cy.wait('@createAssessment');
  
//     //obtain Pass code
  
//     cy.get('ol > :nth-child(3)').invoke('text').then(text => {
  
//       passCode = text.slice(38, 46);
  
//       cy.log(`The Pass code is: ${passCode}`);
  
//     });
  
//     cy.wrap(passCode).as('pCode');
  
//     return passCode;
//     cy.log('')
  
//   })
  
   
  
   
  
//   And I want to use the passcode value in the test file:

//   let assessmentNo, passCode;

//   before('Create an assessment and obtain pass code', () => {

//     cy.createAssessment(passCode);

//     cy.log(passCode);

//   });





