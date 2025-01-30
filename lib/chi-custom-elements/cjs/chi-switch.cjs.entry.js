'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');

const toggleSwitchCss = "chi-switch.sc-chi-switch-h{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}";
const ChiSwitchStyle0 = toggleSwitchCss;

const ToggleSwitch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toggle = index.createEvent(this, "toggle", 7);
        this.label = undefined;
        this.hideLabel = false;
        this.disabled = false;
        this.checked = false;
        this.size = undefined;
        this.extraClass = undefined;
    }
    _toggle() {
        this.checked = !this.checked;
        this.toggle.emit(this.checked);
    }
    sizeValidation(newValue) {
        if (newValue && !['', 'sm', 'xs'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for toggle switch. Valid values are xs, sm or ''. `);
        }
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
    }
    render() {
        return (index.h("label", { key: '21a9972a5cbcf9b82aaf9e4bab5b0a6fd65c2344', htmlFor: `${this.el.id}-control`, class: `chi-switch
              ${this.size ? `-${this.size}` : ''}
              ${this.hideLabel ? '-label--hide' : ''}` }, index.h("input", { key: '89685dd52b36fa58c7a0fcfc4d9191a462c92d60', type: "checkbox", class: `chi-switch__input ${this.extraClass ? this.extraClass : ''}`, id: `${this.el.id}-control`, disabled: this.disabled, checked: this.checked, onClick: () => this._toggle() }), index.h("span", { key: '6bfe109a5e6777bc3f9f3efaaab33e184d78fb19', class: "chi-switch__content" }, index.h("span", { key: '5ac83fdb644c362596575eec3bc7a5934e216ef9', class: "chi-switch__thumb" })), index.h("span", { key: '89b89c6ae0e6cee984147259fa95fc87059df597', class: "chi-switch__label" }, this.label)));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
ToggleSwitch.style = ChiSwitchStyle0;

exports.chi_switch = ToggleSwitch;
