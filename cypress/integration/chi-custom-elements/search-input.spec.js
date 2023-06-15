const SEARCH_INPUT_CY = {
  AUTOCOMPLETE: '[data-cy="autocomplete"]',
}

describe('Search input', () => {
  before(() => {
    cy.visit('tests/custom-elements/search-input.html');
  });

  describe('Autocomplete', () => {
    beforeEach(() => {
      cy.get(SEARCH_INPUT_CY.AUTOCOMPLETE)
        .find('input').as('searchInput');
      cy.get(SEARCH_INPUT_CY.AUTOCOMPLETE)
        .find('chi-dropdown').as('dropdown');
      cy.get(SEARCH_INPUT_CY.AUTOCOMPLETE)
        .find('.chi-dropdown__menu-item').as('dropdownMenuItem');
    });

    afterEach(() => {
      cy.get('@searchInput').clear();
    });

    it('Should open the dropdown', () => {
      cy.get('@searchInput').focus();

      cy.get('@dropdown').should('have.attr', 'active');
    });

    it('Should be able to filter the dropdown items while typing', () => {
      cy.get('@searchInput')
        .focus()
        .type('2');

      cy.get('@dropdownMenuItem').should('have.length', 1);
    });

    it('Should be able to select an option and fill the input with the selected item', () => {
      cy.get('@searchInput').focus();

      cy.get('@dropdownMenuItem')
        .eq(3)
        .click();

      cy.get('@searchInput').should('have.value', 'Item 4');
      cy.get('@dropdown').should('not.have.attr', 'active');
    });

    it('should be able to clear search input and filtered dropdown menu items on click close button', () => {
      cy.get('@searchInput')
        .focus()
        .type('2');

      cy.get(SEARCH_INPUT_CY.AUTOCOMPLETE)
        .find('.chi-icon.icon-x')
        .click();

      cy.get('@dropdown').should('have.attr', 'active');
    });

    it('should be able navigate between the menu items with keyboard arrow up and down', () => {
      cy.get('@searchInput')
        .focus()
        .then(($el) => {
          cy.get($el)
            .type('{downArrow}{downArrow}{upArrow}')
            .then(() => {
              cy.get('@dropdownMenuItem')
                .first()
                .should('have.focus');
          });
      })
    });
  });
})
