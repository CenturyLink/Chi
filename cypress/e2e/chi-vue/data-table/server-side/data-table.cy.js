import {
  ACTIVE_CLASS,
  DATA_TABLE_CLASSES,
  DATA_TABLE_EVENTS,
  ICON_BUTTON,
  PAGINATION_CLASSES,
  PAGINATION_EVENTS
} from '../data-table-common.cy';
import {
  checkStatusSorting,
  hasClassAssertion,
  isSelected,
  isNotSelected
} from '../data-table-common.cy';

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
