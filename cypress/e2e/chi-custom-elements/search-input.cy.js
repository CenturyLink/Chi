const SELECTORS = {
  AUTOCOMPLETE: '[data-cy="autocomplete"]',
  CHI_TEXT_INPUT: 'chi-search-input',
  CHI_ICON: 'chi-icon',
  LABEL: '.chi-label',
  CHI_HELPER_MESSAGE: 'chi-helper-message',
  HELPER_MESSAGE_MD: '.test-helper-message-default',
};

const CLASSES = {
  WARNING: '-warning',
  DANGER: '-danger',
  SUCCESS: '-success',
};

describe('Search input', () => {
  before(() => {
    cy.visit('tests/custom-elements/search-input.html');
  });

  describe('Autocomplete', () => {
    beforeEach(() => {
      cy.get(SELECTORS.AUTOCOMPLETE)
        .find('input')
        .as('searchInput');
      cy.get(SELECTORS.AUTOCOMPLETE)
        .find('chi-dropdown')
        .as('dropdown');
      cy.get(SELECTORS.AUTOCOMPLETE)
        .find('.chi-dropdown__menu-item')
        .as('dropdownMenuItem');
    });

    afterEach(() => {
      cy.get('@searchInput').clear();
    });

    it('Should have mode="autocomplete" attribute to enable autocomplete functionality', () => {
      cy.get(SELECTORS.AUTOCOMPLETE).should('have.attr', 'mode', 'autocomplete');
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

    it('Should be able to clear search input and filtered dropdown menu items on click close button', () => {
      cy.get('@searchInput')
        .focus()
        .type('2');

      cy.get(SELECTORS.AUTOCOMPLETE)
        .find('.chi-icon.icon-x')
        .click();

      cy.get('@dropdown').should('have.attr', 'active');
    });

    it('Should be able navigate between the menu items with keyboard arrow up and down', () => {
      cy.get('@searchInput').click();
      cy.focused()
        .type('{downArrow}{downArrow}{upArrow}')
        .then(() => {
          cy.get('@dropdownMenuItem')
            .first()
            .should('have.focus');
        });
    });
  });

  describe('Helper Message', () => {
    beforeEach(() => {
      cy.get(SELECTORS.HELPER_MESSAGE_MD)
        .find(SELECTORS.CHI_TEXT_INPUT)
        .as('searchInput');
      cy.get(SELECTORS.HELPER_MESSAGE_MD)
        .find(SELECTORS.CHI_HELPER_MESSAGE)
        .as('helperMessage');
    });

    it('Should initiate with helper-message attribute', () => {
      cy.get('@searchInput')
        .first()
        .then((searchInput) => {
          cy.get(searchInput).should('have.attr', 'helper-message', 'Helper message');
          cy.get(searchInput)
            .find(SELECTORS.CHI_HELPER_MESSAGE)
            .should('exist');
        });
    });

    it('Should have a danger state helper message', () => {
      cy.get('@searchInput')
        .eq(3)
        .then((searchInput) => {
          cy.get(searchInput).should('have.attr', 'state', 'danger');
          cy.get(searchInput)
            .find(SELECTORS.LABEL)
            .should('have.class', CLASSES.DANGER);
          cy.get(searchInput)
            .find(SELECTORS.CHI_ICON)
            .find('use')
            .should('have.attr', 'href', '#icon-circle-warning')
            .should('exist');
        });
    });
  });
});
