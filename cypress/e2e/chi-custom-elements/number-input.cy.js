/// <reference types="Cypress" />

const NUMBER_INPUT_EVENTS = {
  CHI_CHANGE: 'chiChange',
  CHI_INPUT: 'chiInput',
  CHI_NUMBER_INVALID: 'chiNumberInvalid',
  CHI_FOCUS: 'chiFocus',
  CHI_BLUR: 'chiBlur',
  CHI_CLICK: 'chiClick'
};

describe('Number input', function() {
  const valueCheck = function(
    button,
    value,
    input,
    type = false,
    typevalue = undefined
  ) {
    if (type) {
      cy.get(input)
        .clear()
        .type(typevalue);
    }

    cy.get(button).click();

    cy.get(input).should('have.value', value);
  };

  const checkComponent = function(element, classToCheck) {
    cy.get(element)
      .should('have.class', 'hydrated')
      .children()
      .first()
      .should('have.class', classToCheck);
  };

  const getComponentAliases = function(
    component,
    baseAlias,
    wrapperAlias,
    inputAlias,
    minusButtonAlias,
    plusButtonAlias
  ) {
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

      getComponentAliases(
        '[data-cy="test-base"]',
        'base_number_input',
        'input_wrapper',
        'input',
        'minus_button',
        'plus_button'
      );
    });

    it('Number input custom element should initiate a Chi number-input component. ', function() {
      checkComponent('@base_number_input', 'chi-number-input');
    });

    it('Clicking arrow-up button sends a value increment event. ', function() {
      valueCheck('@plus_button', '1', '@input');
    });

    it('Clicking arrow-down button sends a value decrement event. ', function() {
      valueCheck('@minus_button', '-1', '@input');
    });

    it('Setting a value manually in the input must be allowed as a base number. ', function() {
      valueCheck('@plus_button', '56', '@input', true, '55');
    });
  });

  describe('Number input expanded', function() {
    beforeEach(function() {
      cy.visit('tests/custom-elements/number-input.html');

      getComponentAliases(
        '[data-cy="test-expanded"]',
        'expanded_number_input',
        'expanded_input_wrapper',
        'expanded_input',
        'expanded_minus_button',
        'expanded_plus_button'
      );
    });

    it('Number input custom element should initiate an expanded Chi number-input component. ', function() {
      checkComponent('@expanded_number_input', 'chi-number-input');
    });

    it('Clicking arrow-up button sends a value increment event. ', function() {
      cy.wait(5000)
      valueCheck('@expanded_plus_button', '1', '@expanded_input');
    });
    
    it('Clicking arrow-down button sends a value decrement event. ', function() {
      cy.wait(5000)
      valueCheck('@expanded_minus_button', '-1', '@expanded_input');
    });
  });

  describe('Helper message', () => {
    beforeEach(() => {
      cy.visit('tests/custom-elements/number-input.html');
      cy.get('[data-cy="test-base-helper-message-danger"]')
        .as("numberInput");

    });

    it("Should initiate with helper-message attribute", function() {
      cy.get("@numberInput")
        .should(
          'have.attr',
          'helper-message',
          "An optional message"
        )
        .find('chi-helper-message')
        .should('exist');
    })

    it('Should have a danger inputstyle helper message', () => {
      cy.get('@numberInput')
        .should('have.attr', 'inputstyle', 'danger');

      cy.get('@numberInput')
        .find('.chi-label')
        .should('have.class', '-danger');

      cy.get('@numberInput')
        .find('chi-icon')
        .find('use')
        .should('have.attr', 'href', '#icon-circle-warning')
        .should('exist');
    })
  })

  describe('Number input events', () => {
    beforeEach(() => {
      cy.visit('tests/custom-elements/number-input.html');
    });

    describe('Button events', () => {
      let spies;

      beforeEach(() => {
        const createSpy = (event, alias) => {
          const spy = cy.spy();
          cy.get('body').then(el => el.on(event, spy)).as(alias);
          return spy;
        };

        spies = {
          focus: createSpy(`${NUMBER_INPUT_EVENTS.CHI_FOCUS}`, 'spyFocus'),
          change: createSpy(`${NUMBER_INPUT_EVENTS.CHI_CHANGE}`, 'spyChange'),
          input: createSpy(`${NUMBER_INPUT_EVENTS.CHI_INPUT}`, 'spyInput'),
          click: createSpy(`${NUMBER_INPUT_EVENTS.CHI_CLICK}`, 'spyClick')
        };
      });

      it(`Should trigger the events on base plus and minus buttons click`, () => {
        getComponentAliases(
          '[data-cy="test-base"]',
          'base_number_input',
          'input_wrapper',
          'input',
          'minus_button',
          'plus_button'
        );

        cy.get('@plus_button').click()
          .then(() => {
            Object.values(spies).forEach(spy => expect(spy).to.be.calledOnce);
          });

        cy.get('@minus_button').click()
          .then(() => {
            Object.values(spies).forEach(spy => expect(spy).to.be.calledTwice);
          });
      });

      it(`Should trigger the events on expanded plus and minus buttons click`, () => {
        getComponentAliases(
          '[data-cy="test-expanded"]',
          'expanded_number_input',
          'expanded_input_wrapper',
          'expanded_input',
          'expanded_minus_button',
          'expanded_plus_button'
        );

        cy.get('@expanded_plus_button').wait(5000).should('exist').click()
          .then(() => {
            Object.values(spies).forEach(spy => expect(spy).to.be.calledOnce);
          });

        cy.get('@expanded_minus_button').click()
          .then(() => {
            Object.values(spies).forEach(spy => expect(spy).to.be.calledTwice);
          });
      });
    });

    describe('Custom chiEvents', () => {
      beforeEach(() => {
        cy.get('[data-cy="test-base"]').first()
          .children().first()
          .children().first().as('numberInput');
      });

      it(`Should trigger the ${NUMBER_INPUT_EVENTS.CHI_INPUT} event on input`, () => {
        const spy = cy.spy();

        cy.get('body').then(el => {
          el.on(`${NUMBER_INPUT_EVENTS.CHI_INPUT}`, spy);
        });

        cy.get('@numberInput')
          .type('1{enter}')
          .then(() => {
            expect(spy).to.be.calledOnce;
          });

        cy.get('@numberInput')
          .clear()
          .then(() => {
            expect(spy).to.be.calledTwice;
          });
      });

      it(`Should trigger the ${NUMBER_INPUT_EVENTS.CHI_CHANGE} event on change`, () => {
        cy.get('[data-cy="test-base"]').first()
          .children().first()
          .children().last().as('plusButton');

        const spy = cy.spy();

        cy.get('body').then(el => {
          el.on(`${NUMBER_INPUT_EVENTS.CHI_CHANGE}`, spy);
        });

        cy.get('@plusButton').click()
          .then(() => {
            expect(spy).to.be.calledOnce;
          });
      });

      it(`Should trigger the ${NUMBER_INPUT_EVENTS.CHI_BLUR} and ${NUMBER_INPUT_EVENTS.CHI_FOCUS} events`, () => {
        const spyBlur = cy.spy();
        const spyFocus = cy.spy();

        cy.get('body').then(el => {
          el.on(`${NUMBER_INPUT_EVENTS.CHI_BLUR}`, spyBlur);
          el.on(`${NUMBER_INPUT_EVENTS.CHI_FOCUS}`, spyFocus);
        });

        cy.get('@numberInput')
          .focus()
          .blur()
          .then(() => {
            expect(spyBlur).to.be.calledOnce;
            expect(spyFocus).to.be.calledOnce;
          });
      });

      it(`Should trigger the ${NUMBER_INPUT_EVENTS.CHI_NUMBER_INVALID} event when the number is invalid`, () => {
        const spy = cy.spy();
  
        cy.get('body').then(el => {
          el.on(`${NUMBER_INPUT_EVENTS.CHI_NUMBER_INVALID}`, spy);
        });
  
        cy.get('@numberInput')
          .invoke('attr', 'max', 100)
          .type('101{Enter}')
          .then(() => {
            expect(spy).to.be.calledOnce;
          });
      });
    });
  })
});
