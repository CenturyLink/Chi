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
