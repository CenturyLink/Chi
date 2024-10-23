import { h } from "@stencil/core";
import { FORM_WRAPPER_LAYOUTS, FORM_WRAPPER_TYPES, } from "../../constants/constants";
import { v4 as uuid4 } from "uuid";
import { FORM_CLASSES, FORM_WRAPPER_CLASSES, INPUT_CLASSES, UTILITY_CLASSES } from "../../constants/classes";
import { CHI_STATES } from "../../constants/states";
export class FormWrapper {
    constructor() {
        this.id = uuid4();
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
        this.options = this.options.map((item) => (Object.assign(Object.assign({}, item), { id: item.id || `${this.id}-${uuid4()}`, checked: item.checked || false })));
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
            fieldSet = (h("div", { key: '18a6dc7ce1ba8e6b2df489b8388d025476616e56', class: INPUT_CLASSES.WRAPPER }, fieldSet, h("chi-helper-message", { key: '5bce0ccce6a9a5467a6763b242bf26041cf324be', state: this.state }, this.helperMessage)));
        }
        return fieldSet;
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
                            "path": "../../constants/states",
                            "id": "src/constants/states.ts::ChiStates"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set state success, warning or danger"
                },
                "attribute": "state",
                "reflect": false
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
                "attribute": "helper-message",
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "layout",
                "methodName": "layoutValidation"
            }, {
                "propName": "type",
                "methodName": "typeValidation"
            }, {
                "propName": "state",
                "methodName": "stateValidation"
            }];
    }
}
