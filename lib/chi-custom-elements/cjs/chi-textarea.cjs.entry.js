'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const states = require('./states-47b0ca3a.js');
const color = require('./color-04a49847.js');
const size = require('./size-19ce557b.js');
const mutationObserver = require('./mutationObserver-4de59f05.js');
const classes = require('./classes-6cb2683d.js');

const textareaCss = "chi-textarea.sc-chi-textarea-h{display:block;width:100%}";
const ChiTextareaStyle0 = textareaCss;

const Textarea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.eventChange = index.createEvent(this, "chiChange", 7);
        this.eventInput = index.createEvent(this, "chiInput", 7);
        this.eventFocus = index.createEvent(this, "chiFocus", 7);
        this.eventBlur = index.createEvent(this, "chiBlur", 7);
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
        const validValues = states.CHI_STATES.join(', ');
        if (newValue && !states.CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for textarea. If provided, valid values are: ${validValues}. `);
        }
    }
    sizeValidation(newValue) {
        const validValues = size.TEXT_INPUT_SIZES.join(', ');
        if (newValue && !size.TEXT_INPUT_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for textarea. If provided, valid values are: ${validValues}. `);
        }
    }
    colorValidation(newValue) {
        const validValues = color.ICON_COLORS.join(', ');
        if (newValue && !color.ICON_COLORS.includes(newValue)) {
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
        mutationObserver.addMutationObserver.call(this);
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
        return (index.h("textarea", { class: classes, placeholder: this.placeholder || '', name: this.name || '', disabled: this.disabled, readonly: this.readonly, id: this.el.id ? `${this.el.id}-control` : null, onFocus: () => this.eventFocus.emit(), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: () => this._handleValueChange() }, index.h("slot", null)));
    }
    _getHelperMessage() {
        return this.helperMessage && index.h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    _getIconsData() {
        const data = { classes: '', iconRight: null, iconLeft: null };
        const classes = [];
        if (this.iconRight) {
            data.iconRight = index.h("chi-icon", { color: this.iconRightColor || null, icon: this.iconRight });
            classes.push('-icon--right');
        }
        if (this.iconLeft) {
            data.iconLeft = index.h("chi-icon", { color: this.iconLeftColor || null, icon: this.iconLeft });
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
        textareaElement = (index.h("div", { class: `chi-input__wrapper ${iconsData.classes}${this.copyText ? ' -flex--grow1' : ''}` }, textareaElement, iconsData.iconLeft, iconsData.iconRight, helperMessage));
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
        return (index.h("div", { class: `${classes.UTILITY_CLASSES.DISPLAY.FLEX} ${classes.UTILITY_CLASSES.ALIGN_ITEMS.START}` }, textareaElement, index.h("chi-copy-text", { text: this.value, disabled: this.disabled, size: copySizeMapping[this.size] })));
    }
    render() {
        let textareaElement = this._getTextAreaElement();
        if (this._shouldWrapTextarea()) {
            textareaElement = this._getWrappedTextarea(textareaElement);
        }
        return textareaElement;
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"],
        "size": ["sizeValidation"],
        "iconLeftColor": ["iconLeftColorValidation"],
        "iconRightColor": ["iconRightColorValidation"]
    }; }
};
Textarea.style = ChiTextareaStyle0;

exports.chi_textarea = Textarea;
