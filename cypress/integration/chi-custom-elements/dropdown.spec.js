const positions = [
  {
    placement:'top',
    transform: 'translate3d(-21px, -80px, 0px)',
  },
  {
    placement:'right',
    transform: 'translate3d(86px, -20px, 0px)',
  },
  {
    placement:'bottom',
    transform: 'translate3d(-7px, 40px, 0px)',
  },
  {
    placement:'left',
    transform: 'translate3d(-117px, -20px, 0px)',
  },
  {
    placement:'top-start',
    transform: 'translate3d(0px, -80px, 0px)',
  },
  {
    placement:'top-end',
    transform: 'translate3d(-8px, -80px, 0px)',
  },
  {
    placement:'right-start',
    transform: 'translate3d(124px, 0px, 0px)',
  },
  {
    placement:'right-end',
    transform: 'translate3d(118px, -40px, 0px)',
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
    transform: 'translate3d(-117px, 0px, 0px)',
  },
  {
    placement:'left-end',
    transform: 'translate3d(-117px, -40px, 0px)',
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
  },
  METHOD: {
    TOGGLE: {
      EXPANSION_PANEL: '[data-cy="method-dropdown-toggle"]',
      TRIGGER: '#test-toggle-trigger'
    },
    SHOW: {
      EXPANSION_PANEL: '[data-cy="method-dropdown-show"]',
      TRIGGER: '#test-show-trigger'
    },
    HIDE: {
      EXPANSION_PANEL: '[data-cy="method-dropdown-hide"]',
      TRIGGER: '#test-hide-trigger'
    }
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

  describe.only('Animate', () => {
    beforeEach(() => {
      cy.get(DROPDOWN_DATA_CY.ANIMATE).find(DROPDOWN_TRIGGER).as(
        'dropdownTrigger'
      );
      cy.get(DROPDOWN_DATA_CY.ANIMATE).find(DROPDOWN_MENU).as(
        'dropdownMenu'
      );
    });

    it('Should transform the accordion when dropdown is in active or inactive state', () => {
      cy.get(`@dropdownTrigger`)
        .find(`.${ACTIVE_CLASS}`)
        .should('not.exist');

      cy.get('@dropdownTrigger').click().wait(500)
      .then($els => {
        hasClassAssertion('@dropdownTrigger', ACTIVE_CLASS);
        cy.get(`@dropdownMenu`).should('be.visible');
        const win = $els[0].ownerDocument.defaultView;
        const after = win.getComputedStyle($els[0], ':after');
        const tr = after.transform;
        const values = tr.split('(')[1].split(')')[0].split(',');
        const a = values[0];
        const b = values[1];
        const angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        expect(angle).to.equal(180);
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

  describe.only('Methods', () => {
    describe('Toggle', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.METHOD.TOGGLE.TRIGGER).as(
          'dropdownTrigger'
        );
        cy.get(DROPDOWN_DATA_CY.METHOD.TOGGLE.EXPANSION_PANEL).find(DROPDOWN_MENU).as(
          'dropdownMenu'
        );
      });
      it('Should toggle the dropdown', () => {
        cy.get(`@dropdownMenu`)
          .should('not.be.visible');
        cy.get(`@dropdownTrigger`).click();
        cy.get(`@dropdownMenu`)
          .should('be.visible');
        cy.get(`@dropdownTrigger`).click();
        cy.get(`@dropdownMenu`)
          .should('not.be.visible');
      });
    });

    describe('Show', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.METHOD.SHOW.TRIGGER).as(
          'dropdownTrigger'
        );
        cy.get(DROPDOWN_DATA_CY.METHOD.SHOW.EXPANSION_PANEL).find(DROPDOWN_MENU).as(
          'dropdownMenu'
        );
      });
      it('Should always show the dropdown menu once opened', () => {
        cy.get(`@dropdownMenu`)
          .should('not.be.visible');
        cy.get(`@dropdownTrigger`).click();
        cy.get(`@dropdownMenu`)
          .should('be.visible');
        cy.get(`@dropdownTrigger`).click();
        cy.get(`@dropdownMenu`)
          .should('be.visible');
      });
    });

    describe('Hide', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.METHOD.HIDE.TRIGGER).as(
          'dropdownTrigger'
        );
        cy.get(DROPDOWN_DATA_CY.METHOD.HIDE.EXPANSION_PANEL).find(DROPDOWN_MENU).as(
          'dropdownMenu'
        );
      });
      it('Should always hide the dropdown menu once it has been opened and closed', () => {
        cy.get(`@dropdownMenu`)
          .should('be.visible');
        cy.get(`@dropdownTrigger`).click();
        cy.get(`@dropdownMenu`)
          .should('not.be.visible');
        cy.get(`@dropdownTrigger`).click();
        cy.get(`@dropdownMenu`)
          .should('not.be.visible');
      });
    });
  });
});
