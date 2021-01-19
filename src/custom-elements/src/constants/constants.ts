export const CLASSES = {
  ACTIVE: '-active',
  ANIMATED: '-animated',
  CLOSED: '-closed',
  DISABLED: '-disabled',
  INACTIVE: '-inactive',
  TRANSITIONING : '-transitioning',
  TODAY: '-today'
};
export const RESPONSIVE_BREAKPOINTS =  {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
export const ANIMATION_DURATION = {
  SHORT: 200,
  MEDIUM: 500,
  LONG: 1000
};

export const ESCAPE_KEYCODE = '27';
export const TEXT_INPUT_TYPES = [
  'date',
  'datetime',
  'datetime-local',
  'email',
  'month',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week'
] as const;
export type TextInputTypes = typeof TEXT_INPUT_TYPES[number];

export const DATE_PICKER_MODES = ['date', 'datetime'];
export type DatePickerModes = typeof DATE_PICKER_MODES[number];

export const CHI_TIME_AUTO_SCROLL_DELAY = 50;
export const CHI_TIME_SCROLL_ADJUSTMENT = 28;

export const TIME_PICKER_FORMATS = ['12hours', '24hours'];
export type DatePickerFormats = typeof TIME_PICKER_FORMATS[number];

export const DATE_LOCALES = ['en', 'es', 'pt', 'fr', 'de', 'ja', 'zh'] as const;
export type DataLocales = typeof DATE_LOCALES[number];
