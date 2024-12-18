import { h } from "@stencil/core";
import { TAGS_CLASSES, UTILITY_CLASSES } from "../../constants/classes";
import { joinArrayValues } from "../../utils/utils";
export class Tags {
    constructor() {
        this.placeholder = '';
        this.tags = [];
        this._status = undefined;
        this._tags = [];
    }
    // #region LifeCycle
    componentDidLoad() {
        if (this.tags) {
            this._tags = this.tags.map((tag) => (Object.assign({}, tag)));
        }
    }
    // #endregion
    // #region Handlers
    _focusInput() {
        setTimeout(() => this.el.querySelector(`input.${TAGS_CLASSES.INPUT}`).focus(), 100);
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
        this.chiChange.emit(this._tags);
    }
    // #endregion
    // #region Render
    _getTagElement(tag) {
        return (h("li", null, h("chi-badge", { class: TAGS_CLASSES.TAG }, tag.name, h("chi-button", { type: "close", size: "xs", onClick: () => this._onDeleteTag(tag) }))));
    }
    _getInput() {
        return (h("li", { class: UTILITY_CLASSES.FLEX.FLEX_GROW1 }, h("input", { type: "text", class: TAGS_CLASSES.INPUT, placeholder: this.placeholder || '', onKeyDown: (ev) => this._onKeyDown(ev), tabindex: "0", "aria-label": this.placeholder || 'Add tag' })));
    }
    render() {
        const tagElements = this._tags.map((tag) => this._getTagElement(tag));
        const input = this._getInput();
        const classes = joinArrayValues([TAGS_CLASSES.TAGS, this._status && `-${this._status}`]);
        return (h("ul", { key: '0e51152f8a250d3022a19e4df991c0f4243ca753', class: classes }, tagElements, input));
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
}
