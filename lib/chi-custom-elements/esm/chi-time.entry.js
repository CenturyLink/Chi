import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { d as TIME_CLASSES, U as UTILITY_CLASSES, c as ACTIVE_CLASS, D as DISABLED_CLASS } from './classes-35827c53.js';
import { i as TIME_PICKER_TIME_STEPS, j as CHI_TIME_SCROLL_ADJUSTMENT } from './constants-0e68989c.js';

const timeCss = "";
const ChiTimeStyle0 = timeCss;

const Time = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventChange = createEvent(this, "chiTimeChange", 7);
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
        return (h("div", { key: '8c9c0dd1ad2a5a8899dd669ad6e1fe5efc8ac8b3', class: TIME_CLASSES.TIME }, h("div", { key: '96865e91a4e87218841c87eedfc82319426a3529', class: TIME_CLASSES.CONTENT }, hours, minutes, seconds, periods)));
    }
    get el() { return getElement(this); }
};
Time.style = ChiTimeStyle0;

export { Time as chi_time };
