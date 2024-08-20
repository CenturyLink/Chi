/// <reference types="Cypress" />

const TAB_SELECTORS = {
  triggers: '.chi-tabs__trigger',
  showMore: '.chi-tabs__show-more',
  dropdownMenu: '.chi-dropdown__menu',
  dropdownItems: 'chi-dropdown[active] .chi-dropdown__menu-item',
  panel: '.chi-tabs-panel',
};
const VISIBLE_ITEMS_ATTR = 'visible-items';
const CLASSES = {
  ACTIVE: '-active'
};

describe('Tabs', () => {
  describe('Overflow items', () => {
    beforeEach(() => {
      cy.visit('tests/custom-elements/tabs.html');
      cy.get('[data-cy="base"]').as('base');
      cy.get('[data-cy="no-active-tab-base"]').as('noActiveTab');
      cy.get('[data-cy="panel-items-base"]').as('panelItems');
    });

    it('Should not show overflow items if there is enough space', function() {
      cy.viewport(1920, 1080);

      cy.get('@base')
        .find(TAB_SELECTORS.triggers, { timeout: 2000 })
        .should('have.length', 18);

      cy.get('@base')
        .find(TAB_SELECTORS.showMore)
        .should('not.exist');
    });

    it('Should show overflow items if there is not enough space', function() {
      cy.get('@base')
        .find(TAB_SELECTORS.triggers, { timeout: 2000 })
        .should('have.length', 11);
      cy.get('@base')
        .find(TAB_SELECTORS.showMore)
        .click();

      cy.get('@base')
        .find(TAB_SELECTORS.dropdownItems)
        .should('have.length', 7);
    });

    it('Should resize correctly', function() {
      cy.viewport(768, 768);

      cy.get('@base')
        .find(TAB_SELECTORS.triggers, { timeout: 2000 })
        .should('have.length', 7);
      cy.get('@base')
        .find(TAB_SELECTORS.showMore)
        .click();

      cy.get('@base')
        .find(TAB_SELECTORS.dropdownItems)
        .should('have.length', 11);
    });

    it('Should make dropdown scrollable', function() {
      const firstLevelExample = 'tab-e';
      const secondLevelExample = 'tab-e-1';

      // First level
      cy.get('@base')
        .find(`#${firstLevelExample}`)
        .wait(1000)
        .click();

      cy.get('@base')
        .find(`[reference="#${firstLevelExample}"]`).as(firstLevelExample)
        .should('have.attr', VISIBLE_ITEMS_ATTR, 3);

      cy.get(`@${firstLevelExample}`)
        .find(TAB_SELECTORS.dropdownMenu)
        .should('not.have.css', 'height', '0px');

      // Second level
      cy.get('@base')
        .find(`#${secondLevelExample}`)
        .click();

      cy.get('@base')
        .find(`[reference="#${secondLevelExample}"]`).as(secondLevelExample)
        .should('have.attr', VISIBLE_ITEMS_ATTR, 2);

      cy.get(`@${secondLevelExample}`)
        .find(TAB_SELECTORS.dropdownMenu)
        .should('not.have.css', 'height', '0px');
    });

    it('Should be able to have no active tabs', function() {
      cy.get('@noActiveTab')
        .find(TAB_SELECTORS.triggers)
        .should('have.not.class', CLASSES.ACTIVE);
    });

    it('Should be able to have panels items', () => {
      cy.get('@panelItems')
        .find(TAB_SELECTORS.panel)
        .should('have.length', 5);
    });

    it('Should have initial tab active', () => {
      cy.get('@panelItems')
        .find(`${TAB_SELECTORS.panel}.${CLASSES.ACTIVE}`)
        .should('have.id', 'panel-items-example-2');
    });

    it('Should be able to change active panel and emit `chiTabChange` event', () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on('chiTabChange', spy);
      });

      cy.get('@panelItems')
        .find(TAB_SELECTORS.triggers)
        .first()
        .click()
        .then(() => {
          expect(spy).to.be.called;

          cy.get('@panelItems')
            .find(TAB_SELECTORS.triggers)
            .first()
            .should('have.class', CLASSES.ACTIVE);

          cy.get('@panelItems')
            .find(TAB_SELECTORS.panel)
            .first()
            .should('have.class', CLASSES.ACTIVE);
        });
    });
  });
});
