import { h } from "@stencil/core";
import { TAGS_CLASSES } from "../../constants/classes";
import { joinArrayValues } from "../../utils/utils";
export class Tags {
    constructor() {
        /**
         * To define placeholder of Text input
         */
        this.placeholder = '';
        /**
         * To add tags
         */
        this.tags = [];
        this._tags = [];
    }
    // #region LifeCycle
    componentWillLoad() {
        if (this.tags) {
            this.updateTags(this.tags);
        }
    }
    // #endregion
    // #region Watchers
    updateTags(newValue) {
        this._tags = (newValue !== null && newValue !== void 0 ? newValue : []).map((tag) => (Object.assign({}, tag)));
    }
    // #endregion
    // #region Handlers
    _focusInput() {
        setTimeout(() => this.el.querySelector(`.${TAGS_CLASSES.INPUT} input`).focus(), 100);
    }
    _onKeyDown(ev) {
        const inputElement = ev.target;
        const inputValue = inputElement.value.trim();
        if (inputValue && ['Tab', 'Enter'].includes(ev.key)) {
            ev.preventDefault();
            this._tags = [...this._tags, { name: inputValue }];
            inputElement.value = '';
            this._focusInput();
            this.chiChange.emit(this._tags);
        }
    }
    _onDeleteTag(deleteTag) {
        this._tags = this._tags.filter((tag) => tag !== deleteTag);
        this._focusInput();
        this.chiChange.emit(this._tags);
    }
    // #endregion
    // #region Render
    _getTagElement(tag) {
        return (h("li", null, h("chi-badge", { class: TAGS_CLASSES.TAG }, tag.name, h("chi-button", { type: "close", size: "xs", onClick: () => this._onDeleteTag(tag) }))));
    }
    _getInput() {
        var _a, _b;
        return (h("li", { class: TAGS_CLASSES.INPUT }, h("input", { type: "text", placeholder: this.placeholder || '', onKeyDown: (ev) => this._onKeyDown(ev), tabindex: "0", "aria-label": this.placeholder || 'Add tag', size: (_b = (_a = this.placeholder) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 1 })));
    }
    render() {
        const tagElements = this._tags.map((tag) => this._getTagElement(tag));
        const input = this._getInput();
        const classes = joinArrayValues([TAGS_CLASSES.TAGS, this._status && `-${this._status}`]);
        return (h("ul", { key: '212443d7e66d6022c292c369003b870ac3ff6f30', class: classes }, tagElements, input));
    }
    static get is() { return "chi-tags"; }
    static get properties() {
        return {
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define placeholder of Text input"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "''"
            },
            "tags": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Tag[]",
                    "resolved": "Tag[]",
                    "references": {
                        "Tag": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::Tag"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To add tags"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "_status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define -hover, -focus statuses"
                },
                "getter": false,
                "setter": false,
                "attribute": "_status",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "_tags": {}
        };
    }
    static get events() {
        return [{
                "method": "chiChange",
                "name": "chiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user selects or deselects an option"
                },
                "complexType": {
                    "original": "Tag[]",
                    "resolved": "Tag[]",
                    "references": {
                        "Tag": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::Tag"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "tags",
                "methodName": "updateTags"
            }];
    }
}
