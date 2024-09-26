import { h } from "@stencil/core";
import { ALERT_COLORS as VALID_COLORS } from "../../constants/color";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Alert {
    constructor() {
        this.type = 'bubble';
        this.mutable = true;
        this.color = undefined;
        this.icon = undefined;
        this.size = 'md';
        this.center = false;
        this.closable = false;
        this.expirationTime = undefined;
        this.spinner = false;
        this.alertTitle = undefined;
    }
    el;
    /**
     *  custom event when trying to dismiss an alert.
     */
    dismissAlert;
    timeoutReference;
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
    componentWillLoad() {
        this.typeValidation(this.type);
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        if (this.type === 'toast' && this.expirationTime) {
            this.timeoutReference = setTimeout(() => {
                if (this.el && this.el.parentNode) {
                    this._dismissAlert();
                }
            }, this.expirationTime * 1000);
        }
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
    render() {
        const spinnerSizeMapping = {
            sm: 'sm',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--2',
        };
        const chiIcon = !this.spinner && this.icon && (h("chi-icon", { key: '051b9975e0739a1abedea9bd7ec680623988d3c8', icon: this.icon, color: this.color || null, extraClass: "chi-alert__icon" }));
        const alertTitle = this.alertTitle ? h("p", { class: "chi-alert__title" }, this.alertTitle) : '';
        const chiActions = this._hasAlertActions() && (h("div", { key: '93deabdfd975281e777a771aeec7cc0e54e7db7a', class: "chi-alert__actions" }, h("slot", { key: 'ffe033f97ada7af502c833930563faf0cd4c8360', name: "chi-alert__actions" })));
        const chiSpinner = this.spinner && (h("chi-spinner", { key: 'f755bee01a4e8bc27d0509032a2ab8d468c6f1a0', class: "chi-alert__spinner", size: spinnerSizeMapping[this.size] || 'sm' }));
        const chiClickableIcon = this._hasClickableIcon() && (h("div", { key: '7e6227a6f6ed8cb6a1f746ae36b9c485723fa608', class: "chi-alert__clickable-icon" }, h("slot", { key: 'f9ac4a601a3f1abb7141418d2db26c6b3ef591e7', name: "chi-alert__clickable-icon" })));
        const chiButton = (this.closable || this.type === 'toast') && (h("chi-button", { key: 'dcdfde4674aebe7813914e92cb99d8c392db4b42', extraClass: "chi-alert__close-button", type: "close", onChiClick: () => this._dismissAlert() }));
        return (h("div", { key: '1f08a55e4535d2dd2519c5776e5765a1bb10ede8', class: `chi-alert
        ${this.type ? `-${this.type}` : ''}
        ${this.color ? `-${this.color}` : ''}
        ${this.center ? '-center' : ''}
        ${this.closable ? '-close' : ''}
        ${this.size ? `-${this.size}` : ''}`, role: "alert" }, chiIcon, chiSpinner, h("div", { key: '4774e080acc0df5f6bbfe8d3a418eb1f5688774c', class: "chi-alert__content" }, alertTitle, h("p", { key: '1e0054d0ac03ca1ddcce29f621511abf5f28d1b8', class: "chi-alert__text" }, h("slot", { key: '9a845c6bc17d546862a8a50408f0b03d1950658d' })), chiActions), chiButton, chiClickableIcon));
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
            }];
    }
}
