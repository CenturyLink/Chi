const CHI_CHECKBOX = 'chi-checkbox';
const CHI_RADIO_BUTTON = 'chi-radio-button';
const INPUT = 'input';
const INDETERMINATE_CLASS = '-indeterminate';

const checkSpyCheckedValues = (spy, call, values) => {
  expect(spy.getCall(call).args[0].detail.map((i) => i.checked)).to.deep.eq(values);
};

describe('Form wrapper', () => {
  before(() => {
    cy.visit('tests/custom-elements/form-wrapper.html');
  });

  describe('Checkboxes', () => {
    beforeEach(() => {
      cy.get(`[data-cy="checkboxes-inline"] ${CHI_CHECKBOX}`).as('checkboxes');
    });

    it('Should render all checkboxes with correct state in first load', () => {
      cy.get('@checkboxes').should('have.length', 4);
      cy.get('@checkboxes')
        .eq(0)
        .should('not.have.attr', 'checked');
      cy.get('@checkboxes')
        .eq(1)
        .should('have.attr', 'checked');
      cy.get('@checkboxes')
        .eq(2)
        .find(INPUT)
        .should('have.attr', 'disabled');
      cy.get('@checkboxes')
        .eq(3)
        .find(INPUT)
        .should('have.class', INDETERMINATE_CLASS);
    });

    it('Should emit event with form status', () => {
      cy.get(`[data-cy="checkboxes-inline"]`).as('formWrapper');

      const spyChange = cy.spy();

      cy.get('@formWrapper').then((el) => {
        el.on('chiChange', spyChange);
      });

      cy.get('@checkboxes')
        .eq(0)
        .click()
        .then(() => checkSpyCheckedValues(spyChange, 0, [true, true, false, 'indeterminate']));

      cy.get('@checkboxes')
        .eq(1)
        .click()
        .then(() => checkSpyCheckedValues(spyChange, 1, [true, false, false, 'indeterminate']));
    });
  });

  describe('Radios', () => {
    beforeEach(() => {
      cy.get(`[data-cy="radios-inline"] ${CHI_RADIO_BUTTON}`).as('radios');
    });

    it('Should render all radios with correct state in first load', () => {
      cy.get('@radios').should('have.length', 4);
      cy.get('@radios').each((el, index) => {
        cy.wrap(el).should(index === 1 ? 'have.attr' : 'not.have.attr', 'checked');
      });
    });

    it('Should emit event with form status', () => {
      cy.get(`[data-cy="radios-inline"]`).as('formWrapper');

      const spyChange = cy.spy();

      cy.get('@formWrapper').then((el) => {
        el.on('chiChange', spyChange);
      });

      cy.get('@radios')
        .eq(0)
        .click()
        .then(() => checkSpyCheckedValues(spyChange, 0, [true, false, false, false]));

      cy.get('@radios')
        .eq(1)
        .click()
        .then(() => checkSpyCheckedValues(spyChange, 0, [false, true, false, false]));
    });
  });
});
