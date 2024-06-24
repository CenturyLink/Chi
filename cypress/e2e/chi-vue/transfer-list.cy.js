const BUTTON_CLASS = 'chi-button';
const BACKDROP_CLASS = 'chi-backdrop';
const CLOSE_CLASS = '-close';
const CLOSED_CLASS = '-closed';
const LOCKED_CLASS = '-locked';
const MODAL_CLASS = 'chi-modal';
const MODAL_HEADER_CLASS = 'chi-modal__header';
const MODAL_TITLE_CLASS = 'chi-modal__title';
const TOOLTIP_CLASS = 'chi-tooltip';
const SEARCH_INPUT_CLASS = 'chi-search__input';
const SELECT_CLASS = 'chi-select';

const CHEVRON_LEFT_ICON = 'chevron-left';
const CHEVRON_RIGHT_ICON = 'chevron-right';
const CHEVRON_UP_ICON = 'chevron-up';
const CHEVRON_DOWN_ICON = 'chevron-down';
const ARROW_LEFT_ICON = 'arrow-left';
const ARROW_RIGHT_ICON = 'arrow-right';
 
const TRANSFER_LIST_CLASSES = {
  TRANSFER_LIST_ELEMENT: 'chi-transfer-list',
  TRANSFER_LIST_COLUMN: 'chi-transfer-list__column',
  TRANSFER_LIST_TITLE: 'chi-transfer-list__title',
  TRANSFER_LIST_SEARCH: 'chi-transfer-list__search',
  TRANSFER_LIST_MENU: 'chi-transfer-list__menu',
  TRANSFER_LIST_FOOTER: 'chi-transfer-list__footer',
  TRANSFER_LIST_RESET_BUTTON: 'chi-transfer-list__reset-button'
};

describe('Transfer List', () => {
  before(() => {
    cy.visit('tests/chi-vue/transfer-list.html');
  });

  describe('Base', () => {
    beforeEach(() => {
      cy.get("[data-cy='transfer-list-base']")
        .as('transferList');

      // Search inputs
      cy.get('@transferList')
        .find(`input.${SEARCH_INPUT_CLASS}`)
        .first()
        .as('leftSearch');

      cy.get('@transferList')
        .find(`input.${SEARCH_INPUT_CLASS}`)
        .last()
        .as('rightSearch');

      // Selects
      cy.get('@transferList')
        .find(`select.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_MENU}`)
        .first()
        .as('leftSelect')

      cy.get('@transferList')
        .find(`select.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_MENU}`)
        .last()
        .as('rightSelect')

      // Left/Right buttons
      cy.get('@transferList')
        .find(`[icon="${CHEVRON_LEFT_ICON}"]`)
        .parents(`.${BUTTON_CLASS}`)
        .as('moveLeftBtn');

      cy.get('@transferList')
        .find(`[icon="${CHEVRON_RIGHT_ICON}"]`)
        .parents(`.${BUTTON_CLASS}`)
        .as('moveRightBtn');

      cy.get('@transferList')
        .find(`[icon="${ARROW_LEFT_ICON}"]`)
        .parents(`.${BUTTON_CLASS}`)
        .as('moveAllLeftBtn');

      cy.get('@transferList')
        .find(`[icon="${ARROW_RIGHT_ICON}"]`)
        .parents(`.${BUTTON_CLASS}`)
        .as('moveAllRightBtn');

      // Up/Down buttons
      cy.get('@transferList')
        .find(`[icon="${CHEVRON_UP_ICON}"]`)
        .parents(`.${BUTTON_CLASS}`)
        .as('moveUpBtn');

      cy.get('@transferList')
        .find(`[icon="${CHEVRON_DOWN_ICON}"]`)
        .parents(`.${BUTTON_CLASS}`)
        .as('moveDownBtn');

      // Footer buttons
      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_RESET_BUTTON}`)
        .as('resetBtn');

      cy.get('@transferList')
        .find(`.${BUTTON_CLASS}`)
        .contains('Cancel')
        .as('cancelBtn');

      cy.get('@transferList')
        .find(`.${BUTTON_CLASS}`)
        .contains('Save')
        .as('saveBtn');
    });

    it(`Should have class ${TRANSFER_LIST_CLASSES.TRANSFER_LIST_ELEMENT}`, () => {
      cy.get('@transferList')
        .should('have.class', `${TRANSFER_LIST_CLASSES.TRANSFER_LIST_ELEMENT}`);
    });

    it('Should have "from" and "to" titles', () => {
      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .first()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_TITLE}`)
        .contains('From');

      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .last()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_TITLE}`)
        .contains('To');
    });

    it('Should have "from" and "to" descriptions', () => {
      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .first()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_TITLE} chi-button`)
        .should.exist;

      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .first()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_TITLE} chi-popover`)
        .should('have.text', 'Description from');

      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .last()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_TITLE} chi-button`)
        .should.exist;

      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .last()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_TITLE} chi-popover`)
        .should('have.text', 'Description to');
    });

    it('Should have search input', () => {
      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .first()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_SEARCH}`)
        .should.exist;

      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .last()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_SEARCH}`)
        .should.exist;
    });

    it('Left select should have length 2', () => {
      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .first()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_MENU} option`)
        .should('have.length', 2);
    });

    it('Right select should have length 5', () => {
      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_COLUMN}`)
        .last()
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_MENU} option`)
        .should('have.length', 5);
    });

    it('Footer buttons should exist', () => {
      cy.get('@transferList')
        .find(`.${TRANSFER_LIST_CLASSES.TRANSFER_LIST_FOOTER} button`)
        .should('have.length', 3);
    });

    it('Should search and reset search', () => {
      // Left search
      cy.get('@leftSearch').type('fi');

      cy.get('@leftSelect')
        .should('have.text', 'First');

      cy.get('@leftSearch')
        .parent()
        .find(`button.${CLOSE_CLASS}`)
        .click()
        .then(() => {
          cy.get('@leftSelect')
            .find('option')
            .should('have.length', 2);
        });

      // Right search
      cy.get('@rightSearch').type('six');

      cy.get('@rightSelect')
        .should('have.text', 'Sixth');

      cy.get('@rightSearch')
        .parent()
        .find(`button.${CLOSE_CLASS}`)
        .click()
        .then(() => {
          cy.get('@rightSelect')
            .find('option')
            .should('have.length', 5);
        });
    });

    it(`Should show two .${LOCKED_CLASS} columns that are disabled`, () => {
      cy.get('@transferList')
        .find(`option.${LOCKED_CLASS}`)
        .as('lockedColumns')
        .should('have.length', 2);

      cy.get('@lockedColumns').should('have.attr', 'disabled');
    });

    it('Should allow wildcard items to move through locked items', () => {
      cy.get('@rightSelect')
        .select('sixth');

      cy.get('@moveUpBtn')
        .click()
        .click()
        .then(() => {
          cy.get('@rightSelect')
            .find('option')
            .eq(1)
            .should('have.value', 'sixth')
        });

      cy.get('@moveUpBtn')
        .click()
        .then(() => {
          cy.get('@rightSelect')
            .find('option')
            .eq(0)
            .should('have.value', 'sixth')
        });

      // Cancel actions
      cy.get('@cancelBtn')
        .click();
    });

    it('Should not allow non-wildcard items to move through locked items', () => {
      cy.get('@rightSelect')
        .select('fifth');

      cy.get('@moveUpBtn')
        .should('have.attr', 'disabled');

      // Cancel actions
      cy.get('@cancelBtn')
        .click();
    });

    it('Should move item right', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {
          cy.get('@leftSelect')
            .find('option')
            .should('have.length', 2);

          cy.get('@rightSelect')
            .find('option')
            .should('have.length', 5);

          cy.get('@leftSelect')
            .select('first');
            
          cy.get('@moveRightBtn')
            .should('have.not.attr', 'disabled');

          cy.get('@moveRightBtn')
            .click()
            .then(() => {
              cy.get('@moveRightBtn')
                .should('have.attr', 'disabled');

              cy.get('@leftSelect')
                .find('option')
                .should('have.length', 1);

              cy.get('@rightSelect')
                .find('option')
                .should('have.length', 6);

              expect(baseTransferListExample.hasBeenCalled.chiTransferListChange)
                .to.be.true;
            });
        });
    });

    it('Should move item left', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {
          cy.get('@rightSelect')
            .select('fifth');
            
          cy.get('@moveLeftBtn')
            .should('have.not.attr', 'disabled');

          cy.get('@moveLeftBtn')
            .click()
            .then(() => {
              cy.get('@moveLeftBtn')
                .should('have.attr', 'disabled');

              cy.get('@leftSelect')
                .find('option')
                .should('have.length', 3);

              cy.get('@rightSelect')
                .find('option')
                .should('have.length', 4);

              expect(baseTransferListExample.hasBeenCalled.chiTransferListChange)
                .to.be.true;
            });
        });
    });

    it('Should move all items right', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {
          cy.get('@leftSelect')
            .find('option')
            .should('have.length', 2);

          cy.get('@rightSelect')
            .find('option')
            .should('have.length', 5);

          cy.get('@moveAllRightBtn')
            .click()
            .then(() => {
              cy.get('@leftSelect')
                .find('option')
                .should('have.length', 0);

              cy.get('@rightSelect')
                .find('option')
                .should('have.length', 7);

              cy.get('@moveAllRightBtn')
                .should('have.attr', 'disabled');

              expect(baseTransferListExample.hasBeenCalled.chiTransferListChange)
                .to.be.true;
            });
        });
    });

    it('Should move all items left, except locked', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {     
          cy.get('@leftSelect')
            .find('option')
            .should('have.length', 2);

          cy.get('@rightSelect')
            .find('option')
            .should('have.length', 5);

          cy.get('@moveAllLeftBtn')
            .click()
            .then(() => {
              cy.get('@leftSelect')
                .find('option')
                .should('have.length', 5);

              cy.get('@rightSelect')
                .find('option')
                .should('have.length', 2);

              cy.get('@moveAllLeftBtn')
                .should('have.attr', 'disabled');

              expect(baseTransferListExample.hasBeenCalled.chiTransferListChange)
                .to.be.true;
            });
        });
    });

    it('Should move item up', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {
          cy.get('@moveUpBtn')
            .should('have.attr', 'disabled');

          cy.get('@rightSelect')
            .find('option')
            .eq(4)
            .should('have.value', 'seventh')

          cy.get('@rightSelect')
            .select('seventh');

          cy.get('@moveUpBtn')
            .should('have.not.attr', 'disabled');

          cy.get('@moveUpBtn')
            .click()
            .then(() => {
              cy.get('@rightSelect')
                .find('option')
                .eq(3)
                .should('have.value', 'seventh');

              cy.get('@moveDownBtn')
                .should('have.not.attr', 'disabled');

              expect(baseTransferListExample.hasBeenCalled.chiTransferListChange)
                .to.be.true;
            });
        });
    });

    it('Should move item down', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {
          cy.get('@moveDownBtn')
            .should('have.attr', 'disabled');

          cy.get('@rightSelect')
            .find('option')
            .eq(3)
            .should('have.value', 'sixth')

          cy.get('@rightSelect')
            .select('sixth');

          cy.get('@moveDownBtn')
            .should('have.not.attr', 'disabled');

          cy.get('@moveDownBtn')
            .click()
            .then(() => {
              cy.get('@rightSelect')
                .find('option')
                .eq(4)
                .should('have.value', 'sixth');

              cy.get('@moveDownBtn')
                .should('have.attr', 'disabled');

              expect(baseTransferListExample.hasBeenCalled.chiTransferListChange)
                .to.be.true;
            });
        });
    });

    it('Should cancel actions', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {
          cy.get('@moveAllRightBtn')
            .click()
            .then(() => {
              cy.get('@leftSelect')
                .find('option')
                .should('have.length', 0);

              cy.get('@rightSelect')
                .find('option')
                .should('have.length', 7);

              cy.get('@moveAllRightBtn')
                .should('have.attr', 'disabled');
            });
      
          cy.get('@cancelBtn')
            .click()
            .then(() => {
              cy.get('@leftSelect')
                .find('option')
                .should('have.length', 2);

              cy.get('@rightSelect')
                .find('option')
                .should('have.length', 5);

              cy.get('@moveAllRightBtn')
                .should('have.not.attr', 'disabled');

              expect(baseTransferListExample.hasBeenCalled.chiTransferListCancel)
                .to.be.true;
            });
        });
    });

    it('Should save', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {
          cy.get('@saveBtn')
            .should('have.attr', 'disabled');

          cy.get('@moveAllRightBtn')
            .click()
            .then(() => {
              cy.get('@leftSelect')
                .find('option')
                .should('have.length', 0);

              cy.get('@rightSelect')
                .find('option')
                .should('have.length', 7);

              cy.get('@saveBtn')
                .should('have.not.attr', 'disabled');
            });

          cy.get('@saveBtn')
            .click()
            .then(() => {
              cy.get('@saveBtn')
                .should('have.attr', 'disabled');

              expect(baseTransferListExample.hasBeenCalled.chiTransferListSave)
                .to.be.true;
            });
        });
    });

    it('Should reset', () => {
      cy.visit('tests/chi-vue/transfer-list.html');

      cy.window()
        .its('baseTransferListExample')
        .then(baseTransferListExample => {
          cy.get('@moveAllRightBtn')
            .click();

          cy.get('@saveBtn')
            .click()
            .then(() => {
              cy.get('@resetBtn')
                .should('have.not.attr', 'disabled');
            });
  
          cy.get('@resetBtn')
            .click()
            .then(() => {
              expect(baseTransferListExample.hasBeenCalled.chiTransferListReset)
                .to.be.true;
            });
        });
    });
  });

  describe('Modal', () => {
    beforeEach(() => {
      cy.get("[data-cy='transfer-list-modal']").as('transferList');
    });

    it('Trigger button should have default icon', () => {
      cy.get('@transferList')
        .find(`.${BUTTON_CLASS} chi-icon`)
        .should('have.attr', 'icon', 'table-column-settings');
    });

    it('Trigger should have tooltip', () => {
      cy.get('@transferList')
        .find(`.${TOOLTIP_CLASS}`)
        .should('have.text', 'Customize columns');
    });

    it('Modal should be hidden', () => {
      cy.get('@transferList')
        .find(`.${BACKDROP_CLASS}`)
        .should('have.class', CLOSED_CLASS);
    });

    it('Modal should open on icon click', () => {
      cy.get('@transferList')
        .find('div > chi-button')
        .first()
        .click()
        .then(() => {
          cy.get('@transferList')
            .find(`.${BACKDROP_CLASS}`)
            .should('have.not.class', CLOSED_CLASS)
            .find(`.${MODAL_CLASS}`)
            .should.exist
          });
    });

    it('Modal should close on X click', () => {
      cy.get('@transferList')
        .find(`.${MODAL_HEADER_CLASS} button.${CLOSE_CLASS}`)
        .click()
        .then(() => {
          cy.get('@transferList')
            .find(`.${BACKDROP_CLASS}`)
            .should('have.class', CLOSED_CLASS);
        });
    });

    it('Modal should close on "Cancel" click', () => {
      cy.get('@transferList')
        .find('div > chi-button')
        .first()
        .click();

      cy.get('@transferList')
        .find(`.${BUTTON_CLASS}`)
        .contains('Cancel')
        .click()
        .then(() => {
          cy.get('@transferList')
            .find(`.${BACKDROP_CLASS}`)
            .should('have.class', CLOSED_CLASS);
        });
    });

    it('Modal should close on "Save" click', () => {
      cy.get('@transferList')
        .find('div > chi-button')
        .first()
        .click();

      cy.get('@transferList')
        .find(`[icon="${ARROW_RIGHT_ICON}"]`)
        .parents(`.${BUTTON_CLASS}`)
        .click();

      cy.get('@transferList')
        .find(`.${BUTTON_CLASS}`)
        .contains('Save')
        .click()
        .then(() => {
          cy.get('@transferList')
            .find(`.${BACKDROP_CLASS}`)
            .should('have.class', CLOSED_CLASS);
        });
    });
  });

  describe('Modal with custom config', () => {
    beforeEach(() => {
      cy.get("[data-cy='transfer-list-modal-config']").as('transferList');
    });

    it('Trigger button should have atom icon', () => {
      cy.get('@transferList')
        .find(`.${BUTTON_CLASS} chi-icon`)
        .should('have.attr', 'icon', 'atom');
    });

    it('Trigger should have custom tooltip', () => {
      cy.get('@transferList')
        .find(`.${TOOLTIP_CLASS}`)
        .should('have.text', 'Custom tooltip message');
    });

    it('Trigger should have custom tooltip', () => {
      cy.get('@transferList')
        .find(`.${TOOLTIP_CLASS}`)
        .should('have.text', 'Custom tooltip message');
    });

    it('Modal should have custom title and aria-label', () => {
      cy.get('@transferList')
        .find('div > chi-button')
        .first()
        .click({ force: true })
        .then(() => {
          cy.get('@transferList')
            .find(`.${MODAL_CLASS}`)
            .should('have.attr', 'aria-label', 'custom aria label')
            .find(`.${MODAL_TITLE_CLASS}`)
            .contains('Custom Modal Title');
          });
    });
  });
});
