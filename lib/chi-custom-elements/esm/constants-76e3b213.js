const CLASSES = {
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
const ANIMATION_DURATION = {
    SHORT: 200,
    MEDIUM: 500,
    LONG: 1000,
};
var CAROUSEL_DIRECTION;
(function (CAROUSEL_DIRECTION) {
    CAROUSEL_DIRECTION[CAROUSEL_DIRECTION["NEXT"] = -1] = "NEXT";
    CAROUSEL_DIRECTION[CAROUSEL_DIRECTION["PREVIOUS"] = 1] = "PREVIOUS";
})(CAROUSEL_DIRECTION || (CAROUSEL_DIRECTION = {}));
const ESCAPE_KEYCODE = '27';
const TEXT_INPUT_TYPES = [
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
const CAROUSEL_SWIPE_DELTA = 100;
const CHI_TIME_AUTO_SCROLL_DELAY = 50;
const CHI_TIME_SCROLL_ADJUSTMENT = 24;
const TIME_PICKER_TIME_STEPS = [1, 5, 10, 15, 20, 30];
const APP_LAYOUT_FORMATS = ['base', 'no-margin', 'fixed-width'];
// #region FormWrapper
const FORM_WRAPPER_LAYOUTS = ['stacked', 'inline'];
const FORM_WRAPPER_TYPES = ['checkbox', 'radio'];
// #endregion
const TABS_SEE_MORE_DEFAULT_MESSAGE = 'More';
const EXTRA_COUNTRIES = [
    { country: 'Serbia', country_code: 'RS' },
    { country: 'Montenegro', country_code: 'ME' },
];
const EPANEL_TOOLTIP_CONTENT = 'Done';
const COPY_MESSAGE = 'Copy to clipboard';
const COPIED_MESSAGE = 'Copied to clipboard';
const MODAL_CONTENT_DEFAULT_MESSAGE = 'Modal Content';

export { ANIMATION_DURATION as A, CAROUSEL_SWIPE_DELTA as C, ESCAPE_KEYCODE as E, FORM_WRAPPER_LAYOUTS as F, MODAL_CONTENT_DEFAULT_MESSAGE as M, TABS_SEE_MORE_DEFAULT_MESSAGE as T, CAROUSEL_DIRECTION as a, CHI_TIME_AUTO_SCROLL_DELAY as b, CLASSES as c, EPANEL_TOOLTIP_CONTENT as d, FORM_WRAPPER_TYPES as e, APP_LAYOUT_FORMATS as f, EXTRA_COUNTRIES as g, TEXT_INPUT_TYPES as h, TIME_PICKER_TIME_STEPS as i, CHI_TIME_SCROLL_ADJUSTMENT as j, COPY_MESSAGE as k, COPIED_MESSAGE as l };
