const EXPANSION_PANEL_DATA_CY = {
  BASE: {
    EXPANSION_PANEL_FIRST: '[data-cy="base-expansion-panel-1"]',
    EXPANSION_PANEL_SECOND: '[data-cy="base-expansion-panel-2"]',
    EXPANSION_PANEL_THIRD: '[data-cy="base-expansion-panel-3"]',
  },
  STATE: {
    EXPANSION_PANEL_DONE: '[data-cy="state-expansion-panel-done"]',
    EXPANSION_PANEL_ACTIVE: '[data-cy="state-expansion-panel-active"]',
    EXPANSION_PANEL_PENDING: '[data-cy="state-expansion-panel-pending"]',
  },
  NUMBER: {
    NUMBERED_EXPANSION_PANEL: '[data-cy="number-expansion-panel-numbered"]',
    NON_NUMBERED_EXPANSION_PANEL: '[data-cy="number-expansion-panel-non-numbered"]'
  },
  BORDER: {
    BORDERED_EXPANSION_PANEL: '[data-cy="border-expansion-panel-bordered"]',
    NON_BORDERED_EXPANSION_PANEL: '[data-cy="border-expansion-panel-non-bordered"]',
  },
  SLOT: {
    ACTIVE_EXPANSION_PANEL: `[data-cy="slot-expansion-panel-active"]`,
    DONE_EXPANSION_PANEL: `[data-cy="slot-expansion-panel-done"]`
  }
};
const EXPANSION_PANEL_BUTTONS = {
  NEXT_BUTTON: `[data-chi-epanel-action='next']`,
  PREVIOUS_BUTTON: `[data-chi-epanel-action='previous']`,
  CHANGE_BUTTON: `[data-chi-epanel-action='change']`
}
const ACTIVE_CLASS = '-active';
const DONE_CLASS = '-done';
const PENDING_CLASS = '-pending';
const NUMBER_CLASS = 'chi-epanel__number';
const BORDER_CLASS = '-bordered';
const SLOT_CLASS_ACTIVE = 'chi-epanel__content-active';
const SLOT_CLASS_DONE = 'done-slot';
const SLOT_CLASS_FOOTER = 'chi-epanel__footer';

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Expansion Panel', () => {
  before(() => {
    cy.visit('tests/chi-vue/expansion-panel.html');
  });

  describe('Base', () => {
    beforeEach(() => {
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).as(
        'firstExpansionPanel'
      );
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_SECOND).as(
        'secondExpansionPanel'
      );
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_THIRD).as(
        'thirdExpansionPanel'
      );
    });

    it('Should check if the first expansion panel is active', () => {
      hasClassAssertion(`@firstExpansionPanel`, ACTIVE_CLASS);
    });

    it('Should check if clicking Continue opens the next expansion panel and closes the current one', () => {
      hasClassAssertion(`@secondExpansionPanel`, PENDING_CLASS);
      cy.get(`@firstExpansionPanel`)
        .find(EXPANSION_PANEL_BUTTONS.NEXT_BUTTON)
        .click();
      hasClassAssertion(`@firstExpansionPanel`, DONE_CLASS);
      hasClassAssertion(`@secondExpansionPanel`, ACTIVE_CLASS);
    });

    it('Should check if clicking Previous opens the previous expansion panel and closes the current one', () => {
      cy.get(`@secondExpansionPanel`)
        .find(EXPANSION_PANEL_BUTTONS.PREVIOUS_BUTTON)
        .click();
      hasClassAssertion(`@firstExpansionPanel`, ACTIVE_CLASS);
      hasClassAssertion(`@secondExpansionPanel`, PENDING_CLASS);
    });

    it('Should check if clicking the Change button enables the expansion panel of the current one and closes the opened panel', () => {
      cy.get(`@firstExpansionPanel`)
        .find(EXPANSION_PANEL_BUTTONS.NEXT_BUTTON)
        .click();
      cy.get(`@firstExpansionPanel`)
        .find(EXPANSION_PANEL_BUTTONS.CHANGE_BUTTON)
        .click();
      hasClassAssertion(`@firstExpansionPanel`, ACTIVE_CLASS);
      hasClassAssertion(`@secondExpansionPanel`, PENDING_CLASS);
    });

    it('Should check if clicking the Finish button completes the selection steps of all the panels with read only state', () => {
      const selectors = [`@firstExpansionPanel`, `@secondExpansionPanel`, `@thirdExpansionPanel`];

      selectors.forEach(sel => {
        cy.get(sel)
          .find(EXPANSION_PANEL_BUTTONS.NEXT_BUTTON)
          .click();
        hasClassAssertion(sel, DONE_CLASS);
      })
    });
  });

  describe('State', () => {
    beforeEach(() => {
      cy.get(EXPANSION_PANEL_DATA_CY.STATE.EXPANSION_PANEL_DONE).as(
        'doneExpansionPanel'
      );
      cy.get(EXPANSION_PANEL_DATA_CY.STATE.EXPANSION_PANEL_ACTIVE).as(
        'activeExpansionPanel'
      );
      cy.get(EXPANSION_PANEL_DATA_CY.STATE.EXPANSION_PANEL_PENDING).as(
        'pendingExpansionPanel'
      );
    });

    it('Should check if expansion panel has state as done', () => {
      hasClassAssertion(`@doneExpansionPanel`, DONE_CLASS);
    });

    it('Should check if expansion panel has state as active', () => {
      hasClassAssertion(`@activeExpansionPanel`, ACTIVE_CLASS);
    });

    it('Should check if expansion panel has state as pending', () => {
      hasClassAssertion(`@pendingExpansionPanel`, PENDING_CLASS);
    });
  });

  describe('Number', () => {
    beforeEach(() => {
      cy.get(EXPANSION_PANEL_DATA_CY.NUMBER.NUMBERED_EXPANSION_PANEL).as(
        'numberedExpansionPanel'
      );
      cy.get(EXPANSION_PANEL_DATA_CY.NUMBER.NON_NUMBERED_EXPANSION_PANEL).as(
        'noNumberedExpansionPanel'
      );
    });

    it('Should check if expansion panel has step number', () => {
      cy.get(`@numberedExpansionPanel`)
        .find(`.${NUMBER_CLASS}`)
        .should('exist');
    });

    it('Should check if expansion panel has no step number', () => {
      cy.get(`@noNumberedExpansionPanel`)
        .find(`.${NUMBER_CLASS}`)
        .should('not.exist');
    });
  });

  describe('Border', () => {
    beforeEach(() => {
      cy.get(EXPANSION_PANEL_DATA_CY.BORDER.BORDERED_EXPANSION_PANEL).as(
        'borderedExpansionPanel'
      );
      cy.get(EXPANSION_PANEL_DATA_CY.BORDER.NON_BORDERED_EXPANSION_PANEL).as(
        'nonBorderedExpansionPanel'
      );
    });

    it('Should check if bordered expansion panel has border', () => {
      hasClassAssertion(`@borderedExpansionPanel`, BORDER_CLASS);
    });

    it('Should check if non bordered expansion panel has no border', () => {
      cy.get(`@nonBorderedExpansionPanel`)
        .should('not.have.class', BORDER_CLASS);
    });
  });

  describe('Slot', () => {
    beforeEach(() => {
      cy.get(EXPANSION_PANEL_DATA_CY.SLOT.ACTIVE_EXPANSION_PANEL).as(
        'slotActiveExpansionPanel'
      );
      cy.get(EXPANSION_PANEL_DATA_CY.SLOT.DONE_EXPANSION_PANEL).as(
        'slotDoneExpansionPanel'
      );
    });

    const slotSelectors = [
      { el: `@slotActiveExpansionPanel`, slot: 'active', class: SLOT_CLASS_ACTIVE },
      { el: `@slotDoneExpansionPanel`, slot: 'done', class: SLOT_CLASS_DONE },
      { el: `@slotActiveExpansionPanel`, slot: 'footer', class: SLOT_CLASS_FOOTER },
    ];
    const buttonsSelectors = [
      { slot: 'change', button: 'Change' },
      { slot: 'footer start', button: 'Previous' },
      { slot: 'footer end', button: 'Continue' },
    ];

    slotSelectors.forEach(sel => {
      it(`Should check if ${sel.slot} is available in the panel`, () => {
        cy.get(sel.el)
          .find(`.${sel.class}`)
          .should('exist')
          .should('be.visible');
      });
    });

    buttonsSelectors.forEach(sel => {
      it(`Should check if ${sel.slot} slot is available in the panel`, () => {
        cy.get(`@slotActiveExpansionPanel`)
          .find('button')
          .contains(sel.button)
          .should(sel.slot === 'change' ? 'not.be.visible' : 'be.visible');
      });
    });
  });
});
