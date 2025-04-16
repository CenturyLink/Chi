'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const mutationObserver = require('./mutationObserver-4de59f05.js');
const size = require('./size-19ce557b.js');
const classes = require('./classes-301d799e.js');
const v4 = require('./v4-daefbed8.js');

const labelCss = "chi-label.sc-chi-label-h{display:-ms-flexbox;display:flex}";
const ChiLabelStyle0 = labelCss;

const Label = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        if (newValue && size.LABEL_SIZES.indexOf(newValue) === -1) {
            throw new Error('Not valid size (' + newValue + '). Valid values are xs, sm, md, lg or xl. ');
        }
    }
    connectedCallback() {
        mutationObserver.addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.helpButtonId = `help-button-${v4.v4()}`;
        this.helpPopoverId = `help-popover-${v4.v4()}`;
    }
    toggleHelpPopover() {
        this.el.querySelector(`#${this.helpPopoverId}`).toggle();
    }
    _getInfoIcon() {
        return this.infoIcon ? (index.h("div", { class: classes.LABEL_CLASSES.HELP }, index.h("chi-button", { id: this.helpButtonId, onChiClick: () => this.toggleHelpPopover(), type: "icon", size: "xs", variant: "flat", "alternative-text": "Help" }, index.h("chi-icon", { icon: "circle-info-outline", size: "xs" })), index.h("chi-popover", { id: this.helpPopoverId, position: "top", variant: "text", arrow: true, reference: `#${this.helpButtonId}` }, this.infoIconMessage))) : ('');
    }
    render() {
        const infoIcon = this._getInfoIcon();
        const required = (index.h("abbr", { key: '6ddb5b1d82b2cd527456d69ea81001254f249f5d', class: classes.LABEL_CLASSES.REQUIRED, "aria-label": "Required field" }, "*"));
        const optional = (index.h("abbr", { key: '1815f0bf62d633371a7b58abdb02e50145a3aa3b', class: classes.LABEL_CLASSES.OPTIONAL, "aria-label": "Optional field" }, "(optional)"));
        let message = '';
        if (!(this.required && this.optional)) {
            if (this.required) {
                message = required;
            }
            else if (this.optional) {
                message = optional;
            }
        }
        return (index.h("label", { key: '79e7a562d6b40deaa7b60880974baf746247f6cc', class: `
          ${classes.LABEL_CLASSES.LABEL}
          ${this.size ? `-${this.size}` : ''}
          `, htmlFor: this.for && `${this.for}-control` }, index.h("slot", { key: '71a81809856c3945cc1e3614cb96e255e7be8154' }), message, infoIcon));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["validateSizeAttribute"]
    }; }
};
Label.style = ChiLabelStyle0;

exports.chi_label = Label;
