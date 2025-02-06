import { r as registerInstance, c as createEvent, h, g as getElement } from './index-93bc7bbf.js';
import { A as ALERT_COLORS } from './color-b6e4748b.js';
import { a as addMutationObserver } from './mutationObserver-b386bd11.js';

const alertScss = "chi-alert.sc-chi-alert-h {\n  display: block;\n\n  &[center] {\n    .-center {\n      -ms-flex-pack: center;\n      justify-content: center;\n    }\n  }\n\n  chi-button {\n    -ms-flex-item-align: start;\n    align-self: flex-start;\n  }\n}\n\n.sc-chi-alert-s > chi-icon {\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n}";
const ChiAlertStyle0 = alertScss;

const Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dismissAlert = createEvent(this, "dismissAlert", 7);
        /**
         *  to set alert type { bubble, banner, toast }.
         */
        this.type = 'bubble';
        /**
         *  to hide the alert when dismissed.
         */
        this.mutable = true;
        /**
         *  to set alert size { sm, md, lg }.
         */
        this.size = 'md';
        /**
         *  to center the alert content.
         */
        this.center = false;
        /**
         *  to make the alert dismissible.
         */
        this.closable = false;
        /**
         * To render alert with Spinner
         */
        this.spinner = false;
    }
    typeValidation(newValue) {
        if (newValue && !['bubble', 'banner', 'toast'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for alert. Valid values are bubble, banner or toast.`);
        }
    }
    colorValidation(newValue) {
        const validValues = ALERT_COLORS.join(', ');
        if (newValue && !ALERT_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for alert. Valid values are ${validValues}.`);
        }
    }
    sizeValidation(newValue) {
        if (newValue && !['sm', 'md', 'lg'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for an alert. Alerts only support sm, md (default), and lg sizes.`);
        }
    }
    componentWillLoad() {
        this.typeValidation(this.type);
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        if (this.type === 'toast' && this.expirationTime) {
            this.timeoutReference = setTimeout(() => {
                if (this.el && this.el.parentNode) {
                    this._dismissAlert();
                }
            }, this.expirationTime * 1000);
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    _hasAlertActions() {
        return Array.from(this.el.querySelectorAll('[slot=chi-alert__actions]')).length > 0;
    }
    _hasClickableIcon() {
        return Array.from(this.el.querySelectorAll('[slot=chi-alert__clickable-icon]')).length > 0;
    }
    _dismissAlert() {
        if (this.mutable) {
            this.el.parentNode.removeChild(this.el);
        }
        this.dismissAlert.emit();
        if (this.timeoutReference) {
            clearTimeout(this.timeoutReference);
            this.timeoutReference = null;
        }
    }
    render() {
        const spinnerSizeMapping = {
            sm: 'sm',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--2',
        };
        const chiIcon = !this.spinner && this.icon && (h("chi-icon", { key: 'b2f085681188a90e6e6319e7644b131ee9f51ed6', icon: this.icon, color: this.color || null, extraClass: "chi-alert__icon" }));
        const alertTitle = this.alertTitle ? h("p", { class: "chi-alert__title" }, this.alertTitle) : '';
        const chiActions = this._hasAlertActions() && (h("div", { key: '877f55915af0eaebcd81a34fd3a6828669d9b211', class: "chi-alert__actions" }, h("slot", { key: '0ce7f642171a794edbef8baabb3a41b1bc3b557a', name: "chi-alert__actions" })));
        const chiSpinner = this.spinner && (h("chi-spinner", { key: 'e6b4aa5801673da660e16f5779afbe17d66c8e56', class: "chi-alert__spinner", size: spinnerSizeMapping[this.size] || 'sm' }));
        const chiClickableIcon = this._hasClickableIcon() && (h("div", { key: 'c3e35fd87e8fc2e9c5b206fe6f93ab87e1df54e8', class: "chi-alert__clickable-icon" }, h("slot", { key: '212e160e67d98a7a2fb855d0a25749db07cb6c39', name: "chi-alert__clickable-icon" })));
        const chiButton = (this.closable || this.type === 'toast') && (h("chi-button", { key: '18eec4d7d426e6ecdc1e5bcefd3c3b3c2d3274f8', extraClass: "chi-alert__close-button", type: "close", onChiClick: () => this._dismissAlert() }));
        return (h("div", { key: 'cf322804f6a1c7a59086aae386d262161cd3ac83', class: `chi-alert
        ${this.type ? `-${this.type}` : ''}
        ${this.color ? `-${this.color}` : ''}
        ${this.center ? '-center' : ''}
        ${this.closable ? '-close' : ''}
        ${this.size ? `-${this.size}` : ''}`, role: "alert" }, chiIcon, chiSpinner, h("div", { key: '39ed8f989066eee24f22c38c3068d4f6b62cd284', class: "chi-alert__content" }, alertTitle, h("p", { key: '5896a4a4e2cdae73e94f504955b865490b5ce576', class: "chi-alert__text" }, h("slot", { key: 'a9b0658342e2a41538d599a23ac05e54ec295d08' })), chiActions), chiButton, chiClickableIcon));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["typeValidation"],
        "color": ["colorValidation"],
        "size": ["sizeValidation"]
    }; }
};
Alert.style = ChiAlertStyle0;

export { Alert as chi_alert };
