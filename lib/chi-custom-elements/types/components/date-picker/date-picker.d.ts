import { EventEmitter } from '../../stencil-public-runtime';
import { DataLocales, DatePickerModes, DateFormats, TimePickerFormats, TimePickerTimeSteps } from '../../constants/constants';
import { Dayjs } from 'dayjs';
import { ChiStates } from '../../constants/states';
import { Time } from '../../constants/types';
export declare class DatePicker {
    /**
     * Selected date in the date picker
     */
    value: string;
    /**
     * Locale to use in date picker
     */
    locale: DataLocales;
    /**
     * Minimum eligible date
     */
    min: string;
    /**
     * Maximum eligible date
     */
    max: string;
    /**
     * Date format used in the attributes and how it will be shown to the user.
     */
    format: DateFormats;
    /**
     *  to disable chi-date-picker.
     */
    disabled: boolean;
    /**
     * Indicates whether the dropdown calendar is open or closed
     */
    active: boolean;
    /**
     * To specify which days of week to disable
     */
    excludedWeekdays: string;
    /**
     * To specify which dates to disable
     */
    excludedDates: string;
    /**
     * To render Date Picker with Time Picker
     */
    mode: DatePickerModes;
    /**
     * To allow the user to select multiple dates
     */
    multiple: boolean;
    /**
     * To define state color of Date Picker
     */
    state?: ChiStates;
    /**
     * To display an additional helper text message below the Date Picker
     */
    helperMessage?: string;
    /**
     * To specify format for the Time Picker. Applicable only if mode is equal to 'datetime'
     */
    timeFormat?: TimePickerFormats;
    /**
     * Renders minutes in stepped format. Defaults to 15 min steps if no value
     * is provided (see examples in docs).
     */
    minutesStep?: TimePickerTimeSteps;
    /**
     * Date change value event
     */
    eventChange: EventEmitter;
    /**
     * Triggered if the date value introduced by the user is invalid
     */
    eventInvalid: EventEmitter;
    el: HTMLElement;
    private _input;
    private _uuid;
    excludedWeekdaysArray: any[];
    excludedDatesArray: any[];
    time: Time | undefined;
    stateValidation(newValue: ChiStates): void;
    updateExcludedDates(): void;
    updateExcludedWeekdays(): void;
    _onFocusIn(e: any): void;
    _onClick(e: any): void;
    _isEscapeKey(e: KeyboardEvent): boolean;
    _onKeyUp(e: KeyboardEvent): void;
    checkIfExcluded(day: Dayjs): boolean;
    _checkValidDate(date: any, minDate: any, maxDate: any): boolean;
    _checkMultipleDates(minDate: any, maxDate: any): void;
    _checkSingleDate(minDate: any, maxDate: any): void;
    _checkDate(): void;
    /**
     * Sets date
     */
    setDate(date: any): Promise<void>;
    /**
     * Resets date
     */
    resetDate(): Promise<void>;
    /**
     * Gets date
     */
    getDate(): Promise<string>;
    handlePopoverOpen(ev: CustomEvent): void;
    handleDateChange(ev: CustomEvent): void;
    handleTimeChange(ev: CustomEvent): void;
    formatTime(time: Time): string;
    formatTimePeriod(period: number): string;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    _getChiDateValue(): string;
    render(): any[];
}
