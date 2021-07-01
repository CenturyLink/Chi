const ACTIVE_CLASS = '-active';
const INVERSE_CLASS = '-inverse';
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

      cy.get(`[data-cy='pagination-base-inverse']`)
        .children()
        .first()
        .as('paginationContentInverse');
      cy.get('@paginationContent')
        .children()
        .first()
        .as('paginationStartInverse');
      cy.get('@paginationContentInverse')
        .children()
        .eq(1)
        .as('paginationCenterInverse');
      cy.get('@paginationContentInverse')
        .children()
        .last()
        .as('paginationEndInverse');
    });

    const selectors = [
      {
        el: `[data-cy='pagination-base']`,
        class: PAGINATION_CLASSES.PAGINATION
      },
      { el: '@paginationContent', class: PAGINATION_CLASSES.CONTENT },
      { el: '@paginationStart', class: PAGINATION_CLASSES.START },
      { el: `@paginationCenter`, class: PAGINATION_CLASSES.CENTER },
      { el: `@paginationEnd`, class: PAGINATION_CLASSES.END },
      {
        el: `[data-cy='pagination-base-inverse']`,
        class: PAGINATION_CLASSES.PAGINATION
      },
      { el: '@paginationContentInverse', class: PAGINATION_CLASSES.CONTENT },
      { el: '@paginationStartInverse', class: PAGINATION_CLASSES.START },
      { el: `@paginationCenterInverse`, class: PAGINATION_CLASSES.CENTER },
      { el: `@paginationEndInverse`, class: PAGINATION_CLASSES.END }
    ];

    selectors.forEach(sel => {
      it(`${sel.el} should have class .${sel.class}`, () => {
        hasClassAssertion(sel.el, sel.class);
      });
    });

    it('should show current page with .active class', () => {
      const rootSelectors = [
        `[data-cy='pagination-base']`,
        `[data-cy='pagination-base-inverse']`
      ];
      rootSelectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`[data-page='3']`)
          .as('currentPage');
        hasClassAssertion('@currentPage', `${ACTIVE_CLASS}`);
      });
    });

    it('should show the correct number of pages', () => {
      const centerSelectors = [`@paginationCenter`, `@paginationCenterInverse`];
      centerSelectors.forEach(sel => {
        cy.get(`${sel}`)
          .find('.chi-button-group')
          .children()
          .should('have.length', '7');
      });
    });
  });

  describe('disabled', () => {
    it('should have the previous button be disabled', () => {
      const prevSelectors = [
        `[data-cy='pagination-disabled-prev']`,
        `[data-cy='pagination-disabled-prev-inverse']`
      ];
      prevSelectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`.-icon`)
          .eq(0)
          .should('have.attr', 'disabled');
      });
    });

    it('should have the next button be disabled', () => {
      const nextSelectors = [
        `[data-cy='pagination-disabled-next']`,
        `[data-cy='pagination-disabled-next-inverse']`
      ];
      nextSelectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`.-icon`)
          .eq(1)
          .should('have.attr', 'disabled');
      });
    });
  });

  describe('truncation', () => {
    it('should truncate', () => {
      const truncationSelectors = [
        `[data-cy='pagination-truncation']`,
        `[data-cy='pagination-truncation-inverse']`
      ];
      truncationSelectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`.${PAGINATION_CLASSES.CENTER}`)
          .children()
          .contains('...')
          .should('have.length', 1);
      });
    });

    it('should double-truncate', () => {
      const doubleTruncationSelectors = [
        `[data-cy='pagination-double-truncation']`,
        `[data-cy='pagination-double-truncation-inverse']`
      ];
      doubleTruncationSelectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`.${PAGINATION_CLASSES.CENTER}`)
          .children()
          .find('div.-disabled:contains(...)')
          .should('have.length', 2);
      });
    });
  });

  describe('results label', () => {
    it('should show a results label', () => {
      const selectors = [
        `[data-cy='pagination-results-label']`,
        `[data-cy='pagination-results-label-inverse']`
      ];
      selectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`.${PAGINATION_CLASSES.RESULTS}`)
          .should('contain', '240 results');
      });
    });
  });

  describe('page size', () => {
    it('should show a page size', () => {
      const selectors = [
        `[data-cy='pagination-page-size']`,
        `[data-cy='pagination-page-size-inverse']`
      ];
      selectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`.${PAGINATION_CLASSES.PAGE_SIZE}`)
          .as('pageSize')
          .should('contain', 'per page');
        cy.get('@pageSize')
          .find('select')
          .should('have.value', '20');
      });
    });
  });

  describe('page jumper', () => {
    it('should show a page jumper', () => {
      const selectors = [
        `[data-cy='pagination-page-jumper']`,
        `[data-cy='pagination-page-jumper-inverse']`
      ];
      selectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`.${PAGINATION_CLASSES.JUMPER}`)
          .as('pageJumper')
          .should('contain', 'Go to page:');
        cy.get('@pageJumper')
          .find('input')
          .type('2')
          .should('have.value', '2');
      });
    });
  });

  describe('compact', () => {
    describe('base', () => {
      it(`should have class .${PAGINATION_CLASSES.COMPACT}`, () => {
        const selectors = [
          `[data-cy='pagination-compact-base']`,
          `[data-cy='pagination-compact-page-jumper-inverse']`
        ];
        selectors.forEach(sel => {
          cy.get(`${sel}`).should('have.class', PAGINATION_CLASSES.COMPACT);
        });
      });
    });

    describe('page jumper', () => {
      it('should show an inline page jumper', () => {
        const selectors = [
          `[data-cy='pagination-compact-page-jumper']`,
          `[data-cy='pagination-compact-page-jumper-inverse']`
        ];
        selectors.forEach(sel => {
          cy.get(`${sel}`)
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
    });

    describe('first and last page buttons', () => {
      it('should show first and last page buttons', () => {
        const selectors = [
          `[data-cy='pagination-compact-first-last']`,
          `[data-cy='pagination-compact-first-last-inverse']`
        ];
        selectors.forEach(sel => {
          cy.get(`${sel}`)
            .find("[data-page='1']")
            .should('have.length', 2);
          cy.get(`${sel}`)
            .find("[data-page='3']")
            .should('have.length', 2);
        });
      });
    });

    describe('additional sizes', () => {
      const sizes = ['-sm', '-md', '-lg', '-xl'];
      sizes.forEach(size => {
        it(`should have class .${size}`, () => {
          hasClassAssertion(
            `[data-cy='pagination-compact${size}'] .chi-button`,
            size
          );
          hasClassAssertion(
            `[data-cy='pagination-compact-inverse${size}'] .chi-button`,
            size
          );
          hasClassAssertion(
            `[data-cy='pagination-compact-inverse${size}']`,
            `${INVERSE_CLASS}`
          );
        });
      });
    });
  });
});
