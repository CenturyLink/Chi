import { r as registerInstance, c as createEvent, h, g as getElement } from './index-cde0ed0d.js';
import { F as FORM_WRAPPER_LAYOUTS, e as FORM_WRAPPER_TYPES } from './constants-76e3b213.js';
import { F as FORM_CLASSES, U as UTILITY_CLASSES, g as FORM_WRAPPER_CLASSES, h as INPUT_CLASSES } from './classes-fca9c660.js';
import { C as CHI_STATES } from './states-a5be3f93.js';
import { v as v4 } from './v4-4e9fbb64.js';

const formWrapperCss = "chi-form-wrapper.sc-chi-form-wrapper-h{display:block}";
const ChiFormWrapperStyle0 = formWrapperCss;

const FormWrapper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiChange = createEvent(this, "chiChange", 7);
        this.id = v4();
        this.type = undefined;
        this.layout = 'stacked';
        this.options = undefined;
        this.label = undefined;
        this.state = undefined;
        this.helperMessage = undefined;
    }
    layoutValidation(newValue) {
        if (!FORM_WRAPPER_LAYOUTS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for form wrapper layout. Valid values are: ${FORM_WRAPPER_LAYOUTS.join(', ')}.`);
        }
    }
    typeValidation(newValue) {
        if (!FORM_WRAPPER_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for form wrapper type. Valid values are: ${FORM_WRAPPER_TYPES.join(', ')}.`);
        }
    }
    stateValidation(newValue) {
        if (!CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for form wrapper state. Valid values are: ${CHI_STATES.join(', ')}.`);
        }
    }
    componentWillLoad() {
        this.options = this.options.map((item) => (Object.assign(Object.assign({}, item), { id: item.id || `${this.id}-${v4()}`, checked: item.checked || false })));
    }
    _getLabel() {
        if (this.label) {
            return h("chi-label", null, this.label);
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
        return (h("chi-checkbox", { id: item.id, label: item.label, checked: checked, disabled: item.disabled, name: item.name, state: this.state, indeterminate: indeterminate, onChiChange: (ev) => this._onChange(ev) }));
    }
    _getRadioButton(item) {
        return (h("chi-radio-button", { id: item.id, label: item.label, checked: item.checked, disabled: item.disabled, name: item.name, state: this.state, onChiChange: (ev) => this._onChange(ev) }));
    }
    _getItemWrapperClasses(isLast) {
        return [
            FORM_CLASSES.FORM_ITEM,
            this.layout !== 'inline' && !isLast && UTILITY_CLASSES.MARGIN.BOTTOM[1],
            this.layout === 'inline' && FORM_WRAPPER_CLASSES.LAYOUTS.INLINE,
        ]
            .filter(Boolean)
            .join(' ');
    }
    /**
     * @returns a given element in a form item wrapper with specified layout
     */
    _getFormItem(element, isLast = false) {
        const classes = this._getItemWrapperClasses(isLast);
        return h("div", { class: classes }, element);
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
        return (h("fieldset", null, this._getLabel(), this._getItems()));
    }
    render() {
        let fieldSet = this._getFieldset();
        if (this.helperMessage) {
            fieldSet = (h("div", { key: '7aa44b1cd847988432b07169d3a81f43b23fce4c', class: INPUT_CLASSES.WRAPPER }, fieldSet, h("chi-helper-message", { key: 'b3010d8f73fea9004eebaefd6b2ba1728ee248df', state: this.state }, this.helperMessage)));
        }
        return fieldSet;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "layout": ["layoutValidation"],
        "type": ["typeValidation"],
        "state": ["stateValidation"]
    }; }
};
FormWrapper.style = ChiFormWrapperStyle0;

export { FormWrapper as chi_form_wrapper };
