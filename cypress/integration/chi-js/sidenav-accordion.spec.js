const ACTIVE_CLASS = '-active';
const CLOSE_CLASS = '-close';
const EXPANDED_CLASS = '-expanded';
const ACCORDION_CLASSES = {
  ITEM: 'chi-accordion__item',
  CONTENT: 'chi-accordion__content'
};
const SIDENAV_LIST_CLASS = 'chi-sidenav__list';

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Sidenav', () => {
  before(() => {
    cy.visit('tests/js/sidenav.html');
  });

  beforeEach(() => {
    cy.get('[data-cy="sidenav"]')
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
        .then(href => {
          cy.get('@firstLevelItem')
            .click()
            .then(() => {
              hasClassAssertion('@firstLevelItem', ACTIVE_CLASS);
              hasClassAssertion(href, ACTIVE_CLASS);
              cy.get(href).should('be.visible');
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
        .then(href => {
          cy.get('@firstLevelItem')
            .click()
            .then(() => {
              hasClassAssertion(href, ACTIVE_CLASS);
              cy.get(href).should('be.visible');
            });
          cy.get(href)
            .find(`.${CLOSE_CLASS}`)
            .click()
            .then(() => {
              cy.get(href).should('not.have.class', ACTIVE_CLASS);
              cy.get(href).should('not.be.visible');
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
        .then(href => {
          cy.get('@firstLevelItem')
            .click()
            .then(() => {
              hasClassAssertion(href, ACTIVE_CLASS);
              cy.get(href).should('be.visible');
            });
          cy.get('h3')
            .last()
            .click()
            .then(() => {
              cy.get(href).should('not.have.class', ACTIVE_CLASS);
              cy.get(href).should('not.be.visible');
            });
        });
    });
  });

  it('Should show 3rd level drop-downs by default on 1st level menu click for the first menu item', () => {
    cy.get('@firstLevelFirstItem')
      .invoke('attr', 'href')
      .then(href => {
        cy.get('@firstLevelFirstItem').click();
        cy.get(href)
          .find(`.${ACCORDION_CLASSES.ITEM}.${ACTIVE_CLASS}`)
          .should('have.length', 2);
        cy.get(href)
          .find(`.${ACCORDION_CLASSES.ITEM}`)
          .first()
          .as('secondLevelItem');
        hasClassAssertion('@secondLevelItem', EXPANDED_CLASS);
      });
  });

  it('Click on 2nd level menus should open 3rd level drop-downs', () => {
    cy.get('@list').each((menuItem, index) => {
      if (index !== 0) {
        cy.get(menuItem)
          .find('a')
          .as('firstLevelItem')
          .invoke('attr', 'href')
          .then(href => {
            cy.get('@firstLevelItem').click();
            cy.get(href)
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
          .then(href => {
            cy.get('@firstLevelItem').click();
            cy.get(href)
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
      .then(href => {
        cy.get('@firstLevelFirstItem').click();
        cy.get(href)
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
      .then(href => {
        cy.get('@firstLevelSecondItem').click();
        cy.get(href)
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
      .then(href => {
        cy.get('@firstLevelFirstItem').click();
        cy.get(href)
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
      .then(href => {
        cy.get('@firstLevelSecondItem').click();
        cy.get(href)
          .find(`.${ACCORDION_CLASSES.ITEM}`)
          .first()
          .as('secondLevelSecondItem')
          .click();
        cy.get(href)
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
