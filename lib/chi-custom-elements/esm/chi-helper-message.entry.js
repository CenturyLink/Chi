import { r as registerInstance, h, g as getElement } from './index-ef94cfce.js';
import { S as STATES } from './states-a5be3f93.js';
import { F as FORM_CLASSES, _ as STATUS_CLASS } from './classes-6227bd8c.js';
import { a as addMutationObserver } from './mutationObserver-5f2a1e18.js';

const helperMessageCss = "chi-helper-message.sc-chi-helper-message-h{display:-ms-flexbox;display:flex}";
const ChiHelperMessageStyle0 = helperMessageCss;

const HelperMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    render() {
        const stateIcon = this.state ? STATES[this.state].icon : null;
        const stateClass = this.state ? STATES[this.state].class : null;
        return (h("div", { key: '424cf74baaf88f475575770a408d7f45aaf6008f', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: 'eb22a7fa61de6596813c9be3d74da7313bf59570', icon: stateIcon }), h("slot", { key: '75d13f5dba221fa9f0cc0e59cc73893a2a4607db' })));
    }
    get el() { return getElement(this); }
};
HelperMessage.style = ChiHelperMessageStyle0;

export { HelperMessage as chi_helper_message };
