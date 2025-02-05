'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bd6e5613.js');
const mutationObserver = require('./mutationObserver-f757704a.js');

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
    render() {
        return (index.h("a", Object.assign({ key: 'ad8aefcf8eb951cffb7a2009aa39251d520d7e29', class: `chi-link
          ${this.cta ? '-cta' : ''}
          ${this.disabled ? '-disabled' : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this._hover ? `-hover` : ''}
          ${this.noUnderline ? '-no-underline' : ''}
          ${this.noHoverUnderline ? '-no-hover-underline' : ''}`, href: this.href, hreflang: this.hreflang, target: this.target, rel: this.rel, download: this.download }, (this.alternativeText && { 'aria-label': this.alternativeText })), index.h("div", { key: '2f70b36b974b99c80d8474c703c0a477d668f05e', class: `${this._hasIcon() ? 'chi-link__content' : ''}` }, index.h("slot", { key: 'ceda6c2680e7db65886dacf2238294c1f31e7d36' }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
Link.style = ChiLinkStyle0;

exports.chi_link = Link;
