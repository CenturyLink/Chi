describe('mobile-nav-menu', function() {
    before(() => {
      cy.visit('http://localhost:8000/tests/js/mobile-nav.html');
    });

    it('Should contain mobile-navigation-interaction-trigger button', () => {
        cy.get('#mobile-navigation-interaction-trigger', { timeout: 30000 })
                      .should('be.visible');

                      cy.get('#mobile-navigation-interaction-trigger').click().            
    });
});