describe('Dynamic dropdown', () => {
  before(() => {
    cy.visit('tests/chi-vue/dynamic-dropdown.html');
  });

  describe('Update items', () => {
    beforeEach(() => {
      cy.get("[data-cy='dropdown'] .chi-dropdown__menu a").as(
        'dropdownMenuItems'
      );
      cy.get("[data-cy='add-items-btn']").as('addItemsBtn');
    });

    it('Should add one item to the dropdown', () => {
      cy.get('@dropdownMenuItems').should('have.length', 3);
      cy.get('@addItemsBtn').click();
      cy.get('@dropdownMenuItems').should('have.length', 4);
    });
  });
});
