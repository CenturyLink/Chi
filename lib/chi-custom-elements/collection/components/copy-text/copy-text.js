import { h } from "@stencil/core";
import { COPY_MESSAGE, COPIED_MESSAGE } from "../../constants/constants";
import { UTILITY_CLASSES } from "../../constants/classes";
export class CopyText {
    constructor() {
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
        return (h("chi-tooltip", { key: '1dd71ffa28533e76d5ff2d6af46a3a1018bfb0a4', wrapper: true, message: this.tooltipMessage, class: UTILITY_CLASSES.DISPLAY.INLINE_BLOCK }, h("chi-button", { key: 'ee081e68de38251413a22590b2d866e3936367ac', type: "icon", variant: "flat", disabled: this.disabled, onChiClick: () => this.handlerClick(), onChiMouseLeave: () => this.setTooltipMsg(COPY_MESSAGE) }, h("chi-icon", { key: 'f2772b7a7c39c6a8c39cd7c72f7b9ee112179f1c', icon: "copy", size: this.size }))));
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
    static get states() {
        return {
            "tooltipMessage": {}
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
