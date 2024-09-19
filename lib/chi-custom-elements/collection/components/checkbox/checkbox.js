import { h } from "@stencil/core";
import { CHECKBOX_CLASSES, SR_ONLY } from "../../constants/classes";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Checkbox {
    constructor() {
        this.label = undefined;
        this.name = undefined;
        this.checked = undefined;
        this.indeterminate = undefined;
        this.disabled = undefined;
        this.required = false;
        this.state = undefined;
        this._status = undefined;
    }
    el;
    input;
    id;
    /**
     * Triggered when the user selects or deselects the checkbox
     */
    chiChange;
    connectedCallback() {
        this.id = this.el.getAttribute('id');
        addMutationObserver.call(this);
    }
    toggle(ev) {
        this.checked = ev.target.checked;
        this.indeterminate = false;
        this._emitChange(this.checked);
    }
    _emitChange(checked) {
        this.chiChange.emit(checked);
    }
    _updateIndeterminate() {
        this.input.indeterminate = this.indeterminate;
    }
    updateIndeterminate(newValue, oldValue) {
        if (newValue !== oldValue) {
            this._updateIndeterminate();
        }
    }
    componentDidLoad() {
        this._updateIndeterminate();
    }
    render() {
        const requiredField = this.required ? (h("abbr", { class: "chi-label__required", "aria-label": "Required field" }, "*")) : null;
        return (h("div", { key: 'abc2dee3dc615c7586011eab85fec3fa68e5c9f5', class: CHECKBOX_CLASSES.checkbox }, h("input", { key: '7289801a671cbc6ccd4945244019be48803d0d4c', class: `
            ${CHECKBOX_CLASSES.INPUT}
            ${this.indeterminate && CHECKBOX_CLASSES.INDETERMINATE}
            ${this._status ? `-${this._status}` : ''}
          `, checked: this.checked, disabled: this.disabled, id: `${this.id}-control`, name: this.name, ref: (el) => (this.input = el), onChange: (ev) => this.toggle(ev), type: "checkbox" }), h("label", { key: '15e0cbe72d75df251e33bd1f1e025b47f49958d0', class: `${CHECKBOX_CLASSES.LABEL} ${this.state ? `-${this.state}` : ''}`, htmlFor: `${this.id}-control` }, this.label, h("div", { key: 'd4d9b74bfaaf6f8c3427e4e02837ef3069c7258d', class: SR_ONLY }, "Select ", this.label || this.name, " ", this.id), requiredField), h("slot", { key: '49c529b697825bdf2681117a9730e2d6da44c3b0', name: "chi-checkbox__help" })));
    }
    static get is() { return "chi-checkbox"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "label": {
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
                    "text": "To provide checkbox label as a string"
                },
                "attribute": "label",
                "reflect": false
            },
            "name": {
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
                    "text": "To render the checkbox input with a respective name attribute"
                },
                "attribute": "name",
                "reflect": false
            },
            "checked": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To render the checkbox in checked state"
                },
                "attribute": "checked",
                "reflect": true
            },
            "indeterminate": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To add indeterminate state to checkbox"
                },
                "attribute": "indeterminate",
                "reflect": false
            },
            "disabled": {
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
                    "text": "To disable the checkbox"
                },
                "attribute": "disabled",
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
                    "text": "To indicate which form field is required"
                },
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "To indicate the state"
                },
                "attribute": "state",
                "reflect": false
            },
            "_status": {
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
                    "text": "To define -hover, -focus statuses"
                },
                "attribute": "_status",
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
                    "text": "Triggered when the user selects or deselects the checkbox"
                },
                "complexType": {
                    "original": "string | boolean",
                    "resolved": "boolean | string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "indeterminate",
                "methodName": "updateIndeterminate"
            }];
    }
}
