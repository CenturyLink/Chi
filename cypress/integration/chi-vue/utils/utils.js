export const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};
