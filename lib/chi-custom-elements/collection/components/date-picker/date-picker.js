import { h } from "@stencil/core";
import { contains } from "../../utils/utils";
import { CHI_TIME_AUTO_SCROLL_DELAY, ESCAPE_KEYCODE, } from "../../constants/constants";
import dayjs from "dayjs";
import { TIME_CLASSES } from "../../constants/classes";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { CHI_STATES } from "../../constants/states";
import { addMutationObserver } from "../../utils/mutationObserver";
import { v4 as uuid4 } from "uuid";
export class DatePicker {
    constructor() {
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
        this._uuid = this.el.id ? this.el.id : `dp-${uuid4()}`;
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
        const date = (h("chi-date", { key: '57e4928966e9e2f0c9fc024e51d5721c0b58e005', min: this.min, max: this.max, locale: this.locale, value: chiDateValue, format: this.format, "excluded-weekdays": this.excludedWeekdays, "excluded-dates": this.excludedDates, multiple: this.multiple, onChiDateChange: (ev) => this.handleDateChange(ev) }));
        const timeValue = (((_a = this.value) === null || _a === void 0 ? void 0 : _a.split(', ')) || [])[1];
        const time = this.mode === 'datetime' ? (h("chi-time", { displaySeconds: this.displaySeconds, format: this.timeFormat, value: timeValue, "minutes-step": this.minutesStep, onChiTimeChange: (ev) => this.handleTimeChange(ev) })) : null;
        const popoverContent = this.mode === 'datetime' ? (h("div", { class: "-d--flex" }, date, time)) : (date);
        const chiPopover = (h("chi-popover", { key: '2e5f4f441f8c1b0758e516f00782ba35357342ec', id: "example-4-be-popover", position: this.mode === 'datetime' ? 'bottom-start' : 'bottom', reference: `#${this._uuid}-control`, "prevent-auto-hide": true, active: this.active }, popoverContent));
        const inputClasses = `chi-input
      ${this.active ? '-focus' : ''}
      ${this.state ? '-' + this.state : ''}
    `;
        const helperMessage = this.helperMessage && (h("chi-helper-message", { key: 'eec0f83fcd03b01ba1c9869694853a964cad4b80', state: this.state }, this.helperMessage));
        return [
            // TODO: This input should be chi-input in the future and will pass through
            // some of its configuration attributes.
            h("div", { class: `
        ${this.disabled ? '-disabled' : ''}
        ${this.mode === 'datetime' ? '-time' : ''}`, key: this._uuid }, h("div", { key: '562be008fe486421c6ff48b84a07b0931ae1c9cc', class: "chi-input__wrapper -icon--right" }, h("input", { key: '46f63cf2a64895917ded9854f6336fc158c2e0f6', id: `${this._uuid}-control`, class: inputClasses, type: "text", placeholder: this._getPlaceholder(), ref: (el) => (this._input = el), value: this.value && this.multiple ? String(this.value).replace(/,/g, ', ') : this.value, onChange: () => {
                    this._checkDate();
                }, disabled: this.disabled }), h("chi-icon", { key: '00d73873043e691f8d5b10f56a81ebb992ddc631', icon: "date" })), helperMessage, !this.disabled && chiPopover),
        ];
    }
    static get is() { return "chi-date-picker"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selected date in the date picker"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true
            },
            "locale": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DataLocales",
                    "resolved": "\"de\" | \"en\" | \"es\" | \"fr\" | \"ja\" | \"pt\" | \"zh\"",
                    "references": {
                        "DataLocales": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::DataLocales"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Locale to use in date picker"
                },
                "getter": false,
                "setter": false,
                "attribute": "locale",
                "reflect": true,
                "defaultValue": "'en'"
            },
            "min": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum eligible date"
                },
                "getter": false,
                "setter": false,
                "attribute": "min",
                "reflect": true,
                "defaultValue": "'01/01/1900'"
            },
            "max": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum eligible date"
                },
                "getter": false,
                "setter": false,
                "attribute": "max",
                "reflect": true,
                "defaultValue": "'12/31/2099'"
            },
            "format": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DateFormats",
                    "resolved": "\"DD-MM-YYYY\" | \"DD/MM/YYYY\" | \"MM-DD-YYYY\" | \"MM/DD/YYYY\" | \"YYYY-MM-DD\" | \"YYYY/MM/DD\"",
                    "references": {
                        "DateFormats": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::DateFormats"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Date format used in the attributes and how it will be shown to the user."
                },
                "getter": false,
                "setter": false,
                "attribute": "format",
                "reflect": true,
                "defaultValue": "'MM/DD/YYYY'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to disable chi-date-picker."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "active": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates whether the dropdown calendar is open or closed"
                },
                "getter": false,
                "setter": false,
                "attribute": "active",
                "reflect": true,
                "defaultValue": "false"
            },
            "excludedWeekdays": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To specify which days of week to disable"
                },
                "getter": false,
                "setter": false,
                "attribute": "excluded-weekdays",
                "reflect": true
            },
            "excludedDates": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To specify which dates to disable"
                },
                "getter": false,
                "setter": false,
                "attribute": "excluded-dates",
                "reflect": true
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DatePickerModes",
                    "resolved": "string",
                    "references": {
                        "DatePickerModes": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::DatePickerModes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To render Date Picker with Time Picker"
                },
                "getter": false,
                "setter": false,
                "attribute": "mode",
                "reflect": true,
                "defaultValue": "'date'"
            },
            "multiple": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To allow the user to select multiple dates"
                },
                "getter": false,
                "setter": false,
                "attribute": "multiple",
                "reflect": true,
                "defaultValue": "false"
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChiStates",
                    "resolved": "\"danger\" | \"success\" | \"warning\"",
                    "references": {
                        "ChiStates": {
                            "location": "import",
                            "path": "../../constants/states",
                            "id": "src/constants/states.ts::ChiStates"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To define state color of Date Picker"
                },
                "getter": false,
                "setter": false,
                "attribute": "state",
                "reflect": true
            },
            "helperMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To display an additional helper text message below the Date Picker"
                },
                "getter": false,
                "setter": false,
                "attribute": "helper-message",
                "reflect": true
            },
            "timeFormat": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TimePickerFormats",
                    "resolved": "\"12hr\" | \"24hr\"",
                    "references": {
                        "TimePickerFormats": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::TimePickerFormats"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To specify format for the Time Picker. Applicable only if mode is equal to 'datetime'"
                },
                "getter": false,
                "setter": false,
                "attribute": "time-format",
                "reflect": true,
                "defaultValue": "'12hr'"
            },
            "minutesStep": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "TimePickerTimeSteps",
                    "resolved": "1 | 10 | 15 | 20 | 30 | 5",
                    "references": {
                        "TimePickerTimeSteps": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::TimePickerTimeSteps"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Renders minutes in stepped format. Defaults to 15 min steps if no value\nis provided (see examples in docs)."
                },
                "getter": false,
                "setter": false,
                "attribute": "minutes-step",
                "reflect": true
            },
            "displaySeconds": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Displaying seconds column"
                },
                "getter": false,
                "setter": false,
                "attribute": "display-seconds",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "eventChange",
                "name": "chiDateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Date change value event"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventInvalid",
                "name": "chiDateInvalid",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered if the date value introduced by the user is invalid"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setDate": {
                "complexType": {
                    "signature": "(date: any) => Promise<void>",
                    "parameters": [{
                            "name": "date",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets date",
                    "tags": []
                }
            },
            "resetDate": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Resets date",
                    "tags": []
                }
            },
            "getDate": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Gets date",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "state",
                "methodName": "stateValidation"
            }, {
                "propName": "excludedDates",
                "methodName": "updateExcludedDates"
            }, {
                "propName": "excludedWeekdays",
                "methodName": "updateExcludedWeekdays"
            }];
    }
    static get listeners() {
        return [{
                "name": "chiPopoverShow",
                "method": "handlePopoverOpen",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
