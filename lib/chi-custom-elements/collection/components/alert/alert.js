import { h } from "@stencil/core";
import { ALERT_COLORS as VALID_COLORS } from "../../constants/color";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Alert {
    constructor() {
        /**
         *  to set alert type { bubble, banner, toast }.
         */
        this.type = 'bubble';
        /**
         *  to hide the alert when dismissed.
         */
        this.mutable = true;
        /**
         *  to set alert size { sm, md, lg }.
         */
        this.size = 'md';
        /**
         *  to center the alert content.
         */
        this.center = false;
        /**
         *  to make the alert dismissible.
         */
        this.closable = false;
        /**
         * To render alert with Spinner
         */
        this.spinner = false;
    }
    typeValidation(newValue) {
        if (newValue && !['bubble', 'banner', 'toast'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for alert. Valid values are bubble, banner or toast.`);
        }
    }
    colorValidation(newValue) {
        const validValues = VALID_COLORS.join(', ');
        if (newValue && !VALID_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for alert. Valid values are ${validValues}.`);
        }
    }
    sizeValidation(newValue) {
        if (newValue && !['sm', 'md', 'lg'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for an alert. Alerts only support sm, md (default), and lg sizes.`);
        }
    }
    expirationTimeChanged(newValue) {
        this._autoCloseAlert(newValue);
    }
    componentWillLoad() {
        this.typeValidation(this.type);
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        this._autoCloseAlert(this.expirationTime);
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    _hasAlertActions() {
        return Array.from(this.el.querySelectorAll('[slot=chi-alert__actions]')).length > 0;
    }
    _hasClickableIcon() {
        return Array.from(this.el.querySelectorAll('[slot=chi-alert__clickable-icon]')).length > 0;
    }
    _dismissAlert() {
        if (this.mutable) {
            this.el.parentNode.removeChild(this.el);
        }
        this.dismissAlert.emit();
        if (this.timeoutReference) {
            clearTimeout(this.timeoutReference);
            this.timeoutReference = null;
        }
    }
    _autoCloseAlert(expirationTime) {
        if (this.type === 'toast' && expirationTime) {
            this.timeoutReference = setTimeout(() => {
                if (this.el && this.el.parentNode) {
                    this._dismissAlert();
                }
            }, expirationTime * 1000);
        }
    }
    render() {
        const spinnerSizeMapping = {
            sm: 'sm',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--2',
        };
        const chiIcon = !this.spinner && this.icon && (h("chi-icon", { key: 'df813e62f929d66f24daec8edd57543d5f260a43', icon: this.icon, color: this.color || null, extraClass: "chi-alert__icon" }));
        const alertTitle = this.alertTitle ? h("p", { class: "chi-alert__title" }, this.alertTitle) : '';
        const chiActions = this._hasAlertActions() && (h("div", { key: 'a48edb17aeb1cb0910dbe2b774f87ff9b9d0bf1a', class: "chi-alert__actions" }, h("slot", { key: 'b3181632d6cef90b09194258fb25e8a6d034ceb0', name: "chi-alert__actions" })));
        const chiSpinner = this.spinner && (h("chi-spinner", { key: '5640c6c4ee9f937fcbde914d7a4cd86726239d32', class: "chi-alert__spinner", size: spinnerSizeMapping[this.size] || 'sm' }));
        const chiClickableIcon = this._hasClickableIcon() && (h("div", { key: '3b012e8242f8dbd2b3dcd53a13e4e7cf7e68125a', class: "chi-alert__clickable-icon" }, h("slot", { key: '01990a0ce88703f05ff57da68b49685666c1228d', name: "chi-alert__clickable-icon" })));
        const chiButton = (this.closable || this.type === 'toast') && (h("chi-button", { key: 'b9326048d949fc5e06d5a80bbddc18cee723e96c', extraClass: "chi-alert__close-button", type: "close", onChiClick: () => this._dismissAlert() }));
        return (h("div", { key: '7c61971970ecf9838f2036fd4daa28de6856b877', class: `chi-alert
        ${this.type ? `-${this.type}` : ''}
        ${this.color ? `-${this.color}` : ''}
        ${this.center ? '-center' : ''}
        ${this.closable ? '-close' : ''}
        ${this.size ? `-${this.size}` : ''}`, role: "alert" }, chiIcon, chiSpinner, h("div", { key: '17a20e4f413b6cdf2cd61ed9a9294330d4567bc6', class: "chi-alert__content" }, alertTitle, h("p", { key: '8b030566812f01c625641afd87bd50d2ab7e4184', class: "chi-alert__text" }, h("slot", { key: '3187463cd0ae7760898601973de259009cb70a7a' })), chiActions), chiButton, chiClickableIcon));
    }
    static get is() { return "chi-alert"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert.css"]
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
                    "text": "to set alert type { bubble, banner, toast }."
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'bubble'"
            },
            "mutable": {
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
                    "text": "to hide the alert when dismissed."
                },
                "getter": false,
                "setter": false,
                "attribute": "mutable",
                "reflect": true,
                "defaultValue": "true"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AlertColors",
                    "resolved": "\"danger\" | \"info\" | \"muted\" | \"success\" | \"warning\"",
                    "references": {
                        "AlertColors": {
                            "location": "import",
                            "path": "../../constants/color",
                            "id": "src/constants/color.ts::AlertColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set alert state."
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": true
            },
            "icon": {
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
                    "text": "to avoid the necessity of adding <chi-icon> to alert markup."
                },
                "getter": false,
                "setter": false,
                "attribute": "icon",
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
                    "text": "to set alert size { sm, md, lg }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'md'"
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
                    "text": "to center the alert content."
                },
                "getter": false,
                "setter": false,
                "attribute": "center",
                "reflect": true,
                "defaultValue": "false"
            },
            "closable": {
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
                    "text": "to make the alert dismissible."
                },
                "getter": false,
                "setter": false,
                "attribute": "closable",
                "reflect": true,
                "defaultValue": "false"
            },
            "expirationTime": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "to set the alert expiration time (seconds)."
                },
                "getter": false,
                "setter": false,
                "attribute": "expiration-time",
                "reflect": true
            },
            "spinner": {
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
                    "text": "To render alert with Spinner"
                },
                "getter": false,
                "setter": false,
                "attribute": "spinner",
                "reflect": true,
                "defaultValue": "false"
            },
            "alertTitle": {
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
                    "text": "To define alert title"
                },
                "getter": false,
                "setter": false,
                "attribute": "title",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "dismissAlert",
                "name": "dismissAlert",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "custom event when trying to dismiss an alert."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "typeValidation"
            }, {
                "propName": "color",
                "methodName": "colorValidation"
            }, {
                "propName": "size",
                "methodName": "sizeValidation"
            }, {
                "propName": "expirationTime",
                "methodName": "expirationTimeChanged"
            }];
    }
}
