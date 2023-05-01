// const { beforeEach } = require("mocha");

describe('login to Notessa via PIDs', {tags: ['temp']},() => {
    beforeEach(() => {
        cy.visit('https://upx-test.eu.poppulo-harmony.com/');
    })
    it('should login successfully', function () {
     cy.request('GET', 'https://platform-identity-server.eu.harmony.poppulo-app.com/ids/authorize?client_id=73145346-26af-489c-9502-06cb857cfc1e&redirect_uri=https%3A%2F%2Fupx-test-us.us.poppulo-harmony.com%2Fdashboard&response_type=code&scope=offline_access&state=5c53c77c432245b3a3122f89e23e0218&code_challenge=UetnIWCm05sytYkuNqLsUFxRE7LSFdhkWbwxULyIacA&code_challenge_method=S256&response_mode=query').as("/authorize")
      .then((resp) => {
       console.log(resp);
       console.log("RESP CODE FROM RESPONSE:");
       console.log(resp.status);
       const htmlDocument = document.createElement('html');
       htmlDocument.innerHTML = resp.body;
       const loginForm = htmlDocument.getElementsByTagName('form')[0];
       console.log(loginForm)
       // const requestVerificationToken = loginForm.elements.__RequestVerificationToken.value;
      })
     cy.intercept('**/ids/authorize**').as('idsAuthorize')
     cy.intercept('**/oauth/v2/oauth-authorize**').as('oauthAuthorize')
     cy.intercept('**/authn/authentication**').as('authnAuth')
     cy.intercept('**/authn/authentication/notessa-authenticator**').as('notessaAuth')
     cy.intercept('**/login/oauth/v2/oauth-authorize**').as('loginOauth')
     cy.intercept('**/authn/authentication/notessa-authenticator/callback**').as('notessaAuthCallback')
     cy.intercept('**/signin-poppulo**').as('signInPoppulo')
     cy.intercept('**/signin-external**').as('signInExternal')
     cy.visit('https://upx-test-us.us.poppulo-harmony.com/dashboard')
  
     cy.origin('https://platform-identity-server.eu.harmony.poppulo-app.com', () => {
      cy.wait('@idsAuthorize')
     })
  
     cy.origin('https://iam.us2.poppulo-app.com', ()=>{
      cy.wait('@oauthAuthorize')
      cy.wait('@authnAuth')
      cy.wait('@notessaAuth')
     })
     cy.get('#j_username').type('cysupport@develop.lan')
     cy.get('#j_password').type('ujn7MUJ4xed4waf*pcq')
     cy.get('#newLoginButton').click()
     cy.get('#answer').type('ujn7MUJ4xed4waf*pcq')
     cy.get('#continueButton').click()
     cy.origin('https://iam.us2.poppulo-app.com',  () => {
      cy.wait('@notessaAuthCallback')
      cy.wait('@oauthAuthorize')
     })
     cy.origin('https://platform-identity-server.eu.harmony.poppulo-app.com', () => {
      cy.wait('@signInPoppulo')
      cy.wait('@signInExternal')
      cy.wait('@idsAuthorize')
     })
     cy.findByRole('link', { name: /campaigns/i }).click()
    })
  })




// describe('testing login', () => {
//     beforeEach(() => {
//         cy.visit('https://upx-test.eu.poppulo-harmony.com/');
//     })

//   it('should login successfully', function() {
//     // cy.visit('https://upx-test.eu.poppulo-harmony.com/');
//     cy.get('#j_username').type('upx_acct_admin@autotest.newsweaver.com');
//     cy.get('#j_password').type('ytp.YGU*xbp6thd0vdc');
//     cy.get('#newLoginButton').click();
//     cy.get('#answer').type('ytp.YGU*xbp6thd0vdc');
//     cy.get('#continueButton').click();
//     cy.findByRole('link', {
//       name: /campaigns/i
//     }).click();
//   })
// })
// describe('login to Notessa via PIDs', {tags: ['temp']},() => {
//     beforeEach(() => {
//      // cy.rewriteHeaders()
//     })
//     it('should login successfully', function () {
//      cy.request('GET', 'https://platform-identity-server.eu.harmony.poppulo-app.com/ids/authorize?client_id=73145346-26af-489c-9502-06cb857cfc1e&redirect_uri=https%3A%2F%2Fupx-test-us.us.poppulo-harmony.com%2Fdashboard&response_type=code&scope=offline_access&state=5c53c77c432245b3a3122f89e23e0218&code_challenge=UetnIWCm05sytYkuNqLsUFxRE7LSFdhkWbwxULyIacA&code_challenge_method=S256&response_mode=query').as("/authorize")
//       .then((resp) => {
//        console.log(resp);
//        console.log("RESP CODE FROM RESPONSE:");
//        console.log(resp.status);
//        const htmlDocument = document.createElement('html');
//        htmlDocument.innerHTML = resp.body;
//        const loginForm = htmlDocument.getElementsByTagName('form')[0];
//        console.log(loginForm)
//        // const requestVerificationToken = loginForm.elements.__RequestVerificationToken.value;
//       })
//      cy.intercept('**/ids/authorize**').as('idsAuthorize')
//      cy.intercept('**/oauth/v2/oauth-authorize**').as('oauthAuthorize')
//      cy.intercept('**/authn/authentication**').as('authnAuth')
//      cy.intercept('**/authn/authentication/notessa-authenticator**').as('notessaAuth')
//      cy.intercept('**/login/oauth/v2/oauth-authorize**').as('loginOauth')
//      cy.intercept('**/authn/authentication/notessa-authenticator/callback**').as('notessaAuthCallback')
//      cy.intercept('**/signin-poppulo**').as('signInPoppulo')
//      cy.intercept('**/signin-external**').as('signInExternal')
//      cy.visit('https://upx-test-us.us.poppulo-harmony.com/dashboard')
  
//      cy.origin('https://platform-identity-server.eu.harmony.poppulo-app.com', () => {
//       cy.wait('@idsAuthorize')
//      })
  
//      cy.origin('https://iam.us2.poppulo-app.com', ()=>{
//       cy.wait('@oauthAuthorize')
//       cy.wait('@authnAuth')
//       cy.wait('@notessaAuth')
//      })
//      cy.get('#j_username').type('cysupport@develop.lan')
//      cy.get('#j_password').type('ujn7MUJ4xed4waf*pcq')
//      cy.get('#newLoginButton').click()
//      cy.get('#answer').type('ujn7MUJ4xed4waf*pcq')
//      cy.get('#continueButton').click()
//      cy.origin('https://iam.us2.poppulo-app.com',  () => {
//       cy.wait('@notessaAuthCallback')
//       cy.wait('@oauthAuthorize')
//      })
//      cy.origin('https://platform-identity-server.eu.harmony.poppulo-app.com', () => {
//       cy.wait('@signInPoppulo')
//       cy.wait('@signInExternal')
//       cy.wait('@idsAuthorize')
//      })
//      cy.findByRole('link', { name: /campaigns/i }).click()
//     })
//   })