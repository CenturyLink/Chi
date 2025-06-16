describe('chi-expansion-panel', () => {
  before(() => {
    cy.visit('tests/js/expansion-panel.html');
  });

  const EXPECTED = {
    ACTIVE: 'active',
    DONE: 'done',
    PENDING: 'pending',
    DISABLED: 'disabled',
  };

  const CLASS_ICON = 'chi-icon -icon--success';
  const CLASS_HEADER = 'chi-epanel__header';
  const CLASS_COLLAPSE = 'chi-epanel__collapse';
  const CLASS_DONE_ONLY = '-done--only';
  const CLASS_ACTION = 'chi-epanel__action';
  const CLASS_BODY = 'chi-epanel__body';
  const CLASS_SUBTITLE = 'chi-epanel__subtitle';
  const CLASS_TEXT = 'chi-epanel__text';
  const CLASS_FOOTER = 'chi-epanel__footer';
  const BUTTON_SELECTOR = `.${CLASS_COLLAPSE} .${CLASS_BODY} .${CLASS_FOOTER} button[data-chi-epanel-action="{action}"]`;

  const SELECTOR_ICON = (n) => `#expansion-panel-${n} i.${CLASS_ICON.replace(/ /g, '.')}`;
  const SELECTOR_HEADER_CONTENT = (n) => `#expansion-panel-${n} .${CLASS_HEADER} .${CLASS_DONE_ONLY}`;
  const SELECTOR_HEADER_ACTION = (n) => `#expansion-panel-${n} .${CLASS_ACTION}.${CLASS_DONE_ONLY}`;
  const SELECTOR_CONTENT_SUBTITLE = (n) => `#expansion-panel-${n} .${CLASS_COLLAPSE} .${CLASS_BODY} .${CLASS_SUBTITLE}`;
  const SELECTOR_CONTENT_TEXT = (n) => `#expansion-panel-${n} .${CLASS_COLLAPSE} .${CLASS_BODY} p.${CLASS_TEXT}`;
  const SELECTOR_CONTENT_FOOTER = (n) => `#expansion-panel-${n} .${CLASS_COLLAPSE} .${CLASS_BODY} .${CLASS_FOOTER}`;

  const panel = {
    icon: (n) => cy.get(SELECTOR_ICON(n)),
    headerContent: (n) => cy.get(SELECTOR_HEADER_CONTENT(n)),
    headerAction: (n) => cy.get(SELECTOR_HEADER_ACTION(n)),
    contentSubtitle: (n) => cy.get(SELECTOR_CONTENT_SUBTITLE(n)),
    contentText: (n) => cy.get(SELECTOR_CONTENT_TEXT(n)),
    contentFooter: (n) => cy.get(SELECTOR_CONTENT_FOOTER(n)),
  };

  const clickButton = (panelNumber, action) => {
    const selector = `#expansion-panel-${panelNumber} ${BUTTON_SELECTOR.replace('{action}', action)}`;
    return cy.get(selector).click();
  };

  const checkPanelElements = (panelNumber, visibilityArray) => {
    [
      panel.icon,
      panel.headerContent,
      panel.headerAction,
      panel.contentSubtitle,
      panel.contentText,
      panel.contentFooter,
    ].forEach((fn, idx) => {
      fn(panelNumber).should(visibilityArray[idx] ? 'be.visible' : 'not.be.visible');
    });
  };

  describe('Should render proper elements for each state', () => {
    it('Should display elements according to the state', () => {
      checkPanelElements(1, [true, true, true, false, false, false]);
      checkPanelElements(2, [false, false, false, true, true, true]);
      checkPanelElements(3, [false, false, false, false, false, false]);
      checkPanelElements(4, [false, false, false, false, false, false]);
    });
  });

  describe('Should navigate the panels with buttons', () => {
    beforeEach(() => {
      cy.reload();
    });

    it('Should change the state from active to done on clicking continue', () => {
      cy.get('#expansion-panel-2').should('have.class', '-active');
      clickButton(2, 'next');
      cy.get('#expansion-panel-2').should('have.class', '-done');
      panel.icon(2).should('be.visible');
      panel.headerContent(2).should('be.visible');
      panel.headerAction(2).should('be.visible');
    });

    it('Should change the state from pending to active on clicking continue', () => {
      cy.get('#expansion-panel-3').should('have.class', '-pending');
      clickButton(2, 'next');
      cy.get('#expansion-panel-3').should('have.class', '-active');
      panel.contentText(3).should('be.visible');
      panel.contentFooter(3).should('be.visible');
    });

    it('Should change the state from done to active on clicking previous', () => {
      cy.get('#expansion-panel-2').should('have.class', '-active');
      clickButton(2, 'previous');
      cy.get('#expansion-panel-2').should('not.have.class', '-pending');
      cy.get('#expansion-panel-1').should('have.class', '-active');
    });

    it('Should omit the done panel if next is clicked, and follow to next pending panel', () => {
      cy.get('#expansion-panel-1').should('have.class', '-done');
      cy.get('#expansion-panel-2').should('have.class', '-active');
      cy.get('#expansion-panel-3').should('have.class', '-pending');

      clickButton(2, 'next');

      cy.get('#expansion-panel-1').should('have.class', '-done');
      cy.get('#expansion-panel-2').should('have.class', '-done');
      cy.get('#expansion-panel-3').should('have.class', '-active');

      clickButton(3, 'previous');
      clickButton(2, 'previous');

      cy.get('#expansion-panel-1').should('have.class', '-active');
      cy.get('#expansion-panel-2').should('have.class', '-done');
      cy.get('#expansion-panel-3').should('not.have.class', '-done').should('not.have.class', '-active');

      clickButton(1, 'next');

      cy.get('#expansion-panel-1').should('have.class', '-done');
      cy.get('#expansion-panel-2').should('have.class', '-done');
      cy.get('#expansion-panel-3').should('have.class', '-active');
    });

    it('Should maintain the done state when action next was clicked', () => {
      cy.get('#expansion-panel-2').should('have.class', '-active');
      clickButton(2, 'next');
      cy.get('#expansion-panel-2').should('have.class', '-done');
      clickButton(3, 'previous');
      clickButton(2, 'previous');
      cy.get('#expansion-panel-2').should('have.class', '-done');
    });
  });

  describe('Expansion Panel Group deletion', () => {
    it('Should register and execute built-in actions correctly', () => {
      cy.window().then((win) => {
        const ep = win.expansionPanelExample.find((e) => e._elem.id === 'expansion-panel-3');
        expect(ep, 'found panel #2').to.exist;

        cy.stub(ep, 'setState').as('setState');

        ep._actions.active(ep);
        ep._actions.done(ep);
        ep._actions.pending(ep);
        ep._actions.disabled(ep);
      });

      cy.get('@setState').should((stub) => {
        expect(stub.callCount).to.equal(4);
        expect(stub.getCall(0).args[0]).to.equal(EXPECTED.ACTIVE);
        expect(stub.getCall(1).args[0]).to.equal(EXPECTED.DONE);
        expect(stub.getCall(2).args[0]).to.equal(EXPECTED.PENDING);
        expect(stub.getCall(3).args[0]).to.equal(EXPECTED.DISABLED);
      });
    });

    it('Should toggle flips between PENDING and ACTIVE', () => {
      cy.window().then((win) => {
        const ep = win.expansionPanelExample.find((e) => e._elem.id === 'expansion-panel-2');

        cy.stub(ep, 'setState').as('setState');

        ep._state = 'pending';
        ep._actions.toggle(ep);
        cy.get('@setState').should('have.been.calledWith', 'active');
      });
    });

    it('Should remove the panel from its group and unregisters its listener', () => {
      cy.window().then((win) => {
        const ep = win.expansionPanelExample.find((e) => e._elem.id === 'expansion-panel-3');
        const group = ep._epGroup;

        cy.spy(ep, 'removeStateChangeListener').as('removeListener');

        expect(group.expansion_panels).to.include(ep);
        const origLength = group.expansion_panels.length;

        group.delete(ep);

        expect(group.expansion_panels).to.not.include(ep);
        expect(group.expansion_panels).to.have.length(origLength - 1);

        cy.get('@removeListener').should('have.been.calledWith', group.epChangedListener);
      });
    });

    it('Should call dispose on epGroup and null out all internals', () => {
      cy.window()
        .its('expansionPanelExample')
        .then((instances) => {
          const ep2 = instances.find((ep) => ep._elem.id === 'expansion-panel-2');

          const deleteSpy = cy.spy();
          ep2._epGroup = { delete: deleteSpy };

          ep2.dispose();

          cy.wrap(deleteSpy).should('have.been.calledWith', ep2);
          cy.wrap(ep2._elem).should('be.null');
        });
    });
  });
});
