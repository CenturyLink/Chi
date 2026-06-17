describe('Icon', () => {
  before(() => {
    cy.visit('tests/lumen/js/icon.html');
  });

  const VALID_ICON = '#valid-icon';
  const INVALID_ICON = '#invalid-icon';
  const LOGO_ICON = '#logo-icon';
  const ADD_ICON_BTN = '#add-icon-button';
  const DYNAMIC_ICON = '#dynamic-icon';
  const LOADING_CLASS = '-loading';
  const HIDDEN_CLASS = '-d--none';

  beforeEach(() => {
    cy.reload();
    cy.get(VALID_ICON).as('validIcon');
    cy.get(INVALID_ICON).as('invalidIcon');
    cy.get(LOGO_ICON).as('logoIcon');
    // Wait for the icon font to finish loading so the loading state settles.
    cy.document().then((doc) => doc.fonts && doc.fonts.ready);
  });

  // The fixture never calls chi.icon(): loading chi.js auto-enhances the page.
  it('hides an icon with an invalid name automatically', () => {
    cy.get('@invalidIcon').should('have.class', HIDDEN_CLASS);
  });

  it('leaves a valid icon visible and not hidden', () => {
    cy.get('@validIcon').should('not.have.class', HIDDEN_CLASS);
    cy.get('@validIcon').should('be.visible');
  });

  it('does not skeleton or hide a logo (css-mask) icon', () => {
    cy.get('@logoIcon').should('not.have.class', HIDDEN_CLASS);
    cy.get('@logoIcon').should('not.have.class', LOADING_CLASS);
  });

  it('keeps a valid ligature icon visible', () => {
    cy.get('#valid-ligature').should('not.have.class', HIDDEN_CLASS);
  });

  it('hides a ligature icon whose name does not resolve', () => {
    cy.get('#invalid-ligature').should('have.class', HIDDEN_CLASS);
  });

  it('removes the loading class once the font is ready', () => {
    cy.get('@validIcon').should('not.have.class', LOADING_CLASS);
  });

  it('enhances icons added to the DOM after load (MutationObserver)', () => {
    cy.get(ADD_ICON_BTN).click();
    cy.get(DYNAMIC_ICON).should('exist');
    cy.get(DYNAMIC_ICON).should('not.have.class', HIDDEN_CLASS);
  });
});
