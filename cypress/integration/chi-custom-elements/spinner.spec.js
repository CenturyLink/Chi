describe('Spinner', () => {
  it('Base spinner should be included inside the custom element', () => {
    cy.visit('tests/custom-elements/spinner.html');

    cy.get('[data-cy="spinner-md"]', { timeout: 5000 })
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'svg.a-spinner');
  });

  it('Base backdrop spinner should have appropriate class', () => {
    cy.get('[data-cy="base-backdrop-spinner"]', { timeout: 5000 })
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-backdrop')
      .and('not.have.class', '-inverse');
  });

  it('Inverse backdrop spinner should have appropriate class', () => {
    cy.get('[data-cy="inverse-backdrop-spinner"]', { timeout: 5000 })
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-backdrop')
      .and('have.class', '-inverse');
  });

  it('Colored spinner should have appropriate class', () => {
    cy.get('[data-cy="spinner-secondary"]', { timeout: 5000 })
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'svg.a-spinner.-text--secondary')
      .and('not.have.class', 'secondary');
  });

  it('Sized spinner should have appropriate class', () => {
    cy.get('[data-cy="spinner-xxl"]', { timeout: 5000 })
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'svg.a-spinner.-xxl')
      .and('not.have.class', 'xxl');
  });
});
