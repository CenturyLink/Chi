'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const states = require('./states-47b0ca3a.js');
const classes = require('./classes-ee649937.js');
const mutationObserver = require('./mutationObserver-4de59f05.js');

const helperMessageCss = "chi-helper-message.sc-chi-helper-message-h{display:-ms-flexbox;display:flex}";
const ChiHelperMessageStyle0 = helperMessageCss;

const HelperMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    connectedCallback() {
        mutationObserver.addMutationObserver.call(this);
    }
    render() {
        const stateIcon = this.state ? states.STATES[this.state].icon : null;
        const stateClass = this.state ? states.STATES[this.state].class : null;
        return (index.h("div", { key: '05082bea3ccb19c83a037e6c8defb428c72a5e62', class: `${classes.FORM_CLASSES.LABEL} ${classes.STATUS_CLASS} ${stateClass}` }, stateIcon && index.h("chi-icon", { key: '5407601997a820b3acbb0ac650b076e7131dafa1', icon: stateIcon }), index.h("slot", { key: 'dd5938e0f95951140eded4a7a0a72106ae6df23b' })));
    }
    get el() { return index.getElement(this); }
};
HelperMessage.style = ChiHelperMessageStyle0;

exports.chi_helper_message = HelperMessage;
