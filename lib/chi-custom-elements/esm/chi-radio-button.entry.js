import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { W as RADIO_CLASSES } from './classes-d4369523.js';
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
        return (h("div", { key: 'ca7394d4f246de8b3b9423bb67af8ea8839dec1e', class: RADIO_CLASSES.RADIO }, h("input", { key: '02da169b74e27f2655a40ee1bd9390137fd8d76e', class: `
            ${RADIO_CLASSES.INPUT}
            ${stateClass}
          `, id: this.id, checked: this.checked, disabled: this.disabled, name: this.name, "aria-checked": this.checked, "aria-labelledby": this.labelId, onBlur: () => this.blur(), onChange: (ev) => this.change(ev), onFocus: () => this.focus(), type: "radio" }), h("label", { key: '1f6e77d5330635ab8b11b3f48c5518f44836672a', id: this.labelId, class: RADIO_CLASSES.LABEL, htmlFor: this.id }, this.label)));
    }
    get el() { return getElement(this); }
};

export { RadioButton as chi_radio_button };
