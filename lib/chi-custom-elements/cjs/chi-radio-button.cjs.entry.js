'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const classes = require('./classes-ee649937.js');
const mutationObserver = require('./mutationObserver-4de59f05.js');
const v4 = require('./v4-daefbed8.js');

const RadioButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiBlur = index.createEvent(this, "chiBlur", 7);
        this.chiChange = index.createEvent(this, "chiChange", 7);
        this.chiFocus = index.createEvent(this, "chiFocus", 7);
    }
    connectedCallback() {
        this.id = this.el.getAttribute('id');
        mutationObserver.addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.id = `${v4.v4()}`;
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
        return (index.h("div", { key: '195967193df5ae0e9f4aa46aa038ce20ea0ad108', class: classes.RADIO_CLASSES.RADIO }, index.h("input", { key: '1b11d7c5bb22f8394e1046da396d99824f0c7baa', class: `
            ${classes.RADIO_CLASSES.INPUT}
            ${stateClass}
          `, id: this.id, checked: this.checked, disabled: this.disabled, name: this.name, "aria-checked": this.checked, "aria-labelledby": this.labelId, onBlur: () => this.blur(), onChange: (ev) => this.change(ev), onFocus: () => this.focus(), type: "radio" }), index.h("label", { key: '30ddd5da80f994d62eddb5fe9cb69f76eb1b632e', id: this.labelId, class: classes.RADIO_CLASSES.LABEL, htmlFor: this.id }, this.label)));
    }
    get el() { return index.getElement(this); }
};

exports.chi_radio_button = RadioButton;
