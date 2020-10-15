/// <reference types="Cypress" />

describe('Label', function () {
  const labelSizes = ['-xs', '-sm', '-md', '-lg', '-xl'];

  beforeEach(() => {
    cy.visit('tests/custom-elements/label.html');
  });

  it(`Label element should have corresponding size class`, function () {
    labelSizes.forEach(s => {
      const selector = `test-label-base${s}`;

        cy.get(`[data-cy="${selector}"]`)
          .find('label.chi-label')
          .should('have.class', s);
      });
  });
  
  it(`Abbr element should contain asterisk when attribute required is present`, function () {
    labelSizes.forEach(s => {
      const selector = `test-label-required${s}`;

        cy.get(`[data-cy="${selector}"]`)
          .find('abbr')
          .contains('*');
      });
  });
  
  it(`Abbr element should contain asterisk when attribute optional is present`, function () {
    labelSizes.forEach(s => {
      const selector = `test-label-optional${s}`;

        cy.get(`[data-cy="${selector}"]`)
          .find('abbr')
          .contains('(optional)');
      });
  });
});
