let count = 0
it('should fail then pass', () => {
    count++
    expect(count).eq(2)
})
describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

it('testing', () => {
    cy.get('[data-testid="random-number"]') // <div>🎁</div>
    .invoke('text') // "🎁"
    .then(parseFloat) // NaN
    .should('be.gte', 1) // fails
    .and('be.lte', 10) // never evaluates
})