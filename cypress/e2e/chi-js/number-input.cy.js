describe('chi-number-input', function () {
  before(() => {
    cy.visit('tests/js/number-input.html');
  });

  describe('Number Input should be rendered correctly', () => {
    beforeEach(() => {
      cy.get('#example-base').as('chiNumberInput');
      cy.get('#example-base-input').as('input');
      cy.get('@chiNumberInput').find('button[aria-label="Decrease"]').as('decrementButton');
      cy.get('@chiNumberInput').find('button[aria-label="Increase"]').as('incrementButton');
    });

    it(`Should be rendered input with chi-input class`, () => {
      cy.get('@input')
        .should('have.class', 'chi-input')
        .and('have.attr', 'type', 'number')
        .and('have.attr', 'min', '-3')
        .and('have.attr', 'max', '8')
        .and('have.attr', 'value', '0');
    });

    it('Should have increment and decrement buttons', () => {
      cy.get('@decrementButton').should('exist');
      cy.get('@incrementButton').should('exist');
    });
  });

  describe('Number Input functionalities should work correctly', () => {
    beforeEach(() => {
      cy.get('#example-base').as('chiNumberInput');
      cy.get('#example-base-input').as('input');
      cy.get('@chiNumberInput').find('button[aria-label="Decrease"]').as('decrementButton');
      cy.get('@chiNumberInput').find('button[aria-label="Increase"]').as('incrementButton');
    });

    it('Should increment value when clicking increment button', () => {
      cy.get('@input').should('have.value', '0');
      cy.get('@incrementButton').click();
      cy.get('@input').should('have.value', '1');
    });

    it('Should decrement value when clicking decrement button', () => {
      cy.get('@decrementButton').click();
      cy.get('@input').should('have.value', '0');
    });

    it('Should not exceed max value when incrementing with button', () => {
      for (let i = 0; i < 10; i++) {
        cy.get('@incrementButton').click({ force: true });
      }
      cy.get('@input').should('have.value', '8');
      cy.get('@incrementButton').should('be.disabled');
    });

    it('Should not go below min value when decrementing with button', () => {
      for (let i = 0; i < 12; i++) {
        cy.get('@decrementButton').click({ force: true });
      }
      cy.get('@input').should('have.value', '-3');
      cy.get('@decrementButton').should('be.disabled');
    });
  });

  describe('Number Input internal functions should work correctly', () => {
    it('Should call dispose on number-input and null out all internals', () => {
      cy.window()
        .its('numberInputBaseInstance')
        .then((inst) => {
          const incHandler = inst._increment;
          const decHandler = inst._decrement;
          const checkHandler = inst._check;

          const spyInc = cy.spy(inst._incrementButton, 'removeEventListener').as('spyInc');
          const spyDec = cy.spy(inst._decrementButton, 'removeEventListener').as('spyDec');
          const spyElem = cy.spy(inst._elem, 'removeEventListener').as('spyElem');

          inst.dispose();

          cy.get('@spyInc').should('have.been.calledWith', 'click', incHandler);
          cy.get('@spyDec').should('have.been.calledWith', 'click', decHandler);

          cy.get('@spyElem')
            .should('have.been.calledWith', 'keyup', checkHandler)
            .and('have.been.calledWith', 'change', checkHandler);

          expect(inst._config).to.be.null;
          expect(inst._elemWrapper).to.be.null;
          expect(inst._incrementButton).to.be.null;
          expect(inst._decrementButton).to.be.null;
          expect(inst._increment).to.be.null;
          expect(inst._decrement).to.be.null;
          expect(inst._stepped).to.be.null;
          expect(inst._elem).to.be.null;
        });
    });
  });
});
