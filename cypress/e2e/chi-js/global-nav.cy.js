describe('Global Sidenav', () => {
  before(() => {
    cy.visit('tests/lumen/js/global-nav.html');
  });

  beforeEach(() => {
    cy.viewport(1450, 1000);
    cy.get('[data-cy="global-nav"]').find('ul.chi-sidenav__list').as('list');
  });

  describe('Test expand/collapse functionality', () => {
    it('check that clicking on the toggle button collapses the sidenav', () => {
      cy.get('#toggle-nav').click();
      cy.get('[data-cy="global-nav"]').should('have.class', '-collapsed');
    });

    it('check that sidenav expands on hover', () => {
      cy.get('@list').trigger('mouseenter');
      cy.get('[data-cy="global-nav"]').should('have.class', '-expanded');
    });

    it('check that clicking on the toggle button collapses the sidenav', () => {
      cy.get('#toggle-nav').click();
      cy.get('[data-cy="global-nav"]').should('have.class', '-collapsed');
    });

    it('check that clicking on the toggle button again expands the sidenav', () => {
      cy.get('#toggle-nav').click();
      cy.get('[data-cy="global-nav"]').should('have.class', '-expanded');
    });
  });

  describe('Test Global Sidenav items behaviour', () => {
    it('check that clicking on item activates it', () => {
      cy.get('@list').find('> li.chi-sidenav__item:first-child chi-link').as('firstLevelFirstItem');
      cy.get('@firstLevelFirstItem').click();
      cy.get('@firstLevelFirstItem').should('have.class', '-active');
    });

    it('check that clicking on the accordion items expands its content', () => {
      cy.get('@list').find('> li.chi-sidenav__item');
      cy.get('.chi-accordion__item').as('accordionItem').find('.chi-accordion__trigger').click({ multiple: true });
      cy.get('@accordionItem')
        .should('have.class', '-expanded')
        .find('.chi-accordion__content')
        .should('have.css', 'display', 'block');
    });
  });

  describe('Test Global Sidenav on small viewport', () => {
    it('check that sidenav does not expand when viewport is small', () => {
      cy.viewport(1000, 800);
      cy.get('#toggle-nav').click();
      cy.get('[data-cy="global-nav"]').should('have.class', '-collapsed');
    });
  });

  describe('Test Global Sidenav dispose method', () => {
    it('Check that sidenav does not open on trigger expand sidenav after disposing', () => {
      cy.reload();

      cy.get('#toggle-nav').click();
      cy.get('#dispose-sidenav-button').click();
      cy.get('#toggle-nav').click();
    
      cy.get('[data-cy="global-nav"]').should('have.class', '-collapsed');
    });
  });
});
