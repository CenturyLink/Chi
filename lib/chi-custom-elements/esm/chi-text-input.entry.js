import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-422a57bb.js';
import { C as CHI_STATES } from './states-a5be3f93.js';
import { I as ICON_COLORS } from './color-b6e4748b.js';
import { c as TEXT_INPUT_SIZES } from './size-9d0c9884.js';
import { i as TEXT_INPUT_TYPES, c as CLASSES } from './constants-e61c7d0c.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';

const textInputCss = "chi-text-input.sc-chi-text-input-h{display:block;width:100%}";
const ChiTextInputStyle0 = textInputCss;

const TextInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventChange = createEvent(this, "chiChange", 7);
        this.eventInput = createEvent(this, "chiInput", 7);
        this.eventFocus = createEvent(this, "chiFocus", 7);
        this.eventBlur = createEvent(this, "chiBlur", 7);
        /**
         * To define type of Text input
         */
        this.type = 'text';
        /**
         * To define size of Text input
         */
        this.size = 'md';
        /**
         * To define value of Text input
         */
        this.value = '';
        /**
         * To disable Text input
         */
        this.disabled = false;
        /**
         * To prevent the Text input value from being changed
         */
        this.readonly = false;
        /**
         * To disable Value attribute mutation
         */
        this.preventValueMutation = false;
        /**
         * To render Text Input with Spinner
         */
        this.spinner = false;
        /**
         * To show copy text icon
         */
        this.copyText = false;
    }
    stateValidation(newValue) {
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for input. If provided, valid values are: ${validValues}. `);
        }
    }
    sizeValidation(newValue) {
        const validValues = TEXT_INPUT_SIZES.join(', ');
        if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for input. If provided, valid values are: ${validValues}. `);
        }
    }
    colorValidation(newValue) {
        const validValues = ICON_COLORS.join(', ');
        if (newValue && !ICON_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for icon. If provided, valid values are: ${validValues}. `);
        }
    }
    iconLeftColorValidation(newValue) {
        this.colorValidation(newValue);
    }
    iconRightColorValidation(newValue) {
        this.colorValidation(newValue);
    }
    typeValidation(newValue) {
        const validValues = TEXT_INPUT_TYPES.join(', ');
        if (newValue && !TEXT_INPUT_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for input. If provided, valid values are: ${validValues}. `);
        }
    }
    _handleValueInput(valueChange) {
        const newValue = valueChange.target.value;
        if (!this.preventValueMutation) {
            this.value = newValue;
        }
        this.eventInput.emit(newValue);
    }
    _handleValueChange(valueChange) {
        const newValue = valueChange.target.value;
        this.eventChange.emit(newValue);
    }
    componentWillLoad() {
        this.stateValidation(this.state);
        this.iconLeftColorValidation(this.iconLeftColor);
        this.iconRightColorValidation(this.iconRightColor);
        this.sizeValidation(this.size);
        this.typeValidation(this.type);
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    getInput() {
        return (h("input", { type: this.type, class: `chi-input
          ${this.state ? `-${this.state}` : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this._status ? `-${this._status}` : ''}
          ${this.extraClass ? this.extraClass : ''}
        `, placeholder: this.placeholder || '', value: this.value, name: this.name || '', disabled: this.disabled, readonly: this.readonly, id: this.el.id ? `${this.el.id}-control` : null, onFocus: () => this.eventFocus.emit(), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: (ev) => this._handleValueChange(ev) }));
    }
    _getIconLeft() {
        return this.iconLeft && h("chi-icon", { color: this.iconLeftColor || null, icon: this.iconLeft });
    }
    _getIconRight() {
        return this.iconRight && !this.spinner && h("chi-icon", { color: this.iconRightColor || null, icon: this.iconRight });
    }
    _getSpinner() {
        var _a;
        const spinnerSizeMapping = {
            sm: 'xs',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--3',
        };
        return this.spinner && h("chi-spinner", { size: (_a = spinnerSizeMapping[this.size]) !== null && _a !== void 0 ? _a : 'sm' });
    }
    _getHelperMessage() {
        return this.helperMessage && h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    _shouldWrapInput() {
        return Boolean(this.iconLeft || this.iconRight || this.spinner || this.helperMessage || this.copyText);
    }
    _addCopyText(input) {
        const copySizeMapping = {
            xs: 'xs',
            sm: 'xs',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--3',
        };
        return (h("div", { class: `${CLASSES.FLEX} ${CLASSES.ALIGN_ITEMS_CENTER}` }, input, h("chi-copy-text", { text: this.value, disabled: this.disabled, size: copySizeMapping[this.size] })));
    }
    _addHelperMessage(input) {
        return (h(Fragment, null, input, this._getHelperMessage()));
    }
    _getWrappedInput(input) {
        const inputClasses = [
            'chi-input__wrapper',
            this.iconLeft && '-icon--left',
            this.iconRight && '-icon--right',
            this.copyText && '-flex--grow1',
        ]
            .filter(Boolean)
            .join(' ');
        input = (h("div", { class: inputClasses }, input, this._getIconLeft(), this._getIconRight(), this._getSpinner()));
        if (this.copyText) {
            input = this._addCopyText(input);
        }
        if (this.helperMessage) {
            input = this._addHelperMessage(input);
        }
        return input;
    }
    render() {
        let input = this.getInput();
        if (this._shouldWrapInput()) {
            input = this._getWrappedInput(input);
        }
        return input;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"],
        "size": ["sizeValidation"],
        "iconLeftColor": ["iconLeftColorValidation"],
        "iconRightColor": ["iconRightColorValidation"],
        "type": ["typeValidation"]
    }; }
};
TextInput.style = ChiTextInputStyle0;

export { TextInput as chi_text_input };
