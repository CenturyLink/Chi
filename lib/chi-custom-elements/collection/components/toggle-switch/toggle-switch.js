import { h } from "@stencil/core";
export class ToggleSwitch {
    constructor() {
        this.label = undefined;
        this.hideLabel = false;
        this.disabled = false;
        this.checked = false;
        this.size = undefined;
        this.extraClass = undefined;
    }
    el;
    /**
     *  emitting a custom event toggle.
     */
    toggle;
    _toggle() {
        this.checked = !this.checked;
        this.toggle.emit(this.checked);
    }
    sizeValidation(newValue) {
        if (newValue && !['', 'sm', 'xs'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for toggle switch. Valid values are xs, sm or ''. `);
        }
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
    }
    render() {
        return (h("label", { key: 'cbf4315417031264782cd6b70271f5e9fd788745', htmlFor: `${this.el.id}-control`, class: `chi-switch
              ${this.size ? `-${this.size}` : ''}
              ${this.hideLabel ? '-label--hide' : ''}` }, h("input", { key: 'd0f632180b5de97290458634cd99f02e4f67ac02', type: "checkbox", class: `chi-switch__input ${this.extraClass ? this.extraClass : ''}`, id: `${this.el.id}-control`, disabled: this.disabled, checked: this.checked, onClick: () => this._toggle() }), h("span", { key: 'f4cb47b65e98ae2c768f21a73bae0818e48ea1b4', class: "chi-switch__content" }, h("span", { key: 'df230f340c4dd8124451ddea4d9145f825fffe14', class: "chi-switch__thumb" })), h("span", { key: '1f8db198947870d9422547c021c3fcfea7e6b425', class: "chi-switch__label" }, this.label)));
    }
    static get is() { return "chi-switch"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["toggle-switch.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toggle-switch.css"]
        };
    }
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
                    "text": "to set a label for the toggle switch."
                },
                "attribute": "label",
                "reflect": true
            },
            "hideLabel": {
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
                    "text": "used to disable the toggle labels."
                },
                "attribute": "hide-label",
                "reflect": true,
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "used to disable the toggle switch."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "used to check the toggle switch."
                },
                "attribute": "checked",
                "reflect": true,
                "defaultValue": "false"
            },
            "size": {
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
                    "text": "OPTIONAL. Size of the label. { xs, sm }."
                },
                "attribute": "size",
                "reflect": true
            },
            "extraClass": {
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
                    "text": ""
                },
                "attribute": "extra-class",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "toggle",
                "name": "toggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "emitting a custom event toggle."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "sizeValidation"
            }];
    }
}
