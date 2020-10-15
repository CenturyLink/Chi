describe('chi-drawer', function() {
  before(() => {
    cy.visit('/tests/js/chi-drawer.html');
  });

  describe('check that click on "X" in left menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-trigger-1')
        .click()
        .get('#drawer-1')
        .should('have.class', '-active')
        .should('have.class', '-left')
        .should('be.visible')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible')
        .get('#drawer-1')
        .should('not.have.class', '-active')
      ;
    });
  });

  describe('check that click on "X" in right menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-trigger-5').click()
        .get('#drawer-5')
        .should('have.class', '-animated')
        .should('have.class', '-right')
        .should('be.visible')
        .find('.-close')
        .click()
        .parent('.chi-drawer')       
        .should('not.be.visible')
      ;
    });
  });


  describe('check that click on "X" in top menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-trigger-7').click()
        .get('#drawer-7')
        .should('have.class', '-top')
        .should('be.visible')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible')
      ;
    });
  });

  describe('check that click on "X" in bottom menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-trigger-9').click()
        .get('#drawer-9')
        .should('have.class', '-bottom')
        .should('be.visible')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible')
      ;
    });
  });

  describe('check that click on "X" in drawer with backdrop, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-trigger-11').click() 
        .get('#drawer-11')
        .parents('div')
        .should('have.class', 'chi-backdrop')
        .get('#drawer-11')
        .should('have.class', '-bottom')
        .should('be.visible')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible')
      ;
    });
  });

  describe('check that click on "X" in titled menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-trigger-13').click()
        .get('#drawer-13')
        .find('.chi-drawer__header')
        .should('be.visible')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible')
      ;
    });
  });
 
  describe('check that click on "X" in left menu portal drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-trigger-23').click() 
        .get('#drawer-23')
        .parents('div')
        .should('have.class', 'chi-backdrop') 
        .get('#drawer-23')
        .should('have.class', '-portal')
        .should('be.visible')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible')
      ;
    });
  });
});
