describe('My First Test', () => {
  it('Visit the Dark Puzzle', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Dark Puzzle').click()

    cy.url().should('include', '/tutorial')

    cy.get('#buttonPassword').click()
    cy.get('#password').type('2').should('have.value', '2')
  })
})