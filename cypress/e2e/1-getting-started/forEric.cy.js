describe('example to-do app', { retries: 1 }, () => {
    

        it('For loop', () => {
            for (let i = 1; i <= 10; i += 1){
                let count = 0
                cy.visit('https://example.cypress.io/todo').wait(2000)
                count++
                expect(count).eq(15)
                cy.wait(30000)
            }
        })     

        // describe('example to-do app', { retries: 1 }, () => {
        //     beforeEach(() => {
        //       for (let i = 1; i <= 10; i += 1){
        //       cy.visit('https://example.cypress.io/todo').wait(2000)
        //       }
        //     })
})