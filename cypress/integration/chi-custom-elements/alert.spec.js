describe('Alert', () => {
  const alertBannerSelectors = [
    'alert-banner-default-success',
    'alert-banner-default-warning',
    'alert-banner-default-warning-center',
    'alert-banner-large-success',
    'alert-banner-large-success-dismiss',
    'alert-banner-large-muted-icon-center'
  ];

  const alertBubbleSelectors = [
    'alert-bubble-default-success',
    'alert-bubble-default-warning',
    'alert-bubble-large-success',
    'alert-bubble-large-success-dismiss',
  ];

  const alertAssertion = (el, value) => {
    cy.get(el)
      .should('have.class', value);
  };

  describe('Alert Bubble', () => {
    before(() => {
      cy.visit('tests/custom-elements/alert-bubble.html');
    });

    beforeEach(() => {
      alertBubbleSelectors.forEach(s => {
        cy.get(`[data-cy=${s}]`, { timeout: 5000 })
          .should('have.class', 'hydrated')
          .children()
          .should('match', 'div.m-alert.-bubble')
          .as(s);
      });
    });

    it('Alert bubble should be included in the custom element', () => {
      cy.get('@alert-bubble-default-success');
    });

    it('Alert bubble state have appropriate class', () => {
      alertAssertion('@alert-bubble-default-warning', '-warning');
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
          .should('match', 'div.m-alert.-banner')
          .as(s);
      });
    });

    it('Alert banner should be included in the custom element', () => {
      cy.get('@alert-banner-default-success');
    });

    it('Alert banner state have appropriate class', () => {
      alertAssertion('@alert-banner-default-warning', '-warning');
    });

    it('Alert banner should have appropriate class for size', () => {
      alertAssertion('@alert-banner-large-success', '-lg');
    });

    it('Alert banner is dismissible and renders X button', () => {
      cy.get('@alert-banner-large-success-dismiss')
        .should('have.class', '-dismiss')
        .children()
        .last()
        .should('match', 'chi-button')
        .and('have.attr', 'type')
        .and('include', 'close');
    });

    it('Alert banner is centered', () => {
      alertAssertion('@alert-banner-default-warning-center', '-center');
    });

    it('Alert banner has icons displayed', () => {
      cy.get('@alert-banner-large-muted-icon-center')
        .should('have.class', '-center')
        .children()
        .first()
        .children()
        .first()
        .should('match', 'chi-icon');
    });

    it('Alert banner dismiss button should trigger appropriate event', () => {
      const spy = cy.spy();

      cy.get('body').then((el) => {
        el.on('dismissAlert', spy);
      });

      cy.get('@alert-banner-large-success-dismiss')
        .children()
        .last()
        .should('match', 'chi-button')
        .click()
        .then(() => {
          expect(spy).to.be.called;
        });
    });
  });

  describe('Alert Toast', () => {
    before(() => {
      cy.visit('tests/custom-elements/alert-toast.html');
    });

    it('Alert toast should be included in the custom element', () => {
      cy.get('[data-cy="alert-toast-success"]', { timeout: 5000 })
        .should('have.class', 'hydrated')
        .children()
        .should('match', 'div.m-alert.-toast');
    });
  });

});
