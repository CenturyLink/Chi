const drawerDropDownItem   = '.chi-mobile-nav__list-item-list ul.chi-tabs li';

describe('mobile-nav-menu', function() {
  before(() => {
    cy.visit('tests/js/mobile-nav.html');
  });
  describe('mobile-navigation-interaction-trigger button is present', () => {
    it('mobile-navigation-interaction-trigger button should be visible', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .should('be.visible');
    });
  });
  describe('click on mobile-navigation-interaction-trigger button opens the drawer', () => {
    it('click mobile-navigation-interaction-trigger opens chi-drawer ', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click()
        .wait(1000);
      cy.get('.chi-drawer')
        .should('have.class', '-left')
        .should('have.class', '-active')  
        .should('be.visible');
    });
  });

  describe('open and close of Drawer Header Dropdown', () => {
    it('click on Drawer Header Dropdown trigger opens the dropdown items', () => {
      cy.get('#button-site-menu2')
        .click()
      cy.get('#dropdown-2-menu')
        .should('be.visible')
        .should('have.class','-active');
    });
    it('click on Drawer Header Dropdown trigger closes the dropdown', () => {
      cy.get('#button-site-menu2')
        .click()
      cy.get('#dropdown-2-menu')
        .should('not.be.visible')
        .should('not.have.class','-active');
    });
  });

  describe('open and close of secondary dropdown of Drawer', () => {
    it('click on secondary dropdown of Drawer opens the dropdown items', () => {
      cy.get('#button-user-menu2')
        .click()
      cy.get('#dropdown-3-menu')
        .should('be.visible')
        .should('have.class','-active');
    });
    it('click on secondary dropdown of Drawer second time close the dropdown items', () => {
      cy.get('#button-user-menu2')
        .click()
      cy.get('#dropdown-3-menu')
        .should('not.be.visible')
        .should('not.have.class','-active');
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click()
    });
  });

  describe('Third level dropdown item should recover the active state when the drawer is closed and opened again', () => {
    it('Third level dropdown item should recover the active state', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger')
        .click();
      cy.get('#second-level-1')
        .find('.chi-mobile-nav__list li:nth-child(3)')
        .should('have.class','-active')
        .should('have.class','-expanded')
        .find(drawerDropDownItem)
        .contains('Sub tab A')
        .should('be.visible')
        .should('have.class','-active')
        cy.get('#second-level-1')
        .find('.chi-mobile-nav__list li:nth-child(2)')
        .contains('Title B')
        .click() 
      cy.get('#second-level-1')
        .find('.chi-button.-back')
        .click()
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click()
        cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger')
        .click();
      cy.get('#second-level-1')
        .find('.chi-mobile-nav__list li:nth-child(3)')
        .should('have.class','-active')
        .should('have.class','-expanded')
        .find(drawerDropDownItem)
        .contains('Sub tab A')
        .should('be.visible')
        .should('have.class','-active')
      cy.get('#second-level-1')
        .find('.chi-button.-back')
        .click()
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click()
    });
  });

  describe('Clicking on single level menu item should close the drawer', () => {
    it('Clicking on Tab link should close the drawer', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-tabs li')
        .contains('Tab link')
        .click()
      cy.get('.chi-backdrop')
        .should('have.class','-closed')
    });
  });

  describe('check that click on "X" in menu drawer closes drawer', () => {
    it('check  drawer closes on click of "X"', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click()
        .parents('.chi-drawer')
        .should('not.have.class', '-active');
    });
  });

  describe('Opening the second level navigation', () => {
    it('click on the chi-drawer__subitem-list-trigger link to second level drawer', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger')
        .click();
      cy.get('#second-level-1')
        .should('have.class', '-active')
        .should('be.visible');
    });
  });

  describe('Click on 2nd level menus should open 3rd level drop-downs', () => {
    it(`check opening of 3rd level drop-downs`, () => {
      cy.get('#second-level-1')
        .find('.chi-mobile-nav__list li')
        .contains('Title A')
        .as('secondLevelElement');
      cy.get('@secondLevelElement')
        .click()
      cy.get(drawerDropDownItem)
        .contains('Sub tab A')
        .should('be.visible')
        .parents('li')
        .should('have.class', '-expanded') 
       
    });
    it(`click on  3rd level drop-downs items should close the drawer`, () => {
      cy.get(drawerDropDownItem)
        .contains('Sub tab A')
        .click()
        .parents('.chi-drawer')
        .should('not.have.class', '-active');
    });
  });

  describe('Back button functionality ', () => {
    it('check that click on back button closes second level drawer ', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger')
        .click();
      cy.get('#second-level-1')
        .find('.chi-button.-back')
        .click()
      cy.get('#second-level-1') 
        .should('not.have.class', '-active');
    });
  }); 

  describe('check that click on "X" in second level drawer closes drawer', () => {
    it('check  second level drawer closes on "X"', () => {
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger')
        .click();
      cy.get('#second-level-1')
        .find('.-close')
        .click()
        .parents('.chi-drawer')
        .should('not.have.class', '-active');
    });
  });
   
  describe('backdrop should be present,onclick on backdrop  closes drawer', () => {
    it('backdrop should be present,onclick on backdrop  closes drawer', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-backdrop')
        .should('be.visible')
        .should('not.have.class','-closed')
        .click()
        .should('have.class','-closed');
      cy.get('.chi-drawer').should('not.have.class', '-active');
    });
  });
})
