export const PAGINATION_CLASSES = {
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

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Pagination', () => {
  before(() => {
    cy.visit('tests/chi-vue/pagination.html');
  });

  describe('base', () => {
    beforeEach(() => {
      cy.get(`[data-cy='pagination-base']`)
        .children()
        .first()
        .as('paginationContent');
      cy.get('@paginationContent')
        .children()
        .first()
        .as('paginationStart');
      cy.get('@paginationContent')
        .children()
        .eq(1)
        .as('paginationCenter');
      cy.get('@paginationContent')
        .children()
        .last()
        .as('paginationEnd');
    });

    const selectors = [
      {
        el: `[data-cy='pagination-base']`,
        class: PAGINATION_CLASSES.PAGINATION
      },
      { el: '@paginationContent', class: PAGINATION_CLASSES.CONTENT },
      { el: '@paginationStart', class: PAGINATION_CLASSES.START },
      { el: `@paginationCenter`, class: PAGINATION_CLASSES.CENTER },
      { el: `@paginationEnd`, class: PAGINATION_CLASSES.END }
    ];

    selectors.forEach(sel => {
      it(`${sel.el} should have class .${sel.class}`, () => {
        hasClassAssertion(sel.el, sel.class);
      });
    });

    it('should show current page with .active class', () => {
      cy.get(`[data-cy='pagination-base']`)
        .find(`[data-page='3']`)
        .as('currentPage');
      hasClassAssertion('@currentPage', '-active');
    });

    it('should show the correct number of pages', () => {
      cy.get(`@paginationCenter`)
        .find('.chi-button-group')
        .children()
        .should('have.length', '7');
    });
  });

  describe('disabled', () => {
    it('should have the previous button be disabled', () => {
      cy.get(`[data-cy='pagination-disabled-prev']`)
        .find(`.-icon`)
        .eq(0)
        .should('have.attr', 'disabled');
    });
    it('should have the next button be disabled', () => {
      cy.get(`[data-cy='pagination-disabled-next']`)
        .find(`.-icon`)
        .eq(1)
        .should('have.attr', 'disabled');
    });
  });

  describe('truncation', () => {
    it('should truncate', () => {
      cy.get(`[data-cy='pagination-truncation']`)
        .find(`.${PAGINATION_CLASSES.CENTER}`)
        .children()
        .contains('...')
        .should('have.length', 1);
    });

    it('should double-truncate', () => {
      cy.get(`[data-cy='pagination-double-truncation']`)
        .find(`.${PAGINATION_CLASSES.CENTER}`)
        .children()
        .find('div.-disabled:contains(...)')
        .should('have.length', 2);
    });
  });

  describe('results label', () => {
    it('should show a results label', () => {
      cy.get(`[data-cy='pagination-results-label']`)
        .find(`.${PAGINATION_CLASSES.RESULTS}`)
        .should('contain', '240 results');
    });
  });

  describe('page size', () => {
    it('should show a page size', () => {
      cy.get(`[data-cy='pagination-page-size']`)
        .find(`.${PAGINATION_CLASSES.PAGE_SIZE}`)
        .as('pageSize')
        .should('contain', 'per page');
      cy.get('@pageSize')
        .find('select')
        .should('have.value', '20');
    });
  });

  describe('page jumper', () => {
    it('should show a page jumper', () => {
      cy.get(`[data-cy='pagination-page-jumper']`)
        .find(`.${PAGINATION_CLASSES.JUMPER}`)
        .as('pageJumper')
        .should('contain', 'Go to page:');
      cy.get('@pageJumper')
        .find('input')
        .type('2')
        .should('have.value', '2');
    });
  });

  describe('compact', () => {
    describe('base', () => {
      it(`should have class .${PAGINATION_CLASSES.COMPACT}`, () => {
        cy.get("[data-cy='pagination-compact-base']").should(
          'have.class',
          PAGINATION_CLASSES.COMPACT
        );
      });
    });

    describe('page jumper', () => {
      it('should show an inline page jumper', () => {
        cy.get(`[data-cy='pagination-compact-page-jumper']`)
          .find(`.${PAGINATION_CLASSES.JUMPER}`)
          .as('pageJumper')
          .should('contain', 'of');
        cy.get('@pageJumper').should('contain', 3);
        cy.get('@pageJumper')
          .find('input')
          .type('{backspace}3')
          .should('have.value', '3');
      });
    });

    describe('first and last page buttons', () => {
      it('should show first and last page buttons', () => {
        cy.get(`[data-cy='pagination-compact-first-last']`)
          .find("[data-page='1']")
          .should('have.length', 2);
        cy.get(`[data-cy='pagination-compact-first-last']`)
          .find("[data-page='3']")
          .should('have.length', 2);
      });
    });

    describe('additional sizes', () => {
      const sizes = [
        {
          el: `[data-cy='pagination-compact-sm'] .chi-button`,
          class: '-sm'
        },
        {
          el: `[data-cy='pagination-compact-md'] .chi-button`,
          class: '-md'
        },
        {
          el: `[data-cy='pagination-compact-lg'] .chi-button`,
          class: '-lg'
        },
        {
          el: `[data-cy='pagination-compact-xl'] .chi-button`,
          class: '-xl'
        }
      ];

      sizes.forEach(sel => {
        it(`should have class .${sel.class}`, () => {
          hasClassAssertion(sel.el, sel.class);
        });
      });
    });
  });
});
