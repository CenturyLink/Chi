function calculateRangeProgress(element) {
  const rangeSliderParent = element.parentNode;
  const inputWidth = rangeSliderParent.querySelector('input').clientWidth;
  const progressWidth = rangeSliderParent.querySelector('.chi-input__progress')
    .clientWidth;
  const minVal = rangeSliderParent.querySelector('input').getAttribute('min');
  const maxVal = rangeSliderParent.querySelector('input').getAttribute('max');
  const currentValue = rangeSliderParent.querySelector('input').value;
  const x = !minVal && !maxVal ? currentValue / 100 : (currentValue - minVal) / (maxVal - minVal);
  const progress = inputWidth * x - (x - 0.5) * 1.25 * 16;
  const thumb = rangeSliderParent.querySelector('.chi-input__thumb');
  const thumbLeft = parseInt(window.getComputedStyle(thumb).left);

  expect(Math.round(progressWidth)).to.equal(progress);
  expect(Math.round(thumbLeft)).to.equal(progress);
}

describe('Range Slider', () => {
  before(() => {
    cy.visit('tests/js/range-slider.html');
  });

  it('Base Range Slider', () => {
    cy.get('#baseRangeSlider')
    .invoke('val', 60)
    .trigger('change')
    .then($element => {
      calculateRangeProgress($element[0]);
    });
  });

  it('Stepped Range Slider', () => {
    [1, 2, 3, 4].forEach(value => {
      cy.get('#steppedRangeSlider')
      .invoke('val', value)
      .trigger('change')
      .wait(50)
      .then($element => {
        calculateRangeProgress($element[0]);
      });
    });
  });
});
