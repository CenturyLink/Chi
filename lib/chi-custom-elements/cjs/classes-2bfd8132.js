'use strict';

//#region Common
const ACTIVE_CLASS = '-active';
const INACTIVE_CLASS = '-inactive';
const CENTER_CLASS = '-center';
const CENTERED_CLASS = '-centered';
const CLOSED_CLASS = '-closed';
const LIGHT_CLASS = '-light';
const DISABLED_CLASS = '-disabled';
const FLUID_CLASS = '-fluid';
const INVERSE_CLASS = '-inverse';
const ANIMATE_CLASS = '-animate';
const ANIMATED_CLASS = '-animated';
const TRANSITIONING_CLASS = '-transitioning';
const SR_ONLY = '-sr--only';
const EXPANDED_CLASS = '-expanded';
const LIST_CLASS = '-list';
const STATUS_CLASS = '-status';
const TRUNCATED_CLASS = '-truncated';
const CARD_CLASS = '-card';
const ROW_CLASS = '-row';
const PILL_CLASS = '-pill';
const SQUARE_CLASS = '-square';
const CIRCLE_CLASS = '-circle';
const ROUNDED_CLASS = '-rounded';
const NO_BORDER_CLASS = '-no-border';
//#endregion
//#region Accordion
const ACCORDION_CLASSES = {
    ACCORDION: 'chi-accordion',
    LINK: 'chi-accordion__link',
    CONTENT: 'chi-accordion__content',
    ITEM: 'chi-accordion__item',
    TRIGGER: 'chi-accordion__trigger',
    TRIGGER_LINK: 'chi-accordion__trigger-link',
    TITLE: 'chi-accordion__title',
    TEXT: 'chi-accordion__text',
};
//#endregion
//#region Backdrop
const BACKDROP_CLASSES = {
    BACKDROP: 'chi-backdrop',
    WRAPPER: 'chi-backdrop__wrapper',
};
//#endregion
//#region Button
const BUTTON_CLASSES = {
    BUTTON: 'chi-button',
    BG_NONE: '-bg--none',
    ICON_BUTTON: '-icon',
    CONTENT: 'chi-button__content',
    FLAT: '-flat',
    NO_HOVER: '-no-hover',
    PRIMARY: '-primary',
    OUTLINE: '-outline',
    SIZES: {
        XS: '-xs',
        SM: '-sm',
        MD: '-md',
        LG: '-lg',
        XL: '-xl',
    },
};
//#endregion
//#region Carousel
const CAROUSEL_CLASSES = {
    CAROUSEL: 'chi-carousel',
    ITEM: 'chi-carousel__item',
    CONTENT: 'chi-carousel__content',
    WRAPPER: 'chi-carousel__wrapper',
    CONTROL: 'chi-carousel__control',
    PREVIOUS: '-previous',
    NEXT: '-next',
    DOTS: 'chi-carousel__dots',
    DOTS_ADDITION: '-dots',
    PAGINATION_ADDITION: '-pagination',
    DOT: 'chi-carousel__dot',
    PAGINATION: 'chi-carousel__pagination',
};
//#endregion
//#region Stat
const STAT_CLASSES = {
    STAT: 'chi-stat',
    ITEM: 'chi-stat__item',
};
//#endregion
//#region Dropdown
const DROPDOWN_CLASSES = {
    DROPDOWN: 'chi-dropdown',
    TRIGGER: 'chi-dropdown__trigger',
    ICON: 'chi-dropdown__icon',
    MENU: 'chi-dropdown__menu',
    MENU_CONTENT: 'chi-dropdown__menu-content',
    MENU_ITEM: 'chi-dropdown__menu-item',
    MENU_ITEMS_WRAPPER: 'chi-dropdown__menu-items-wrapper',
    MENU_HEADER: 'chi-dropdown__menu-header',
    MENU_FOOTER: 'chi-dropdown__menu-footer',
    SELECT_MODE: 'chi-dropdown__select-mode',
};
//#endregion
//#region Checkbox
const CHECKBOX_CLASSES = {
    checkbox: 'chi-checkbox',
    INPUT: 'chi-checkbox__input',
    LABEL: 'chi-checkbox__label',
    INDETERMINATE: '-indeterminate',
};
//#endregion
//#region Grid
const GRID_CLASSES = {
    GRID: 'chi-grid',
    COL: 'chi-col',
    NO_GUTTER: '-no-gutter',
};
//#endregion
//#region Divider
const DIVIDER_CLASSES = {
    DIVIDER: 'chi-divider',
    VERTICAL: '-vertical',
};
//#endregion
//#region Radio
const RADIO_CLASSES = {
    RADIO: 'chi-radio',
    INPUT: 'chi-radio__input',
    LABEL: 'chi-radio__label',
};
//#endregion
//#region Form
const FORM_CLASSES = {
    FORM_ITEM: 'chi-form__item',
    LABEL: 'chi-label',
};
//#endregion
//#region FormWrapper
const FORM_WRAPPER_CLASSES = {
    LAYOUTS: {
        INLINE: '-inline',
        STACKED: '-stacked',
    },
};
//#endregion
//#region Form
const MODAL_CLASSES = {
    FOOTER: 'chi-modal__footer',
    MODAL: 'chi-modal',
    HEADER: 'chi-modal__header',
    CONTENT: 'chi-modal__content',
    TITLE: 'chi-modal__title',
    SUBTITLE: 'chi-modal__subtitle',
    TRIGGER: 'chi-modal__trigger',
    BACK: 'chi-modal__back',
};
//#endregion
//#region Generic
const GENERIC_SIZE_CLASSES = {
    XS: '-xs',
    SM: '-sm',
    MD: '-md',
    LG: '-lg',
    XL: '-xl',
    SM_2: '-sm--2',
    SM_3: '-sm--3',
};
//#endregion
//#region Icon
const ICON_CLASS = 'chi-icon';
const ICONS = {
    SUCCESS: '-icon--success',
    DANGER: '-icon--danger',
};
//#endregion
//#region Input
const INPUT_CLASSES = {
    INPUT: 'chi-input',
    WRAPPER: 'chi-input__wrapper',
    ICON: {
        RIGHT: '-icon--right',
    },
};
//#endregion
//#region Tooltip
const TOOLTIP_CLASSES = {
    ELEMENT: 'chi-tooltip',
    WRAPPER: 'chi-tooltip__wrapper',
    MESSAGE: 'chi-tooltip__message',
};
//#endregion
//#region Time
const TIME_CLASSES = {
    TIME: 'chi-time-picker',
    CONTENT: 'chi-time-picker__content',
    HOURS: 'chi-time-picker__hours',
    HOUR: 'chi-time-picker__hour',
    MINUTES: 'chi-time-picker__minutes',
    MINUTE: 'chi-time-picker__minute',
    SECONDS: 'chi-time-picker__seconds',
    SECOND: 'chi-time-picker__second',
    PERIODS: 'chi-time-picker__periods',
    PERIOD: 'chi-time-picker__period',
};
//#endregion
//#region Phone Input
const PHONE_INPUT_CLASSES = {
    PHONE_INPUT: 'chi-phone-input',
    CODE: 'chi-phone-input__code',
};
//#endregion
//#region Popover
const POPOVER_CLASSES = {
    ARROW: 'chi-popover__arrow',
    CLOSABLE: '-closable',
    CONTENT: 'chi-popover__content',
    DRAGGABLE: '-draggable',
    FOOTER: 'chi-popover__footer',
    HEADER: 'chi-popover__header',
    INPUT: 'chi-popover__input',
    MODAL: '-modal',
    NO_ARROW: '-no-arrow',
    POPOVER: 'chi-popover',
    TEXT: 'chi-popover__text',
    TITLE: 'chi-popover__title',
};
//#endregion
//#region Price
const PRICE_CLASSES = {
    PRICE: 'chi-price',
};
//#endregion
//#region Skeleton
const SKELETON_CLASSES = {
    SKELETON: 'chi-skeleton',
};
//#endregion
//#region Tabs
const TABS_CLASSES = {
    TABS: 'chi-tabs',
    ANIMATE: '-animated',
    BORDER: '-border',
    PANEL: 'chi-tabs-panel',
    SLIDING: '-sliding',
    SLIDING_BORDER: 'chi-sliding-border',
    SOLID: '-solid',
    TRIGGER: 'chi-tabs__trigger',
    SHOW_MORE: 'chi-tabs__show-more',
    VERTICAL: '-vertical',
};
//#endregion
//#region Utility Classes
const UTILITY_CLASSES = {
    Z_INDEX: {
        Z_10: '-z--10',
        Z_30: '-z--30',
        Z_40: '-z--40',
    },
    ALIGN_ITEMS: {
        CENTER: '-align-items--center',
        START: '-align-items--start',
    },
    ALIGN_SELF: {
        CENTER: '-align-self--center',
        LEFT: '-align-self--left',
    },
    DISPLAY: {
        FLEX: '-d--flex',
        SCREEN_ONLY: '-d-screen--only',
        PRINT_ONLY: '-d-print--only',
        BLOCK: '-d--block',
        INLINE_BLOCK: '-d--inline-block',
    },
    FLEX: {
        FLEX_GROW1: '-flex--grow1',
        COLUMN: '-flex--column',
    },
    JUSTIFY: {
        CENTER: '-justify-content--center',
        BETWEEN: '-justify-content--between',
        END: '-justify-content--end',
        MD_START: '-justify-content-md--start',
        MD_CENTER: '-justify-content-md--center',
        MD_END: '-justify-content-md--end',
    },
    TYPOGRAPHY: {
        TEXT: '-text',
        TEXT_TRUNCATE: '-text--truncate',
        TEXT_CENTER: '-text--center',
        TEXT_NORMAL: '-text--normal',
        TEXT_BOLD: '-text--bold',
        TEXT_BOLDER: '-text--bolder',
        TEXT_H3: '-text--h3',
    },
    POSITION: {
        RELATIVE: '-position--relative',
        ABSOLUTE: '-position--absolute',
    },
    SIZING: {
        W100: '-w--100',
        WSM65: '-w-sm--65',
        MAX_H400: '-mh--400',
        MAX_H480: '-mh--480',
    },
    PADDING: {
        1: '-p--1',
        2: '-p--2',
        3: '-p--3',
        4: '-p--4',
        5: '-p--5',
        6: '-p--6',
        X: {
            0: '-px--0',
            1: '-px--1',
            2: '-px--2',
            3: '-px--3',
            4: '-px--4',
        },
        Y: {
            1: '-py--1',
            2: '-py--2',
            3: '-py--3',
            4: '-py--4',
        },
        LEFT: {
            1: '-pl--1',
            2: '-pl--2',
            3: '-pl--3',
            4: '-pl--4',
            5: '-pl--5',
            6: '-pl--6',
        },
        RIGHT: {
            1: '-pr--1',
            2: '-pr--2',
            3: '-pr--3',
            4: '-pr--4',
        },
        TOP: {
            1: '-pt--1',
            2: '-pt--2',
            3: '-pt--3',
            4: '-pt--4',
        },
        BOTTOM: {
            1: '-pb--1',
            2: '-pb--2',
            3: '-pb--3',
            4: '-pb--4',
        },
    },
    MARGIN: {
        0: '-m--0',
        1: '-m--1',
        2: '-m--2',
        3: '-m--3',
        4: '-m--4',
        X: {
            1: '-mx--1',
            2: '-mx--2',
            3: '-mx--3',
            4: '-mx--4',
        },
        Y: {
            1: '-my--1',
            2: '-my--2',
            3: '-my--3',
            4: '-my--4',
        },
        LEFT: {
            0: '-ml--0',
            1: '-ml--1',
            2: '-ml--2',
            3: '-ml--3',
            4: '-ml--4',
        },
        RIGHT: {
            0: '-mr--0',
            1: '-mr--1',
            2: '-mr--2',
            3: '-mr--3',
            4: '-mr--4',
        },
        TOP: {
            1: '-mt--1',
            2: '-mt--2',
            3: '-mt--3',
            4: '-mt--4',
        },
        BOTTOM: {
            1: '-mb--1',
            2: '-mb--2',
            3: '-mb--3',
            4: '-mb--4',
        },
    },
};
//#endregion
//#region Expansion Panel
const EPANEL_CLASSES = {
    ACTIVE_ONLY: '-active--only',
    ACTION: 'chi-epanel__action',
    BODY: 'chi-epanel__body',
    BORDERED: '-bordered',
    COLLAPSE: 'chi-epanel__collapse',
    CONTENT: 'chi-epanel__content',
    DONE_ONLY: '-done--only',
    EPANEL: 'chi-epanel',
    FOOTER: 'chi-epanel__footer',
    HEADER: 'chi-epanel__header',
    NUMBER: 'chi-epanel__number',
    TITLE: 'chi-epanel__title',
    STATE_ICON: '-state-icon',
    STATE: '-state',
};
//#endregion
//#region Form
const DATEPICKER_CLASSES = {
    DATEPICKER: 'chi-datepicker',
    DAY: 'chi-datepicker__day',
    DAY_NAMES: 'chi-datepicker__day-names',
    DAYS: 'chi-datepicker__days',
    WEEK_DAY: 'chi-datepicker__week-day',
    MONTH: 'chi-datepicker__month',
    MONTH_ROW: 'chi-datepicker__month-row',
    PREV_MONTH: 'prev',
    NEXT_MONTH: 'next',
};
//#endregion
//#region Label
const LABEL_CLASSES = {
    LABEL: 'chi-label',
    HELP: 'chi-label__help',
    REQUIRED: 'chi-label__required',
    OPTIONAL: 'chi-label__optional',
};
//#endregion
//#region Picker
const PICKER_CLASSES = {
    PICKER: 'chi-picker',
    INPUT: 'chi-picker__input',
    CHECKBOX: 'chi-picker__checkbox',
    LABEL: 'chi-picker__label',
    DESCRIPTION: 'chi-picker__description',
    CONTENT: 'chi-picker__content',
    CONTENT_START: 'chi-picker__content--start',
    CONTENT_END: 'chi-picker__content--end',
    CONTENT_CUSTOM: 'chi-picker__content--custom',
    RADIO: 'chi-picker__radio',
};
//#endregion
// #region Tags
const TAGS_CLASSES = {
    TAGS: 'chi-tags',
    TAG: 'chi-tag',
    INPUT: 'chi-tags__input',
};
// #endregion

exports.ACCORDION_CLASSES = ACCORDION_CLASSES;
exports.ACTIVE_CLASS = ACTIVE_CLASS;
exports.ANIMATED_CLASS = ANIMATED_CLASS;
exports.ANIMATE_CLASS = ANIMATE_CLASS;
exports.BACKDROP_CLASSES = BACKDROP_CLASSES;
exports.BUTTON_CLASSES = BUTTON_CLASSES;
exports.CARD_CLASS = CARD_CLASS;
exports.CAROUSEL_CLASSES = CAROUSEL_CLASSES;
exports.CENTERED_CLASS = CENTERED_CLASS;
exports.CENTER_CLASS = CENTER_CLASS;
exports.CHECKBOX_CLASSES = CHECKBOX_CLASSES;
exports.CIRCLE_CLASS = CIRCLE_CLASS;
exports.CLOSED_CLASS = CLOSED_CLASS;
exports.DATEPICKER_CLASSES = DATEPICKER_CLASSES;
exports.DISABLED_CLASS = DISABLED_CLASS;
exports.DIVIDER_CLASSES = DIVIDER_CLASSES;
exports.DROPDOWN_CLASSES = DROPDOWN_CLASSES;
exports.EPANEL_CLASSES = EPANEL_CLASSES;
exports.EXPANDED_CLASS = EXPANDED_CLASS;
exports.FLUID_CLASS = FLUID_CLASS;
exports.FORM_CLASSES = FORM_CLASSES;
exports.FORM_WRAPPER_CLASSES = FORM_WRAPPER_CLASSES;
exports.GENERIC_SIZE_CLASSES = GENERIC_SIZE_CLASSES;
exports.GRID_CLASSES = GRID_CLASSES;
exports.ICONS = ICONS;
exports.ICON_CLASS = ICON_CLASS;
exports.INACTIVE_CLASS = INACTIVE_CLASS;
exports.INPUT_CLASSES = INPUT_CLASSES;
exports.INVERSE_CLASS = INVERSE_CLASS;
exports.LABEL_CLASSES = LABEL_CLASSES;
exports.LIGHT_CLASS = LIGHT_CLASS;
exports.LIST_CLASS = LIST_CLASS;
exports.MODAL_CLASSES = MODAL_CLASSES;
exports.NO_BORDER_CLASS = NO_BORDER_CLASS;
exports.PHONE_INPUT_CLASSES = PHONE_INPUT_CLASSES;
exports.PICKER_CLASSES = PICKER_CLASSES;
exports.PILL_CLASS = PILL_CLASS;
exports.POPOVER_CLASSES = POPOVER_CLASSES;
exports.PRICE_CLASSES = PRICE_CLASSES;
exports.RADIO_CLASSES = RADIO_CLASSES;
exports.ROUNDED_CLASS = ROUNDED_CLASS;
exports.ROW_CLASS = ROW_CLASS;
exports.SKELETON_CLASSES = SKELETON_CLASSES;
exports.SQUARE_CLASS = SQUARE_CLASS;
exports.SR_ONLY = SR_ONLY;
exports.STATUS_CLASS = STATUS_CLASS;
exports.STAT_CLASSES = STAT_CLASSES;
exports.TABS_CLASSES = TABS_CLASSES;
exports.TAGS_CLASSES = TAGS_CLASSES;
exports.TIME_CLASSES = TIME_CLASSES;
exports.TOOLTIP_CLASSES = TOOLTIP_CLASSES;
exports.TRANSITIONING_CLASS = TRANSITIONING_CLASS;
exports.TRUNCATED_CLASS = TRUNCATED_CLASS;
exports.UTILITY_CLASSES = UTILITY_CLASSES;
