/// <reference types="Cypress" />

describe('Badges', () => {

  it('Base badge should be included inside the custom element', () => {
    cy.visit('tests/custom-elements/badges.html');

    cy.get('chi-badge', { timeout: 5000 })
      .first()
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-badge');
  });

  it('Colored badge should have appropriate class', () => {
    cy.get('#badge-solid-secondary')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-badge')
      .and('have.class', '-secondary');
  });

  it('Sized badge should have appropriate class', () => {
    cy.get('#badge-xs')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-badge')
      .and('have.class', '-xs');
  });

  it('Flat badge should have appropriate class', () => {
    cy.get('#badge-flat-base')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-badge')
      .and('have.class', '-flat');
  });

  it('Outlined badge should have appropriate class', () => {
    cy.get('#badge-outline-primary')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-badge')
      .and('have.class', '-outline');
  });

  it('Icon badge should have appropriate class', () => {
    cy.get('#badge-icon-solid-base')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-badge')
      .children()
      .first()
      .should('match', 'div.a-badge__content');
  });

  it('Text transformed badge should have appropriate class', () => {
    cy.get('#badge-lowercase')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.a-badge')
      .and('have.class', '-text--lowercase');
  });
});
