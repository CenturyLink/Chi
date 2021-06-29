import { hasClassAssertion } from './utils/utils';

const ACTIVE_CLASS = '-active';
const EXPANDED_CLASS = '-expanded';
const PORTAL_CLASS = '-portal';
const ICON_BUTTON = '-icon';
const ICON_CLASS = 'chi-icon';
const ARROW_UP_CLASS = 'icon-arrow-up';
const ARROW_SORT_CLASS = 'icon-arrow-sort';
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
  COMPACT: '-compact'
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
  }
};
const PAGINATION_EVENTS = {
  PAGE_CHANGE: 'chiPageChange',
  PAGE_SIZE: 'chiPageSizeChange'
};

describe('Data Table', () => {
  before(() => {
    cy.visit('tests/chi-vue/data-table.html');
  });

  describe('base', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table']`)
        .children()
        .first()
        .as('head');
      cy.get(`[data-cy='data-table']`)
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

    it('should update data successfully', () => {
      cy.get('button')
        .contains('Update')
        .click()
        .then(() => {
          cy.wait(3000);
          cy.get('@row').should('contain', 'Updated Name 1');
        });
    });

    describe('pagination', () => {
      beforeEach(() => {
        cy.get(`[data-cy='data-table'] .${PAGINATION_CLASSES.PAGINATION}`).as(
          'pagination'
        );
      });

      it(`should show label 'per page'`, () => {
        cy.get(`@pagination`)
          .find(`select`)
          .should('contain', '20');
        cy.get(`@pagination`)
          .find(`.${PAGINATION_CLASSES.LABEL}`)
          .should('contain', 'per page');
      });

      it('should trigger next and prev page', () => {
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
                expect(spy).to.be.called;
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
                expect(spy).to.be.called;
                cy.get(`@pagination`)
                  .find(`button[data-page='1']`)
                  .eq(1)
                  .as('pageOneButton');
                hasClassAssertion(`@pageOneButton`, `${ACTIVE_CLASS}`);
                cy.get(`@row`).should('contain', 'Updated Name 1');
              });
          });
      });

      it('should jump page correctly on input', () => {
        cy.get(`@pagination`)
          .find(`.${PAGINATION_CLASSES.JUMPER} input`)
          .as('pagJumperInput')
          .type('2{enter}')
          .then(() => {
            cy.get(`@row`).should('contain', 'Name 4');
          });
        cy.get('@pagJumperInput')
          .type('{backspace}1{enter}')
          .then(() => {
            cy.get(`@row`).should('contain', 'Updated Name 1');
          });
        cy.get('@pagJumperInput').type('{backspace}');
        cy.get(`@pagination`)
          .find(`button[data-page='1']`)
          .eq(1)
          .click();
        // TODO: add -active class check once it's fixed.
      });

      it('should change page correctly on page number click', () => {
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

      it('should go to first and last pages', () => {
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

      it('should change number of page results', () => {
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
  });

  describe('empty', () => {
    it(`should have class .${DATA_TABLE_CLASSES.EMPTY}`, () => {
      cy.get(`[data-cy='data-table-empty'] .${DATA_TABLE_CLASSES.BODY}`)
        .children()
        .first()
        .as('empty');
      hasClassAssertion(`@empty`, DATA_TABLE_CLASSES.EMPTY);
    });

    it(`should show default message when it is empty`, () => {
      cy.get(`[data-cy='data-table-empty']`).should(
        'contain',
        'No matches found. Please revise search criteria and try again.'
      );
    });

    it('should have no rows', () => {
      cy.get(
        `[data-cy='data-table-empty'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
      ).should('not.exist');
    });

    it('should have no footer', () => {
      cy.get(`[data-cy='data-table-empty']`)
        .find(`.${DATA_TABLE_CLASSES.FOOTER}`)
        .should('not.exist');
    });
  });

  describe('no border', () => {
    it(`should have class .${DATA_TABLE_CLASSES.NO_BORDER}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-no-border']`,
        DATA_TABLE_CLASSES.NO_BORDER
      );
    });
  });

  describe('striped', () => {
    it(`should have class .${DATA_TABLE_CLASSES.STRIPED}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-striped']`,
        DATA_TABLE_CLASSES.STRIPED
      );
    });
  });

  describe('hover', () => {
    it(`should have class .${DATA_TABLE_CLASSES.HOVER}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-hover']`,
        DATA_TABLE_CLASSES.HOVER
      );
    });
  });

  describe('bordered', () => {
    it(`should have class .${DATA_TABLE_CLASSES.BORDERED}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-bordered']`,
        DATA_TABLE_CLASSES.BORDERED
      );
    });
  });

  describe('active', () => {
    it(`should have class .${ACTIVE_CLASS}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-active'] .${DATA_TABLE_CLASSES.ROW}`,
        ACTIVE_CLASS
      );
    });
  });

  describe('selectable', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-selectable']`)
        .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
        .as('selectables');
    });

    it(`should have class .${DATA_TABLE_CLASSES.SELECTABLE}`, () => {
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

    it(`should trigger the ${DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE} event`, () => {
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

    it('should select and deselect all rows', () => {
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

    it('should select and deselect a row', () => {
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

    it('should keep selected row on page change', () => {
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

  describe('accordion', () => {
    it(`should have class .${DATA_TABLE_CLASSES.EXPANDABLE}`, () => {
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

    it(`should trigger the ${DATA_TABLE_EVENTS.EXPANSION.EXPANDED} event`, () => {
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

    it(`should trigger the ${DATA_TABLE_EVENTS.EXPANSION.COLLAPSED} event`, () => {
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

    it(`should have class .${DATA_TABLE_CLASSES.ROW_CHILD}`, () => {
      cy.get(`[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.BODY}`)
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .should('have.length', 3);
    });

    it(`should have collapsed content`, () => {
      cy.get(`[data-cy='data-table-accordion']`)
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .should('contain', 'Accordion content');
    });

    it(`should expand and collapse first row`, () => {
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

  describe('sorting', () => {
    describe('base', () => {
      beforeEach(() => {
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.BODY}`)
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .as('rows');
      });

      it(`should have class .${DATA_TABLE_CLASSES.SORTING}`, () => {
        hasClassAssertion(
          `[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.CELL}`,
          DATA_TABLE_CLASSES.SORTING
        );
      });

      it(`should trigger the ${DATA_TABLE_EVENTS.DATA_SORTING} event`, () => {
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
          });
      });

      it(`should sort by name with the correct icons`, () => {
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
        cy.get('@firstCell')
          .click()
          .then(() => {
            cy.get('@rows')
              .eq(0)
              .should('contain', 'Name 1');
            hasClassAssertion('@sortIcon', `${ARROW_SORT_CLASS}`);
          });
      });

      function checkStatusSorting(statuses) {
        statuses.forEach((status, index) => {
          if (index === 2) {
            cy.get('@rows')
              .eq(index)
              .should('contain', status);
          } else {
            cy.get('@rows')
              .eq(index)
              .should('contain', status);
          }
        });
      }

      it(`should sort by status using a custom template`, () => {
        const statuses = ['active', 'inactive', 'active'];

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
            const inactives = ['inactive', 'inactive', 'inactive'];

            checkStatusSorting(inactives);
          });
        cy.get('@idCell')
          .click()
          .then(() => {
            checkStatusSorting(statuses);
          });
      });

      function checkDateSorting(dates) {
        dates.forEach((date, index) => {
          cy.get('@rows')
            .eq(index)
            .should('contain', date);
        });
      }

      it(`should sort by date`, () => {
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
        cy.get('@dateCell')
          .click()
          .then(() => {
            checkDateSorting(dates);
          });
      });

      it(`should sort correctly on page change`, () => {
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

    describe('default sorting asc', () => {
      it(`should have ascending sorting by default`, () => {
        cy.get(`[data-cy='data-table-sorting-asc'] .${DATA_TABLE_CLASSES.BODY}`)
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .as('rows')
          .eq(0)
          .should('contain', 'Name 1');
        cy.get('@rows')
          .eq(1)
          .should('contain', 'Name 2');
        cy.get('@rows')
          .eq(2)
          .should('contain', 'Name 3');
      });
    });

    describe('default sorting desc', () => {
      it(`should have descending sorting by default`, () => {
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
  });

  describe('sizes', () => {
    const sizes = ['-xs', '-sm', '-md', '-lg', '-xl'];

    sizes.forEach(size => {
      it(`should have class .${size}`, () => {
        hasClassAssertion(`[data-cy='data-table${size}']`, size);
      });
    });
  });
});

describe('Data Table Portal', () => {
  before(() => {
    cy.visit('tests/chi-vue/data-table-portal.html');
  });

  describe('portal', () => {
    beforeEach(() => {
      cy.get(`[data-cy='data-table-portal']`)
        .children()
        .first()
        .as('head');
      cy.get(`[data-cy='data-table-portal']`)
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

    it(`should have class .${DATA_TABLE_CLASSES.STRIPED} for even rows`, () => {
      const rows = cy.get('@body').find(`.${DATA_TABLE_CLASSES.ROW}`);
      rows.each((row, i) => {
        if (i % 2 === 1) {
          hasClassAssertion(row, DATA_TABLE_CLASSES.STRIPED);
        }
      });
    });
  });

  describe('portal empty', () => {
    it(`should have class .${DATA_TABLE_CLASSES.EMPTY}`, () => {
      cy.get(`[data-cy='data-table-portal-empty'] .${DATA_TABLE_CLASSES.BODY}`)
        .children()
        .first()
        .as('portalEmpty');
      hasClassAssertion(`@portalEmpty`, DATA_TABLE_CLASSES.EMPTY);
    });

    it(`should show the message 'No matches found. Please revise search criteria and try again.' when it is empty`, () => {
      cy.get(`[data-cy='data-table-portal-empty']`).should(
        'contain',
        'No matches found. Please revise search criteria and try again.'
      );
    });

    it('should have no rows', () => {
      cy.get(
        `[data-cy='data-table-portal-empty'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
      ).should('not.exist');
    });

    it('should have no footer', () => {
      cy.get(`[data-cy='data-table-portal-empty']`)
        .find(`.${DATA_TABLE_CLASSES.FOOTER}`)
        .should('not.exist');
    });
  });

  describe('portal accordion', () => {
    it(`should have class .${DATA_TABLE_CLASSES.EXPANDABLE}`, () => {
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

    it(`should remain in current page when user input is invalid`, () => {
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

    it(`should trigger the ${DATA_TABLE_EVENTS.EXPANSION.EXPANDED} event`, () => {
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

    it(`should trigger the ${DATA_TABLE_EVENTS.EXPANSION.COLLAPSED} event`, () => {
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

    it(`should have class .${DATA_TABLE_CLASSES.ROW_CHILD}`, () => {
      cy.get(
        `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .should('have.length', 3);
    });

    it(`should have collapsed content`, () => {
      cy.get(`[data-cy='data-table-portal-accordion']`)
        .find(`.${DATA_TABLE_CLASSES.ROW_CHILD}`)
        .should('contain', 'Accordion content');
    });

    it(`should expand and collapse first row`, () => {
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

  describe('portal accordion child', () => {
    it(`should have two child rows per parent row`, () => {
      cy.get(
        `[data-cy='data-table-portal-accordion-child'] .${DATA_TABLE_CLASSES.ROW_CHILD}`
      ).should('have.length', '6');
    });
  });

  describe('portal accordion child expanded', () => {
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

    it(`should have class .${DATA_TABLE_CLASSES.ROW_CHILD} and .${DATA_TABLE_CLASSES.ROW_GRAND_CHILD}`, () => {
      cy.get(`@childRows`).should('have.length', 5);
      cy.get(`@grandchildRows`).should('have.length', 1);
    });

    it('should have first row be expanded by default', () => {
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

    it(`should have two expandable buttons`, () => {
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

    it('should have 2-level collapsed content', () => {
      cy.get(`@childRows`).should('contain', 'Child Name 1');
      cy.get(`@grandchildRows`).should('contain', 'Grand-child Name 1');
    });
  });
});
