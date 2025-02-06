'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c2d46a0.js');
const classes = require('./classes-b81f8b66.js');
const utils = require('./utils-7f208c7f.js');

const Tags = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiChange = index.createEvent(this, "chiChange", 7);
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
        setTimeout(() => this.el.querySelector(`input.${classes.TAGS_CLASSES.INPUT}`).focus(), 100);
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
        return (index.h("li", null, index.h("chi-badge", { class: classes.TAGS_CLASSES.TAG }, tag.name, index.h("chi-button", { type: "close", size: "xs", onClick: () => this._onDeleteTag(tag) }))));
    }
    _getInput() {
        return (index.h("li", { class: classes.UTILITY_CLASSES.FLEX.FLEX_GROW1 }, index.h("input", { type: "text", class: classes.TAGS_CLASSES.INPUT, placeholder: this.placeholder || '', onKeyDown: (ev) => this._onKeyDown(ev), tabindex: "0", "aria-label": this.placeholder || 'Add tag' })));
    }
    render() {
        const tagElements = this._tags.map((tag) => this._getTagElement(tag));
        const input = this._getInput();
        const classes$1 = utils.joinArrayValues([classes.TAGS_CLASSES.TAGS, this._status && `-${this._status}`]);
        return (index.h("ul", { key: '054da49c9b5c8411625cc87cd4f237690b19577c', class: classes$1 }, tagElements, input));
    }
    get el() { return index.getElement(this); }
};

exports.chi_tags = Tags;
