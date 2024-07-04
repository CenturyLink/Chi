import {
  ARROW_UP_CLASS,
  DATA_TABLE_CLASSES,
  ICON_CLASS
} from './data-table-common.cy';

describe('Data table sorting', () => {
  before(() => {
    cy.visit('tests/chi-vue/_data-table-sorting.html');
  });

  it('Should sort if sorting configuration changes', () => {
    cy.get(`[data-cy='data-table-sorting-client-side'] .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW}`)
      .eq(0)
      .as('firstRow');

    cy.get('@firstRow')
      .scrollIntoView()
      .should('contain', 'Name 1');
    
    cy.get(`#changeSort`).click();

    cy.get('@firstRow')
      .should('contain', 'Name 4');
  });

  it('Should render correct icon in fullServerSort', () => {
    cy.get(`[data-cy='data-table-sorting-server-side-full-server-sort'] .${DATA_TABLE_CLASSES.HEAD}`)
      .find(`.${DATA_TABLE_CLASSES.CELL}`)
      .eq(1)
      .find(`.${ICON_CLASS}`)
      .as("sortIcon");

    cy.get('@sortIcon')
      .should('have.class', ARROW_UP_CLASS)
      .and('have.css', 'transform')
      // same as rotate(180deg)
      .should('include', 'matrix(-1, 0, 0, -1, 0, 0)');
  });
})
