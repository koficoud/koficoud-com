describe('Navigation', () => {
  it('should load the index page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The index page should contain an <h1> with "KofiCoud".
    cy.get('h1').contains('Kofi Coud');
    // The index page should contain an <h2> with "Software Developer".
    cy.get('h2').contains('Software Developer');
  })
});