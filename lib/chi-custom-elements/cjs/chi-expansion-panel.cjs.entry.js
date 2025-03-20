'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const classes = require('./classes-ee649937.js');
const constants = require('./constants-cbe8b4bf.js');
const mutationObserver = require('./mutationObserver-4de59f05.js');

const EP_MODES = ['done', 'active', 'pending', 'disabled'];
const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * to set expansion panel state. Possible values are: {'done', 'active', 'pending' (default value), and 'disabled'}
         */
        this.state = 'pending';
        /**
         * to render a state icon within the panel
         */
        this.stateIcon = false;
        /**
         * to render a state tooltip
         */
        this.stateIconTooltip = constants.EPANEL_TOOLTIP_CONTENT;
    }
    stateValidation(newValue) {
        if (newValue && !EP_MODES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for this component. If provided, valid values are 'done', 'active', 'pending' or 'disabled'; if not, 'pending' value will be set. `);
        }
    }
    connectedCallback() {
        mutationObserver.addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.stateValidation(this.state);
    }
    componentDidLoad() {
        this.tooltip = chi.tooltip(document.getElementById('state-icon-tooltip'));
    }
    disconnectedCallback() {
        if (this.tooltip) {
            this.tooltip.dispose();
            this.tooltip = null;
        }
    }
    render() {
        return (index.h("div", { key: '2baa01b9bc220b27ea29364702def05f25beec64', class: `${classes.EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? classes.EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? classes.EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, index.h("div", { key: 'ca84251738ca5cf0583c0448885e0b7abb124f01', class: classes.EPANEL_CLASSES.HEADER }, this.stateIcon && (index.h("i", { key: '387e3f8853f7cdf23c7b0748144d9658e46d6cf4', class: `${classes.ICON_CLASS} ${classes.ICONS.SUCCESS} icon-circle-check ${classes.GENERIC_SIZE_CLASSES.SM_2} ${classes.EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? index.h("span", { class: classes.EPANEL_CLASSES.NUMBER }, this.step, ".") : '', index.h("div", { key: '9d1d9da9f06eb81b60d2d9437b61e84daae571c2', class: classes.EPANEL_CLASSES.TITLE }, this.epanelTitle), index.h("div", { key: '0336963bfccefd282f3efa240619e20461821a17', class: classes.EPANEL_CLASSES.CONTENT }, index.h("div", { key: 'd33f78e234813397cfb579e949f2f97bd7dc50be', class: classes.EPANEL_CLASSES.COLLAPSE }, index.h("div", { key: '1aea448934cbfa758b7aeaac25e5bf9aaa74d70c', class: classes.EPANEL_CLASSES.DONE_ONLY }, index.h("slot", { key: 'ec7c5bac7fbc5034edb92e842199cb2dd69f6102', name: "done" })))), this.state === 'done' || this.state === 'active' ? (index.h("div", { class: classes.EPANEL_CLASSES.ACTION }, index.h("slot", { name: "change" }))) : ('')), index.h("div", { key: 'a10b9b6ab0e32f7260a241bacc682a89b29222b1', class: classes.EPANEL_CLASSES.COLLAPSE }, index.h("div", { key: '822a268116f36a6ca7c6bb8e3faa9519fd4955ed', class: classes.EPANEL_CLASSES.ACTIVE_ONLY }, index.h("div", { key: '5db8f1c677f43ade8de1c613af554924e2e9f53e', class: classes.EPANEL_CLASSES.BODY }, index.h("div", { key: '40953952628890d45f5fbfbc5bb3435b5c5f9a4e', class: classes.EPANEL_CLASSES.CONTENT }, index.h("slot", { key: 'eaa9bf1c52b699f142aa05f77b9a9de066fdcbca', name: "active" })), index.h("div", { key: 'aca7b4378ee6465f51fdb7523133388a52f90b3e', class: `${classes.EPANEL_CLASSES.FOOTER} ${classes.UTILITY_CLASSES.JUSTIFY.END}` }, index.h("slot", { key: '22e43106abb176131f57c3f9c15c0baa7922dd3f', name: "footer" })))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

exports.chi_expansion_panel = ExpansionPanel;
