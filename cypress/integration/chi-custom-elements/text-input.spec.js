const SELECTORS = {
  chi_text_input: 'chi-text-input',
  chi_helper_message: 'chi-helper-message',
  chi_icon: 'chi-icon',
  label: '.chi-label'
};
const CLASSES = {
  warning: '-warning',
  danger: '-danger',
  success: '-success'
};

describe('Text Input', () => {
  before(() => {
    cy.visit('tests/custom-elements/text-input.html');
  });

  describe('Helper Message', () => {
    beforeEach(() => {
      cy.get('.test-helper-message-md')
        .find(SELECTORS.chi_text_input)
        .as('textInput');
      cy.get('.test-helper-message-md')
        .find(SELECTORS.chi_helper_message)
        .as('helperMessage');
    });

    it('Should initiate with helper-message attribute', () => {
      cy.get('@textInput')
        .first()
        .then(textInput => {
          cy.get(textInput).should(
            'have.attr',
            'helper-message',
            'Optional input message'
          );
          cy.get(textInput)
            .find(SELECTORS.chi_helper_message)
            .should('exist');
        });
    });

    it('Should have a danger state helper message', () => {
      cy.get('@textInput')
        .eq(3)
        .then(textInput => {
          cy.get(textInput).should('have.attr', 'state', 'danger');
          cy.get(textInput)
            .find(SELECTORS.label)
            .should('have.class', CLASSES.danger);
          cy.get(textInput)
            .find(SELECTORS.chi_icon)
            .find('use')
            .should('have.attr', 'href', '#icon-circle-warning')
            .should('exist');
        });
    });
  });
});
