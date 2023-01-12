/// <reference types="Cypress" />

describe('Expansion panel', function() {

    before(function() {

        cy.visit('tests/custom-elements/expansion-panel.html');
    });

    it('Expansion panel custom element should initiate a Chi expansion-panel component. ', function() {

        cy.get('[data-cy="test-done"]')
            .should('have.class', 'hydrated')
            .children()
            .first()
            .should('have.class', 'chi-epanel');
    });

    it('Expansion panel custom element should include custom content when in "done" mode. ', function() {

        cy.get('[data-cy="test-done"]')
            .find('.-done--only')
            .children()
            .should(($elements)=> {
                expect($elements.first()).to.match('div').to.have.attr('slot', 'done');
            });
    });

    it('Expansion panel custom element should include custom content with a footer when in "active" mode. ', function() {

        cy.get('[data-cy="test-active"]')
            .find('.-active--only')
            .find('.chi-epanel__body')
            .children()
            .should(($elements)=> {
                expect($elements.first().children().first()).to.match('div').to.have.attr('slot', 'active');
                expect($elements.last().children().first()).to.match('div').to.have.attr('slot', 'footer');
            });
    });

    it('Expansion panel custom element could include custom content in done or active modes. ', function() {

        cy.get('[data-cy="test-done"]')
            .find('.chi-epanel__action')
            .children()
            .should(($elements)=> {
                expect($elements.first()).to.match('div').to.have.attr('slot', 'change');
            });
    });

    it('Expansion panel should render with a title. ', function() {
      cy.get('[data-cy*="test-"]')
        .each(($testCase) => {
          const ePanelTitle = $testCase[0].title;

          cy.get($testCase)
            .within(() => {
              cy.get('.chi-epanel__title')
                .contains(ePanelTitle);
            });
      });
    });
});
