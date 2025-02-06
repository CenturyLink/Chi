import { r as registerInstance, h, g as getElement } from './index-93bc7bbf.js';
import { e as EPANEL_CLASSES, U as UTILITY_CLASSES, I as ICON_CLASS, f as ICONS, G as GENERIC_SIZE_CLASSES } from './classes-6227bd8c.js';
import { d as EPANEL_TOOLTIP_CONTENT } from './constants-0e68989c.js';
import { a as addMutationObserver } from './mutationObserver-b386bd11.js';

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
        return (h("div", { key: 'a129728d006e2eaa931ab50b0569a2c3efb9be54', class: `${EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, h("div", { key: 'a0008b55f0ec376e8961f08ebe6e3a36e087da48', class: EPANEL_CLASSES.HEADER }, this.stateIcon && (h("i", { key: 'b5e771c34bd07bbcb0884bd12faad87f9403249d', class: `${ICON_CLASS} ${ICONS.SUCCESS} icon-circle-check ${GENERIC_SIZE_CLASSES.SM_2} ${EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? h("span", { class: EPANEL_CLASSES.NUMBER }, this.step, ".") : '', h("div", { key: '42d6447ae8886f03db8921888e2e33014b7711ee', class: EPANEL_CLASSES.TITLE }, this.epanelTitle), h("div", { key: 'b9f810800baff84a162d156aa280584bce671703', class: EPANEL_CLASSES.CONTENT }, h("div", { key: '1a36e099b096d82b75dc508100949d1c8aa66d44', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: 'bda88e7fac6253111ef69f92cb023b8f20e96abb', class: EPANEL_CLASSES.DONE_ONLY }, h("slot", { key: '10b9bd96df8e4f440c06399eb49ec2874fb4c253', name: "done" })))), this.state === 'done' || this.state === 'active' ? (h("div", { class: EPANEL_CLASSES.ACTION }, h("slot", { name: "change" }))) : ('')), h("div", { key: '3c291d88065e615736092b522fda8166872807a7', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '98dc8a3387fb10cec517f9923ef431363df9a187', class: EPANEL_CLASSES.ACTIVE_ONLY }, h("div", { key: 'ee28c7e650094af9bcdbc5b6e2afd4bcda48887d', class: EPANEL_CLASSES.BODY }, h("div", { key: '65d94522426faabd4a8e830e547c1680bf78f68f', class: EPANEL_CLASSES.CONTENT }, h("slot", { key: '0d8c13c31a10a535ab25359eca09de527e1cd1ab', name: "active" })), h("div", { key: 'cdba110bdee6ca3cab9d442932d536b42831c844', class: `${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}` }, h("slot", { key: 'b4b8a581b8aaa9cb524336d2627c26d1c672971f', name: "footer" })))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

export { ExpansionPanel as chi_expansion_panel };
