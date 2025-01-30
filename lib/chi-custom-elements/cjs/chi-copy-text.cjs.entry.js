'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');
const constants = require('./constants-be8ca4ba.js');

const copyTextCss = "chi-copy-text.sc-chi-copy-text-h chi-tooltip.sc-chi-copy-text{display:-ms-inline-flexbox;display:inline-flex}";
const ChiCopyTextStyle0 = copyTextCss;

const CopyText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiCopy = index.createEvent(this, "chiCopy", 7);
        this.text = undefined;
        this.size = undefined;
        this.color = undefined;
        this.disabled = undefined;
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
        return (index.h(index.Host, { key: 'cb4d3261c8c45532efb332122abaec0f864ea7d4' }, index.h("chi-tooltip", { key: '375112471ea669c7de768dc6cbde43832722ed1c', wrapper: true, message: this.tooltipMessage }, index.h("chi-button", { key: 'd1b63a719ed0a55bffd218baabedc435ff570ce4', type: "icon", variant: "flat", disabled: this.disabled, onChiClick: () => this.handlerClick(), onChiMouseLeave: () => this.setTooltipMsg(constants.COPY_MESSAGE) }, index.h("chi-icon", { key: 'fb7a8c65855e6ef02ed63de028304c5c4083d8d4', icon: "copy", size: this.size })))));
    }
    get el() { return index.getElement(this); }
};
CopyText.style = ChiCopyTextStyle0;

exports.chi_copy_text = CopyText;
