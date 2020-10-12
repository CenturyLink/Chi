describe('Chi Tabs', function() {
  before(() => {
    cy.visit('/tests/js/tabs.html');
  });

  describe('horizontal tab contains sliding border', () => {
    it(' horizontal tab contains sliding border', () => {
      cy.get('#example-horizontal-base li:nth-child(4)')
        .should('have.class', 'chi-sliding-border');
    });
  });

  describe('Clicking horizontal tab shows corresponding content', () => {
    it('Clicking horizontal tab 2 shows corresponding content 2 and active class is present', () => {
      cy.get('#example-horizontal-base li:nth-child(2)')
        .click();

      cy.get('#horizontal-base-2')
        .contains('Tab 2 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  });

  describe('Clicking horizontal tab shows corresponding content', () => {
    it('Clicking horizontal tab 3 shows corresponding content 3  and active class is present', () => {
      cy.get('#example-horizontal-base li:nth-child(3)')
        .click();

      cy.get('#horizontal-base-3')
        .contains('Tab 3 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  });

  describe('Clicking horizontal tab shows corresponding content', () => {
    it('Clicking horizontal tab 1 shows corresponding content 1 and active class is present', () => {
      cy.get('#example-horizontal-base li:nth-child(1)')
        .click();

      cy.get('#horizontal-base-1')
        .contains('Tab 1 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  });

  describe('Vertical tab contains sliding border', () => {
    it(' Vertical tab contains sliding border', () => {
      cy.get('#example-vertical-base li:nth-child(4)')
        .should('have.class', 'chi-sliding-border');
    });
  });

  describe('Clicking vertical tab shows corresponding content', () =>{
    it('Clicking vertical tab 2 shows corresponding content 2 and active class is present', () => {
      cy.get('#example-vertical-base li:nth-child(2)')
        .click();
    
      cy.get('#vertical-base-2')
        .contains('Tab 2 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  });

  describe('Clicking vertical tab shows corresponding content', () => {
    it('Clicking vertical tab 3 shows corresponding content 3 and active class is present', () => {
      cy.get('#example-vertical-base li:nth-child(3)')
        .click();

      cy.get('#vertical-base-3')
        .contains('Tab 3 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  });

  describe('Clicking vertical tab shows corresponding content', () => {
    it('Clicking vertical tab 1 shows corresponding content 1 and active class is present', () => {
      cy.get('#example-vertical-base li:nth-child(1)')
        .click();

      cy.get('#vertical-base-1')
        .contains('Tab 1 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  });
});

