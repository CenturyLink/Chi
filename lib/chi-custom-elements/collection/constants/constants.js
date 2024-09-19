export const CLASSES = {
    ACTIVE: '-active',
    ANIMATED: '-animated',
    CLOSED: '-closed',
    DISABLED: '-disabled',
    INACTIVE: '-inactive',
    TRANSITIONING: '-transitioning',
    TODAY: '-today',
    FLEX: '-d--flex',
    ALIGN_ITEMS_CENTER: '-align-items--center',
};
export const RESPONSIVE_BREAKPOINTS = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};
export const ANIMATION_DURATION = {
    SHORT: 200,
    MEDIUM: 500,
    LONG: 1000,
};
export var CAROUSEL_DIRECTION;
(function (CAROUSEL_DIRECTION) {
    CAROUSEL_DIRECTION[CAROUSEL_DIRECTION["NEXT"] = -1] = "NEXT";
    CAROUSEL_DIRECTION[CAROUSEL_DIRECTION["PREVIOUS"] = 1] = "PREVIOUS";
})(CAROUSEL_DIRECTION || (CAROUSEL_DIRECTION = {}));
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
    'week',
];
export const CAROUSEL_SWIPE_DELTA = 100;
export const DATE_PICKER_MODES = ['date', 'datetime'];
export const DATE_LOCALES = ['en', 'es', 'pt', 'fr', 'de', 'ja', 'zh'];
export const DATE_FORMATS = [
    'MM/DD/YYYY',
    'DD/MM/YYYY',
    'YYYY/MM/DD',
    'MM-DD-YYYY',
    'DD-MM-YYYY',
    'YYYY-MM-DD',
];
export const CHI_TIME_AUTO_SCROLL_DELAY = 50;
export const CHI_TIME_SCROLL_ADJUSTMENT = 24;
export const TIME_PICKER_FORMATS = ['12hr', '24hr'];
export const TIME_PICKER_TIME_STEPS = [1, 5, 10, 15, 20, 30];
export const APP_LAYOUT_FORMATS = ['base', 'no-margin', 'fixed-width'];
// #region FormWrapper
export const FORM_WRAPPER_LAYOUTS = ['stacked', 'inline'];
export const FORM_WRAPPER_TYPES = ['checkbox', 'radio'];
// #endregion
export const TABS_SEE_MORE_DEFAULT_MESSAGE = 'More';
export const EXTRA_COUNTRIES = [
    { country: 'Serbia', country_code: 'RS' },
    { country: 'Montenegro', country_code: 'ME' },
];
export const EPANEL_TOOLTIP_CONTENT = 'Done';
export const COPY_MESSAGE = 'Copy to clipboard';
export const COPIED_MESSAGE = 'Copied to clipboard';
