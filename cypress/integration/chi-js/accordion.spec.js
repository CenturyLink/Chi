const accordionSelector   = '.chi-accordion';
describe('Accordion',function(){
    before(() => {
        cy.visit('/tests/js/accordion.html');
    });

    describe('Basic expand and collapse should work',()=>{
        it('should expand the panel when item clicked',()=>{
            cy.get('#example-portal'+ accordionSelector).within(() => {
                cy.get('[data-cy="item-1"]')
                .as('firstItem')
                .find('.chi-accordion__trigger')
                .click();
                cy.get('@firstItem')
                .should('have.class','-expanded')
                .find('.chi-accordion__content')
                .should('have.css','display','block')
            })
        })

        it('shoud collapse when the panel clicked twice',() =>{
            cy.get('#example-portal'+ accordionSelector).within(() => {
                cy.get('.chi-accordion__item')
                .as('firstItem')
                .find('.chi-accordion__trigger')
                .click({multiple :true});
                cy.get('@firstItem')
                .should('have.not.class','-expanded')
                .find('.chi-accordion__content')
                .should('have.not.css','display','block')
            })
        })
        
    })

    describe('Nested accorion should expand and collapse accordingly with nested items', () =>{
        it('Panel should expand  when main item clicked',()=>{
            cy.get('#nested-accordions').within(() =>{
                cy.get('[data-cy="nested-item-1"]')
                .as('firstItem')
                .find('[data-cy="nested-btn-1"]')
                .click();
                cy.get('@firstItem')
                    .should('have.class','-expanded') 
                    .find('.chi-accordion__content')
                    .should('have.css','display','block')
                });
        });

        it(`check nested items expands when panel clicked`, () => {
                cy.get('[data-cy="nested-item-1"]').within(() =>{
                    cy.get('.chi-accordion__item')
                    .find('.chi-accordion__trigger')
                    .click({multiple:true});
                    cy.get('.chi-accordion__item')
                    .should('have.class','-expanded')
                    .find('.chi-accordion__content')
                    .should('have.css','display','block')
                })
         });
       
        it(`check nested items collapse when panel clicked twice`, () => {
            cy.get('[data-cy="nested-item-1"]').within(() =>{
                ['item-1','item-2'].forEach(element =>{
                    cy.get('[data-cy="'+element+'"]')
                      .as('firstItem')
                      .find('.chi-accordion__trigger').first()
                      .click();
                    cy.get('@firstItem')
                      .should('have.not.class','-expanded')
                      .find('.chi-accordion__content')
                      .should('have.not.css','display','block')
                })
            });
        });
    })

    describe('Show /Hide /Toggle method should work',() =>{
        [1,2].forEach(element =>{
            it(`check Toggle ${element} button  expands the Accordion ${element} on click`,() =>{
                cy.get('#toggle-accordion-'+element)
                    .click();
                cy.get('#invividual-accordion-item-'+element)
                  .should('have.class','-expanded')
                  .find('.chi-accordion__content')
                  .should('have.css','display','block')
            })
        });
        [1,2].forEach(element =>{
            it(`check Toggle ${element} button  collapses the Accordion ${element} on clicked twice`,() =>{
                cy.get('#toggle-accordion-'+element)
                    .click();
                cy.get('#invividual-accordion-item-'+element)
                  .should('have.not.class','-expanded')
                  .find('.chi-accordion__content')
                  .should('have.not.css','display','block')
            })
        });
        it('Accordion should expand when show button clicked ',() =>{
            cy.get('#show-accordion')
              .click();
            cy.get('#invividual-accordion-item-3')
              .should('have.class','-expanded')
              .find('.chi-accordion__content')
              .should('have.css','display','block')
        });
        it('Accordion should collapse when hide button clicked ',() =>{
            cy.get('#hide-accordion')
              .click();
            cy.get('#invividual-accordion-item-3')
              .should('have.not.class','-expanded')
              .find('.chi-accordion__content')
              .should('have.not.css','display','block')
        });

    })

    describe('Expand All should expand  all items',() =>{
        it('Should expand all the items available when expand all button clicked',() =>{
            cy.get('#expand-all')
              .click();
            cy.get('#expand-collapse').within(() =>{
                cy.get('.chi-accordion__item')
                  .should('have.class','-expanded')
            })
        })
    })

    describe('Collapse All should collapse all items',() =>{
        it('Should collapse all the items available when collapse all button clicked',() =>{
            cy.get('#collapse-all')
              .click();
            cy.get('#expand-collapse').within(() =>{
                cy.get('.chi-accordion__item')
                  .should('have.not.class','-expanded')
            })
        })
    })

    describe('Accordion should appear inactive in disabled state',() =>{
        it('Accordion should appear inactive in disabled state',() =>{
            cy.get('#disabled-accordion')
              .find('.chi-accordion__trigger')
              .should('have.class','-disabled')
        })
    })
})
