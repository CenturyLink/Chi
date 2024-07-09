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
        return (h("div", { key: '5af4fb002bbcbcc97e187c24d0ed94c9e7b7515e', class: CHECKBOX_CLASSES.checkbox }, h("input", { key: '603b5aef77c556a0898ea45f6664d2f9d804f87c', class: `
            ${CHECKBOX_CLASSES.INPUT}
            ${this.indeterminate && CHECKBOX_CLASSES.INDETERMINATE}
            ${this._status ? `-${this._status}` : ''}
          `, checked: this.checked, disabled: this.disabled, id: `${this.id}-control`, name: this.name, ref: (el) => (this.input = el), onChange: (ev) => this.toggle(ev), type: "checkbox" }), h("label", { key: '112c24068c41c749ad45ebe1061c6c37f9c36084', class: `${CHECKBOX_CLASSES.LABEL} ${this.state ? `-${this.state}` : ''}`, htmlFor: `${this.id}-control` }, this.label, h("div", { key: 'c5d93be4280b7804964bcfaac73184ee9a4eecd5', class: SR_ONLY }, "Select ", this.label || this.name, " ", this.id), requiredField), h("slot", { key: '7a58c4423c34a7a8a6239c5f3dec0f741f354fc3', name: "chi-checkbox__help" })));
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
                    "text": "To render the checkbox in checked state"
                },
                "attribute": "checked",
                "reflect": false
            },
            "indeterminate": {
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
