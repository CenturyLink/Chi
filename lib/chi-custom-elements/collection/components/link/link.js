import { h } from "@stencil/core";
import { addMutationObserver } from "../../utils/mutationObserver";
import { LINK_CLASSES } from "../../constants/classes";
export class Link {
    constructor() {
        /**
         *  to set a link's destination url.
         */
        this.href = '#';
        /**
         *  to render a link as a prominent call to action.
         */
        this.cta = false;
        /**
         *  to disable a link.
         */
        this.disabled = false;
        /**
         *  to remove a link's underline.
         */
        this.noUnderline = false;
        /**
         *  to remove a link's underline on hover.
         */
        this.noHoverUnderline = false;
        /**
         * To set hover state
         */
        this._hover = false;
    }
    sizeValidation(newValue) {
        if (!!newValue && !['xs', 'sm', 'md', 'lg', 'xl'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for link. If provided, valid values are xs, sm, md, lg, or xl. `);
        }
    }
    connectedCallback() {
        addMutationObserver.call(this, undefined, { childList: true, subtree: true });
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
    }
    _hasIcon() {
        return Boolean(this.el.querySelector('chi-icon'));
    }
    render() {
        return (h("a", Object.assign({ key: '71614a17e06c53e729bb5a7de813c37fe4533e9f', class: `${LINK_CLASSES.LINK}
          ${this.cta ? '-cta' : ''}
          ${this.disabled ? '-disabled' : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this._hover ? `-hover` : ''}
          ${this.noUnderline ? LINK_CLASSES.NO_UNDERLINE : ''}
          ${this.noHoverUnderline ? '-no-hover-underline' : ''}`, href: this.href, hreflang: this.hreflang, target: this.target, rel: this.rel, download: this.download }, (this.alternativeText && { 'aria-label': this.alternativeText })), h("div", { key: '89ce7835af7541dc5a003ff5593a0a94971a3f0e', class: `${this._hasIcon() ? LINK_CLASSES.CONTENT : ''}` }, h("slot", { key: '1e840c4212aadd932030265678be1a819362a52c' }))));
    }
    static get is() { return "chi-link"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["link.css"]
        };
    }
    static get properties() {
        return {
            "href": {
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
                    "text": "to set a link's destination url."
                },
                "getter": false,
                "setter": false,
                "attribute": "href",
                "reflect": true,
                "defaultValue": "'#'"
            },
            "hreflang": {
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
                    "text": "to set the language of a link's destination url."
                },
                "getter": false,
                "setter": false,
                "attribute": "hreflang",
                "reflect": true
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
                    "text": "to provide alternative text in case of icon links."
                },
                "getter": false,
                "setter": false,
                "attribute": "alternative-text",
                "reflect": true
            },
            "cta": {
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
                    "text": "to render a link as a prominent call to action."
                },
                "getter": false,
                "setter": false,
                "attribute": "cta",
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
                    "text": "to disable a link."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "download": {
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
                    "text": "to prompt users to save a page or document instead of navigating to it."
                },
                "getter": false,
                "setter": false,
                "attribute": "download",
                "reflect": true
            },
            "noUnderline": {
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
                    "text": "to remove a link's underline."
                },
                "getter": false,
                "setter": false,
                "attribute": "no-underline",
                "reflect": true,
                "defaultValue": "false"
            },
            "noHoverUnderline": {
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
                    "text": "to remove a link's underline on hover."
                },
                "getter": false,
                "setter": false,
                "attribute": "no-hover-underline",
                "reflect": true,
                "defaultValue": "false"
            },
            "rel": {
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
                    "text": "to set the relationship between the current page and the linked page."
                },
                "getter": false,
                "setter": false,
                "attribute": "rel",
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
                    "text": "to set size of a link { xs, sm, md, lg, xl }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true
            },
            "target": {
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
                    "text": "to set target of a link."
                },
                "getter": false,
                "setter": false,
                "attribute": "target",
                "reflect": true
            },
            "_hover": {
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
                    "text": "To set hover state"
                },
                "getter": false,
                "setter": false,
                "attribute": "_hover",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "sizeValidation"
            }];
    }
}
