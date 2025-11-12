describe('chi-drawer', function () {
  before(() => {
    cy.visit('tests/lumen/js/drawer.html');
  });

  describe('Test open & close behavior of Left positioned Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-1')
        .click();
      cy.get('#drawer-1')
        .should('have.class', '-active')
        .should('have.css', 'left','0px')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer', () => {
      cy.get('#drawer-1')
        .find('.-close')
        .click()
        .parents('.chi-drawer')
        .should('not.be.visible')
        .should('not.have.class', '-active');
    });
  });

  describe('Test open & close behavior of Right positioned Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-5')
        .click();
      cy.get('#drawer-5')
        .should('have.class', '-animated')
        .should('have.css', 'right','0px')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer and check for other functionalities', () => {
      cy.get('#drawer-5').find('.-close').click().parents('.chi-drawer').should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Top positioned Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-7')
        .click();
      cy.get('#drawer-7')
        .should('have.css', 'top','0px')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer', () => {
      cy.get('#drawer-7').find('.-close').click().parents('.chi-drawer').should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Bottom positioned Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-9')
        .click();
      cy.get('#drawer-9')
        .should('have.css', 'bottom','0px')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer', () => {
      cy.get('#drawer-9').find('.-close').click().parents('.chi-drawer').should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Drawer with Backdrop', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-11').click();
      cy.get('#drawer-11')
        .parents('div')
        .should('have.class', 'chi-backdrop')
        .get('#drawer-11')
        .should('have.css', 'bottom', '0px')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer', () => {
      cy.get('#drawer-11').find('.-close').click().parents('.chi-drawer').should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Drawer with Title', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-13').click();
      cy.get('#drawer-13').find('.chi-drawer__header').should('be.visible');
    });
    it('Click on X button closes the Drawer', () => {
      cy.get('#drawer-13').find('.-close').click().parents('.chi-drawer').should('not.be.visible');
    });
  });

  describe('Test open & close behavior of Portal Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-23')
        .click();
      cy.get('#drawer-23')
        .parents('div')
        .should('have.class', 'chi-backdrop')
        .get('#drawer-23')
        .should('have.class', '-portal')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer', () => {
      cy.get('#drawer-23').find('.-close').click().parents('.chi-drawer').should('not.be.visible');
    });
  });

  describe('Test open with Enter key', () => {
    it('Press Enter key on trigger', () => {
      cy.get('#drawer-trigger-1')
        .focus()
        .type('{Enter}');
      cy.get('#drawer-1')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer', () => {
      cy.get('#drawer-1')
        .find('.-close')
        .click()
        .parents('.chi-drawer')
        .should('not.be.visible')
        .should('not.have.class', '-active');
    });
  });

  describe('Test close on click outside', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-5')
        .click();
      cy.get('#drawer-5')
        .should('have.class', '-animated')
        .should('have.css', 'right','0px')
        .should('be.visible');
    });
    it('Click outside to close the Drawer', () => {
      cy.get('body')
        .click(0,0);
      cy.get('#drawer-5')
        .should('not.be.visible');
    });
  });

  describe('Test Drawer events', () => {
    const ANIMATION_DURATION = 500;

    it('Dispatches show/shown/hide/hidden and deprecated events', () => {
      cy.clock();
      cy.get('#drawer-6').then($drawer => {
        const show = cy.stub();
        const shown = cy.stub();
        const hide = cy.stub();
        const hidden = cy.stub();
        const showDeprecated = cy.stub();
        const hideDeprecated = cy.stub();

        $drawer[0].addEventListener('chiDrawerShow', show);
        $drawer[0].addEventListener('chiDrawerShown', shown);
        $drawer[0].addEventListener('chiDrawerHide', hide);
        $drawer[0].addEventListener('chiDrawerHidden', hidden);
        $drawer[0].addEventListener('chi.drawer.show', showDeprecated);
        $drawer[0].addEventListener('chi.drawer.hide', hideDeprecated);

        // open
        cy.get('#drawer-trigger-6')
          .click();
        cy.tick(ANIMATION_DURATION + 50);
        cy.wrap(null).then(() => {
          expect(show).to.have.been.called;
          expect(shown).to.have.been.called;
          expect(showDeprecated).to.have.been.called;
        });

        // close
        cy.get('#drawer-trigger-6')
          .click();
        cy.tick(ANIMATION_DURATION + 50);
        cy.wrap(null).then(() => {
          expect(hide).to.have.been.called;
          expect(hidden).to.have.been.called;
          expect(hideDeprecated).to.have.been.called;
        });
      });
    });
  });

  describe('Test non animated Drawer', () => {
    it('Click on Drawer trigger opens the Drawer', () => {
      cy.get('#drawer-trigger-25')
        .click();
      cy.get('#drawer-25')
        .should('not.have.class', '-animated')
        .should('have.css', 'left','0px')
        .should('be.visible');
    });
    it('Click on X button closes the Drawer', () => {
      cy.get('#drawer-25')
        .find('.-close')
        .click()
        .parents('.chi-drawer')
        .should('not.be.visible')
        .should('not.have.class', '-active');
    });
  });

  describe('Test dispose method', () => {
    it('Click to run dispose method', () => {
      cy.get('#dispose-drawer-button')
        .click();
    });
    it('Check that drawer does not open on trigger click', () => {
      cy.get('#drawer-trigger-25')
        .click();
      cy.get('#drawer-25')
        .parents('.chi-drawer')
        .should('not.exist');
    });
  });
});
