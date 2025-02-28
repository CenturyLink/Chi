import { r as registerInstance, h, g as getElement } from './index-422a57bb.js';
import { S as STATES } from './states-a5be3f93.js';
import { F as FORM_CLASSES, a3 as STATUS_CLASS } from './classes-5181b913.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';

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
        return (h("div", { key: '05082bea3ccb19c83a037e6c8defb428c72a5e62', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: '5407601997a820b3acbb0ac650b076e7131dafa1', icon: stateIcon }), h("slot", { key: 'dd5938e0f95951140eded4a7a0a72106ae6df23b' })));
    }
    get el() { return getElement(this); }
};
HelperMessage.style = ChiHelperMessageStyle0;

export { HelperMessage as chi_helper_message };
