import { h } from "@stencil/core";
import { CHECKBOX_CLASSES, LABEL_CLASSES, UTILITY_CLASSES, SR_ONLY } from "../../constants/classes";
import { addMutationObserver } from "../../utils/mutationObserver";
import { v4 as uuid4 } from "uuid";
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
        this.infoIcon = false;
        this.infoIconMessage = '';
    }
    connectedCallback() {
        var _a;
        this.id = (_a = this.el.getAttribute('id')) !== null && _a !== void 0 ? _a : uuid4();
        addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.helpButtonId = `help-button-${uuid4()}`;
        this.helpPopoverId = `help-popover-${uuid4()}`;
    }
    componentDidLoad() {
        this._updateIndeterminate();
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
    toggleHelpPopover() {
        this.el.querySelector(`#${this.helpPopoverId}`).toggle();
    }
    _getInfoIcon() {
        return this.infoIcon ? (h("div", { class: `${LABEL_CLASSES.HELP} ${UTILITY_CLASSES.DISPLAY.BLOCK}` }, h("chi-button", { id: this.helpButtonId, onChiClick: () => this.toggleHelpPopover(), type: "icon", size: "xs", variant: "flat", "alternative-text": "Help" }, h("chi-icon", { icon: "circle-info-outline", size: "xs" })), h("chi-popover", { id: this.helpPopoverId, position: "top", variant: "text", arrow: true, reference: `#${this.helpButtonId}` }, this.infoIconMessage))) : null;
    }
    _getInput() {
        return (h("input", { class: `
          ${CHECKBOX_CLASSES.INPUT}
          ${this.indeterminate && CHECKBOX_CLASSES.INDETERMINATE}
          ${this._status ? `-${this._status}` : ''}
        `, checked: this.checked, disabled: this.disabled, id: `${this.id}-control`, name: this.name, ref: (el) => (this.input = el), onChange: (ev) => this.toggle(ev), type: "checkbox" }));
    }
    _getLabel() {
        const infoIcon = this._getInfoIcon();
        const requiredField = this.required ? (h("abbr", { class: "chi-label__required", "aria-label": "Required field" }, "*")) : null;
        return (h("label", { class: `${CHECKBOX_CLASSES.LABEL} ${this.state ? `-${this.state}` : ''}`, htmlFor: `${this.id}-control` }, this.label, h("div", { class: SR_ONLY }, "Select ", this.label || this.name, " ", this.id), requiredField, infoIcon));
    }
    render() {
        const input = this._getInput();
        const label = this._getLabel();
        return (h("div", { key: '26b36f0c334fcdfc3bccd6dd75f52ea4de423c0a', class: CHECKBOX_CLASSES.checkbox }, input, label, h("slot", { key: '7ea83b0572b87fc21789340c2f47e9b7fb31ead8', name: "chi-checkbox__help" })));
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
                "attribute": "info-icon-message",
                "reflect": true,
                "defaultValue": "''"
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
