'use strict';

const index = require('./index-76a8e987.js');

/**
 * Generates a mutation handler that executes the provided custom handler and forces render
 * @param handler custom function to execute on mutation
 * @param forceRender forces re-rendering of the element
 * @param element element to re-render
 * @returns Function
 */
const getMutationHandler = (handler, forceRender, element) => (mutations, observer) => {
    if (handler) {
        handler(mutations, observer);
    }
    if (forceRender) {
        index.forceUpdate(element);
    }
};
/**
 * Adds the mutation observer disconnect to the element's disconnected callback method
 * @param disconnectedCallback
 * @param mutationObserver
 * @returns
 */
const addMutationObserverDisconnect = (disconnectedCallback = () => { }, mutationObserver) => () => {
    disconnectedCallback();
    mutationObserver.disconnect();
};
/**
 * Adds a mutation observer to the context of where the function is called from.
 * By default, reacts to child-list and forces re-rendering of the element. The function accepts:
 * @param customMutationHandler function to execute when there is a mutation
 * @param config defaults to react to childList
 * @param forceRender forces re-rendering of the element when there is a mutation
 * @example connectedCallback() {
 *  customMutationHandler.call(this, () => doSomething()), config, true);
 * }
 */
function addMutationObserver(customMutationHandler = () => { }, config = { childList: true }, forceRender = true) {
    var _a;
    if (!(this.el instanceof HTMLElement)) {
        throw new Error('Mutation observer needs this.el to be defined as the HTMLElement. ' +
            `To resolve this issue, add '@Element() el: HTMLElement;' in the component.`);
    }
    const disconnectedCallback = (_a = this.disconnectedCallback) === null || _a === void 0 ? void 0 : _a.bind(this);
    const mutationObserver = new MutationObserver(getMutationHandler(customMutationHandler.bind(this), forceRender, this.el));
    mutationObserver.observe(this.el, config);
    this.disconnectedCallback = addMutationObserverDisconnect(disconnectedCallback, mutationObserver);
}

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
exports.TABS_SEE_MORE_DEFAULT_MESSAGE = TABS_SEE_MORE_DEFAULT_MESSAGE;
exports.TEXT_INPUT_TYPES = TEXT_INPUT_TYPES;
exports.TIME_PICKER_TIME_STEPS = TIME_PICKER_TIME_STEPS;
exports.addMutationObserver = addMutationObserver;
