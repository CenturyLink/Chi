'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bd6e5613.js');
const states = require('./states-47b0ca3a.js');
const classes = require('./classes-b81f8b66.js');
const mutationObserver = require('./mutationObserver-f757704a.js');

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
        return (index.h("div", { key: '424cf74baaf88f475575770a408d7f45aaf6008f', class: `${classes.FORM_CLASSES.LABEL} ${classes.STATUS_CLASS} ${stateClass}` }, stateIcon && index.h("chi-icon", { key: 'eb22a7fa61de6596813c9be3d74da7313bf59570', icon: stateIcon }), index.h("slot", { key: '75d13f5dba221fa9f0cc0e59cc73893a2a4607db' })));
    }
    get el() { return index.getElement(this); }
};
HelperMessage.style = ChiHelperMessageStyle0;

exports.chi_helper_message = HelperMessage;
