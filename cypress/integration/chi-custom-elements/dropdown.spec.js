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
    transform: 'translate3d(123px, 0px, 0px)',
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
  METHOD: {
    TOGGLE: {
      DROPDOWN_TOGGLE: '[data-cy="method-dropdown-toggle"]',
      TRIGGER: '#test-toggle-trigger'
    },
    SHOW: {
      DROPDOWN_SHOW: '[data-cy="method-dropdown-show"]',
      TRIGGER: '#test-show-trigger'
    },
    HIDE: {
      DROPDOWN_HIDE: '[data-cy="method-dropdown-hide"]',
      TRIGGER: '#test-hide-trigger'
    }
  }
};

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

  describe.only('Methods', () => {
    describe('Toggle', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.METHOD.TOGGLE.TRIGGER).as(
          'dropdownTrigger'
        );
        cy.get(DROPDOWN_DATA_CY.METHOD.TOGGLE.DROPDOWN_TOGGLE).find(DROPDOWN_MENU).as(
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
        cy.get(DROPDOWN_DATA_CY.METHOD.SHOW.DROPDOWN_SHOW).find(DROPDOWN_MENU).as(
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
        cy.get(DROPDOWN_DATA_CY.METHOD.HIDE.DROPDOWN_HIDE).find(DROPDOWN_MENU).as(
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
