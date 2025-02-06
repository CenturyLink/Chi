import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-93bc7bbf.js';
import { k as COPY_MESSAGE, l as COPIED_MESSAGE } from './constants-0e68989c.js';

const copyTextScss = "chi-copy-text.sc-chi-copy-text-h {\n  chi-tooltip {\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n}";
const ChiCopyTextStyle0 = copyTextScss;

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
        return (h(Host, { key: '7644e2960092f6cb51543265d6466bc6febc5b58' }, h("chi-tooltip", { key: 'b3eb31845188bc3f069a7f5093ee1e913177f5e5', wrapper: true, message: this.tooltipMessage }, h("chi-button", { key: 'f07cda2921dfeda487363188f3e555dde80341da', type: "icon", variant: "flat", disabled: this.disabled, onChiClick: () => this.handlerClick(), onChiMouseLeave: () => this.setTooltipMsg(COPY_MESSAGE) }, h("chi-icon", { key: 'bfa0f0dbf88782eba21056d400143f844e6f9ef1', icon: "copy", size: this.size })))));
    }
    get el() { return getElement(this); }
};
CopyText.style = ChiCopyTextStyle0;

export { CopyText as chi_copy_text };
