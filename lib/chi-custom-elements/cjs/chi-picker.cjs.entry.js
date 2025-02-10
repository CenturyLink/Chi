'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c2d46a0.js');
const types = require('./types-d1afcd1d.js');
const classes = require('./classes-b81f8b66.js');
const size = require('./size-19ce557b.js');
const mutationObserver = require('./mutationObserver-9c7c8fdd.js');
const utils = require('./utils-7f208c7f.js');
const v4 = require('./v4-daefbed8.js');

const pickerCss = "chi-picker.sc-chi-picker-h label.sc-chi-picker{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}";
const ChiPickerStyle0 = pickerCss;

const Picker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiChange = index.createEvent(this, "chiChange", 7);
        this.id = v4.v4();
        this.options = undefined;
        this.size = 'md';
        this.pill = false;
        this.showInput = undefined;
        this.type = 'checkbox';
        this.label = undefined;
        this.required = false;
        this.optional = false;
        this.infoIcon = false;
        this.infoIconMessage = '';
        this.helperMessage = undefined;
        this.state = undefined;
    }
    typeValidation(newValue) {
        if (!types.PICKER_INPUT_TYPES.includes(newValue)) {
            throw new Error(`Picker type must be one of ${types.PICKER_INPUT_TYPES.join(' ')}`);
        }
    }
    pillValidation(newValue) {
        if (newValue && this.showInput) {
            throw new Error('Pill layout is not valid with show input property');
        }
    }
    sizeValidation(newValue) {
        if (this.pill && !size.PICKER_PILL_SIZES.includes(newValue)) {
            this.size = 'sm';
        }
        else if (!this.pill && !size.PICKER_SIZES.includes(newValue)) {
            this.size = 'md';
        }
    }
    componentWillLoad() {
        this.options = (this.options || []).map((item) => (Object.assign(Object.assign({}, item), { id: item.id || `${this.id}-${v4.v4()}`, checked: item.checked || false })));
        this.sizeValidation(this.size);
    }
    connectedCallback() {
        mutationObserver.addMutationObserver.call(this);
    }
    _isRadio() {
        return this.type === 'radio';
    }
    _getLabel() {
        return (index.h("chi-label", { required: this.required, optional: this.optional, "info-icon": this.infoIcon, "info-icon-message": this.infoIconMessage }, this.label));
    }
    _getItem(item) {
        const classes$1 = [classes.PICKER_CLASSES.PICKER, this.pill && classes.PILL_CLASS, classes.GENERIC_SIZE_CLASSES[this.size.toUpperCase()]]
            .filter(Boolean)
            .join(' ');
        return (index.h("div", { class: classes$1 }, index.h("input", { class: classes.PICKER_CLASSES.INPUT, name: `${this.id}-group`, id: item.id, disabled: item.disabled, checked: item.checked, type: this.type, "aria-checked": item.checked, "aria-labelledby": `${item.id}-label`, onClick: (ev) => this._onClick(item, ev) }), this._getItemLabel(item)));
    }
    _getItemLabel(item) {
        const endSlot = this.el.querySelector(`[slot=content-end-${item.id}]`);
        const contentSlot = item.id && this.el.querySelector(`[slot="${item.id}-content"]`);
        const isSimpleLabelContent = this.pill || [this.showInput, endSlot, item.description, contentSlot].every((item) => !item);
        return (index.h("label", { htmlFor: item.id, id: `${item.id}-label` }, isSimpleLabelContent ? item.label : this._getComplexItemLabelContent(item, endSlot), this._getItemContentSlot(item)));
    }
    _getItemContentSlot(item) {
        return (index.h("div", { class: classes.PICKER_CLASSES.CONTENT_CUSTOM }, index.h("slot", { name: `${item.id}-content` })));
    }
    _getComplexItemLabelContent(item, endSlot) {
        return endSlot ? (index.h("div", { class: utils.joinArrayValues([classes.PICKER_CLASSES.CONTENT, classes.UTILITY_CLASSES.SIZING.W100]) }, this._getContentStart(item, true), index.h("div", { class: classes.PICKER_CLASSES.CONTENT_END }, index.h("slot", { name: `content-end-${item.id}` })))) : (this._getContentStart(item));
    }
    _getContentStart(item, hasEndContent = false) {
        const description = item.description && (index.h("div", { class: `${classes.PICKER_CLASSES.DESCRIPTION} ${this.showInput ? '' : classes.UTILITY_CLASSES.MARGIN.LEFT[0]}` }, item.description));
        return description || hasEndContent ? (index.h("div", { class: utils.joinArrayValues([
                classes.PICKER_CLASSES.CONTENT_START,
                hasEndContent && classes.UTILITY_CLASSES.SIZING.W100,
                hasEndContent && classes.UTILITY_CLASSES.SIZING.WSM65,
            ]) }, this._getLabelContent(item), description)) : (this._getLabelContent(item));
    }
    _getLabelContent(item) {
        return this.showInput ? (index.h("div", { class: `${classes.FORM_CLASSES.FORM_ITEM} ${classes.ROW_CLASS}` }, index.h("span", { class: this.type === 'checkbox' ? classes.PICKER_CLASSES.CHECKBOX : classes.PICKER_CLASSES.RADIO }), index.h("span", { class: classes.PICKER_CLASSES.LABEL }, item.label))) : (index.h("div", { class: `${classes.FORM_CLASSES.FORM_ITEM} ${classes.ROW_CLASS}` }, index.h("span", { class: `${classes.PICKER_CLASSES.LABEL} ${classes.UTILITY_CLASSES.MARGIN.LEFT[0]}` }, item.label)));
    }
    /**
     * Default change event handler
     */
    _onClick(item, ev) {
        ev.stopPropagation();
        if (this._isRadio()) {
            this.options.forEach((option) => (option.checked = false));
        }
        item.checked = ev.target.checked;
        this.chiChange.emit(this.options);
    }
    _getOptions() {
        var _a;
        const options = (_a = this.options) === null || _a === void 0 ? void 0 : _a.map((item) => this._getItem(item));
        return this.pill ? index.h("div", { class: classes.UTILITY_CLASSES.DISPLAY.FLEX }, options) : options;
    }
    _getFieldset() {
        return (index.h("fieldset", null, this.label && this._getLabel(), this._getOptions()));
    }
    render() {
        let fieldSet = this._getFieldset();
        if (this.helperMessage) {
            fieldSet = (index.h("div", { key: '836075b77ba2319b36e45c5baa16b7c17e3078fb', class: classes.INPUT_CLASSES.WRAPPER }, fieldSet, index.h("chi-helper-message", { key: '31d392a5e73e3614240d79cc0947c182ca51db54', state: this.state }, this.helperMessage)));
        }
        return fieldSet;
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "type": ["typeValidation"],
        "pill": ["pillValidation"],
        "size": ["sizeValidation"]
    }; }
};
Picker.style = ChiPickerStyle0;

exports.chi_picker = Picker;
