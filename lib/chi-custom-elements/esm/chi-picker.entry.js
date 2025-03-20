import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { P as PICKER_INPUT_TYPES } from './types-870494ef.js';
import { r as PICKER_CLASSES, s as PILL_CLASS, G as GENERIC_SIZE_CLASSES, U as UTILITY_CLASSES, F as FORM_CLASSES, R as ROW_CLASS, j as INPUT_CLASSES } from './classes-26189a5f.js';
import { P as PICKER_PILL_SIZES, a as PICKER_SIZES } from './size-9d0c9884.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';
import { j as joinArrayValues } from './utils-48628cb4.js';
import { v as v4 } from './v4-a4ec28c0.js';

const pickerCss = "chi-picker.sc-chi-picker-h label.sc-chi-picker{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}";
const ChiPickerStyle0 = pickerCss;

const Picker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiChange = createEvent(this, "chiChange", 7);
        /**
         * Picker size { md, lg }.
         */
        this.size = 'md';
        /**
         * To set pill layout of options
         */
        this.pill = false;
        /**
         * To show checkbox or radio
         */
        this.showInput = true;
        /**
         * To define input type, radio (single selection) or checkbox (multiple selection)
         */
        this.type = 'checkbox';
        /**
         * To indicate the form field is required.
         */
        this.required = false;
        /**
         * To indicate the form field is optional.
         */
        this.optional = false;
        /**
         * To indicate if info icon should be displayed.
         */
        this.infoIcon = false;
        /**
         * To provide message for info icon popover.
         */
        this.infoIconMessage = '';
        this.id = v4();
    }
    typeValidation(newValue) {
        if (!PICKER_INPUT_TYPES.includes(newValue)) {
            throw new Error(`Picker type must be one of ${PICKER_INPUT_TYPES.join(' ')}`);
        }
    }
    pillValidation(newValue) {
        if (newValue && this.showInput) {
            this.showInput = false;
        }
    }
    sizeValidation(newValue) {
        if (this.pill && !PICKER_PILL_SIZES.includes(newValue)) {
            this.size = 'sm';
        }
        else if (!this.pill && !PICKER_SIZES.includes(newValue)) {
            this.size = 'md';
        }
    }
    componentWillLoad() {
        this.options = (this.options || []).map((item) => (Object.assign(Object.assign({}, item), { id: item.id || `${this.id}-${v4()}`, checked: item.checked || false })));
        this.sizeValidation(this.size);
        this.pillValidation(this.pill);
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    _isRadio() {
        return this.type === 'radio';
    }
    _getLabel() {
        return (h("chi-label", { required: this.required, optional: this.optional, "info-icon": this.infoIcon, "info-icon-message": this.infoIconMessage }, this.label));
    }
    _getItem(item) {
        const classes = [PICKER_CLASSES.PICKER, this.pill && PILL_CLASS, GENERIC_SIZE_CLASSES[this.size.toUpperCase()]]
            .filter(Boolean)
            .join(' ');
        return (h("div", { class: classes }, h("input", { class: PICKER_CLASSES.INPUT, name: `${this.id}-group`, id: item.id, disabled: item.disabled, checked: item.checked, type: this.type, "aria-checked": item.checked, "aria-labelledby": `${item.id}-label`, onClick: (ev) => this._onClick(item, ev) }), this._getItemLabel(item)));
    }
    _getItemLabel(item) {
        const endSlot = this.el.querySelector(`[slot=content-end-${item.id}]`);
        const contentSlot = item.id && this.el.querySelector(`[slot="${item.id}-content"]`);
        const isSimpleLabelContent = this.pill || [this.showInput, endSlot, item.description, contentSlot].every((item) => !item);
        return (h("label", { htmlFor: item.id, id: `${item.id}-label` }, isSimpleLabelContent ? item.label : this._getComplexItemLabelContent(item, endSlot), contentSlot && this._getItemContentSlot(item)));
    }
    _getItemContentSlot(item) {
        return (h("div", { class: PICKER_CLASSES.CONTENT_CUSTOM }, h("slot", { name: `${item.id}-content` })));
    }
    _getComplexItemLabelContent(item, endSlot) {
        return endSlot ? (h("div", { class: joinArrayValues([PICKER_CLASSES.CONTENT, UTILITY_CLASSES.SIZING.W100]) }, this._getContentStart(item, true), h("div", { class: PICKER_CLASSES.CONTENT_END }, h("slot", { name: `content-end-${item.id}` })))) : (this._getContentStart(item));
    }
    _getContentStart(item, hasEndContent = false) {
        const description = item.description && (h("div", { class: `${PICKER_CLASSES.DESCRIPTION} ${this.showInput ? '' : UTILITY_CLASSES.MARGIN.LEFT[0]}` }, item.description));
        return description || hasEndContent ? (h("div", { class: joinArrayValues([
                PICKER_CLASSES.CONTENT_START,
                hasEndContent && UTILITY_CLASSES.SIZING.W100,
                hasEndContent && UTILITY_CLASSES.SIZING.WSM65,
            ]) }, this._getLabelContent(item), description)) : (this._getLabelContent(item));
    }
    _getLabelContent(item) {
        return this.showInput ? (h("div", { class: `${FORM_CLASSES.FORM_ITEM} ${ROW_CLASS}` }, h("span", { class: this.type === 'checkbox' ? PICKER_CLASSES.CHECKBOX : PICKER_CLASSES.RADIO }), h("span", { class: PICKER_CLASSES.LABEL }, item.label))) : (h("div", { class: `${FORM_CLASSES.FORM_ITEM} ${ROW_CLASS}` }, h("span", { class: `${PICKER_CLASSES.LABEL} ${UTILITY_CLASSES.MARGIN.LEFT[0]}` }, item.label)));
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
        return this.pill ? h("div", { class: UTILITY_CLASSES.DISPLAY.FLEX }, options) : options;
    }
    _getFieldset() {
        return (h("fieldset", null, this.label && this._getLabel(), this._getOptions()));
    }
    render() {
        let fieldSet = this._getFieldset();
        if (this.helperMessage) {
            fieldSet = (h("div", { key: '7891394ea6a50bf7ab133178a7c0aab1b1c4a8d9', class: INPUT_CLASSES.WRAPPER }, fieldSet, h("chi-helper-message", { key: 'f4e90df8ee5b7fc293fe07ace39fa6aab23d9d10', state: this.state }, this.helperMessage)));
        }
        return fieldSet;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["typeValidation"],
        "pill": ["pillValidation"],
        "size": ["sizeValidation"]
    }; }
};
Picker.style = ChiPickerStyle0;

export { Picker as chi_picker };
