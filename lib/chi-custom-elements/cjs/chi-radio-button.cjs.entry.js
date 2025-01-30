'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');
const classes = require('./classes-2a12a2f5.js');
const mutationObserver = require('./mutationObserver-7cc6af59.js');
const v4 = require('./v4-d3836773.js');

const RadioButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiBlur = index.createEvent(this, "chiBlur", 7);
        this.chiChange = index.createEvent(this, "chiChange", 7);
        this.chiFocus = index.createEvent(this, "chiFocus", 7);
        this.label = undefined;
        this.name = undefined;
        this.checked = undefined;
        this.disabled = undefined;
        this.state = undefined;
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
        return (index.h("div", { key: 'ca7394d4f246de8b3b9423bb67af8ea8839dec1e', class: classes.RADIO_CLASSES.RADIO }, index.h("input", { key: '02da169b74e27f2655a40ee1bd9390137fd8d76e', class: `
            ${classes.RADIO_CLASSES.INPUT}
            ${stateClass}
          `, id: this.id, checked: this.checked, disabled: this.disabled, name: this.name, "aria-checked": this.checked, "aria-labelledby": this.labelId, onBlur: () => this.blur(), onChange: (ev) => this.change(ev), onFocus: () => this.focus(), type: "radio" }), index.h("label", { key: '1f6e77d5330635ab8b11b3f48c5518f44836672a', id: this.labelId, class: classes.RADIO_CLASSES.LABEL, htmlFor: this.id }, this.label)));
    }
    get el() { return index.getElement(this); }
};

exports.chi_radio_button = RadioButton;
