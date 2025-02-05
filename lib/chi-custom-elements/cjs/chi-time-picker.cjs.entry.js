'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c2d46a0.js');
const utils = require('./utils-7f208c7f.js');
const constants = require('./constants-8a881329.js');
const classes = require('./classes-b81f8b66.js');
const v4 = require('./v4-daefbed8.js');

const TimePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.value = undefined;
        this.disabled = false;
        this.displaySeconds = false;
        this._excludedHours = undefined;
        this._excludedMinutes = undefined;
        this._excludedSeconds = undefined;
        this.format = '12hr';
        this.active = false;
        this.minutesStep = undefined;
        this.secondsStep = undefined;
    }
    _onFocusIn(e) {
        if (e.target !== document.body && e.target !== null) {
            this.active = utils.contains(this.el, e.target);
        }
    }
    _onClick(e) {
        if (e.target !== document.body && e.target !== null) {
            this.active = utils.contains(this.el, e.target);
        }
    }
    _isEscapeKey(e) {
        return 'key' in e && (e.key === 'Escape' || e.key === 'Esc' || e.key === constants.ESCAPE_KEYCODE);
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
        this._uuid = this.el.id ? this.el.id : `tp-${v4.v4()}`;
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
        const hoursColumn = this.el.querySelector(`.${classes.TIME_CLASSES.HOURS}`);
        const minutesColumn = this.el.querySelector(`.${classes.TIME_CLASSES.MINUTES}`);
        const secondsColumn = this.el.querySelector(`.${classes.TIME_CLASSES.SECONDS}`);
        setTimeout(() => {
            if (hoursColumn) {
                const activeHour = hoursColumn.querySelector(`.${classes.TIME_CLASSES.HOUR}.-active`);
                if (activeHour) {
                    hoursColumn.scrollTop = activeHour.offsetTop - 4;
                }
            }
            if (minutesColumn) {
                const activeMinute = minutesColumn.querySelector(`.${classes.TIME_CLASSES.MINUTE}.-active`);
                if (activeMinute) {
                    minutesColumn.scrollTop = activeMinute.offsetTop - 4;
                }
            }
            if (secondsColumn) {
                const activeSecond = secondsColumn.querySelector(`.${classes.TIME_CLASSES.SECOND}.-active`);
                if (activeSecond) {
                    secondsColumn.scrollTop = activeSecond.offsetTop - 4;
                }
            }
        }, constants.CHI_TIME_AUTO_SCROLL_DELAY);
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
        const chiPopover = (index.h("chi-popover", { key: '4e6b62e3cac614e82a6bbd3ac015f033202fe6f2', id: `popover-${this._uuid}`, position: "bottom", reference: `#${this._uuid}-control`, "prevent-auto-hide": true, active: this.active }, index.h("chi-time", { key: '684a2814efcaf4255ba07742af4e9b3b5dbaef72', "display-seconds": this.displaySeconds, "excluded-hours": this._excludedHours, "excluded-minutes": this._excludedMinutes, "excluded-seconds": this._excludedSeconds, format: this.format, value: this.value, "seconds-step": this.secondsStep, "minutes-step": this.minutesStep })));
        return (index.h("div", { key: 'c4a7cfe21119aedb33f4fac064349b987dba6045', class: this.disabled ? '-disabled' : '' }, index.h("div", { key: '901c7e426a856fa6095876f496e5676de074ec98', class: "chi-input__wrapper -icon--right" }, index.h("input", { key: 'bade73cd8c1082516eb9caa0f3725550112dd4fb', id: `${this._uuid}-control`, class: `chi-input
              ${this.active ? '-focus' : ''}`, type: `text`, placeholder: this.format === '12hr' ? '--:-- --' : '--:--', ref: (el) => (this._input = el), value: this.value, disabled: this.disabled }), index.h("chi-icon", { key: 'f0fc7e7bde70fb8475a552342553718c30832962', icon: "circle-clock-outline" })), !this.disabled && chiPopover));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["timeChanged"]
    }; }
};

exports.chi_time_picker = TimePicker;
