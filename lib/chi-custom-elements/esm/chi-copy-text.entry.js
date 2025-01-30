import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-cde0ed0d.js';
import { k as COPY_MESSAGE, l as COPIED_MESSAGE } from './constants-76e3b213.js';

const copyTextCss = "chi-copy-text.sc-chi-copy-text-h chi-tooltip.sc-chi-copy-text{display:-ms-inline-flexbox;display:inline-flex}";
const ChiCopyTextStyle0 = copyTextCss;

const CopyText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiCopy = createEvent(this, "chiCopy", 7);
        this.text = undefined;
        this.size = undefined;
        this.color = undefined;
        this.disabled = undefined;
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
        return (h(Host, { key: 'cb4d3261c8c45532efb332122abaec0f864ea7d4' }, h("chi-tooltip", { key: '375112471ea669c7de768dc6cbde43832722ed1c', wrapper: true, message: this.tooltipMessage }, h("chi-button", { key: 'd1b63a719ed0a55bffd218baabedc435ff570ce4', type: "icon", variant: "flat", disabled: this.disabled, onChiClick: () => this.handlerClick(), onChiMouseLeave: () => this.setTooltipMsg(COPY_MESSAGE) }, h("chi-icon", { key: 'fb7a8c65855e6ef02ed63de028304c5c4083d8d4', icon: "copy", size: this.size })))));
    }
    get el() { return getElement(this); }
};
CopyText.style = ChiCopyTextStyle0;

export { CopyText as chi_copy_text };
