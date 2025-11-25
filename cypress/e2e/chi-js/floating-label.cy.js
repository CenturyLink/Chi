describe('Floating label', () => {
  before(() => {
    cy.visit('tests/lumen/js/floating-label.html');
  });

  const WRAPPER_SELECT = '#floating-label-select > select';
  const WRAPPER_INPUT  = '#floating-label-input > input';
  const BTN_DISPOSE_SELECT = '#dispose-select-button';
  const BTN_DISPOSE_INPUT  = '#dispose-input-button';
  const ACTIVE_CLASS = '-active';

  beforeEach(() => {
    cy.reload()

    cy.get(WRAPPER_SELECT).as('selectWrapper');
    cy.get(WRAPPER_INPUT).as('inputWrapper');
    cy.get(BTN_DISPOSE_SELECT).as('disposeSelectBtn');
    cy.get(BTN_DISPOSE_INPUT).as('disposeInputBtn');
  })

  it('should render', () => {
    cy.get('@selectWrapper').should('be.visible')
    cy.get('@inputWrapper').should('be.visible')
  })

  it('should keep label active when an option is selected', () => {
    const option = 'Option 1';
    cy.get('@selectWrapper').select(option);
    cy.get('@selectWrapper').should('have.value', option);
  });

  it('should keeps label active when input has text', () => {
    const text = 'Hello world';
    cy.get('@inputWrapper').type(text)
    cy.get('@inputWrapper').should('have.value', text).blur();
  });

  it('should be disposed', () => {
    cy.get('@disposeSelectBtn').click()
    cy.get('@disposeInputBtn').click()

    cy.get('@selectWrapper').select('Option 2');
    cy.get('@selectWrapper').should('not.have.attr', ACTIVE_CLASS);

    cy.get('@inputWrapper').type('Hello world')
    cy.get('@inputWrapper').should('not.have.attr', ACTIVE_CLASS);
    }
  )
});
