import { r as registerInstance, h, g as getElement } from './index-422a57bb.js';
import { g as EPANEL_CLASSES, U as UTILITY_CLASSES, I as ICON_CLASS, h as ICONS, G as GENERIC_SIZE_CLASSES } from './classes-26189a5f.js';
import { d as EPANEL_TOOLTIP_CONTENT } from './constants-e61c7d0c.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';

const EP_MODES = ['done', 'active', 'pending', 'disabled'];
const ExpansionPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.stateIconTooltip = EPANEL_TOOLTIP_CONTENT;
    }
    stateValidation(newValue) {
        if (newValue && !EP_MODES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for this component. If provided, valid values are 'done', 'active', 'pending' or 'disabled'; if not, 'pending' value will be set. `);
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
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
        return (h("div", { key: '2baa01b9bc220b27ea29364702def05f25beec64', class: `${EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, h("div", { key: 'ca84251738ca5cf0583c0448885e0b7abb124f01', class: EPANEL_CLASSES.HEADER }, this.stateIcon && (h("i", { key: '387e3f8853f7cdf23c7b0748144d9658e46d6cf4', class: `${ICON_CLASS} ${ICONS.SUCCESS} icon-circle-check ${GENERIC_SIZE_CLASSES.SM_2} ${EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? h("span", { class: EPANEL_CLASSES.NUMBER }, this.step, ".") : '', h("div", { key: '9d1d9da9f06eb81b60d2d9437b61e84daae571c2', class: EPANEL_CLASSES.TITLE }, this.epanelTitle), h("div", { key: '0336963bfccefd282f3efa240619e20461821a17', class: EPANEL_CLASSES.CONTENT }, h("div", { key: 'd33f78e234813397cfb579e949f2f97bd7dc50be', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '1aea448934cbfa758b7aeaac25e5bf9aaa74d70c', class: EPANEL_CLASSES.DONE_ONLY }, h("slot", { key: 'ec7c5bac7fbc5034edb92e842199cb2dd69f6102', name: "done" })))), this.state === 'done' || this.state === 'active' ? (h("div", { class: EPANEL_CLASSES.ACTION }, h("slot", { name: "change" }))) : ('')), h("div", { key: 'a10b9b6ab0e32f7260a241bacc682a89b29222b1', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '822a268116f36a6ca7c6bb8e3faa9519fd4955ed', class: EPANEL_CLASSES.ACTIVE_ONLY }, h("div", { key: '5db8f1c677f43ade8de1c613af554924e2e9f53e', class: EPANEL_CLASSES.BODY }, h("div", { key: '40953952628890d45f5fbfbc5bb3435b5c5f9a4e', class: EPANEL_CLASSES.CONTENT }, h("slot", { key: 'eaa9bf1c52b699f142aa05f77b9a9de066fdcbca', name: "active" })), h("div", { key: 'aca7b4378ee6465f51fdb7523133388a52f90b3e', class: `${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}` }, h("slot", { key: '22e43106abb176131f57c3f9c15c0baa7922dd3f', name: "footer" })))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

export { ExpansionPanel as chi_expansion_panel };
