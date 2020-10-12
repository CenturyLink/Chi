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

  const labelSizes = [
    'test-label-base-xs',
    'test-label-base-sm',
    'test-label-base-md',
    'test-label-base-lg',
    'test-label-base-xl',
    'test-label-required-xs',
    'test-label-required-sm',
    'test-label-required-md',
    'test-label-required-lg',
    'test-label-required-xl',
    'test-label-optional-xs',
    'test-label-optional-sm',
    'test-label-optional-md',
    'test-label-optional-lg',
    'test-label-optional-xl'
  ];

    beforeEach(() => {
      labelSizes.forEach(s => {
        cy.get(`[data-cy=${s}]`, { timeout: 5000 })
          .find('label.chi-label')
          .should('have.class', 'chi-label')
          .as(s);
      });
    });
});
