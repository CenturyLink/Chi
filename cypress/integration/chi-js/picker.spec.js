const PICKER_CLASS = '.chi-picker';
const PICKER_PILL_CLASS = '-pill';

describe('Picker', function() {
  before(() => {
    cy.visit('tests/components/picker.html');
  });

  describe('Pill', () => {
    beforeEach(() => {
      cy.get('.test-type-pill-sm').as('pickerPillWrapper');
      cy.get('@pickerPillWrapper')
        .find(PICKER_CLASS)
        .as('pickerPill');
    });

    it(`Should have -pill class`, () => {
      cy.get('@pickerPillWrapper').within(() => {
        cy.get('@pickerPill').each($el => {
          cy.get($el).should('have.class', PICKER_PILL_CLASS);
        });
      });
    });

    it(`Should be able to display as checked on picker click`, () => {
      cy.get('@pickerPillWrapper').within(() => {
        cy.get('@pickerPill')
          .find('input[type="radio"]')
          .should('not.be.checked');

        cy.get('@pickerPill')
          .first()
          .click()
          .then($first => {
            cy.get($first)
              .find('input[type="radio"]')
              .should('be.checked');

            cy.get($first)
              .find('label')
              .should('have.css', 'color', 'rgb(2, 98, 185)');
          });
      });
    });
  });
});
