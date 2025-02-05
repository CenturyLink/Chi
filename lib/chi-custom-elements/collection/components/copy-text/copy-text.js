import { h, Host } from "@stencil/core";
import { COPY_MESSAGE, COPIED_MESSAGE } from "../../constants/constants";
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
        return (h(Host, { key: '7644e2960092f6cb51543265d6466bc6febc5b58' }, h("chi-tooltip", { key: 'b3eb31845188bc3f069a7f5093ee1e913177f5e5', wrapper: true, message: this.tooltipMessage }, h("chi-button", { key: 'f07cda2921dfeda487363188f3e555dde80341da', type: "icon", variant: "flat", disabled: this.disabled, onChiClick: () => this.handlerClick(), onChiMouseLeave: () => this.setTooltipMsg(COPY_MESSAGE) }, h("chi-icon", { key: 'bfa0f0dbf88782eba21056d400143f844e6f9ef1', icon: "copy", size: this.size })))));
    }
    static get is() { return "chi-copy-text"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["copy-text.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["copy-text.css"]
        };
    }
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
