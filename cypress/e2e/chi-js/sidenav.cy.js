const ACTIVE_CLASS = '-active';
const CLOSE_CLASS = '-close';
const EXPANDED_CLASS = '-expanded';
const ACCORDION_CLASSES = {
  ITEM: 'chi-accordion__item',
  CONTENT: 'chi-accordion__content'
};
const SIDENAV_LIST_CLASS = 'chi-sidenav__list';
const drawerLiTitleSelector =
  ' .chi-sidenav__drawer-list li div.chi-sidenav__title';
const drawerDropDownTitle = '.chi-sidenav__drawer-item-list ul.chi-tabs li a';
const drawerLiMainMenuTitleSelector =
  ' .chi-sidenav__drawer-list li span.chi-sidenav__title';

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Legacy Sidenav', () => {
  before (() => {
    cy.visit ('tests/js/sidenav.html');
  });

  beforeEach (() => {
    cy.get ('[data-cy="sidenav-legacy"]').as ('legacySidenavSelector');
  });

  describe ('check that click on 1st level opens 2nd-level menu drawer', () => {
    [/^Active Item$/, /^Menu Item$/].forEach (menuText => {
      it (`check "${menuText}" opens 2nd-level menu drawer`, () => {
        cy.get ('@legacySidenavSelector').within (() => {
          cy.get ('.chi-sidenav__list li')
            .contains (menuText)
            .as ('firstLevelElement');
          cy.get ('@firstLevelElement')
            .should ('have.attr', 'href')
            .then (href => {
              cy.get ('' + href).as ('drawer');
              cy.get ('@firstLevelElement')
                .click ()
                .wait (550);
              cy.get (`${href}.-active`).should ('be.visible');
            });
        });
      });
    });
  });

  describe ('check that click on "X" in menu drawer closes drawer', () => {
    [/^Active Item$/, /^Menu Item$/].forEach (menuText => {
      it (`check "${menuText}" drawer closes on "X"`, () => {
        cy.get ('@legacySidenavSelector').within (() => {
          cy.get ('.chi-sidenav__list li')
            .contains (menuText)
            .as ('firstLevelElement');

          cy.get ('@firstLevelElement')
            .should ('have.attr', 'href')
            .then (href => {
              cy.get ('' + href).as ('drawer');
              cy.get ('@firstLevelElement')
                .click ()
                .wait (550);
              cy.get (`${href}.-active`)
                .should ('be.visible')
                .within (() => {
                  cy.get ('.-icon.-close')
                    .click ()
                    .parents ('.chi-drawer')
                    .should ('not.have.class', '-active');
                });
            });
        });
      });
    });
  });

  describe ('check that click on 1st level opens the drawer and click on empty space in menu container closes it', () => {
    [/^Active Item$/, /^Menu Item$/].forEach (menuText => {
      it (`check "${menuText}" clicked outside drawer closes it`, () => {
        cy.get ('@legacySidenavSelector').within (() => {
          cy.get ('.chi-sidenav__list li')
            .contains (menuText)
            .as ('firstLevelElement');

          cy.get ('@firstLevelElement')
            .should ('have.attr', 'href')
            .then (href => {
              cy.get ('' + href).as ('drawer');
              cy.get ('@firstLevelElement')
                .click ()
                .wait (550);
              cy.get (`${href}.-active`).should ('be.visible');
              cy.get ('.chi-sidenav__content')
                .first ()
                .click ()
                .wait (250);
              cy.get ('' + href)
                .should ('not.have.class', '-active')
                .should ('not.be.visible');
            });
        });
      });
    });
  });

  describe ('Click on 2nd level menus should open 3rd level drop-downs', () => {
    [/^Active Item$/, /^Menu Item$/].forEach (menuText => {
      var dropdownItems = [];
      if (menuText == '/^Active Item$/') {
        dropdownItems = ['Title A', 'Title B'];
      } else {
        dropdownItems = ['Title E', 'Title F'];
      }
      dropdownItems.forEach (element => {
        it (`check "${menuText}" >   "${element}" should open Dropdown`, () => {
          cy.get ('@legacySidenavSelector').within (() => {
            cy.get ('.chi-sidenav__list li')
              .contains (menuText)
              .as ('firstLevelElement');
            cy.get ('@firstLevelElement')
              .should ('have.attr', 'href')
              .then (href => {
                cy.get ('' + href).as ('drawer');
                cy.get ('@firstLevelElement')
                  .click ()
                  .wait (550);
                cy.get (`${href}.-active`).should ('be.visible');
                cy.get (href + drawerLiTitleSelector)
                  .contains (element)
                  .click ()
                  .parents ('li')
                  .should ('have.class', '-expanded')
                  .find (drawerDropDownTitle)
                  .contains (/^Sub tab A$/)
                  .should ('be.visible');
              });
          });
        });
      });
    });
  });

  describe ('Click on the 3rd level dropdown should close the existing opened dropdown and should expand current one', () => {
    [/^Active Item$/, /^Menu Item$/].forEach (menuText => {
      var dropdownItems = [];
      if (menuText == '/^Active Item$/') {
        dropdownItems = ['Title A', 'Title B'];
      } else {
        dropdownItems = ['Title E', 'Title F'];
      }
      dropdownItems.forEach (element => {
        it (`check "${menuText}" >   "${element}" should open Dropdown`, () => {
          cy.get ('@legacySidenavSelector').within (() => {
            cy.get ('.chi-sidenav__list li')
              .contains (menuText)
              .as ('firstLevelElement');
            cy.get ('@firstLevelElement')
              .should ('have.attr', 'href')
              .then (href => {
                cy.get ('' + href).as ('drawer');
                cy.get ('@firstLevelElement')
                  .click ()
                  .wait (550);
                cy.get (`${href}.-active`).should ('be.visible');
                cy.get (href + drawerLiTitleSelector)
                  .contains (element)
                  .click ()
                  .parents ('li')
                  .should ('have.class', '-expanded')
                  .find (drawerDropDownTitle)
                  .contains (/^Sub tab A$/)
                  .should ('be.visible');
                cy.get (href + ' ul.chi-sidenav__drawer-list')
                  .children ('.-expanded')
                  .should ('have.length', 1);
              });
          });
        });
      });
    });
  });

  describe ('Check that menu items remain active for currently open site, while browsing through navigation', () => {
    it (
      'Scenario:\n' +
      '- open website at "/", and give menu 2000ms time to load\n' +
      '- click "ActiveItems" > "Title C"\n' +
      '- verify that "ActiveItems" > "Title C" is visible"\n' +
      '- verify that "ActiveItems" > "Title C" has classes "-active" "' +
      '-verify that when clicking on Title C Drawer should close and ActiveItems has -active class',
      () => {
        let menuText = /^Active Item$/;
        cy.get ('@legacySidenavSelector').within (() => {
          cy.get ('.chi-sidenav__list li')
            .contains (menuText)
            .as ('firstLevelElement');
          cy.get ('@firstLevelElement')
            .should ('have.attr', 'href')
            .then (href => {
              cy.get ('' + href).as ('drawer');
              cy.get ('@firstLevelElement')
                .click ({ force: true })
                .wait (550);
              cy.get (href + drawerLiMainMenuTitleSelector)
                .contains (/^Title C$/)
                .as ('secondLevelElement')
                .click ()
                .parents ('li')
                .should ('have.class', '-active');
              cy.get ('' + href)
                .should ('not.have.class', '-active')
                .should ('not.be.visible');
              cy.get ('@firstLevelElement')
                .parents ('li')
                .should ('have.class', '-active');
            });
        });
      }
    );
  });
});

describe('Accordion Sidenav', () => {
  before(() => {
    cy.visit('tests/js/sidenav.html');
  });

  beforeEach(() => {
    cy.get('[data-cy="sidenav-accordion"]')
      .find(`.${SIDENAV_LIST_CLASS}`)
      .children()
      .as('list');
    cy.get('@list')
      .first()
      .find('a')
      .as('firstLevelFirstItem');
    cy.get('@list')
      .eq(1)
      .find('a')
      .as('firstLevelSecondItem');
  });

  it('check that click on 1st level opens 2nd-level menu drawer', () => {
    cy.get('@list').each(menuItem => {
      cy.get(menuItem)
        .find('a')
        .as('firstLevelItem')
        .should('have.attr', 'href');
      cy.get('@firstLevelItem').should('not.have.class', ACTIVE_CLASS);
      cy.get('@firstLevelItem')
        .invoke('attr', 'href')
        .then(drawerSelector => {
          cy.get('@firstLevelItem')
            .click()
            .then(() => {
              hasClassAssertion('@firstLevelItem', ACTIVE_CLASS);
              hasClassAssertion(drawerSelector, ACTIVE_CLASS);
              cy.get(drawerSelector).should('be.visible');
            });
        });
    });
  });

  it('check that click on "X" in menu drawer closes drawer', () => {
    cy.get('@list').each(menuItem => {
      cy.get(menuItem)
        .find('a')
        .as('firstLevelItem')
        .invoke('attr', 'href')
        .then(drawerSelector => {
          cy.get('@firstLevelItem')
            .click()
            .then(() => {
              hasClassAssertion(drawerSelector, ACTIVE_CLASS);
              cy.get(drawerSelector).should('be.visible');
            });
          cy.get(drawerSelector)
            .find(`.${CLOSE_CLASS}`)
            .click()
            .then(() => {
              cy.get(drawerSelector).should('not.have.class', ACTIVE_CLASS);
              cy.get(drawerSelector).should('not.be.visible');
            });
        });
    });
  });

  it('check that click outside an opened drawer closes it', () => {
    cy.get('@list').each(menuItem => {
      cy.get(menuItem)
        .find('a')
        .as('firstLevelItem')
        .invoke('attr', 'href')
        .then(drawerSelector => {
          cy.get('@firstLevelItem')
            .click()
            .then(() => {
              hasClassAssertion(drawerSelector, ACTIVE_CLASS);
              cy.get(drawerSelector).should('be.visible');
            });
          cy.get('h3')
            .last()
            .click()
            .then(() => {
              cy.get(drawerSelector).should('not.have.class', ACTIVE_CLASS);
              cy.get(drawerSelector).should('not.be.visible');
            });
        });
    });
  });

  it('Should show 3rd level accordions by default on 1st level menu click for the first menu item', () => {
    cy.get('@firstLevelFirstItem')
      .invoke('attr', 'href')
      .then(drawerSelector => {
        cy.get('@firstLevelFirstItem').click();
        cy.get(drawerSelector)
          .find(`.${ACCORDION_CLASSES.ITEM}.${ACTIVE_CLASS}`)
          .should('have.length', 2);
        cy.get(drawerSelector)
          .find(`.${ACCORDION_CLASSES.ITEM}`)
          .first()
          .as('secondLevelItem');
        hasClassAssertion('@secondLevelItem', EXPANDED_CLASS);
      });
  });

  it('Click on 2nd level menus should open 3rd level accordions', () => {
    cy.get('@list').each((menuItem, index) => {
      if (index !== 0) {
        cy.get(menuItem)
          .find('a')
          .as('firstLevelItem')
          .invoke('attr', 'href')
          .then(drawerSelector => {
            cy.get('@firstLevelItem').click();
            cy.get(drawerSelector)
              .find(`.${ACCORDION_CLASSES.ITEM}`)
              .first()
              .as('secondLevelItem')
              .find(`.${ACCORDION_CLASSES.CONTENT}`)
              .first()
              .as('secondLevelItemContent')
              .should('not.be.visible');
            cy.get('@secondLevelItem')
              .click()
              .then(() => {
                hasClassAssertion('@secondLevelItem', EXPANDED_CLASS);
                cy.get('@secondLevelItemContent').should('be.visible');
              });
          });
      }
    });
  });

  it('Click on the 3rd level accordion item should close the existing opened accordion item and should expand current one', () => {
    cy.reload();
    cy.get('@list').each((menuItem, index) => {
      if (index !== 0) {
        cy.get(menuItem)
          .find('a')
          .as('firstLevelItem')
          .invoke('attr', 'href')
          .then(drawerSelector => {
            cy.get('@firstLevelItem').click();
            cy.get(drawerSelector)
              .find(`.${ACCORDION_CLASSES.ITEM}`)
              .first()
              .as('secondLevelItem')
              .click();
            cy.get('@secondLevelItem')
              .contains('Accordion A')
              .parent(`.${ACCORDION_CLASSES.ITEM}`)
              .as('firstThirdLevelItem')
              .click()
              .then(() => {
                hasClassAssertion('@firstThirdLevelItem', EXPANDED_CLASS);
                cy.get('@firstThirdLevelItem')
                  .find(`.${ACCORDION_CLASSES.CONTENT}`)
                  .first()
                  .as('firstThirdLevelItemContent')
                  .should('be.visible');
                cy.get('@secondLevelItem')
                  .contains('Accordion B')
                  .parent(`.${ACCORDION_CLASSES.ITEM}`)
                  .as('lastThirdLevelItem')
                  .click()
                  .then(() => {
                    cy.get('@firstThirdLevelItem').should(
                      'not.have.class',
                      EXPANDED_CLASS
                    );
                    cy.get('@firstThirdLevelItemContent').should(
                      'not.be.visible'
                    );
                    hasClassAssertion('@lastThirdLevelItem', EXPANDED_CLASS);
                    cy.get('@lastThirdLevelItem')
                      .find(`.${ACCORDION_CLASSES.CONTENT}`)
                      .first()
                      .should('be.visible');
                  });
              });
          });
      }
    });
  });

  it('Check that menu items remain active for currently open site, while browsing through navigation', () => {
    cy.reload();
    cy.get('@firstLevelFirstItem')
      .invoke('attr', 'href')
      .then(drawerSelector => {
        cy.get('@firstLevelFirstItem').click();
        cy.get(drawerSelector)
          .contains('Accordion A')
          .parent(`.${ACCORDION_CLASSES.ITEM}`)
          .click()
          .contains('Title 3')
          .as('fourthLevelFirstItem')
          .click();
        hasClassAssertion('@fourthLevelFirstItem', ACTIVE_CLASS);
      });
    cy.get('@firstLevelSecondItem')
      .invoke('attr', 'href')
      .then(drawerSelector => {
        cy.get('@firstLevelSecondItem').click();
        cy.get(drawerSelector)
          .find(`.${ACCORDION_CLASSES.ITEM}`)
          .first()
          .click();
        cy.get('@firstLevelFirstItem').click();
        hasClassAssertion('@fourthLevelFirstItem', ACTIVE_CLASS);
      });
  });

  it('Check that previously active fourth level menu item gets deselected after selecting another fourth level menu item', () => {
    cy.reload();
    cy.get('@firstLevelFirstItem')
      .invoke('attr', 'href')
      .then(drawerSelector => {
        cy.get('@firstLevelFirstItem').click();
        cy.get(drawerSelector)
          .contains('Accordion A')
          .parent(`.${ACCORDION_CLASSES.ITEM}`)
          .as('thirdLevelFirstItem')
          .click()
          .contains('Title 3')
          .as('fourthLevelFirstItem')
          .click();
        hasClassAssertion('@fourthLevelFirstItem', ACTIVE_CLASS);
      });
    cy.get('@firstLevelSecondItem')
      .invoke('attr', 'href')
      .then(drawerSelector => {
        cy.get('@firstLevelSecondItem').click();
        cy.get(drawerSelector)
          .find(`.${ACCORDION_CLASSES.ITEM}`)
          .first()
          .as('secondLevelSecondItem')
          .click();
        cy.get(drawerSelector)
          .contains('Accordion A')
          .parent(`.${ACCORDION_CLASSES.ITEM}`)
          .as('thirdLevelSecondItem')
          .click()
          .contains('Title 3')
          .as('fourthLevelSecondItem')
          .click();
        hasClassAssertion('@secondLevelSecondItem', EXPANDED_CLASS);
        hasClassAssertion('@thirdLevelSecondItem', EXPANDED_CLASS);
        hasClassAssertion('@fourthLevelSecondItem', ACTIVE_CLASS);
        cy.get('@firstLevelFirstItem').click();
        cy.get('@thirdLevelFirstItem').should('not.have.class', EXPANDED_CLASS);
        cy.get('@fourthLevelFirstItem').should('not.have.class', ACTIVE_CLASS);
      });
  });
});

describe('Open on hover Sidenav', () => {
  before (() => {
    cy.visit ('tests/js/sidenav.html');
  });

  beforeEach (() => {
    cy.get ('[data-cy="open-on-hover-sidenav"]').as ('openOnHoverSidenavSelector');
  });

  describe('Test Sidenav open on hover', () => {
    it('Trigger mouseover to open the Drawer', () => {
      [/^Active Item$/, /^Menu Item$/].forEach(menuText => {
        it(`check "${menuText}" opens 2nd-level menu drawer`, () => {
          cy.get('@openOnHoverSidenavSelector').within(() => {
            cy.get('.chi-sidenav__list li')
              .contains(menuText)
              .as('firstLevelElement');
            cy.get('@firstLevelElement')
              .should('have.attr', 'href')
              .then(href => {
                cy.get('' + href).as('drawer');
                cy.get('@firstLevelElement')
                  .trigger('mouseover')
                  .wait(550);
                cy.get(`${href}.-active`).should('be.visible');
              });
          });
        });
      });
    });
  });

  describe('Test Sidenav dispose method', () => {
    it('Click to run dispose method', () => {
      cy.get('#dispose-sidenav-button')
        .click();
    });
    it('Check that sidenav does not open on trigger mouseover', () => {
      [/^Active Item$/, /^Menu Item$/].forEach(menuText => {
        it(`check "${menuText}" opens 2nd-level menu drawer`, () => {
          cy.get('@openOnHoverSidenavSelector').within(() => {
            cy.get('.chi-sidenav__list li')
              .contains(menuText)
              .as('firstLevelElement');
            cy.get('@firstLevelElement')
              .should('have.attr', 'href')
              .then(href => {
                cy.get('' + href).as('drawer');
                cy.get('@firstLevelElement')
                  .trigger('mouseover')
                  .wait(550);
                cy.get(`${href}.-active`).should('not.be.visible');
              });
          });
        });
      });
    });
  });
});
