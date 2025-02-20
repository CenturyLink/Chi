import { h } from "@stencil/core";
import { addMutationObserver } from "../../utils/mutationObserver";
import { DISABLED_CLASS, HOVER_CLASS, LINK_CLASSES } from "../../constants/classes";
import { joinArrayValues } from "../../utils/utils";
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
    _getExtraClassesForTriggerButton() {
        return joinArrayValues([
            LINK_CLASSES.LINK,
            this.cta && LINK_CLASSES.CTA,
            this.disabled && DISABLED_CLASS,
            this.size && `-${this.size}`,
            this._hover && HOVER_CLASS,
            this.noUnderline && LINK_CLASSES.NO_UNDERLINE,
            this.noHoverUnderline && LINK_CLASSES.NO_HOVER_UNDERLINE,
        ]);
    }
    render() {
        return (h("a", Object.assign({ key: 'ea429d3996faa96b2f9a462b54d21a84c4ed64f7', class: this._getExtraClassesForTriggerButton(), href: this.href, hreflang: this.hreflang, target: this.target, rel: this.rel, download: this.download }, (this.alternativeText && { 'aria-label': this.alternativeText })), h("div", { key: '29b4b173d5aff8ff96dd4847d5cc97bfa1f05373', class: `${this._hasIcon() ? LINK_CLASSES.CONTENT : ''}` }, h("slot", { key: 'a43256be95116bec5442c40d47dbb37f74aa5b01' }))));
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
