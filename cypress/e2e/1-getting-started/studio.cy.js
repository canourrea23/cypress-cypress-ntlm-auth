describe('pappulo test', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    })
    it('hello', () => {

        cy.log('hello')
    })
})