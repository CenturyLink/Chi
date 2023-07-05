const ACTIVE_CLASS = '-active';
const DANGER_CLASS = '-danger';
const FLOATING_LABEL = '-floating-label';
const PHONE_INPUT_EVENTS = {
  CHI_CHANGE: 'chiChange',
  CHI_INPUT: 'chiInput',
  CHI_NUMBER_INVALID: 'chiNumberInvalid'
};
const SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
};
const SUCCESS_CLASS = '-success';
const WARNING_CLASS = '-warning';

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
      cy.get(`@dropdownTrigger`)
        .click()
        .then(() => {
          cy.focused().should('not.have.attr', 'type', 'search');
        });
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

    it('Should maintain the filtered state of the selected country after a search', () => {
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

    it.skip('Should format the phone number as you type as long as it is valid', () => {
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
          cy.get('@base').should('have.attr', 'value', '+93-1');
        });
    });

    it('Should update value when suffix changes', () => {
      cy.get('@phoneInput')
        .type('829323{Enter}')
        .then(() => {
          cy.get('@base').should('have.attr', 'value', '+93-829323');
        });
    });

    it('Should contain Serbia and Montenegro as separate countries', () => {
      cy.get('@dropdownTrigger').click();
      cy.get('@base')
        .find('.chi-dropdown__menu-item')
        .should('contain', 'Serbia');
      cy.get('@base')
        .find('.chi-dropdown__menu-item')
        .should('contain', 'Montenegro');
      cy.get('@base')
        .find('.chi-dropdown__menu-item')
        .should('not.contain', 'Serbia and Montenegro');
      cy.get('@dropdownTrigger').click();
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
      it(`Should have ${state} class`, () => {
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

  describe('Dynamic Value', () => {
    beforeEach(() => {
      cy.get(`[data-cy='phone-input-dynamic-value']`).as('dynamicPhoneInput');
      cy.get('@dynamicPhoneInput')
        .find('.chi-dropdown')
        .as('dropdownTrigger');
    });

    it('Should have the dynamic-value prop as true', () => {
      cy.get('@dynamicPhoneInput').should('have.attr', 'dynamic-value');
    });

    it('Should change the prefix dynamically and change the country dropdown value', () => {
      cy.get('@dynamicPhoneInput')
        .invoke('attr', 'value', '+1-999999999{Enter}')
        .then(() => {
          cy.get('@dropdownTrigger')
            .find('button')
            .should('have.text', '+1');
        });
    });

    it('Should have changed the format automatically after changing the prefix dynamically', () => {
      cy.get('@dynamicPhoneInput')
        .find('input[type="tel"]')
        .should('have.value', '(999) 999-999');
    });

    it('Should have United States as a selected country after changing the prefix dynamically', () => {
      cy.get(`@dropdownTrigger`)
        .click()
        .contains('United States')
        .as('UnitedStates')
        .then(() => {
          hasClassAssertion('@UnitedStates', ACTIVE_CLASS);
        });
    });

    it('Should change the country to CA, change the value dynamically and the country dropdown value should be still CA', () => {
      cy.get(`@dropdownTrigger`)
        .contains('Canada')
        .as('Canada')
        .click()
        .then(() => {
          cy.get(`@dropdownTrigger`)
            .click()
            .then(() => {
              cy.get('@dynamicPhoneInput').invoke(
                'attr',
                'value',
                '+1-999999998{Enter}'
              );
              hasClassAssertion('@Canada', ACTIVE_CLASS);
            });
        });
    });
  });

  describe('excluded Countries', () => {
    beforeEach(() => {
      cy.get(`[data-cy='phone-input-exclude-countries']`).as(
        'excludedCountriesPhoneInput'
      );
      cy.get('@excludedCountriesPhoneInput')
        .find('.chi-dropdown')
        .as('dropdownTrigger');
    });

    it('Should have the excluded-countries prop', () => {
      cy.get('@excludedCountriesPhoneInput').should(
        'have.attr',
        'excluded-countries'
      );
    });

    it('Should exclude a single country specified by ISO country code', () => {
      cy.get('@excludedCountriesPhoneInput')
        .invoke('attr', 'excluded-countries', 'AL')
        .then(() => {
          cy.get('@dropdownTrigger').click({ force: true });
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('not.contain', 'Albania');
        });
    });

    it('Should exclude multiple countries specified by ISO country codes', () => {
      cy.get('@excludedCountriesPhoneInput')
        .invoke('attr', 'excluded-countries', 'AL, DZ')
        .then(() => {
          cy.get('@dropdownTrigger').click();
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('not.contain', 'Albania');
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('not.contain', 'Algeria');
        });
    });

    it('Should not exclude default country from countries list if default country is in specified excluded countries', () => {
      cy.get('@excludedCountriesPhoneInput')
        .invoke('attr', 'default-country', 'US')
        .invoke('attr', 'excluded-countries', 'US, AL')
        .then(() => {
          cy.get('@dropdownTrigger').click();
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('contain', 'United States');
        });
    });

    it('Should exclude specified countries from the dropdown list if countries passed as array of strings', () => {
      cy.get('@excludedCountriesPhoneInput')
        .invoke('attr', 'excluded-countries', '["DE", "FR"]')
        .then(() => {
          cy.get('@dropdownTrigger').click();
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('not.contain', 'Germany');
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('not.contain', 'France');
        });
    });

    it('Should not exclude specified countries if countries passed not as ISO country codes', () => {
      cy.get('@excludedCountriesPhoneInput')
        .invoke('attr', 'excluded-countries', 'ca, +44')
        .then(() => {
          cy.get('@dropdownTrigger').click();
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('contain', 'Canada');
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('contain', 'United Kingdom');
        });
    });

    it('Should not fail if excluded countries not passed', () => {
      cy.get('@excludedCountriesPhoneInput')
        .invoke('attr', 'excluded-countries')
        .then(() => {
          cy.get('@dropdownTrigger').click();
          cy.get('@excludedCountriesPhoneInput')
            .find('.chi-dropdown__menu-item')
            .should('have.length', 237);
        });
    });

    it('Should include only specified countries when excludedCountries is set to one country and then overridden', () => {
      cy.get('@excludedCountriesPhoneInput')
        .invoke('attr', 'excluded-countries', 'DE')
        .then(() => {
          cy.get('@excludedCountriesPhoneInput')
            .invoke('attr', 'excluded-countries', 'FR')
            .then(() => {
              cy.get('@dropdownTrigger').click();
              cy.get('@excludedCountriesPhoneInput')
                .find('.chi-dropdown__menu-item')
                .should('contain', 'Germany');
              cy.get('@excludedCountriesPhoneInput')
                .find('.chi-dropdown__menu-item')
                .should('not.contain', 'France');
            });
        });
    });
  });
});
