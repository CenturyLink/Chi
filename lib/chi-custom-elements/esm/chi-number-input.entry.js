import { r as registerInstance, c as createEvent, h, g as getElement } from './index-cde0ed0d.js';
import { C as CHI_STATES } from './states-a5be3f93.js';
import { a as addMutationObserver } from './mutationObserver-d6ac3ea2.js';

const numberInputCss = "chi-number-input.sc-chi-number-input-h{display:-ms-inline-flexbox !important;display:inline-flex !important;position:relative;vertical-align:middle}";
const ChiNumberInputStyle0 = numberInputCss;

const NumberInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiChange = createEvent(this, "chiChange", 7);
        this.chiInput = createEvent(this, "chiInput", 7);
        this.chiNumberInvalid = createEvent(this, "chiNumberInvalid", 7);
        this.chiFocus = createEvent(this, "chiFocus", 7);
        this.chiBlur = createEvent(this, "chiBlur", 7);
        this.chiClick = createEvent(this, "chiClick", 7);
        this.initialValue = undefined;
        this.value = undefined;
        this.step = 1;
        this.max = undefined;
        this.min = undefined;
        this.disabled = undefined;
        this.required = undefined;
        this.size = undefined;
        this.expanded = undefined;
        this.inputstyle = undefined;
        this.preventValueMutation = undefined;
        this.state = undefined;
        this.helperMessage = undefined;
    }
    inputStyleValidation(newValue) {
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid inputstyle for number input. If provided, valid values are: ${CHI_STATES.join(', ')}. `);
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
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
        return (h("input", { type: "number", ref: (el) => (this._numberInput = el), class: `chi-input ${this.inputstyle ? `-${this.inputstyle}` : ''} ${this.state ? `-${this.state}` : ''}`, disabled: this.disabled, required: this.required, step: this.step, max: this.max, min: this.min, value: this.value, onClick: (ev) => this.chiClick.emit(ev), onChange: (ev) => this.handleChange(ev), onInput: (ev) => this.handleInput(ev), onFocus: () => this.chiFocus.emit(), onBlur: (ev) => this.handleBlur(ev), id: this.el.id ? `${this.el.id}-control` : null }));
    }
    getBaseNumberInput() {
        return (h("div", { class: `chi-number-input ${this.size ? `-${this.size}` : ''}` }, this.getInput(), h("button", { disabled: this.isDecreaseDisabled(), onClick: (ev) => this.decrement(ev), "aria-label": "Decrease" }), h("button", { disabled: this.isIncreaseDisabled(), onClick: (ev) => this.increment(ev), "aria-label": "Increase" })));
    }
    getExpandedNumberInput() {
        return (h("div", { class: `chi-number-input -expanded ${this.size ? `-${this.size}` : ''}` }, this.getInput(), h("button", { class: "chi-button -icon", disabled: this.isDecreaseDisabled(), onClick: (ev) => this.decrement(ev), "aria-label": "Decrease" }, h("div", { class: "chi-button__content" }, h("chi-icon", { icon: "minus" }))), h("button", { class: "chi-button -icon", disabled: this.isIncreaseDisabled(), onClick: (ev) => this.increment(ev), "aria-label": "Increase" }, h("div", { class: "chi-button__content" }, h("chi-icon", { icon: "plus" })))));
    }
    isDecreaseDisabled() {
        return !!(this.min && Number(this.value) <= this.min);
    }
    isIncreaseDisabled() {
        return !!(this.max && (Number(this.value) + this.step > this.max || Number(this.value) >= this.max));
    }
    getHelperMessage() {
        return h("chi-helper-message", { state: this.inputstyle }, this.helperMessage);
    }
    render() {
        let input = this.expanded ? this.getExpandedNumberInput() : this.getBaseNumberInput();
        if (this.helperMessage) {
            input = (h("div", { key: 'd96b2a83309c6a1fab5e2dbb1e7d0e18e8860e5e', class: "chi-input__wrapper" }, input, this.getHelperMessage()));
        }
        return input;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "inputstyle": ["inputStyleValidation"]
    }; }
};
NumberInput.style = ChiNumberInputStyle0;

export { NumberInput as chi_number_input };
