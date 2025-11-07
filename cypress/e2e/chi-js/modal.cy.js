describe('chi-modal', function() {
  before(() => {
    cy.visit('tests/js/modal.html');
  });

  describe('Base Modal should open and close', () => {
    it(`modal should be opened when we click launch demo modal button`, () => {
      cy.get('button#modal-trigger-1')
        .click();
      cy.get('#modal-1')
        .should('be.visible')
        .should('have.class', '-active');
    });

    it(`modal should be closed when we click close button`, () => {
      cy.get("#modal-1 button.-close")
        .click();
      cy.get("#modal-1")
        .should('not.be.visible');
    });

    it(`modal should be closed when we click cancel button`, () => {
      cy.get('button#modal-trigger-1')
        .click();
      cy.get("#modal-1-cancel")
        .click()
        .then(() => {
          cy.get("#modal-1").should('not.be.visible');
        });
    });
  });

  describe('modal should contain scroll if max height is specified', () => {
    it(`modal should be scrollable`, () => {
      cy.get('button#modal-trigger-2')
        .click();
      cy.get('#modal-2 .chi-modal__content')
        .should('have.css','overflow-y','auto');
      cy.get('#modal-2')
        .find('.-close')
        .click();
    });
  });

  describe('modal should scroll if there is long content', () => {
    it(`modal should be scrollable when long content is present`, () => {
      cy.get('button#modal-trigger-3')
        .click();
      cy.get('#modal-trigger-3 + .chi-backdrop')
        .should('have.css','overflow-y','auto');
      cy.get('#modal-3')
        .find('.-close')
        .click();
    });
  });

  describe('Test open with Enter key', () => {
    it('Press Enter key on trigger', () => {
      cy.get('button#modal-trigger-1')
        .focus()
        .type('{Enter}');
      cy.get('#modal-1')
        .should('be.visible')
        .should('have.class', '-active');
    });
    it('Press Esc key to close the modal', () => {
      cy.get('body')
        .type('{esc}');
      cy.get('#modal-1')
        .should('not.be.visible')
        .should('not.have.class', '-active');
    });
  });

  describe('Test Modal events', () => {
    const ANIMATION_DURATION = 500;

    it('Dispatches show/shown/hide/hidden and deprecated events', () => {
      cy.clock();
      cy.get('#modal-1').then($modal => {
        const show = cy.stub();
        const shown = cy.stub();
        const hide = cy.stub();
        const hidden = cy.stub();
        const showDeprecated = cy.stub();
        const hideDeprecated = cy.stub();

        $modal[0].addEventListener('chiModalShow', show);
        $modal[0].addEventListener('chiModalShown', shown);
        $modal[0].addEventListener('chiModalHide', hide);
        $modal[0].addEventListener('chiModalHidden', hidden);
        $modal[0].addEventListener('chi.modal.show', showDeprecated);
        $modal[0].addEventListener('chi.modal.hide', hideDeprecated);

        // open
        cy.get('button#modal-trigger-1')
          .click();
        cy.tick(ANIMATION_DURATION + 50);
        cy.wrap(null).then(() => {
          expect(show).to.have.been.called;
          expect(shown).to.have.been.called;
          expect(showDeprecated).to.have.been.called;
        });

        // close
        cy.get("#modal-1 button.-close")
          .click();
        cy.tick(ANIMATION_DURATION + 50);
        cy.wrap(null).then(() => {
          expect(hide).to.have.been.called;
          expect(hidden).to.have.been.called;
          expect(hideDeprecated).to.have.been.called;
        });
      });
    });
  });

  describe('Test non animated Modal', () => {
    it('Click on Modal trigger opens the Modal', () => {
      cy.get('button#modal-trigger-4')
        .click();
      cy.get('#modal-4')
        .should('not.have.class', '-animated')
        .should('have.class', '-active')
        .should('be.visible');
    });
    it('Click on X button closes the Modal', () => {
      cy.get("#modal-4 button.-close")
        .click();
      cy.get("#modal-4")
        .should('not.be.visible');
    });
  });

  describe('Test dispose method', () => {
    it('Click to run dispose method', () => {
      cy.get('#dispose-modal-button')
        .click();
    });
    it('Check that modal does not open on trigger click', () => {
      cy.get('button#modal-trigger-4')
        .click();
      cy.get('#modal-4')
        .parents('.chi-modal')
        .should('not.exist');
    });
  });
});
