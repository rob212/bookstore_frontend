

describe('Happy Path tests', () => {
  it('displays a list of books retrieved from the API', () => {

    cy.visit('http://localhost:3000/books')
  })
})