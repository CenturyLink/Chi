import {
  DATA_TABLE_CLASSES,
  ACTIVE_CLASS,
  PAGINATION_CLASSES,
  PORTAL_CLASS
} from '../../../src/chi-vue/src/constants/classes';

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
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

      it.skip('should trigger the appropriate event', () => {
        // TODO: add test once workaround is found.
        const spy = cy.spy();
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
        cy.get(`@pagination`)
          .find(`.-icon`)
          .as('paginationIcons')
          .eq(2)
          .click()
          .then(() => {
            cy.get(`@pagination`)
              .find(`button[data-page='2']`)
              .eq(0)
              .as('pageTwoButton');
            hasClassAssertion(`@pageTwoButton`, '-active');
            cy.get(`@row`).should('contain', 'Name 4');
          });
        cy.get('@paginationIcons')
          .eq(1)
          .click()
          .then(() => {
            cy.get(`@pagination`)
              .find(`button[data-page='1']`)
              .eq(1)
              .as('pageOneButton');
            hasClassAssertion(`@pageOneButton`, '-active');
            cy.get(`@row`).should('contain', 'Updated Name 1');
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
            hasClassAssertion('@pageTwoButton', '-active');
            cy.get(`@row`).should('contain', 'Name 4');
          });
        cy.get(`@pagination`)
          .find(`button[data-page='1']`)
          .eq(2)
          .as('pageOneButton')
          .click()
          .then(() => {
            hasClassAssertion('@pageOneButton', '-active');
            cy.get(`@row`).should('contain', 'Updated Name 1');
          });
      });

      it('should go to first and last pages', () => {
        cy.get(`@pagination`)
          .find(`.-icon`)
          .as('paginationIcons')
          .eq(2)
          .click()
          .then(() => {
            cy.get(`@pagination`)
              .find(`button[data-page='2']`)
              .as('pageTwoButton');
            hasClassAssertion(`@pageTwoButton`, '-active');
            cy.get(`@row`).should('contain', 'Name 4');
          });
        cy.get('@paginationIcons')
          .eq(0)
          .click()
          .then(() => {
            cy.get(`@pagination`)
              .find(`button[data-page='1']`)
              .as('pageOneButton');
            hasClassAssertion(`@pageOneButton`, '-active');
            cy.get(`@row`).should('contain', 'Updated Name 1');
          });
      });

      it('should change number of page results', () => {
        cy.get('@body')
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .should('have.length', 3);
        cy.get(`@pagination`)
          .find(`.${PAGINATION_CLASSES.PAGE_SIZE} select`)
          .as('pagSelect')
          .select('40')
          .then(() => {
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
        .find(`.-selectable`)
        .as('selectables');
    });

    it(`should have class .${DATA_TABLE_CLASSES.SELECTABLE}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-selectable'] .${DATA_TABLE_CLASSES.CELL}`,
        DATA_TABLE_CLASSES.SELECTABLE
      );
    });

    it.skip('should trigger the appropriate event', () => {
      // TODO: add test once workaround is found.
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on('change', spy);
      });

      cy.get('@selectables')
        .eq(0)
        .click()
        .then(() => {
          expect(spy).to.be.called;
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
          hasClassAssertion('@rows', ACTIVE_CLASS);
        });
      cy.get('@selectables')
        .eq(0)
        .click()
        .then(() => {
          cy.get('@rows').should('not.have.class', ACTIVE_CLASS);
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
            .find(`.-icon`)
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
      hasClassAssertion(
        `[data-cy='data-table-accordion'] .${DATA_TABLE_CLASSES.CELL}`,
        DATA_TABLE_CLASSES.EXPANDABLE
      );
    });

    it.skip('should trigger the appropriate event', () => {
      // TODO: add test once workaround is found.
      const spy = cy.spy();
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
        .should('not.have.class', '-expanded');
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
          hasClassAssertion('@rows', '-expanded');
          cy.get('@childRowContainer').should(
            'not.have.css',
            'display',
            'none'
          );
        });
      cy.get('@expandableButton')
        .click()
        .then(() => {
          cy.get('@rows').should('not.have.class', '-expanded');
        });
    });
  });

  describe('sorting', () => {
    describe('base', () => {
      beforeEach(() => {
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.BODY}`)
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .as('firstRow');
      });

      it(`should have class .${DATA_TABLE_CLASSES.SORTING}`, () => {
        hasClassAssertion(
          `[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.CELL}`,
          DATA_TABLE_CLASSES.SORTING
        );
      });

      it.skip('should trigger the appropriate event', () => {
        // TODO: add test once workaround is found.
        const spy = cy.spy();
      });

      it(`should sort by name with the correct icons`, () => {
        cy.get('@firstRow').should('contain', 'Name 1');
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(0)
          .as('firstCell')
          .find('.chi-icon')
          .as('sortIcon');
        hasClassAssertion('@sortIcon', 'icon-arrow-sort');
        cy.get('@firstCell')
          .click()
          .then(() => {
            hasClassAssertion('@sortIcon', 'icon-arrow-up');
            cy.get('@firstRow').should('contain', 'Name 1');
            cy.get('@sortIcon').should('have.css', 'transform', 'none');
          });
        cy.get('@firstCell')
          .click()
          .then(() => {
            hasClassAssertion('@sortIcon', 'icon-arrow-up');
            cy.get('@sortIcon')
              .should('have.attr', 'style')
              .should('contain', 'transform: rotate(180deg);');
            cy.get('@firstRow').should('contain', 'Surname 2');
          });
        cy.get('@firstCell')
          .click()
          .then(() => {
            cy.get('@firstRow').should('contain', 'Name 1');
            hasClassAssertion('@sortIcon', 'icon-arrow-sort');
          });
      });

      it(`should sort by status using a custom template`, () => {
        cy.get('@firstRow').should('contain', 'Name 1');
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(1)
          .as('idCell')
          .click()
          .then(() => {
            cy.get('@firstRow').should('contain', 'active');
          });
        cy.get('@idCell')
          .click()
          .then(() => {
            cy.get('@firstRow').should('contain', 'inactive');
          });
        cy.get('@idCell')
          .click()
          .then(() => {
            cy.get('@firstRow').should('contain', 'active');
          });
      });

      it.skip(`should sort by date`, () => {
        // TODO: modify this test once date fix is out.
        cy.get('@firstRow').should('contain', 'Dec 18, 2020 3:26 PM');
        cy.get(`[data-cy='data-table-sorting'] .${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .find(`.${DATA_TABLE_CLASSES.CELL}`)
          .eq(2)
          .as('dateCell')
          .click()
          .then(() => {
            cy.get('@firstRow').should('contain', 'Dec 18, 2020 2:38 AM');
          });
        cy.get('@dateCell')
          .click()
          .then(() => {
            cy.get('@firstRow')
              .eq(0)
              .should('contain', 'Nov 5, 2020 10:15 AM');
          });
        cy.get('@dateCell')
          .click()
          .then(() => {
            cy.get('@firstRow').should('contain', 'Dec 18, 2020 3:26 PM');
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
        cy.get('@firstRow').should('contain', 'Surname 2');
        cy.get(
          `[data-cy='data-table-sorting'] .${PAGINATION_CLASSES.PAGINATION} .-icon`
        )
          .eq(1)
          .click()
          .then(() => {
            cy.get('@firstRow').should('contain', 'Name 5');
          });
        cy.get(
          `[data-cy='data-table-sorting'] .${PAGINATION_CLASSES.PAGINATION} .-icon`
        )
          .eq(0)
          .click()
          .then(() => {
            cy.get('@firstRow').should('contain', 'Surname 2');
          });
        cy.get('@firstCell').click();
      });
    });

    describe('default sorting asc', () => {
      it(`should have ascending sorting by default`, () => {
        cy.get(`[data-cy='data-table-sorting-asc'] .${DATA_TABLE_CLASSES.BODY}`)
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .should('contain', 'Name 1');
      });
    });

    describe('default sorting desc', () => {
      it(`should have descending sorting by default`, () => {
        cy.get(
          `[data-cy='data-table-sorting-desc'] .${DATA_TABLE_CLASSES.BODY}`
        )
          .find(`.${DATA_TABLE_CLASSES.ROW}`)
          .eq(0)
          .should('contain', 'Name 6');
      });
    });
  });

  describe('sizes', () => {
    it(`should have class .-xs`, () => {
      hasClassAssertion(`[data-cy='data-table-xs']`, '-xs');
    });

    it(`should have class .-sm`, () => {
      hasClassAssertion(`[data-cy='data-table-sm']`, '-sm');
    });

    it(`should have class .-md`, () => {
      hasClassAssertion(`[data-cy='data-table-md']`, '-md');
    });

    it(`should have class .-lg`, () => {
      hasClassAssertion(`[data-cy='data-table-lg']`, '-lg');
    });

    it(`should have class .-xl`, () => {
      hasClassAssertion(`[data-cy='data-table-xl']`, '-xl');
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
  });

  describe('portal accordion', () => {
    it(`should have class .${DATA_TABLE_CLASSES.EXPANDABLE}`, () => {
      hasClassAssertion(
        `[data-cy='data-table-portal-accordion'] .${DATA_TABLE_CLASSES.CELL}`,
        DATA_TABLE_CLASSES.EXPANDABLE
      );
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

    it.skip('should trigger the appropriate event', () => {
      // TODO: add test once workaround is found.
      const spy = cy.spy();
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
        .should('not.have.class', '-expanded');
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
          hasClassAssertion('@rows', '-expanded');
          cy.get('@childRowContainer').should(
            'not.have.css',
            'display',
            'none'
          );
        });
      cy.get('@expandableButton')
        .click()
        .then(() => {
          cy.get('@rows').should('not.have.class', '-expanded');
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
      hasClassAssertion('@firstRow', '-expanded');
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
          hasClassAssertion('@childRow', '-expanded');
        });
    });

    it('should have 2-level collapsed content', () => {
      cy.get(`@childRows`).should('contain', 'Child Name 1');
      cy.get(`@grandchildRows`).should('contain', 'Grand-child Name 1');
    });
  });
});
