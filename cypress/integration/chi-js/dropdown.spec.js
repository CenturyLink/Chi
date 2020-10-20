describe('Dropdown', function() {
    before(() => {
      cy.visit('http://localhost:8000/tests/js/dropdown.html');
    });

    describe('Open and closing functionality test for dropdown base', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('.chi-dropdown')
            .find('button#dropdown-1')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
        });
    
        it('Dropdown menu should close when dropdown trigger is clicked twice', () => {  
            cy.get('.chi-dropdown')
            .find('button#dropdown-1.chi-button.chi-dropdown__trigger')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.not.visible')
        });
    })

    describe('Open and closing functionality test for dropdown target', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('button#dropdown-2.chi-button.chi-dropdown__trigger')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
            
        });

        it('Dropdown menu should close when dropdown trigger is clicked', () => {  
            cy.get('button#dropdown-2.chi-button.chi-dropdown__trigger')
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
            .find('button#dropdown-animate.chi-button.chi-dropdown__trigger')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
        });
    
        it('Dropdown menu should close when dropdown trigger is clicked twice', () => {  
            cy.get('.chi-dropdown')
            .find('button#dropdown-animate.chi-button.chi-dropdown__trigger')
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
