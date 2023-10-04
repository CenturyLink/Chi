import {
  DATA_TABLE_CLASSES,
  DATA_TABLE_EVENTS,
  EXPANDED_CLASS,
  PAGINATION_CLASSES,
  PORTAL_CLASS
} from '../data-table-common.cy';
import { hasClassAssertion } from '../data-table-common.cy';

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

    it('Should have footer', () => {
      cy.get(`[data-cy='data-table-portal-empty']`)
        .find(`.${DATA_TABLE_CLASSES.FOOTER}`)
        .should('exist');
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
