'use strict';

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
exports.CAROUSEL_DIRECTION = void 0;
(function (CAROUSEL_DIRECTION) {
    CAROUSEL_DIRECTION[CAROUSEL_DIRECTION["NEXT"] = -1] = "NEXT";
    CAROUSEL_DIRECTION[CAROUSEL_DIRECTION["PREVIOUS"] = 1] = "PREVIOUS";
})(exports.CAROUSEL_DIRECTION || (exports.CAROUSEL_DIRECTION = {}));
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

exports.ANIMATION_DURATION = ANIMATION_DURATION;
exports.APP_LAYOUT_FORMATS = APP_LAYOUT_FORMATS;
exports.CAROUSEL_SWIPE_DELTA = CAROUSEL_SWIPE_DELTA;
exports.CHI_TIME_AUTO_SCROLL_DELAY = CHI_TIME_AUTO_SCROLL_DELAY;
exports.CHI_TIME_SCROLL_ADJUSTMENT = CHI_TIME_SCROLL_ADJUSTMENT;
exports.CLASSES = CLASSES;
exports.COPIED_MESSAGE = COPIED_MESSAGE;
exports.COPY_MESSAGE = COPY_MESSAGE;
exports.EPANEL_TOOLTIP_CONTENT = EPANEL_TOOLTIP_CONTENT;
exports.ESCAPE_KEYCODE = ESCAPE_KEYCODE;
exports.EXTRA_COUNTRIES = EXTRA_COUNTRIES;
exports.FORM_WRAPPER_LAYOUTS = FORM_WRAPPER_LAYOUTS;
exports.FORM_WRAPPER_TYPES = FORM_WRAPPER_TYPES;
exports.MODAL_CONTENT_DEFAULT_MESSAGE = MODAL_CONTENT_DEFAULT_MESSAGE;
exports.TABS_SEE_MORE_DEFAULT_MESSAGE = TABS_SEE_MORE_DEFAULT_MESSAGE;
exports.TEXT_INPUT_TYPES = TEXT_INPUT_TYPES;
exports.TIME_PICKER_TIME_STEPS = TIME_PICKER_TIME_STEPS;
