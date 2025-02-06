import { h } from "@stencil/core";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Button {
    constructor() {
        this.slotBtnContent = true;
        /**
         *  to disable chi-button.
         */
        this.disabled = false;
        /**
         *  to render a button to fill the parent space.
         */
        this.fluid = false;
        /**
         *  to render a button with uppercase text.
         */
        this.uppercase = false;
        /**
         *  to center align the text.
         */
        this.center = false;
    }
    sizeValidation(newValue) {
        if (newValue && !['', 'xs', 'sm', 'md', 'lg', 'xl'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for button. Valid values are xs, sm, md, lg, xl, ''. `);
        }
    }
    colorValidation(newValue) {
        if (newValue && !['', 'primary', 'secondary', 'danger', 'dark', 'light'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for button. Valid values are primary, secondary, danger, dark, light or ''. `);
        }
    }
    buttonTypeValidation(newValue) {
        if (newValue && !['', 'float', 'close', 'icon'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid button type. Valid values are float, close, icon or ''. `);
        }
    }
    variantValidation(newValue) {
        if (newValue && !['', 'outline', 'flat'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid variant for button. Valid values are outline, flat or ''. `);
        }
    }
    componentWillLoad() {
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        this.buttonTypeValidation(this.type);
        this.variantValidation(this.variant);
        if (!this.el.querySelector('chi-icon') && !this.el.querySelector('chi-spinner')) {
            this.slotBtnContent = false;
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    _buttonClicked() {
        this.chiClick.emit();
    }
    _buttonMouseEnter() {
        this.chiMouseEnter.emit();
    }
    _buttonMouseLeave() {
        this.chiMouseLeave.emit();
    }
    render() {
        if (this.type === 'close') {
            return (h("button", { class: `${this.extraClass ? this.extraClass : ''} chi-button -icon -close ${this.size ? `-${this.size}` : ''}`, onClick: () => this._buttonClicked(), "aria-label": "Close" }, h("div", { class: "chi-button__content" }, h("chi-icon", { icon: 'x' }))));
        }
        else {
            return (h("button", Object.assign({ class: `chi-button
          ${this.variant ? `-${this.variant}` : ''}
          ${this.color ? `-${this.color}` : ''}
          ${this.type ? `-${this.type}` : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this.uppercase ? '-uppercase' : ''}
          ${this.fluid ? '-fluid' : ''}
          ${this.fluid && this.center ? '-justify-content--center' : ''}
          ${this.disabled ? '-disabled' : ''}
          ${this.extraClass ? this.extraClass : ''}`, onClick: () => this._buttonClicked(), onMouseEnter: () => this._buttonMouseEnter(), onMouseLeave: () => this._buttonMouseLeave(), disabled: this.disabled }, (this.alternativeText && { 'aria-label': this.alternativeText })), this.slotBtnContent ? (h("div", { class: 'chi-button__content' }, h("slot", null))) : (h("slot", null))));
        }
    }
    static get is() { return "chi-button"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button.css"]
        };
    }
    static get properties() {
        return {
            "type": {
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
                    "text": "to set button type { float, close, icon }."
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true
            },
            "variant": {
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
                    "text": "to set variant of a button { outline, flat }."
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": true
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
                    "text": "to disable chi-button."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "color": {
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
                    "text": "to set button color { primary, secondary, danger, dark, light }."
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": true
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
                    "text": "to set button size { xs, sm, md, lg, xl }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true
            },
            "fluid": {
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
                    "text": "to render a button to fill the parent space."
                },
                "getter": false,
                "setter": false,
                "attribute": "fluid",
                "reflect": true,
                "defaultValue": "false"
            },
            "uppercase": {
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
                    "text": "to render a button with uppercase text."
                },
                "getter": false,
                "setter": false,
                "attribute": "uppercase",
                "reflect": true,
                "defaultValue": "false"
            },
            "center": {
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
                    "text": "to center align the text."
                },
                "getter": false,
                "setter": false,
                "attribute": "center",
                "reflect": true,
                "defaultValue": "false"
            },
            "alternativeText": {
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
                    "text": "to provide alternative text in case of icon buttons."
                },
                "getter": false,
                "setter": false,
                "attribute": "alternative-text",
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
                "getter": false,
                "setter": false,
                "attribute": "extra-class",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "slotBtnContent": {}
        };
    }
    static get events() {
        return [{
                "method": "chiClick",
                "name": "chiClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "to emit a custom event when button is clicked."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiMouseEnter",
                "name": "chiMouseEnter",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "to emit a custom event when the mouse pointer is moved onto the button."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiMouseLeave",
                "name": "chiMouseLeave",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "to emit a custom event when the mouse pointer is moved out of the button."
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
            }, {
                "propName": "color",
                "methodName": "colorValidation"
            }, {
                "propName": "type",
                "methodName": "buttonTypeValidation"
            }, {
                "propName": "variant",
                "methodName": "variantValidation"
            }];
    }
}
