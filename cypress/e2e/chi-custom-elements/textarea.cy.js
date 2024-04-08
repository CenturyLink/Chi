const SELECTORS = {
  CHI_TEXTAREA: 'chi-textarea',
  COPY_TEXT_BUTTON: 'chi-copy-text .chi-button',
};

describe('Textarea', () => {
  before(() => {
    cy.visit('tests/custom-elements/textarea.html');
  });

  describe('Copy text button', () => {
    it('Should update the value to copy and copy to clipboard', () => {
      const newInputValue = 'This should be updated';

      cy.get('.test-copy-text-button-xs')
        .find(SELECTORS.CHI_TEXTAREA)
        .eq('0')
        .as('chiTextarea');

      cy.get('@chiTextarea')
        .scrollIntoView()
        .find('textarea')
        .clear()
        .type(newInputValue);

      cy.get('@chiTextarea')
        .find(SELECTORS.COPY_TEXT_BUTTON)
        .click();

      cy.window().then((win) => {
        win.navigator.clipboard.readText().then((text) => {
          expect(text).to.eq(newInputValue);
        });
      });
    });
  });
});
