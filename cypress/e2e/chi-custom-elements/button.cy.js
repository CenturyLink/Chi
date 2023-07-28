/// <reference types="Cypress" />

describe('Buttons', () => {
  it('Base button should be included inside the custom element', () => {
    cy.visit('tests/custom-elements/buttons.html');

    cy.get('chi-button', { timeout: 5000 })
      .first()
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'button.chi-button');
  });

  it('Colored buttons should have appropriate class', () => {
    cy.get('[data-cy="button-primary-xl"]')
      .first()
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'button.chi-button.-primary')
      .and('not.have.class', 'primary');
  });

  it('Sized buttons should have appropriate class', () => {
    cy.get('[data-cy="button-primary-xl"]')
      .first()
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'button.chi-button.-xl')
      .and('not.have.class', 'xl');
  });

  it('Icon buttons should have appropriate class', () => {
    cy.get('[type="icon"]')
      .first()
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'button.chi-button.-icon')
      .and('not.have.class', 'icon')
      .children()
      .first()
      .should('match', 'div.chi-button__content');
  });

  it('Close button should have appropriate class', () => {
    cy.get('[type="close"]')
      .first()
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('match', 'button.chi-button.-icon.-close')
      .and('not.have.class', 'close');
  });

  it('Click button should trigger appropriate event', () => {
    const spy = cy.spy();

    cy.get('body').then(el => {
      el.on('chiClick', spy);
    });

    cy.get('chi-button')
      .first()
      .click()
      .then(() => {
        expect(spy).to.be.called;
      });
  });
});
