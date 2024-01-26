const ALERT_TITLE = 'chi-alert__title';

describe('Alert', () => {
  const alertBannerSelectors = [
    'alert-banner-success-default',
    'alert-banner-center-success-default',
    'alert-banner-dismissible-success-default',
    'alert-banner-titled-success-default',
    'alert-banner-actionable-success-default',
    'alert-banner-success-sm',
    'alert-banner-center-success-sm',
    'alert-banner-dismissible-success-sm',
    'alert-banner-titled-success-sm',
    'alert-banner-actionable-success-sm',
    'alert-banner-success-lg',
    'alert-banner-center-success-lg',
    'alert-banner-dismissible-success-lg',
    'alert-banner-titled-success-lg',
    'alert-banner-actionable-success-lg'
  ];

  const alertBubbleSelectors = [
    'alert-bubble-success-default',
    'alert-bubble-center-success-default',
    'alert-bubble-dismissible-success-default',
    'alert-bubble-titled-success-default',
    'alert-bubble-actionable-success-default',
    'alert-bubble-clickable-link-success-default',
    'alert-bubble-clickable-button-success-default',
    'alert-bubble-success-sm',
    'alert-bubble-center-success-sm',
    'alert-bubble-dismissible-success-sm',
    'alert-bubble-titled-success-sm',
    'alert-bubble-actionable-success-sm',
    'alert-bubble-success-lg',
    'alert-bubble-center-success-lg',
    'alert-bubble-dismissible-success-lg',
    'alert-bubble-titled-success-lg',
    'alert-bubble-actionable-success-lg'
  ];

  const alertAssertion = (el, value) => {
    cy.get(el).should('have.class', value);
  };
  
  describe('Alert auto closing', () => {
    beforeEach(() => {
      cy.visit('tests/custom-elements/alert-toast.html');
    });
  
    it('Alert should auto close with expirationTime attribute set', () => {
      cy.get('[data-cy="alert-toast-success-default"]').as('alertToast');
      cy.get('@alertToast').invoke('attr', 'expiration-time', '3');
      cy.get('@alertToast').should('exist');
      cy.wait(3500);
      cy.get('@alertToast').should('not.exist');
    });
  });

  describe('Alert Bubble', () => {
    before(() => {
      cy.visit('tests/custom-elements/alert-bubble.html');
    });

    beforeEach(() => {
      alertBubbleSelectors.forEach(s => {
        cy.get(`[data-cy=${s}]`, { timeout: 5000 })
          .should('have.class', 'hydrated')
          .children()
          .should('match', 'div.chi-alert.-bubble')
          .as(s);
      });
    });

    it('Alert bubble should be included in the custom element', () => {
      cy.get('@alert-bubble-success-default');
    });

    it('Alert bubble state have appropriate class', () => {
      alertAssertion('@alert-bubble-success-default', '-success');
    });
  });

  describe('Alert Banner', () => {
    before(() => {
      cy.visit('tests/custom-elements/alert-banner.html');
    });

    beforeEach(() => {
      alertBannerSelectors.forEach(s => {
        cy.get(`[data-cy=${s}]`, { timeout: 5000 })
          .should('have.class', 'hydrated')
          .children()
          .should('match', 'div.chi-alert.-banner')
          .as(s);
      });
    });

    it('Alert banner should be included in the custom element', () => {
      cy.get('@alert-banner-success-default');
    });

    it('Alert banner state have appropriate class', () => {
      alertAssertion('@alert-banner-success-default', '-success');
    });

    it('Alert banner should have appropriate class for size', () => {
      alertAssertion('@alert-banner-success-lg', '-lg');
    });

    it('Alert banner is dismissible and renders X button', () => {
      cy.get('@alert-banner-dismissible-success-lg')
        .should('have.class', '-close')
        .children()
        .last()
        .should('match', 'chi-button')
        .and('have.attr', 'type')
        .and('include', 'close');
    });

    it('Alert banner is centered', () => {
      alertAssertion('@alert-banner-center-success-default', '-center');
    });

    it('Alert banner has icons displayed', () => {
      cy.get('@alert-banner-success-default')
        .children()
        .first()
        .should('match', 'chi-icon');
    });

    it('Should remove alert banner after clicking the X button', () => {
      cy.get('@alert-banner-dismissible-success-default').within($alert => {
        return cy
          .get('chi-button')
          .should('have.length', 1)
          .click()
          .then(() => {
            expect($alert).not.to.exist;
          });
      });
    });
  });

  describe('Alert Toast', () => {
    before(() => {
      cy.visit('tests/custom-elements/alert-toast.html');
    });

    it('Alert toast should be included in the custom element', () => {
      cy.get('[data-cy="alert-toast-success-default"]', { timeout: 5000 })
        .should('have.class', 'hydrated')
        .children()
        .should('match', 'div.chi-alert.-toast');
    });
  });

  describe('Alert Common', () => {
    before(() => {
      cy.visit('tests/custom-elements/alert-toast.html');
    });

    it('Should change displayed title if attribute changes', () => {
      cy.get('[data-cy="alert-toast-title-base-lg"]', { timeout: 5000 })
        .scrollIntoView()
        .as("alert")

      cy.get('@alert')
        .find(`.${ALERT_TITLE}`)
        .as('title');

      cy.get("@title")
        .should('have.text', 'base');

      cy.get('@alert')
        .should('have.attr', 'title', 'base')
        
      cy.get("@alert")
        .invoke('attr', 'title', 'my new title')
        .should('have.attr', 'title', 'my new title');

      cy.get('@title')
        .should('have.text', 'my new title');
    });
  });
});
