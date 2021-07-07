describe('Popover', function() {
  before(() => {
    cy.visit('tests/js/popover.html');
    cy.fixture('chidata.json').then(data => {
      this.chidata = data;
    });
  });

  describe('Popover should be shown  when  button  clicked ', function() {
    it('Popover should shown on button clicked', () => {
      cy.get('[data-cy="show-popover"]')
        .click()
        .find('+ .chi-popover')
        .should('be.visible')
        .should('have.class', '-active');
    });

    it('Popover should hide  on button clicked twice', () => {
      cy.get('[data-target="#popover-in-html"]')
        .click()
        .find('+ .chi-popover')
        .should('be.not.visible');
    });
  });

  describe('Popover Positioning and arrow should be matched ', () => {
    it('Popover Positioning and arrow should work in accordance', () => {
      this.chidata.popperPositions.forEach(position => {
        const getValue = `[data-cy="test-more-${position}"]`;

        cy.get(getValue)
          .find('button.chi-button')
          .should('match', `[data-position="${position}"]`)
          .find('+ .chi-popover')
          .should('match', `[x-placement="${position}"]`);
      });
    });
  });

  describe('Autohide and NoAutohide should work', function() {
    it('popover should hide when click out side when preventAutoHide set to false', () => {
      cy.get('[data-cy="auto-hide"]')
        .find('[data-cy="popover-6"]')
        .click()
        .parent()
        .find('.chi-popover#chi-popover-14')
        .should('have.class', '-active')
        .click(500, 0, { force: true })
        .find('.chi-popover#chi-popover-14')
        .should('not.have.class', '-active');
    });

    it('popover should not hide when click out side when preventAutoHide set to true', () => {
      cy.get('[data-cy="auto-hide"]')
        .find('[data-cy="popover-7"]')
        .click()
        .parent()
        .find('.chi-popover#chi-popover-15')
        .should('have.class', '-active')
        .click(500, 0, { force: true })
        .get('.parent')
        .find('.chi-popover#chi-popover-15')
        .should('have.class', '-active')
        .and('match', `[aria-hidden="false"]`);
    });
  });

  describe('Hide, Toggle, Show methods should work ', function() {
    it('Hide, show, toggle should work', () => {
      cy.get('[data-cy="show-popover-3"]')
        .as('showElement')
        .click()
        .parent()
        .find('#chi-popover-16.chi-popover')
        .should('have.class', '-active')
        .should('match', `[aria-hidden="false"]`);
      cy.get('[data-cy="hide-popover-3"]')
        .click()
        .parent()
        .find('#chi-popover-16.chi-popover')
        .should('not.have.class', '-active')
        .should('match', `[aria-hidden="true"]`);
      cy.get('[data-cy="toggle-popover-3"]')
        .click()
        .parent()
        .find('#chi-popover-16.chi-popover')
        .should('have.class', '-active')
        .should('match', `[aria-hidden="false"]`)
        .parent()
        .click()
        .find('#chi-popover-16.chi-popover')
        .should('not.have.class', '-active')
        .should('match', `[aria-hidden="true"]`);
    });
  });

  describe('Should render content based on the attribute provided', () => {
    it('Should render content based on provided data-popover-content attribute', () => {
      cy.get('[data-cy="dynamic-content"]')
        .click()
        .parent()
        .find('#chi-popover-13')
        .should('have.class', '-active')
        .get('h4')
        .contains('This is data-popover-content content')
        .should('exist');
    });
  });
});
