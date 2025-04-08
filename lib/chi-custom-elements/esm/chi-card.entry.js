import { r as registerInstance, h, g as getElement } from './index-422a57bb.js';
import { a as CARD_CLASSES, N as NO_BORDER_CLASS, U as UTILITY_CLASSES, G as GENERIC_SIZE_CLASSES, b as ACTIVE_CLASS, H as HIGHLIGHT_CLASS, c as EMPTY_CLASS } from './classes-26189a5f.js';
import { C as CARD_FOOTER_ALIGN_TYPES, a as CARD_NO_BORDER_TYPES } from './types-870494ef.js';
import { j as joinArrayValues } from './utils-48628cb4.js';

const cardCss = "chi-card[center].sc-chi-card-s>div[slot=content],chi-card[center] .sc-chi-card-s>div[slot=content]{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}";
const ChiCardStyle0 = cardCss;

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '3010ff3ca2a5d895c09c2dad9b154e74b941ca85', class: this.getCardClasses() }, this.getHeroImage(), this.getHeader(), this.getContent(), this.getFooter()));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"],
        "footerAlign": ["footerAlignValidation"],
        "noBorders": ["noBordersValidation"]
    }; }
};
Card.style = ChiCardStyle0;

export { Card as chi_card };
