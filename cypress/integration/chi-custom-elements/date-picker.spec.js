/// <reference types="Cypress" />

const clickDate = '11/14/2018';
const clickDate2 = '01/26/2019';
const thisMonthName = /November\s*2018/;
const nextMonthName = /December\s*2018/;
const dateObject = new Date();
const monthToReturn =
  (dateObject.getMonth() + 1).toString().length === 2
    ? (dateObject.getMonth() + 1).toString()
    : '0' + (dateObject.getMonth() + 1).toString();
const dayToReturn =
  dateObject.getDate().toString().length === 2
    ? dateObject.getDate().toString()
    : '0' + dateObject.getDate().toString();
const today =
  monthToReturn + '/' + dayToReturn + '/' + dateObject.getFullYear();

describe('Date picker', function() {
  beforeEach(() => {
    cy.visit('tests/custom-elements/date-picker.html');
  });

  it('Clicking on a day emits an event. ', function() {
    const spy = cy.spy();

    cy.get('[data-cy="test-active"]').then(el => {
      el.on('chiDateChange', spy);
    });

    cy.get('[data-cy="test-active"]')
      .find('chi-date')
      .should('have.class', 'hydrated')
      .find(`[data-date="${clickDate}"]`)
      .click()
      .then(() => {
        expect(spy).to.be.called;
        expect(spy.getCall(0).args[0].detail).to.equal(clickDate);
      });
  });

  it('Clicking on next month shows next month. ', function() {
    cy.get('[data-cy="test-active"]')
      .find('chi-date')
      .should('have.class', 'hydrated')
      .find('.chi-datepicker')
      .should('have.class', '-month-starts-on-thu')
      .find('.chi-datepicker__month')
      .contains(thisMonthName)
      .get('[data-cy="test-active"]')
      .find(`div.next`)
      .click()
      .get('[data-cy="test-active"]')
      .find('.chi-datepicker')
      .should('have.class', '-month-starts-on-sat')
      .find('.chi-datepicker__month')
      .contains(nextMonthName);
  });

  it('Date-picker should open on focus. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .scrollIntoView()
      .focus()
      .get('[data-cy="test-input-combined"]')
      .find('chi-popover[active]')
      .should('have.attr', 'active')
      .get('[data-cy="test-input-combined"]')
      .find('chi-popover[active]')
      .then(popover => {
        expect(popover[0].active).to.equal(true);
      });
  });

  it('Date-picker should not have popover when disabled is set to true.', function() {
    cy.get('[data-cy="test-disabled"]')
      .find('chi-popover')
      .should('not.exist');
  });

  it('Date-picker input should be disabled', function() {
    cy.get('[data-cy="test-disabled"]')
      .find('input')
      .should('have.disabled');
  });

  it('Date-picker should fill the input with the clicked date. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .scrollIntoView()
      .click()
      .focus()
      .get('[data-cy="test-input-combined"]')
      .find(`[data-date="${clickDate2}"]`)
      .click()
      .get('[data-cy="test-input-combined"] input')
      .should('have.value', clickDate2);
  });

  it('Date-picker should reset input value to Min if the introduced date is before the min date. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .clear()
      .type('01/01/1899')
      .trigger('change')
      .get('[data-cy="test-input-combined"] input')
      .should('have.value', '01/24/2019');
  });

  it('Date-picker should reset input value to Max if the introduced date is after the max date. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .clear()
      .type('12/31/2100')
      .trigger('change')
      .get('[data-cy="test-input-combined"] input')
      .should('have.value', '12/31/2099');
  });

  it('Date-picker should reset input value to Today if the introduced date is invalid. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .clear()
      .type('22/31/2099')
      .trigger('change')
      .get('[data-cy="test-input-combined-picker"]')
      .should('have.value', today);
  });

  it('Should render calendar with multiple active days when attribute' +
    ' multiple is present and more then one date is provided as value',
    function() {
    cy.get('[data-cy="test-multiple-selection"]')
      .find('[data-date="11/28/2018"], [data-date="11/29/2018"],' +
        '[data-date="11/30/2018"]')
      .each(($el) => {
        const classList = Array.from($el[0].classList);

        expect(classList).to.include('-active');
      });
  });

  it('Should select the clicked day',
    function() {
      cy.get('[data-cy="test-multiple-selection"]')
        .scrollIntoView()
        .wait(300)
        .find('[data-date="11/27/2018"]')
        .should('not.have.class', '-active')
        .click({force: true})
        .wait(300)
        .should('have.class', '-active');
    });

  it('Should deselect the active day when clicked',
    function() {
      cy.get('[data-cy="test-multiple-selection"]')
        .find('[data-date="11/28/2018"]')
        .click()
        .wait(300)
        .should('not.have.class', '-active');
    });

  it('Should render the calendar with the respective active dates ' +
    'when the user types new input value', function() {
    cy.get('[data-cy="test-multiple-picker"]')
      .find('input')
      .clear()
      .type('03/29/2021, 03/30/2021')
      .trigger('change')
      .wait(300)
      .get('[data-cy="test-multiple-picker-calendar"]')
      .should('have.value', '03/29/2021,03/30/2021')
      .find('[data-date="03/29/2021"], [data-date="03/30/2021"]')
      .each(($el) => {
        const classList = Array.from($el[0].classList);

        expect(classList).to.include('-active');
      });
  });

  it('Should accept only valid user inputs', function() {
    cy.get('[data-cy="test-multiple-picker"]')
      .find('input')
      .clear()
      .type('03/29/2021, 111/111/1111')
      .trigger('change')
      .wait(300)
      .get('[data-cy="test-multiple-picker-calendar"]')
      .should('have.value', '03/29/2021')
      .find('[data-date="03/29/2021"]')
      .should('have.class', '-active');
  });
});
