// describe('example to-do app', () => {
//     beforeEach(() => {
//       // Cypress starts out with a blank slate for each test
//       // so we must tell it to visit our website with the `cy.visit()` command.
//       // Since we want to visit the same URL at the start of all our tests,
//       // we include it in our beforeEach function so that it runs before each test
//         cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert')
//     })
//     it('visit made', () => {
//       //   cy.get('.new-todo') .then(($button) => {
//       //       return Promise.delay(1000)
//       // .type('write code{enter}')
//         cy.log('hello')
//         })
//     // })
// })

it('Handling alert in Cypress', function (){
  // launch url
  cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert");
  
  //Running the the code snippet to generate the Popup button
  // cy.get('#runbtn').click();
  
  // //Accessing the popup button iframe and clicking the popup activation button
  // // cy.xpath('//iframe[@id="iframeResult"]').its('0.contentDocument.body').then(cy.wrap).xpath('//button[text()="Try it"]').click();
  
  // //Checking the window alert text
  // cy.on('window:alert',(txt)=>{
  // //Assertion
  // expect(txt).to.contains('I am an alert box!');
  // })
  });