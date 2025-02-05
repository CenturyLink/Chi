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
        return (h("label", { key: '0e1860e054e9f6fc3ca922ccca625193477bda12', htmlFor: `${this.el.id}-control`, class: `chi-switch
              ${this.size ? `-${this.size}` : ''}
              ${this.hideLabel ? '-label--hide' : ''}` }, h("input", { key: '1bac8347f9ad8826afd262ea92c23c55c4c7d908', type: "checkbox", class: `chi-switch__input ${this.extraClass ? this.extraClass : ''}`, id: `${this.el.id}-control`, disabled: this.disabled, checked: this.checked, onClick: () => this._toggle() }), h("span", { key: '2dd4f7b90cd201a7782a8024747184c1167b2749', class: "chi-switch__content" }, h("span", { key: '79f5d95d3a2efa3fb4648292a77ea3739f0ba127', class: "chi-switch__thumb" })), h("span", { key: 'c3240df376c34bc607979ef6d9fc5f1421a5b57c', class: "chi-switch__label" }, this.label)));
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
