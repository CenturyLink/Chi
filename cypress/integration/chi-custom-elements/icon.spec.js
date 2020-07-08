/// <reference types="Cypress" />

describe('Icons', function() {

  beforeEach(()=>{
    cy.fixture('chidata.json').as('chidata');
  });

  it('Base icon should be included inside the custom element', function() {
    cy.visit('tests/custom-elements/icons.html');

    cy.get('[data-cy="icon-single"]')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.chi-icon')
      .children()
      .first()
      .should('match', 'svg');

  });

  it('Sized icons should have appropriate class', function() {

    cy.get('[data-cy="icon-size"]')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.chi-icon.-xl')
      .and('not.have.class', '-sm')
      .children()
      .first()
      .should('match', 'svg');

  });

  it('Colored icons should have appropriate class', function() {

    cy.get('[data-cy="icon-color"]')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.chi-icon.-icon--primary')
      .and('not.have.class', '-primary')
      .children()
      .first()
      .should('match', 'svg');

  });

  it('should show all the icons', function() {

    cy.get('[data-cy="icon-list"]')
      .children()
      .should('have.length', this.chidata.icons.length);
  });

});
