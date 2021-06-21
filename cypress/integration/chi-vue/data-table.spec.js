describe('Data Table', () => {
  before(() => {
    cy.visit('tests/chi-vue/data-table.html');
  });

  it('Should have class .chi-data-table', () => {
    cy.get(`[data-cy='data-table'`)
      .should('have.class', 'chi-data-table');
  });
});
