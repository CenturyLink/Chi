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
            .should('have.class', 'm-epanel');
    });

    it('Expansion panel custom element should include custom content and a button when in "done" mode. ', function() {
      
        cy.get('[data-cy="test-done"]')
            .find('.-done--only')
            .children()
            .should(($elements)=> {
                expect($elements.first()).to.match('span').to.have.attr('slot', 'done');
                expect($elements.last()).to.match('button');
            });
    });

    it('Expansion panel custom element should include custom content with a footer when in "active" mode. ', function() {
      
        cy.get('[data-cy="test-active"]')
            .find('.-active--only')
            .find('.m-epanel__body')
            .children()
            .should(($elements)=> {
                expect($elements.first().children().first()).to.match('span').to.have.attr('slot', 'active');
                expect($elements.last().children().first()).to.match('span').to.have.attr('slot', 'footer');
            });
    });

    it('Expansion panel custom element should raise an event when "change" button in "done" mode is pressed. ', function() {

        const spy = cy.spy();

        cy.get('[data-cy="test-done"]')
            .find('button')
            .as('change_button');
      
        cy.get('[data-cy="test-done"]')
            .then((el) => {
            el.on('chiEpChangeClick', spy);
            });

        cy.get('@change_button')
            .click()
            .then(() => {
            expect(spy).to.be.called;
            });
    });
});
