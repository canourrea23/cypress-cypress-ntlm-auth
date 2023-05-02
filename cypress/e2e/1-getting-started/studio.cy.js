describe('pappulo test', () => {
    beforeEach(() => {
        cy.visit('https://upx-test.eu.poppulo-harmony.com/');
    })
    it('hello', () => {

        cy.log('hello')
    })
})