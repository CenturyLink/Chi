import { r as registerInstance, h, g as getElement } from './index-422a57bb.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';
import { L as LABEL_SIZES } from './size-9d0c9884.js';
import { W as LABEL_CLASSES } from './classes-5181b913.js';
import { v as v4 } from './v4-a4ec28c0.js';

const labelCss = "chi-label.sc-chi-label-h{display:-ms-flexbox;display:flex}";
const ChiLabelStyle0 = labelCss;

const Label = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * OPTIONAL. Size of the label. { xs, sm, md, lg, xl }.
         */
        this.size = 'md';
        /**
         * To indicate which form field is required.
         */
        this.required = false;
        /**
         * To indicate which form field is optional.
         */
        this.optional = false;
        /**
         * To indicate if info icon should be displayed.
         */
        this.infoIcon = false;
        /**
         * To provide message for info icon popover.
         */
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
        const required = (h("abbr", { key: '490130e769458f6f024176200eddede0d32c3f99', class: LABEL_CLASSES.REQUIRED, "aria-label": "Required field" }, "*"));
        const optional = (h("abbr", { key: '7b3c89e62d616205063d53311a31094e4e6ecdba', class: LABEL_CLASSES.OPTIONAL, "aria-label": "Optional field" }, "(optional)"));
        let message = '';
        if (!(this.required && this.optional)) {
            if (this.required) {
                message = required;
            }
            else if (this.optional) {
                message = optional;
            }
        }
        return (h("label", { key: '04f76232cce3a9f494e3c76ae5738898df51f952', class: `
          ${LABEL_CLASSES.LABEL}
          ${this.size ? `-${this.size}` : ''}
          `, htmlFor: this.for && `${this.for}-control` }, h("slot", { key: 'd6386f2a0559b4f2b0df5b4d2679d158c627091d' }), message, infoIcon));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["validateSizeAttribute"]
    }; }
};
Label.style = ChiLabelStyle0;

export { Label as chi_label };
