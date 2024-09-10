export declare const CLASSES: {
    ACTIVE: string;
    ANIMATED: string;
    CLOSED: string;
    DISABLED: string;
    INACTIVE: string;
    TRANSITIONING: string;
    TODAY: string;
    FLEX: string;
    ALIGN_ITEMS_CENTER: string;
};
export declare const RESPONSIVE_BREAKPOINTS: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export declare const ANIMATION_DURATION: {
    SHORT: number;
    MEDIUM: number;
    LONG: number;
};
export declare enum CAROUSEL_DIRECTION {
    NEXT = -1,
    PREVIOUS = 1
}
export declare const ESCAPE_KEYCODE = "27";
export declare const TEXT_INPUT_TYPES: readonly ["date", "datetime", "datetime-local", "email", "month", "number", "password", "search", "tel", "text", "time", "url", "week"];
export type TextInputTypes = typeof TEXT_INPUT_TYPES[number];
export declare const CAROUSEL_SWIPE_DELTA = 100;
export declare const DATE_PICKER_MODES: string[];
export type DatePickerModes = typeof DATE_PICKER_MODES[number];
export declare const DATE_LOCALES: readonly ["en", "es", "pt", "fr", "de", "ja", "zh"];
export type DataLocales = typeof DATE_LOCALES[number];
export declare const DATE_FORMATS: readonly ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY/MM/DD", "MM-DD-YYYY", "DD-MM-YYYY", "YYYY-MM-DD"];
export type DateFormats = typeof DATE_FORMATS[number];
export declare const CHI_TIME_AUTO_SCROLL_DELAY = 50;
export declare const CHI_TIME_SCROLL_ADJUSTMENT = 24;
export declare const TIME_PICKER_FORMATS: readonly ["12hr", "24hr"];
export type TimePickerFormats = typeof TIME_PICKER_FORMATS[number];
export declare const TIME_PICKER_TIME_STEPS: readonly [1, 5, 10, 15, 20, 30];
export type TimePickerTimeSteps = typeof TIME_PICKER_TIME_STEPS[number];
export type MouseCursorPosition = {
    x: number;
    y: number;
};
export declare const APP_LAYOUT_FORMATS: string[];
export type AppLayoutFormats = typeof APP_LAYOUT_FORMATS[number];
export declare const FORM_WRAPPER_LAYOUTS: string[];
export type FormWrapperLayouts = typeof FORM_WRAPPER_LAYOUTS[number];
export declare const FORM_WRAPPER_TYPES: string[];
export type FormWrapperTypes = typeof FORM_WRAPPER_TYPES[number];
export declare const TABS_SEE_MORE_DEFAULT_MESSAGE = "More";
export declare const EXTRA_COUNTRIES: {
    country: string;
    country_code: string;
}[];
export declare const EPANEL_TOOLTIP_CONTENT = "Done";
export declare const COPY_MESSAGE = "Copy to clipboard";
export declare const COPIED_MESSAGE = "Copied to clipboard";
