describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo')
    })
    it('displays two todo items by default', () => {
      cy.log('Did it work')
    })
  })