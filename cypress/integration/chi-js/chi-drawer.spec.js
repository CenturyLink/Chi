describe('chi-drawer', function() {
  before(() => {
    cy.visit('http://localhost:8002/tests/js/chi-drawer.html');
  });
  it('The char works properly', () => {
    cy.get('#drawer-trigger-1').click();

    cy.get('#drawer-1')
      .should('have.class', '-active')
      .should('have.class', '-left')
      .should('be.visible')
      .find('.-close')
      .click()
      .should('not.be.visible')
      .parent('.chi-drawer')
      .should('not.have.class', '-active');

    cy.get('#drawer-trigger-5').click();

    cy.get('#drawer-5')
      .should('have.class', '-active')
      .should('have.class', '-right')
      .should('be.visible')
      .find('.-close')
      .click()
      .should('not.be.visible')
      .parent('.chi-drawer')
      .should('not.have.class', '-active');

    cy.get('#drawer-trigger-7').click();

    cy.get('#drawer-7')
      .should('have.class', '-active')
      .should('have.class', '-top')
      .should('be.visible')
      .find('.-close')
      .click()
      .should('not.be.visible')
      .parent('.chi-drawer')
      .should('not.have.class', '-active')
      ;
      

    cy.get('#drawer-trigger-9').click();

    cy.get('#drawer-9')
      .should('have.class', '-active')
      .should('have.class', '-bottom')
      .should('be.visible')
      .find('.-close')
      .click()
      .should('not.be.visible')
      .parent('.chi-drawer')
      .should('not.have.class', '-active');

    cy.get('#drawer-trigger-11').click();

    cy.get('#drawer-11')
      .parents('div')
      .should('have.class', 'chi-backdrop');

    cy.get('#drawer-11')
      .should('have.class', '-active')
      .should('have.class', '-bottom')
      .should('be.visible')
      .find('.-close')
      .click()
      .should('not.be.visible')
      .parent('.chi-drawer')
      .should('not.have.class', '-active');

    cy.get('#drawer-trigger-13').click();

    cy.get('#drawer-13')
      .should('have.class', '-active')
      .should('have.class', '-left')
      .should('be.visible')
      .find('.-close')
      .click()
      .should('not.be.visible')
      .parent('.chi-drawer')
      .should('not.have.class', '-active');

    cy.get('#drawer-trigger-23').click();

    cy.get('#drawer-23')
    .parents('div')
    .should('have.class', 'chi-backdrop');

    cy.get('#drawer-23')
      .should('have.class', '-active')
      .should('have.class', '-bottom')
      .should('have.class', '-portal')
      .should('be.visible')
      .find('.-close')
      .click()
      .parent('.chi-drawer')
      .should('not.have.class', '-active');
  });
});
