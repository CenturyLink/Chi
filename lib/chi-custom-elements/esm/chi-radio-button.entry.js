import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { Q as RADIO_CLASSES } from './classes-26189a5f.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';
import { v as v4 } from './v4-a4ec28c0.js';

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
        return (h("div", { key: '195967193df5ae0e9f4aa46aa038ce20ea0ad108', class: RADIO_CLASSES.RADIO }, h("input", { key: '1b11d7c5bb22f8394e1046da396d99824f0c7baa', class: `
            ${RADIO_CLASSES.INPUT}
            ${stateClass}
          `, id: this.id, checked: this.checked, disabled: this.disabled, name: this.name, "aria-checked": this.checked, "aria-labelledby": this.labelId, onBlur: () => this.blur(), onChange: (ev) => this.change(ev), onFocus: () => this.focus(), type: "radio" }), h("label", { key: '30ddd5da80f994d62eddb5fe9cb69f76eb1b632e', id: this.labelId, class: RADIO_CLASSES.LABEL, htmlFor: this.id }, this.label)));
    }
    get el() { return getElement(this); }
};

export { RadioButton as chi_radio_button };
