import { r as registerInstance, h, g as getElement } from './index-c11192ea.js';
import { a as addMutationObserver } from './mutationObserver-de99ed3d.js';

const linkCss = "chi-link.sc-chi-link-h{display:-ms-inline-flexbox;display:inline-flex}";
const ChiLinkStyle0 = linkCss;

const Link = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
Link.style = ChiLinkStyle0;

export { Link as chi_link };
