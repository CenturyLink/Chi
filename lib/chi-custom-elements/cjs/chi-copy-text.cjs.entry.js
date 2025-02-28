'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const constants = require('./constants-8a881329.js');

const copyTextCss = "chi-copy-text.sc-chi-copy-text-h chi-tooltip.sc-chi-copy-text{display:-ms-inline-flexbox;display:inline-flex}";
const ChiCopyTextStyle0 = copyTextCss;

const CopyText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiCopy = index.createEvent(this, "chiCopy", 7);
        /**
         * The message showed in the tooltip
         */
        this.tooltipMessage = constants.COPY_MESSAGE;
    }
    handlerClick() {
        var _a;
        (_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(this.text);
        this.chiCopy.emit(this.text);
        this.setTooltipMsg(constants.COPIED_MESSAGE);
    }
    setTooltipMsg(message) {
        this.tooltipMessage = message;
    }
    render() {
        return (index.h(index.Host, { key: '52d3d76c94af69f583f14174fc9f3f927aa61d9e' }, index.h("chi-tooltip", { key: '9989c5ff119809eb7c3022e107cbf9fedbf4b85f', wrapper: true, message: this.tooltipMessage }, index.h("chi-button", { key: '0e4e884e4b34d6bdcbb6277ba72b3740b6e97d0a', type: "icon", variant: "flat", disabled: this.disabled, onChiClick: () => this.handlerClick(), onChiMouseLeave: () => this.setTooltipMsg(constants.COPY_MESSAGE) }, index.h("chi-icon", { key: 'b5efdd71c8fe74072fe763b90d5e8c2ec912749b', icon: "copy", size: this.size })))));
    }
    get el() { return index.getElement(this); }
};
CopyText.style = ChiCopyTextStyle0;

exports.chi_copy_text = CopyText;
