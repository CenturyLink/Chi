import { h } from "@stencil/core";
import { TIME_CLASSES, ACTIVE_CLASS, DISABLED_CLASS, UTILITY_CLASSES } from "../../constants/classes";
import { CHI_TIME_SCROLL_ADJUSTMENT, TIME_PICKER_TIME_STEPS, } from "../../constants/constants";
export class Time {
    constructor() {
        /**
         * Displaying seconds column
         */
        this.displaySeconds = false;
        /**
         * To render Time Picker in 24 hours format
         */
        this.format = '12hr';
        this.excludedHoursArray = [];
        this.excludedMinutesArray = [];
        this.excludedSecondsArray = [];
        this.minutesToDisplay = [];
        this.secondsToDisplay = [];
    }
    componentWillLoad() {
        this.updateTimeSteps();
        this.validateTimeSteps();
        this.selectTimeAndPeriod();
        this.updateExcluded();
        this.updateValue();
    }
    validateTimeSteps() {
        if (this.minutesStep && !TIME_PICKER_TIME_STEPS.includes(this.minutesStep)) {
            throw new Error(`Property minutes-step is invalid. Must be one of ${TIME_PICKER_TIME_STEPS.join(',')}`);
        }
        if (this.secondsStep && !TIME_PICKER_TIME_STEPS.includes(this.secondsStep)) {
            throw new Error(`Property seconds-step is invalid. Must be one of ${TIME_PICKER_TIME_STEPS.join(',')}`);
        }
    }
    /**
     * @returns array with integers from 0 to 59 in step intervals.
     */
    timeRange(step = 1) {
        return Array.from({ length: 59 / step + 1 }, (_, index) => index * step);
    }
    updateExcluded() {
        const getValues = (list = '') => list.split(',').map((i) => i.trim());
        this.excludedHoursArray = getValues(this._excludedHours);
        this.excludedMinutesArray = getValues(this._excludedMinutes);
        this.excludedSecondsArray = getValues(this._excludedSeconds);
    }
    /**
     * Sets default values to minutesStep and secondStep if used as a boolean prop.
     * WARNING: the documentation of this prop is modified in stencil.config.ts file,
     * if default values are modified, MUST be changed in that file as well.
     */
    updateTimeSteps() {
        if (this.stepped || Number.isNaN(this.minutesStep)) {
            this.minutesStep = 15;
        }
        if (this.stepped || Number.isNaN(this.secondsStep)) {
            this.secondsStep = 10;
        }
        this.minutesToDisplay = this.timeRange(this.minutesStep);
        this.secondsToDisplay = this.timeRange(this.secondsStep);
    }
    /**
     * Validates property 'value'
     *
     */
    validateTime(time) {
        const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?\s*([AaPp][Mm])?$/.test(time);
        if (!isValid) {
            throw new Error('Provided "value" is not valid. Provide a value in the form hh:mm:ss');
        }
        return isValid;
    }
    formatTimePeriod(period) {
        return String(period).padStart(2, '0');
    }
    updateValue() {
        let newValue = [this._hour, this._minute, this._second].join(':');
        if (this.format === '12hr' && this._period) {
            newValue += ' ' + this._period;
        }
        if (newValue !== this.value) {
            this.value = newValue;
            this.emitTimeValueEvent();
        }
    }
    /**
     * Selects hour minute and second properties from
     * this.value or current time.
     */
    selectTimeAndPeriod() {
        const time = new Date();
        if (this.value && this.validateTime(this.value)) {
            const [hourMinSec, period] = (this.value || '').trim().split(' ');
            const [hours, minutes, seconds] = hourMinSec.split(':').map((i) => parseInt(i));
            time.setHours(hours, minutes, seconds || 0);
            if (period) {
                this._period = period.toLocaleLowerCase();
            }
        }
        const [hours, minutes, seconds] = this.getRoundedTime(time);
        if (!this._period) {
            this._period = this.format === '12hr' && parseInt(hours) < 12 ? 'am' : 'pm';
        }
        this._hour = hours;
        this._minute = minutes;
        this._second = seconds;
    }
    /**
     * Rounds current time to the defined minutes and second steps.
     */
    getRoundedTime(time) {
        const minutesCoeff = 1000 * 60 * this.minutesStep;
        const secondsCoeff = 1000 * this.secondsStep;
        if (!this.minutesToDisplay.includes(time.getMinutes())) {
            time = new Date(Math.ceil(time.getTime() / minutesCoeff) * minutesCoeff);
        }
        else if (!this.secondsToDisplay.includes(time.getSeconds())) {
            time = new Date(Math.ceil(time.getTime() / secondsCoeff) * secondsCoeff);
        }
        return [time.getHours(), time.getMinutes(), time.getSeconds()].map(this.formatTimePeriod);
    }
    hours() {
        const hourFormat = this.format === '24hr' ? 24 : 12;
        const startHour = this.format === '24hr' ? '00' : '12';
        let hourToSet;
        const setHour = (hour) => {
            if (this.format === '24hr') {
                hourToSet = hour === '24' ? '00' : hour;
            }
            else {
                if (hour === '12') {
                    hourToSet = this._period === 'am' ? '12' : hour;
                }
                else {
                    hourToSet = this._period === 'pm' ? String(parseInt(hour) + 12) : hour;
                }
            }
            this._hour = hourToSet;
            this.value = `${hourToSet}:${this._minute}:${this._second}`;
            this.emitTimeValueEvent();
        };
        const hourStatus = (hour) => {
            var _a;
            const valueHour = parseInt((_a = this.value) === null || _a === void 0 ? void 0 : _a.split(':')[0]);
            let hourStatus = '';
            if (this._hour === hour ||
                (!(this.format === '24hr') && this._period === 'pm' && parseInt(hour) + 12 === parseInt(this._hour)) ||
                (this._period === 'am' && parseInt(hour) === 12 && valueHour === 0)) {
                hourStatus = ACTIVE_CLASS;
            }
            else {
                if (this.excludedHoursArray.includes(this.formatTimePeriod(parseInt(hour))) ||
                    this.excludedHoursArray.includes(this.formatTimePeriod(parseInt(hour) + 12))) {
                    hourStatus = DISABLED_CLASS;
                }
            }
            return hourStatus;
        };
        const hoursToDisplay = [
            h("div", { "data-hour": startHour, class: `
        ${TIME_CLASSES.HOUR}
        ${hourStatus(startHour)}
        `, onClick: () => setHour(String(hourFormat)) }, startHour),
        ];
        Array.from(Array(hourFormat), (_, i) => {
            const hour = this.formatTimePeriod(i);
            if (i > 0) {
                hoursToDisplay.push(h("div", { "data-hour": hour, class: `
            ${TIME_CLASSES.HOUR}
            ${hourStatus(hour)}
          `, onClick: () => setHour(hour) }, hour));
            }
        });
        return h("div", { class: `${TIME_CLASSES.HOURS} ${UTILITY_CLASSES.POSITION.RELATIVE}` }, hoursToDisplay);
    }
    /**
     * Calculates class to apply, active or disabled
     * @param value value to check what class to apply
     * @param activeValue value to apply active class
     * @param excludedValues array of excluded values
     */
    getStateClass(value, activeValue, excludedValues) {
        let minuteState = '';
        if (parseInt(activeValue) === parseInt(value)) {
            minuteState = ACTIVE_CLASS;
        }
        else if (excludedValues.includes(value)) {
            minuteState = DISABLED_CLASS;
        }
        return minuteState;
    }
    /**
     * Generates minute element to show
     * @param minute
     * @returns
     */
    getMinuteElement(minute) {
        return (h("div", { class: `
        ${TIME_CLASSES.MINUTE}
        ${this.getStateClass(minute, this._minute, this.excludedMinutesArray)}
      `, onClick: () => {
                this._minute = minute;
                this.updateValue();
            } }, minute));
    }
    minutes() {
        return (h("div", { class: `${TIME_CLASSES.MINUTES} ${UTILITY_CLASSES.POSITION.RELATIVE}` }, this.minutesToDisplay.map((minute) => this.getMinuteElement(this.formatTimePeriod(minute)))));
    }
    getSecondsElement(second) {
        return (h("div", { class: `
          ${TIME_CLASSES.SECOND}
          ${this.getStateClass(second, this._second, this.excludedSecondsArray)}
        `, onClick: () => {
                this._second = second;
                this.updateValue();
            } }, second));
    }
    seconds() {
        return this.displaySeconds ? (h("div", { class: `${TIME_CLASSES.SECONDS} ${UTILITY_CLASSES.POSITION.RELATIVE}` }, this.secondsToDisplay.map((second) => this.getSecondsElement(this.formatTimePeriod(second))))) : undefined;
    }
    periods() {
        var _a;
        const hour = parseInt((_a = this.value) === null || _a === void 0 ? void 0 : _a.split(':')[0]);
        if (this.format === '12hr') {
            const periodClasses = (period) => {
                let periodStatus = TIME_CLASSES.PERIOD;
                if (period === this._period) {
                    periodStatus += ` ${ACTIVE_CLASS}`;
                }
                return periodStatus;
            };
            const setPeriod = (period) => {
                this._period = period;
                let currentHour = hour;
                if (period === 'am') {
                    if (currentHour > 12) {
                        currentHour = currentHour - 12;
                    }
                    if (currentHour === 12) {
                        currentHour = 12;
                    }
                }
                else if (period === 'pm') {
                    if (currentHour < 12) {
                        currentHour = currentHour + 12;
                    }
                    if (currentHour === 12) {
                        currentHour = 12;
                    }
                }
                this.value = `${currentHour}:${this._minute}:${this._second}`;
                this._hour = this.formatTimePeriod(currentHour);
                this.emitTimeValueEvent();
            };
            return (h("div", { class: TIME_CLASSES.PERIODS }, h("div", { class: periodClasses('am'), onClick: () => setPeriod('am') }, "AM"), h("div", { class: periodClasses('pm'), onClick: () => setPeriod('pm') }, "PM")));
        }
        return;
    }
    emitTimeValueEvent() {
        const eventDetail = {
            hour: this._hour,
            minute: this._minute,
            second: this._second,
            value: this.value,
        };
        if (this.format === '12hr' && this._period) {
            eventDetail.period = this._period;
        }
        this.eventChange.emit(eventDetail);
    }
    componentDidLoad() {
        const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`), minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`), secondsColumn = this.el.querySelector(`.${TIME_CLASSES.SECONDS}`);
        if (hoursColumn) {
            const activeHour = hoursColumn.querySelector(`.${TIME_CLASSES.HOUR}.${ACTIVE_CLASS}`);
            if (activeHour) {
                hoursColumn.scrollTop = activeHour.offsetTop - CHI_TIME_SCROLL_ADJUSTMENT;
            }
        }
        if (minutesColumn) {
            const activeMinute = minutesColumn.querySelector(`.${TIME_CLASSES.MINUTE}.${ACTIVE_CLASS}`);
            if (activeMinute) {
                minutesColumn.scrollTop = activeMinute.offsetTop - CHI_TIME_SCROLL_ADJUSTMENT;
            }
        }
        if (secondsColumn) {
            const activeSecond = secondsColumn.querySelector(`.${TIME_CLASSES.SECOND}.${ACTIVE_CLASS}`);
            if (activeSecond) {
                secondsColumn.scrollTop = activeSecond.offsetTop - CHI_TIME_SCROLL_ADJUSTMENT;
            }
        }
    }
    render() {
        const hours = this.hours(), minutes = this.minutes(), seconds = this.seconds(), periods = this.periods();
        return (h("div", { key: '234d0abb868d1cc4c0ee27d58dcccb8db3183494', class: TIME_CLASSES.TIME }, h("div", { key: '0e7683c51178dbc26ce372d5f6bfdbd84f5075db', class: TIME_CLASSES.CONTENT }, hours, minutes, seconds, periods)));
    }
    static get is() { return "chi-time"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["time.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["time.css"]
        };
    }
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
                    "text": "Selected time in the time picker"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Displaying seconds column"
                },
                "getter": false,
                "setter": false,
                "attribute": "display-seconds",
                "reflect": true,
                "defaultValue": "false"
            },
            "format": {
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To render Time Picker in 24 hours format"
                },
                "getter": false,
                "setter": false,
                "attribute": "format",
                "reflect": true,
                "defaultValue": "'12hr'"
            },
            "stepped": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use minutesStep and secondsStep instead.\nTo render Minutes and Seconds columns in 15 min and 10 second steps."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "stepped",
                "reflect": true
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
            "secondsStep": {
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
                    "text": "Renders seconds in stepped format. Defaults to 10 seconds if\nno value is provided (see examples in docs)."
                },
                "getter": false,
                "setter": false,
                "attribute": "seconds-step",
                "reflect": true
            },
            "_excludedHours": {
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
                    "text": "To disable specific hours"
                },
                "getter": false,
                "setter": false,
                "attribute": "_excluded-hours",
                "reflect": true
            },
            "_excludedMinutes": {
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
                    "text": "To disable specific minutes"
                },
                "getter": false,
                "setter": false,
                "attribute": "_excluded-minutes",
                "reflect": true
            },
            "_excludedSeconds": {
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
                    "text": "To disable specific seconds"
                },
                "getter": false,
                "setter": false,
                "attribute": "_excluded-seconds",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "eventChange",
                "name": "chiTimeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Time change value event"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
