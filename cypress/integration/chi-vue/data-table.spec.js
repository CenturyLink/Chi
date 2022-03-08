const ACTIVE_CLASS = '-active';
const ACTIVE_ATTR = 'active';
const EXPANDED_CLASS = '-expanded';
const PORTAL_CLASS = '-portal';
const ICON_BUTTON = '-icon';
const ICON_CLASS = 'chi-icon';
const BUTTON_CLASS = 'chi-button';
const INFO_ICON_CLASS = 'icon-circle-info-outline';
const ARROW_UP_CLASS = 'icon-arrow-up';
const ARROW_SORT_CLASS = 'icon-arrow-sort';
const CLOSE_CLASS = '-close';
const DATA_TABLE_CLASSES = {
  DATA_TABLE: 'chi-data-table',
  TOOLBAR: 'chi-data-table__toolbar',
  FILTERS: 'chi-data-table__filters',
  COLUMNS: 'chi-data-table__columns',
  HEAD: 'chi-data-table__head',
  BODY: 'chi-data-table__body',
  ROW: 'chi-data-table__row',
  ROW_CHILD: 'chi-data-table__row-child',
  ROW_GRAND_CHILD: 'chi-data-table__row-grand-child',
  EMPTY: 'chi-data-table__row-empty',
  CELL: 'chi-data-table__cell',
  FOOTER: 'chi-data-table__footer',
  EXPANDABLE: '-expandable',
  SELECTABLE: '-selectable',
  PORTAL: '-portal',
  BORDERED: '-bordered',
  NO_BORDER: '-no-border',
  HOVER: '-hover',
  STRIPED: '-striped',
  SORTING: '-sorting',
  COMPACT: '-compact',
  TRUNCATED: '-truncated'
};
const RADIO_CLASSES = {
  RADIO: 'chi-radio'
};
const PAGINATION_CLASSES = {
  PAGINATION: 'chi-pagination',
  RESULTS: 'chi-pagination__results',
  COMPACT: '-compact',
  CONTENT: 'chi-pagination__content',
  LABEL: 'chi-pagination__label',
  PAGE_SIZE: 'chi-pagination__page-size',
  START: 'chi-pagination__start',
  CENTER: 'chi-pagination__center',
  END: 'chi-pagination__end',
  JUMPER: 'chi-pagination__jumper'
};
const DATA_TABLE_EVENTS = {
  SELECTED_ROWS_CHANGE: 'chiSelectedRowsChange',
  DATA_SORTING: 'chiDataSorting',
  FILTERS_CHANGE: 'chiFiltersChange',
  COLUMNS_CHANGE: 'chiColumnsChange',
  ADVANCED_FILTERS_CHANGE: 'chiAdvancedFiltersChange',
  TOOLBAR: {
    COLUMNS_CHANGE: 'chiToolbarColumnsChange',
    FILTERS_CHANGE: 'chiToolbarFiltersChange',
    SEARCH: 'chiToolbarSearch'
  },
  EXPANSION: {
    EXPANDED: 'chiRowExpanded',
    COLLAPSED: 'chiRowCollapsed'
  },
  BULK_ACTIONS: {
    SHOW_SELECTED_ONLY: 'chiShowSelectedRowsOnly',
    CANCEL: 'chiCancel'
  }
};
const PAGINATION_EVENTS = {
  PAGE_CHANGE: 'chiPageChange',
  PAGE_SIZE: 'chiPageSizeChange'
};
const UTILITY_CLASSES = {
  TYPOGRAPHY: {
    TEXT_TRUNCATE: '-text--truncate'
  }
};
const TOOLTIP_CLASSES = {
  TOOLTIP: 'chi-tooltip'
};
const BULK_ACTIONS_CLASSES = {
  BULK_ACTIONS: 'chi-bulk-actions',
  START: 'chi-bulk-actions__start',
  END: 'chi-bulk-actions__end',
  BUTTONS: 'chi-bulk-actions__buttons',
  BUTTONS_DESKTOP: 'chi-bulk-actions__buttons-desktop',
  BUTTONS_MOBILE: 'chi-bulk-actions__buttons-mobile',
  LABEL: 'chi-bulk-actions__label',
}
const CHECKBOXES_CLASSES = {
  LABEL: 'chi-checkbox__label'
}

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

const checkStatusSorting = statuses => {
  statuses.forEach((status, index) => {
    cy.get('@rows')
      .eq(index)
      .should('contain', status);
  });
};

const checkDateSorting = dates => {
  dates.forEach((date, index) => {
    cy.get('@rows')
      .eq(index)
      .should('contain', date);
  });
};

const isSelected = elements => {
  elements.forEach(el => expect(el.selected).to.be.true);
};

const isNotSelected = elements => {
  elements.forEach(el => expect(el.selected).to.be.false);
};

describe('Data Table', () => {
  before(() => {
    cy.visit('tests/chi-vue/data-table.html');
  });

  describe('Base', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table']`)
        .children()
        .first()
        .children()
        .first()
        .as('head');
      cy.get(`[data-cy='data-table']`)
        .children()
        .first()
        .children()
        .eq(1)
        .as('body');
      cy.get(`@body`)
        .children()
        .first()
        .as('row');
      cy.get(`@row`)
        .children()
        .first()
        .as('cell');
      cy.get(`[data-cy='data-table']`)
        .children()
        .first()
        .children()
        .last()
        .as('footer');
    });

    const selectors = [
      { el: `[data-cy='data-table']`, class: DATA_TABLE_CLASSES.DATA_TABLE },
      { el: '@head', class: DATA_TABLE_CLASSES.HEAD },
      { el: '@body', class: DATA_TABLE_CLASSES.BODY },
      { el: `@row`, class: DATA_TABLE_CLASSES.ROW },
      { el: `@cell`, class: DATA_TABLE_CLASSES.CELL },
      { el: `@footer`, class: DATA_TABLE_CLASSES.FOOTER }
    ];

    selectors.forEach(sel => {
      it(`${sel.el} should have class .${sel.class}`, () => {
        hasClassAssertion(sel.el, sel.class);
      });
    });

    it('Should update data successfully', () => {
      cy.get(`[data-cy='data-table-container']`)
        .find('button')
        .contains('Update')
        .click()
        .then(() => {
          cy.get('@row').should('contain', 'Updated Name 1');
        });
    });

    describe('Pagination', () => {
      beforeEach(() => {
        cy.get(`[data-cy='data-table'] .${PAGINATION_CLASSES.PAGINATION}`).as(
          'pagination'
        );
      });

      it(`Should show label 'per page'`, () => {
        cy.get(`@pagination`)
          .find(`select`)
          .should('contain', '20');
        cy.get(`@pagination`)
          .find(`.${PAGINATION_CLASSES.LABEL}`)
          .should('contain', 'per page');
      });

      it('Should trigger next and prev page', () => {
        cy.window()
          .its('baseDataTable')
          .then(baseDataTable => {
            const component = baseDataTable.$refs.base;
            const spy = cy.spy();

            component.$on(`${PAGINATION_EVENTS.PAGE_CHANGE}`, spy);
            cy.get(`@pagination`)
              .find(`.${ICON_BUTTON}`)
              .as('paginationIcons')
              .eq(2)
              .click()
              .then(() => {
                expect(spy).to.be.calledOnce;
                cy.get(`@pagination`)
                  .find(`button[data-page='2']`)
                  .eq(0)
                  .as('pageTwoButton');
                hasClassAssertion(`@pageTwoButton`, `${ACTIVE_CLASS}`);
                cy.get(`@row`).should('contain', 'Name 4');
              });
            cy.get('@paginationIcons')
              .eq(1)
              .click()
              .then(() => {
                expect(spy).to.be.calledTwice;
                cy.get(`@pagination`)
                  .find(`button[data-page='1']`)
                  .eq(1)
                  .as('pageOneButton');
                hasClassAssertion(`@pageOneButton`, `${ACTIVE_CLASS}`);
                cy.get(`@row`).should('contain', 'Updated Name 1');
              });
          });
      });

      it('Should jump page correctly on input', () => {
        cy.get(`@pagination`)
          .find(`.${PAGINATION_CLASSES.JUMPER} input`)
          .as('pagJumperInput')
          .type('2{enter}')
          .then(() => {
            cy.get(`@row`).should('contain', 'Name 4');
            cy.get(`@pagination`)
              .find(`button[data-page='2']`)
              .as('secondPageBtn');
            hasClassAssertion('@secondPageBtn', ACTIVE_CLASS);
          });
        cy.get('@pagJumperInput')
          .type('{backspace}1{enter}')
          .then(() => {
            cy.get(`@row`).should('contain', 'Updated Name 1');
            cy.get(`@pagination`)
              .find(`button[data-page='1']`)
              .as('firstPageBtn');
            hasClassAssertion('@firstPageBtn', ACTIVE_CLASS);
          });
        cy.get('@pagJumperInput').type('{backspace}');
        cy.get(`@firstPageBtn`)
          .eq(1)
          .click();
      });

      it('Should change page correctly on page number click', () => {
        cy.get(`@pagination`)
          .find(`button[data-page='2']`)
          .eq(0)
          .as('pageTwoButton')
          .click()
          .then(() => {
            hasClassAssertion('@pageTwoButton', `${ACTIVE_CLASS}`);
            cy.get(`@row`).should('contain', 'Name 4');
          });
        cy.get(`@pagination`)
          .find(`button[data-page='1']`)
          .eq(2)
          .as('pageOneButton')
          .click()
          .then(() => {
            hasClassAssertion('@pageOneButton', `${ACTIVE_CLASS}`);
            cy.get(`@row`).should('contain', 'Updated Name 1');
          });
      });

      it('Should go to first and last pages', () => {
        cy.get(`@pagination`)
          .find(`.${ICON_BUTTON}`)
          .as('paginationIcons')
          .eq(2)
          .click()
          .then(() => {
            cy.get(`@pagination`)
              .find(`button[data-page='2']`)
              .as('pageTwoButton');
            hasClassAssertion(`@pageTwoButton`, `${ACTIVE_CLASS}`);
            cy.get(`@row`).should('contain', 'Name 4');
          });
        cy.get('@paginationIcons')
          .eq(0)
          .click()
          .then(() => {
            cy.get(`@pagination`)
              .find(`button[data-page='1']`)
              .as('pageOneButton');
            hasClassAssertion(`@pageOneButton`, `${ACTIVE_CLASS}`);
            cy.get(`@row`).should('contain', 'Updated Name 1');
          });
      });

      it('Should change number of page results', () => {
        cy.window()
          .its('baseDataTable')
          .then(baseDataTable => {
            const component = baseDataTable.$refs.base;
            const spy = cy.spy();

            component.$on(`${PAGINATION_EVENTS.PAGE_SIZE}`, spy);
            cy.get('@body')
              .find(`.${DATA_TABLE_CLASSES.ROW}`)
              .should('have.length', 3);
            cy.get(`@pagination`)
              .find(`.${PAGINATION_CLASSES.PAGE_SIZE} select`)
              .as('pagSelect')
              .select('40')
              .then(() => {
                expect(spy).to.be.called;
                cy.get(`@pagination`)
                  .find(`button[data-page='2']`)
                  .should('have.attr', 'disabled');
                cy.get('@body')
                  .find(`.${DATA_TABLE_CLASSES.ROW}`)
                  .should('have.length', 6);
                cy.get('@pagSelect').should('contain', '40');
              });
          });
      });
    });

    describe('Default (non-truncation)', () => {
      it(`Should not have head cells with class .${DATA_TABLE_CLASSES.TRUNCATED}`, () => {
        cy.get(
          `[data-cy='data-table'] .${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL}`
        ).should('not.have.class', DATA_TABLE_CLASSES.TRUNCATED);
      });

      it(`Should not contain class .${UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE} within the head cells`, () => {
        cy.get(
          `[data-cy='data-table'] .${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL}`
        )
          .children()
          .should('not.have.class', UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE);
      });
    });
  });

  describe('Truncation', () => {
    it(`Should not have body cells with class .${DATA_TABLE_CLASSES.TRUNCATED}`, () => {
      cy.get(
        `[data-cy='data-table-truncation'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.CELL}`
      ).should('not.have.class', DATA_TABLE_CLASSES.TRUNCATED);
    });

    it(`Should contain class .${UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE} within the head cells`, () => {
      cy.get(
        `[data-cy='data-table-truncation'] .${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL}`
      )
        .find(`.${UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}`)
        .should('exist');
    });

    const headCellsTooltips = [false, false, true, true, true];

    headCellsTooltips.forEach((isVisible, index) => {
      const assertion = !isVisible ? 'not.exist' : 'exist';

      it(`Tooltip element ${index} should ${!isVisible ? 'not' : ''
        } exist as the label is ${!isVisible ? 'not' : ''} truncated`, () => {
          cy.get(`[data-cy='data-table-truncation'] .${DATA_TABLE_CLASSES.HEAD}`)
            .find(`.${DATA_TABLE_CLASSES.CELL}`)
            .eq(index)
            .children()
            .first()
            .as('trigger')
            .trigger('mouseenter')
            .then(() => {
              cy.get('@trigger')
                .find(`.${TOOLTIP_CLASSES.TOOLTIP}`)
                .should(assertion);
            });
        });
    });
  });

  describe('Empty', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.EMPTY}`, () => {
      cy.get(`[data-cy='data-table-empty'] .${DATA_TABLE_CLASSES.BODY}`)
        .children()
        .first()
        .as('empty');
      hasClassAssertion(`@empty`, DATA_TABLE_CLASSES.EMPTY);
    });

    it(`Should show default message when it is empty`, () => {
      cy.get(`[data-cy='data-table-empty']`).should(
        'contain',
        'No matches found. Please revise search criteria and try again.'
      );
    });

    it('Should have no rows', () => {
      cy.get(
        `[data-cy='data-table-empty'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
      ).should('not.exist');
    });

    it('Should have no footer', () => {
      cy.get(`[data-cy='data-table-empty']`)
        .find(`.${DATA_TABLE_CLASSES.FOOTER}`)
        .should('not.exist');
    });
  });

  describe('No border', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.NO_BORDER}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-no-border']`,
        DATA_TABLE_CLASSES.NO_BORDER
      );
    });
  });

  describe('Striped', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.STRIPED}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-striped']`,
        DATA_TABLE_CLASSES.STRIPED
      );
    });
  });

  describe('Hover', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.HOVER}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-hover']`,
        DATA_TABLE_CLASSES.HOVER
      );
    });
  });

  describe('Bordered', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.BORDERED}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-bordered']`,
        DATA_TABLE_CLASSES.BORDERED
      );
    });
  });

  describe('Active', () => {
    it(`Should have class .${ACTIVE_CLASS}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-active'] .${DATA_TABLE_CLASSES.ROW}`,
        ACTIVE_CLASS
      );
    });
  });

  describe('Selectable', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-selectable']`)
        .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
        .as('selectables');
    });

    it(`Should have class .${DATA_TABLE_CLASSES.SELECTABLE}`, () => {
      const rows = [0, 1, 2, 3];

      rows.forEach(rowIndex => {
        cy.get(`[data-cy='data-table-selectable'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(rowIndex)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(0)
          .as('firstCell');
        hasClassAssertion(`@firstCell`, DATA_TABLE_CLASSES.SELECTABLE);
      });
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE} event`, () => {
      cy.window()
        .its('selectableDataTable')
        .then(selectableDataTable => {
          const component = selectableDataTable.$refs.selectable;
          const spy = cy.spy();

          component.$on(`${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE}`, spy);
          cy.get('@selectables')
            .eq(0)
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
          cy.get('@selectables')
            .eq(0)
            .click();
        });
    });

    it('Should select and deselect all rows', () => {
      cy.get('@selectables')
        .eq(0)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-selectable'] .${DATA_TABLE_CLASSES.ROW}`
          ).as('rows');
          hasClassAssertion('@rows', `${ACTIVE_CLASS}`);
          cy.get('@rows')
            .find('input')
            .as('checkboxes')
            .should('be.checked');
        });
      cy.get(
        `[data-cy='data-table-selectable'] .${PAGINATION_CLASSES.PAGINATION}`
      )
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons')
        .eq(1)
        .click()
        .then(() => {
          cy.get('@rows').should('not.have.class', ACTIVE_CLASS);
          cy.get('@checkboxes').should('not.be.checked');
        });
      cy.get(`@paginationIcons`)
        .eq(0)
        .click()
        .then(() => {
          hasClassAssertion('@rows', ACTIVE_CLASS);
          cy.get('@checkboxes').should('be.checked');
        });
      cy.get('@selectables')
        .eq(0)
        .click()
        .then(() => {
          cy.get('@rows').should('not.have.class', ACTIVE_CLASS);
          cy.get('@checkboxes').should('not.be.checked');
        });
    });

    it('Should select and deselect a row', () => {
      cy.get('@selectables')
        .eq(1)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-selectable'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
          )
            .eq(0)
            .as('firstRow');
          hasClassAssertion('@firstRow', ACTIVE_CLASS);
        });
      cy.get('@selectables')
        .eq(1)
        .click()
        .then(() => {
          cy.get('@firstRow').should('not.have.class', ACTIVE_CLASS);
        });
    });

    it('Should keep selected row on page change', () => {
      cy.get('@selectables')
        .eq(1)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-selectable'] .${PAGINATION_CLASSES.PAGINATION}`
          )
            .find(`.${ICON_BUTTON}`)
            .as('paginationIcons')
            .eq(1)
            .click();
        });
      cy.get('@paginationIcons')
        .eq(0)
        .click()
        .then(() => {
          hasClassAssertion(
            `[data-cy='data-table-selectable'] .${DATA_TABLE_CLASSES.ROW}`,
            ACTIVE_CLASS
          );
        });
      cy.get('@selectables')
        .eq(1)
        .click();
    });
  });

  describe('All selected', () => {
    it('Should have the select all checkbox checked by default', () => {
      cy.get(`[data-cy='data-table-all-selected'] .${DATA_TABLE_CLASSES.ROW}`)
        .as('rows')
        .should('have.length', 4);
      hasClassAssertion('@rows', `${ACTIVE_CLASS}`);
      cy.get('@rows')
        .find('input')
        .as('checkboxes')
        .should('be.checked');
    });

    it('Should keep the select all checkbox checked upon pagination change', () => {
      cy.get(`[data-cy='data-table-all-selected'] .${DATA_TABLE_CLASSES.ROW}`)
        .as('rows')
        .find('input')
        .as('checkboxes')
        .should('be.checked');

      cy.get(
        `[data-cy='data-table-server-side'] .${PAGINATION_CLASSES.PAGINATION}`
      )
        .as('pagination')
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons')
        .eq(2)
        .click()
        .then(() => {
          cy.get('@checkboxes').should('be.checked');
        });

      cy.get('@paginationIcons')
        .eq(0)
        .click()
        .then(() => {
          cy.get('@checkboxes').should('be.checked');
        });
    });
  });

  describe('Radio selection', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-radio']`)
        .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
        .find(`.${RADIO_CLASSES.RADIO}`)
        .as('radios');
    });

    it(`Should have class .${RADIO_CLASSES.RADIO}`, () => {
      const rows = [1, 2, 3];

      rows.forEach(rowIndex => {
        cy.get(`[data-cy='data-table-radio'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(rowIndex)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .first()
          .children()
          .first()
          .as('rowRadio');

        hasClassAssertion(`@rowRadio`, RADIO_CLASSES.RADIO);
      });
    });

    it(`Should not have class .${RADIO_CLASSES.RADIO} when it is a child`, () => {
      cy.get(`[data-cy='data-table-radio']`)
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .find(`.${DATA_TABLE_CLASSES.CELL}`)
        .first()
        .should('not.have.class', RADIO_CLASSES.RADIO);
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE} event`, () => {
      cy.window()
        .its('radioDataTable')
        .then(radioDataTable => {
          const component = radioDataTable.$refs.radio;
          const spy = cy.spy();

          component.$on(`${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE}`, spy);
          cy.get('@radios')
            .eq(0)
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
          cy.get('@radios')
            .eq(0)
            .click();
        });
    });

    it('Should select a row', () => {
      cy.get('@radios')
        .eq(1)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-radio'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
          )
            .eq(1)
            .find('input')
            .should('be.checked');
        });
    });

    it('Should check that the previous radio is not selected after selecting another row', () => {
      cy.get('@radios')
        .eq(0)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-radio'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
          )
            .eq(1)
            .find('input')
            .should('not.be.checked');
        });
    });

    it('Should keep selected row on page change', () => {
      cy.get('@radios')
        .eq(1)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-radio'] .${PAGINATION_CLASSES.PAGINATION}`
          )
            .find(`.${ICON_BUTTON}`)
            .as('paginationIcons')
            .eq(1)
            .click();
        });
      cy.get('@paginationIcons')
        .eq(0)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-radio'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
          )
            .eq(1)
            .find('input')
            .should('be.checked');
        });
    });
  });

  describe('Accordion', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.EXPANDABLE}`, () => {
      const rows = [1, 2, 3];

      rows.forEach(rowIndex => {
        cy.get(`[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(rowIndex)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(0)
          .as('firstCell');
        hasClassAssertion(`@firstCell`, DATA_TABLE_CLASSES.EXPANDABLE);
      });
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.EXPANSION.EXPANDED} event`, () => {
      cy.window()
        .its('accordionDataTable')
        .then(accordionDataTable => {
          const component = accordionDataTable.$refs.accordion;
          const spy = cy.spy();

          component.$on(`${DATA_TABLE_EVENTS.EXPANSION.EXPANDED}`, spy);
          cy.get(`[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.BODY}`)
            .find(`.${DATA_TABLE_CLASSES.EXPANDABLE} button`)
            .eq(0)
            .as('expandableButton')
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
          cy.get('@expandableButton').click();
        });
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.EXPANSION.COLLAPSED} event`, () => {
      cy.window()
        .its('accordionDataTable')
        .then(accordionDataTable => {
          const component = accordionDataTable.$refs.accordion;
          const spy = cy.spy();

          component.$on(`${DATA_TABLE_EVENTS.EXPANSION.COLLAPSED}`, spy);
          cy.get(`[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.BODY}`)
            .find(`.${DATA_TABLE_CLASSES.EXPANDABLE} button`)
            .eq(0)
            .as('expandableButton')
            .click();
          cy.get('@expandableButton')
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
        });
    });

    it(`Should have class .${DATA_TABLE_CLASSES.ROW_CHILD}`, () => {
      cy.get(`[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.BODY}`)
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .should('have.length', 3);
    });

    it(`Should have collapsed content`, () => {
      cy.get(`[data-cy='data-table-accordion']`)
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .should('contain', 'Accordion content');
    });

    it(`Should expand and collapse first row`, () => {
      cy.get(`[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.BODY}`)
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .as('rows')
        .should('not.have.class', `${EXPANDED_CLASS}`);
      cy.get(
        `[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.BODY} div[id$="-content"]`
      )
        .eq(0)
        .as('childRowContainer')
        .should('have.css', 'display', 'none');
      cy.get(`[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.BODY}`)
        .find(`.${DATA_TABLE_CLASSES.EXPANDABLE} button`)
        .eq(0)
        .as('expandableButton')
        .click()
        .then(() => {
          hasClassAssertion('@rows', `${EXPANDED_CLASS}`);
          cy.get('@childRowContainer').should(
            'not.have.css',
            'display',
            'none'
          );
        });
      cy.get('@expandableButton')
        .click()
        .then(() => {
          cy.get('@rows').should('not.have.class', `${EXPANDED_CLASS}`);
        });
    });
  });

  describe('Sorting', () => {
    describe('Base', () => {
      beforeEach(() => {
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.BODY}`)
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .as('rows');
      });

      it(`Should have class .${DATA_TABLE_CLASSES.SORTING}`, () => {
        hasClassAssertion(
          `[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.CELL}`,
          DATA_TABLE_CLASSES.SORTING
        );
      });

      it(`Should trigger the ${DATA_TABLE_EVENTS.DATA_SORTING} event`, () => {
        cy.window()
          .its('sortingDataTable')
          .then(sortingDataTable => {
            const component = sortingDataTable.$refs.sorting;
            const spy = cy.spy();

            component.$on(`${DATA_TABLE_EVENTS.DATA_SORTING}`, spy);
            cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
              .eq(0)
              .find(`.${DATA_TABLE_CLASSES.CELL}`)
              .eq(0)
              .as('firstCell');
            for (let i = 1; i <= 3; i++) {
              cy.get('@firstCell')
                .click()
                .then(() => {
                  expect(spy).to.be.called;
                });
            }
            cy.reload();
          });
      });

      it(`Should sort by name with the correct icons`, () => {
        cy.get('@rows')
          .eq(0)
          .should('contain', 'Name 1');
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(0)
          .as('firstCell')
          .find(`.${ICON_CLASS}`)
          .as('sortIcon');
        hasClassAssertion('@sortIcon', `${ARROW_SORT_CLASS}`);
        cy.get('@firstCell')
          .click()
          .then(() => {
            hasClassAssertion('@sortIcon', `${ARROW_UP_CLASS}`);
            cy.get('@rows')
              .eq(0)
              .should('contain', 'Name 1');
            cy.get('@sortIcon').should('have.css', 'transform', 'none');
          });
        cy.get('@firstCell')
          .click()
          .then(() => {
            hasClassAssertion('@sortIcon', `${ARROW_UP_CLASS}`);
            cy.get('@sortIcon')
              .should('have.attr', 'style')
              .should('contain', 'transform: rotate(180deg);');
            cy.get('@rows')
              .eq(0)
              .should('contain', 'Surname 2');
          });
        cy.reload();
      });

      it(`Should sort by status using a custom template`, () => {
        const statuses = ['active', 'inact', 'active'];

        checkStatusSorting(statuses);
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(1)
          .as('idCell')
          .click()
          .then(() => {
            const actives = ['active', 'active', 'active'];

            checkStatusSorting(actives);
          });
        cy.get('@idCell')
          .click()
          .then(() => {
            const inactives = ['inact', 'inact', 'inact'];

            checkStatusSorting(inactives);
          });
        cy.reload();
      });

      it(`Should sort by date`, () => {
        const dates = ['6 Jan 2018', '5 Jul 2018', '5 Apr 2019'];

        checkDateSorting(dates);
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(2)
          .as('dateCell')
          .click()
          .then(() => {
            const datesAsc = ['5 Mar 2017', '6 Jan 2018', '5 Feb 2018'];

            checkDateSorting(datesAsc);
          });
        cy.get('@dateCell')
          .click()
          .then(() => {
            const datesDesc = ['5 Apr 2019', '9 Nov 2018', '5 Jul 2018'];

            checkDateSorting(datesDesc);
          });
        cy.reload();
      });

      it(`Should sort correctly on page change`, () => {
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(0)
          .as('firstCell')
          .click();
        cy.get('@firstCell').click();
        cy.get('@rows')
          .eq(0)
          .should('contain', 'Surname 2');
        cy.get(
          `[data-cy='data-table-sorting'] .${PAGINATION_CLASSES.PAGINATION} .${ICON_BUTTON}`
        )
          .eq(1)
          .click()
          .then(() => {
            cy.get('@rows')
              .eq(0)
              .should('contain', 'Name 5');
          });
        cy.get(
          `[data-cy='data-table-sorting'] .${PAGINATION_CLASSES.PAGINATION} .${ICON_BUTTON}`
        )
          .eq(0)
          .click()
          .then(() => {
            cy.get('@rows')
              .eq(0)
              .should('contain', 'Surname 2');
          });
        cy.get('@firstCell').click();
      });
    });

    describe('Default sorting asc', () => {
      it(`Should have ascending sorting by default`, () => {
        cy.get(`[data-cy='data-table-sorting-asc'] .${DATA_TABLE_CLASSES.BODY}`)
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .as('rows')
          .first()
          .should('contain', 'active');
        cy.get('@rows')
          .eq(1)
          .should('contain', 'active');
        cy.get('@rows')
          .eq(2)
          .should('contain', 'active');
        cy.get('@rows').should('have.length', 3);
      });
    });

    describe('Default sorting desc', () => {
      it(`Should have descending sorting by default`, () => {
        cy.get(
          `[data-cy='data-table-sorting-desc'] .${DATA_TABLE_CLASSES.BODY}`
        )
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .as('rows')
          .eq(0)
          .should('contain', 'Name 6');
        cy.get('@rows')
          .eq(1)
          .should('contain', 'Name 5');
        cy.get('@rows')
          .eq(2)
          .should('contain', 'Name 4');
      });
    });

    describe('Unsorted', () => {
      it(`Should sort by name with all 3 steps`, () => {
        cy.get(
          `[data-cy='data-table-sorting-unsorted'] .${DATA_TABLE_CLASSES.BODY}`
        )
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .as('rows')
          .first()
          .should('contain', 'Name 2');
        cy.get(
          `[data-cy='data-table-sorting-unsorted'] .${DATA_TABLE_CLASSES.ROW}`
        )
          .first()
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .first()
          .as('firstCell')
          .find(`.${ICON_CLASS}`)
          .as('sortIcon');
        hasClassAssertion('@sortIcon', `${ARROW_SORT_CLASS}`);
        cy.get('@firstCell')
          .click()
          .then(() => {
            hasClassAssertion('@sortIcon', `${ARROW_UP_CLASS}`);
            cy.get('@rows')
              .first()
              .should('contain', 'Name 1');
            cy.get('@sortIcon').should('have.css', 'transform', 'none');
          });
        cy.get('@firstCell')
          .click()
          .then(() => {
            hasClassAssertion('@sortIcon', `${ARROW_UP_CLASS}`);
            cy.get('@sortIcon')
              .should('have.attr', 'style')
              .should('contain', 'transform: rotate(180deg);');
            cy.get('@rows')
              .first()
              .should('contain', 'Name 6');
          });
        cy.get('@firstCell')
          .click()
          .then(() => {
            cy.get('@rows')
              .first()
              .should('contain', 'Name 2');
            hasClassAssertion('@sortIcon', `${ARROW_SORT_CLASS}`);
          });
      });
    });
  });

  describe('Sizes', () => {
    const sizes = ['-xs', '-sm', '-md', '-lg', '-xl'];

    sizes.forEach(size => {
      it(`Should have class .${size}`, () => {
        hasClassAssertion(`[data-cy='data-table${size}']`, size);
      });
    });
  });

  describe('Description', () => {
    beforeEach(() => {
      cy.get('[data-cy="data-table-description"]')
        .find(`i.${INFO_ICON_CLASS}`)
        .as('popoverTriggers');
      cy.get('[data-cy="data-table-description"]')
        .find('chi-popover')
        .as('popovers');
    });

    it('Should toggle info popover and show the provided title and content', () => {
      cy.get('@popoverTriggers').should('not.have.attr', ACTIVE_ATTR);
      cy.get('@popoverTriggers')
        .first()
        .click({ force: true })
        .then(() => {
          cy.get('@popovers')
            .first()
            .should('have.attr', ACTIVE_ATTR);
          cy.get('@popovers')
            .first()
            .should('contain', 'Name');
          cy.get('@popovers')
            .first()
            .should('contain', 'This is Name description');
        });
      cy.get('@popoverTriggers')
        .first()
        .click({ force: true })
        .then(() => {
          cy.get('@popovers')
            .first()
            .should('not.have.attr', ACTIVE_ATTR);
        });
    });

    it('Should open info popover with custom template', () => {
      cy.get('@popoverTriggers').should('not.have.attr', ACTIVE_ATTR);
      cy.get('@popoverTriggers')
        .last()
        .click({ force: true })
        .then(() => {
          cy.get('@popovers')
            .last()
            .should('have.attr', ACTIVE_ATTR);
          cy.get('@popovers')
            .last()
            .should('contain', 'Status');
          cy.get('@popovers')
            .last()
            .find(`.${ICON_CLASS}`)
            .should('have.length', 2);
          cy.get('@popovers')
            .last()
            .should('contain', 'Due');
          cy.get('@popovers')
            .last()
            .should('contain', 'Overdue');
        });
      cy.get('@popoverTriggers')
        .last()
        .click({ force: true });
    });

    it('Should not sort when clicking on info icon in a sortable header cell', () => {
      cy.get('@popoverTriggers').should('not.have.attr', ACTIVE_ATTR);
      cy.get(`[data-cy='data-table-description'] .${DATA_TABLE_CLASSES.BODY}`)
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .as('rows')
        .first()
        .should('contain', 'Name 2');
      cy.get('@popoverTriggers')
        .last()
        .click({ force: true })
        .then(() => {
          cy.get('@popovers')
            .last()
            .should('have.attr', ACTIVE_ATTR);
          cy.get('@rows')
            .first()
            .should('contain', 'Name 2');
        });
      cy.get('@popoverTriggers')
        .last()
        .click({ force: true });
    });

    it('Should still sort column when clicking outside the info icon', () => {
      cy.get(`[data-cy='data-table-description'] .${DATA_TABLE_CLASSES.BODY}`)
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .as('rows')
        .first()
        .should('contain', 'Name 2');
      cy.get('[data-cy="data-table-description"]')
        .find(`.${DATA_TABLE_CLASSES.SORTING}`)
        .click()
        .then(() => {
          cy.get('@rows')
            .first()
            .should('contain', 'Name 1');
        });
    });
  });

  describe('Bulk Actions', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-bulk-actions']`)
        .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
        .as('selectables');
      cy.get(`[data-cy='data-table-bulk-actions'] 
        .${PAGINATION_CLASSES.PAGINATION}`).as('pagination');
      cy.get(`[data-cy='data-table-bulk-actions'] 
        .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`)
        .as('rows');
    });

    it('Should create bulk actions when row is selected', () => {
      cy.get('@selectables')
        .eq(1)
        .click();
      cy.get(`[data-cy='data-table-bulk-actions']`)
        .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`)
        .should('be.visible');
    });

    it('Should select "Show selected only" and show all the selected rows', () => {
      cy.window()
        .its('dataTableBulkActionsExample')
        .then(dataTableBulkActionsExample => {
          const paginationResults = '1';
          const selected = '1';
          const spy = cy.spy();
          const dataTableRef = dataTableBulkActionsExample.$refs.dataTableBulkActionsRef;

          dataTableRef.$on(`${DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY}`, spy);
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
            .${CHECKBOXES_CLASSES.LABEL}`)
            .click()
            .then(() => {
              cy.get('@selectables')
                .find('input')
                .should('be.checked');
              cy.get(
                `[data-cy='data-table-bulk-actions'] .${PAGINATION_CLASSES.PAGINATION} 
                    .${PAGINATION_CLASSES.RESULTS}`
              )
                .find('span')
                .contains(`${paginationResults} results`);
              cy.get(`[data-cy='data-table-bulk-actions']`)
                .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                  .${BULK_ACTIONS_CLASSES.LABEL}`)
                .contains(`Actions (${selected} Selected)`);
              cy.get("@rows").should("have.length", 1);
              expect(spy).to.be.calledOnce;
            });
        })
    });

    it('Should deselect "Show selected only" and show data table is still in its original state', () => {
      cy.window()
        .its('dataTableBulkActionsExample')
        .then(dataTableBulkActionsExample => {
          const paginationResults = '6';
          const selected = '1';
          const spy = cy.spy();
          const dataTableRef = dataTableBulkActionsExample.$refs.dataTableBulkActionsRef;

          dataTableRef.$on(`${DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY}`, spy);
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
            .${CHECKBOXES_CLASSES.LABEL}`)
            .click()
            .then(() => {
              cy.get(`[data-cy='data-table-bulk-actions']`)
                .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
                .as('selectablesAfterClick');
              cy.get('@selectablesAfterClick')
                .eq(1)
                .find('input')
                .should('be.checked');
              cy.get('@selectablesAfterClick')
                .eq(2)
                .find('input')
                .should('not.be.checked');
              cy.get(
                `[data-cy='data-table-bulk-actions'] .${PAGINATION_CLASSES.PAGINATION} 
                    .${PAGINATION_CLASSES.RESULTS}`
              )
                .find('span')
                .contains(`${paginationResults} results`);
              cy.get(`[data-cy='data-table-bulk-actions']`)
                .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                  .${BULK_ACTIONS_CLASSES.LABEL}`)
                .contains(`Actions (${selected} Selected)`);
              cy.get("@rows").should("have.length", 3);
              expect(spy).to.be.calledOnce;
            });
        });
    });

    it('Should reset data table rows to the initial state when closing bulk actions clicking the X button', () => {
      cy.window()
        .its('dataTableBulkActionsExample')
        .then(dataTableBulkActionsExample => {
          const spy = cy.spy();
          const dataTableRef = dataTableBulkActionsExample.$refs.dataTableBulkActionsRef;
          const paginationResults = '6';

          dataTableRef.$on(`${DATA_TABLE_EVENTS.BULK_ACTIONS.CANCEL}`, spy);
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.END} .${BUTTON_CLASS} .${CLOSE_CLASS}`)
            .click()
            .then(() => {
              cy.get(`[data-cy='data-table-bulk-actions']`)
                .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`)
                .should('not.be.visible');
              cy.get('@selectables')
                .find('input')
                .should('not.be.checked');
              cy.get("@rows").should("have.length", 3);
              cy.get(
                `[data-cy='data-table-bulk-actions'] .${PAGINATION_CLASSES.PAGINATION} 
                    .${PAGINATION_CLASSES.RESULTS}`
              )
                .find('span')
                .contains(`${paginationResults} results`);
              expect(spy).to.be.calledOnce;
            });
        });
    });

    it.skip('Should reset data table rows to the initial state when closing bulk actions having "Show selected only" mode enabled', () => {
      cy.window()
        .its('dataTableBulkActionsExample')
        .then(dataTableBulkActionsExample => {
          const spy = cy.spy();
          const dataTableRef = dataTableBulkActionsExample.$refs.dataTableBulkActionsRef;
          const paginationResults = '6';

          dataTableRef.$on(`${DATA_TABLE_EVENTS.BULK_ACTIONS.CANCEL}`, spy);
          cy.get('@selectables')
            .eq(1)
            .click();
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
            .${CHECKBOXES_CLASSES.LABEL}`)
            .click();
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.END} .${BUTTON_CLASS} .${CLOSE_CLASS}`)
            .click()
            .then(() => {
              cy.get(`[data-cy='data-table-bulk-actions']`)
                .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`)
                .should('not.be.visible');
              cy.get('@selectables')
                .find('input')
                .should('not.be.checked');
              cy.get("@rows").should("have.length", 3);
              cy.get(
                `[data-cy='data-table-bulk-actions'] .${PAGINATION_CLASSES.PAGINATION} 
                  .${PAGINATION_CLASSES.RESULTS}`
              )
                .find('span')
                .contains(`${paginationResults} results`);
              expect(spy).to.be.calledOnce;
            });
        });
    });

    it('Should show custom action buttons (desktop)', () => {
      cy.get('@selectables')
        .eq(1)
        .click();
      cy.get(`[data-cy='data-table-bulk-actions']`)
        .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.BUTTONS} 
          .${BULK_ACTIONS_CLASSES.BUTTONS_DESKTOP}`)
        .should('be.visible');
      cy.get(`[data-cy='data-table-bulk-actions']`)
        .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.BUTTONS} 
          .${BULK_ACTIONS_CLASSES.BUTTONS_MOBILE}`)
        .should('not.be.visible');
    });

    it('The number of selected rows should remain the same when navigating to page 2', () => {
      const selected = '1';

      cy.get('@selectables')
        .first()
        .click();
      cy.get('@selectables')
        .eq(1)
        .click();
      cy.get(`@pagination`)
        .find(`.${ICON_BUTTON}`)
        .eq(1)
        .click()
        .then(() => {
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                  .${BULK_ACTIONS_CLASSES.LABEL}`)
            .contains(`Actions (${selected} Selected)`);
        });
      cy.get(`@pagination`)
        .find(`.${ICON_BUTTON}`)
        .first()
        .click();
    });

    it('The number of selected rows should update when selecting rows on page 2', () => {
      const selected = '2';

      cy.get(`@pagination`)
        .find(`.${ICON_BUTTON}`)
        .eq(1)
        .click()
        .then(() => {
          cy.get('@selectables')
            .eq(1)
            .click();
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                .${BULK_ACTIONS_CLASSES.LABEL}`)
            .contains(`Actions (${selected} Selected)`);
          cy.get(`@pagination`)
            .find(`.${ICON_BUTTON}`)
            .first()
            .click();
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                  .${BULK_ACTIONS_CLASSES.LABEL}`)
            .contains(`Actions (${selected} Selected)`);
        });
    });
  });
});

describe('Data Table Portal', () => {
  before(() => {
    cy.visit('tests/chi-vue/data-table.html');
  });

  describe('Portal', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-portal']`)
        .children()
        .first()
        .children()
        .first()
        .as('head');
      cy.get(`[data-cy='data-table-portal']`)
        .children()
        .first()
        .children()
        .eq(1)
        .as('body');
      cy.get(`@body`)
        .children()
        .first()
        .as('row');
      cy.get(`@row`)
        .children()
        .first()
        .as('cell');
      cy.get(`[data-cy='data-table-portal']`)
        .children()
        .first()
        .children()
        .last()
        .as('footer');
    });

    const selectors = [
      {
        el: `[data-cy='data-table-portal']`,
        class: DATA_TABLE_CLASSES.DATA_TABLE
      },
      { el: `[data-cy='data-table-portal']`, class: PORTAL_CLASS },
      { el: '@head', class: DATA_TABLE_CLASSES.HEAD },
      { el: '@body', class: DATA_TABLE_CLASSES.BODY },
      { el: `@row`, class: DATA_TABLE_CLASSES.ROW },
      { el: `@cell`, class: DATA_TABLE_CLASSES.CELL },
      { el: `@footer`, class: DATA_TABLE_CLASSES.FOOTER },
      { el: `@cell`, class: '-key' }
    ];

    selectors.forEach(sel => {
      it(`${sel.el} should have class .${sel.class}`, () => {
        hasClassAssertion(sel.el, sel.class);
      });
    });

    it(`Should have class .${DATA_TABLE_CLASSES.STRIPED} for even rows`, () => {
      const rows = cy.get('@body').find(`.${DATA_TABLE_CLASSES.ROW}`);

      rows.each((row, i) => {
        if (i % 2 === 1) {
          hasClassAssertion(row, DATA_TABLE_CLASSES.STRIPED);
        }
      });
    });
  });

  describe('Portal empty', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.EMPTY}`, () => {
      cy.get(`[data-cy='data-table-portal-empty'] .${DATA_TABLE_CLASSES.BODY}`)
        .children()
        .first()
        .as('portalEmpty');
      hasClassAssertion(`@portalEmpty`, DATA_TABLE_CLASSES.EMPTY);
    });

    it(`Should show the message 'No matches found. Please revise search criteria and try again.' when it is empty`, () => {
      cy.get(`[data-cy='data-table-portal-empty']`).should(
        'contain',
        'No matches found. Please revise search criteria and try again.'
      );
    });

    it('Should have no rows', () => {
      cy.get(
        `[data-cy='data-table-portal-empty'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
      ).should('not.exist');
    });

    it('Should have no footer', () => {
      cy.get(`[data-cy='data-table-portal-empty']`)
        .find(`.${DATA_TABLE_CLASSES.FOOTER}`)
        .should('not.exist');
    });
  });

  describe('Portal accordion', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.EXPANDABLE}`, () => {
      const rows = [1, 2, 3];

      rows.forEach(rowIndex => {
        cy.get(
          `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.ROW}`
        )
          .eq(rowIndex)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(0)
          .as('firstCell');
        hasClassAssertion(`@firstCell`, DATA_TABLE_CLASSES.EXPANDABLE);
      });
    });

    it(`Should remain in current page when user input is invalid`, () => {
      cy.get(
        `[data-cy='data-table-portal-accordion'] .${PAGINATION_CLASSES.PAGINATION}`
      )
        .as('pagination')
        .find(`.${PAGINATION_CLASSES.JUMPER} input`)
        .as('pagJumperInput')
        .type('{backspace}abc{enter}')
        .then(() => {
          cy.get('@pagJumperInput').should('have.value', '1');
          cy.get(
            `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.BODY}`
          )
            .children()
            .first()
            .as('row')
            .should('contain', 'Name 1');
        });
      cy.get('@pagJumperInput')
        .type('{backspace}2{enter}')
        .then(() => {
          cy.get('@pagJumperInput').should('have.value', '2');
          cy.get(`@row`).should('contain', 'Name 4');
        });
      cy.get('@pagJumperInput')
        .type('{backspace}2{enter}')
        .type('{backspace}40{enter}')
        .then(() => {
          cy.get('@pagJumperInput').should('have.value', '2');
          cy.get(`@row`).should('contain', 'Name 4');
        });
      cy.get('@pagJumperInput').type('{backspace}');
      cy.get(`@pagination`)
        .find(`button[data-page='1']`)
        .eq(0)
        .click();
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.EXPANSION.EXPANDED} event`, () => {
      cy.window()
        .its('portalAccordionDataTable')
        .then(portalAccordionDataTable => {
          const component = portalAccordionDataTable.$refs.portalAccordion;
          const spy = cy.spy();

          component.$on(`${DATA_TABLE_EVENTS.EXPANSION.EXPANDED}`, spy);
          cy.get(
            `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.BODY}`
          )
            .find(`.${DATA_TABLE_CLASSES.EXPANDABLE} button`)
            .eq(0)
            .as('expandableButton')
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
          cy.get('@expandableButton').click();
        });
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.EXPANSION.COLLAPSED} event`, () => {
      cy.window()
        .its('portalAccordionDataTable')
        .then(portalAccordionDataTable => {
          const component = portalAccordionDataTable.$refs.portalAccordion;
          const spy = cy.spy();

          cy.get(
            `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.BODY}`
          )
            .find(`.${DATA_TABLE_CLASSES.EXPANDABLE} button`)
            .eq(0)
            .as('expandableButton')
            .click();
          component.$on(`${DATA_TABLE_EVENTS.EXPANSION.COLLAPSED}`, spy);
          cy.get('@expandableButton')
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
        });
    });

    it(`Should have class .${DATA_TABLE_CLASSES.ROW_CHILD}`, () => {
      cy.get(
        `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .should('have.length', 3);
    });

    it(`Should have collapsed content`, () => {
      cy.get(`[data-cy='data-table-portal-accordion']`)
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .should('contain', 'Accordion content');
    });

    it(`Should expand and collapse first row`, () => {
      cy.get(
        `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .as('rows')
        .should('not.have.class', `${EXPANDED_CLASS}`);
      cy.get(
        `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.BODY} div[id$="-content"]`
      )
        .eq(0)
        .as('childRowContainer')
        .should('have.css', 'display', 'none');
      cy.get(
        `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.EXPANDABLE} button`)
        .eq(0)
        .as('expandableButton')
        .click()
        .then(() => {
          hasClassAssertion('@rows', `${EXPANDED_CLASS}`);
          cy.get('@childRowContainer').should(
            'not.have.css',
            'display',
            'none'
          );
        });
      cy.get('@expandableButton')
        .click()
        .then(() => {
          cy.get('@rows').should('not.have.class', `${EXPANDED_CLASS}`);
        });
    });
  });

  describe('Portal accordion child', () => {
    it(`Should have two child rows per parent row`, () => {
      cy.get(
        `[data-cy='data-table-portal-accordion-child'] .${DATA_TABLE_CLASSES.ROW_CHILD}`
      ).should('have.length', '6');
    });
  });

  describe('Portal accordion child expanded', () => {
    beforeEach(() => {
      cy.get(
        `[data-cy='data-table-portal-accordion-child-expanded'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .as('childRows');
      cy.get(
        `[data-cy='data-table-portal-accordion-child-expanded'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW_GRAND_CHILD}`)
        .as('grandchildRows');
      cy.get(
        `[data-cy='data-table-portal-accordion-child-expanded'] .${DATA_TABLE_CLASSES.BODY} div[id$="-content"]`
      )
        .eq(0)
        .as('firstRowChildContainer');
    });

    it(`Should have class .${DATA_TABLE_CLASSES.ROW_CHILD} and .${DATA_TABLE_CLASSES.ROW_GRAND_CHILD}`, () => {
      cy.get(`@childRows`).should('have.length', 5);
      cy.get(`@grandchildRows`).should('have.length', 1);
    });

    it('Should have first row be expanded by default', () => {
      cy.get(`@firstRowChildContainer`).should(
        'not.have.css',
        'display',
        'none'
      );
      cy.get(
        `[data-cy='data-table-portal-accordion-child-expanded'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .eq(0)
        .as('firstRow');
      hasClassAssertion('@firstRow', `${EXPANDED_CLASS}`);
    });

    it(`Should have two expandable buttons`, () => {
      cy.get(
        `[data-cy='data-table-portal-accordion-child-expanded'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.EXPANDABLE} button`)
        .eq(0)
        .as('expandableButton')
        .click();
      cy.get('@expandableButton').click();
      cy.get(`@firstRowChildContainer`)
        .find('.-expand')
        .click()
        .then(() => {
          cy.get(`@firstRowChildContainer`)
            .find(`div[id$="-content"]`)
            .eq(0)
            .should('not.have.css', 'display', 'none');
          cy.get(`@childRows`)
            .eq(0)
            .as('childRow');
          hasClassAssertion('@childRow', `${EXPANDED_CLASS}`);
        });
    });

    it('Should have 2-level collapsed content', () => {
      cy.get(`@childRows`).should('contain', 'Child Name 1');
      cy.get(`@grandchildRows`).should('contain', 'Grand-child Name 1');
    });
  });
});

describe('Server Side Data Table', () => {
  before(() => {
    cy.visit('tests/chi-vue/data-table.html');
  });

  describe('Server side pagination', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-server-side']`)
        .children()
        .eq(1)
        .as('body')
        .children()
        .first()
        .as('row');
      cy.get(
        `[data-cy='data-table-server-side'] .${PAGINATION_CLASSES.PAGINATION}`
      )
        .as('pagination')
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons');
    });

    it('Should render new data when going to page two', () => {
      cy.get('@paginationIcons')
        .eq(2)
        .click()
        .then(() => {
          cy.get(`[data-cy='data-table-server-side']`).should(
            'contain',
            'Name 4'
          );
        });
      cy.get(`@paginationIcons`)
        .eq(0)
        .click()
        .then(() => {
          cy.get(`[data-cy='data-table-server-side']`).should(
            'contain',
            'Name 1'
          );
        });
    });

    it(`Should trigger the ${PAGINATION_EVENTS.PAGE_CHANGE} event`, () => {
      cy.window()
        .its('dataTableServerSideExample')
        .then(dataTableServerSideExample => {
          const spy = cy.spy();
          const dataTableRef =
            dataTableServerSideExample.$refs.dataTableServerSideRef;

          dataTableRef.$on(`${PAGINATION_EVENTS.PAGE_CHANGE}`, spy);
          cy.get('@paginationIcons')
            .eq(2)
            .click()
            .then(() => {
              expect(spy).to.be.calledWith({ page: 2 });
            });
          cy.get('@paginationIcons')
            .eq(1)
            .click()
            .then(() => {
              expect(spy).to.be.calledWith({ page: 1 });
            });
        });
    });
  });

  describe('Server side selection', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-server-side']`)
        .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
        .as('selectables');
      cy.get(
        `[data-cy='data-table-server-side'] .${PAGINATION_CLASSES.PAGINATION}`
      )
        .as('pagination')
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons');
      cy.get('@selectables')
        .eq(0)
        .as('selectAll');
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE} event`, () => {
      cy.window()
        .its('dataTableServerSideExample')
        .then(dataTableServerSideExample => {
          const spy = cy.spy();
          const dataTableRef =
            dataTableServerSideExample.$refs.dataTableServerSideRef;

          dataTableRef.$on(`${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE}`, spy);
          cy.get('@selectables')
            .eq(1)
            .click()
            .then(() => {
              isSelected([dataTableServerSideExample.table.body[0]]);
              expect(spy).to.be.calledOnce;
            });
          cy.get('@selectables')
            .eq(1)
            .click()
            .then(() => {
              isNotSelected([dataTableServerSideExample.table.body[0]]);
            });
        });
    });

    it('Should select and deselect a row', () => {
      cy.get('@selectables')
        .eq(1)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-server-side'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
          )
            .eq(0)
            .as('firstRow');
          hasClassAssertion('@firstRow', ACTIVE_CLASS);
        });
      cy.get('@selectables')
        .eq(1)
        .click()
        .then(() => {
          cy.get('@firstRow').should('not.have.class', ACTIVE_CLASS);
        });
    });

    it('Should maintain "select all rows" checkbox after going to page two and then back to page one', () => {
      cy.get('@selectAll').click();
      cy.get('@paginationIcons')
        .eq(2)
        .click();
      cy.get('@paginationIcons')
        .eq(0)
        .click()
        .then(() => {
          cy.get('@selectAll')
            .find('input')
            .should('be.checked');
        });
      cy.get('@selectAll').click();
    });

    it('Should not maintain "select all rows" checkbox after going to page two', () => {
      cy.get('@selectAll').click();
      cy.get('@paginationIcons')
        .eq(2)
        .click()
        .then(() => {
          cy.get('@selectAll')
            .find('input')
            .should('not.be.checked');
        });
    });

    it('Should not maintain "select all rows" checkbox after deselecting a row', () => {
      cy.get('@selectables')
        .eq(0)
        .as('selectAll')
        .click();
      cy.get('@selectables')
        .eq(1)
        .click()
        .then(() => {
          cy.get('@selectAll')
            .find('input')
            .should('not.be.checked');
        });

      cy.get('@paginationIcons')
        .first()
        .click();

      cy.get('@selectAll')
        .click()
        .click();
    });
  });

  describe('Server side sorting', () => {
    beforeEach(() => {
      cy.get(
        `[data-cy='data-table-server-side'] .${PAGINATION_CLASSES.PAGINATION}`
      )
        .as('pagination')
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons');
    });

    it('Should sort by status in asc and desc', () => {
      const statuses = ['active', 'inact', 'active'];

      cy.get(`[data-cy='data-table-server-side'] .${DATA_TABLE_CLASSES.BODY}`)
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .as('rows');
      checkStatusSorting(statuses);
      cy.get(`[data-cy='data-table-server-side'] .${DATA_TABLE_CLASSES.ROW}`)
        .eq(0)
        .find(`.${DATA_TABLE_CLASSES.CELL}`)
        .eq(3)
        .as('idCell')
        .click()
        .then(() => {
          const actives = ['active', 'active', 'active'];

          checkStatusSorting(actives);
        });
      cy.get('@idCell')
        .click()
        .then(() => {
          const inactives = ['inact', 'inact', 'inact'];

          checkStatusSorting(inactives);
        });
      cy.get('@paginationIcons')
        .eq(2)
        .click()
        .then(() => {
          const actives = ['active', 'active', 'active'];

          checkStatusSorting(actives);
        });
      cy.get('@paginationIcons')
        .eq(1)
        .click()
        .then(() => {
          const inactives = ['inact', 'inact', 'inact'];

          checkStatusSorting(inactives);
        });
      cy.reload();
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.DATA_SORTING} event`, () => {
      it('Should sort by status in asc and desc', () => {
        cy.window()
          .its('dataTableServerSideExample')
          .then(dataTableServerSideExample => {
            const spy = cy.spy();
            const dataTableRef =
              dataTableServerSideExample.$refs.dataTableServerSideRef;

            dataTableRef.$on(`${DATA_TABLE_EVENTS.DATA_SORTING}`, spy);
            cy.get(
              `[data-cy='data-table-server-side'] .${DATA_TABLE_CLASSES.ROW}`
            )
              .eq(0)
              .find(`.${DATA_TABLE_CLASSES.CELL}`)
              .eq(3)
              .as('idCell')
              .click()
              .then(() => {
                expect(spy).to.be.calledOnceWith({
                  column: 'id',
                  direction: 'ascending'
                });
              });
            cy.get('@idCell')
              .click()
              .then(() => {
                expect(spy).to.be.calledWith({
                  column: 'id',
                  direction: 'descending'
                });
              });
          });
      });
    });
  });
});

describe('Server Side Data Table Portal', () => {
  before(() => {
    cy.visit('tests/chi-vue/data-table.html');
  });

  describe('Server side pagination', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-server-side-portal']`)
        .children()
        .eq(1)
        .as('body')
        .children()
        .first()
        .as('row');
      cy.get(
        `[data-cy='data-table-server-side-portal'] .${PAGINATION_CLASSES.PAGINATION}`
      )
        .as('pagination')
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons');
    });

    it('Should render new data when going to page two (portal)', () => {
      cy.get(`[data-cy='data-table-server-side-portal']`)
        .find(`.${PAGINATION_CLASSES.PAGINATION}`)
        .children()
        .first()
        .children()
        .eq(1)
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons')
        .eq(2)
        .click()
        .then(() => {
          cy.get(`[data-cy='data-table-server-side-portal']`).should(
            'contain',
            'Name 4'
          );
        });
      cy.get(`@paginationIcons`)
        .eq(0)
        .click()
        .then(() => {
          cy.get(`[data-cy='data-table-server-side-portal']`).should(
            'contain',
            'Name 1'
          );
        });
    });

    it(`Should trigger the ${PAGINATION_EVENTS.PAGE_CHANGE} event`, () => {
      cy.window()
        .its('dataTableServerSidePortalExample')
        .then(dataTableServerSidePortalExample => {
          const spy = cy.spy();
          const dataTableRef =
            dataTableServerSidePortalExample.$refs.dataTableServerSidePortalRef;

          dataTableRef.$on(`${PAGINATION_EVENTS.PAGE_CHANGE}`, spy);
          cy.get('@paginationIcons')
            .eq(2)
            .click()
            .then(() => {
              expect(spy).to.be.calledWith({ page: 2 });
            });
          cy.get('@paginationIcons')
            .eq(1)
            .click()
            .then(() => {
              expect(spy).to.be.calledWith({ page: 1 });
            });
        });
    });
  });

  describe('Server side selection', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-server-side-portal']`)
        .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
        .as('selectables');
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE} event`, () => {
      cy.window()
        .its('dataTableServerSidePortalExample')
        .then(dataTableServerSidePortalExample => {
          const spy = cy.spy();
          const dataTableRef =
            dataTableServerSidePortalExample.$refs.dataTableServerSidePortalRef;

          dataTableRef.$on(`${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE}`, spy);
          cy.get(`[data-cy='data-table-server-side-portal']`)
            .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
            .as('selectables')
            .eq(1)
            .click()
            .then(() => {
              isSelected([dataTableServerSidePortalExample.table.body[0]]);
              expect(spy).to.be.calledOnce;
            });
          cy.get('@selectables')
            .eq(1)
            .click()
            .then(() => {
              isNotSelected([dataTableServerSidePortalExample.table.body[0]]);
            });
        });
    });

    it('Should select and deselect a row', () => {
      cy.get('@selectables')
        .eq(1)
        .click()
        .then(() => {
          cy.get(
            `[data-cy='data-table-server-side-portal'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
          )
            .eq(0)
            .as('firstRow');
          hasClassAssertion('@firstRow', ACTIVE_CLASS);
        });
      cy.get('@selectables')
        .eq(1)
        .click()
        .then(() => {
          cy.get('@firstRow').should('not.have.class', ACTIVE_CLASS);
        });
    });

    it('Should automatically select nested rows', () => {
      cy.window()
        .its('dataTableServerSidePortalExample')
        .then(dataTableServerSidePortalExample => {
          const spy = cy.spy();
          const dataTableRef =
            dataTableServerSidePortalExample.$refs.dataTableServerSidePortalRef;
          const parent = dataTableServerSidePortalExample.table.body[2];
          const child = parent.nestedContent.table.data[0];
          const grandchild = child.nestedContent.table.data[0];

          dataTableRef.$on(`${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE}`, spy);
          cy.get('@selectables')
            .eq(3)
            .click()
            .then(() => {
              expect(spy).to.be.called;
              isSelected([parent, child, grandchild]);
            });
          cy.get('@selectables')
            .eq(3)
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
        });
    });

    it('Should automatically deselect nested rows', () => {
      cy.get('@selectables')
        .eq(3)
        .click();
      cy.window()
        .its('dataTableServerSidePortalExample')
        .then(dataTableServerSidePortalExample => {
          const spy = cy.spy();
          const dataTableRef =
            dataTableServerSidePortalExample.$refs.dataTableServerSidePortalRef;
          const parent = dataTableServerSidePortalExample.table.body[2];
          const child = parent.nestedContent.table.data[0];
          const grandchild = child.nestedContent.table.data[0];

          dataTableRef.$on(`${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE}`, spy);
          cy.get('@selectables')
            .eq(3)
            .click()
            .then(() => {
              expect(spy).to.be.called;
              isNotSelected([parent, child, grandchild]);
            });
        });
    });
  });

  describe('Server side sorting', () => {
    it('Should sort by status in asc and desc', () => {
      const statuses = ['active', 'inact', 'active'];

      cy.get(
        `[data-cy='data-table-server-side-portal'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .as('rows');
      checkStatusSorting(statuses);
      cy.get(
        `[data-cy='data-table-server-side-portal'] .${DATA_TABLE_CLASSES.ROW}`
      )
        .eq(0)
        .find(`.${DATA_TABLE_CLASSES.CELL}`)
        .eq(3)
        .as('idCell')
        .click()
        .then(() => {
          const actives = ['active', 'active', 'active'];

          checkStatusSorting(actives);
        });
      cy.get('@idCell')
        .click()
        .then(() => {
          const inactives = ['inact', 'inact', 'inact'];

          checkStatusSorting(inactives);
        });
      cy.get(
        `[data-cy='data-table-server-side-portal'] .${PAGINATION_CLASSES.PAGINATION}`
      )
        .as('pagination')
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons')
        .eq(2)
        .click()
        .then(() => {
          const actives = ['active', 'active', 'active'];

          checkStatusSorting(actives);
        });
      cy.get('@paginationIcons')
        .eq(1)
        .click()
        .then(() => {
          const inactives = ['inact', 'inact', 'inact'];

          checkStatusSorting(inactives);
        });
      cy.reload();
    });

    it(`Should trigger the ${DATA_TABLE_EVENTS.DATA_SORTING} event`, () => {
      it('Should sort by status in asc and desc', () => {
        cy.window()
          .its('dataTableServerSidePortalExample')
          .then(dataTableServerSidePortalExample => {
            const spy = cy.spy();
            const dataTableRef =
              dataTableServerSidePortalExample.$refs
                .dataTableServerSidePortalRef;

            dataTableRef.$on(`${DATA_TABLE_EVENTS.DATA_SORTING}`, spy);
            cy.get(
              `[data-cy='data-table-server-side-portal'] .${DATA_TABLE_CLASSES.ROW}`
            )
              .eq(0)
              .find(`.${DATA_TABLE_CLASSES.CELL}`)
              .eq(3)
              .as('idCell')
              .click()
              .then(() => {
                expect(spy).to.be.calledOnceWith({
                  column: 'id',
                  direction: 'ascending'
                });
              });
            cy.get('@idCell')
              .click()
              .then(() => {
                expect(spy).to.be.calledWith({
                  column: 'id',
                  direction: 'descending'
                });
              });
          });
      });
    });
  });
});
