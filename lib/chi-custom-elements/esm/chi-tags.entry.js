import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c11192ea.js';
import { y as TAGS_CLASSES, U as UTILITY_CLASSES } from './classes-6227bd8c.js';
import { j as joinArrayValues } from './utils-48628cb4.js';

const Tags = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiChange = createEvent(this, "chiChange", 7);
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
        return (h("ul", { key: '054da49c9b5c8411625cc87cd4f237690b19577c', class: classes }, tagElements, input));
    }
    get el() { return getElement(this); }
};

export { Tags as chi_tags };
