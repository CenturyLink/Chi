const SELECTORS = {
  CHI_TEXT_INPUT: 'chi-text-input',
  CHI_ICON: 'chi-icon',
  LABEL: '.chi-label',
  CHI_HELPER_MESSAGE: 'chi-helper-message',
  HELPER_MESSAGE_MD: '.test-helper-message-md'
};
const CLASSES = {
  WARNING: '-warning',
  DANGER: '-danger',
  SUCCESS: '-success'
};

describe('Text Input', () => {
  before(() => {
    cy.visit('tests/custom-elements/text-input.html');
  });

  describe('Helper Message', () => {
    beforeEach(() => {
      cy.get(SELECTORS.HELPER_MESSAGE_MD)
        .find(SELECTORS.CHI_TEXT_INPUT)
        .as('textInput');
      cy.get(SELECTORS.HELPER_MESSAGE_MD)
        .find(SELECTORS.CHI_HELPER_MESSAGE)
        .as('helperMessage');
    });

    it('Should initiate with helper-message attribute', () => {
      cy.get('@textInput')
        .first()
        .then(textInput => {
          cy.get(textInput).should(
            'have.attr',
            'helper-message',
            'Optional helper message'
          );
          cy.get(textInput)
            .find(SELECTORS.CHI_HELPER_MESSAGE)
            .should('exist');
        });
    });

    it('Should have a danger state helper message', () => {
      cy.get('@textInput')
        .eq(3)
        .then(textInput => {
          cy.get(textInput).should('have.attr', 'state', 'danger');
          cy.get(textInput)
            .find(SELECTORS.LABEL)
            .should('have.class', CLASSES.DANGER);
          cy.get(textInput)
            .find(SELECTORS.CHI_ICON)
            .find('use')
            .should('have.attr', 'href', '#icon-circle-warning')
            .should('exist');
        });
    });
  });
});
