const DATA_TABLE_EVENTS = {
  COLUMNS_CHANGE: 'chiColumnsChange'
};
const ACTIVE_CLASS = '-active';
const CLOSE_CLASS = '-close';
const RIGHT_COLUMN_ICON = 'icon-chevron-right';
const LEFT_COLUMN_ICON = 'icon-chevron-left';
const UP_COLUMN_ICON = 'icon-chevron-up';
const DOWN_COLUMN_ICON = 'icon-chevron-down';
const AVAILABLE_COLUMNS_CLASS = 'available-columns';
const SELECTED_COLUMNS_CLASS = 'selected-columns';
const LOCKED_CLASS = '-locked';
const BUTTON_CLASS = 'chi-button';
const MODAL_CLASSES = {
  FOOTER: 'chi-modal__footer',
  MODAL: 'chi-modal',
  HEADER: 'chi-modal__header',
  CONTENT: 'chi-modal__content',
  TITLE: 'chi-modal__title'
};
const BOLD_TEXT_CLASS = '-text--bold';

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Column Customization', () => {
  before(() => {
    cy.visit('tests/chi-vue/column-customization.html');
  });

  beforeEach(() => {
    cy.get('[data-cy="column-customization-base"]')
      .find(`.${BUTTON_CLASS}`)
      .first()
      .as('columnsBtn');
    cy.get('[data-cy="column-customization-base"]')
      .find(`.${MODAL_CLASSES.MODAL}`)
      .as('modal');
    cy.get('@modal')
      .find(`.${MODAL_CLASSES.CONTENT}`)
      .as('modalContent');
    cy.get('@modal')
      .find(`.${BUTTON_CLASS}`)
      .contains('Save')
      .as('saveBtn');
    cy.get('@modal')
      .find(`.${MODAL_CLASSES.FOOTER}`)
      .find(`.${BUTTON_CLASS}`)
      .first()
      .as('resetBtn');
    cy.get('@modal')
      .find('select')
      .last()
      .as('selectedColumns');
    cy.get('@modal')
      .find('select')
      .first()
      .as('availableColumns');
    cy.get('@modal')
      .find(`.${UP_COLUMN_ICON}`)
      .parents(`.${BUTTON_CLASS}`)
      .as('moveUpBtn');
    cy.get('@modal')
      .find(`.${DOWN_COLUMN_ICON}`)
      .parents(`.${BUTTON_CLASS}`)
      .as('moveDownBtn');
    cy.get('@modal')
      .find(`.${RIGHT_COLUMN_ICON}`)
      .parents(`.${BUTTON_CLASS}`)
      .as('moveRightBtn');
    cy.get('@modal')
      .find(`.${LEFT_COLUMN_ICON}`)
      .parents(`.${BUTTON_CLASS}`)
      .as('moveLeftBtn');
    cy.get('@modal')
      .find(`.${CLOSE_CLASS}`)
      .as('closeBtn');
  });

  it('should open a customize Columns modal on columns button click', () => {
    cy.get('@columnsBtn')
      .click()
      .then(() => {
        hasClassAssertion('@modal', `${ACTIVE_CLASS}`);
      });
  });

  it(`should have .${AVAILABLE_COLUMNS_CLASS} and .${SELECTED_COLUMNS_CLASS} with 'multiple' attribute`, () => {
    cy.get('@modalContent')
      .find(`.${BOLD_TEXT_CLASS}`)
      .first()
      .should('have.text', 'Available Columns');
    cy.get('@modalContent')
      .find(`.${BOLD_TEXT_CLASS}`)
      .last()
      .should('have.text', 'Selected Columns');
    cy.get('@modalContent')
      .find('select')
      .as('selects')
      .should('have.length', 2);
    cy.get('@selects')
      .first()
      .should('have.class', `${AVAILABLE_COLUMNS_CLASS}`);
    cy.get('@selects')
      .last()
      .should('have.class', `${SELECTED_COLUMNS_CLASS}`);
    cy.get('@selects').should('have.attr', 'multiple');
  });

  it('should show the SAVE and RESET buttons as disabled by default', () => {
    cy.get('@saveBtn').should('have.attr', 'disabled');
    cy.get('@modal')
      .find(`.${MODAL_CLASSES.FOOTER}`)
      .find(`.${BUTTON_CLASS}`)
      .first()
      .should('have.attr', 'disabled');
  });

  it(`should show two .${LOCKED_CLASS} columns that are disabled`, () => {
    cy.get('@modal')
      .find(`option.${LOCKED_CLASS}`)
      .as('lockedColumns')
      .should('have.length', 2);
    cy.get('@lockedColumns').should('have.attr', 'disabled');
  });

  it(`should show the .${LOCKED_CLASS} columns first in selected columns`, () => {
    cy.get('@selectedColumns')
      .children()
      .first()
      .as('firstColumn');
    cy.get('@selectedColumns')
      .children()
      .eq(1)
      .as('secondColumn');
    hasClassAssertion('@firstColumn', LOCKED_CLASS);
    hasClassAssertion('@secondColumn', LOCKED_CLASS);
  });

  it('should close the modal via CANCEL and X buttons', () => {
    cy.get('@modal')
      .find(`.${BUTTON_CLASS}`)
      .contains('Cancel')
      .click()
      .then(() => {
        cy.get('@modal').should('not.have.class', `${ACTIVE_CLASS}`);
      });
    cy.get('@columnsBtn').click();
    cy.get('@closeBtn')
      .click()
      .then(() => {
        cy.get('@modal').should('not.have.class', `${ACTIVE_CLASS}`);
      });
  });

  it('should select and deselect an available column and enable the SAVE and RESET buttons', () => {
    cy.get('@columnsBtn').click();
    cy.get('@availableColumns').select('columnA');
    cy.get('@moveRightBtn')
      .click()
      .then(() => {
        cy.get('@saveBtn').should('not.have.attr', 'disabled');
        cy.get('@resetBtn').should('not.have.attr', 'disabled');
        cy.get('@selectedColumns').select('columnA');
      });
    cy.get('@moveLeftBtn')
      .click()
      .then(() => {
        cy.get('@availableColumns').select('columnA');
      });
    cy.get('@closeBtn').click();
  });

  it('should select and deselect multiple available columns', () => {
    cy.get('@columnsBtn').click();
    cy.get('@availableColumns').select(['columnA', 'columnB']);
    cy.get('@moveRightBtn')
      .click()
      .then(() => {
        cy.get('@selectedColumns').select(['columnA', 'columnB']);
      });
    cy.get('@moveLeftBtn')
      .click()
      .then(() => {
        cy.get('@availableColumns').select(['columnA', 'columnB']);
      });
    cy.get('@closeBtn').click();
  });

  it('should reset the columns to their initial state on RESET button click', () => {
    cy.get('@columnsBtn').click();
    cy.get('@availableColumns').select('columnA');
    cy.get('@moveRightBtn').click();
    cy.get('@resetBtn')
      .click()
      .then(() => {
        cy.get('@resetBtn').should('have.attr', 'disabled');
        cy.get('@availableColumns')
          .find('option')
          .first()
          .should('contain', 'Column A');
        cy.get('@availableColumns')
          .find('option')
          .eq(1)
          .should('contain', 'Column B');
      });
    cy.get('@closeBtn').click();
  });

  it(`should trigger the ${DATA_TABLE_EVENTS.COLUMNS_CHANGE} event on SAVE button click`, () => {
    cy.window()
      .its('baseColumnCustomizationExample')
      .then(baseColumnCustomizationExample => {
        const component =
          baseColumnCustomizationExample.$refs.baseColumnCustomizationRef;
        const spy = cy.spy();

        component.$on(`${DATA_TABLE_EVENTS.COLUMNS_CHANGE}`, spy);
        cy.get('@columnsBtn').click();
        cy.get('@availableColumns').select('columnA');
        cy.get('@moveRightBtn').click();
        cy.get('@saveBtn')
          .click()
          .then(() => {
            expect(spy).to.be.calledOnce;
          });
      });
    cy.get('@columnsBtn').click();
    cy.get('@resetBtn').click();
    cy.get('@saveBtn').click();
  });

  it(`should order available columns alphabetically by default`, () => {
    const letters = ['A', 'B', 'G', 'H', 'I', 'J'];

    cy.get('@columnsBtn').click();
    cy.get('@availableColumns')
      .children()
      .as('cols');
    letters.forEach((letter, index) => {
      cy.get('@cols')
        .eq(index)
        .should('contain', `Column ${letter}`);
    });
    cy.get('@modal')
      .find(`.${CLOSE_CLASS}`)
      .click();
  });

  describe('Move Buttons', () => {
    it.skip(`should show all move buttons as disabled by default`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@modalContent')
        .find(`.${BUTTON_CLASS}`)
        .should('have.attr', 'disabled');
      cy.get('@closeBtn').click();
    });

    it.skip(`should show the move up button as disabled when selecting the first clickable column in selected columns`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@selectedColumns')
        .select('columnE')
        .then(() => {
          cy.get('@moveUpBtn').should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });

    it.skip(`should show the move up button as disabled when selecting the first column in selected columns (no locked)`, () => {
      cy.get('[data-cy="column-customization-no-locked"]')
        .find(`.${BUTTON_CLASS}`)
        .first()
        .click();
      cy.get('[data-cy="column-customization-no-locked"]')
        .find(`.${MODAL_CLASSES.MODAL}`)
        .find('select')
        .last()
        .select('columnE')
        .then(() => {
          cy.get('@modal')
            .find(`.${UP_COLUMN_ICON}`)
            .parents(`.${BUTTON_CLASS}`)
            .should('have.attr', 'disabled');
        });
      cy.get('[data-cy="column-customization-no-locked"]')
        .find(`.${MODAL_CLASSES.MODAL}`)
        .find(`.${CLOSE_CLASS}`)
        .click();
    });

    it.skip(`should show the move down button as disabled when selecting the last column in selected columns`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@selectedColumns')
        .select('columnF')
        .then(() => {
          cy.get('@moveUpBtn').should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });

    it.skip(`should show both the move up and down buttons as disabled when selecting the first and last columns in selected columns`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@selectedColumns')
        .select(['columnE', 'columnF'])
        .then(() => {
          cy.get('@moveUpBtn').should('have.attr', 'disabled');
          cy.get('@moveDownBtn').should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });

    it('should move a column up and down', () => {
      cy.get('@columnsBtn').click();
      cy.get('@selectedColumns').select('columnE');
      cy.get(`@moveDownBtn`)
        .click()
        .then(() => {
          cy.get('@selectedColumns')
            .children()
            .last()
            .should('contain', 'Column E');
          cy.get('@selectedColumns')
            .children()
            .eq(2)
            .should('contain', 'Column F');
        });
      cy.get('@selectedColumns').select('columnE');
      cy.get(`@moveUpBtn`)
        .click()
        .then(() => {
          cy.get('@selectedColumns')
            .children()
            .eq(2)
            .should('contain', 'Column E');
          cy.get('@selectedColumns')
            .children()
            .last()
            .should('contain', 'Column F');
        });
      cy.get('@closeBtn').click();
    });

    it.skip(`should show both the move up and down buttons as disabled when selecting the only column left in selected columns`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@selectedColumns').select('columnE');
      cy.get('@moveLeftBtn').click();
      cy.get('@selectedColumns')
        .select('columnF')
        .then(() => {
          cy.get('@moveUpBtn').should('have.attr', 'disabled');
          cy.get('@moveDownBtn').should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });

    it.skip(`should show both the move up and down buttons as disabled when there are no clickable columns in selected columns`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@selectedColumns').select(['columnE', 'columnF']);
      cy.get('@moveLeftBtn')
        .click()
        .then(() => {
          cy.get('@moveUpBtn').should('have.attr', 'disabled');
          cy.get('@moveDownBtn').should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });

    it.skip(`should show the move right button as disabled when there are no clickable columns in available columns`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@availableColumns').select([
        'columnA',
        'columnB',
        'columnG',
        'columnH',
        'columnI',
        'columnJ'
      ]);
      cy.get('@moveRightBtn')
        .click()
        .then(() => {
          cy.get('@moveRightBtn').should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });

    it.skip(`should show the move right button as disabled when deselecting an available column after moving it to selected columns`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@availableColumns').select('columnA');
      cy.get('@moveRightBtn')
        .click()
        .then(() => {
          cy.get('@moveRightBtn').should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });

    it.skip(`should show the move left button as disabled when deselecting a selected column after moving it to available columns`, () => {
      cy.get('@columnsBtn').click();
      cy.get('@selectedColumns').select('columnE');
      cy.get('@moveLeftBtn')
        .click()
        .then(() => {
          cy.get('@moveLeftBtn').should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });

    it.skip('should disable all move buttons upon reordering and deselecting', () => {
      cy.get('@columnsBtn').click();
      cy.get('@availableColumns').select('columnA');
      cy.get('@moveRightBtn').click();
      cy.get('@selectedColumns').select('columnA');
      cy.get('@moveUpBtn').click();
      cy.get('@moveUpBtn').click();
      cy.get('@selectedColumns').select('columnF');
      cy.get('@moveLeftBtn')
        .click()
        .then(() => {
          cy.get('@moveLeftBtn').should('not.have.attr', 'disabled');
          cy.get('@moveUpBtn').should('have.attr', 'disabled');
        });
      cy.get('@moveLeftBtn')
        .click()
        .then(() => {
          cy.get('@modalContent')
            .find(`.${BUTTON_CLASS}`)
            .should('have.attr', 'disabled');
        });
      cy.get('@closeBtn').click();
    });
  });
});
