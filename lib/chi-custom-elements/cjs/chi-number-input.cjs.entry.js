'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const states = require('./states-47b0ca3a.js');
const mutationObserver = require('./mutationObserver-4de59f05.js');

const numberInputCss = "chi-number-input.sc-chi-number-input-h{display:-ms-inline-flexbox !important;display:inline-flex !important;position:relative;vertical-align:middle}";
const ChiNumberInputStyle0 = numberInputCss;

const NumberInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiChange = index.createEvent(this, "chiChange", 7);
        this.chiInput = index.createEvent(this, "chiInput", 7);
        this.chiNumberInvalid = index.createEvent(this, "chiNumberInvalid", 7);
        this.chiFocus = index.createEvent(this, "chiFocus", 7);
        this.chiBlur = index.createEvent(this, "chiBlur", 7);
        this.chiClick = index.createEvent(this, "chiClick", 7);
        /**
         * used to set a step to indicate the expected granularity
         */
        this.step = 1;
    }
    inputStyleValidation(newValue) {
        if (newValue && !states.CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid inputstyle for number input. If provided, valid values are: ${states.CHI_STATES.join(', ')}. `);
        }
    }
    connectedCallback() {
        mutationObserver.addMutationObserver.call(this);
        this.initialValue = this.value;
    }
    handleChange(ev) {
        ev.stopPropagation();
        this.chiChange.emit(this.value);
    }
    handleInput(ev) {
        const input = ev.target;
        ev.stopPropagation();
        this.value = input.value;
        this.chiInput.emit(this.value);
        if (!input.validity.valid)
            this.chiNumberInvalid.emit();
    }
    handleBlur(ev) {
        const target = ev.relatedTarget;
        if (target && target.offsetParent === this._numberInput.offsetParent) {
            return;
        }
        this.chiBlur.emit(ev);
    }
    emitEventsOnClick(ev) {
        this.chiInput.emit(this.value);
        this.chiChange.emit(this.value);
        this.chiClick.emit(ev);
    }
    increment(clickEv) {
        this.el.querySelector('input').focus();
        this._numberInput.stepUp();
        this.value = this._numberInput.value;
        this.emitEventsOnClick(clickEv);
    }
    decrement(clickEv) {
        this.el.querySelector('input').focus();
        this._numberInput.stepDown();
        this.value = this._numberInput.value;
        this.emitEventsOnClick(clickEv);
    }
    /**
     * Generates and returns input element
     */
    getInput() {
        return (index.h("input", { type: "number", ref: (el) => (this._numberInput = el), class: `chi-input ${this.inputstyle ? `-${this.inputstyle}` : ''} ${this.state ? `-${this.state}` : ''}`, disabled: this.disabled, required: this.required, step: this.step, max: this.max, min: this.min, value: this.value, onClick: (ev) => this.chiClick.emit(ev), onChange: (ev) => this.handleChange(ev), onInput: (ev) => this.handleInput(ev), onFocus: () => this.chiFocus.emit(), onBlur: (ev) => this.handleBlur(ev), id: this.el.id ? `${this.el.id}-control` : null }));
    }
    getBaseNumberInput() {
        return (index.h("div", { class: `chi-number-input ${this.size ? `-${this.size}` : ''}` }, this.getInput(), index.h("button", { disabled: this.isDecreaseDisabled(), onClick: (ev) => this.decrement(ev), "aria-label": "Decrease" }), index.h("button", { disabled: this.isIncreaseDisabled(), onClick: (ev) => this.increment(ev), "aria-label": "Increase" })));
    }
    getExpandedNumberInput() {
        return (index.h("div", { class: `chi-number-input -expanded ${this.size ? `-${this.size}` : ''}` }, this.getInput(), index.h("button", { class: "chi-button -icon", disabled: this.isDecreaseDisabled(), onClick: (ev) => this.decrement(ev), "aria-label": "Decrease" }, index.h("div", { class: "chi-button__content" }, index.h("chi-icon", { icon: "minus" }))), index.h("button", { class: "chi-button -icon", disabled: this.isIncreaseDisabled(), onClick: (ev) => this.increment(ev), "aria-label": "Increase" }, index.h("div", { class: "chi-button__content" }, index.h("chi-icon", { icon: "plus" })))));
    }
    isDecreaseDisabled() {
        return !!(this.min && Number(this.value) <= this.min);
    }
    isIncreaseDisabled() {
        return !!(this.max && (Number(this.value) + this.step > this.max || Number(this.value) >= this.max));
    }
    getHelperMessage() {
        return index.h("chi-helper-message", { state: this.inputstyle }, this.helperMessage);
    }
    render() {
        let input = this.expanded ? this.getExpandedNumberInput() : this.getBaseNumberInput();
        if (this.helperMessage) {
            input = (index.h("div", { key: 'b5fb9240ff3697dec4899af1b0d45cbf3fba4878', class: "chi-input__wrapper" }, input, this.getHelperMessage()));
        }
        return input;
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "inputstyle": ["inputStyleValidation"]
    }; }
};
NumberInput.style = ChiNumberInputStyle0;

exports.chi_number_input = NumberInput;
