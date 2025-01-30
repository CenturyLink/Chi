import { r as registerInstance, h, g as getElement } from './index-cde0ed0d.js';
import { S as STATES } from './states-a5be3f93.js';
import { F as FORM_CLASSES, _ as STATUS_CLASS } from './classes-fca9c660.js';
import { a as addMutationObserver } from './mutationObserver-d6ac3ea2.js';

const helperMessageCss = "chi-helper-message.sc-chi-helper-message-h{display:-ms-flexbox;display:flex}";
const ChiHelperMessageStyle0 = helperMessageCss;

const HelperMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.state = undefined;
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    render() {
        const stateIcon = this.state ? STATES[this.state].icon : null;
        const stateClass = this.state ? STATES[this.state].class : null;
        return (h("div", { key: '8256b5a2f4aaff087c47cc5bd0700a1f5f8ac080', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: '33a55d7044308a305f1ec2f9279fab16ba739790', icon: stateIcon }), h("slot", { key: '382d24c7bfb3a68b239b76af4d98542f4633a166' })));
    }
    get el() { return getElement(this); }
};
HelperMessage.style = ChiHelperMessageStyle0;

export { HelperMessage as chi_helper_message };
