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
        return (h("label", { key: 'ca3920311617baba68dc2d6ebb493597b4504afe', htmlFor: `${this.el.id}-control`, class: `chi-switch
              ${this.size ? `-${this.size}` : ''}
              ${this.hideLabel ? '-label--hide' : ''}` }, h("input", { key: '4d6552f624ae32c778420ccdde51a24ae745df10', type: "checkbox", class: `chi-switch__input ${this.extraClass ? this.extraClass : ''}`, id: `${this.el.id}-control`, disabled: this.disabled, checked: this.checked, onClick: () => this._toggle() }), h("span", { key: '643a3221e48f60821c6d3fef25054f2f6d62f05c', class: "chi-switch__content" }, h("span", { key: '768d1827bc9f6f27c4e0acb616ff1d54609d4774', class: "chi-switch__thumb" })), h("span", { key: '8bbcef2e87a279fadf401f6caf3b276136715a2f', class: "chi-switch__label" }, this.label)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};
ToggleSwitch.style = ChiSwitchStyle0;

export { ToggleSwitch as chi_switch };
