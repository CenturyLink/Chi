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
        });
    });

    it(`Should trigger the ${PHONE_INPUT_EVENTS.CHI_CHANGE} event when a phone number is inserted`, () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on(`${PHONE_INPUT_EVENTS.CHI_CHANGE}`, spy);
      });

      cy.get('@phoneInput')
        .type('123456789{Enter}')
        .then(() => {
          expect(spy).to.be.calledOnce;
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
        });
      cy.get('@phoneInput')
        .clear()
        .then(() => {
          expect(spy).to.be.calledTwice;
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

    it('Should search a country successfully', () => {
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

    it('Should reset country codes after a search', () => {
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
          cy.get('@countryCodes')
            .children()
            .should('have.length', 235);
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

    it('Should format the phone number as you type as long as the it is valid', () => {
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
  });

  describe('Default Country', () => {
    it('Should have a default country set', () => {
      cy.get(`[data-cy='phone-input-default-country']`)
        .find(`.chi-dropdown`)
        .find('button')
        .should('have.text', '+1');
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
