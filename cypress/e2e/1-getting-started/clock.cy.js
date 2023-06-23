it('clock test, what do you do?!', () => {
    const now = new Date(2021, 3, 14) // month is 0-indexed

    cy.clock(Date.UTC(2018, 10, 30), ['Date'])
    cy.visit('www.hellofresh.com')
    // cy.get('#date').should('have.value', '04/14/2021')
    cy.log(Date.UTC(2018, 10, 30), ['Date'])
})


