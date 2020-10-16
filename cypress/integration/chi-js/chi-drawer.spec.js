describe('chi-drawer', function() {
  before(() => {
    cy.visit('/tests/js/chi-drawer.html');
  });

  describe('Test open & close behavior of Left positioned Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-1').click();
      cy.get('#drawer-1')
        .should('have.class', '-active')
        .should('have.class', '-left')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer and check for other functionalities', () => {
      cy.get('#drawer-1')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible')
        .get('#drawer-1')
        .should('not.have.class', '-active');
    });
  });

  describe('Test open & close behavior of Right positioned Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-5').click();
      cy.get('#drawer-5')
        .should('have.class', '-animated')
        .should('have.class', '-right')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer and check for other functionalities', () => {
      cy.get('#drawer-5')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Top positioned Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-7').click();
      cy.get('#drawer-7')
        .should('have.class', '-top')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer and check for other functionalities', () => {
      cy.get('#drawer-7')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Bottom positioned Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-9').click();
      cy.get('#drawer-9')
        .should('have.class', '-bottom')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer and check for other functionalities', () => {
      cy.get('#drawer-9')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Drawer with Backdrop', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-11').click();
      cy.get('#drawer-11')
        .parents('div')
        .should('have.class', 'chi-backdrop')
        .get('#drawer-11')
        .should('have.class', '-bottom')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer and check for other functionalities', () => {
      cy.get('#drawer-11')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Drawer with Title', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-13').click();
      cy.get('#drawer-13')
        .find('.chi-drawer__header')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer and check for other functionalities', () => {
      cy.get('#drawer-13')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Portal Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-23').click();
      cy.get('#drawer-23')
        .parents('div')
        .should('have.class', 'chi-backdrop')
        .get('#drawer-23')
        .should('have.class', '-portal')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer and check for other functionalities', () => {
      cy.get('#drawer-23')
        .find('.-close')
        .click()
        .parent('.chi-drawer')
        .should('not.be.visible');
    });
  });
});
