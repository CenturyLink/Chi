/// <reference types="Cypress" />

const ACTIVE_CLASS = '-active';
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
}

const TIME_STEPS_TEXT = Object.entries(TIME_STEPS).reduce(
  (acc, [key, val]) => ({
    ...acc, 
    [key]: val.join('')
  }), {}
);

const checkActiveTime = (name, { hour, minute, seconds, period }) => {
  if (hour) {
    console.log('hour is', String(hour).padStart(2, '0'))
    cy.get(name)
      .contains(`.${TIME_CLASSES.hour}`, String(hour).padStart(2, '0'))
      .should('have.class', ACTIVE_CLASS);
  }

  if (minute) {
    cy.get(name)
      .contains(`.${TIME_CLASSES.minute}`, String(minute).padStart(2, '0'))
      .should('have.class', ACTIVE_CLASS);
  }

  if (seconds) {
    cy.get(name)
      .contains(`.${TIME_CLASSES.second}`, String(seconds).padStart(2, '0'))
      .should('have.class', ACTIVE_CLASS);
  }

  if (period) {
    cy.get(name)
      .contains(`.${TIME_CLASSES.period}`, String(period).padStart(2, '0'))
      .should('have.class', ACTIVE_CLASS);
  }
};

describe('Time', function() {
  beforeEach(() => {
    cy.visit('tests/custom-elements/time.html');
  });

  it('Base chi-time should select current time', function() {
    const time = new Date();
    const currentHour12hFormat = time.getHours() % 12;
    const currentMinute = time.getMinutes();
    const period = time.getHours() > 12 ? 'PM' : 'AM';

    cy.get('[data-cy="chi-time-base"]', { timeout: 30000 }).as('base');

    checkActiveTime('@base', { hour: currentHour12hFormat, minute: currentMinute, period });
  });

  it('Active chi-time with value and seconds should select provided value', function() {
    cy.get('[data-cy="chi-time-active"]').as('active');

    checkActiveTime('@active', { hour: '09', minute: '32', period: 'AM', seconds: '43' });
  });

  it('Stepped time should select 15 min and 10 seconds intervals', function() {
    cy.get('[data-cy="chi-time-stepped"]')
      .as('stepped')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[15]);

    cy.get('@stepped')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[10]);
  });

  it('Default minute and seconds steps should select 15 min and 10 seconds intervals', function() {
    cy.get('[data-cy="chi-time-default-step"]')
      .as('default-step')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[15]);

    cy.get('@default-step')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[10]);
  });

  it('Should round up the value and change period if needed', function() {
    cy.get('[data-cy="chi-time-custom-steps-period-change"]')
      .as('change-period');

    checkActiveTime('@change-period', {
      hours: '12', minutes: '00', seconds: '00', period: 'PM'
    })
  });

  it('Minutes steps should show only the selected intervals', function() {
    cy.get('[data-cy="chi-time-custom-steps-period-change"]')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[5]);

    cy.get('[data-cy="chi-time-custom-10-min-step"]')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[10]);

    cy.get('[data-cy="chi-time-custom-15-min-step"]')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[15]);

    cy.get('[data-cy="chi-time-custom-20-min-step"]')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[20]);

    cy.get('[data-cy="chi-time-custom-30-min-step"]')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[30]);
  });

  it('Seconds steps should show only the selected intervals', function() {
    cy.get('[data-cy="chi-time-custom-5-seconds-step"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[5]);

    cy.get('[data-cy="chi-time-custom-10-seconds-step"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[10]);

    cy.get('[data-cy="chi-time-custom-15-seconds-step"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[15]);

    cy.get('[data-cy="chi-time-custom-20-seconds-step"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[20]);

    cy.get('[data-cy="chi-time-custom-30-seconds-step"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[30]);
  });
});
