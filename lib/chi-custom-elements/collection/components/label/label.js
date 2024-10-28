import { h } from "@stencil/core";
import { addMutationObserver } from "../../utils/mutationObserver";
import { LABEL_SIZES } from "../../constants/size";
import { LABEL_CLASSES } from "../../constants/classes";
import { v4 as uuid4 } from "uuid";
export class Label {
    constructor() {
        this.for = undefined;
        this.size = 'md';
        this.required = false;
        this.optional = false;
        this.infoIcon = false;
        this.infoIconMessage = '';
    }
    validateSizeAttribute(newValue) {
        if (newValue && LABEL_SIZES.indexOf(newValue) === -1) {
            throw new Error('Not valid size (' + newValue + '). Valid values are xs, sm, md, lg or xl. ');
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.helpButtonId = `help-button-${uuid4()}`;
        this.helpPopoverId = `help-popover-${uuid4()}`;
    }
    toggleHelpPopover() {
        this.el.querySelector(`#${this.helpPopoverId}`).toggle();
    }
    _getInfoIcon() {
        return this.infoIcon ? (h("div", { class: LABEL_CLASSES.HELP }, h("chi-button", { id: this.helpButtonId, onChiClick: () => this.toggleHelpPopover(), type: "icon", size: "xs", variant: "flat", "alternative-text": "Help" }, h("chi-icon", { icon: "circle-info-outline", size: "xs" })), h("chi-popover", { id: this.helpPopoverId, position: "top", variant: "text", arrow: true, reference: `#${this.helpButtonId}` }, this.infoIconMessage))) : ('');
    }
    render() {
        const infoIcon = this._getInfoIcon();
        const required = (h("abbr", { key: '986726fea16033e7b5056c1cb11752501846e935', class: LABEL_CLASSES.REQUIRED, "aria-label": "Required field" }, "*"));
        const optional = (h("abbr", { key: 'af2377652de76e171a5ba9149726d1951d6dd4bb', class: LABEL_CLASSES.OPTIONAL, "aria-label": "Optional field" }, "(optional)"));
        let message = '';
        if (!(this.required && this.optional)) {
            if (this.required) {
                message = required;
            }
            else if (this.optional) {
                message = optional;
            }
        }
        return (h("label", { key: '97cb270022ee5cc007eaae329151d0396ffe7e02', class: `
          ${LABEL_CLASSES.LABEL}
          ${this.size ? `-${this.size}` : ''}
          `, htmlFor: `${this.for}-control` }, h("slot", { key: 'a7f8ab69b874e56a2e323e3c153a166eacae9e5b' }), message, infoIcon));
    }
    static get is() { return "chi-label"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["label.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["label.css"]
        };
    }
    static get properties() {
        return {
            "for": {
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
                    "text": "To indicate ID of target form control web component."
                },
                "attribute": "for",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LabelSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "LabelSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::LabelSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "OPTIONAL. Size of the label. { xs, sm, md, lg, xl }."
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'md'"
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
                    "text": "To indicate which form field is required."
                },
                "attribute": "required",
                "reflect": true,
                "defaultValue": "false"
            },
            "optional": {
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
                    "text": "To indicate which form field is optional."
                },
                "attribute": "optional",
                "reflect": true,
                "defaultValue": "false"
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "validateSizeAttribute"
            }];
    }
}
