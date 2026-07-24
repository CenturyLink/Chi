module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper.cjs')(page, scenario);

  await page.evaluate(() => document.fonts.ready);

  // Normalize the scroll position of chi time-picker columns right before
  // the screenshot. Applying this adjustment here, after the fonts wait and
  // right before capture, makes the captured scroll deterministic.
  await page.evaluate(() => {
    const SCROLL_ADJUSTMENT = 24;
    const columns = document.querySelectorAll(
      '.chi-time-picker__hours, .chi-time-picker__minutes, .chi-time-picker__seconds'
    );

    columns.forEach((column) => {
      const active = column.querySelector('.-active');

      if (active) {
        const activeRelativeTop =
          active.getBoundingClientRect().top -
          column.getBoundingClientRect().top +
          column.scrollTop;
        column.scrollTop = Math.max(0, activeRelativeTop - SCROLL_ADJUSTMENT);
      }
    });
  });

  // Let the adjustment paint before capturing.
  await page.evaluate(
    () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  );
};
