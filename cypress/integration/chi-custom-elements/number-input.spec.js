/// <reference types="Cypress" />

describe('Number input', function() {

  const spyCheck = function(element, button, value, type=false, typeElement=null, typevalue=undefined) {
    
    const spy = cy.spy();
      
      cy.get(element)
        .then((el) => {
          el.on('chiChange', spy);
        });

      if (type) {
        cy.get(typeElement)
        .clear()
        .type(typevalue);
      }

      cy.get(button)
        .click()
        .then(() => {
          expect(spy).to.be.called;
          expect(spy.getCall(0).args[0].detail).to.equal(value);
        });
  };

  const checkComponent = function(element, classToCheck) {

    cy.get(element)
        .should('have.class', 'hydrated')
        .children()
        .first()
        .should('have.class', classToCheck);
  };

  const getComponentAliases = function(component, baseAlias, wrapperAlias, inputAlias, minusButtonAlias, plusButtonAlias) {

    cy.get(component)
        .first()
        .as(baseAlias);

      cy.get(`@${baseAlias}`)
        .children()
        .first()
        .as(wrapperAlias);

      cy.get(`@${wrapperAlias}`)
        .children()
        .first()
        .as(inputAlias);

      cy.get(`@${inputAlias}`)
        .next()
        .as(minusButtonAlias);
    
    cy.get(`@${wrapperAlias}`)
        .children()
        .last()
        .as(plusButtonAlias);
  };

  describe('Number input base', function() {

    beforeEach(function() {

      cy.visit('tests/custom-elements/number-input.html');

      getComponentAliases('[data-cy="test-base"]', 'base_number_input', 'input_wrapper', 'input', 'minus_button', 'plus_button');
    });

    it('Number input custom element should initiate a Chi number-input component. ', function() {
      
      checkComponent('@base_number_input', 'a-inputWrapper');
    });

    it('Clicking arrow-up button sends a value increment event. ', function() {

      spyCheck('@base_number_input', '@plus_button', '1');
    });

    it('Clicking arrow-down button sends a value decrement event. ', function() {

      spyCheck('@base_number_input', '@minus_button', '-1');
    });

    it('Setting a value manually in the input must be allowed as a base number. ', function() {

      spyCheck('@base_number_input', '@plus_button', '56', true, '@input', '55');
    });
  });

  describe('Number input expanded', function() {

    beforeEach(function() {

      cy.visit('tests/custom-elements/number-input.html');

      getComponentAliases('[data-cy="test-expanded"]', 'expanded_number_input', 'expanded_input_wrapper', 'expanded_input', 'expanded_minus_button', 'expanded_plus_button');
    });

    it('Number input custom element should initiate an expanded Chi number-input component. ', function() {
      
      checkComponent('@expanded_number_input', 'm-inputNumber');
    });

    it('Clicking arrow-up button sends a value increment event. ', function() {

      spyCheck('@expanded_number_input', '@expanded_plus_button', '1');
    });

    it('Clicking arrow-down button sends a value decrement event. ', function() {

      spyCheck('@expanded_number_input', '@expanded_minus_button', '-1');
    });

    it('Setting a value manually in the input must be allowed as a base number. ', function() {

      spyCheck('@expanded_number_input', '@expanded_minus_button', '3', true, '@expanded_input', '3.3');
    });
  });
});
