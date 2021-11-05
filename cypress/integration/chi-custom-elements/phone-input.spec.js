const ACTIVE_CLASS = '-active';
const DANGER_CLASS = '-danger';
const WARNING_CLASS = '-warning';
const SUCCESS_CLASS = '-success';
const PHONE_INPUT_EVENTS = {
  CHI_CHANGE: 'chiChange',
  CHI_INPUT: 'chiInput',
  CHI_NUMBER_INVALID: 'chiNumberInvalid'
};
const FLOATING_LABEL = '-floating-label';
const SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
};

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Phone Input', () => {
  before(() => {
    cy.visit('tests/custom-elements/phone-input.html');
  });

  describe('Base', () => {
    beforeEach(() => {
      cy.get(`[data-cy='phone-input-base']`)
        .as('base')
        .find('input[type="tel"]')
        .as('phoneInput');
      cy.get(`@base`)
        .find(`.chi-dropdown`)
        .as('dropdownTrigger');
    });

    it('Should have a default country set (+1)', () => {
      cy.get('@dropdownTrigger')
        .find('button')
        .should('have.text', '+1');
    });

    it(`Should trigger the ${PHONE_INPUT_EVENTS.CHI_CHANGE} event when prefix changes`, () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on(`${PHONE_INPUT_EVENTS.CHI_CHANGE}`, spy);
      });

      cy.get(`@dropdownTrigger`)
        .click()
        .find('.chi-dropdown__menu-item')
        .eq(3)
        .click()
        .then(() => {
          expect(spy).to.be.calledOnce;
          expect(spy.getCall(0).args[0].detail).to.equal('+213-');
        });
    });

    it(`Should trigger the ${PHONE_INPUT_EVENTS.CHI_CHANGE} event when a phone number is inserted`, () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on(`${PHONE_INPUT_EVENTS.CHI_CHANGE}`, spy);
      });

      cy.get('@phoneInput')
        .type('684123456{Enter}')
        .then(() => {
          expect(spy).to.be.calledOnce;
          expect(spy.getCall(0).args[0].detail).to.equal('+213-684123456');
          cy.get('@phoneInput').clear();
        });
    });

    it(`Should trigger the ${PHONE_INPUT_EVENTS.CHI_NUMBER_INVALID} event when the phone number is invalid`, () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on(`${PHONE_INPUT_EVENTS.CHI_NUMBER_INVALID}`, spy);
      });

      cy.get(`@dropdownTrigger`)
        .click()
        .find('.chi-dropdown__menu-item')
        .contains('+46')
        .click();
      cy.get('@phoneInput')
        .type('1234567890{Enter}')
        .then(() => {
          expect(spy).to.be.calledOnce;
          cy.get('@phoneInput').clear();
        });
    });

    it(`Should trigger the ${PHONE_INPUT_EVENTS.CHI_INPUT} event on input change`, () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on(`${PHONE_INPUT_EVENTS.CHI_INPUT}`, spy);
      });

      cy.get('@phoneInput')
        .type('1{Enter}')
        .then(() => {
          expect(spy).to.be.calledOnce;
          expect(spy.getCall(0).args[0].detail).to.equal('+46-1');
        });
      cy.get('@phoneInput')
        .clear()
        .then(() => {
          expect(spy).to.be.calledTwice;
          expect(spy.getCall(1).args[0].detail).to.equal('+46-');
        });
    });

    it('Should select a new country code successfully', () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .find('.chi-dropdown__menu-item')
        .contains('+46')
        .click()
        .then(() => {
          cy.get('@dropdownTrigger')
            .find('button')
            .should('have.text', '+46');
        });
    });

    it(`Should show a selected country with ${ACTIVE_CLASS} class`, () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .contains('Jamaica')
        .as('Jamaica')
        .click()
        .then(() => {
          hasClassAssertion('@Jamaica', ACTIVE_CLASS);
        });
    });

    it(`Should focus on the search input when dropdown menu opens`, () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .then(() => {
          cy.focused().should('have.attr', 'type', 'search');
          cy.focused()
            .parents('chi-phone-input')
            .should('have.id', 'phone-input-base');
        });
      cy.get(`@dropdownTrigger`).click();
    });

    it('Should search a country by name successfully', () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .find('input')
        .as('searchInput')
        .type('af{Enter}')
        .then(() => {
          cy.get('@base')
            .find('.chi-dropdown__menu-content')
            .as('countryCodes')
            .children()
            .should('have.length', 3);
        });
      cy.get('@searchInput')
        .type('g{Enter}')
        .then(() => {
          cy.get('@countryCodes')
            .children()
            .should('have.length', 1);
          cy.get('@countryCodes')
            .children()
            .should('contain', 'Afghanistan');
        });
      cy.get('@searchInput').clear();
      cy.get('@dropdownTrigger').click();
    });

    it('Should search a country by dial code successfully', () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .find('input')
        .as('searchInput')
        .type('+93{Enter}')
        .then(() => {
          cy.get('@base')
            .find('.chi-dropdown__menu-content')
            .as('countryCodes')
            .children()
            .should('have.length', 1);
          cy.get('@countryCodes')
            .children()
            .should('contain', 'Afghanistan');
        });
      cy.get('@searchInput').clear();
      cy.get('@searchInput')
        .type('93{Enter}')
        .then(() => {
          cy.get('@countryCodes')
            .children()
            .should('have.length', 3);
          cy.get('@countryCodes')
            .children()
            .should('contain', 'Afghanistan');
        });
      cy.get('@searchInput').clear();
      cy.get('@dropdownTrigger').click();
    });

    it('Should maintain the filtered state of the selected country code after a search', () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .find('input')
        .as('searchInput')
        .type('franc{Enter}')
        .then(() => {
          cy.get('@base')
            .find('.chi-dropdown__menu-content')
            .as('countryCodes')
            .children()
            .should('have.length', 1);
          cy.get('@countryCodes')
            .children()
            .first()
            .click();
        });
      cy.get('@dropdownTrigger')
        .click()
        .then(() => {
          cy.get('@searchInput').should('have.value', 'franc');
          cy.get('@countryCodes')
            .children()
            .should('have.length', 1);
          cy.get('@base')
            .find('.-close')
            .click();
        });
      cy.get('@dropdownTrigger').click();
    });

    it('Should have a default placeholder', () => {
      cy.get(`@phoneInput`).should('have.attr', 'placeholder', 'Phone Number');
    });

    it(`Should have size -${SIZES.md} by default`, () => {
      hasClassAssertion('@phoneInput', `-${SIZES.md}`);
      cy.get(`@base`)
        .find('.chi-dropdown__trigger')
        .as('trigger');
      hasClassAssertion('@trigger', `-${SIZES.md}`);
    });

    it('Should format the phone number as you type as long as it is valid', () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .find('.chi-dropdown__menu-item')
        .contains('+34')
        .click();
      cy.get('@phoneInput')
        .type('68301{Enter}')
        .then(() => {
          cy.get('@phoneInput').should('have.value', '683 01');
        });
      cy.get('@phoneInput')
        .type('0203{Enter}')
        .then(() => {
          cy.get('@phoneInput').should('have.value', '683 01 02 03');
        });
      cy.get('@phoneInput')
        .type('1{Enter}')
        .then(() => {
          cy.get('@phoneInput').should('have.value', '6830102031');
          cy.get('@phoneInput').clear();
        });
    });

    it('Should update value when prefix changes', () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .find('.chi-dropdown__menu-item')
        .first()
        .click()
        .then(() => {
          cy.get('@base').should('have.attr', 'value', '+358-');
        });
    });

    it('Should update value when suffix changes', () => {
      cy.get('@phoneInput')
        .type('829323{Enter}')
        .then(() => {
          cy.get('@base').should('have.attr', 'value', '+358-829323');
        });
    });
  });

  describe('Default Country', () => {
    it('Should have a default country set', () => {
      cy.get(`[data-cy='phone-input-default-country']`)
        .find(`.chi-dropdown`)
        .find('button')
        .should('have.text', '+1');
    });

    it(`Should show the default country with ${ACTIVE_CLASS} class`, () => {
      cy.get(`[data-cy='phone-input-default-country']`)
        .find(`.chi-dropdown`)
        .as('trigger')
        .click()
        .contains('Canada')
        .as('CA');
      hasClassAssertion('@CA', ACTIVE_CLASS);
      cy.get('@trigger').click();
    });
  });

  describe('Default value', () => {
    it('Should have a suffix set based on its value', () => {
      cy.get(`[data-cy='phone-input-value']`)
        .as('valueExample')
        .should('have.attr', 'value', '+1-6045551212');
      cy.get(`@valueExample`)
        .find('input[type="tel"]')
        .should('have.value', '(604) 555-1212');
    });
  });

  describe('Disabled', () => {
    it('Should show both the input and the dropdown as disabled', () => {
      cy.get(`[data-cy='phone-input-disabled']`)
        .as('disabledExample')
        .find('input[type="tel"]')
        .should('have.attr', 'disabled');
      cy.get(`@disabledExample`)
        .find('.chi-dropdown__trigger')
        .should('have.attr', 'disabled');
    });
  });

  describe('Sizes', () => {
    const sizes = [SIZES.sm, SIZES.md, SIZES.lg, SIZES.xl];

    sizes.forEach(size => {
      it(`Should have size ${size}`, () => {
        cy.get(`[data-cy='phone-input-${size}']`)
          .as('sizeExample')
          .find('.chi-input')
          .as('input');
        hasClassAssertion('@input', `-${size}`);
        cy.get(`@sizeExample`)
          .find('.chi-dropdown__trigger')
          .as('trigger');
        hasClassAssertion('@trigger', `-${size}`);
      });
    });
  });

  describe('States', () => {
    const states = [DANGER_CLASS, WARNING_CLASS, SUCCESS_CLASS];

    states.forEach(state => {
      it(`Should have class ${state}`, () => {
        cy.get(`[data-cy='phone-input${state}-state']`)
          .children()
          .first()
          .children()
          .last()
          .find('input')
          .as('input');
        hasClassAssertion('@input', state);
      });
    });
  });
});
