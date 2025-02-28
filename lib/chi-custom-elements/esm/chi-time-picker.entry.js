import { r as registerInstance, h, g as getElement } from './index-422a57bb.js';
import { c as contains } from './utils-48628cb4.js';
import { E as ESCAPE_KEYCODE, b as CHI_TIME_AUTO_SCROLL_DELAY } from './constants-0e68989c.js';
import { f as TIME_CLASSES } from './classes-5181b913.js';
import { v as v4 } from './v4-a4ec28c0.js';

const TimePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         *  To disable chi-time-picker.
         */
        this.disabled = false;
        /**
         * Displaying seconds column
         */
        this.displaySeconds = false;
        /**
         *  To define format of Time Picker.
         */
        this.format = '12hr';
        /**
         * Indicates whether the time picker popover is open or closed
         */
        this.active = false;
    }
    _onFocusIn(e) {
        if (e.target !== document.body && e.target !== null) {
            this.active = contains(this.el, e.target);
        }
    }
    _onClick(e) {
        if (e.target !== document.body && e.target !== null) {
            this.active = contains(this.el, e.target);
        }
    }
    _isEscapeKey(e) {
        return 'key' in e && (e.key === 'Escape' || e.key === 'Esc' || e.key === ESCAPE_KEYCODE);
    }
    _onKeyUp(e) {
        if (this._isEscapeKey(e)) {
            this.active = false;
            this._input.blur();
        }
    }
    timeChanged(newValue, oldValue) {
        if (!!newValue !== !!oldValue) {
            this.value = newValue;
        }
    }
    /**
     * Sets time
     */
    async setTime(time) {
        this.value = time;
    }
    /**
     * Gets time
     */
    getTime() {
        return Promise.resolve(this.value);
    }
    componentWillLoad() {
        this._onFocusIn = this._onFocusIn.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
        this._uuid = this.el.id ? this.el.id : `tp-${v4()}`;
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
    handlePopoverOpen(ev) {
        ev.stopPropagation();
        const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`);
        const minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`);
        const secondsColumn = this.el.querySelector(`.${TIME_CLASSES.SECONDS}`);
        setTimeout(() => {
            if (hoursColumn) {
                const activeHour = hoursColumn.querySelector(`.${TIME_CLASSES.HOUR}.-active`);
                if (activeHour) {
                    hoursColumn.scrollTop = activeHour.offsetTop - 4;
                }
            }
            if (minutesColumn) {
                const activeMinute = minutesColumn.querySelector(`.${TIME_CLASSES.MINUTE}.-active`);
                if (activeMinute) {
                    minutesColumn.scrollTop = activeMinute.offsetTop - 4;
                }
            }
            if (secondsColumn) {
                const activeSecond = secondsColumn.querySelector(`.${TIME_CLASSES.SECOND}.-active`);
                if (activeSecond) {
                    secondsColumn.scrollTop = activeSecond.offsetTop - 4;
                }
            }
        }, CHI_TIME_AUTO_SCROLL_DELAY);
    }
    handleTimeChange(ev) {
        const timePickerInput = document.getElementById(`${this._uuid}-control`);
        const formatTimePeriod = (period) => {
            return String(period).length > 1 ? String(period) : `0${period}`;
        };
        const hour = this.format !== '24hr' && ev.detail.hour > 12 ? ev.detail.hour - 12 : ev.detail.hour;
        const seconds = this.displaySeconds ? `:${formatTimePeriod(ev.detail.second)}` : '';
        const timePeriod = this.format === '12hr' ? formatTimePeriod(ev.detail.period) : '';
        timePickerInput.value = `${formatTimePeriod(hour)}:${formatTimePeriod(ev.detail.minute)}${seconds} ${timePeriod}`;
    }
    render() {
        const chiPopover = (h("chi-popover", { key: '10f1cc7b196d4cb2ddf1e26d2c68405701790cf6', id: `popover-${this._uuid}`, position: "bottom", reference: `#${this._uuid}-control`, "prevent-auto-hide": true, active: this.active }, h("chi-time", { key: '685d7766c8c474cea71d0305e6f9d963e00877e5', "display-seconds": this.displaySeconds, "excluded-hours": this._excludedHours, "excluded-minutes": this._excludedMinutes, "excluded-seconds": this._excludedSeconds, format: this.format, value: this.value, "seconds-step": this.secondsStep, "minutes-step": this.minutesStep })));
        return (h("div", { key: '4eb6d4eb59deca4705d830c8d643e057f416a0c2', class: this.disabled ? '-disabled' : '' }, h("div", { key: '46d6e9b8cd9a8aea95067faaf3df1d05864d479c', class: "chi-input__wrapper -icon--right" }, h("input", { key: '2ebf7792ab2965aa5a914469fc8acc8e450a9589', id: `${this._uuid}-control`, class: `chi-input
              ${this.active ? '-focus' : ''}`, type: `text`, placeholder: this.format === '12hr' ? '--:-- --' : '--:--', ref: (el) => (this._input = el), value: this.value, disabled: this.disabled }), h("chi-icon", { key: '036eec31b5ebd650b09c213c5e8a58e1153f2df4', icon: "circle-clock-outline" })), !this.disabled && chiPopover));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["timeChanged"]
    }; }
};

export { TimePicker as chi_time_picker };
