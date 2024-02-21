/// <reference types="Cypress" />

const TAB_SELECTORS = {
  triggers: '.chi-tabs__trigger',
  showMore: '.chi-tabs__show-more',
  dropdownItems: 'chi-dropdown[active] .chi-dropdown__menu-item',
};

describe('Tabs', () => {
  describe('Overflow items', () => {
    beforeEach(() => {
      cy.visit('tests/custom-elements/tabs.html');
      cy.get('[data-cy="base"]').as('base');
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
        .should('have.length', 12);
      cy.get('@base')
        .find(TAB_SELECTORS.showMore)
        .click();

      cy.get('@base')
        .find(TAB_SELECTORS.dropdownItems)
        .should('have.length', 6);
    });

    it('Should resize correctly', function() {
      cy.viewport(768, 768);

      cy.get('@base')
        .find(TAB_SELECTORS.triggers, { timeout: 2000 })
        .should('have.length', 8);
      cy.get('@base')
        .find(TAB_SELECTORS.showMore)
        .click();

      cy.get('@base')
        .find(TAB_SELECTORS.dropdownItems)
        .should('have.length', 10);
    });
  });
});
