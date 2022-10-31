describe('My First Test', () => {
  it('Visit the Dark Puzzle', () => {
    cy.visit('https://darkpuzzle.vercel.app')
    cy.contains('Dark Puzzle').click()

    cy.url().should('include', '/tutorial')
  })
})