import { h } from "@stencil/core";
import { FORM_WRAPPER_LAYOUTS, FORM_WRAPPER_TYPES, } from "../../constants/constants";
import { v4 as uuid4 } from "uuid";
import { FORM_CLASSES, FORM_WRAPPER_CLASSES, UTILITY_CLASSES } from "../../constants/classes";
export class FormWrapper {
    constructor() {
        this.type = undefined;
        this.layout = 'stacked';
        this.options = undefined;
        this.label = undefined;
    }
    e;
    chiChange;
    id = uuid4();
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
    componentWillLoad() {
        this.options = this.options.map((item) => ({
            ...item,
            id: item.id || `${this.id}-${uuid4()}`,
            checked: item.checked || false,
        }));
    }
    _getLabel() {
        if (this.label) {
            return h("chi-label", null, this.label);
        }
    }
    _getItems() {
        const itemGetter = {
            checkbox: this._getCheckbox,
            radio: this._getRadioButton,
        }[this.type].bind(this);
        return this.options?.map((item, index) => this._getFormItem(itemGetter(item), index === this.options.length - 1));
    }
    _getCheckbox(item) {
        const checked = item.checked && item.checked !== 'indeterminate';
        const indeterminate = item.checked === 'indeterminate';
        return (h("chi-checkbox", { id: item.id, label: item.label, checked: checked, disabled: item.disabled, name: item.name, indeterminate: indeterminate, onChiChange: (ev) => this._onChange(ev) }));
    }
    _getRadioButton(item) {
        return (h("chi-radio-button", { id: item.id, label: item.label, checked: item.checked, disabled: item.disabled, name: item.name, onChiChange: (ev) => this._onChange(ev) }));
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
    render() {
        return (h("fieldset", { key: '76b082535bb442ec7d028aeabf13c6e1a570fb1e' }, this._getLabel(), this._getItems()));
    }
    static get is() { return "chi-form-wrapper"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["form-wrapper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["form-wrapper.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FormWrapperTypes",
                    "resolved": "string",
                    "references": {
                        "FormWrapperTypes": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::FormWrapperTypes"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set form element type { checkbox, radio }."
                },
                "attribute": "type",
                "reflect": true
            },
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FormWrapperLayouts",
                    "resolved": "string",
                    "references": {
                        "FormWrapperLayouts": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::FormWrapperLayouts"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "to set layout { stacked, inline }."
                },
                "attribute": "layout",
                "reflect": false,
                "defaultValue": "'stacked'"
            },
            "options": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "FormWrapperCheckbox[] | FormWrapperRadio[]",
                    "resolved": "FormWrapperCheckbox[] | FormWrapperRadio[]",
                    "references": {
                        "FormWrapperCheckbox": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::FormWrapperCheckbox"
                        },
                        "FormWrapperRadio": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::FormWrapperRadio"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set options"
                }
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
                    "text": "to set a lagend for all fields"
                },
                "attribute": "label",
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
                    "text": ""
                },
                "complexType": {
                    "original": "FormWrapperCheckbox[] | FormWrapperRadio[]",
                    "resolved": "FormWrapperCheckbox[] | FormWrapperRadio[]",
                    "references": {
                        "FormWrapperCheckbox": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::FormWrapperCheckbox"
                        },
                        "FormWrapperRadio": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::FormWrapperRadio"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "e"; }
    static get watchers() {
        return [{
                "propName": "layout",
                "methodName": "layoutValidation"
            }, {
                "propName": "type",
                "methodName": "typeValidation"
            }];
    }
}
