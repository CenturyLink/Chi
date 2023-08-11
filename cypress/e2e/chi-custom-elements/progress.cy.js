describe('Progress', () => {
  const selectors = [
    'progress-50-default-max-100',
    'progress-50-danger-max-200'
  ];

  before(() => {
    cy.visit('tests/custom-elements/progress.html');
  });

  beforeEach(() => {
    selectors.forEach(s => {
      cy.get(`[data-cy=${s}]`, { timeout: 5000 })
        .should('have.class', 'hydrated')
        .children()
        .should('match', 'progress')
        .as(s);
    });
  });

  it('Progress should be included inside the custom element', () => {
    cy.get('@progress-50-default-max-100');
  });

  it('Progress state should have appropriate class for state', () => {
    cy.get('@progress-50-danger-max-200').should('have.class', '-danger');
  });
});
