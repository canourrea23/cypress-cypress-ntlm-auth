const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random])


describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://example.cypress.io/todo')
    })
  
    // let count = 0
    it('adds and completes todos', () => {

        const todoList = ["Write code", "February", "March", "April", "May", "June", "July"];
        const random = Math.floor(Math.random() * todoList.length);
        console.log(random, todoList[random])

      // cy.visit('/')
        cy.get('.new-todo')
        .type('write code{enter}')
        .type('write tests{enter}')
        .type('deploy{enter}')

        
    
      cy.get('.view').should('have.length', 5)
    
      cy.get('.view').first().find('.toggle').check()
    
      cy.get('.view').first().should('have.class', 'completed')
    })
  })