describe('Dropdown', function() {
    before(() => {
      cy.visit('http://localhost:8000/tests/js/dropdown.html#');
    });

    describe('Open and closing functionality test for dropdown base', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('.chi-dropdown')
            .find('#dropdown-1')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
        });
    
        it('Dropdown menu should close when dropdown trigger is clicked twice', () => {  
            cy.get('.chi-dropdown')
            .find('#dropdown-1')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.not.visible')
        });
    })

    describe('Open and closing functionality test for dropdown target', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('#dropdown-2')
            .click()
            .wait(550)
            .should('be.visible')
            .should('have.class', '-active')
            
        });

        it('Dropdown menu should close when dropdown trigger is clicked', () => {  
            cy.get('#dropdown-2')
            .click()
            .wait(550)
        });
    })

    describe('Functionality test for dropdown on hover', function () {
          it('Dropdown menu should open when hovered over ', () => {
            cy.get('.chi-dropdown.chi-dropdown__hover')
            .find('button.chi-dropdown__trigger')
            .find('+.chi-dropdown__menu')
            .invoke('show')
            .wait(550)
            .should('be.visible')
            // .should('have.class', '-active')
          })

          it('Dropdown menu should close when dropdown trigger is clicked', () => {  
            cy.get('.chi-dropdown.chi-dropdown__hover')
            .find('button.chi-dropdown__trigger')
            .find('+.chi-dropdown__menu')
            .invoke('hide')
            .wait(550)
            .should('be.not.visible')
          });
    })

    describe('Open and closing functionality test for animated dropdown', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('.chi-dropdown')
            .find('#dropdown-animate')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
        });
    
        it('Dropdown menu should close when dropdown trigger is clicked twice', () => {  
            cy.get('.chi-dropdown')
            .find('#dropdown-animate')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.not.visible')
        });
    })

    describe('Open and closing functionality test for positioned dropdown', function() {
        it('Dropdown menu should open', () => {  
            cy.get('.chi-dropdown')
            .find('.chi-dropdown__trigger.-has-active')
            .get('[data-position=top-start]')
            .click()
            .wait(550)
            .get('[data-position=top]')
            .click()
            .wait(550)
            .get('[data-position=top-end]')
            .click()
            .wait(550)
            .get('[data-position=right-start]')
            .click()
            .wait(550)
            .get('[data-position=right]')
            .click()
            .wait(550)
            .get('[data-position=right-end]')
            .click()
            .wait(550)
            .get('[data-position=bottom-end]')
            .click()
            .wait(550)
            .get('[data-position=bottom]')
            .click()
            .wait(550)           
            .get('[data-position=bottom-start]')
            .click()
            .wait(550)
            .get('[data-position=left-end]')
            .click()
            .wait(550)
            .get('[data-position=left]')
            .click()
            .wait(550)
            .get('[data-position=left-start]')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
        });
    })

    describe('Functionality test for check box', function () {
        it('Check for selecting check box', () => {
          cy.get('.chi-dropdown__menu')
          .find('legend.chi-dropdown__menu-item')
          .get('.chi-dropdown__menu-item')
          .find('.chi-checkbox')
          .find('label.chi-checkbox__label')
          .click({ multiple: true, force:true })
          .wait(550)
        })      
    });

    describe('Functionality test for radio button', function () {
        it('Check for radio button on', () => {
          cy.get('.chi-dropdown__menu')
          .find('legend.chi-dropdown__menu-item')
          .get('.chi-dropdown__menu-item')
          .find('.chi-radio')
          .find('label.chi-radio__label')
          .click({ multiple: true, force:true })
          .wait(550)
        })      
    });

    describe('Functionality test for range slider', function () {
        it('Check for slider', () => {
          cy.get('.chi-dropdown__menu')
          .find('.chi-dropdown__menu-item')
          .get('input.chi-input')    
          .get('input[type=range]')
          .invoke('val', 100)
          .wait(550)
          .invoke('val', 1)   
          .wait(550)      
        })      
    });

    describe('Functionality test for toggle switch', function () {
        it('Check for toggle feature switched on', () => {
          cy.get('.chi-dropdown__menu')
          .find('legend.chi-dropdown__menu-item')
          .get('.chi-dropdown__menu-item')
          .find('.chi-form__item')
          .find('label.chi-switch')
          .click({ multiple: true })
          .wait(550)
        })
        it('Check for toggle feature switched off', () => {
            cy.get('.chi-dropdown__menu')
            .find('legend.chi-dropdown__menu-item')
            .get('.chi-dropdown__menu-item')
            .find('.chi-form__item')
            .find('label.chi-switch')
            .click({ multiple: true })
            .wait(550)
        })
    })

    describe('Functionality test for testing plain text', function () {
        it('Include text without rendering link', () => {
          cy.get('.chi-dropdown__menu')
          .find('span.chi-dropdown__menu-item')
        })
    })

    describe('Functionality test for truncating long sentences', function () {
        it('Long sentences in dropdown menu should be truncated', () => {
          cy.get('.chi-dropdown__menu')
          .find('a.chi-dropdown__menu-item')
          .find('.-flex--ellipsis')
        })
    })


    describe('Functionality test for flexible height', function () {
        it('Dropdown menu should appear and will automatically fit to the size of its contents ', () => {
          cy.get('.chi-dropdown__menu')
          .find('a.chi-dropdown__menu-item')
          .find('+.-h--auto')
        })
    })  
});
