import { h } from "@stencil/core";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Link {
    constructor() {
        this.href = '#';
        this.hreflang = undefined;
        this.alternativeText = undefined;
        this.cta = false;
        this.disabled = false;
        this.download = undefined;
        this.noUnderline = false;
        this.noHoverUnderline = false;
        this.rel = undefined;
        this.size = undefined;
        this.target = undefined;
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
        return (h("a", Object.assign({ key: 'ad8aefcf8eb951cffb7a2009aa39251d520d7e29', class: `chi-link
          ${this.cta ? '-cta' : ''}
          ${this.disabled ? '-disabled' : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this._hover ? `-hover` : ''}
          ${this.noUnderline ? '-no-underline' : ''}
          ${this.noHoverUnderline ? '-no-hover-underline' : ''}`, href: this.href, hreflang: this.hreflang, target: this.target, rel: this.rel, download: this.download }, (this.alternativeText && { 'aria-label': this.alternativeText })), h("div", { key: '2f70b36b974b99c80d8474c703c0a477d668f05e', class: `${this._hasIcon() ? 'chi-link__content' : ''}` }, h("slot", { key: 'ceda6c2680e7db65886dacf2238294c1f31e7d36' }))));
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
