/// <reference types="Cypress" />

const ACTIVE_CLASS = '-active';
const INVERSE_ATTR = 'inverse';
const ICON_BUTTON = '-icon';
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
const PAGINATION_EVENTS = {
  PAGE_CHANGE: 'chiPageChange',
  PAGE_SIZE: 'chiPageSizeChange'
};

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Pagination', () => {
  beforeEach(() => {
    cy.visit('tests/custom-elements/pagination.html');
  });

  describe('base', () => {
    beforeEach(() => {
      cy.get(`[data-cy='pagination-base']`)
        .children()
        .first()
        .as('paginationNav');
      cy.get('@paginationNav')
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
        .as('paginationNavInverse');
      cy.get('@paginationNavInverse')
        .children()
        .first()
        .as('paginationContentInverse');
      cy.get('@paginationContentInverse')
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
        el: '@paginationNav',
        class: PAGINATION_CLASSES.PAGINATION
      },
      { el: '@paginationContent', class: PAGINATION_CLASSES.CONTENT },
      { el: '@paginationStart', class: PAGINATION_CLASSES.START },
      { el: `@paginationCenter`, class: PAGINATION_CLASSES.CENTER },
      { el: `@paginationEnd`, class: PAGINATION_CLASSES.END },
      {
        el: '@paginationNavInverse',
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

    it(`should show current page with .${ACTIVE_CLASS} class`, () => {
      const rootSelectors = [
        `[data-cy='pagination-base']`,
        `[data-cy='pagination-base-inverse']`
      ];

      rootSelectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`[data-page='1']`)
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

  describe('active', () => {
    it(`should trigger the ${PAGINATION_EVENTS.PAGE_CHANGE} event`, () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on(PAGINATION_EVENTS.PAGE_CHANGE, spy);
      });

      cy.get(`[data-cy='pagination-active']`)
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons')
        .eq(1)
        .click()
        .then(() => {
          expect(spy).to.be.calledOnce;
        });
      cy.get(`[data-cy='pagination-active']`)
        .find(`.${ICON_BUTTON}`)
        .as('paginationIcons')
        .eq(0)
        .click()
        .then(() => {
          expect(spy).to.be.calledTwice;
        });
    });

    it(`should change the current .${ACTIVE_CLASS} class on page change`, () => {
      cy.get(`[data-cy='pagination-active']`)
        .find(`[data-page='4']`)
        .first()
        .as('fourthPage')
        .click()
        .then(() => {
          hasClassAssertion('@fourthPage', `${ACTIVE_CLASS}`);
        });
      cy.get(`[data-cy='pagination-active']`)
        .find(`[data-page='3']`)
        .last()
        .as('thirdPage')
        .click()
        .then(() => {
          hasClassAssertion('@thirdPage', `${ACTIVE_CLASS}`);
        });
    });
  });

  describe('disabled', () => {
    it('should have the previous button be disabled when the active page is 1', () => {
      const prevSelectors = [
        `[data-cy='pagination-disabled-prev']`,
        `[data-cy='pagination-disabled-prev-inverse']`
      ];

      prevSelectors.forEach(sel => {
        cy.get(`${sel}`)
          .find(`.${ICON_BUTTON}`)
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
          .find(`.${ICON_BUTTON}`)
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

    it(`should trigger the ${PAGINATION_EVENTS.PAGE_SIZE} event`, () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on(PAGINATION_EVENTS.PAGE_SIZE, spy);
      });

      cy.get(`[data-cy='pagination-page-size']`)
        .find(`.${PAGINATION_CLASSES.PAGE_SIZE} select`)
        .as('pageSelect')
        .select('40')
        .then(() => {
          expect(spy).to.be.calledOnce;
        });
      cy.get(`@pageSelect`)
        .select('20')
        .then(() => {
          expect(spy).to.be.calledTwice;
        });
    });

    it('should change page size on select change', () => {
      cy.get(`[data-cy='pagination-page-size']`)
        .find(`.${PAGINATION_CLASSES.PAGE_SIZE} select`)
        .as('pageSelect')
        .should('contain', '20');
      cy.get('@pageSelect')
        .select('40')
        .then(() => {
          cy.get('@pageSelect').should('contain', '40');
        });
      cy.get(`@pageSelect`)
        .select('20')
        .then(() => {
          cy.get('@pageSelect').should('contain', '20');
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
          `[data-cy='pagination-compact-base-inverse']`
        ];

        selectors.forEach(sel => {
          cy.get(sel).should('have.attr', 'compact');
        });
      });
    });

    describe('page jumper', () => {
      it('should show a compact page jumper', () => {
        const selectors = [
          `[data-cy='pagination-compact-page-jumper']`,
          `[data-cy='pagination-compact-page-jumper-inverse']`
        ];

        selectors.forEach(sel => {
          cy.get(`${sel}`)
            .find(`.${PAGINATION_CLASSES.JUMPER}`)
            .first()
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
            .find('.icon-page-first')
            .should('have.length', 1);
          cy.get(`${sel}`)
            .find('.icon-page-last')
            .should('have.length', 1);
        });
      });

      it('should go to first and last pages on click', () => {
        cy.get(`[data-cy='pagination-compact-first-last']`)
          .find("[data-page='1']")
          .first()
          .click()
          .then(() => {
            cy.get(`[data-cy='pagination-compact-first-last']`)
              .find(`.${PAGINATION_CLASSES.LABEL}`)
              .should('contain', '1of3');
          });
        cy.get(`[data-cy='pagination-compact-first-last']`)
          .find("[data-page='3']")
          .last()
          .click()
          .then(() => {
            cy.get(`[data-cy='pagination-compact-first-last']`)
              .find(`.${PAGINATION_CLASSES.LABEL}`)
              .should('contain', '3of3');
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
          cy.get(`[data-cy='pagination-compact-inverse${size}']`).should(
            'have.attr',
            `${INVERSE_ATTR}`
          );
        });
      });
    });
  });
});
