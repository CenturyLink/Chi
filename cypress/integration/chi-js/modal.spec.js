describe('chi-modal', function() {
  before(() => {
    cy.visit('tests/js/modal.html');
  });

  describe('Base Modal should open and close', () => {
    it(`modal should be opened when we click launch demo modal button`, () => {
      cy.get('button#modal-trigger-1')
        .click()
        .parent()
        .find('#modal-1')
        .should('be.visible')
        .should('have.class', '-active');
    });

    it(`modal should be closed when we click close button`, () => {
      cy.get("#modal-1 button.-close")
        .click()
      cy.get("#modal-1").should('not.be.visible');
    });

    it(`modal should be closed when we click cancel button`, () => {
      cy.get('button#modal-trigger-1')
        .click();
      cy.get("#modal-1-cancel")
        .click()
      cy.get("#modal-1-cancel").should('not.be.visible');
    });
  });

  describe('modal should contain scroll if max height is specified', () => {
    it(`modal should be scrollable`, () => {
      cy.get('button#modal-trigger-3')
        .click();
      cy.get('#modal-3 .chi-modal__content')
        .should('have.css','overflow-y','auto');
      cy.get('#modal-3')
        .find('.-close')
        .click();
    });
  });

  describe('modal should scroll if there is long content', () => {
    it(`modal should be scrollable when long content is present`, () => {
      cy.get('button#modal-trigger-4')
        .click();
      cy.get('#modal-trigger-4 + .chi-backdrop')
        .should('have.css','overflow-y','auto');
      cy.get('#modal-4')
        .find('.-close')
        .click();
    });
  });
});
