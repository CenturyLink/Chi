import { r as registerInstance, h, g as getElement } from './index-422a57bb.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';
import { L as LINK_CLASSES, D as DISABLED_CLASS, k as HOVER_CLASS } from './classes-5181b913.js';
import { j as joinArrayValues } from './utils-48628cb4.js';

const linkCss = "chi-link.sc-chi-link-h{display:-ms-inline-flexbox;display:inline-flex}";
const ChiLinkStyle0 = linkCss;

const Link = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("a", Object.assign({ key: 'bf8b0c1265ab22baa0cce41edf3b1ba06500335b', class: this._getExtraClassesForTriggerButton(), href: this.href, hreflang: this.hreflang, target: this.target, rel: this.rel, download: this.download }, (this.alternativeText && { 'aria-label': this.alternativeText })), h("div", { key: '93902fb928e4d35b435dffbb9571cdc338f63d58', class: `${this._hasIcon() ? LINK_CLASSES.CONTENT : ''}` }, h("slot", { key: 'c64827817dde3bc83922fb85e7a8176c41254979' }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
Link.style = ChiLinkStyle0;

export { Link as chi_link };
