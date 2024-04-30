/// <reference types="Cypress" />

describe('Label', function() {
  const labelSizes = ['-xs', '-sm', '-md', '-lg', '-xl'];

  beforeEach(() => {
    cy.visit('tests/custom-elements/label.html');
  });

  it(`Label element should have corresponding size class`, function() {
    labelSizes.forEach((s) => {
      const selector = `test-label-base${s}`;

      cy.get(`[data-cy="${selector}"]`)
        .find('label.chi-label')
        .should('have.class', s);
    });
  });

  it(`Abbr element should contain asterisk when attribute required is present`, function() {
    labelSizes.forEach((s) => {
      const selector = `test-label-required${s}`;

      cy.get(`[data-cy="${selector}"]`)
        .find('abbr')
        .contains('*');
    });
  });

  it(`Abbr element should contain asterisk when attribute optional is present`, function() {
    labelSizes.forEach((s) => {
      const selector = `test-label-optional${s}`;

      cy.get(`[data-cy="${selector}"]`)
        .find('abbr')
        .contains('(optional)');
    });
  });

  it(`Label should have info icon with deafult popover, when attribute info-icon is present`, function() {
    cy.get('[data-cy="test-label-info-icon"]').as('label');

    cy.get('@label')
      .find('chi-icon[icon="circle-info-outline"]')
      .should('exist');

    cy.get('@label')
      .find('chi-button')
      .click();

    cy.get('@label')
      .find('.chi-popover')
      .should('be.visible')
      .find('.chi-popover__text')
      .contains('Helpful information goes here.');
  });

  it(`Helper's popover should display changed message after clicking the icon, when attribute info-icon-message is provided`, function() {
    cy.get('[data-cy="test-label-info-icon-message"]').as('label');
    cy.get('@label')
      .find('chi-button')
      .click();

    cy.get('@label')
      .find('.chi-popover')
      .find('.chi-popover__text')
      .contains('Changed message');
  });
});
