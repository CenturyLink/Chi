const drawerLiTitleSelector = ' .chi-sidenav__drawer-list li div.chi-sidenav__title';
const drawerDropDownTitle   = '.chi-sidenav__drawer-item-list ul.chi-tabs li a';
const drawerLiMainMenuTitleSelector = ' .chi-sidenav__drawer-list li span.chi-sidenav__title';
const LEGACY_SIDENAV_SELECTOR = '[data-cy="sidenav-legacy"]';

describe('Sidenav', function() {
  before(() => {
    cy.visit('tests/js/sidenav.html');
  });

  describe('check that click on 1st level opens 2nd-level menu drawer', () => {
    [/^Active Item$/, /^Menu Item$/].forEach(menuText => {
      it(`check "${menuText}" opens 2nd-level menu drawer`, () => {
        cy.get(LEGACY_SIDENAV_SELECTOR).within(() => {
          cy.get('.chi-sidenav__list li')
            .contains(menuText)
            .as('firstLevelElement');
          cy.get('@firstLevelElement')
            .should('have.attr', 'href')
            .then(href => {
              cy.get('' + href).as('drawer');
              cy.get('@firstLevelElement')
                .click()
                .wait(550);
              cy.get(`${href}.-active`).should('be.visible');
            });
        });
      });
    });
  });

  describe('check that click on "X" in menu drawer closes drawer', () => {
    [/^Active Item$/, /^Menu Item$/].forEach(menuText => {
      it(`check "${menuText}" drawer closes on "X"`, () => {
        cy.get(LEGACY_SIDENAV_SELECTOR).within(() => {
          cy.get('.chi-sidenav__list li')
            .contains(menuText)
            .as('firstLevelElement');
            
          cy.get('@firstLevelElement')
            .should('have.attr', 'href')
            .then(href => {
              cy.get('' + href).as('drawer');
              cy.get('@firstLevelElement')
                .click()
                .wait(550);
              cy.get(`${href}.-active`)
                .should('be.visible')
                .within(() => {
                  cy.get('.-icon.-close')
                    .click()
                    .parents('.chi-drawer')
                    .should('not.have.class', '-active');
                });
            });
        });
      });
    });
  });

  describe('check that click on 1st level opens the drawer and click on empty space in menu container closes it', () => {
    [/^Active Item$/, /^Menu Item$/].forEach(menuText => {
      it(`check "${menuText}" clicked outside drawer closes it`, () => {
        cy.get(LEGACY_SIDENAV_SELECTOR).within(() => {
          cy.get('.chi-sidenav__list li')
            .contains(menuText)
            .as('firstLevelElement');

          cy.get('@firstLevelElement')
            .should('have.attr', 'href')
            .then(href => {
              cy.get('' + href).as('drawer');
              cy.get('@firstLevelElement')
                .click()
                .wait(550);
              cy.get(`${href}.-active`).should('be.visible');
              cy.get('.chi-sidenav__content')
                .click()
                .wait(250);
              cy.get('' + href)
                .should('not.have.class', '-active')
                .should('not.be.visible');
            });
        });
      });
    });
  });

  describe('Click on 2nd level menus should open 3rd level drop-downs', () => {
    [/^Active Item$/, /^Menu Item$/].forEach(menuText => {
      var dropdownItems = [];
      if (menuText == '/^Active Item$/') {
        dropdownItems = ['Title A', 'Title B'];
      } else {
        dropdownItems = ['Title E', 'Title F'];
      }
      dropdownItems.forEach(element => {
        it(`check "${menuText}" >   "${element}" should open Dropdown`, () => {
          cy.get(LEGACY_SIDENAV_SELECTOR).within(() => {
            cy.get('.chi-sidenav__list li')
              .contains(menuText)
              .as('firstLevelElement');
            cy.get('@firstLevelElement')
              .should('have.attr', 'href')
              .then(href => {
                cy.get('' + href).as('drawer');
                cy.get('@firstLevelElement')
                  .click()
                  .wait(550);
                cy.get(`${href}.-active`).should('be.visible');
                cy.get(href + drawerLiTitleSelector)
                  .contains(element)
                  .click()
                  .parents('li')
                  .should('have.class', '-expanded')
                  .find(drawerDropDownTitle)
                  .contains(/^Sub tab A$/)
                  .should('be.visible');
              });
          });
        });
      });
    });
  });

  describe('Click on the 3rd level dropdown should close the existing opened dropdown and should expand current one', () => {
    [/^Active Item$/, /^Menu Item$/].forEach(menuText => {
      var dropdownItems = [];
      if (menuText == '/^Active Item$/') {
        dropdownItems = ['Title A', 'Title B'];
      } else {
        dropdownItems = ['Title E', 'Title F'];
      }
      dropdownItems.forEach(element => {
        it(`check "${menuText}" >   "${element}" should open Dropdown`, () => {
          cy.get(LEGACY_SIDENAV_SELECTOR).within(() => {
            cy.get('.chi-sidenav__list li')
              .contains(menuText)
              .as('firstLevelElement');
            cy.get('@firstLevelElement')
              .should('have.attr', 'href')
              .then(href => {
                cy.get('' + href).as('drawer');
                cy.get('@firstLevelElement')
                  .click()
                  .wait(550);
                cy.get(`${href}.-active`).should('be.visible');
                cy.get(href + drawerLiTitleSelector)
                  .contains(element)
                  .click()
                  .parents('li')
                  .should('have.class', '-expanded')
                  .find(drawerDropDownTitle)
                  .contains(/^Sub tab A$/)
                  .should('be.visible');
                cy.get(href + ' ul.chi-sidenav__drawer-list')
                  .children('.-expanded')
                  .should('have.length', 1);
              });
          });
        });
      });
    });
  });

  describe('Check that menu items remain active for currently open site, while browsing through navigation', () => {
    it(
      'Scenario:\n' +
        '- open website at "/", and give menu 2000ms time to load\n' +
        '- click "ActiveItems" > "Title C"\n' +
        '- verify that "ActiveItems" > "Title C" is visible"\n' +
        '- verify that "ActiveItems" > "Title C" has classes "-active" "' +
        '-verify that when clicking on Title C Drawer should close and ActiveItems has -active class',
      () => {
        let menuText = /^Active Item$/;
        cy.get(LEGACY_SIDENAV_SELECTOR).within(() => {
          cy.get('.chi-sidenav__list li')
            .contains(menuText)
            .as('firstLevelElement');
          cy.get('@firstLevelElement')
            .should('have.attr', 'href')
            .then(href => {
              cy.get('' + href).as('drawer');
              cy.get('@firstLevelElement')
                .click({ force: true })
                .wait(550);
              cy.get(href + drawerLiMainMenuTitleSelector)
                .contains(/^Title C$/)
                .as('secondLevelElement')
                .click()
                .parents('li')
                .should('have.class', '-active');
              cy.get('' + href)
                .should('not.have.class', '-active')
                .should('not.be.visible');
              cy.get('@firstLevelElement')
                .parents('li')
                .should('have.class', '-active');
            });
        });
      }
    );
  });
});
