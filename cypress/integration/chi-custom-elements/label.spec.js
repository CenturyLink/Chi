/// <reference types="Cypress" />

describe('Label', function() {
  beforeEach(() => {
    cy.visit('tests/custom-elements/label.html');
  });

  it('Required Label contains asterisk. ', function() {
    cy.get('[data-cy="test-label-required"]')
      .find('abbr')
      .contains('*');
  });

  it('Optional Label contains string text. ', function() {
    cy.get('[data-cy="test-label-optional"]')
      .find('abbr')
      .contains('(optional)');
  });

  it('Class xs is present in base. ', function() {
    cy.get('[data-cy="test-label-base-xs"]')
      .find('label.chi-label')
      .should('have.class', '-xs');
  });

  it('Class sm is present in base. ', function() {
    cy.get('[data-cy="test-label-base-sm"]')
      .find('label.chi-label')
      .should('have.class', '-sm');
  });

  it('Class md is present in base. ', function() {
    cy.get('[data-cy="test-label-base-md"]')
      .find('label.chi-label')
      .should('have.class', '-md');
  });

  it('Class lg is present in base. ', function() {
    cy.get('[data-cy="test-label-base-lg"]')
      .find('label.chi-label')
      .should('have.class', '-lg');
  });

  it('Class xl is present in base. ', function() {
    cy.get('[data-cy="test-label-base-xl"]')
      .find('label.chi-label')
      .should('have.class', '-xl');
  });

  it('Class xs is present in required. ', function() {
    cy.get('[data-cy="test-label-required-xs"]')
      .find('label.chi-label')
      .should('have.class', '-xs');
  });

  it('Class sm is present in required. ', function() {
    cy.get('[data-cy="test-label-required-sm"]')
      .find('label.chi-label')
      .should('have.class', '-sm');
  });

  it('Class md is present in required. ', function() {
    cy.get('[data-cy="test-label-required-md"]')
      .find('label.chi-label')
      .should('have.class', '-md');
  });

  it('Class lg is present in required. ', function() {
    cy.get('[data-cy="test-label-required-lg"]')
      .find('label.chi-label')
      .should('have.class', '-lg');
  });

  it('Class xl is present in required. ', function() {
    cy.get('[data-cy="test-label-required-xl"]')
      .find('label.chi-label')
      .should('have.class', '-xl');
  });

  it('Class xs is present in optional. ', function() {
    cy.get('[data-cy="test-label-optional-xs"]')
      .find('label.chi-label')
      .should('have.class', '-xs');
  });

  it('Class sm is present in optional. ', function() {
    cy.get('[data-cy="test-label-optional-sm"]')
      .find('label.chi-label')
      .should('have.class', '-sm');
  });

  it('Class md is present in optional. ', function() {
    cy.get('[data-cy="test-label-optional-md"]')
      .find('label.chi-label')
      .should('have.class', '-md');
  });

  it('Class lg is present in optional. ', function() {
    cy.get('[data-cy="test-label-optional-lg"]')
      .find('label.chi-label')
      .should('have.class', '-lg');
  });

  it('Class xl is present in optional. ', function() {
    cy.get('[data-cy="test-label-optional-xl"]')
      .find('label.chi-label')
      .should('have.class', '-xl');
  });
});