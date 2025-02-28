import { h } from "@stencil/core";
import { CARD_CLASSES, ACTIVE_CLASS, NO_BORDER_CLASS, EMPTY_CLASS, HIGHLIGHT_CLASS, UTILITY_CLASSES, GENERIC_SIZE_CLASSES, } from "../../constants/classes";
import { CARD_FOOTER_ALIGN_TYPES, CARD_NO_BORDER_TYPES, } from "../../constants/types";
import { joinArrayValues } from "../../utils/utils";
export class Card {
    constructor() {
        /**
         * Remove border from the card, header, and/or footer.
         */
        this.noBorders = [];
        /**
         * Render an active state card.
         */
        this.active = false;
        /**
         * Render a highlighted card.
         */
        this.highlight = false;
        /**
         * Render a widget card.
         */
        this.widget = false;
        /**
         * Center-align the card content.
         */
        this.center = false;
        /**
         * Center-align the title in card header.
         */
        this.titleCenter = false;
        /**
         * Animate card on hover.
         */
        this.animated = false;
        /**
         * Render an empty card.
         */
        this.empty = false;
    }
    sizeValidation(newValue) {
        if (newValue && newValue !== 'sm') {
            throw new Error(`${newValue} is not a valid size. Cards only support default and "sm" size.`);
        }
    }
    footerAlignValidation(newValue) {
        if (newValue && !CARD_FOOTER_ALIGN_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for footer alignment. Valid values are: 'center' and 'right'`);
        }
    }
    noBordersValidation(newValue) {
        if (newValue && !newValue.every((value) => CARD_NO_BORDER_TYPES.includes(value))) {
            throw new Error(`${newValue} is not a valid type for no borders property. Valid values are: 'card', 'header' and 'footer'`);
        }
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
        this.footerAlignValidation(this.footerAlign);
        this.noBordersValidation(this.noBorders);
    }
    getHeader() {
        if (!this.cardTitle)
            return null;
        const headerClasses = joinArrayValues([
            CARD_CLASSES.HEADER,
            this.noBorders.includes('header') && NO_BORDER_CLASS,
            this.titleCenter && UTILITY_CLASSES.ALIGN.CENTER,
            this.size === 'sm' && GENERIC_SIZE_CLASSES.SM,
        ]);
        return (h("div", { class: headerClasses }, h("div", { class: CARD_CLASSES.TITLE }, this.cardTitle)));
    }
    getFooter() {
        if (!this.el.querySelector('[slot="footer"]'))
            return null;
        const footerClasses = joinArrayValues([
            CARD_CLASSES.FOOTER,
            this.noBorders.includes('footer') && NO_BORDER_CLASS,
            this.footerAlign === 'center' && UTILITY_CLASSES.ALIGN.CENTER,
            this.footerAlign === 'right' && UTILITY_CLASSES.ALIGN.RIGHT,
            this.size === 'sm' && GENERIC_SIZE_CLASSES.SM,
        ]);
        return (h("div", { class: footerClasses }, h("slot", { name: "footer" })));
    }
    getContent() {
        return (h("div", { class: CARD_CLASSES.CONTENT }, h("slot", { name: "content" }, h("div", { class: CARD_CLASSES.CAPTION }, h("slot", null)))));
    }
    getHeroImage() {
        if (!this.imgSrc)
            return null;
        return h("img", { class: CARD_CLASSES.HERO, src: this.imgSrc, alt: this.alt || 'Card hero image' });
    }
    getCardClasses() {
        return joinArrayValues([
            CARD_CLASSES.CARD,
            this.active && ACTIVE_CLASS,
            this.highlight && HIGHLIGHT_CLASS,
            this.empty && EMPTY_CLASS,
            this.noBorders.includes('card') && NO_BORDER_CLASS,
            this.center && UTILITY_CLASSES.ALIGN.CENTER,
            this.animated && UTILITY_CLASSES.HOVER.ANIMATE,
            this.widget && CARD_CLASSES.WIDGET,
        ]);
    }
    render() {
        return (h("div", { key: '9e2d76dbfbc503d2d0a054ea629a93cd6185856b', class: this.getCardClasses() }, this.getHeroImage(), this.getHeader(), this.getContent(), this.getFooter()));
    }
    static get is() { return "chi-card"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "cardTitle": {
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
                    "text": "To define card title."
                },
                "getter": false,
                "setter": false,
                "attribute": "title",
                "reflect": false
            },
            "noBorders": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "CardNoBorderTypes[]",
                    "resolved": "(\"footer\" | \"header\" | \"card\")[]",
                    "references": {
                        "CardNoBorderTypes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::CardNoBorderTypes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Remove border from the card, header, and/or footer."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "active": {
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
                    "text": "Render an active state card."
                },
                "getter": false,
                "setter": false,
                "attribute": "active",
                "reflect": true,
                "defaultValue": "false"
            },
            "highlight": {
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
                    "text": "Render a highlighted card."
                },
                "getter": false,
                "setter": false,
                "attribute": "highlight",
                "reflect": true,
                "defaultValue": "false"
            },
            "widget": {
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
                    "text": "Render a widget card."
                },
                "getter": false,
                "setter": false,
                "attribute": "widget",
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
                    "text": "Center-align the card content."
                },
                "getter": false,
                "setter": false,
                "attribute": "center",
                "reflect": true,
                "defaultValue": "false"
            },
            "titleCenter": {
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
                    "text": "Center-align the title in card header."
                },
                "getter": false,
                "setter": false,
                "attribute": "title-center",
                "reflect": true,
                "defaultValue": "false"
            },
            "footerAlign": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CardFooterAlignTypes",
                    "resolved": "string",
                    "references": {
                        "CardFooterAlignTypes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::CardFooterAlignTypes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Align the footer items."
                },
                "getter": false,
                "setter": false,
                "attribute": "footer-align",
                "reflect": true
            },
            "animated": {
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
                    "text": "Animate card on hover."
                },
                "getter": false,
                "setter": false,
                "attribute": "animated",
                "reflect": true,
                "defaultValue": "false"
            },
            "empty": {
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
                    "text": "Render an empty card."
                },
                "getter": false,
                "setter": false,
                "attribute": "empty",
                "reflect": true,
                "defaultValue": "false"
            },
            "imgSrc": {
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
                    "text": "Source URL for the hero image. Display a hero image at the top of the card."
                },
                "getter": false,
                "setter": false,
                "attribute": "img-src",
                "reflect": true
            },
            "alt": {
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
                    "text": "Alt text for the hero image."
                },
                "getter": false,
                "setter": false,
                "attribute": "alt",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sm'",
                    "resolved": "\"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set header and footer size to -sm"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "sizeValidation"
            }, {
                "propName": "footerAlign",
                "methodName": "footerAlignValidation"
            }, {
                "propName": "noBorders",
                "methodName": "noBordersValidation"
            }];
    }
}
