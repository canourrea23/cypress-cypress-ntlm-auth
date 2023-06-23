// // beforeAll('Start visit', ())

// it('run test', () => {
//     cy.viewport('macbook-11');
//     // var url = Cypress.config().baseUrl;
//     // cy.visit('https://www.cypress.io', {
//     cy.visit('/', {
//     });
// })

// it('user-agent example', () => {
//     cy.on('uncaught:exception', (err, runnable) => {
//       expect(err.message).to.include('something about the error')
  
//       // using mocha's async done callback to finish
//       // this test so we prove that an uncaught exception
//       // was thrown
//       done()
  
//       // return false to prevent the error from
//       // failing this test
//       return false
//     })
//     cy.visit('https://uat-centr.loupactive.com/');
//   })

it('Testing visit website', {retries: { runMode: 2, openMode: 2 }}, () => {
    cy.visit('https://uat-centr.loupactive.com/');
})