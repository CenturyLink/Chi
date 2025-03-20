'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const classes = require('./classes-ee649937.js');
const types = require('./types-59ba296a.js');
const utils = require('./utils-7f208c7f.js');

const Card = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        if (newValue && !types.CARD_FOOTER_ALIGN_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for footer alignment. Valid values are: 'center' and 'right'`);
        }
    }
    noBordersValidation(newValue) {
        if (newValue && !newValue.every((value) => types.CARD_NO_BORDER_TYPES.includes(value))) {
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
        const headerClasses = utils.joinArrayValues([
            classes.CARD_CLASSES.HEADER,
            this.noBorders.includes('header') && classes.NO_BORDER_CLASS,
            this.titleCenter && classes.UTILITY_CLASSES.ALIGN.CENTER,
            this.size === 'sm' && classes.GENERIC_SIZE_CLASSES.SM,
        ]);
        return (index.h("div", { class: headerClasses }, index.h("div", { class: classes.CARD_CLASSES.TITLE }, this.cardTitle)));
    }
    getFooter() {
        if (!this.el.querySelector('[slot="footer"]'))
            return null;
        const footerClasses = utils.joinArrayValues([
            classes.CARD_CLASSES.FOOTER,
            this.noBorders.includes('footer') && classes.NO_BORDER_CLASS,
            this.footerAlign === 'center' && classes.UTILITY_CLASSES.ALIGN.CENTER,
            this.footerAlign === 'right' && classes.UTILITY_CLASSES.ALIGN.RIGHT,
            this.size === 'sm' && classes.GENERIC_SIZE_CLASSES.SM,
        ]);
        return (index.h("div", { class: footerClasses }, index.h("slot", { name: "footer" })));
    }
    getContent() {
        return (index.h("div", { class: classes.CARD_CLASSES.CONTENT }, index.h("slot", { name: "content" }, index.h("div", { class: classes.CARD_CLASSES.CAPTION }, index.h("slot", null)))));
    }
    getHeroImage() {
        if (!this.imgSrc)
            return null;
        return index.h("img", { class: classes.CARD_CLASSES.HERO, src: this.imgSrc, alt: this.alt || 'Card hero image' });
    }
    getCardClasses() {
        return utils.joinArrayValues([
            classes.CARD_CLASSES.CARD,
            this.active && classes.ACTIVE_CLASS,
            this.highlight && classes.HIGHLIGHT_CLASS,
            this.empty && classes.EMPTY_CLASS,
            this.noBorders.includes('card') && classes.NO_BORDER_CLASS,
            this.center && classes.UTILITY_CLASSES.ALIGN.CENTER,
            this.animated && classes.UTILITY_CLASSES.HOVER.ANIMATE,
            this.widget && classes.CARD_CLASSES.WIDGET,
        ]);
    }
    render() {
        return (index.h("div", { key: '9e2d76dbfbc503d2d0a054ea629a93cd6185856b', class: this.getCardClasses() }, this.getHeroImage(), this.getHeader(), this.getContent(), this.getFooter()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"],
        "footerAlign": ["footerAlignValidation"],
        "noBorders": ["noBordersValidation"]
    }; }
};

exports.chi_card = Card;
