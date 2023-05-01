// describe('My First Test', () => {
//     beforeEach(() => {
//       const username = 'some_username';
//       const password = 'some_password';
//       cy.session(username, () => {
//         cy.visit('/en-US/home');
  
//         cy.intercept('https://online-iat.adp.com/csrf', (req) => {
//           req.on('after:response', (res) => {
//             Cypress.env(
//               'mytoken',
//               res.headers['set-cookie'][0].match(
//                 /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/
//               )[0]
//             );
//           });
//         }).as('csrf');
  
//         cy.intercept(
//           'https://online-iat.adp.com/api/sign-in-service/v1/sign-in.start',
//           (req) => {
//             req.headers['x-xsrf-token'] = Cypress.env('mytoken');
//           }
//         ).as('sign');
  
//         cy.intercept(
//           'POST',
//           'https://online-iat.adp.com/api/sign-in-service/v1/sign-in.account.identify',
//           (req) => {
//             req.headers['x-xsrf-token'] = Cypress.env('mytoken');
//           }
//         ).as('identify');
  
//         cy.intercept(
//           'POST',
//           'https://online-iat.adp.com/api/sign-in-service/v1/sign-in.challenge.respond',
//           (req) => {
//             req.headers['x-xsrf-token'] = Cypress.env('mytoken');
//           }
//         ).as('respond');
  
//         cy.get('.login-link:first').click();
  
//         cy.origin(
//           'https://online-iat.adp.com',
//           { args: { username, password } },
//           (username, password) => {
//             cy.wait(['@csrf', '@sign']);
  
//             cy.get('#login-form_username').type(`${username}{enter}`);
//             cy.wait('@identify');
//             cy.get('#login-form_password').type(`${password}{enter}`);
//             cy.wait('@respond');
//           }
//         );
  
//         cy.visit('/myapps');
//       });
//     });
  
//     it('Login', () => {
//       cy.visit('/myapps');
//     });
//   });  