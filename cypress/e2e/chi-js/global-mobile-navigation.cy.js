describe('Global Sidenav', () => {
  before(() => {
    cy.visit('tests/lumen/js/global-mobile-navigation.html');
  });

  describe('mobile-navigation-interaction-trigger button is present', () => {
    it('mobile-navigation-interaction-trigger button should be visible', () => {
      cy.get('#mobile-nav-trigger')
        .should('be.visible');
    });
  });

  describe('click on mobile-navigation-interaction-trigger button opens the drawer', () => {
    it('click mobile-navigation-interaction-trigger opens chi-drawer ', () => {
      cy.get('#mobile-nav-trigger')
        .click()
        .wait(1000);
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer')
        .should('have.class', '-left')
        .should('have.class', '-active')
        .should('be.visible');
    });
  });

  describe('Open and close of Drawer Header Dropdown', () => {
    it('click on Drawer Header Dropdown trigger opens the dropdown items', () => {
      cy.get('#enterprise-dropdown .chi-button')
        .click();
      cy.get('#enterprise-dropdown .chi-button')
        .should('have.class','-active');
      cy.get('#enterprise-dropdown .chi-dropdown__menu')
        .should('be.visible')
        .should('have.class','-active');
    });
    it('click on Drawer Header Dropdown trigger closes the dropdown', () => {
      cy.get('#enterprise-dropdown .chi-button')
        .click();
      cy.get('#enterprise-dropdown .chi-button')
        .should('have.not.class','-active');
      cy.get('#enterprise-dropdown .chi-dropdown__menu')
        .should('not.be.visible')
        .should('have.not.class','-active');
    });
  });

  describe('Open Drawer Header Dropdown and close drawer clicking on a menu item', () => {
    it('click on Drawer Header Dropdown trigger opens the dropdown items', () => {
      cy.get('#enterprise-dropdown .chi-button')
        .click();
      cy.get('#enterprise-dropdown .chi-button')
        .should('have.class','-active');
      cy.get('#enterprise-dropdown .chi-dropdown__menu')
        .should('be.visible')
        .should('have.class','-active');
    });
    it('click on Dropdown Footer menu item closes the drawer', () => {
      cy.get('#enterprise-dropdown .chi-dropdown__menu-footer .chi-link')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed')
        .children()
        .find('#mobile-nav-drawer')
        .should('not.exist');
    });
  });

  describe('Clicking on single level menu item should close the drawer', () => {
    it('Clicking on My Profile should close the drawer', () => {
      cy.get('#mobile-nav-trigger')
        .click();
      cy.get('.chi-mobile-nav__list:last-child')
        .find('.chi-link')
        .contains('My Profile')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed')
        .children()
        .find('#mobile-nav-drawer')
        .should('not.exist');
    });
  });

  describe('Opening the second level accordion navigation', () => {
    it('open second level level accordion item and click on it to close the drawer', () => {
      cy.get('#mobile-nav-trigger')
        .click();
      cy.get('#main-menu')
        .find('.chi-link')
        .contains('Services')
        .click();
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__content')
        .find('#services-menu')
        .as('accordion')
      cy.get('@accordion')
        .should('have.not.class','-d--none');
      cy.get('@accordion')
        .find('.chi-mobile-nav__item')
        .contains('Add Services')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed')
        .children()
        .find('#mobile-nav-drawer')
        .should('not.exist');
    });
  });

  describe('Check active state of accordion items', () => {
    it('accordion item should recover the active state when the drawer is closed and opened again', () => {
      cy.get('#mobile-nav-trigger')
        .click();
      cy.get('#main-menu')
        .find('.chi-link')
        .contains('Services')
        .click();
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__content')
        .find('#services-menu')
        .as('firstAccordion')
      cy.get('@firstAccordion')
        .find('.chi-mobile-nav__item:nth-child(2)')
        .find('chi-link')
        .should('have.class', '-active');
      cy.get('@firstAccordion')
        .find('.chi-mobile-nav__item')
        .find('chi-link')
        .contains('Quotes')
        .click();
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__content')
        .find('#quotes-menu')
        .as('secondAccordion')
      cy.get('@secondAccordion')
        .find('.chi-mobile-nav__item:last-child')
        .find('chi-link')
        .contains('Create Quotes')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed')
        .children()
        .find('#mobile-nav-drawer')
        .should('not.exist');
      cy.get('#mobile-nav-trigger')
        .click();
      cy.get('#main-menu')
        .find('.chi-link')
        .contains('Services')
        .click();
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__content')
        .find('#services-menu')
        .as('firstAccordion')
      cy.get('@firstAccordion')
        .find('.chi-mobile-nav__item:nth-child(6)')
        .find('chi-link')
        .should('have.class', '-active')
        .click();
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__content')
        .find('#quotes-menu')
        .as('secondAccordion')
      cy.get('@secondAccordion')
        .find('.chi-mobile-nav__item:last-child')
        .find('chi-link')
        .should('have.class', '-active');
      cy.get('.chi-backdrop')
        .click()
        .should('have.class','-closed')
        .children()
        .find('#mobile-nav-drawer')
        .should('not.exist');
    });
  });

  describe('Back button functionality', () => {
    it('check that click on back button closes second level drawer', () => {
      cy.get('#mobile-nav-trigger')
        .click();
      cy.get('#main-menu')
        .find('.chi-link')
        .contains('Services')
        .click();
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__content')
        .find('#services-menu')
        .as('firstAccordion')
      cy.get('@firstAccordion')
        .find('.chi-mobile-nav__item')
        .find('chi-link')
        .contains('Quotes')
        .click();
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__content')
        .find('#quotes-menu')
        .as('secondAccordion');
      cy.get('@secondAccordion')
        .should('have.not.class','-d--none');
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__header')
        .find('chi-link')
        .contains('Services')
        .click();
      cy.get('@secondAccordion')
        .should('have.class','-d--none');
      cy.get('@firstAccordion')
        .should('have.not.class','-d--none');
      cy.get('#mobile-nav-drawer')
        .find('.chi-drawer__header')
        .find('chi-link')
        .contains('All')
        .click();
      cy.get('@firstAccordion')
        .should('have.class','-d--none');
      cy.get('.chi-backdrop')
        .click()
        .should('have.class','-closed')
        .children()
        .find('#mobile-nav-drawer')
        .should('not.exist');
    });
  });

  describe('Check backdrop behaviour', () => {
    it('backdrop should be present, onclick on backdrop closes drawer', () => {
      cy.get('#mobile-nav-trigger')
        .click();
      cy.get('.chi-backdrop')
        .should('be.visible')
        .should('not.have.class','-closed')
        .click()
        .should('have.class','-closed')
        .children()
        .find('.chi-drawer')
        .should('not.have.class', '-active');
    });
  });

  describe('Test Global Mobile Navigation dispose method', () => {
    it('Click to run dispose method', () => {
      cy.get('#dispose-mobile-navigation-button')
        .click();
    });

    it('Check that sidenav does not open on trigger button', () => {
      cy.get('#mobile-nav-trigger')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed')
        .children()
        .find('#mobile-nav-drawer')
        .should('not.exist');
    });
  });
});
