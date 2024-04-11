const ACTIVE_CLASS = '-active';

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Toolbar', () => {
  before(() => {
    cy.visit('tests/chi-vue/toolbar.html');
  });

  beforeEach(() => {
    cy.get('[data-cy="column-customization"]')
      .find(`[data-cy="chi-modal__trigger"]`)
      .first()
      .as('columnsBtn');
    cy.get('[data-cy="column-customization"]')
      .find(`[data-cy="chi-modal"]`)
      .as('modal');
  });

  it('Should open a customize Columns modal on columns button click', () => {
    cy.get('@columnsBtn')
      .click()
      .then(() => {
        hasClassAssertion('@modal', `${ACTIVE_CLASS}`);
      });
  });
});
