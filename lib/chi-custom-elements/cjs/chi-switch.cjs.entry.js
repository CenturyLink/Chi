'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');

const toggleSwitchCss = "chi-switch.sc-chi-switch-h{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}";
const ChiSwitchStyle0 = toggleSwitchCss;

const ToggleSwitch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toggle = index.createEvent(this, "toggle", 7);
        /**
         *  used to disable the toggle labels.
         */
        this.hideLabel = false;
        /**
         *  used to disable the toggle switch.
         */
        this.disabled = false;
        /**
         *  used to check the toggle switch.
         */
        this.checked = false;
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
        return (index.h("label", { key: '0711fcdac7ca17dde1960b197ec996fdbc176681', htmlFor: `${this.el.id}-control`, class: `chi-switch
              ${this.size ? `-${this.size}` : ''}
              ${this.hideLabel ? '-label--hide' : ''}` }, index.h("input", { key: '3323cad167f430c0a7c3cc9035e41d269cd83514', type: "checkbox", class: `chi-switch__input ${this.extraClass ? this.extraClass : ''}`, id: `${this.el.id}-control`, disabled: this.disabled, checked: this.checked, onClick: () => this._toggle() }), index.h("span", { key: 'ff6e778233a5bc0c5ad012741ac23733d4b066e2', class: "chi-switch__content" }, index.h("span", { key: '71644953d5b298d639d9dce4a95738cf8eec14c6', class: "chi-switch__thumb" })), index.h("span", { key: 'f4deca0323b68a3cf1df1a4464a33834aa3051ef', class: "chi-switch__label" }, this.label)));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
ToggleSwitch.style = ChiSwitchStyle0;

exports.chi_switch = ToggleSwitch;
