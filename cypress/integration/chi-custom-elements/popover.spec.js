/// <reference types="Cypress" />

describe('Popover', function() {

  beforeEach(()=>{
    cy.visit('tests/custom-elements/popover.html');
    cy.fixture('chidata.json').as('chidata');
  });

  it('Base popover custom element should initiate a Chi Popover without arrow. ', function() {
    cy.get('[data-cy="test-base"]')
      .find('chi-popover')
      .should('have.class', 'hydrated')
      .find('.m-popover__arrow')
      .should('not.exist');
  });

  it('Arrow base popover should be properly build ', function() {

    this.chidata.positions.forEach((position) => {
      const getValue = `[data-cy="test-${position}"]`;
      cy.get(getValue)
        .find('chi-popover')
        .scrollIntoView()
        .should('match', `[position="${position}"]`)
        .should('match', `[active]`)
        .should('match', `[arrow]`)
        .should('match', `[aria-hidden="false"]`)
        .should('have.class', 'hydrated')
        .children().first()
        .should('match', '.m-popover.-animated.-active')
        .should('have.class', `m-popover--${position}`)
        .should('be.visible')
        .children().last()
        .should('match', 'div.m-popover__arrow');
    });
  });

  it('Arrow Popper.js popover should be properly build ', function() {

    this.chidata.popperPositions.forEach((position) => {
      const getValue = `[data-cy="test-more-${position}"]`;
      cy.get(getValue)
        .find('chi-popover')
        .scrollIntoView()
        .should('match', `[position="${position}"]`)
        .should('match', `[active]`)
        .should('match', `[arrow]`)
        .should('match', `[aria-hidden="false"]`)
        .should('have.class', 'hydrated')
        .children().first()
        .should('match', '.m-popover.-animated.-active')
        .should('have.class', `m-popover--${position}`)
        .should('be.visible')
        .children().last()
        .should('match', 'div.m-popover__arrow');
    });
  });

  it('Hide, show, toggle should work. ', function() {

    this.chidata.popperPositions.forEach((position) => {
      const getValue = `[data-cy="test-more-${position}"] chi-popover`;

      // first hide
      cy.get(getValue)
        .scrollIntoView()
        .should('have.class', 'hydrated')
        .then(function(popover){
          return popover[0].hide();
        })
        .get(getValue)
        .should('match', `[aria-hidden="true"]`)
        .should('not.match', `[active]`)
        .children().first()
        .should('not.match', '.-active')
        .should('not.be.visible')

        // show
        .get(getValue)
        .should('have.class', 'hydrated')
        .then(function(popover){
          return popover[0].show();
        })
        .get(getValue)
        .should('match', `[aria-hidden="false"]`)
        .should('match', `[active]`)
        .children().first()
        .should('match', '.-active')
        .should('be.visible')

        // toggle to hide
        .get(getValue)
        .should('have.class', 'hydrated')
        .then(function(popover){
          return popover[0].toggle();
        })
        .get(getValue)
        .should('match', `[aria-hidden="true"]`)
        .should('not.match', `[active]`)
        .children().first()
        .should('not.match', '.-active')
        .should('not.be.visible')

        // toggle to show again
        .get(getValue)
        .should('have.class', 'hydrated')
        .then(function(popover){
          return popover[0].show();
        })
        .get(getValue)
        .should('match', `[aria-hidden="false"]`)
        .should('match', `[active]`)
        .children().first()
        .should('match', '.-active')
        .should('be.visible')

      ;
    });
  });
});
