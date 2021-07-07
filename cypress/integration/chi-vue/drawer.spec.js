const ACTIVE_CLASS = '-active';
const CLOSE_CLASS = '-close';
const DRAWER_CLASSES = {
  DRAWER: 'chi-drawer',
  HEADER: 'chi-drawer__header',
  TITLE: 'chi-drawer__title',
  CONTENT: 'chi-drawer__content'
};

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Drawer', () => {
  before(() => {
    cy.visit('tests/chi-vue/drawer.html');
  });

  describe('positions', () => {
    beforeEach(() => {
      cy.get(`[data-cy='drawer-left']`)
        .children()
        .first()
        .as('header');
      cy.get(`@header`)
        .children()
        .first()
        .as('title');
      cy.get(`[data-cy='drawer-left']`)
        .children()
        .eq(1)
        .as('content');
    });

    const selectors = [
      { el: `[data-cy='drawer-left']`, class: DRAWER_CLASSES.DRAWER },
      { el: `[data-cy='drawer-left']`, class: ACTIVE_CLASS },
      { el: '@header', class: DRAWER_CLASSES.HEADER },
      { el: '@title', class: DRAWER_CLASSES.TITLE },
      { el: `@content`, class: DRAWER_CLASSES.CONTENT },
      { el: `[data-cy='drawer-left']`, class: '-left' },
      { el: `[data-cy='drawer-right']`, class: '-right' },
      { el: `[data-cy='drawer-top']`, class: '-top' },
      { el: `[data-cy='drawer-bottom']`, class: '-bottom' }
    ];

    selectors.forEach(sel => {
      it(`${sel.el} should have class .${sel.class}`, () => {
        hasClassAssertion(sel.el, sel.class);
      });
    });

    it('should have a close button', () => {
      cy.get(`[data-cy="drawer-left"]`)
        .find(`button.${CLOSE_CLASS}`)
        .should('exist');
    });
  });

  describe('title', () => {
    it('should have a title', () => {
      cy.get(`[data-cy='drawer-title']`)
        .find(`.${DRAWER_CLASSES.TITLE}`)
        .should('contain', 'Drawer title here');
    });
  });

  describe('non-closable', () => {
    it('should not have a close button', () => {
      cy.get(`[data-cy="drawer-non-closable"]`)
        .find(`button.${CLOSE_CLASS}`)
        .should('not.exist');
    });
  });

  describe('no header', () => {
    it('should not have a header', () => {
      cy.get(`[data-cy="drawer-no-header"]`)
        .find(`${DRAWER_CLASSES.HEADER}`)
        .should('not.exist');
    });
  });

  describe('portal', () => {
    beforeEach(() => {
      cy.get(`[data-cy='drawer-portal-left']`)
        .children()
        .first()
        .as('header');
      cy.get(`@header`)
        .children()
        .first()
        .as('title');
      cy.get(`[data-cy='drawer-portal-left']`)
        .children()
        .eq(1)
        .as('content');
    });

    const selectors = [
      { el: `[data-cy='drawer-portal-left']`, class: DRAWER_CLASSES.DRAWER },
      { el: '@header', class: DRAWER_CLASSES.HEADER },
      { el: '@title', class: DRAWER_CLASSES.TITLE },
      { el: `@content`, class: DRAWER_CLASSES.CONTENT },
      { el: `[data-cy='drawer-portal-left']`, class: '-left' },
      { el: `[data-cy='drawer-portal-right']`, class: '-right' },
      { el: `[data-cy='drawer-portal-top']`, class: '-top' },
      { el: `[data-cy='drawer-portal-bottom']`, class: '-bottom' }
    ];

    selectors.forEach(sel => {
      it(`${sel.el} should have class .${sel.class}`, () => {
        hasClassAssertion(sel.el, sel.class);
      });
    });

    it('should have a close button', () => {
      cy.get(`[data-cy="drawer-portal-left"]`)
        .find(`button.${CLOSE_CLASS}`)
        .should('exist');
    });
  });

  describe('show/hide', () => {
    it('should toggle visibility on button click', () => {
      cy.get(`[data-cy="drawer-show-hide-container"]`)
        .find('#btn')
        .as('btn')
        .click()
        .then(() => {
          hasClassAssertion(`[data-cy="drawer-show-hide"]`, `${ACTIVE_CLASS}`);
        });
      cy.get('@btn')
        .click()
        .then(() => {
          cy.get(`[data-cy="drawer-show-hide"]`).should(
            'not.have.class',
            `.${ACTIVE_CLASS}`
          );
        });
    });

    it.skip('should hide on close button click', () => {});

    it.skip('should hide when clicking outside the drawer', () => {});
  });
});
