import { r as registerInstance, h, g as getElement } from './index-422a57bb.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';
import { L as LINK_CLASSES, D as DISABLED_CLASS, H as HOVER_CLASS } from './classes-f1a396c8.js';
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
        return (h("a", Object.assign({ key: 'ea429d3996faa96b2f9a462b54d21a84c4ed64f7', class: this._getExtraClassesForTriggerButton(), href: this.href, hreflang: this.hreflang, target: this.target, rel: this.rel, download: this.download }, (this.alternativeText && { 'aria-label': this.alternativeText })), h("div", { key: '29b4b173d5aff8ff96dd4847d5cc97bfa1f05373', class: `${this._hasIcon() ? LINK_CLASSES.CONTENT : ''}` }, h("slot", { key: 'a43256be95116bec5442c40d47dbb37f74aa5b01' }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
Link.style = ChiLinkStyle0;

export { Link as chi_link };
