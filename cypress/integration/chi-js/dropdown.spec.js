describe('Dropdown', function() {
    before(() => {
      cy.visit('http://localhost:8000/tests/js/dropdown.html');
      cy.fixture('chidata.json').then(data => {
        this.chidata = data;
      });
    });

    describe('Open and closing functionality test for dropdown base', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-1"]')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
        });
    
        it('Dropdown menu should close when dropdown trigger is clicked twice', () => {  
            cy.get('[data-cy="dropdown-1"]')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.not.visible')
        });
    })

    describe('Open and closing functionality test for dropdown target', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-2"]')
            .click()
            .wait(550)
            .find('++.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
            
        });

        it('Dropdown menu should close when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-2"]')
            .click()
            .wait(550)
            .find('++.chi-dropdown__menu')
            .should('be.not.visible')
        });
    })

    describe('Functionality test for dropdown on hover', function () {
          it('Dropdown menu hover open check ', () => {
            cy.get('[data-cy="dropdown-hover"]')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
          })

          it('Dropdown menu should close when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-hover"]')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.not.visible')
          });
    })

    describe('Open and closing functionality test for animated dropdown', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-animate"]')
            .click()
            .should('have.class', '-active')
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('have.class', '-active')
            .should('be.visible')
            
        });
    
        it('Dropdown menu should close when dropdown trigger is clicked twice', () => {  
            cy.get('[data-cy="dropdown-animate"]')
            .click()
            .wait(550)
            .find('+.chi-dropdown__menu')
            .should('be.not.visible')
          });
    })

    describe('Dropdown Positioning test', () => {
        it('Dropdown Positioning should work in accordance', () => {
          this.chidata.popperPositions.forEach(position => {
            const getValue = `[data-cy="test-more-${position}"]`;
    
            cy.get(getValue)
              .should('match', `[data-position="${position}"]`)
              .click()
              .wait(550)
              .find('+.chi-dropdown__menu')
              .should('be.visible')
              .should('have.class', '-active')
              .click()
              .wait(550)
              .find('+.chi-dropdown__menu')
              .should('be.not.visible')
          });
        });
    });
  });
