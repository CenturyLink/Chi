describe('chi-drawer', function() {
  before(() => {
    cy.visit('http://localhost:8002/tests/js/chi-drawer.html');
  });

  describe('open left drawer on click', () => {
    it('click drawer', () => {
      cy.get('#drawer-trigger-1').click()
      ;
    });
  });

  describe('check that click on "X" in left menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-1')
        .should('have.class', '-active')
        .should('have.class', '-left')
        .should('be.visible')
        .find('.-close')
        .click()
        .should('not.be.visible')
        .parent('.chi-drawer')
        .should('not.have.class', '-active')
      ;
    });
  });

  describe('open right drawer on click', () => {
    it('click drawer', () => {
      cy.get('#drawer-trigger-5').click()
      ;
    });
  });

  describe('check that click on "X" in right menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-5')
        .should('have.class', '-active')
        .should('have.class', '-right')
        .should('be.visible')
        .find('.-close')
        .click()
        .should('not.be.visible')
        .parent('.chi-drawer')
        .should('not.have.class', '-active')
      ;
    });
  });

  describe('open top drawer on click', () => {
    it('click drawer', () => {
      cy.get('#drawer-trigger-7').click()
      ;
    });
  });

  describe('check that click on "X" in top menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
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
    });
  });


  describe('open bottom drawer on click', () => {
    it('click drawer', () => {
      cy.get('#drawer-trigger-9').click()
      ;
    });
  });

  describe('check that click on "X" in bottom menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-9')
        .should('have.class', '-active')
        .should('have.class', '-bottom')
        .should('be.visible')
        .find('.-close')
        .click()
        .should('not.be.visible')
        .parent('.chi-drawer')
        .should('not.have.class', '-active')
      ;
    });
  });

  describe('open drawer with backdrop on click', () => {
    it('click drawer', () => {
      cy.get('#drawer-trigger-11').click()
      ;
    });
  });


  describe('check that click on "X" in drawer with backdrop, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-11')
        .parents('div')
        .should('have.class', 'chi-backdrop')
      ;
  
      cy.get('#drawer-11')
        .should('have.class', '-active')
        .should('have.class', '-bottom')
        .should('be.visible')
        .find('.-close')
        .click()
        .should('not.be.visible')
        .parent('.chi-drawer')
        .should('not.have.class', '-active')
      ;
    });
  });


  describe('open titled drawer on click', () => {
    it('click drawer', () => {
      cy.get('#drawer-trigger-13').click()
      ;
    });
  });


  describe('check that click on "X" in titled menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-13')
        .should('have.class', '-active')
        .should('have.class', '-left')
        .should('be.visible')
        .find('.-close')
        .click()
        .should('not.be.visible')
        .parent('.chi-drawer')
        .should('not.have.class', '-active')
      ;
    });
  });
 
  describe('open portal drawer on click', () => {
    it('click drawer', () => {
      cy.get('#drawer-trigger-23').click()
      ;
    });
  });

  describe('check that click on "X" in left menu drawer, closes drawer', () => {
    it('drawer closes on clicking X', () => {
      cy.get('#drawer-23')
        .parents('div')
        .should('have.class', 'chi-backdrop')
      ;
  
      cy.get('#drawer-23')
        .should('have.class', '-active')
        .should('have.class', '-bottom')
        .should('have.class', '-portal')
        .should('be.visible')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.have.class', '-active')
      ;
    });
  });
});
