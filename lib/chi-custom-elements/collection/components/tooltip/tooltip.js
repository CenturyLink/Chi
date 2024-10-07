import { h } from "@stencil/core";
import { ACTIVE_CLASS, LIGHT_CLASS, TOOLTIP_CLASSES } from "../../constants/classes";
import Popper from "popper.js";
import { v4 as uuid4 } from "uuid";
export class Tooltip {
    constructor() {
        this._showTooltipHandler = () => this.toggle(true);
        this._hideTooltipHandler = () => this.toggle(false);
        this.toggle = (visible) => {
            var _a, _b;
            if (this.tooltipVisible === visible) {
                return;
            }
            this.tooltipVisible = visible;
            (_a = this._tooltipElementNode) === null || _a === void 0 ? void 0 : _a.classList.toggle(ACTIVE_CLASS, visible);
            if (visible) {
                this.tooltipShow.emit();
                (_b = this._popper) === null || _b === void 0 ? void 0 : _b.update();
            }
            else {
                this.tooltipHide.emit();
            }
        };
        this.message = undefined;
        this.color = 'base';
        this.position = 'top';
        this.wrapper = false;
        this.tooltipVisible = false;
    }
    messageChanged() {
        if (this._popper) {
            this._popper.update();
        }
    }
    positionChanged() {
        if (this._popper) {
            this._popper.options.placement = this.position;
            this._popper.scheduleUpdate();
        }
    }
    componentWillLoad() {
        if (!this.el.id) {
            this._id = `chi-tooltip-${uuid4()}`;
        }
    }
    /**
     * Shows the tooltip
     */
    async show() {
        this.toggle(true);
    }
    /**
     * Hides the tooltip
     */
    async hide() {
        this.toggle(false);
    }
    initializePopper() {
        const triggerElement = this._tooltipRef;
        const tooltipElementNode = this._tooltipElementNode;
        if (triggerElement && tooltipElementNode) {
            this._popper = new Popper(triggerElement, tooltipElementNode, {
                placement: this.position,
                modifiers: {
                    offset: {
                        offset: '0,8',
                    },
                },
            });
            ['mouseenter', 'focus'].forEach((event) => { var _a; return (_a = this._tooltipRef) === null || _a === void 0 ? void 0 : _a.addEventListener(event, this._showTooltipHandler); });
            ['mouseleave', 'blur'].forEach((event) => { var _a; return (_a = this._tooltipRef) === null || _a === void 0 ? void 0 : _a.addEventListener(event, this._hideTooltipHandler); });
        }
    }
    componentDidLoad() {
        this.initializePopper();
    }
    disconnectedCallback() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
        if (this._tooltipRef) {
            ['mouseenter', 'focus'].forEach((event) => { var _a; return (_a = this._tooltipRef) === null || _a === void 0 ? void 0 : _a.removeEventListener(event, this._showTooltipHandler); });
            ['mouseleave', 'blur'].forEach((event) => { var _a; return (_a = this._tooltipRef) === null || _a === void 0 ? void 0 : _a.removeEventListener(event, this._hideTooltipHandler); });
        }
    }
    render() {
        return (h("div", { key: '079e8b31bf4634c2cc6890b1193e15d2597cb3bb', class: this.wrapper ? TOOLTIP_CLASSES.TOOLTIP_WRAPPER : '', ref: (el) => (this._tooltipRef = el), "aria-describedby": this.tooltipVisible ? this._id : null }, h("slot", { key: 'dabdd3e3937efe89f86c683c31d8eab9076dd4f2' }), h("div", { key: '27fbaa067b49ab5561411a0804f7a14130c31db0', class: {
                [TOOLTIP_CLASSES.TOOLTIP_ELEMENT]: true,
                [LIGHT_CLASS]: this.color === 'light',
            }, id: this._id, role: "tooltip", ref: (el) => (this._tooltipElementNode = el), "aria-hidden": !this.tooltipVisible }, h("span", { key: '17dd5f17dd297173975c0f650e275609716507bf' }, this.message))));
    }
    static get is() { return "chi-tooltip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tooltip.css"]
        };
    }
    static get properties() {
        return {
            "message": {
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
                    "text": "to set the tooltip message to display { string }."
                },
                "attribute": "message",
                "reflect": true
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TooltipColors",
                    "resolved": "\"base\" | \"light\"",
                    "references": {
                        "TooltipColors": {
                            "location": "import",
                            "path": "../../constants/color",
                            "id": "src/constants/color.ts::TooltipColors"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "to set the background color of the tooltip { base, light }."
                },
                "attribute": "color",
                "reflect": false,
                "defaultValue": "'base'"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "GeneralPositions",
                    "resolved": "string",
                    "references": {
                        "GeneralPositions": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::GeneralPositions"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "to set position of the tooltip { top, right, bottom, left }."
                },
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'top'"
            },
            "wrapper": {
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
                    "text": "to set the class chi-tooltip__wrapper"
                },
                "attribute": "wrapper",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "tooltipVisible": {}
        };
    }
    static get events() {
        return [{
                "method": "tooltipShow",
                "name": "chiTooltipShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "triggered when the Tooltip show method has been executed."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "tooltipHide",
                "name": "chiTooltipHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "triggered when the Tooltip hide method has been executed."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Shows the tooltip",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Hides the tooltip",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "message",
                "methodName": "messageChanged"
            }, {
                "propName": "position",
                "methodName": "positionChanged"
            }];
    }
}
