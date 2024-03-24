describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://127.0.0.1:89/')

   /// cy.contains('Please fill out this field')

    // Should be on a new URL which
    // includes '/commands/actions'
    

    // Get an input, type into it
    cy.get('#username').type('ethan')

    cy.contains('Start Game').click()

    cy.get('#user-selection').select('Paper')

    cy.contains('Go!').click()

    cy.get('#game-history').contains('ethan')

    cy.get('#game-history').should('have.length', 1)

    //  Verify that the value has been updated
    ///cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})