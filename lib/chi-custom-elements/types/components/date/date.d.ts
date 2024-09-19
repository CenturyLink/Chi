import { EventEmitter } from '../../stencil-public-runtime';
import dayjs, { Dayjs } from 'dayjs';
import { DataLocales, DateFormats } from '../../constants/constants';
import 'dayjs/locale/es';
import 'dayjs/locale/pt';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import 'dayjs/locale/ja';
import 'dayjs/locale/zh';
export declare class Date {
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
     * To specify which days of week to disable
     */
    excludedWeekdays: string;
    /**
     * To specify which dates to disable
     */
    excludedDates: string;
    /**
     * To allow the user to select multiple dates
     */
    multiple: boolean;
    viewMonth: dayjs.Dayjs;
    el: HTMLElement;
    private _keyboardFocusedDate;
    private _afterRenderHandler;
    private _enableKeyboardNavigation;
    excludedWeekdaysArray: any[];
    excludedDatesArray: any[];
    updateExcludedDates(): void;
    updateExcludedWeekdays(): void;
    dateChanged(newValue: string, oldValue: string): void;
    _handleNewDateValue(newValue: string): void;
    localeChanged(): void;
    viewMonthChanged(newValue: Dayjs, oldValue: Dayjs): void;
    minChanged(newValue: string): void;
    maxChanged(newValue: string): void;
    /**
     * Sets date
     */
    setDate(date: any): Promise<void>;
    /**
     * Gets date
     */
    getDate(): Promise<string>;
    /**
     * Date change value event
     */
    eventChange: EventEmitter;
    _vm: {
        dates: Dayjs[];
        today: Dayjs;
        weekStartClass: string;
        monthStartClass: string;
        weekDays: Dayjs[];
        monthDays: Dayjs[];
        min: Dayjs;
        max: Dayjs;
    };
    private _initViewMonth;
    private _initDates;
    private _initCalendarViewModel;
    private _updateViewMonth;
    fromString(dateStr: string): Dayjs;
    toDayString(date: Dayjs): string;
    nextMonth(): void;
    prevMonth(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    _onFocusIn(e: any): void;
    /**
     * Handles key down event
     */
    _onKeyDown(e: KeyboardEvent): void;
    /**
     * Checks wether the keyboard event target belongs to a calendar day
     */
    _isTargetCalendarDay(e: KeyboardEvent): boolean;
    /**
     * Focus a sibling day of the calendar, either +1 or -1
     * Changes month if necessary.
     */
    _focusSiblingDay(dayDiff: number): void;
    /**
     * Checks wether the given date is between min and max
     */
    _isDayInRange(date: Dayjs): boolean;
    /**
     * Changes month in chi date component
     */
    _moveMonth(next?: boolean): void;
    _focusSiblingWeek(weekDif: number): void;
    _getFirstOrLastAvailableDate(first: any): string;
    /**
     * Gets the N previous or N next available day
     */
    _getAvailableSiblingDay(dayDiff: number): string;
    /**
     * Gets the valid day element
     */
    _getValidDayElement(date: string): HTMLElement;
    /**
     * Focuses the given calendar day if available and stores the date in _keyboardFocusedDate.
     *
     */
    _focusCalendarDay(date?: string): void;
    /**
     * Gets all the day elements of the calendar that are valid date to select
     */
    _getFocusableDays(): Element[];
    /**
     * Handles tab key to keep focus on the enabled elements of date picker:
     * prev month, next month and calendar day.
     */
    _handleTab(e: KeyboardEvent): void;
    _handleEnter(e: KeyboardEvent): void;
    _handleEscape(): void;
    _handleSelectDate(day: Dayjs): void;
    addDate(date: any): void;
    removeDate(day: Dayjs): void;
    selectDate(day: Dayjs): void;
    checkIfExcluded(day: Dayjs): boolean;
    render(): any;
}
