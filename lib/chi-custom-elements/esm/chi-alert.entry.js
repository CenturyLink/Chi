import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { A as ALERT_COLORS } from './color-b6e4748b.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';

const alertCss = "chi-alert.sc-chi-alert-h{display:block}chi-alert[center].sc-chi-alert-h .-center.sc-chi-alert{-ms-flex-pack:center;justify-content:center}chi-alert.sc-chi-alert-h chi-button.sc-chi-alert{-ms-flex-item-align:start;align-self:flex-start}.sc-chi-alert-s>chi-icon{-ms-flex-item-align:start;align-self:flex-start}";
const ChiAlertStyle0 = alertCss;

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
    expirationTimeChanged(newValue) {
        this._autoCloseAlert(newValue);
    }
    componentWillLoad() {
        this.typeValidation(this.type);
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        this._autoCloseAlert(this.expirationTime);
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
    _autoCloseAlert(expirationTime) {
        if (this.type === 'toast' && expirationTime) {
            this.timeoutReference = setTimeout(() => {
                if (this.el && this.el.parentNode) {
                    this._dismissAlert();
                }
            }, expirationTime * 1000);
        }
    }
    render() {
        const spinnerSizeMapping = {
            sm: 'sm',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--2',
        };
        const chiIcon = !this.spinner && this.icon && (h("chi-icon", { key: 'df813e62f929d66f24daec8edd57543d5f260a43', icon: this.icon, color: this.color || null, extraClass: "chi-alert__icon" }));
        const alertTitle = this.alertTitle ? h("p", { class: "chi-alert__title" }, this.alertTitle) : '';
        const chiActions = this._hasAlertActions() && (h("div", { key: 'a48edb17aeb1cb0910dbe2b774f87ff9b9d0bf1a', class: "chi-alert__actions" }, h("slot", { key: 'b3181632d6cef90b09194258fb25e8a6d034ceb0', name: "chi-alert__actions" })));
        const chiSpinner = this.spinner && (h("chi-spinner", { key: '5640c6c4ee9f937fcbde914d7a4cd86726239d32', class: "chi-alert__spinner", size: spinnerSizeMapping[this.size] || 'sm' }));
        const chiClickableIcon = this._hasClickableIcon() && (h("div", { key: '3b012e8242f8dbd2b3dcd53a13e4e7cf7e68125a', class: "chi-alert__clickable-icon" }, h("slot", { key: '01990a0ce88703f05ff57da68b49685666c1228d', name: "chi-alert__clickable-icon" })));
        const chiButton = (this.closable || this.type === 'toast') && (h("chi-button", { key: 'b9326048d949fc5e06d5a80bbddc18cee723e96c', extraClass: "chi-alert__close-button", type: "close", onChiClick: () => this._dismissAlert() }));
        return (h("div", { key: '7c61971970ecf9838f2036fd4daa28de6856b877', class: `chi-alert
        ${this.type ? `-${this.type}` : ''}
        ${this.color ? `-${this.color}` : ''}
        ${this.center ? '-center' : ''}
        ${this.closable ? '-close' : ''}
        ${this.size ? `-${this.size}` : ''}`, role: "alert" }, chiIcon, chiSpinner, h("div", { key: '17a20e4f413b6cdf2cd61ed9a9294330d4567bc6', class: "chi-alert__content" }, alertTitle, h("p", { key: '8b030566812f01c625641afd87bd50d2ab7e4184', class: "chi-alert__text" }, h("slot", { key: '3187463cd0ae7760898601973de259009cb70a7a' })), chiActions), chiButton, chiClickableIcon));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["typeValidation"],
        "color": ["colorValidation"],
        "size": ["sizeValidation"],
        "expirationTime": ["expirationTimeChanged"]
    }; }
};
Alert.style = ChiAlertStyle0;

export { Alert as chi_alert };
