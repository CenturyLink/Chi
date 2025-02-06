import { r as registerInstance, h, g as getElement } from './index-93bc7bbf.js';
import { a as addMutationObserver } from './mutationObserver-b386bd11.js';

const badgeCss = "chi-badge.sc-chi-badge-h{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.sc-chi-badge-s>:not(:last-child){margin-right:0.5rem}";
const ChiBadgeStyle0 = badgeCss;

const Badge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.slotBadgeContent = true;
    }
    sizeValidation(newValue) {
        if (newValue && !['', 'sm', 'xs'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for badge. Valid values are xs, sm or ''. `);
        }
    }
    colorValidation(newValue) {
        if (newValue &&
            ![
                '',
                'primary',
                'success',
                'warning',
                'danger',
                'dark',
                'muted',
                'secondary',
                'light',
                'accent-1',
                'accent-2',
                'accent-3',
                'accent-4',
                'accent-5',
            ].includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for badge. Valid values are primary, success, danger, warning, dark, muted, secondary, light, accent-1, accent-2, accent-3, accent-4, accent-5 or ''. `);
        }
    }
    variantValidation(newValue) {
        if (newValue && !['', 'outline', 'flat'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid variant value for badge. Valid values are outline, flat or ''. `);
        }
    }
    componentWillLoad() {
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        this.variantValidation(this.variant);
        if (!this.el.querySelector('chi-icon')) {
            this.slotBadgeContent = false;
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    render() {
        return (h("div", { key: 'bb935bb0d2b7f6601c8adab70c90f6a869df7c37', class: `chi-badge
	        ${this.size ? `-${this.size}` : ''}
	        ${this.color ? `-${this.color}` : ''}
	        ${this.variant ? `-${this.variant}` : ''}
	        ${this.textTransform ? `-text--${this.textTransform}` : ''}
          ${this.textWeight ? `-text--${this.textWeight}` : ''}` }, this.slotBadgeContent ? (h("div", { class: "chi-badge__content" }, h("slot", null))) : (h("span", null, h("slot", null)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"],
        "color": ["colorValidation"],
        "variant": ["variantValidation"]
    }; }
};
Badge.style = ChiBadgeStyle0;

export { Badge as chi_badge };
