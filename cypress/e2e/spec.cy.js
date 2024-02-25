describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  after(() => {
    //cy.task('sendEmail');
  });
});