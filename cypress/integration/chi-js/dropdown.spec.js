describe('Dropdown', function() {
    before(() => {
      cy.visit('tests/js/dropdown.html');
      cy.fixture('chidata.json').then(data => {
        this.chidata = data;
      });
    });

    describe('Open and closing functionality test for dropdown base', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-1"]')
            .click()
            .find('+.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
        });
    
        it('Dropdown menu should close when dropdown trigger is clicked twice', () => {  
            cy.get('[data-cy="dropdown-1"]')
            .click()
            .find('+.chi-dropdown__menu')
            .should('be.not.visible')
        });
    })

    describe('Open and closing functionality test for dropdown target', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-2"]')
            .click()
            .find('++.chi-dropdown__menu')
            .should('be.visible')
            .should('have.class', '-active')
            
        });

        it('Dropdown menu should close when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-2"]')
            .click()
            .find('++.chi-dropdown__menu')
            .should('be.not.visible')
        });
    })

    describe('Open and closing functionality test for animated dropdown', function() {
        it('Dropdown menu should open when dropdown trigger is clicked', () => {  
            cy.get('[data-cy="dropdown-animate"]')
            .click()
            .wait(500)
            .then($els => {
              const win = $els[0].ownerDocument.defaultView;
              const before = win.getComputedStyle($els[0], 'after');
              const tr = before.transform;
              const values = tr.split('(')[1].split(')')[0].split(',');
              const a = values[0];
              const b = values[1];
              const angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

              expect(angle).to.equal(180);
            });
        });
    
        it('Dropdown menu should close when dropdown trigger is clicked twice', () => {  
            cy.get('[data-cy="dropdown-animate"]')
            .click()
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
              .find('+.chi-dropdown__menu')
              .should('be.visible')
              .should('have.class', '-active')
              .click().then(() => {
                cy.get(getValue).find('+.chi-dropdown__menu')
                .should('not.be.visible');
              });
          });
        });
    });
  });
