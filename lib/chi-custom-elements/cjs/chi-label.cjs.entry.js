'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5b45aca.js');
const mutationObserver = require('./mutationObserver-53b34fb8.js');
const size = require('./size-19ce557b.js');
const classes = require('./classes-b81f8b66.js');
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
        const required = (index.h("abbr", { key: '615971eb400146df150080fc0416ddf7da6b1a26', class: classes.LABEL_CLASSES.REQUIRED, "aria-label": "Required field" }, "*"));
        const optional = (index.h("abbr", { key: 'd67a944b4b553a5364409c90cc8d139c12b7bf04', class: classes.LABEL_CLASSES.OPTIONAL, "aria-label": "Optional field" }, "(optional)"));
        let message = '';
        if (!(this.required && this.optional)) {
            if (this.required) {
                message = required;
            }
            else if (this.optional) {
                message = optional;
            }
        }
        return (index.h("label", { key: '2db9d4f73085bf6b24092ff8bb65f99c20f17144', class: `
          ${classes.LABEL_CLASSES.LABEL}
          ${this.size ? `-${this.size}` : ''}
          `, htmlFor: `${this.for}-control` }, index.h("slot", { key: '7d9f7890d2a9b9add2d199db9930544ceb98e8f0' }), message, infoIcon));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["validateSizeAttribute"]
    }; }
};
Label.style = ChiLabelStyle0;

exports.chi_label = Label;
