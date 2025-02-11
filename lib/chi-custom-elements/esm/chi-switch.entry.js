import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';

const toggleSwitchCss = "chi-switch.sc-chi-switch-h{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}";
const ChiSwitchStyle0 = toggleSwitchCss;

const ToggleSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggle = createEvent(this, "toggle", 7);
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
        return (h("label", { key: '0e1860e054e9f6fc3ca922ccca625193477bda12', htmlFor: `${this.el.id}-control`, class: `chi-switch
              ${this.size ? `-${this.size}` : ''}
              ${this.hideLabel ? '-label--hide' : ''}` }, h("input", { key: '1bac8347f9ad8826afd262ea92c23c55c4c7d908', type: "checkbox", class: `chi-switch__input ${this.extraClass ? this.extraClass : ''}`, id: `${this.el.id}-control`, disabled: this.disabled, checked: this.checked, onClick: () => this._toggle() }), h("span", { key: '2dd4f7b90cd201a7782a8024747184c1167b2749', class: "chi-switch__content" }, h("span", { key: '79f5d95d3a2efa3fb4648292a77ea3739f0ba127', class: "chi-switch__thumb" })), h("span", { key: 'c3240df376c34bc607979ef6d9fc5f1421a5b57c', class: "chi-switch__label" }, this.label)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
ToggleSwitch.style = ChiSwitchStyle0;

export { ToggleSwitch as chi_switch };
