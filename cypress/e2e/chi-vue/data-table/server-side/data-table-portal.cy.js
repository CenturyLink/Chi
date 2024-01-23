import {
  ACTIVE_CLASS,
  ARROW_SORT_CLASS,
  ARROW_UP_CLASS,
  DATA_TABLE_CLASSES,
  DATA_TABLE_EVENTS,
  ICON_BUTTON,
  PAGINATION_CLASSES,
  PAGINATION_EVENTS
} from '../data-table-common.cy';
import {
  checkCorrectIcon,
  checkStatusSorting,
  hasClassAssertion,
  isSelected,
  isNotSelected
} from '../data-table-common.cy';

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
          const dataTableRef =
            dataTableServerSidePortalExample.$refs.dataTableServerSidePortalRef;

          cy.spy(dataTableRef, '_emitPaginationChange').as('paginationChangeSpy');
          cy.get('@paginationIcons')
            .eq(2)
            .click()
            .then(() => {
              cy.get('@paginationChangeSpy').should('have.been.called');
            });
          cy.get('@paginationIcons')
            .eq(1)
            .click()
            .then(() => {
              cy.get('@paginationChangeSpy').should('have.been.called');
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
          const dataTableRef =
            dataTableServerSidePortalExample.$refs.dataTableServerSidePortalRef;

          cy.spy(dataTableRef, '_emitSelectedRowsChange').as('selectedRowsChangeSpy');
          cy.get(`[data-cy='data-table-server-side-portal']`)
            .find(`.${DATA_TABLE_CLASSES.SELECTABLE}`)
            .as('selectables')
            .eq(1)
            .click()
            .then(() => {
              isSelected([dataTableServerSidePortalExample.table.body[0]]);
              cy.get('@selectedRowsChangeSpy').should('have.been.called');
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
          const dataTableRef =
            dataTableServerSidePortalExample.$refs.dataTableServerSidePortalRef;
          const parent = dataTableServerSidePortalExample.table.body[2];
          const child = parent.nestedContent.table.data[0];
          const grandchild = child.nestedContent.table.data[0];

          cy.spy(dataTableRef, '_emitSelectedRowsChange').as('selectedRowsChangeSpy');
          cy.get('@selectables')
            .eq(3)
            .click()
            .then(() => {
              cy.get('@selectedRowsChangeSpy').should('have.been.called');
              isSelected([parent, child, grandchild]);
            });
          cy.get('@selectables')
            .eq(3)
            .click()
            .then(() => {
              cy.get('@selectedRowsChangeSpy').should('have.been.called');
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
          const dataTableRef =
            dataTableServerSidePortalExample.$refs.dataTableServerSidePortalRef;
          const parent = dataTableServerSidePortalExample.table.body[2];
          const child = parent.nestedContent.table.data[0];
          const grandchild = child.nestedContent.table.data[0];

          cy.spy(dataTableRef, '_emitSelectedRowsChange').as('selectedRowsChangeSpy');
          cy.get('@selectables')
            .eq(3)
            .click()
            .then(() => {
              cy.get('@selectedRowsChangeSpy').should('have.been.called');
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
            const dataTableRef =
              dataTableServerSidePortalExample.$refs
                .dataTableServerSidePortalRef;

            cy.spy(dataTableRef, '_emitSortingData').as('sortingDataSpy');
            cy.get(
              `[data-cy='data-table-server-side-portal'] .${DATA_TABLE_CLASSES.ROW}`
            )
              .eq(0)
              .find(`.${DATA_TABLE_CLASSES.CELL}`)
              .eq(3)
              .as('idCell')
              .click()
              .then(() => {
                cy.get('@sortingDataSpy').should('have.been.called');
              });
            cy.get('@idCell')
              .click()
              .then(() => {
                cy.get('@sortingDataSpy').should('have.been.called');
              });
          });
      });
    });

    describe('Full server sort', () => {
      it('Should sort by default when fullServerSort property is not present', () => {
        const row = `[data-cy='data-table-portal-server-side-default-sort'] .${DATA_TABLE_CLASSES.ROW}`;
    
        checkCorrectIcon(row, ARROW_UP_CLASS);
      });
  
      it('Should not sort by default when fullServerSort property is set to true', () => {
        const row = `[data-cy='data-table-portal-server-side-no-default-sort'] .${DATA_TABLE_CLASSES.ROW}`;

        checkCorrectIcon(row, ARROW_SORT_CLASS);
      });
      
      it('Should sort by default when fullServerSort property is set to false', () => {
        const row = `[data-cy='data-table-portal-server-side-default-sort-with-prop'] .${DATA_TABLE_CLASSES.ROW}`;
        
        checkCorrectIcon(row, ARROW_UP_CLASS);
      });
    });
  });
});
