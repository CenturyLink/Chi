'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const classes = require('./classes-2bfd8132.js');
const constants = require('./constants-8a881329.js');

const timeCss = "";
const ChiTimeStyle0 = timeCss;

const Time = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.eventChange = index.createEvent(this, "chiTimeChange", 7);
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
        if (this.minutesStep && !constants.TIME_PICKER_TIME_STEPS.includes(this.minutesStep)) {
            throw new Error(`Property minutes-step is invalid. Must be one of ${constants.TIME_PICKER_TIME_STEPS.join(',')}`);
        }
        if (this.secondsStep && !constants.TIME_PICKER_TIME_STEPS.includes(this.secondsStep)) {
            throw new Error(`Property seconds-step is invalid. Must be one of ${constants.TIME_PICKER_TIME_STEPS.join(',')}`);
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
                hourStatus = classes.ACTIVE_CLASS;
            }
            else {
                if (this.excludedHoursArray.includes(this.formatTimePeriod(parseInt(hour))) ||
                    this.excludedHoursArray.includes(this.formatTimePeriod(parseInt(hour) + 12))) {
                    hourStatus = classes.DISABLED_CLASS;
                }
            }
            return hourStatus;
        };
        const hoursToDisplay = [
            index.h("div", { "data-hour": startHour, class: `
        ${classes.TIME_CLASSES.HOUR}
        ${hourStatus(startHour)}
        `, onClick: () => setHour(String(hourFormat)) }, startHour),
        ];
        Array.from(Array(hourFormat), (_, i) => {
            const hour = this.formatTimePeriod(i);
            if (i > 0) {
                hoursToDisplay.push(index.h("div", { "data-hour": hour, class: `
            ${classes.TIME_CLASSES.HOUR}
            ${hourStatus(hour)}
          `, onClick: () => setHour(hour) }, hour));
            }
        });
        return index.h("div", { class: `${classes.TIME_CLASSES.HOURS} ${classes.UTILITY_CLASSES.POSITION.RELATIVE}` }, hoursToDisplay);
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
            minuteState = classes.ACTIVE_CLASS;
        }
        else if (excludedValues.includes(value)) {
            minuteState = classes.DISABLED_CLASS;
        }
        return minuteState;
    }
    /**
     * Generates minute element to show
     * @param minute
     * @returns
     */
    getMinuteElement(minute) {
        return (index.h("div", { class: `
        ${classes.TIME_CLASSES.MINUTE}
        ${this.getStateClass(minute, this._minute, this.excludedMinutesArray)}
      `, onClick: () => {
                this._minute = minute;
                this.updateValue();
            } }, minute));
    }
    minutes() {
        return (index.h("div", { class: `${classes.TIME_CLASSES.MINUTES} ${classes.UTILITY_CLASSES.POSITION.RELATIVE}` }, this.minutesToDisplay.map((minute) => this.getMinuteElement(this.formatTimePeriod(minute)))));
    }
    getSecondsElement(second) {
        return (index.h("div", { class: `
          ${classes.TIME_CLASSES.SECOND}
          ${this.getStateClass(second, this._second, this.excludedSecondsArray)}
        `, onClick: () => {
                this._second = second;
                this.updateValue();
            } }, second));
    }
    seconds() {
        return this.displaySeconds ? (index.h("div", { class: `${classes.TIME_CLASSES.SECONDS} ${classes.UTILITY_CLASSES.POSITION.RELATIVE}` }, this.secondsToDisplay.map((second) => this.getSecondsElement(this.formatTimePeriod(second))))) : undefined;
    }
    periods() {
        var _a;
        const hour = parseInt((_a = this.value) === null || _a === void 0 ? void 0 : _a.split(':')[0]);
        if (this.format === '12hr') {
            const periodClasses = (period) => {
                let periodStatus = classes.TIME_CLASSES.PERIOD;
                if (period === this._period) {
                    periodStatus += ` ${classes.ACTIVE_CLASS}`;
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
            return (index.h("div", { class: classes.TIME_CLASSES.PERIODS }, index.h("div", { class: periodClasses('am'), onClick: () => setPeriod('am') }, "AM"), index.h("div", { class: periodClasses('pm'), onClick: () => setPeriod('pm') }, "PM")));
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
        const hoursColumn = this.el.querySelector(`.${classes.TIME_CLASSES.HOURS}`), minutesColumn = this.el.querySelector(`.${classes.TIME_CLASSES.MINUTES}`), secondsColumn = this.el.querySelector(`.${classes.TIME_CLASSES.SECONDS}`);
        if (hoursColumn) {
            const activeHour = hoursColumn.querySelector(`.${classes.TIME_CLASSES.HOUR}.${classes.ACTIVE_CLASS}`);
            if (activeHour) {
                hoursColumn.scrollTop = activeHour.offsetTop - constants.CHI_TIME_SCROLL_ADJUSTMENT;
            }
        }
        if (minutesColumn) {
            const activeMinute = minutesColumn.querySelector(`.${classes.TIME_CLASSES.MINUTE}.${classes.ACTIVE_CLASS}`);
            if (activeMinute) {
                minutesColumn.scrollTop = activeMinute.offsetTop - constants.CHI_TIME_SCROLL_ADJUSTMENT;
            }
        }
        if (secondsColumn) {
            const activeSecond = secondsColumn.querySelector(`.${classes.TIME_CLASSES.SECOND}.${classes.ACTIVE_CLASS}`);
            if (activeSecond) {
                secondsColumn.scrollTop = activeSecond.offsetTop - constants.CHI_TIME_SCROLL_ADJUSTMENT;
            }
        }
    }
    render() {
        const hours = this.hours(), minutes = this.minutes(), seconds = this.seconds(), periods = this.periods();
        return (index.h("div", { key: '8c9c0dd1ad2a5a8899dd669ad6e1fe5efc8ac8b3', class: classes.TIME_CLASSES.TIME }, index.h("div", { key: '96865e91a4e87218841c87eedfc82319426a3529', class: classes.TIME_CLASSES.CONTENT }, hours, minutes, seconds, periods)));
    }
    get el() { return index.getElement(this); }
};
Time.style = ChiTimeStyle0;

exports.chi_time = Time;
