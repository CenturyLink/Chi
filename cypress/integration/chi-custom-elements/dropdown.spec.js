const positions = [
  {
    placement:'top',
    transform: 'translate3d(-20px, -80px, 0px)',
  },
  {
    placement:'right',
    transform: 'translate3d(84px, -20px, 0px)',
  },
  {
    placement:'bottom',
    transform: 'translate3d(-7px, 40px, 0px)',
  },
  {
    placement:'left',
    transform: 'translate3d(-114px, -20px, 0px)',
  },
  {
    placement:'top-start',
    transform: 'translate3d(0px, -80px, 0px)',
  },
  {
    placement:'top-end',
    transform: 'translate3d(-7px, -80px, 0px)',
  },
  {
    placement:'right-start',
    transform: 'translate3d(122px, 0px, 0px)',
  },
  {
    placement:'right-end',
    transform: 'translate3d(116px, -40px, 0px)',
  },
  {
    placement:'bottom-start',
    transform: 'translate3d(0px, 40px, 0px)',
  },
  {
    placement:'bottom-end',
    transform: 'translate3d(0px, 40px, 0px)',
  },
  {
    placement:'left-start',
    transform: 'translate3d(-114px, 0px, 0px)',
  },
  {
    placement:'left-end',
    transform: 'translate3d(-114px, -40px, 0px)',
  },
];
const DROPDOWN_DATA_CY = {
  BASE: '[data-cy="base-dropdown"]',
  HOVER: '[data-cy="hover-dropdown"]',
  ANIMATE: '[data-cy="animate-dropdown"]',
  POSITION: positions.map((position) => {
    return {
      selector: `[data-cy="position-dropdown-${position.placement}"]`,
      placement: position.placement,
      transform: position.transform
    };
  }),
  // POSITION: [positions.map((position) => `[data-cy="position-dropdown-${position}"]`)],
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
const DROPDOWN_TRIGGER = '.chi-button.chi-dropdown__trigger';
const DROPDOWN_MENU = '.chi-dropdown__menu';
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

describe('Dropdown', () => {
  before(() => {
    cy.visit('tests/custom-elements/dropdown.html');
  });

  describe.only('Base', () => {
    beforeEach(() => {
      cy.get(DROPDOWN_DATA_CY.BASE).find(DROPDOWN_TRIGGER).as(
        'dropdownTrigger'
      );
      cy.get(DROPDOWN_DATA_CY.BASE).find(DROPDOWN_MENU).as(
        'dropdownMenu'
      );
    });

    it.only('Should open the dropdown', () => {
      cy.get(`@dropdownMenu`)
        .should('not.be.visible');
      cy.get(`@dropdownTrigger`).click();
      cy.get(`@dropdownMenu`)
        .should('be.visible');
    });

    it.only('Should close the dropdown', () => {
      cy.get(`@dropdownMenu`)
        .should('be.visible');
      cy.get(`@dropdownTrigger`).click();
      cy.get(`@dropdownMenu`)
        .should('not.be.visible');
    });
  });

  describe('Hover', () => {
    beforeEach(() => {
      cy.get(DROPDOWN_DATA_CY.HOVER).find(DROPDOWN_TRIGGER).as(
        'dropdownTrigger'
      );
      cy.get(DROPDOWN_DATA_CY.HOVER).find(DROPDOWN_MENU).as(
        'dropdownMenu'
      );
    });

    it('Should open the dropdown upon hover', () => {
      cy.get(`@dropdownMenu`)
        .should('not.be.visible');
      cy.get(`@dropdownTrigger`).trigger('mouseover');
      cy.get(`@dropdownMenu`)
        .should('be.visible');
    });

    it('Should close the dropdown when not in hover state', () => {
      cy.get(`@dropdownMenu`)
        .should('be.visible');
      cy.get(`@dropdownTrigger`).click();
      cy.get(`@dropdownMenu`)
        .should('not.be.visible');
    });
  });

  describe('Animate', () => {
    beforeEach(() => {
      cy.get(DROPDOWN_DATA_CY.ANIMATE).find(DROPDOWN_TRIGGER).as(
        'dropdownTrigger'
      );
      cy.get(DROPDOWN_DATA_CY.ANIMATE).find(DROPDOWN_MENU).as(
        'dropdownMenu'
      );
    });

    it('Should have class active with transform when chevron is active', () => {
      cy.get(`@dropdownTrigger`)
        .find(`.${ACTIVE_CLASS}`)
        .should('not.exist');
      cy.get(`@dropdownTrigger`).click();
      hasClassAssertion('@dropdownTrigger', ACTIVE_CLASS);
      cy.get(`@dropdownMenu`)
        .should('be.visible');

      cy.get('@dropdownTrigger')
      .then($els => {
        // get Window reference from element
        const win = $els[0].ownerDocument.defaultView
        // use getComputedStyle to read the pseudo selector
        const after = win.getComputedStyle($els[0], ':after')
        // read the value of the `content` CSS property
        const transformValue = after.transform;
        // the returned value will have double quotes around it, but this is correct
        expect(transformValue).to.eq('"\e91e"')
      });
    });
  });

  describe.only('Position', () => {

    DROPDOWN_DATA_CY.POSITION.forEach((position) => {
      it.only(`Should be placed to the position ${position.placement}`, () => {
        cy.get(position.selector).click();
        cy.get(position.selector).find(DROPDOWN_MENU)
          .scrollIntoView({ offset: { top: -150, left: 0 } })
          .should('have.attr', 'style')
          .should('contain', `transform: ${position.transform}`);
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
