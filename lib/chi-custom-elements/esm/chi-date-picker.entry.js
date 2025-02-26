import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { c as contains } from './utils-48628cb4.js';
import { E as ESCAPE_KEYCODE, b as CHI_TIME_AUTO_SCROLL_DELAY } from './constants-0e68989c.js';
import { d as dayjs, c as customParseFormat } from './customParseFormat-9bb348ff.js';
import { d as TIME_CLASSES } from './classes-f1a396c8.js';
import { C as CHI_STATES } from './states-a5be3f93.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';
import { v as v4 } from './v4-a4ec28c0.js';

const DatePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventChange = createEvent(this, "chiDateChange", 7);
        this.eventInvalid = createEvent(this, "chiDateInvalid", 7);
        /**
         * Locale to use in date picker
         */
        this.locale = 'en';
        /**
         * Minimum eligible date
         */
        this.min = '01/01/1900';
        /**
         * Maximum eligible date
         */
        this.max = '12/31/2099';
        /**
         * Date format used in the attributes and how it will be shown to the user.
         */
        this.format = 'MM/DD/YYYY';
        /**
         *  to disable chi-date-picker.
         */
        this.disabled = false;
        /**
         * Indicates whether the dropdown calendar is open or closed
         */
        this.active = false;
        /**
         * To render Date Picker with Time Picker
         */
        this.mode = 'date';
        /**
         * To allow the user to select multiple dates
         */
        this.multiple = false;
        /**
         * To specify format for the Time Picker. Applicable only if mode is equal to 'datetime'
         */
        this.timeFormat = '12hr';
        /**
         * Displaying seconds column
         */
        this.displaySeconds = false;
        this.excludedWeekdaysArray = [];
        this.excludedDatesArray = [];
    }
    stateValidation(newValue) {
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for date picker. If provided, valid values are: ${validValues}. `);
        }
    }
    updateExcludedDates() {
        this.excludedDatesArray = this.excludedDates ? this.excludedDates.split(',').map((date) => date.trim()) : [];
    }
    updateExcludedWeekdays() {
        this.excludedWeekdaysArray = this.excludedWeekdays
            ? this.excludedWeekdays.split(',').map((weekDay) => parseInt(weekDay))
            : [];
    }
    _onFocusIn(e) {
        if (e.target !== document.body && e.target !== null) {
            this.active = contains(this.el, e.target);
        }
    }
    _onClick(e) {
        if (e.target !== document.body &&
            e.target !== null &&
            !(this.mode !== 'datetime' &&
                !this.multiple &&
                new RegExp('(\\s|^)' + 'chi-datepicker__day' + '(\\s|$)').test(e.target.getAttribute('class')))
        // This hack is necessary because currently IE11 doesn't support .classList on SVG elements
        ) {
            this.active = contains(this.el, e.target);
        }
    }
    _isEscapeKey(e) {
        return 'key' in e && (e.key === 'Escape' || e.key === 'Esc' || e.key === ESCAPE_KEYCODE);
    }
    _onKeyUp(e) {
        if (!this.active)
            return;
        if (this._isEscapeKey(e)) {
            this.active = false;
            this._input.blur();
        }
    }
    checkIfExcluded(day) {
        return ((this.excludedDates &&
            this.excludedDatesArray.some((date) => dayjs(date).startOf('day').isSame(day.startOf('day')))) ||
            (this.excludedWeekdays && this.excludedWeekdaysArray.includes(day.day())));
    }
    _checkValidDate(date, minDate, maxDate) {
        const inputDate = dayjs(date, this.format);
        return (inputDate.isValid() &&
            !this.checkIfExcluded(inputDate) &&
            !inputDate.startOf('day').isBefore(dayjs(minDate).startOf('day')) &&
            !inputDate.startOf('day').isAfter(dayjs(maxDate).startOf('day')));
    }
    _checkMultipleDates(minDate, maxDate) {
        const inputDates = this._input.value.replace(/ /g, '').split(',');
        const validatedDates = [];
        inputDates.forEach((date) => {
            if (this._checkValidDate(date, minDate, maxDate) && !validatedDates.includes(date)) {
                validatedDates.push(date);
            }
        });
        this.value = validatedDates.join(',');
        this._input.value = this.value;
        this.eventChange.emit(this.value);
    }
    _checkSingleDate(minDate, maxDate) {
        const inputDate = dayjs(this._input.value, this.format);
        const isDateTimeMode = this.mode === 'datetime';
        const timeValue = isDateTimeMode ? this._input.value.split(', ')[1] : '';
        const inputValue = isDateTimeMode ? this._input.value.split(', ')[0] : this._input.value;
        if (dayjs(inputValue, this.format, true).isValid() && !this.checkIfExcluded(inputDate)) {
            if (dayjs(inputDate).startOf('day').isBefore(dayjs(minDate).startOf('day'))) {
                this.value = timeValue ? `${this.min}, ${timeValue}` : this.min;
                this._input.value = this.value;
                this.eventChange.emit(this.value);
            }
            else if (dayjs(inputDate).startOf('day').isAfter(dayjs(maxDate).startOf('day'))) {
                this.value = timeValue ? `${this.max}, ${timeValue}` : this.max;
                this._input.value = this.value;
                this.eventChange.emit(this.value);
            }
            else {
                this.value = this._input.value;
                this.eventChange.emit(this.value);
            }
        }
        else {
            this.eventInvalid.emit(this._input.value);
            this.value = '';
            this._input.value = '';
        }
    }
    _checkDate() {
        dayjs.locale(this.locale);
        dayjs.extend(customParseFormat);
        const minDate = dayjs(this.min, this.format);
        const maxDate = dayjs(this.max, this.format);
        if (this._input.value === this.value) {
            return;
        }
        if (this.multiple) {
            this._checkMultipleDates(minDate, maxDate);
        }
        else {
            this._checkSingleDate(minDate, maxDate);
        }
    }
    /**
     * Sets date
     */
    async setDate(date) {
        this.value = date;
    }
    /**
     * Resets date
     */
    async resetDate() {
        this.value = null;
    }
    /**
     * Gets date
     */
    getDate() {
        return Promise.resolve(this.value);
    }
    handlePopoverOpen(ev) {
        ev.stopPropagation();
        const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`);
        const minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`);
        const secondsColumn = this.el.querySelector(`.${TIME_CLASSES.SECONDS}`);
        setTimeout(() => {
            if (hoursColumn) {
                const activeHour = hoursColumn.querySelector(`.${TIME_CLASSES.HOUR}.-active`);
                if (activeHour) {
                    hoursColumn.scrollTop = activeHour.offsetTop - 12;
                }
            }
            if (minutesColumn) {
                const activeMinute = minutesColumn.querySelector(`.${TIME_CLASSES.MINUTE}.-active`);
                if (activeMinute) {
                    minutesColumn.scrollTop = activeMinute.offsetTop - 12;
                }
            }
            if (this.displaySeconds && secondsColumn) {
                const activeSecond = secondsColumn.querySelector(`.${TIME_CLASSES.SECOND}.-active`);
                if (activeSecond) {
                    secondsColumn.scrollTop = activeSecond.offsetTop - 12;
                }
            }
        }, CHI_TIME_AUTO_SCROLL_DELAY);
    }
    handleDateChange(ev) {
        ev.stopPropagation();
        const date = ev.detail;
        if (this.mode === 'date') {
            this.value = date;
            this._input.value = date;
        }
        if (this.mode === 'datetime' && this.time) {
            const time = this.formatTime(this.time);
            this.value = `${date}, ${time}`;
            this._input.value = this.value;
        }
        if (!this.multiple) {
            this.active = false;
            this._input.blur();
        }
        this.eventChange.emit(this.value);
    }
    handleTimeChange(ev) {
        ev.stopPropagation();
        if (ev.detail) {
            const { hour, minute, second, period } = ev.detail;
            this.time = {
                hour: parseInt(hour),
                minute: parseInt(minute),
                second: parseInt(second),
                period,
            };
        }
        if (!this.value) {
            return;
        }
        const date = this._getChiDateValue();
        const time = this.formatTime(ev.detail);
        this.value = `${date}, ${time}`;
        this.eventChange.emit(this.value);
    }
    formatTime(time) {
        const hour = this.timeFormat === '12hr' && time.hour > 12 ? time.hour - 12 : time.hour;
        const formattedHour = this.formatTimePeriod(hour);
        const formattedMinute = this.formatTimePeriod(time.minute);
        const formattedSecond = this.displaySeconds ? `:${this.formatTimePeriod(time.second)}` : '';
        return this.timeFormat === '12hr'
            ? `${formattedHour}:${formattedMinute}${formattedSecond} ${time.period}`
            : `${formattedHour}:${formattedMinute}${formattedSecond}`;
    }
    formatTimePeriod(period) {
        return period.toString().length > 1 ? period.toString() : `0${period}`;
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.stateValidation(this.state);
        this.updateExcludedDates();
        this.updateExcludedWeekdays();
        this._onFocusIn = this._onFocusIn.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
        this._uuid = this.el.id ? this.el.id : `dp-${v4()}`;
    }
    componentDidLoad() {
        document.body.addEventListener('focusin', this._onFocusIn);
        document.body.addEventListener('click', this._onClick);
        document.body.addEventListener('keyup', this._onKeyUp);
    }
    disconnectedCallback() {
        document.body.removeEventListener('focusin', this._onFocusIn);
        document.body.removeEventListener('click', this._onClick);
        document.body.removeEventListener('keyup', this._onKeyUp);
    }
    _getChiDateValue() {
        let value = this.value;
        if (this.mode === 'datetime') {
            value = this.value ? this.value.split(', ')[0] : null;
        }
        return value;
    }
    _getPlaceholder() {
        if (this.mode !== 'datetime') {
            return this.format;
        }
        const timePlaceholder = this.displaySeconds ? '--:--:--' : '--:--';
        const periodPlaceholder = this.timeFormat === '12hr' ? ' --' : '';
        return `${this.format}, ${timePlaceholder}${periodPlaceholder}`;
    }
    render() {
        var _a;
        const chiDateValue = this._getChiDateValue();
        const date = (h("chi-date", { key: 'd02f3273a1e2da9b191d580852a21600f55a9de6', min: this.min, max: this.max, locale: this.locale, value: chiDateValue, format: this.format, "excluded-weekdays": this.excludedWeekdays, "excluded-dates": this.excludedDates, multiple: this.multiple, onChiDateChange: (ev) => this.handleDateChange(ev) }));
        const timeValue = (((_a = this.value) === null || _a === void 0 ? void 0 : _a.split(', ')) || [])[1];
        const time = this.mode === 'datetime' ? (h("chi-time", { displaySeconds: this.displaySeconds, format: this.timeFormat, value: timeValue, "minutes-step": this.minutesStep, onChiTimeChange: (ev) => this.handleTimeChange(ev) })) : null;
        const popoverContent = this.mode === 'datetime' ? (h("div", { class: "-d--flex" }, date, time)) : (date);
        const chiPopover = (h("chi-popover", { key: '5d36986bd36d252097b2d7aaa66e15c3314dfab0', id: "example-4-be-popover", position: this.mode === 'datetime' ? 'bottom-start' : 'bottom', reference: `#${this._uuid}-control`, "prevent-auto-hide": true, active: this.active }, popoverContent));
        const inputClasses = `chi-input
      ${this.active ? '-focus' : ''}
      ${this.state ? '-' + this.state : ''}
    `;
        const helperMessage = this.helperMessage && (h("chi-helper-message", { key: 'aec98faf38cc67f1b4c26f5397a56998b20a8372', state: this.state }, this.helperMessage));
        return [
            // TODO: This input should be chi-input in the future and will pass through
            // some of its configuration attributes.
            h("div", { class: `
        ${this.disabled ? '-disabled' : ''}
        ${this.mode === 'datetime' ? '-time' : ''}`, key: this._uuid }, h("div", { key: 'fcfeb095fa4b43ea11c17c55a63489b1c2a5dfe8', class: "chi-input__wrapper -icon--right" }, h("input", { key: 'd4df8558ca931ead255aa059dfb855a2b2dd716a', id: `${this._uuid}-control`, class: inputClasses, type: "text", placeholder: this._getPlaceholder(), ref: (el) => (this._input = el), value: this.value && this.multiple ? String(this.value).replace(/,/g, ', ') : this.value, onChange: () => {
                    this._checkDate();
                }, disabled: this.disabled }), h("chi-icon", { key: '1f70a6449585c1d899ed753f4c40e5a32f5e9f96', icon: "date" })), helperMessage, !this.disabled && chiPopover),
        ];
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"],
        "excludedDates": ["updateExcludedDates"],
        "excludedWeekdays": ["updateExcludedWeekdays"]
    }; }
};

export { DatePicker as chi_date_picker };
