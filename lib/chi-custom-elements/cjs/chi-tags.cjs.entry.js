'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const classes = require('./classes-ee649937.js');
const utils = require('./utils-7f208c7f.js');

const Tags = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiChange = index.createEvent(this, "chiChange", 7);
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
        setTimeout(() => this.el.querySelector(`.${classes.TAGS_CLASSES.INPUT} input`).focus(), 100);
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
        return (index.h("li", null, index.h("chi-badge", { class: classes.TAGS_CLASSES.TAG }, tag.name, index.h("chi-button", { type: "close", size: "xs", onClick: () => this._onDeleteTag(tag) }))));
    }
    _getInput() {
        var _a, _b;
        return (index.h("li", { class: classes.TAGS_CLASSES.INPUT }, index.h("input", { type: "text", placeholder: this.placeholder || '', onKeyDown: (ev) => this._onKeyDown(ev), tabindex: "0", "aria-label": this.placeholder || 'Add tag', size: (_b = (_a = this.placeholder) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 1 })));
    }
    render() {
        const tagElements = this._tags.map((tag) => this._getTagElement(tag));
        const input = this._getInput();
        const classes$1 = utils.joinArrayValues([classes.TAGS_CLASSES.TAGS, this._status && `-${this._status}`]);
        return (index.h("ul", { key: '25067f74fe5bbca62071066c90c66118ad591c4d', class: classes$1 }, tagElements, input));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "tags": ["updateTags"]
    }; }
};

exports.chi_tags = Tags;
