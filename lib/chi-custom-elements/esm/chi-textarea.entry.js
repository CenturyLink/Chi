import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { C as CHI_STATES } from './states-a5be3f93.js';
import { I as ICON_COLORS } from './color-b6e4748b.js';
import { c as TEXT_INPUT_SIZES } from './size-9d0c9884.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';
import { U as UTILITY_CLASSES } from './classes-35827c53.js';

const textareaCss = "chi-textarea.sc-chi-textarea-h{display:block;width:100%}";
const ChiTextareaStyle0 = textareaCss;

const Textarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventChange = createEvent(this, "chiChange", 7);
        this.eventInput = createEvent(this, "chiInput", 7);
        this.eventFocus = createEvent(this, "chiFocus", 7);
        this.eventBlur = createEvent(this, "chiBlur", 7);
        /**
         * To define size of Textarea
         */
        this.size = 'md';
        /**
         * To read value of Textarea
         */
        this.value = '';
        /**
         * To disable Textarea
         */
        this.disabled = false;
        /**
         * To prevent Textarea value from being changed
         */
        this.readonly = false;
        /**
         * To show copy text icon
         */
        this.copyText = false;
    }
    stateValidation(newValue) {
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for textarea. If provided, valid values are: ${validValues}. `);
        }
    }
    sizeValidation(newValue) {
        const validValues = TEXT_INPUT_SIZES.join(', ');
        if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for textarea. If provided, valid values are: ${validValues}. `);
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
    _handleValueInput(valueChange) {
        this.value = valueChange.target.value;
        this.eventInput.emit(this.value);
    }
    _handleValueChange() {
        this.eventChange.emit(this.value);
    }
    componentWillLoad() {
        this.value = this.el.textContent;
        this.stateValidation(this.state);
        this.iconLeftColorValidation(this.iconLeftColor);
        this.iconRightColorValidation(this.iconRightColor);
        this.sizeValidation(this.size);
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    _getTextAreaElement() {
        const classes = [
            'chi-input',
            this.state && `-${this.state}`,
            this.size && `-${this.size}`,
            this._status && `-${this._status}`,
        ]
            .filter(Boolean)
            .join(' ');
        return (h("textarea", { class: classes, placeholder: this.placeholder || '', name: this.name || '', disabled: this.disabled, readonly: this.readonly, id: this.el.id ? `${this.el.id}-control` : null, onFocus: () => this.eventFocus.emit(), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: () => this._handleValueChange() }, h("slot", null)));
    }
    _getHelperMessage() {
        return this.helperMessage && h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    _getIconsData() {
        const data = { classes: '', iconRight: null, iconLeft: null };
        const classes = [];
        if (this.iconRight) {
            data.iconRight = h("chi-icon", { color: this.iconRightColor || null, icon: this.iconRight });
            classes.push('-icon--right');
        }
        if (this.iconLeft) {
            data.iconLeft = h("chi-icon", { color: this.iconLeftColor || null, icon: this.iconLeft });
            classes.push('-icon--left');
        }
        data.classes = classes.join(' ');
        return data;
    }
    _shouldWrapTextarea() {
        return Boolean(this.iconLeft || this.iconRight || this.helperMessage || this.copyText);
    }
    _getWrappedTextarea(textareaElement) {
        const iconsData = this._getIconsData();
        const helperMessage = this._getHelperMessage();
        textareaElement = (h("div", { class: `chi-input__wrapper ${iconsData.classes}${this.copyText ? ' -flex--grow1' : ''}` }, textareaElement, iconsData.iconLeft, iconsData.iconRight, helperMessage));
        if (this.copyText) {
            textareaElement = this._addCopyText(textareaElement);
        }
        return textareaElement;
    }
    _addCopyText(textareaElement) {
        const copySizeMapping = {
            xs: 'xs',
            sm: 'xs',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--3',
        };
        return (h("div", { class: `${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.ALIGN_ITEMS.START}` }, textareaElement, h("chi-copy-text", { text: this.value, disabled: this.disabled, size: copySizeMapping[this.size] })));
    }
    render() {
        let textareaElement = this._getTextAreaElement();
        if (this._shouldWrapTextarea()) {
            textareaElement = this._getWrappedTextarea(textareaElement);
        }
        return textareaElement;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"],
        "size": ["sizeValidation"],
        "iconLeftColor": ["iconLeftColorValidation"],
        "iconRightColor": ["iconRightColorValidation"]
    }; }
};
Textarea.style = ChiTextareaStyle0;

export { Textarea as chi_textarea };
