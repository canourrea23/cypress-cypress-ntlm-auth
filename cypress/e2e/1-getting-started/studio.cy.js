describe('pappulo test', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    })
    it('hello', () => {

        cy.log('hello')
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('studio example ', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .view > .toggle').check();
        cy.get(':nth-child(2) > .view > .toggle').check();
        /* ==== End Cypress Studio ==== */
    });
})