/// <reference types="Cypress" />

describe('Marketing icons', function() {

  beforeEach(()=>{
    cy.fixture('chidata.json').as('chidata');
  });

  it('Base icon should be included inside the custom element', function() {
    cy.visit('tests/custom-elements/marketing-icon.html');

    cy.get('[data-cy="marketing-icon-single"]')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.chi-marketing-icon')
      .children()
      .first()
      .should('match', 'svg');

  });

  it('Sized icons should have appropriate class', function() {

    cy.get('[data-cy="marketing-icon-size"]')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.chi-marketing-icon.-lg')
      .and('not.have.class', '-md')
      .children()
      .first()
      .should('match', 'svg');

  });

  it('should show all the icons', function() {

    cy.get('[data-cy="marketing-icon-list"]')
      .children()
      .should('have.length', this.chidata.marketingIcons.length);
  });

});
