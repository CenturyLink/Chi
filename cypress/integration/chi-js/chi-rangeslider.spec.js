import '@4tw/cypress-drag-drop'
describe('chi-rangeslider', function() {
  before(() => {
    cy.visit('http://localhost:8004/tests/js/chi-rangeslider.html');
  });

  describe('check for range slider', () => {
    it('rangeslider', () => {
      cy.get('#range01').should('have.attr', 'type', 'range');

      cy.get('#range01')
        .as('range')
        .invoke('val', 80)
        .trigger('change')
        .then(sometext => cy.log(sometext.val()));

      cy.get('#range01').should('have.value', '80');
    });
  });

  describe('check for range slider disabled', () => {
    it('rangeslider disabled', () => {
      cy.get('#range02').should('have.attr', 'disabled');
    });
  });

  describe('check for range slider multiple labels', () => {
    it('range slider multiple labels', () => {
      cy.get('#range03')
        .parent('div')
        .find('span')
        .should('have.class', '-text');
    });
  });
  describe('check for range slider with consistent rendering', () => {
    it('range slider multiple labels', () => {
      cy.get('#range04')
        .parent('div')
        .find('div')
        .should('have.class', 'chi-input__progress');
      cy.get('#range04')
        .parent('div')
        .find('div')
        .should('have.class', 'chi-input__thumb');
    });
  });
  describe('check for range slider with radio button', () => {
    it('range slider with radio button', () => {
      cy.get('#range07').should('have.attr', 'min');
      cy.get('#range07').should('have.attr', 'max');
      cy.get('#range07')
        .parent('div')
        .find('div')
        .should('have.class', 'chi-input__tick-bar');
      cy.get('#range07')
        .next()
        .find('div')
        .should('have.class', 'chi-input__tick')
        .find('div')
        .should('have.class', 'chi-input__tick-label');
    });
  });
});
