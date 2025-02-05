'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5b45aca.js');
const classes = require('./classes-b81f8b66.js');
const mutationObserver = require('./mutationObserver-53b34fb8.js');
const v4 = require('./v4-de9aacdf.js');

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
        return (index.h("div", { key: '7877647f9e16f4dfbe0a818bdf4839afa9e4f55b', class: classes.RADIO_CLASSES.RADIO }, index.h("input", { key: '5261d24d99bcd82c601e4adb4e9309cc15523fd8', class: `
            ${classes.RADIO_CLASSES.INPUT}
            ${stateClass}
          `, id: this.id, checked: this.checked, disabled: this.disabled, name: this.name, "aria-checked": this.checked, "aria-labelledby": this.labelId, onBlur: () => this.blur(), onChange: (ev) => this.change(ev), onFocus: () => this.focus(), type: "radio" }), index.h("label", { key: '92ad7f2d960928c0d900f1c58acde76a6552c1ac', id: this.labelId, class: classes.RADIO_CLASSES.LABEL, htmlFor: this.id }, this.label)));
    }
    get el() { return index.getElement(this); }
};

exports.chi_radio_button = RadioButton;
