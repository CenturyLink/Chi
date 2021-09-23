const TOOLTIP_CLASSES = {
  TOOLTIP_ELEMENT: 'chi-tooltip'
};
const TOOLTIP_EVENTS = {
  SHOW: 'chiTooltipShow',
  HIDE: 'chiTooltipHide',
  SHOWN: 'chiTooltipShown',
  HIDDEN: 'chiTooltipHidden'
};
const ACTIVE_CLASS = '-active';

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Tooltip', () => {
  before(() => {
    cy.visit('tests/chi-vue/tooltip.html');
  });

  describe('Base', () => {
    beforeEach(() => {
      cy.get("[data-cy='tooltip-base']")
        .children()
        .last()
        .as('tooltip');
    });

    it(`should have class ${TOOLTIP_CLASSES.TOOLTIP_ELEMENT}`, () => {
      hasClassAssertion('@tooltip', `${TOOLTIP_CLASSES.TOOLTIP_ELEMENT}`);
    });

    it(`should have top position by default`, () => {
      cy.get('@tooltip').should('have.attr', 'data-popper-placement', 'top');
    });

    it('should contain a tooltip message', () => {
      cy.get('@tooltip').should('contain', 'Your tooltip text on a button');
    });

    it(`should have class ${ACTIVE_CLASS} when the tooltip is visible`, () => {
      cy.get("[data-cy='tooltip-base'] button")
        .click()
        .then(() => {
          hasClassAssertion('@tooltip', `${ACTIVE_CLASS}`);
        });
      cy.get('h3')
        .first()
        .click({ force: true });
    });

    it(`should trigger the tooltip events`, () => {
      cy.window()
        .its('baseTooltipExample')
        .then(baseTooltipExample => {
          const component = baseTooltipExample.$refs.baseTooltipRef;
          const showSpy = cy.spy();
          const shownSpy = cy.spy();
          const hideSpy = cy.spy();
          const hiddenSpy = cy.spy();

          component.$on(`${TOOLTIP_EVENTS.SHOW}`, showSpy);
          component.$on(`${TOOLTIP_EVENTS.SHOWN}`, shownSpy);
          component.$on(`${TOOLTIP_EVENTS.HIDE}`, hideSpy);
          component.$on(`${TOOLTIP_EVENTS.HIDDEN}`, hiddenSpy);
          cy.get("[data-cy='tooltip-base'] button")
            .as('tooltipTrigger')
            .trigger('mouseenter')
            .then(() => {
              cy.wait(1000);
              cy.get('@tooltipTrigger')
                .trigger('mouseleave')
                .then(() => {
                  cy.wait(1000);
                  expect(hideSpy).to.be.calledOnce;
                  cy.get('body')
                    .click({ force: true })
                    .then(() => {
                      expect(showSpy).to.be.calledOnce;
                      expect(shownSpy).to.be.calledOnce;
                      expect(hideSpy).to.be.calledOnce;
                      expect(hiddenSpy).to.be.calledOnce;
                    });
                });
            });
        });
    });
  });

  describe('Disabled', () => {
    beforeEach(() => {
      cy.get("[data-cy='tooltip-disabled']")
        .children()
        .last()
        .as('tooltip');
    });

    it(`should have class ${TOOLTIP_CLASSES.TOOLTIP_ELEMENT}`, () => {
      hasClassAssertion('@tooltip', `${TOOLTIP_CLASSES.TOOLTIP_ELEMENT}`);
    });

    it('should contain a tooltip message', () => {
      cy.get('@tooltip').should(
        'contain',
        'Your tooltip text on a disabled button'
      );
    });

    it(`should have class ${ACTIVE_CLASS} when the tooltip is visible`, () => {
      cy.get("[data-cy='tooltip-disabled'] button")
        .click({ force: true })
        .then(() => {
          hasClassAssertion('@tooltip', `${ACTIVE_CLASS}`);
        });
    });
  });

  describe('Positioning', () => {
    const positions = ['top', 'right', 'bottom', 'left'];

    positions.forEach((position, index) => {
      it(`should have ${position} position`, () => {
        cy.get("[data-cy='tooltip-positioning']")
          .find(`.${TOOLTIP_CLASSES.TOOLTIP_ELEMENT}`)
          .eq(index)
          .should('have.attr', 'data-popper-placement', position);
      });

      it(`should have "Your ${position} tooltip text" message`, () => {
        cy.get("[data-cy='tooltip-positioning']")
          .find(`.${TOOLTIP_CLASSES.TOOLTIP_ELEMENT}`)
          .eq(index)
          .should('contain', `Your ${position} tooltip text`);
      });
    });
  });

  describe('Long Tooltips', () => {
    it('should contain a long tooltip message', () => {
      cy.get("[data-cy='tooltip-long']")
        .find(`.${TOOLTIP_CLASSES.TOOLTIP_ELEMENT}`)
        .invoke('height')
        .should('be.lessThan', 69);
      cy.get("[data-cy='tooltip-long']")
        .children()
        .last()
        .invoke('text')
        .should('have.length', 256);
    });
  });
});
