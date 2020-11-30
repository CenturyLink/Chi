import '@4tw/cypress-drag-drop';
describe('chi-rangeslider', function() {
  before(() => {
    cy.visit('http://localhost:8004/tests/js/rangeslider.html');
  });

  function check($element) {
    const rangeSliderParent = $element[0].parentNode;
    const inputWidth = rangeSliderParent.querySelector('input').clientWidth;
    var progressWidth = 0;

    var minVal = rangeSliderParent.querySelector('input').min;
    var maxVal = rangeSliderParent.querySelector('input').max;
     
    
    progressWidth = rangeSliderParent.querySelector(
      '.chi-input__progress'
    ).clientWidth;

    console.log("ProgressWidth" + progressWidth);
    console.log(minVal);
    console.log(maxVal);
    var x = 0;
    var currentValue = 0;
    if (minVal == '' && maxVal == '') {
      minVal = 0;
      maxVal = 100;
      currentValue = rangeSliderParent.querySelector('input').value;
      console.log("currntvalue" + currentValue);
      x = (currentValue - minVal) / (maxVal - minVal);
    } else {
      currentValue = rangeSliderParent.querySelector('input').value;
      x = (currentValue - minVal) / (maxVal - minVal);
    }

    const widthOfrangeSlider = inputWidth * x - (x - 0.5) * 1.25 * 16;
    console.log('RangleSliderWidth' + Math.round(widthOfrangeSlider));
    console.log(rangeSliderParent);
    console.log(inputWidth);
    console.log(progressWidth);
    expect(Math.round(widthOfrangeSlider)).to.equal(progressWidth);
  }

  describe('check for base range slider', () => {
    it('rangeslider', () => {
      cy.get('#baseRangeSlider')
        .as('range')
        .invoke('val', 60)
        .trigger('change')
        .then($element => {
          check($element);
        });
    });
  });

  describe('check for stepped range slider', () => {
    it('rangeslider', () => {
      [1,2,3,4].forEach(value => {
        cy.get('#steppedRangeSlider')
        .as('range')
        .invoke('val', value)
        .trigger('change')
        .wait(1000)
        .then($element => {
          check($element);
        });
      });
    });
  });
});
