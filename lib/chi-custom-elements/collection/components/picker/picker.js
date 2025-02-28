import { h } from "@stencil/core";
import { PICKER_INPUT_TYPES } from "../../constants/types";
import { v4 as uuid4 } from "uuid";
import { FORM_CLASSES, GENERIC_SIZE_CLASSES, INPUT_CLASSES, PICKER_CLASSES, PILL_CLASS, ROW_CLASS, UTILITY_CLASSES, } from "../../constants/classes";
import { PICKER_PILL_SIZES, PICKER_SIZES } from "../../constants/size";
import { addMutationObserver } from "../../utils/mutationObserver";
import { joinArrayValues } from "../../utils/utils";
export class Picker {
    constructor() {
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
        this.id = uuid4();
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
        this.options = (this.options || []).map((item) => (Object.assign(Object.assign({}, item), { id: item.id || `${this.id}-${uuid4()}`, checked: item.checked || false })));
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
            fieldSet = (h("div", { key: 'a3c195d94376f8a452470b8a0c61a99e40155b6e', class: INPUT_CLASSES.WRAPPER }, fieldSet, h("chi-helper-message", { key: 'aca847f7fcd0c0ae5f648499d43b29293ff268bd', state: this.state }, this.helperMessage)));
        }
        return fieldSet;
    }
    static get is() { return "chi-picker"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["picker.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "PickerOption[]",
                    "resolved": "PickerOption[]",
                    "references": {
                        "PickerOption": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::PickerOption"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set options"
                },
                "getter": false,
                "setter": false
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "PickerSizes | PickerPillSizes",
                    "resolved": "string",
                    "references": {
                        "PickerSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::PickerSizes"
                        },
                        "PickerPillSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::PickerPillSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Picker size { md, lg }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'md'"
            },
            "pill": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set pill layout of options"
                },
                "getter": false,
                "setter": false,
                "attribute": "pill",
                "reflect": false,
                "defaultValue": "false"
            },
            "showInput": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To show checkbox or radio"
                },
                "getter": false,
                "setter": false,
                "attribute": "show-input",
                "reflect": false,
                "defaultValue": "true"
            },
            "type": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "PickerInputTypes",
                    "resolved": "string",
                    "references": {
                        "PickerInputTypes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::PickerInputTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define input type, radio (single selection) or checkbox (multiple selection)"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'checkbox'"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set a legend for all fields"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To indicate the form field is required."
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
            "optional": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To indicate the form field is optional."
                },
                "getter": false,
                "setter": false,
                "attribute": "optional",
                "reflect": false,
                "defaultValue": "false"
            },
            "infoIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To indicate if info icon should be displayed."
                },
                "getter": false,
                "setter": false,
                "attribute": "info-icon",
                "reflect": true,
                "defaultValue": "false"
            },
            "infoIconMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To provide message for info icon popover."
                },
                "getter": false,
                "setter": false,
                "attribute": "info-icon-message",
                "reflect": true,
                "defaultValue": "''"
            },
            "helperMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set helper message"
                },
                "getter": false,
                "setter": false,
                "attribute": "helper-message",
                "reflect": false
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChiStates",
                    "resolved": "\"danger\" | \"success\" | \"warning\"",
                    "references": {
                        "ChiStates": {
                            "location": "import",
                            "path": "../../components",
                            "id": "src/components.d.ts::ChiStates"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set state of helper message"
                },
                "getter": false,
                "setter": false,
                "attribute": "state",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "chiChange",
                "name": "chiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when any option is selected or unselected"
                },
                "complexType": {
                    "original": "PickerOption[]",
                    "resolved": "PickerOption[]",
                    "references": {
                        "PickerOption": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::PickerOption"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "typeValidation"
            }, {
                "propName": "pill",
                "methodName": "pillValidation"
            }, {
                "propName": "size",
                "methodName": "sizeValidation"
            }];
    }
}
