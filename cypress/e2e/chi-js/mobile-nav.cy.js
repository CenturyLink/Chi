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

  /**
   * Dropdown behaviour tests
   */
  describe('Open and close of Drawer Header Dropdown', () => {
    it('click on Drawer Header Dropdown trigger opens the dropdown items', () => {
      cy.get('#button-site-menu2')
        .click();
      cy.get('#dropdown-2-menu')
        .should('be.visible')
        .should('have.class','-active');
    });
    it('click on Drawer Header Dropdown trigger closes the dropdown', () => {
      cy.get('#button-site-menu2')
        .click();
      cy.get('#dropdown-2-menu')
        .should('not.be.visible')
        .should('not.have.class','-active');
    });
  });

  describe('Open and close of secondary dropdown of Drawer', () => {
    it('click on secondary dropdown of Drawer opens the dropdown items', () => {
      cy.get('#button-user-menu2')
        .click();
      cy.get('#dropdown-3-menu')
        .should('be.visible')
        .should('have.class','-active');
    });
    it('click on secondary dropdown of Drawer second time close the dropdown items', () => {
      cy.get('#button-user-menu2')
        .click();
      cy.get('#dropdown-3-menu')
        .should('not.be.visible')
        .should('not.have.class','-active');
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click();
    });
  });

  describe('Check third level dropdown state', () => {
    it('third level dropdown item should recover the active state when the drawer is closed and opened again', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-1"]')
        .click();
      cy.get('#second-level-1')
        .find('.chi-mobile-nav__list li:nth-child(3)')
        .should('have.class','-active')
        .should('have.class','-expanded')
        .find(drawerDropDownItem)
        .contains('Sub tab A')
        .should('be.visible')
        .should('have.class','-active');
      cy.get('#second-level-1')
        .find('.chi-mobile-nav__list li:nth-child(2)')
        .contains('Title B')
        .click();
      cy.get('#second-level-1')
        .find('.chi-button.-back')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click();
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-1"]')
        .click();
      cy.get('#second-level-1')
        .find('.chi-mobile-nav__list li:nth-child(3)')
        .should('have.class','-active')
        .should('have.class','-expanded')
        .find(drawerDropDownItem)
        .contains('Sub tab A')
        .should('be.visible')
        .should('have.class','-active');
      cy.get('#second-level-1')
        .find('.chi-button.-back')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click();
    });
  });

  describe('Clicking on single level menu item should close the drawer', () => {
    it('Clicking on Tab link should close the drawer', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-tabs li')
        .contains('Tab link')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed');
    });
  });

  describe('Check that click on "X" in menu drawer closes drawer', () => {
    it('check drawer closes on click of "X"', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click()
        .parents('.chi-drawer')
        .should('not.have.class', '-active');
    });
  });

  describe('Opening the second level drop-down navigation', () => {
    it('click on the chi-drawer__subitem-list-trigger link to second level drawer', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-1"]')
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
        .should('have.class', '-expanded');
    });
    it(`click on 3rd level drop-downs items should close the drawer`, () => {
      cy.get(drawerDropDownItem)
        .contains('Sub tab A')
        .click()
        .parents('.chi-drawer')
        .should('not.have.class', '-active');
    });
  });
  /**
   * End of Dropdown behaviour tests
   */

  /**
   * Accordion behaviour tests
   */
  describe('Opening the third level accordion navigation', () => {
    it('open third level level accordion item and click on it to close the drawer', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-2"]')
        .click();
      cy.get('#second-level-2')
        .find('.chi-drawer__content')
        .find('> .chi-accordion:nth-child(1)')
        .find('> .chi-accordion__item:nth-child(2)')
        .as('accordionItem')
        .click();
      cy.get('@accordionItem')
        .find('.chi-accordion__trigger')
        .find('> .chi-accordion__title')
        .contains('Item 2.2')
        .click();
      cy.get('#second-level-2')
        .find('.chi-accordion__content')
        .find('.chi-accordion__item')
        .contains('Item 2.2.2')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed');
    });
  });

  describe('Check third level accordion state', () => {
    it('third level accordion item should recover the active state when the drawer is closed and opened again', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-2"]')
        .click();
      cy.get('#second-level-2')
        .find('.chi-drawer__content')
        .find('> .chi-accordion:nth-child(1)')
        .find('> .chi-accordion__item:nth-child(2)')
        .should('have.class','-active')
        .should('have.class','-expanded')
        .as('accordionItem');
      cy.get('@accordionItem')
        .find('.chi-accordion__trigger')
        .find('> .chi-accordion__title')
        .contains('Item 2');
      cy.get('#second-level-2')
        .find('.chi-accordion__content')
        .find('.chi-accordion__item')
        .contains('Item 2.2.2')
        .should('be.visible')
        .should('have.class','-active');
      cy.get('#second-level-2')
        .find('.chi-drawer__content')
        .find('> .chi-accordion:nth-child(1)')
        .find('> .chi-accordion__item:nth-child(1)')
        .contains('Item 1')
        .click();
      cy.get('#second-level-2')
        .find('.chi-button.-back')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.-close')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed');
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-2"]')
        .click();
      cy.get('#second-level-2')
        .find('.chi-drawer__content')
        .find('> .chi-accordion:nth-child(1)')
        .find('> .chi-accordion__item:nth-child(2)')
        .should('have.class','-active')
        .should('have.not.class','-expanded')
        .as('accordionItem');
      cy.get('@accordionItem')
        .find('.chi-accordion__trigger')
        .find('> .chi-accordion__title')
        .contains('Item 2');
      cy.get('#second-level-2')
        .find('.chi-drawer__content')
        .find('> .chi-accordion:nth-child(1)')
        .find('> .chi-accordion__item:nth-child(1)')
        .click();
      cy.get('#second-level-2')
        .find('.chi-accordion__content')
        .find('.chi-accordion__item')
        .contains('Item 1.1.2')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed');
    });
  });

  describe('Click on 2nd level menus should open 3rd level accordion', () => {
    it('chek 3rd level previous state', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-2"]')
        .click();
      cy.get('#second-level-2')
        .find('.chi-drawer__content')
        .find('> .chi-accordion:nth-child(1)')
        .find('> .chi-accordion__item:nth-child(1)')
        .should('have.class','-active')
        .should('have.class','-expanded');
      cy.get('#second-level-2')
        .find('.chi-accordion__content')
        .find('.chi-accordion__item')
        .contains('Item 1.1.2')
        .should('be.visible')
        .should('have.class','-active');
    });
    it('click on 3rd level accordion items should close the drawer', () => {
      cy.get('#second-level-2')
        .find('.chi-drawer__content')
        .find('> .chi-accordion:nth-child(1)')
        .find('> .chi-accordion__item:nth-child(1)')
        .should('have.class','-expanded')
        .as('accordionItem');
      cy.get('@accordionItem')
        .find('.chi-accordion__content')
        .find('.chi-accordion__item')
        .contains('Item 1.1.2')
        .click();
      cy.get('.chi-backdrop')
        .should('have.class','-closed');
    });
  });
  /**
   * End of Accordion behaviour tests
   */

  describe('Back button functionality', () => {
    it('check that click on back button closes second level drawer', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-1"]')
        .click();
      cy.get('#second-level-1')
        .find('.chi-button.-back')
        .click()
      cy.get('#second-level-1') 
        .should('not.have.class', '-active');
    });
  }); 

  describe('Check that click on "X" in second level drawer closes drawer', () => {
    it('check second level drawer closes on "X"', () => {
      cy.get('.chi-mobile-nav__first-level-content')
        .find('.chi-drawer__subitem-list-trigger[href="#second-level-1"]')
        .click();
      cy.get('#second-level-1')
        .find('.-close')
        .click()
        .parents('.chi-drawer')
        .should('not.have.class', '-active');
    });
  });
   
  describe('Check backdrop behaviour', () => {
    it('backdrop should be present, onclick on backdrop closes drawer', () => {
      cy.get('#mobile-navigation-interaction-trigger')
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

  describe('Test dispose method', () => {
    it('click to run dispose method', () => {
      cy.get('#dispose-mobile-nav-button')
        .click();
    });
    it('check that drawer does not open on trigger click', () => {
      cy.get('#mobile-navigation-interaction-trigger')
        .click();
      cy.get('.chi-drawer')
        .should('not.have.class', '-active');
    });
  });
});
