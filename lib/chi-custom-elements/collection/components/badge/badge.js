import { h } from "@stencil/core";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Badge {
    constructor() {
        this.slotBadgeContent = true;
    }
    sizeValidation(newValue) {
        if (newValue && !['', 'sm', 'xs'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for badge. Valid values are xs, sm or ''. `);
        }
    }
    colorValidation(newValue) {
        if (newValue &&
            ![
                '',
                'primary',
                'success',
                'warning',
                'danger',
                'dark',
                'muted',
                'secondary',
                'light',
                'accent-1',
                'accent-2',
                'accent-3',
                'accent-4',
                'accent-5',
            ].includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for badge. Valid values are primary, success, danger, warning, dark, muted, secondary, light, accent-1, accent-2, accent-3, accent-4, accent-5 or ''. `);
        }
    }
    variantValidation(newValue) {
        if (newValue && !['', 'outline', 'flat'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid variant value for badge. Valid values are outline, flat or ''. `);
        }
    }
    componentWillLoad() {
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        this.variantValidation(this.variant);
        if (!this.el.querySelector('chi-icon')) {
            this.slotBadgeContent = false;
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    render() {
        return (h("div", { key: 'bb935bb0d2b7f6601c8adab70c90f6a869df7c37', class: `chi-badge
	        ${this.size ? `-${this.size}` : ''}
	        ${this.color ? `-${this.color}` : ''}
	        ${this.variant ? `-${this.variant}` : ''}
	        ${this.textTransform ? `-text--${this.textTransform}` : ''}
          ${this.textWeight ? `-text--${this.textWeight}` : ''}` }, this.slotBadgeContent ? (h("div", { class: "chi-badge__content" }, h("slot", null))) : (h("span", null, h("slot", null)))));
    }
    static get is() { return "chi-badge"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["badge.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["badge.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "to set variant of a badge { outline, flat }."
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": true
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
                    "text": "to set color of a badge { primary, success, warning, danger, dark, muted, secondary, light, accent-1, accent-2, accent-3, accent-4, accent-5 }."
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": true
            },
            "textTransform": {
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
                    "text": "to transform the badge text { uppercase, lowercase, capitalize }."
                },
                "getter": false,
                "setter": false,
                "attribute": "text-transform",
                "reflect": true
            },
            "textWeight": {
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
                    "text": "to set weight of the badge text { normal, semi-bold, bold }."
                },
                "getter": false,
                "setter": false,
                "attribute": "text-weight",
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
                    "text": "to set size of a badge { xs or sm }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "slotBadgeContent": {}
        };
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
                "propName": "variant",
                "methodName": "variantValidation"
            }];
    }
}
