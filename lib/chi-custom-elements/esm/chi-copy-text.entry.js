import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-422a57bb.js';
import { l as COPY_MESSAGE, m as COPIED_MESSAGE } from './constants-e61c7d0c.js';

const copyTextCss = "chi-copy-text.sc-chi-copy-text-h chi-tooltip.sc-chi-copy-text{display:-ms-inline-flexbox;display:inline-flex}";
const ChiCopyTextStyle0 = copyTextCss;

const CopyText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiCopy = createEvent(this, "chiCopy", 7);
        /**
         * The message showed in the tooltip
         */
        this.tooltipMessage = COPY_MESSAGE;
    }
    handlerClick() {
        var _a;
        (_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(this.text);
        this.chiCopy.emit(this.text);
        this.setTooltipMsg(COPIED_MESSAGE);
    }
    setTooltipMsg(message) {
        this.tooltipMessage = message;
    }
    render() {
        return (h(Host, { key: '52d3d76c94af69f583f14174fc9f3f927aa61d9e' }, h("chi-tooltip", { key: '9989c5ff119809eb7c3022e107cbf9fedbf4b85f', wrapper: true, message: this.tooltipMessage }, h("chi-button", { key: '0e4e884e4b34d6bdcbb6277ba72b3740b6e97d0a', type: "icon", variant: "flat", disabled: this.disabled, onChiClick: () => this.handlerClick(), onChiMouseLeave: () => this.setTooltipMsg(COPY_MESSAGE) }, h("chi-icon", { key: 'b5efdd71c8fe74072fe763b90d5e8c2ec912749b', icon: "copy", size: this.size })))));
    }
    get el() { return getElement(this); }
};
CopyText.style = ChiCopyTextStyle0;

export { CopyText as chi_copy_text };
