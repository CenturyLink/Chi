import { h, Host } from "@stencil/core";
import { COPY_MESSAGE, COPIED_MESSAGE } from "../../constants/constants";
export class CopyText {
    constructor() {
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
