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

const checkActiveTime = (name, { hour, minute, second, period }) => {
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

describe('Time', function() {
  beforeEach(() => {
    cy.visit('tests/custom-elements/time.html');
  });

  it('Base chi-time should select 11:22 AM', function() {
    cy.get('[data-cy="chi-time-base"]', { timeout: 30000 }).as('base');

    checkActiveTime('@base', { hour: '8', minute: '30', period: 'AM' });
  });

  it('Seconds chi-time should select 08:30:45 AM and display seconds', function() {
    cy.get('[data-cy="chi-time-seconds"]').as('seconds');

    checkActiveTime('@seconds', { hour: '08', minute: '30', second: '45', period: 'AM' });
  });

  it('12hr format chi-time should select 02:30 PM', function() {
    cy.get('[data-cy="chi-time-12hr-format"]').as('12hr-format');

    checkActiveTime('@12hr-format', { hour: '02', minute: '30', period: 'PM' });
  });

  it('24hr format chi-time should select 14:30', function() {
    cy.get('[data-cy="chi-time-24hr-format"]').as('24hr-format');

    checkActiveTime('@24hr-format', { hour: '14', minute: '30' });
  });

  it('24hr with seconds format chi-time should select 14:30:45', function() {
    cy.get('[data-cy="chi-time-24hr-format-seconds"]').as('24hr-format-seconds');

    checkActiveTime('@24hr-format-seconds', { hour: '14', minute: '30', second: '45' });
  });

  it('Default minutes steps chi-time should select 15 minutes intervals and round up', function() {
    cy.get('[data-cy="chi-time-minutes-step-default"]')
      .as('minutes-step-default')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[15]);
  });

  it('5 minutes step chi-time should select 5 minutes intervals and display seconds and round up', function() {
    cy.get('[data-cy="chi-time-minutes-step-5-seconds"]').as('minutes-step-5-seconds');
      
    cy.get('@minutes-step-5-seconds')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[5]);

    checkActiveTime('@minutes-step-5-seconds', { hour: '08', minute: '25', second: '00', period: 'AM' });
  });

  it('10 minutes step chi-time should select 10 minutes intervals and round up', function() {
    cy.get('[data-cy="chi-time-minutes-step-10"]').as('minutes-step-10');
      
    cy.get('@minutes-step-10')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[10]);

    checkActiveTime('@minutes-step-10', { hour: '08', minute: '30', period: 'AM' });
  });

  it('15 minutes step chi-time should select 15 minutes intervals and round up', function() {
    cy.get('[data-cy="chi-time-minutes-step-15"]').as('minutes-step-15');
      
    cy.get('@minutes-step-15')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[15]);

    checkActiveTime('@minutes-step-15', { hour: '08', minute: '30', period: 'AM' });
  });

  it('20 minutes step chi-time should select 20 minutes intervals and round up', function() {
    cy.get('[data-cy="chi-time-minutes-step-20"]').as('minutes-step-20');
      
    cy.get('@minutes-step-20')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[20]);

    checkActiveTime('@minutes-step-20', { hour: '08', minute: '40', period: 'AM' });
  });

  it('30 minutes step chi-time should select 30 minutes intervals and change to PM period', function() {
    cy.get('[data-cy="chi-time-minutes-step-30"]').as('minutes-step-30');
      
    cy.get('@minutes-step-30')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[30]);

    checkActiveTime('@minutes-step-30', { hour: '12', minute: '00', period: 'PM' });
  });

  it('Seconds stepped chi-time should show only the selected intervals', function() {
    cy.get('[data-cy="chi-time-seconds-step-default"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[10]);

    cy.get('[data-cy="chi-time-seconds-step-5"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[5]);

    cy.get('[data-cy="chi-time-seconds-step-10"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[10]);

    cy.get('[data-cy="chi-time-seconds-step-15"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[15]);

    cy.get('[data-cy="chi-time-seconds-step-20"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[20]);

    cy.get('[data-cy="chi-time-seconds-step-30"]')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[30]);

    cy.get('[data-cy="chi-time-minutes-seconds-step-default"]')
      .as('chi-time-minutes-seconds-step-default')
      .find(`.${TIME_CLASSES.minute}`)
      .should('have.text', TIME_STEPS_TEXT[15]);

    cy.get('@chi-time-minutes-seconds-step-default')
      .find(`.${TIME_CLASSES.second}`)
      .should('have.text', TIME_STEPS_TEXT[10]);
  });
});
