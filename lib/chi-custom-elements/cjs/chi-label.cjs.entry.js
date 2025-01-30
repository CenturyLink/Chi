'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');
const mutationObserver = require('./mutationObserver-7cc6af59.js');
const size = require('./size-19ce557b.js');
const classes = require('./classes-2a12a2f5.js');
const v4 = require('./v4-d3836773.js');

const labelCss = "chi-label.sc-chi-label-h{display:-ms-flexbox;display:flex}";
const ChiLabelStyle0 = labelCss;

const Label = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.for = undefined;
        this.size = 'md';
        this.required = false;
        this.optional = false;
        this.infoIcon = false;
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
        const required = (index.h("abbr", { key: '1beca3941adf6ea38ddbf10da8d01a0f5167f6c0', class: classes.LABEL_CLASSES.REQUIRED, "aria-label": "Required field" }, "*"));
        const optional = (index.h("abbr", { key: '98e07e252b83ff0f7d60a38ef9decaa9416d6ed1', class: classes.LABEL_CLASSES.OPTIONAL, "aria-label": "Optional field" }, "(optional)"));
        let message = '';
        if (!(this.required && this.optional)) {
            if (this.required) {
                message = required;
            }
            else if (this.optional) {
                message = optional;
            }
        }
        return (index.h("label", { key: 'f7818cb5180bd4154af1d7b60e8efef6bce79b6f', class: `
          ${classes.LABEL_CLASSES.LABEL}
          ${this.size ? `-${this.size}` : ''}
          `, htmlFor: `${this.for}-control` }, index.h("slot", { key: '1d7321bf7ce31d4626ab7546c46969bb07dfe6ef' }), message, infoIcon));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["validateSizeAttribute"]
    }; }
};
Label.style = ChiLabelStyle0;

exports.chi_label = Label;
