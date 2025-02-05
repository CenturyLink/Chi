import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c11192ea.js';
import { P as PICKER_INPUT_TYPES } from './types-e557e3e4.js';
import { p as PICKER_CLASSES, q as PILL_CLASS, G as GENERIC_SIZE_CLASSES, U as UTILITY_CLASSES, F as FORM_CLASSES, R as ROW_CLASS, h as INPUT_CLASSES } from './classes-6227bd8c.js';
import { P as PICKER_PILL_SIZES, a as PICKER_SIZES } from './size-9d0c9884.js';
import { a as addMutationObserver } from './mutationObserver-de99ed3d.js';
import { j as joinArrayValues } from './utils-48628cb4.js';
import { v as v4 } from './v4-a4ec28c0.js';

const pickerCss = "chi-picker.sc-chi-picker-h label.sc-chi-picker{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}";
const ChiPickerStyle0 = pickerCss;

const Picker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiChange = createEvent(this, "chiChange", 7);
        this.id = v4();
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
        if (!PICKER_INPUT_TYPES.includes(newValue)) {
            throw new Error(`Picker type must be one of ${PICKER_INPUT_TYPES.join(' ')}`);
        }
    }
    pillValidation(newValue) {
        if (newValue && this.showInput) {
            throw new Error('Pill layout is not valid with show input property');
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
        return (h("label", { htmlFor: item.id, id: `${item.id}-label` }, isSimpleLabelContent ? item.label : this._getComplexItemLabelContent(item, endSlot), this._getItemContentSlot(item)));
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
            fieldSet = (h("div", { key: '836075b77ba2319b36e45c5baa16b7c17e3078fb', class: INPUT_CLASSES.WRAPPER }, fieldSet, h("chi-helper-message", { key: '31d392a5e73e3614240d79cc0947c182ca51db54', state: this.state }, this.helperMessage)));
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
