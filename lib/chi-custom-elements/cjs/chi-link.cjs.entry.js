'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const mutationObserver = require('./mutationObserver-4de59f05.js');
const classes = require('./classes-6cb2683d.js');
const utils = require('./utils-7f208c7f.js');

const linkCss = "chi-link.sc-chi-link-h{display:-ms-inline-flexbox;display:inline-flex}";
const ChiLinkStyle0 = linkCss;

const Link = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        mutationObserver.addMutationObserver.call(this, undefined, { childList: true, subtree: true });
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
    }
    _hasIcon() {
        return Boolean(this.el.querySelector('chi-icon'));
    }
    _getExtraClassesForTriggerButton() {
        return utils.joinArrayValues([
            classes.LINK_CLASSES.LINK,
            this.cta && classes.LINK_CLASSES.CTA,
            this.disabled && classes.DISABLED_CLASS,
            this.size && `-${this.size}`,
            this._hover && classes.HOVER_CLASS,
            this.noUnderline && classes.LINK_CLASSES.NO_UNDERLINE,
            this.noHoverUnderline && classes.LINK_CLASSES.NO_HOVER_UNDERLINE,
        ]);
    }
    render() {
        return (index.h("a", Object.assign({ key: 'bf8b0c1265ab22baa0cce41edf3b1ba06500335b', class: this._getExtraClassesForTriggerButton(), href: this.href, hreflang: this.hreflang, target: this.target, rel: this.rel, download: this.download }, (this.alternativeText && { 'aria-label': this.alternativeText })), index.h("div", { key: '93902fb928e4d35b435dffbb9571cdc338f63d58', class: `${this._hasIcon() ? classes.LINK_CLASSES.CONTENT : ''}` }, index.h("slot", { key: 'c64827817dde3bc83922fb85e7a8176c41254979' }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
Link.style = ChiLinkStyle0;

exports.chi_link = Link;
