import { h } from "@stencil/core";
import { COPY_MESSAGE, COPIED_MESSAGE } from "../../constants/constants";
export class CopyText {
    constructor() {
        this.text = undefined;
        this.size = undefined;
        this.color = undefined;
        this.disabled = undefined;
    }
    componentDidLoad() {
        setTimeout(() => this.createTooltip(), 100);
    }
    disconnectedCallback() {
        this.removeTooltip();
    }
    createTooltip() {
        this.tooltip = chi.tooltip(this.el.querySelector('[data-tooltip]'));
    }
    removeTooltip() {
        if (this.tooltip) {
            this.tooltip.dispose();
            this.tooltip = null;
        }
    }
    handlerClick() {
        var _a;
        (_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(this.text);
        this.chiCopy.emit(this.text);
        this.setTooltipMsg(COPIED_MESSAGE);
    }
    /**
     * Sets message to show in the tooltip
     */
    setTooltipMsg(message) {
        this.tooltip._tooltipContent.innerText = message;
    }
    render() {
        return (h("chi-button", { key: '93bab8d5e969ee15524fba9ce3c89b798862b040', type: "icon", variant: "flat", disabled: this.disabled, "data-tooltip": COPY_MESSAGE, onChiClick: () => this.handlerClick(), onChiMouseLeave: () => this.setTooltipMsg(COPY_MESSAGE) }, h("chi-icon", { key: '7844559e83d8916fb252c53578f2b6dc249c5914', icon: "copy", size: this.size })));
    }
    static get is() { return "chi-copy-text"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text to be copied to clipboard"
                },
                "attribute": "text",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconSizes",
                    "resolved": "string",
                    "references": {
                        "IconSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::IconSizes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the icon"
                },
                "attribute": "size",
                "reflect": true
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconColors",
                    "resolved": "\"danger\" | \"dark\" | \"grey\" | \"info\" | \"light\" | \"muted\" | \"navy\" | \"orange\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {
                        "IconColors": {
                            "location": "import",
                            "path": "../../constants/color",
                            "id": "src/constants/color.ts::IconColors"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Color of the Icon."
                },
                "attribute": "color",
                "reflect": true
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To disable the copy button"
                },
                "attribute": "disabled",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "chiCopy",
                "name": "chiCopy",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user clicks on copy"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
