'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');
const states = require('./states-47b0ca3a.js');
const classes = require('./classes-2a12a2f5.js');
const mutationObserver = require('./mutationObserver-7cc6af59.js');

const helperMessageCss = "chi-helper-message.sc-chi-helper-message-h{display:-ms-flexbox;display:flex}";
const ChiHelperMessageStyle0 = helperMessageCss;

const HelperMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.state = undefined;
    }
    connectedCallback() {
        mutationObserver.addMutationObserver.call(this);
    }
    render() {
        const stateIcon = this.state ? states.STATES[this.state].icon : null;
        const stateClass = this.state ? states.STATES[this.state].class : null;
        return (index.h("div", { key: '8256b5a2f4aaff087c47cc5bd0700a1f5f8ac080', class: `${classes.FORM_CLASSES.LABEL} ${classes.STATUS_CLASS} ${stateClass}` }, stateIcon && index.h("chi-icon", { key: '33a55d7044308a305f1ec2f9279fab16ba739790', icon: stateIcon }), index.h("slot", { key: '382d24c7bfb3a68b239b76af4d98542f4633a166' })));
    }
    get el() { return index.getElement(this); }
};
HelperMessage.style = ChiHelperMessageStyle0;

exports.chi_helper_message = HelperMessage;
