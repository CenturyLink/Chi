const minutesStep = [1,5,10,15,20,30];

export const DATE_PICKER_MINUTES_STEP_VALUES = minutesStep.map( min => {
  return {
    el: `[data-cy="test-time-minutesStep-section-${min}"]`,
    picker: `[data-cy="test-time-minutesStep-picker-${min}"]`,
    minutes: min > 9 ? min.toString() : `0${min}`
  };
});