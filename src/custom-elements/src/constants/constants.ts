export const CLASSES = {
  ACTIVE: '-active',
  ANIMATED: '-animated',
  CLOSED: '-closed',
  DISABLED: '-disabled',
  INACTIVE: '-inactive',
  TRANSITIONING: '-transitioning',
  TODAY: '-today'
};
export const RESPONSIVE_BREAKPOINTS = {
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
export enum CAROUSEL_DIRECTION {
  NEXT = -1,
  PREVIOUS = 1
}

export const ESCAPE_KEYCODE = '27';
export const TEXT_INPUT_TYPES = [
  'date',
  'datetime',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week'
] as const;
export type TextInputTypes = typeof TEXT_INPUT_TYPES[number];

export const CAROUSEL_SWIPE_DELTA = 100;

export const DATE_PICKER_MODES = ['date', 'datetime'];
export type DatePickerModes = typeof DATE_PICKER_MODES[number];

export const DATE_LOCALES = ['en', 'es', 'pt', 'fr', 'de', 'ja', 'zh'] as const;
export type DataLocales = typeof DATE_LOCALES[number];

export const DATE_FORMATS = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD'] as const;
export type DateFormats = typeof DATE_FORMATS[number];

export const CHI_TIME_AUTO_SCROLL_DELAY = 50;
export const CHI_TIME_SCROLL_ADJUSTMENT = 24;

export const TIME_PICKER_FORMATS = ['12hr', '24hr'] as const;
export type TimePickerFormats = typeof TIME_PICKER_FORMATS[number];

export const TIME_PICKER_TIME_STEPS = [1,5,10,15,20,30] as const;
export type TimePickerTimeSteps = typeof TIME_PICKER_TIME_STEPS[number];

export type MouseCursorPosition = { x: number; y: number };

export const APP_LAYOUT_FORMATS = ['base', 'no-margin', 'fixed-width'];
export type AppLayoutFormats = typeof APP_LAYOUT_FORMATS[number];

export const TABS_SEE_MORE_DEFAULT_MESSAGE = 'More';

export const EXTRA_COUNTRIES = [
  { country: 'Serbia', country_code: 'RS' },
  { country: 'Montenegro', country_code: 'ME' }
];

export const EPANEL_TOOLTIP_CONTENT = 'Done';

export const COPY_MESSAGE = 'Copy to clipboard';
export const COPIED_MESSAGE = 'Copied to clipboard';
