const positions = [
  {
    placement: 'top',
    transform: 'translate3d(-21px, -80px, 0px)'
  },
  {
    placement: 'right',
    transform: 'translate3d(86px, -20px, 0px)'
  },
  {
    placement: 'bottom',
    transform: 'translate3d(-7px, 40px, 0px)'
  },
  {
    placement: 'left',
    transform: 'translate3d(-118px, -20px, 0px)'
  },
  {
    placement: 'top-start',
    transform: 'translate3d(0px, -80px, 0px)'
  },
  {
    placement: 'top-end',
    transform: 'translate3d(-9px, -80px, 0px)'
  },
  {
    placement: 'right-start',
    transform: 'translate3d(124px, 0px, 0px)'
  },
  {
    placement: 'right-end',
    transform: 'translate3d(118px, -40px, 0px)'
  },
  {
    placement: 'bottom-start',
    transform: 'translate3d(0px, 40px, 0px)'
  },
  {
    placement: 'bottom-end',
    transform: 'translate3d(0px, 40px, 0px)'
  },
  {
    placement: 'left-start',
    transform: 'translate3d(-117px, 0px, 0px)'
  },
  {
    placement: 'left-end',
    transform: 'translate3d(-117px, -40px, 0px)'
  }
];
const DROPDOWN_DATA_CY = {
  BASE: '[data-cy="base-dropdown"]',
  HOVER: '[data-cy="hover-dropdown"]',
  ANIMATE: '[data-cy="animate-dropdown"]',
  VISIBLE_ITEMS: '[data-cy="visible-items-dropdown"]',
  FONT_WEIGHT: '[data-cy="font-weight-dropdown"]',
  DYNAMIC: '[data-cy="dynamic-dropdown"]',
  RETAIN_SELECTION: '[data-cy="retain-selection-dropdown"]',
  ICON: '[data-cy="icon-dropdown"]',
  POSITION: positions.map(position => {
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
  },
  EVENT: {
    SHOW: '[data-cy="event-dropdown-show"]',
    HIDE: '[data-cy="event-dropdown-hide"]',
    KEYDOWN: '[data-cy="event-dropdown-keydown"]',
    ITEM_SELECTED: '[data-cy="event-dropdown-item-selected"]'
  }
};
const DROPDOWN_TRIGGER = '.chi-button.chi-dropdown__trigger';
const DROPDOWN_MENU = '.chi-dropdown__menu';
const DROPDOWN_ICON = '.chi-dropdown__icon';
const DROPDOWN_MENU_ITEM = '.chi-dropdown__menu-item';
const ACTIVE_CLASS = '-active';

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Dropdown', () => {
  before(() => {
    cy.visit('tests/custom-elements/dropdown.html');
  });

  describe('Base', () => {
    beforeEach(() => {
      cy.get(DROPDOWN_DATA_CY.BASE)
        .find(DROPDOWN_TRIGGER)
        .as('dropdownTrigger');
      cy.get(DROPDOWN_DATA_CY.BASE)
        .find(DROPDOWN_MENU)
        .as('dropdownMenu');
    });

    it('Should open the dropdown', () => {
      cy.get(`@dropdownMenu`).should('not.be.visible');
      cy.get(`@dropdownTrigger`).click();
      cy.get(`@dropdownMenu`).should('be.visible');
    });

    it('Should close the dropdown', () => {
      cy.get(`@dropdownMenu`).should('be.visible');
      cy.get(`@dropdownTrigger`).click();
      cy.get(`@dropdownMenu`).should('not.be.visible');
    });
  });

  describe('Animate', () => {
    beforeEach(() => {
      cy.get(DROPDOWN_DATA_CY.ANIMATE)
        .find(DROPDOWN_TRIGGER)
        .as('dropdownTrigger');
      cy.get(DROPDOWN_DATA_CY.ANIMATE)
        .find(DROPDOWN_MENU)
        .as('dropdownMenu');
    });

    it('Should rotate trigger chevron when toggling Dropdown visibility', () => {
      cy.get(`@dropdownTrigger`)
        .find(`.${ACTIVE_CLASS}`)
        .should('not.exist');
      cy.get('@dropdownTrigger')
        .click()
        .wait(500)
        .then($els => {
          const win = $els[0].ownerDocument.defaultView;
          const after = win.getComputedStyle($els[0], ':after');
          const tr = after.transform;
          const values = tr
            .split('(')[1]
            .split(')')[0]
            .split(',');
          const a = values[0];
          const b = values[1];
          const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

          hasClassAssertion('@dropdownTrigger', ACTIVE_CLASS);
          cy.get(`@dropdownMenu`).should('be.visible');
          expect(angle).to.equal(180);
        });
    });
  });

  describe('Font Weight', () => {
    beforeEach(() => {
      cy.get(DROPDOWN_DATA_CY.FONT_WEIGHT)
        .find(DROPDOWN_TRIGGER)
        .as('dropdownTrigger');
    });

    it('Should have attribute font-weight', () => {
      cy.get(DROPDOWN_DATA_CY.FONT_WEIGHT).should('have.attr', 'font-weight', 'normal');
    });

    it('Should add -text--normal class on the button element', () => {
      hasClassAssertion('@dropdownTrigger', '-text--normal')
    });
  });

  describe('VisibleItems', () => {
    beforeEach(() => {
      cy.get(DROPDOWN_DATA_CY.VISIBLE_ITEMS)
        .find(DROPDOWN_TRIGGER)
        .as('dropdownTrigger');
      cy.get(DROPDOWN_DATA_CY.VISIBLE_ITEMS)
        .find(DROPDOWN_MENU)
        .as('dropdownMenu');
    });

    it('Should have attribute visible-items', () => {
      cy.get(DROPDOWN_DATA_CY.VISIBLE_ITEMS).should('have.attr', 'visible-items', 3);
    });

    it('Should set max-height according to number of items given', () => {
      const maxHeight = 96;

      cy.get('@dropdownMenu')
        .should('not.be.visible');
      cy.get('@dropdownTrigger')
        .click();
      cy.get('@dropdownMenu')
        .should('be.visible')
      cy.get('@dropdownMenu')
        .invoke('height')
        .should('equal', maxHeight);
    });
  });

  describe('Position', () => {
    DROPDOWN_DATA_CY.POSITION.forEach(position => {
      it(`Should be placed to the position ${position.placement}`, () => {
        cy.get(position.selector).click();
        cy.get(position.selector)
          .find(DROPDOWN_MENU)
          .scrollIntoView({ offset: { top: -150, left: 0 } })
          .should('have.attr', 'style')
          .should('contain', `transform: ${position.transform}`);
      });
    });
  });

  describe('Methods', () => {
    describe('Toggle', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.METHOD.TOGGLE.TRIGGER).as('dropdownTrigger');
        cy.get(DROPDOWN_DATA_CY.METHOD.TOGGLE.DROPDOWN_TOGGLE)
          .find(DROPDOWN_MENU)
          .as('dropdownMenu');
        cy.get(DROPDOWN_DATA_CY.METHOD.TOGGLE.DROPDOWN_TOGGLE).as('dropdown');
      });

      it('Should toggle the dropdown menu when toggle method is called', () => {
        cy.get(`@dropdownMenu`).should('not.be.visible');
        cy.get(`@dropdown`)
          .then(function(dropdown) {
            dropdown[0].toggle();
            return new Promise(resolve => resolve(dropdown));
          })
          .find(DROPDOWN_MENU)
          .should('be.visible');
        cy.get(`@dropdown`)
          .then(function(dropdown) {
            dropdown[0].toggle();
            return new Promise(resolve => resolve(dropdown));
          })
          .find(DROPDOWN_MENU)
          .should('not.be.visible');
      });
    });

    describe('Show', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.METHOD.SHOW.TRIGGER).as('dropdownTrigger');
        cy.get(DROPDOWN_DATA_CY.METHOD.SHOW.DROPDOWN_SHOW)
          .find(DROPDOWN_MENU)
          .as('dropdownMenu');
        cy.get(DROPDOWN_DATA_CY.METHOD.SHOW.DROPDOWN_SHOW).as('dropdown');
      });

      it('Should show the dropdown menu when show method is called', () => {
        cy.get(`@dropdownMenu`).should('not.be.visible');
        cy.get(`@dropdown`)
          .then(function(dropdown) {
            dropdown[0].show();
            return new Promise(resolve => resolve(dropdown));
          })
          .find(DROPDOWN_MENU)
          .should('be.visible');
      });
    });

    describe('Hide', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.METHOD.HIDE.TRIGGER).as('dropdownTrigger');
        cy.get(DROPDOWN_DATA_CY.METHOD.HIDE.DROPDOWN_HIDE)
          .find(DROPDOWN_MENU)
          .as('dropdownMenu');
        cy.get(DROPDOWN_DATA_CY.METHOD.HIDE.DROPDOWN_HIDE).as('dropdown');
      });

      it('Should always hide the dropdown menu once it has been opened and closed', () => {
        cy.get(`@dropdownMenu`).should('be.visible');
        cy.get(`@dropdown`)
          .then(function(dropdown) {
            dropdown[0].hide();
            return new Promise(resolve => resolve(dropdown));
          })
          .find(DROPDOWN_MENU)
          .should('not.be.visible');
      });
    });
  });

  describe('Events', () => {
    describe('EventShow', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.EVENT.SHOW)
          .find(DROPDOWN_TRIGGER)
          .as('dropdownTrigger');
        cy.get(DROPDOWN_DATA_CY.EVENT.SHOW)
          .find(DROPDOWN_MENU)
          .as('dropdownMenu');
        cy.get(DROPDOWN_DATA_CY.EVENT.SHOW).as('dropdown');
      });

      it('Should trigger the appropriate hide event when the dropdown menu is opened', () => {
        const spy = cy.spy();

        cy.get('@dropdown').then((el) => {
          el.on('chiDropdownShow', spy);
        });
        cy.get(`@dropdownMenu`).should('not.be.visible');
        cy.get(`@dropdownTrigger`)
          .click()
          .then(() => {
            expect(spy).to.be.called;
          });
        cy.get(`@dropdownMenu`).should('be.visible');
      });
    });

    describe('EventHide', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.EVENT.HIDE)
          .find(DROPDOWN_TRIGGER)
          .as('dropdownTrigger');
        cy.get(DROPDOWN_DATA_CY.EVENT.HIDE)
          .find(DROPDOWN_MENU)
          .as('dropdownMenu');
        cy.get(DROPDOWN_DATA_CY.EVENT.HIDE).as('dropdown');
      });

      it('Should trigger the appropriate hide event when the dropdown menu is hidden', () => {
        const spy = cy.spy();

        cy.get('@dropdown').then((el) => {
          el.on('chiDropdownHide', spy);
        });
        cy.get(`@dropdownMenu`).should('be.visible');
        cy.get(`@dropdownTrigger`)
          .click()
          .then(() => {
            expect(spy).to.be.called;
          });
        cy.get(`@dropdownMenu`).should('not.be.visible');
      });
    });

    describe('EventKeydown', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.EVENT.KEYDOWN)
          .find(DROPDOWN_TRIGGER)
          .as('dropdownTrigger');
        cy.get(DROPDOWN_DATA_CY.EVENT.KEYDOWN)
          .find(DROPDOWN_MENU_ITEM)
          .as('dropdownMenuItem');
        cy.get(DROPDOWN_DATA_CY.EVENT.KEYDOWN).as('dropdown');
      });

      it('Should be able to move down and up the dropdown menu with the keyboard', () => {
        cy.get(`@dropdownTrigger`).click();

        cy.get('@dropdown')
          .type('{downArrow}{downArrow}{upArrow}')
          .then(() => {
            cy.get('@dropdownMenuItem')
              .first()
              .should('have.focus');
          });
      });
    });

    describe('EventItemSelected', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.EVENT.ITEM_SELECTED)
          .find(DROPDOWN_TRIGGER)
          .as('dropdownTrigger');
        cy.get(DROPDOWN_DATA_CY.EVENT.ITEM_SELECTED)
          .find(DROPDOWN_MENU_ITEM)
          .as('dropdownMenuItem');
        cy.get(DROPDOWN_DATA_CY.EVENT.ITEM_SELECTED).as('dropdown');
      });

      it('Should receive an event when a menu item is selected', () => {
        const spy = cy.spy();

        cy.get('@dropdown').then((el) => {
          el.on('chiDropdownItemSelected', spy);
        });
        cy.get(`@dropdownTrigger`).click();

        cy.get('@dropdownMenuItem')
          .first()
          .click()
          .then(() => {
            expect(spy).to.be.calledOnce;
          });
      });
    });

    describe('Dynamically change menu items', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.DYNAMIC)
          .find(`${DROPDOWN_MENU} ${DROPDOWN_MENU_ITEM}`)
          .as('dropdownMenuItems');
        cy.get("[data-cy='add-items-btn']").as('addItemsBtn');
      });

      it('Should add one item to the dropdown', () => {
        cy.get('@dropdownMenuItems').should('have.length', 3);
        cy.get('@addItemsBtn').click();
        cy.get('@dropdownMenuItems').should('have.length', 4);
      });
    });

    describe('RetainSelection', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.RETAIN_SELECTION)
          .find(`${DROPDOWN_MENU} ${DROPDOWN_MENU_ITEM}`)
          .as('dropdownMenuItems');
        cy.get(DROPDOWN_DATA_CY.RETAIN_SELECTION)
          .find(DROPDOWN_TRIGGER)
          .as('dropdownTrigger');
        cy.get('@dropdownTrigger').click();
      });

      it('Should set trigger value to selected option', () => {
        cy.get('@dropdownMenuItems')
          .first()
          .click();
        cy.get('@dropdownMenuItems')
          .first()
          .invoke('text')
          .then((text) => {
            cy.get('@dropdownTrigger')
              .find('span')
              .should('have.text', text);
          });
      });

      it('Should set active class on selected option', () => {
        cy.get('@dropdownMenuItems')
          .first()
          .click();
        cy.get('@dropdownMenuItems')
          .first()
          .should('have.class', ACTIVE_CLASS);
      });
    });

    describe('Icon', () => {
      beforeEach(() => {
        cy.get(DROPDOWN_DATA_CY.ICON)
          .find(DROPDOWN_TRIGGER)
          .as('dropdownTrigger');
      });

      it('Should display icon as trigger', () => {
        hasClassAssertion('@dropdownTrigger', DROPDOWN_ICON);
        cy.get('@dropdownTrigger')
          .find('chi-icon')
          .should('exist');
      });
    });
  });
});
