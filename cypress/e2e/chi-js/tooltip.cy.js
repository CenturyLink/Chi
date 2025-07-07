describe('chi-tooltip', function () {
  before(() => {
    cy.visit('tests/js/tooltip.html');
  });

  describe('Tooltip should be rendered correctly', () => {
    beforeEach(() => {
      cy.get('.chi-tooltip').as('tooltip');
      cy.get('#tooltip-example').as('button');
    });

    it(`Should show/hide tooltip on hovering the trigger button`, () => {
      cy.get('@button').should('exist').trigger('mouseenter');
      cy.get('@tooltip').should('be.visible');
      cy.get('@button').should('exist').trigger('mouseleave');
      cy.get('@tooltip').should('not.be.visible');
    });

    it(`Should show/hide tooltip on focusing the trigger button`, () => {
      cy.get('@button').focus().trigger('keyup', { keyCode: 9, which: 9 });
      cy.get('@tooltip').should('be.visible');
      cy.get('@button').trigger('blur');
      cy.get('@tooltip').should('not.be.visible');
    });
  });

  describe('Tooltip internal functions should work correctly', () => {
    it('should call popper.destroy and null out all internals on dispose()', () => {
      cy.window()
        .its('tooltipBase')
        .then((inst) => {
          cy.spy(inst._popper, 'destroy').as('spyDestroyPopper');
          cy.spy(inst, '_removeEventHandlers').as('spyRemoveHandlers');

          inst.dispose();

          cy.get('@spyDestroyPopper').should('have.been.called');
          cy.get('@spyRemoveHandlers').should('have.been.called');

          expect(inst._tooltipElem).to.be.null;
          expect(inst._tooltipContent).to.be.null;
          expect(inst._config).to.be.null;
          expect(inst._popperData).to.be.null;
          expect(inst._preAnimationTransformStyle).to.be.null;
          expect(inst._postAnimationTransformStyle).to.be.null;
          expect(inst._elem).to.be.null;
        });
    });
  });
});
