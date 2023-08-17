import {
  ACTIVE_CLASS,
  ACTIVE_ATTR,
  ARROW_SORT_CLASS,
  ARROW_UP_CLASS,
  BULK_ACTIONS_CLASSES,
  BUTTON_CLASS,
  CHECKBOXES_CLASSES,
  CHI_BUTTON_CONTENT,
  CHI_DROPDOWN,
  CHI_DROPDOWN_MENU,
  CLOSE_CLASS,
  DATA_TABLE_CLASSES,
  DATA_TABLE_EVENTS,
  EXPANDED_CLASS,
  ICON_BUTTON,
  ICON_CLASS,
  INFO_ICON_CLASS,
  PAGINATION_CLASSES,
  PAGINATION_EVENTS,
  RADIO_CLASSES,
  TOOLTIP_CLASSES,
  UTILITY_CLASSES
} from '../data-table-common.cy';
import {
  checkDateSorting,
  checkStatusSorting,
  hasClassAssertion
} from '../data-table-common.cy';

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

    it('Should hide Expand All icon', () => {
      cy.get(`[data-cy='data-table-container'] .${DATA_TABLE_CLASSES.HEAD}`)
        .find(`button.-expand`)
        .should('not.exist');
    });

    it('Should hide Select All Dropdown icon', () => {
      cy.get(`[data-cy='data-table-container'] .${DATA_TABLE_CLASSES.HEAD}`)
        .find(`.${CHI_DROPDOWN} .${BUTTON_CLASS}`)
        .should('not.exist');
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
          .then(res => {
            hasClassAssertion(res, `${ACTIVE_CLASS}`);
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

      it(`Tooltip element ${index} should ${
        !isVisible ? 'not' : ''
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

  describe('Empty Actionable', () => {
    it(`Should have class .${DATA_TABLE_CLASSES.EMPTY_ACTIONABLE}`, () => {
      cy.get(
        `[data-cy='data-table-empty-actionable'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .children()
        .first()
        .as('empty');
      hasClassAssertion(`@empty`, DATA_TABLE_CLASSES.EMPTY);
    });

    it(`Should show default message when it is empty actionable`, () => {
      cy.get(`[data-cy='data-table-empty-actionable']`).should(
        'contain',
        'Add a new or existing service, then manage here.'
      );
    });

    it('Should have no rows', () => {
      cy.get(
        `[data-cy='data-table-empty-actionable'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
      ).should('not.exist');
    });

    it('Should have no footer', () => {
      cy.get(`[data-cy='data-table-empty-actionable']`)
        .find(`.${DATA_TABLE_CLASSES.FOOTER}`)
        .should('not.exist');
    });

    it('Should show the correct icon', () => {
      cy.get(
        `[data-cy='data-table-empty-actionable'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`chi-icon`)
        .should('have.attr', 'icon', 'circle-plus-outline');
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

  describe('Data Table Select All (Dropdown)', () => {
    beforeEach(() => {
      cy.get(
        `[data-cy='data-table-dropdown-select-all'] .${DATA_TABLE_CLASSES.HEAD}`
      )
        .find(`.${CHI_DROPDOWN} .${BUTTON_CLASS}`)
        .as('selectAllDropdown');

      cy.get(
        `[data-cy='data-table-dropdown-select-all'] .${DATA_TABLE_CLASSES.HEAD}`
      )
        .find(`.${CHI_DROPDOWN_MENU}`)
        .as('selectAllDropdownMenu');

      cy.get(
        `[data-cy='data-table-dropdown-select-all'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .as('rows');

      cy.get(
        `[data-cy='data-table-dropdown-select-all'] .${DATA_TABLE_CLASSES.FOOTER}`
      )
        .find(`.${PAGINATION_CLASSES.CENTER}`)
        .find(`.${CHI_BUTTON_CONTENT}`)
        .as('pages');
    });

    afterEach(() => {
      cy.get('@pages')
        .contains(1)
        .click();
    });

    it('Should select all rows on the current page', () => {
      cy.get('@selectAllDropdown').click();
      cy.get('@selectAllDropdownMenu')
        .contains('Select all items, this page')
        .click();

      cy.get('@rows')
        .find('input')
        .should('be.checked');

      cy.get('@rows').should('have.class', `${ACTIVE_CLASS}`);

      cy.get(
        `[data-cy='data-table-dropdown-select-all'] .${DATA_TABLE_CLASSES.FOOTER}`
      )
        .find(`.${PAGINATION_CLASSES.CENTER}`)
        .find(`.${CHI_BUTTON_CONTENT}`)
        .contains(2)
        .click();

      cy.get('@rows')
        .find('input')
        .should('not.be.checked');

      cy.get('@rows').should('not.have.class', `${ACTIVE_CLASS}`);
    });

    it('Should select all rows on each page', () => {
      cy.get('@selectAllDropdown').click();
      cy.get('@selectAllDropdownMenu')
        .contains('Select all items, all pages')
        .click();

      cy.get('@rows')
        .find('input')
        .should('be.checked');

      cy.get('@rows').should('have.class', `${ACTIVE_CLASS}`);

      cy.get('@pages')
        .contains(2)
        .click();

      cy.get('@rows')
        .find('input')
        .should('be.checked');

      cy.get('@rows').should('have.class', `${ACTIVE_CLASS}`);
    });

    it('Should deselect all rows on each page', () => {
      cy.get('@selectAllDropdown').click();
      cy.get('@selectAllDropdownMenu')
        .contains('Deselect all')
        .click();

      cy.get('@rows')
        .find('input')
        .should('not.be.checked');

      cy.get('@rows').should('not.have.class', `${ACTIVE_CLASS}`);

      cy.get('@pages')
        .contains(2)
        .click();

      cy.get('@rows')
        .find('input')
        .should('not.be.checked');

      cy.get('@rows').should('not.have.class', `${ACTIVE_CLASS}`);
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

  describe('Expand/Collapse', () => {
    beforeEach(() => {
      cy.get(
        `[data-cy='data-table-expand-collapse'] .${DATA_TABLE_CLASSES.HEAD}`
      )
        .find(`button.-expand`)
        .as('expandAllButton');

      cy.get(
        `[data-cy='data-table-expand-collapse'] .${DATA_TABLE_CLASSES.BODY}`
      )
        .find(`.${DATA_TABLE_CLASSES.ROW}`)
        .as('rows');
    });

    it('Should expand all rows', () => {
      const rows = [0, 1, 2];

      cy.get('@expandAllButton').click();

      cy.get('@rows').should('have.class', `${EXPANDED_CLASS}`);
      rows.forEach(rowIndex => {
        cy.get(
          `[data-cy='data-table-expand-collapse'] .${DATA_TABLE_CLASSES.BODY} div[id$="-content"]`
        )
          .eq(rowIndex)
          .should('not.have.css', 'display', 'none');

        cy.get(
          `[data-cy='data-table-expand-collapse'] .${DATA_TABLE_CLASSES.BODY} div[id$="-content"][id*="-child"]`
        )
          .eq(rowIndex)
          .should('not.have.css', 'display', 'none');
      });
    });

    it('Should collapse all rows', () => {
      const rows = [0, 1, 2];

      cy.get('@expandAllButton').click();
      cy.get('@rows').should('have.class', '-collapsed');
      rows.forEach(rowIndex => {
        cy.get(
          `[data-cy='data-table-expand-collapse'] .${DATA_TABLE_CLASSES.BODY} div[id$="-content"]`
        )
          .eq(rowIndex)
          .should('not.have.css', 'display', 'none');
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
          .as('firstCell');
        cy.get('@firstCell')
          .find(`.${ICON_CLASS}`)
          .as('sortIcon');

        cy.get('@sortIcon').then(icon => {
          cy.wait(500);
          hasClassAssertion(icon, `${ARROW_SORT_CLASS}`);
          cy.get('@firstCell')
            .click()
            .then(() => {
              cy.wait(500);
              hasClassAssertion(icon, `${ARROW_UP_CLASS}`);
            });
        });
        cy.get('@rows')
          .eq(0)
          .should('contain', 'Name 1');
        cy.get('@sortIcon').then(icon => {
          cy.get(icon).should('have.css', 'transform', 'none');
          cy.get('@firstCell')
            .click()
            .then(() => {
              hasClassAssertion(icon, `${ARROW_UP_CLASS}`);
            });
          cy.get(icon)
            .should('have.attr', 'style')
            .should('contain', 'transform: rotate(180deg);');
        });
        cy.get('@rows')
          .eq(0)
          .should('contain', 'Surname 2');

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
        const datesAsc = ['5 Mar 2017', '6 Jan 2018', '5 Feb 2018'];
        const datesDesc = ['5 Apr 2019', '9 Nov 2018', '5 Jul 2018'];

        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(2)
          .as('dateCell');

        checkDateSorting(dates);
        cy.get('@dateCell').click();
        checkDateSorting(datesAsc);
        cy.get('@dateCell').click();
        checkDateSorting(datesDesc);
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
          .click();
        cy.get('@rows')
          .eq(0)
          .should('contain', 'Name 5');
        cy.get(
          `[data-cy='data-table-sorting'] .${PAGINATION_CLASSES.PAGINATION} .${ICON_BUTTON}`
        )
          .eq(0)
          .click();
        cy.get('@rows')
          .eq(0)
          .should('contain', 'Surname 2');
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
      cy.get(
        `[data-cy='data-table-bulk-actions'] 
          .${PAGINATION_CLASSES.PAGINATION}`
      ).as('pagination');
      cy.get(
        `[data-cy='data-table-bulk-actions'] 
          .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`
      ).as('rows');
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
          const dataTableRef =
            dataTableBulkActionsExample.$refs.dataTableBulkActionsRef;

          dataTableRef.$on(
            `${DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY}`,
            spy
          );
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(
              `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
              .${CHECKBOXES_CLASSES.LABEL}`
            )
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
                .find(
                  `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                    .${BULK_ACTIONS_CLASSES.LABEL}`
                )
                .contains(`Actions (${selected} Items Selected)`);
              cy.get('@rows').should('have.length', 1);
              expect(spy).to.be.calledOnce;
            });
        });
    });

    it('Should deselect "Show selected only" and show data table is still in its original state', () => {
      cy.window()
        .its('dataTableBulkActionsExample')
        .then(dataTableBulkActionsExample => {
          const paginationResults = '6';
          const selected = '1';
          const spy = cy.spy();
          const dataTableRef =
            dataTableBulkActionsExample.$refs.dataTableBulkActionsRef;

          dataTableRef.$on(
            `${DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY}`,
            spy
          );
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(
              `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
              .${CHECKBOXES_CLASSES.LABEL}`
            )
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
                .find(
                  `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                    .${BULK_ACTIONS_CLASSES.LABEL}`
                )
                .contains(`Actions (${selected} Items Selected)`);
              cy.get('@rows').should('have.length', 3);
              expect(spy).to.be.calledOnce;
            });
        });
    });

    it('Should reset data table rows to the initial state when closing bulk actions clicking the X button', () => {
      cy.window()
        .its('dataTableBulkActionsExample')
        .then(dataTableBulkActionsExample => {
          const spy = cy.spy();
          const dataTableRef =
            dataTableBulkActionsExample.$refs.dataTableBulkActionsRef;
          const paginationResults = '6';

          dataTableRef.$on(`${DATA_TABLE_EVENTS.BULK_ACTIONS.CANCEL}`, spy);
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(
              `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.END} .${BUTTON_CLASS} .${CLOSE_CLASS}`
            )
            .click()
            .then(() => {
              cy.get(`[data-cy='data-table-bulk-actions']`)
                .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`)
                .should('not.exist');
              cy.get('@selectables')
                .find('input')
                .should('not.be.checked');
              cy.get('@rows').should('have.length', 3);
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
          const dataTableRef =
            dataTableBulkActionsExample.$refs.dataTableBulkActionsRef;
          const paginationResults = '6';

          dataTableRef.$on(`${DATA_TABLE_EVENTS.BULK_ACTIONS.CANCEL}`, spy);
          cy.get('@selectables')
            .eq(1)
            .click();
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(
              `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
              .${CHECKBOXES_CLASSES.LABEL}`
            )
            .click();
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(
              `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.END} .${BUTTON_CLASS} .${CLOSE_CLASS}`
            )
            .click()
            .then(() => {
              cy.get(`[data-cy='data-table-bulk-actions']`)
                .find(`.${BULK_ACTIONS_CLASSES.BULK_ACTIONS}`)
                .should('not.be.visible');
              cy.get('@selectables')
                .find('input')
                .should('not.be.checked');
              cy.get('@rows').should('have.length', 3);
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
        .find(
          `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.BUTTONS} 
            .${BULK_ACTIONS_CLASSES.BUTTONS_DESKTOP}`
        )
        .should('be.visible');
      cy.get(`[data-cy='data-table-bulk-actions']`)
        .find(
          `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.BUTTONS} 
            .${BULK_ACTIONS_CLASSES.BUTTONS_MOBILE}`
        )
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
            .find(
              `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                    .${BULK_ACTIONS_CLASSES.LABEL}`
            )
            .contains(`Actions (${selected} Items Selected)`);
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
            .find(
              `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                  .${BULK_ACTIONS_CLASSES.LABEL}`
            )
            .contains(`Actions (${selected} Items Selected)`);
          cy.get(`@pagination`)
            .find(`.${ICON_BUTTON}`)
            .first()
            .click();
          cy.get(`[data-cy='data-table-bulk-actions']`)
            .find(
              `.${BULK_ACTIONS_CLASSES.BULK_ACTIONS} .${BULK_ACTIONS_CLASSES.START} 
                    .${BULK_ACTIONS_CLASSES.LABEL}`
            )
            .contains(`Actions (${selected} Items Selected)`);
        });
    });
  });
});
