'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');
const constants = require('./constants-be8ca4ba.js');
const classes = require('./classes-2a12a2f5.js');
const states = require('./states-47b0ca3a.js');
const v4 = require('./v4-d3836773.js');

const formWrapperCss = "chi-form-wrapper.sc-chi-form-wrapper-h{display:block}";
const ChiFormWrapperStyle0 = formWrapperCss;

const FormWrapper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiChange = index.createEvent(this, "chiChange", 7);
        this.id = v4.v4();
        this.type = undefined;
        this.layout = 'stacked';
        this.options = undefined;
        this.label = undefined;
        this.state = undefined;
        this.helperMessage = undefined;
    }
    layoutValidation(newValue) {
        if (!constants.FORM_WRAPPER_LAYOUTS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for form wrapper layout. Valid values are: ${constants.FORM_WRAPPER_LAYOUTS.join(', ')}.`);
        }
    }
    typeValidation(newValue) {
        if (!constants.FORM_WRAPPER_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for form wrapper type. Valid values are: ${constants.FORM_WRAPPER_TYPES.join(', ')}.`);
        }
    }
    stateValidation(newValue) {
        if (!states.CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for form wrapper state. Valid values are: ${states.CHI_STATES.join(', ')}.`);
        }
    }
    componentWillLoad() {
        this.options = this.options.map((item) => (Object.assign(Object.assign({}, item), { id: item.id || `${this.id}-${v4.v4()}`, checked: item.checked || false })));
    }
    _getLabel() {
        if (this.label) {
            return index.h("chi-label", null, this.label);
        }
    }
    _getItems() {
        var _a;
        const itemGetter = {
            checkbox: this._getCheckbox,
            radio: this._getRadioButton,
        }[this.type].bind(this);
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.map((item, index) => this._getFormItem(itemGetter(item), index === this.options.length - 1));
    }
    _getCheckbox(item) {
        const checked = item.checked && item.checked !== 'indeterminate';
        const indeterminate = item.checked === 'indeterminate';
        return (index.h("chi-checkbox", { id: item.id, label: item.label, checked: checked, disabled: item.disabled, name: item.name, state: this.state, indeterminate: indeterminate, onChiChange: (ev) => this._onChange(ev) }));
    }
    _getRadioButton(item) {
        return (index.h("chi-radio-button", { id: item.id, label: item.label, checked: item.checked, disabled: item.disabled, name: item.name, state: this.state, onChiChange: (ev) => this._onChange(ev) }));
    }
    _getItemWrapperClasses(isLast) {
        return [
            classes.FORM_CLASSES.FORM_ITEM,
            this.layout !== 'inline' && !isLast && classes.UTILITY_CLASSES.MARGIN.BOTTOM[1],
            this.layout === 'inline' && classes.FORM_WRAPPER_CLASSES.LAYOUTS.INLINE,
        ]
            .filter(Boolean)
            .join(' ');
    }
    /**
     * @returns a given element in a form item wrapper with specified layout
     */
    _getFormItem(element, isLast = false) {
        const classes = this._getItemWrapperClasses(isLast);
        return index.h("div", { class: classes }, element);
    }
    /**
     * Default change event handler
     */
    _onChange(ev) {
        const target = ev.target;
        const customHandler = {
            radio: () => this._onRadioButtonChange(target),
        }[this.type];
        ev.stopPropagation();
        if (customHandler) {
            customHandler();
        }
        else {
            this.options.find((item) => item.id === target.id).checked = !!target.checked;
        }
        this.chiChange.emit(this.options);
    }
    _onRadioButtonChange(target) {
        this.options.forEach((item) => {
            item.checked = item.id === target.id;
        });
    }
    _getFieldset() {
        return (index.h("fieldset", null, this._getLabel(), this._getItems()));
    }
    render() {
        let fieldSet = this._getFieldset();
        if (this.helperMessage) {
            fieldSet = (index.h("div", { key: '7aa44b1cd847988432b07169d3a81f43b23fce4c', class: classes.INPUT_CLASSES.WRAPPER }, fieldSet, index.h("chi-helper-message", { key: 'b3010d8f73fea9004eebaefd6b2ba1728ee248df', state: this.state }, this.helperMessage)));
        }
        return fieldSet;
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "layout": ["layoutValidation"],
        "type": ["typeValidation"],
        "state": ["stateValidation"]
    }; }
};
FormWrapper.style = ChiFormWrapperStyle0;

exports.chi_form_wrapper = FormWrapper;
