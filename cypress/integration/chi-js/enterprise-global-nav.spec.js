import { SIDENAV_COMPONENT_SELECTOR } from '../../../src/chi/javascript/components/sidenav';

describe('enterprise-nav-menu', function() {
  before(() => {
    cy.visit('http://localhost:8000/tests/js/enterprise-global-nav.html');
  });

  describe('check that click on 1st level opens 2nd-level menu drawer', () => {
    [/^NoChanges$/, /^Changes$/, /^DeepLink$/].forEach((menuText) => {
      it(`check "${menuText}" opens 2nd-level menu drawer`, () => {
        cy.get(SIDENAV_COMPONENT_SELECTOR).within(() => {
          cy.get('.chi-sidenav__list li')
            .contains(menuText)
            .as('firstLevelElement')
          ;

          cy.get('@firstLevelElement')
            .should('have.attr', 'href')
            .then(href => {
              cy.get('' + href)
                .as('drawer')
              ;

              cy.get('@firstLevelElement')
                .click()
                .wait(550)
              ;

              cy.get(`${href}.-active`)
                .should('be.visible')
              ;
            });
        });
      });
    });
  });

  describe('check that click on "X" in menu drawer closes drawer', () => {
    [/^NoChanges$/, /^Changes$/, /^DeepLink$/].forEach((menuText) => {
      it(`check "${menuText}" drawer closes on "X"`, () => {
        cy.get(SIDENAV_COMPONENT_SELECTOR).within(() => {
          cy.get('.chi-sidenav__list li')
            .contains(menuText)
            .as('firstLevelElement')
          ;

          cy.get('@firstLevelElement')
            .should('have.attr', 'href')
            .then(href => {
              cy.get('' + href)
                .as('drawer')
              ;

              cy.get('@firstLevelElement')
                .click()
                .wait(550)
              ;

              cy.get(`${href}.-active`)
                .should('be.visible')
                .within(() => {
                  cy.get('.-icon.-close')
                    .click()
                    .parent('.chi-drawer')
                    .should('not.have.class', '-active')
                  ;
                });
            });
        });
      });
    });
  });

  describe('check that click on 1st level of menu item opens the drawer', () => {
    [/^NoChanges$/, /^Changes$/, /^DeepLink$/].forEach((menuText) => {
      it(`check "${menuText}" clicked opens the drawer`, () => {
        cy.get(SIDENAV_COMPONENT_SELECTOR).within(() => {
          cy.get('.chi-sidenav__list li')
            .contains(menuText)
            .as('firstLevelElement')
          ;

          cy.get('@firstLevelElement')
            .should('have.attr', 'href')
            .then(href => {
              cy.get('' + href)
                .as('drawer')
              ;

              cy.get('@firstLevelElement')
                .click()
                .wait(550)
              ;

              cy.get(`${href}.-active`)
                .should('be.visible')
              ;
            });
        });
      });
    });
  });

  describe('check that click on 1st level opens the drawer and click on empty space in menu container closes it', () => {
    [/^NoChanges$/, /^Changes$/, /^DeepLink$/].forEach((menuText) => {
      it(`check "${menuText}" clicked outside drawer closes it`, () => {
        cy.get(SIDENAV_COMPONENT_SELECTOR).within(() => {
          cy.get('.chi-sidenav__list li')
            .contains(menuText)
            .as('firstLevelElement')
          ;

          cy.get('@firstLevelElement')
            .should('have.attr', 'href')
            .then(href => {
              cy.get('' + href)
                .as('drawer')
              ;

              cy.get('@firstLevelElement')
                .click()
                .wait(550)
              ;

              cy.get(`${href}.-active`)
                .should('be.visible')
              ;

              cy.get('.chi-sidenav__content')
                .click()
                .wait(250)
              ;

              cy.get('' + href)
                .should('not.have.class', '-active')
                .should('not.be.visible')
              ;
            });
        });
      });
    });
  });

  describe('Click on 2nd level menus should open 3rd level drop-downs', () => {
    it('Menu "NoChanges" > "Home" should open dropdown', () => {
      let menuText = /^NoChanges$/;

      cy.get(SIDENAV_COMPONENT_SELECTOR).within(() => {
        cy.get('.chi-sidenav__list li')
          .contains(menuText)
          .as('firstLevelElement')
        ;

        cy.get('@firstLevelElement')
          .should('have.attr', 'href')
          .then(href => {
            cy.get('' + href)
              .as('drawer')
            ;

            cy.get('@firstLevelElement')
              .click()
              .wait(550)
            ;

            cy.get(`${href}.-active`)
              .should('be.visible')
            ;

            cy.get(href + ' .chi-sidenav__drawer-list li span.chi-sidenav__title')
              .contains(/^Home$/)
              .click()
              .parents('li')
              .should('have.class', '-expanded')
              .find('.enterprise-nav-menu-drawer-list a')
              .contains(/^Reports$/)
              .should('be.visible')
            ;
          });
      });
    });

    it('Menu "DeepLink" > "Option" should open dropdown', () => {
      let menuText = /^DeepLink$/;

      cy.get(SIDENAV_COMPONENT_SELECTOR).within(() => {
        cy.get('.chi-sidenav__list li')
          .contains(menuText)
          .as('firstLevelElement')
        ;

        cy.get('@firstLevelElement')
          .should('have.attr', 'href')
          .then(href => {
            cy.get('' + href)
              .as('drawer')
            ;

            cy.get('@firstLevelElement')
              .click()
              .wait(550)
            ;

            cy.get(`${href}.-active`)
              .should('be.visible')
            ;

            cy.get(href + ' .chi-sidenav__drawer-list li span.chi-sidenav__title')
              .contains(/^Option$/)
              .click()
              .parents('li')
              .should('have.class', '-expanded')
              .find('.enterprise-nav-menu-drawer-list a')
              .contains(/^Same Option$/)
              .should('be.visible')
            ;
          });
      });
    });
  });

  describe('Check that menu items remain active for currently open site, while browsing through navigation', () => {
    it('Scenario:\n' +
      '- open website at "/", and give menu 2000ms time to load\n' +
      '- click "NoChanges" > "Locations"\n' +
      '- verify that drawer has closed\n' +
      '- verify that "NoChanges" > "Locations" has class "-active"\n' +
      '- click "NoChanges" > "Home"\n' +
      '- verify that "NoChanges" > "Home" has class "-expanded"\n' +
      '- verify that "NoChanges" > "Home" > "Reports" is visible\n' +
      '- verify that "NoChanges" > "Locations" has classes "-active" and "-unselected"', () => {

      let menuText = /^NoChanges$/;

      cy.get(SIDENAV_COMPONENT_SELECTOR).within(() => {
        cy.get('.chi-sidenav__list li')
          .contains(menuText)
          .as('firstLevelElement')
        ;

        cy.get('@firstLevelElement')
          .should('have.attr', 'href')
          .then(href => {
            cy.get('' + href)
              .as('drawer')
            ;

            cy.get('@firstLevelElement')
              .click({force: true})
              .wait(550)
            ;

            // 2nd level
            cy.get(href + ' .chi-sidenav__drawer-list li span.chi-sidenav__title')
              .contains(/^Locations$/)
              .as('secondLevelLocation')
              .click({force: true})
            ;

            cy.get('' + href)
              .should('not.have.class', '-active')
              .should('not.be.visible')
            ;

            cy.get('@firstLevelElement')
              .parent()
              .should('have.class', '-active')
              .click()
              .wait(550)
            ;

            cy.get('@secondLevelLocation')
              .parents('li')
              .should('have.class', '-active')
            ;

            cy.get(href + ' .chi-sidenav__drawer-list li span.chi-sidenav__title')
              .contains(/^Home$/)
              .as('secondLevelHome')
              .click()

              .parents('li')
              .should('have.class', '-expanded')

              .find('.enterprise-nav-menu-drawer-list a')
              .contains(/^Reports$/)
              .should('be.visible')
            ;

            cy.get('@secondLevelLocation')
              .parents('li')
              .should('have.class', '-active')
              .should('have.class', '-unselected')
            ;
          });
      });
    });
  });

  describe('Check that Menu recovers active state of second and third level items', () => {
    it('Should recover active state when toggling between different lists on 2nd level', () => {
      let menuText = /^NoChanges$/;

      cy.get(SIDENAV_COMPONENT_SELECTOR)
        .click(500, 0);

      cy.get('.chi-sidenav__list li')
        .contains(menuText)
        .as('firstLevelElement')
      ;

      cy.get('@firstLevelElement')
        .should('have.attr', 'href')
        .then(href => {
          cy.get('' + href)
            .as('drawer')
          ;

          cy.get('@firstLevelElement')
            .click()
            .wait(550)
          ;
        });

      cy.get('@drawer')
        .contains('Home')
        .as('secondLevelElement')
        .click()
        .parents('li')
        .should('have.class', '-expanded')
        .find('.chi-sidenav__drawer-item-list ul li a span')
        .contains('Reports')
        .click()
        .parents('a')
        .should('have.class', '-active')
      ;

      cy.get('.chi-sidenav__list li')
        .contains('DeepLink')
        .as('switchElement')
      ;

      cy.get('@switchElement')
        .should('have.attr', 'href')
        .then(href => {
          cy.get('' + href)
            .as('drawer2')
          ;

          cy.get('@switchElement')
            .click()
            .wait(550)
          ;
        });

      cy.get('@drawer2')
        .contains('Option')
        .click()
        .parents('li')
        .should('have.class', '-expanded')
      ;

      cy.get('@firstLevelElement')
        .click()
      ;

      cy.get('@drawer')
        .find('ul.chi-sidenav__drawer-list li a span')
        .contains('Home')
        .parents('a')
        .parents('li')
        .should('have.class', '-active')
        .should('have.class', '-expanded')
      ;
    });
  });
});
