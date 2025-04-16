'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const states = require('./states-47b0ca3a.js');
const classes = require('./classes-301d799e.js');
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
        return (index.h("div", { key: '7ad60db424e3a5be097a44aef866fdaa1bebb3f4', class: `${classes.FORM_CLASSES.LABEL} ${classes.STATUS_CLASS} ${stateClass}` }, stateIcon && index.h("chi-icon", { key: '6ef754095d356d606b6f9945174e669478286416', icon: stateIcon }), index.h("slot", { key: 'd343f485e98d3ff4efbc2229aa70a15ba72257be' })));
    }
    get el() { return index.getElement(this); }
};
HelperMessage.style = ChiHelperMessageStyle0;

exports.chi_helper_message = HelperMessage;
