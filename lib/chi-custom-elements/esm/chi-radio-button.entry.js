import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ef94cfce.js';
import { J as RADIO_CLASSES } from './classes-6227bd8c.js';
import { a as addMutationObserver } from './mutationObserver-5f2a1e18.js';
import { v as v4 } from './v4-08967a5a.js';

const RadioButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiBlur = createEvent(this, "chiBlur", 7);
        this.chiChange = createEvent(this, "chiChange", 7);
        this.chiFocus = createEvent(this, "chiFocus", 7);
    }
    connectedCallback() {
        this.id = this.el.getAttribute('id');
        addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.id = `${v4()}`;
        this.labelId = `radio-label-${this.id}`;
    }
    blur() {
        this.hasFocus = false;
        this._emitBlur(this.hasFocus);
    }
    change(ev) {
        this.checked = ev.target.checked;
        this._emitChange(this.checked);
    }
    focus() {
        this.hasFocus = true;
        this._emitFocus(this.hasFocus);
    }
    _emitBlur(hasFocus) {
        this.chiBlur.emit(hasFocus);
    }
    _emitChange(checked) {
        this.chiChange.emit(checked);
    }
    _emitFocus(hasFocus) {
        this.chiFocus.emit(hasFocus);
    }
    render() {
        const stateClass = this.state ? `-${this.state}` : '';
        return (h("div", { key: '7877647f9e16f4dfbe0a818bdf4839afa9e4f55b', class: RADIO_CLASSES.RADIO }, h("input", { key: '5261d24d99bcd82c601e4adb4e9309cc15523fd8', class: `
            ${RADIO_CLASSES.INPUT}
            ${stateClass}
          `, id: this.id, checked: this.checked, disabled: this.disabled, name: this.name, "aria-checked": this.checked, "aria-labelledby": this.labelId, onBlur: () => this.blur(), onChange: (ev) => this.change(ev), onFocus: () => this.focus(), type: "radio" }), h("label", { key: '92ad7f2d960928c0d900f1c58acde76a6552c1ac', id: this.labelId, class: RADIO_CLASSES.LABEL, htmlFor: this.id }, this.label)));
    }
    get el() { return getElement(this); }
};

export { RadioButton as chi_radio_button };
