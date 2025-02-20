import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { y as TAGS_CLASSES } from './classes-f1a396c8.js';
import { j as joinArrayValues } from './utils-48628cb4.js';

const Tags = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiChange = createEvent(this, "chiChange", 7);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "tags": ["updateTags"]
    }; }
};

export { Tags as chi_tags };
