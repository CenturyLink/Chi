import { r as registerInstance, h, g as getElement } from './index-cde0ed0d.js';
import { a as addMutationObserver } from './mutationObserver-d6ac3ea2.js';
import { L as LABEL_SIZES } from './size-9d0c9884.js';
import { L as LABEL_CLASSES } from './classes-fca9c660.js';
import { v as v4 } from './v4-4e9fbb64.js';

const labelCss = "chi-label.sc-chi-label-h{display:-ms-flexbox;display:flex}";
const ChiLabelStyle0 = labelCss;

const Label = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.for = undefined;
        this.size = 'md';
        this.required = false;
        this.optional = false;
        this.infoIcon = false;
        this.infoIconMessage = '';
    }
    validateSizeAttribute(newValue) {
        if (newValue && LABEL_SIZES.indexOf(newValue) === -1) {
            throw new Error('Not valid size (' + newValue + '). Valid values are xs, sm, md, lg or xl. ');
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.helpButtonId = `help-button-${v4()}`;
        this.helpPopoverId = `help-popover-${v4()}`;
    }
    toggleHelpPopover() {
        this.el.querySelector(`#${this.helpPopoverId}`).toggle();
    }
    _getInfoIcon() {
        return this.infoIcon ? (h("div", { class: LABEL_CLASSES.HELP }, h("chi-button", { id: this.helpButtonId, onChiClick: () => this.toggleHelpPopover(), type: "icon", size: "xs", variant: "flat", "alternative-text": "Help" }, h("chi-icon", { icon: "circle-info-outline", size: "xs" })), h("chi-popover", { id: this.helpPopoverId, position: "top", variant: "text", arrow: true, reference: `#${this.helpButtonId}` }, this.infoIconMessage))) : ('');
    }
    render() {
        const infoIcon = this._getInfoIcon();
        const required = (h("abbr", { key: '1beca3941adf6ea38ddbf10da8d01a0f5167f6c0', class: LABEL_CLASSES.REQUIRED, "aria-label": "Required field" }, "*"));
        const optional = (h("abbr", { key: '98e07e252b83ff0f7d60a38ef9decaa9416d6ed1', class: LABEL_CLASSES.OPTIONAL, "aria-label": "Optional field" }, "(optional)"));
        let message = '';
        if (!(this.required && this.optional)) {
            if (this.required) {
                message = required;
            }
            else if (this.optional) {
                message = optional;
            }
        }
        return (h("label", { key: 'f7818cb5180bd4154af1d7b60e8efef6bce79b6f', class: `
          ${LABEL_CLASSES.LABEL}
          ${this.size ? `-${this.size}` : ''}
          `, htmlFor: `${this.for}-control` }, h("slot", { key: '1d7321bf7ce31d4626ab7546c46969bb07dfe6ef' }), message, infoIcon));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["validateSizeAttribute"]
    }; }
};
Label.style = ChiLabelStyle0;

export { Label as chi_label };
