describe('Chi Tabs', function() {
  before(() => {
    cy.visit('tests/js/tabs.html');
  });

  describe('Animated tab contains sliding border', () => {
    it('Animated tab contains sliding border', () => {
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
  
    it('Clicking horizontal tab 3 shows corresponding content 3  and active class is present', () => {
      cy.get('#example-horizontal-base li:nth-child(3)')
        .click();

      cy.get('#horizontal-base-3')
        .contains('Tab 3 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
    
    it('Clicking horizontal tab 1 shows corresponding content 1 and active class is present', () => {
      cy.get('#example-horizontal-base li:nth-child(1)')
        .click();

      cy.get('#horizontal-base-1')
        .contains('Tab 1 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  });

  describe('Non animated tab does not contain sliding border', () => {
    it('Non animated tab does not contain sliding border', () => {
      cy.get('#example-vertical-base li:nth-child(4)')
        .should('not.exist');
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
    
    it('Clicking vertical tab 3 shows corresponding content 3 and active class is present', () => {
      cy.get('#example-vertical-base li:nth-child(3)')
        .click();

      cy.get('#vertical-base-3')
        .contains('Tab 3 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  
    it('Clicking vertical tab 1 shows corresponding content 1 and active class is present', () => {
      cy.get('#example-vertical-base li:nth-child(1)')
        .click();

      cy.get('#vertical-base-1')
        .contains('Tab 1 content')
        .should('be.visible')
        .should('have.class', '-active');
    });
  });

  describe('Test keyboard navigation', () => {
    it('Horizontal tabs - ArrowRight and ArrowLeft', () => {
      cy.get('#example-horizontal-base li:nth-child(1) a')
        .focus()
        .type('{rightarrow}');

      cy.get('#horizontal-base-2')
        .contains('Tab 2 content')
        .should('be.visible')
        .should('have.class', '-active');

      cy.get('#example-horizontal-base li:nth-child(2) a')
        .focus()
        .type('{rightarrow}');

      cy.get('#horizontal-base-3')
        .contains('Tab 3 content')
        .should('be.visible')
        .should('have.class', '-active');

      cy.get('#example-horizontal-base li:nth-child(3) a')
        .focus()
        .type('{leftarrow}');

      cy.get('#horizontal-base-2')
        .contains('Tab 2 content')
        .should('be.visible')
        .should('have.class', '-active');

      cy.get('#example-horizontal-base li:nth-child(2) a')
        .focus()
        .type('{leftarrow}');

      cy.get('#horizontal-base-1')
        .contains('Tab 1 content')
        .should('be.visible')
        .should('have.class', '-active');
    });

    it('Vertical tabs - ArrowDown and ArrowUp', () => {
      cy.get('#example-vertical-base li:nth-child(1) a')
        .focus()
        .type('{downarrow}');

      cy.get('#vertical-base-2')
        .contains('Tab 2 content')
        .should('be.visible')
        .should('have.class', '-active');

      cy.get('#example-vertical-base li:nth-child(2) a')
        .focus()
        .type('{downarrow}');

      cy.get('#vertical-base-3')
        .contains('Tab 3 content')
        .should('be.visible')
        .should('have.class', '-active');

      cy.get('#example-vertical-base li:nth-child(3) a')
        .focus()
        .type('{uparrow}');

      cy.get('#vertical-base-2')
        .contains('Tab 2 content')
        .should('be.visible')
        .should('have.class', '-active');

      cy.get('#example-vertical-base li:nth-child(2) a')
        .focus()
        .type('{uparrow}');

      cy.get('#vertical-base-1')
        .contains('Tab 1 content')
        .should('be.visible')
        .should('have.class', '-active');
    })
  });

  describe('Test dispose method', () => {
    it('Chick on dispose button and check if tabs still working', () => {
      cy.get('#dispose-tabs-button')
        .click();
      cy.get('#example-vertical-base li:nth-child(2)')
        .click();
      cy.get('#vertical-base-2')
        .contains('Tab 2 content')
        .should('not.be.visible')
        .should('not.have.class', '-active');
    });
  });
});

