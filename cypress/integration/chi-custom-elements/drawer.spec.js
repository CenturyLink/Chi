/// <reference types="Cypress" />

describe('Drawer', function() {

  it('Drawer custom element should initiate a Chi drawer component. ', function() {
    cy.visit('tests/custom-elements/drawer.html');

    cy.get('[data-cy="test-top"]')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.chi-drawer.-top.-active')
      .find('.chi-drawer__header')
      .should('not.exist');
  });

  it('By default drawer custom element should include a close button. ', function() {

    cy.get('[data-cy="test-top-headed"]')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.chi-drawer.-top.-active')
      .find('.chi-drawer__header')
      .should('have.length', 1)
      .find('button.chi-btn chi-icon[icon="x"]')
      .should('exist');

  });

  it('Should not include a close button when non-closable="" attribute is present ', function() {

    cy.get('[data-cy="test-non-closable"]')
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'div.chi-drawer.-active')
      .find('button.chi-btn chi-icon[icon="x"]')
      .should('not.exist');

  });

  it('Should show a backdrop if configured to do so. ', function() {

    cy.get('[data-cy="test-backdrop-top"]')
      .should('have.class', 'hydrated')
      .children().first()
      .should('match', 'div.chi-backdrop.-animated')
      .children().first()
      .should('match', 'div.chi-backdrop__wrapper')
      .children().first()
      .should('match', 'div.chi-drawer.-top.-active');
  });

  it('Should close when clicking the close button. ', function() {

    cy.get('[data-cy="test-top-headed"]')
      .children()
      .first()
      .find('.chi-drawer__header button.chi-btn')
      .click()
      .get('[data-cy="test-top-headed"]')
      .should('not.match', '[active]')
      .should('not.be.visible');

  });

  it('Should have a title if attribute title="" is provided ', function() {

    cy.get('[data-cy="test-top-with-title"]')
      .children()
      .first()
      .find('.chi-drawer__header')
      .find('.chi-drawer__title')
      .contains('Drawer title here')
      .should('exist');

  });

  it('Should close when calling the hide method. ', function() {

    cy.get('[data-cy="test-backdrop-top-headed"]')
      .then(function(drawer){
        drawer[0].hide();
        return new Promise(resolve => resolve(drawer));
      })
      .get('[data-cy="test-backdrop-top-headed"]')
      .should('not.match', '[active]')
      .find('.chi-drawer')
      .should('not.be.visible');
  });

  it('Should show when calling the show method. ', function() {

    cy.get('[data-cy="test-backdrop-top-headed"]')
      .then(function(drawer){
        drawer[0].show();
        return new Promise(resolve => resolve(drawer));
      })
      .get('[data-cy="test-backdrop-top-headed"]')
      .should('match', '[active]')
      .find('.chi-drawer')
      .should('be.visible');

  });

  it('Should show when calling toggle method and is hidden and vice versa. ', function() {

    cy.get('[data-cy="test-backdrop-right-headed"]')
      .then(function(drawer){
        drawer[0].toggle();
        return new Promise(resolve => resolve(drawer));
      })
      .get('[data-cy="test-backdrop-right-headed"]')
      .should('not.match', '[active]')
      .find('.chi-drawer')
      .should('not.be.visible')
      .get('[data-cy="test-backdrop-right-headed"]')
      .then(function(drawer){
        drawer[0].toggle();
        return new Promise(resolve => resolve(drawer));
      })
      .get('[data-cy="test-backdrop-right-headed"')
      .should('match', '[active]')
      .find('.chi-drawer')
      .should('be.visible');

  });
});
