import { r as registerInstance, h, g as getElement } from './index-422a57bb.js';
import { S as STATES } from './states-a5be3f93.js';
import { F as FORM_CLASSES, a2 as STATUS_CLASS } from './classes-d4369523.js';
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
        return (h("div", { key: '7ad60db424e3a5be097a44aef866fdaa1bebb3f4', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: '6ef754095d356d606b6f9945174e669478286416', icon: stateIcon }), h("slot", { key: 'd343f485e98d3ff4efbc2229aa70a15ba72257be' })));
    }
    get el() { return getElement(this); }
};
HelperMessage.style = ChiHelperMessageStyle0;

export { HelperMessage as chi_helper_message };
