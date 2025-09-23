describe('Chi Navigation', () => {
  const NAV = '#navigation-components-contained';
  const DROPDOWN_MENU = '.chi-dropdown__menu';
  const DROPDOWN_TRIGGER = '.chi-dropdown__trigger';
  const OVERFLOW_TEXT = 'See more...';
  const DISPOSE_BTN = '#dispose-btn';

  before(() => {
    cy.visit('tests/js/navigation.html');
  });

  beforeEach(() => {
    cy.reload();
    cy.get(NAV).as('nav');
    cy.get(DROPDOWN_TRIGGER).first().as('firstDropdownTrigger');
  });

  it('renders the component', () => {
    cy.get('@nav').should('exist').and('be.visible');
  });

  it('opens a top-level dropdown menu on click', () => {
    cy.get('@firstDropdownTrigger').click();
    cy.get('@firstDropdownTrigger')
      .siblings(DROPDOWN_MENU)
      .should('be.visible');
  });

  it('selects a dropdown option (clicking first item)', () => {
    cy.get('@firstDropdownTrigger').click();

    cy.get('@firstDropdownTrigger')
      .siblings(DROPDOWN_MENU)
      .should('be.visible')
      .find('.chi-dropdown__menu-item')
      .first()
      .click();

    // Menu should hide after selection
    cy.get('@firstDropdownTrigger')
      .siblings(DROPDOWN_MENU)
      .should('not.be.visible');
  });

  function triggerResizeDebounced(width, height) {
    cy.viewport(width, height);
    cy.window().then((win) => win.dispatchEvent(new Event('resize')));
    cy.wait(300);
  }

  it('moves extra tabs into overflow when shrinking, then restores them when expanding', () => {
    // Baseline: overflow trigger not present
    cy.contains('.chi-dropdown__trigger', OVERFLOW_TEXT).should('not.exist');

    // Shrink → overflow
    triggerResizeDebounced(320, 800);

    cy.contains('.chi-dropdown__trigger', OVERFLOW_TEXT)
      .as('overflowTrigger')
      .should('be.visible');

    // Open overflow and verify an item moved
    cy.get('@overflowTrigger').click();
    cy.get('@overflowTrigger')
      .siblings(DROPDOWN_MENU)
      .should('be.visible')
      .within(() => {
        cy.contains('.chi-dropdown__menu-item', 'Tab Link').should('exist');
      });

    // Expand → overflow goes away
    triggerResizeDebounced(1200, 800);

    cy.contains('.chi-dropdown__trigger', OVERFLOW_TEXT).should('not.exist');
    // Top-level items present inline again
    cy.get('@nav').find('> li').should('have.length.at.least', 4);
  });

  it('hides an open dropdown when clicking outside', () => {
    cy.get('@firstDropdownTrigger').click();
    cy.get('@firstDropdownTrigger').siblings(DROPDOWN_MENU).should('be.visible');

    // Click outside nav
    cy.get('body').click(0, 0);

    cy.get('@firstDropdownTrigger').siblings(DROPDOWN_MENU).should('not.be.visible');
  });

  it('updates active state when selecting a menu item', () => {
    cy.get('@firstDropdownTrigger').click();
    cy.get('@firstDropdownTrigger')
      .siblings(DROPDOWN_MENU)
      .within(() => {
        cy.get('.chi-dropdown__menu-item').first().click({ force: true });
      });

    // The clicked menu item should be active
    cy.get('@nav').find('.chi-dropdown__menu-item.-active').should('exist');
  });

  it('disposes navigation: no menus open after clicks, no overflow created after resize', () => {
    // Click dispose
    cy.get(DISPOSE_BTN).click();

    // Attempt to open dropdown — should do nothing
    cy.get('@firstDropdownTrigger').click({ force: true });
    cy.get('@firstDropdownTrigger').siblings(DROPDOWN_MENU).should('not.be.visible');

    // Resize — overflow should not appear anymore
    triggerResizeDebounced(320, 800);
    cy.contains(DROPDOWN_TRIGGER, OVERFLOW_TEXT).should('not.exist');

    // Resize back — still no overflow
    triggerResizeDebounced(1200, 800);
    cy.contains(DROPDOWN_TRIGGER, OVERFLOW_TEXT).should('not.exist');
  });
});
