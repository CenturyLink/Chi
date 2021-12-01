const ACTIVE_CLASS = '-active';
const EXPANDED_CLASS = '-expanded';
const CLOSE_CLASS = '-close';
const RIGHT_COLUMN_ICON = 'icon-chevron-right';
const LEFT_COLUMN_ICON = 'icon-chevron-left';
const UP_COLUMN_ICON = 'icon-chevron-up';
const DOWN_COLUMN_ICON = 'icon-chevron-down';
const AVAILABLE_COLUMNS_CLASS = 'available-columns';
const SELECTED_COLUMNS_CLASS = 'selected-columns';
const LOCKED_CLASS = '-locked';
const BUTTON_CLASS = 'chi-button';
const BOLD_TEXT_CLASS = '-text--bold';
const ICON_CLASS = 'chi-icon';
const ICON_FILTER_CLASS = 'chi-filter';
const ICON_RELOAD_CLASS = 'icon-reload';
const SELECT_CLASS = 'chi-select';
const CHECKBOX_CLASS = 'chi-checkbox';
const INPUT_CLASS = 'chi-input';
const ACCORDION_CLASSES = {
  ACCORDION: 'chi-accordion',
  ITEM: 'chi-accordion__item',
  TRIGGER: 'chi-accordion__trigger'
};
const MODAL_CLASSES = {
  FOOTER: 'chi-modal__footer',
  MODAL: 'chi-modal',
  HEADER: 'chi-modal__header',
  CONTENT: 'chi-modal__content',
  TITLE: 'chi-modal__title'
};
const POPOVER_CLASSES = {
  POPOVER: `chi-popover`
};
const DATA_TABLE_CLASSES = {
  COLUMNS: 'chi-data-table__columns'
};
const TOOLBAR_CLASSES = {
  TOOLBAR: 'chi-toolbar',
  FILTERS: 'chi-toolbar__filters',
  ACTIONS: 'chi-toolbar__actions',
  SEARCH: 'chi-toolbar__search',
  START: 'chi-toolbar__start',
  END: 'chi-toolbar__end',
  HEADER: 'chi-toolbar__header'
};
const TOOLBAR_EVENTS = {
  COLUMNS_CHANGE: 'chiToolbarColumnsChange',
  FILTERS_CHANGE: 'chiToolbarFiltersChange',
  SEARCH: 'chiToolbarSearch'
};

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Toolbar', () => {
  before(() => {
    cy.visit('tests/chi-vue/toolbar.html');
  });

  beforeEach(() => {
    cy.get(`[data-cy='toolbar-base']`)
      .children()
      .first()
      .as('toolbarHeader');
    cy.get(`@toolbarHeader`)
      .children()
      .first()
      .as('toolbarStart');
    cy.get(`@toolbarHeader`)
      .children()
      .eq(1)
      .as('toolbarEnd');
    cy.get(`@toolbarStart`)
      .children()
      .first()
      .as('toolbarSearch');
    cy.get(`@toolbarStart`)
      .children()
      .eq(1)
      .as('toolbarViews');
    cy.get(`@toolbarStart`)
      .children()
      .eq(2)
      .as('toolbarFilters');
    cy.get(`@toolbarEnd`)
      .children()
      .first()
      .as('toolbarColumns');
  });

  const selectors = [
    {
      el: `[data-cy='toolbar-base']`,
      class: TOOLBAR_CLASSES.TOOLBAR
    },
    {
      el: `@toolbarHeader`,
      class: TOOLBAR_CLASSES.HEADER
    },
    {
      el: `@toolbarStart`,
      class: TOOLBAR_CLASSES.START
    },
    { el: `@toolbarSearch`, class: TOOLBAR_CLASSES.SEARCH },
    {
      el: `@toolbarEnd`,
      class: TOOLBAR_CLASSES.END
    },
    { el: `@toolbarColumns`, class: `${DATA_TABLE_CLASSES.COLUMNS}` },
    { el: '@toolbarFilters', class: TOOLBAR_CLASSES.FILTERS }
  ];

  selectors.forEach(sel => {
    it(`${sel.el} should have class .${sel.class}`, () => {
      hasClassAssertion(sel.el, sel.class);
    });
  });

  describe('Search input submodule', () => {
    it(`Should trigger the ${TOOLBAR_EVENTS.SEARCH} event`, () => {
      cy.window()
        .its('toolbarExample')
        .then(toolbarExample => {
          const component = toolbarExample.$refs.toolbarRef;
          const spy = cy.spy();

          component.$on(`${TOOLBAR_EVENTS.SEARCH}`, spy);
          cy.get(`@toolbarSearch`)
            .type('abc')
            .find(`.${BUTTON_CLASS}.-flat`)
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
        });
    });
  });

  describe('Views submodule', () => {
    it('Should render a select with two views', () => {
      cy
        .get('@toolbarViews')
        .find(`.${SELECT_CLASS}`)
        .as('views').should.exist;
      cy.get('@views')
        .find('option')
        .should('have.length', 2);
    });

    it('Should show View 1 as default view', () => {
      cy.get('@toolbarViews')
        .find('option:selected')
        .should('have.text', 'View 1');
    });
  });

  describe('Filters submodule', () => {
    it(`Should render all filters`, () => {
      cy.get('@toolbarFilters')
        .children()
        .first()
        .children()
        .as('filters')
        .should('have.length', 4);
      cy
        .get('@filters')
        .first()
        .find(`.${SELECT_CLASS}`).should.exist;
      cy
        .get('@filters')
        .eq(1)
        .find(`.${INPUT_CLASS}`).should.exist;
      cy
        .get('@filters')
        .eq(2)
        .find(`.${CHECKBOX_CLASS}`).should.exist;
    });

    describe('Advanced filters', () => {
      beforeEach(() => {
        cy.get('@toolbarFilters')
          .children()
          .first()
          .children()
          .last()
          .find(`.${BUTTON_CLASS}`)
          .first()
          .as('advancedFilter');
        cy.get('@toolbarFilters')
          .find(`${POPOVER_CLASSES.POPOVER}`)
          .as('popover');
      });

      it('Should render an advanced filters button when some filters are set to advanced', () => {
        cy.get('@advancedFilter').should.exist;
      });

      it('Should not render an advanced filters button on desktop when no filters are set to advanced', () => {
        cy.get('[data-cy="toolbar-no-advanced-filters"]')
          .find(`.${TOOLBAR_CLASSES.FILTERS}-desktop`)
          .find(`.${ICON_CLASS}.${ICON_FILTER_CLASS}`)
          .should('not.exist');
      });

      it('Should open a chi popover on advanced filter click', () => {
        cy.get('@advancedFilter')
          .click()
          .then(() => {
            cy.get('@popover').should('have.attr', 'active');
          });
      });

      it('Should close the chi popover', () => {
        cy.get('@popover')
          .find(`.${BUTTON_CLASS}`)
          .contains('CANCEL')
          .click()
          .then(() => {
            cy.get('@popover').should('not.have.attr', 'active');
          });
        cy.get('@advancedFilter').click();
        cy.get('@advancedFilter')
          .click()
          .then(() => {
            cy.get('@popover').should('not.have.attr', 'active');
          });
        cy.get('@advancedFilter').click();
        cy.get('@popover')
          .find(`.${CLOSE_CLASS}`)
          .click()
          .then(() => {
            cy.get('@popover').should('not.have.attr', 'active');
          });
      });

      it('Should show an accordion within the chi popover that expands and collapses', () => {
        cy.get('@advancedFilter')
          .click()
          .then(() => {
            cy.get('@popover').find(`.${ACCORDION_CLASSES.ACCORDION}`).should
              .exist;
          });
        cy.get('@popover')
          .find(`.${ACCORDION_CLASSES.TRIGGER}`)
          .first()
          .as('firstTrigger')
          .click()
          .then(() => {
            cy.get(`.${ACCORDION_CLASSES.ITEM}`)
              .first()
              .as('firstAccordionItem');
            hasClassAssertion('@firstAccordionItem', `${EXPANDED_CLASS}`);
          });
        cy.get('@firstTrigger')
          .click()
          .then(() => {
            cy.get('@firstAccordionItem').should(
              'not.have.class',
              `${EXPANDED_CLASS}`
            );
          });
        cy.get('@popover')
          .find(`.${CLOSE_CLASS}`)
          .click();
      });

      it('Should contain all expected chi accordion items', () => {
        const labels = [
          'Status',
          'Textarea',
          'Advanced Checkbox',
          'Custom 1',
          'Custom 2'
        ];
        const types = [
          `.${SELECT_CLASS}`,
          'textarea',
          `.${CHECKBOX_CLASS}`,
          '#input-1',
          '#input-2',
          'chi-date-picker'
        ];

        cy.get('@advancedFilter').click();
        cy.get('@popover')
          .find(`.${ACCORDION_CLASSES.ITEM}`)
          .should('have.length', 5);
        labels.forEach(label => {
          cy.get('@popover').contains(label).should.exist;
        });
        types.forEach(type => {
          cy.get('@popover').find(type).should.exist;
        });
        cy.get('@popover')
          .find(`.${CLOSE_CLASS}`)
          .click();
      });

      it('Should show a disabled APPLY button within the chi popover', () => {
        cy.get('@advancedFilter')
          .click()
          .then(() => {
            cy.get('@popover')
              .find(`.${BUTTON_CLASS}`)
              .contains('APPLY')
              .should('have.attr', 'disabled');
          });
        cy.get('@popover')
          .find(`.${CLOSE_CLASS}`)
          .click();
      });

      it('Should show an enabled APPLY button within the chi popover on filter change', () => {
        cy.get('@advancedFilter').click();
        cy.get('@popover')
          .find(`.${ACCORDION_CLASSES.TRIGGER}`)
          .first()
          .as('firstTrigger')
          .click();
        cy.get(`.${ACCORDION_CLASSES.ITEM}`)
          .first()
          .find('select')
          .select('Inactive')
          .then(() => {
            cy.get('@popover')
              .find(`.${BUTTON_CLASS}`)
              .contains('APPLY')
              .should('not.have.attr', 'disabled');
            cy.get(`.${ACCORDION_CLASSES.ITEM}`)
              .first()
              .find('select')
              .select('Active');
          });
        cy.get('@firstTrigger').click();
        cy.get('@popover')
          .find(`.${CLOSE_CLASS}`)
          .click();
      });

      it('Should reset the chi popover filters and disable the APPLY button on reset button click', () => {
        cy.get('@advancedFilter').click();
        cy.get('@popover')
          .find(`.${ACCORDION_CLASSES.TRIGGER}`)
          .first()
          .as('firstTrigger')
          .click()
          .then(() => {
            cy.get('@popover')
              .find(`.${ACCORDION_CLASSES.ITEM}`)
              .first()
              .find('select')
              .as('select')
              .select('Inactive');
          });
        cy.get('@popover')
          .find(`.${ICON_RELOAD_CLASS}`)
          .click()
          .then(() => {
            cy.get('@select').should('have.value', 'active');
            cy.get('@popover')
              .find(`.${BUTTON_CLASS}`)
              .contains('APPLY')
              .should('have.attr', 'disabled');
          });
        cy.get('@firstTrigger').click();
        cy.get('@popover')
          .find(`.${CLOSE_CLASS}`)
          .click();
      });

      it('Should expand and collapse all advanced filters', () => {
        cy.get('@advancedFilter').click();
        cy.get('@popover')
          .find(`.${ACCORDION_CLASSES.ITEM}`)
          .as('items')
          .should('not.have.class', EXPANDED_CLASS);
        cy.get('@popover')
          .contains('Expand All')
          .click()
          .then(() => {
            hasClassAssertion('@items', EXPANDED_CLASS);
          });
        cy.get('@popover')
          .contains('Collapse All')
          .click()
          .then(() => {
            cy.get('@items').should('not.have.class', EXPANDED_CLASS);
          });
        cy.get('@popover')
          .find(`.${CLOSE_CLASS}`)
          .click();
      });

      it(`Should trigger the ${TOOLBAR_EVENTS.FILTERS_CHANGE} event`, () => {
        cy.window()
          .its('toolbarExample')
          .then(toolbarExample => {
            const component = toolbarExample.$refs.toolbarRef;
            const spy = cy.spy();

            component.$on(`${TOOLBAR_EVENTS.FILTERS_CHANGE}`, spy);
            cy.get('@advancedFilter').click();
            cy.get('@popover')
              .find(`.${ACCORDION_CLASSES.TRIGGER}`)
              .first()
              .as('firstTrigger')
              .click()
              .then(() => {
                cy.get('@popover')
                  .find(`.${ACCORDION_CLASSES.ITEM}`)
                  .first()
                  .find('select')
                  .as('select')
                  .select('Inactive');
              });
            cy.get('@popover')
              .find(`.${BUTTON_CLASS}`)
              .contains('APPLY')
              .click()
              .then(() => {
                expect(spy).to.be.called;
              });
            cy.get('@popover')
              .find(`.${CLOSE_CLASS}`)
              .click();
          });
      });
    });
  });

  describe('Columns customization submodule', () => {
    beforeEach(() => {
      cy.get('@toolbarColumns')
        .find(`.${BUTTON_CLASS}`)
        .first()
        .as('columnsBtn');
      cy.get('@toolbarColumns')
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

    it('Should open a customize Columns modal on columns button click', () => {
      cy.get('@columnsBtn')
        .click()
        .then(() => {
          hasClassAssertion('@modal', `${ACTIVE_CLASS}`);
        });
    });

    it(`Should have .${AVAILABLE_COLUMNS_CLASS} and .${SELECTED_COLUMNS_CLASS} with 'multiple' attribute`, () => {
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

    it('Should show the SAVE and RESET buttons as disabled by default', () => {
      cy.get('@saveBtn').should('have.attr', 'disabled');
      cy.get('@modal')
        .find(`.${MODAL_CLASSES.FOOTER}`)
        .find(`.${BUTTON_CLASS}`)
        .first()
        .should('have.attr', 'disabled');
    });

    it(`Should show two .${LOCKED_CLASS} columns that are disabled`, () => {
      cy.get('@modal')
        .find(`option.${LOCKED_CLASS}`)
        .as('lockedColumns')
        .should('have.length', 2);
      cy.get('@lockedColumns').should('have.attr', 'disabled');
    });

    it(`Should show the .${LOCKED_CLASS} columns first in selected columns`, () => {
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

    it('Should close the modal via CANCEL and X buttons', () => {
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

    it('Should select and deselect an available column and enable the SAVE and RESET buttons', () => {
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

    it('Should select and deselect multiple available columns', () => {
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

    it('Should reset the columns to their initial state on RESET button click', () => {
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

    it(`Should trigger the ${TOOLBAR_EVENTS.COLUMNS_CHANGE} event on SAVE button click`, () => {
      cy.window()
        .its('toolbarExample')
        .then(toolbarExample => {
          const component = toolbarExample.$refs.toolbarRef;
          const spy = cy.spy();

          component.$on(`${TOOLBAR_EVENTS.COLUMNS_CHANGE}`, spy);
          cy.get('@columnsBtn').click();
          cy.get('@availableColumns').select('columnA');
          cy.get('@moveRightBtn').click();
          cy.get('@saveBtn')
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
        });
      cy.get('@columnsBtn').click();
      cy.get('@resetBtn').click();
      cy.get('@saveBtn').click();
    });

    it(`Should order available columns alphabetically by default`, () => {
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
      it.skip(`Should show all move buttons as disabled by default`, () => {
        cy.get('@columnsBtn').click();
        cy.get('@modalContent')
          .find(`.${BUTTON_CLASS}`)
          .should('have.attr', 'disabled');
        cy.get('@closeBtn').click();
      });

      it.skip(`Should show the move up button as disabled when selecting the first clickable column in selected columns`, () => {
        cy.get('@columnsBtn').click();
        cy.get('@selectedColumns')
          .select('columnE')
          .then(() => {
            cy.get('@moveUpBtn').should('have.attr', 'disabled');
          });
        cy.get('@closeBtn').click();
      });

      it.skip(`Should show the move up button as disabled when selecting the first column in selected columns (no locked)`, () => {
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

      it.skip(`Should show the move down button as disabled when selecting the last column in selected columns`, () => {
        cy.get('@columnsBtn').click();
        cy.get('@selectedColumns')
          .select('columnF')
          .then(() => {
            cy.get('@moveUpBtn').should('have.attr', 'disabled');
          });
        cy.get('@closeBtn').click();
      });

      it.skip(`Should show both the move up and down buttons as disabled when selecting the first and last columns in selected columns`, () => {
        cy.get('@columnsBtn').click();
        cy.get('@selectedColumns')
          .select(['columnE', 'columnF'])
          .then(() => {
            cy.get('@moveUpBtn').should('have.attr', 'disabled');
            cy.get('@moveDownBtn').should('have.attr', 'disabled');
          });
        cy.get('@closeBtn').click();
      });

      it('Should move a column up and down', () => {
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

      it.skip(`Should show both the move up and down buttons as disabled when selecting the only column left in selected columns`, () => {
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

      it.skip(`Should show both the move up and down buttons as disabled when there are no clickable columns in selected columns`, () => {
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

      it.skip(`Should show the move right button as disabled when there are no clickable columns in available columns`, () => {
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

      it.skip(`Should show the move right button as disabled when deselecting an available column after moving it to selected columns`, () => {
        cy.get('@columnsBtn').click();
        cy.get('@availableColumns').select('columnA');
        cy.get('@moveRightBtn')
          .click()
          .then(() => {
            cy.get('@moveRightBtn').should('have.attr', 'disabled');
          });
        cy.get('@closeBtn').click();
      });

      it.skip(`Should show the move left button as disabled when deselecting a selected column after moving it to available columns`, () => {
        cy.get('@columnsBtn').click();
        cy.get('@selectedColumns').select('columnE');
        cy.get('@moveLeftBtn')
          .click()
          .then(() => {
            cy.get('@moveLeftBtn').should('have.attr', 'disabled');
          });
        cy.get('@closeBtn').click();
      });

      it.skip('Should disable all move buttons upon reordering and deselecting', () => {
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
});
