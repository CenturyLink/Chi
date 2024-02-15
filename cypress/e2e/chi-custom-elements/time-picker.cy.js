/// <reference types="Cypress" />

const ACTIVE_CLASS = '-active';
const ACTIVE_ATTR = 'active';
const DISABLED_CLASS = '-disabled';
const DISABLED_ATTR = 'disabled';
const INPUT_CLASS = 'chi-input';
const TIME_CLASSES = {
  hour: 'chi-time-picker__hour',
  minute: 'chi-time-picker__minute',
  second: 'chi-time-picker__second',
  period: 'chi-time-picker__period',
};
const TIME_STEPS = {
  1: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
  5: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
  10: ['00', '10', '20', '30', '40', '50'],
  15: ['00', '15', '30', '45'],
  20: ['00', '20','40'],
  30: ['00', '30'],
};

const TIME_STEPS_TEXT = Object.entries(TIME_STEPS).reduce(
  (acc, [key, val]) => ({
    ...acc, 
    [key]: val.join('')
  }), {}
);

const checkActiveTime = (name, { hour, minute, second, period }) => {
  if (hour) {
    cy.get(name)
      .contains(`.${TIME_CLASSES.hour}`, String(hour).padStart(2, '0'))
      .should('have.class', ACTIVE_CLASS);
  }

  if (minute) {
    cy.get(name)
      .contains(`.${TIME_CLASSES.minute}`, String(minute).padStart(2, '0'))
      .should('have.class', ACTIVE_CLASS);
  }

  if (second) {
    cy.get(name)
      .contains(`.${TIME_CLASSES.second}`, String(second).padStart(2, '0'))
      .should('have.class', ACTIVE_CLASS);
  }

  if (period) {
    cy.get(name)
      .contains(`.${TIME_CLASSES.period}`, String(period).padStart(2, '0'))
      .should('have.class', ACTIVE_CLASS);
  }
};

describe('Time picker', function() {
  beforeEach(() => {
    cy.visit('tests/custom-elements/time-picker.html');
  });

  it('Base chi-time-picker should select 01:30 am', function() {
    // Check input
    cy.get('[data-cy="chi-time-picker-base"]')
      .as('base')
      .find(`.${INPUT_CLASS}`)
      .should('have.value', '01:30 am');

    cy.get('@base')
      .click()
      .then(() => {
        cy.get('@base')
          .should('have.attr', ACTIVE_ATTR);

        // Check time picker
        cy.get('@base')
          .find('.chi-popover')
          .should('have.class', ACTIVE_CLASS);

        checkActiveTime('@base', { hour: '01', minute: '30', period: 'AM' });
      })
  });

  it('Active chi-time-picker should select 01:30 am', function() {
    // time picker
    cy.get('[data-cy="chi-time-picker-active"]')
      .as('active')
      .should('have.attr', ACTIVE_ATTR);

    // input
    cy.get('@active')
      .find(`.${INPUT_CLASS}`)
      .should('have.value', '01:30 am');

    // popover
    cy.get('@active')
      .find('.chi-popover')
      .should('have.class', ACTIVE_CLASS);

    checkActiveTime('@active', { hour: '01', minute: '30', period: 'AM' });
  });

  it('Disabled chi-time-picker should select --:-- --', function() {
    // time picker
    cy.get('[data-cy="chi-time-picker-disabled"]')
      .as('disabled')
      .should('have.attr', DISABLED_ATTR);

    // input
    cy.get('@disabled')
      .find(`.${INPUT_CLASS}`)
      .should('have.value', '')
      .should('have.attr', 'placeholder', '--:-- --');

    // popover
    cy.get('@disabled')
      .find('.chi-popover')
      .should('not.exist');
  });

  it('Disabled chi-time-picker with value should select 01:30', function() {
    // time picker
    cy.get('[data-cy="chi-time-picker-disabled-value"]')
      .as('disabled-value')
      .should('have.attr', DISABLED_ATTR);

    // input
    cy.get('@disabled-value')
      .find(`.${INPUT_CLASS}`)
      .should('have.value', '01:30');

    // popover
    cy.get('@disabled-value')
      .find('.chi-popover')
      .should('not.exist');
  });

  it('Display seconds chi-time-picker should select 01:30:45', function() {
    // Check input
    cy.get('[data-cy="chi-time-picker-display-seconds"]')
      .as('display-seconds')
      .find(`.${INPUT_CLASS}`)
      .should('have.value', '01:30:45');

    cy.get('@display-seconds')
      .click()
      .then(() => {
        cy.get('@display-seconds')
          .should('have.attr', ACTIVE_ATTR);

        // Check time picker
        cy.get('@display-seconds')
          .find('.chi-popover')
          .should('have.class', ACTIVE_CLASS);

        checkActiveTime('@display-seconds', { hour: '01', minute: '30', second: '45', period: 'AM' });
      })
  });

  it('12hr format chi-time-picker should select 02:30 pm and convert from 24hr value', function() {
    // Check input
    cy.get('[data-cy="chi-time-picker-12hr-format"]')
      .as('12hr-format')
      .find(`.${INPUT_CLASS}`)
      .should('have.value', '02:30 pm');

    cy.get('@12hr-format')
      .click()
      .then(() => {
        cy.get('@12hr-format')
          .should('have.attr', ACTIVE_ATTR);

        // Check time picker
        cy.get('@12hr-format')
          .find('.chi-popover')
          .should('have.class', ACTIVE_CLASS);

        checkActiveTime('@12hr-format', { hour: '02', minute: '30', period: 'PM' });
      })
  });

  it('24hr format chi-time-picker should select 14:30', function() {
    // Check input
    cy.get('[data-cy="chi-time-picker-24hr-format"]')
      .as('24hr-format')
      .find(`.${INPUT_CLASS}`)
      .should('have.value', '14:30 ');

    cy.get('@24hr-format')
      .click()
      .then(() => {
        cy.get('@24hr-format')
          .should('have.attr', ACTIVE_ATTR);

        // Check time picker
        cy.get('@24hr-format')
          .find('.chi-popover')
          .should('have.class', ACTIVE_CLASS);

        checkActiveTime('@24hr-format', { hour: '14', minute: '30' });
      })
  });

  it('24hr format with seconds chi-time-picker should select 14:30:45', function() {
    // Check input
    cy.get('[data-cy="chi-time-picker-24hr-format-seconds"]')
      .as('format-24-seconds')
      .find(`.${INPUT_CLASS}`)
      .should('have.value', '14:30:45');

    cy.get('@format-24-seconds')
      .click()
      .then(() => {
        cy.get('@format-24-seconds')
          .should('have.attr', ACTIVE_ATTR);

        // Check time picker
        cy.get('@format-24-seconds')
          .find('.chi-popover')
          .should('have.class', ACTIVE_CLASS);

        checkActiveTime('@format-24-seconds', { hour: '14', minute: '30', second: '45' });
      })
  });

  it('Minutes step chi-time-picker should select step intervals', function() {
    cy.get('[data-cy="chi-time-picker-minutes-step-default"]')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[15]);

      cy.get('[data-cy="chi-time-picker-minutes-step-5-seconds"]')
        .find(`.${TIME_CLASSES.minute}`)
        .should('have.text', TIME_STEPS_TEXT[5]);

      cy.get('[data-cy="chi-time-picker-minutes-step-10"]')
        .find(`.${TIME_CLASSES.minute}`)
        .should('have.text', TIME_STEPS_TEXT[10]);

      cy.get('[data-cy="chi-time-picker-minutes-step-15"]')
        .find(`.${TIME_CLASSES.minute}`)
        .should('have.text', TIME_STEPS_TEXT[15]);

      cy.get('[data-cy="chi-time-picker-minutes-step-20"]')
        .find(`.${TIME_CLASSES.minute}`)
        .should('have.text', TIME_STEPS_TEXT[20]);

      cy.get('[data-cy="chi-time-picker-minutes-step-30"]')
        .find(`.${TIME_CLASSES.minute}`)
        .should('have.text', TIME_STEPS_TEXT[30]);
  });

  it('Seconds step chi-time-picker should select step intervals', function() {
    cy.get('[data-cy="chi-time-picker-seconds-step-default"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[10]);

      cy.get('[data-cy="chi-time-picker-seconds-step-5"]')
        .find(`.${TIME_CLASSES.second}`)
        .should('have.text', TIME_STEPS_TEXT[5]);

      cy.get('[data-cy="chi-time-picker-seconds-step-10"]')
        .find(`.${TIME_CLASSES.second}`)
        .should('have.text', TIME_STEPS_TEXT[10]);

      cy.get('[data-cy="chi-time-picker-seconds-step-15"]')
        .find(`.${TIME_CLASSES.second}`)
        .should('have.text', TIME_STEPS_TEXT[15]);

      cy.get('[data-cy="chi-time-picker-seconds-step-20"]')
        .find(`.${TIME_CLASSES.second}`)
        .should('have.text', TIME_STEPS_TEXT[20]);

      cy.get('[data-cy="chi-time-picker-seconds-step-30"]')
        .find(`.${TIME_CLASSES.second}`)
        .should('have.text', TIME_STEPS_TEXT[30]);
  });
});
