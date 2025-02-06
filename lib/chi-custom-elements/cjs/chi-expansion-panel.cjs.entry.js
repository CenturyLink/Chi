'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5b45aca.js');
const classes = require('./classes-b81f8b66.js');
const constants = require('./constants-8a881329.js');
const mutationObserver = require('./mutationObserver-53b34fb8.js');

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
        return (index.h("div", { key: 'a129728d006e2eaa931ab50b0569a2c3efb9be54', class: `${classes.EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? classes.EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? classes.EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, index.h("div", { key: 'a0008b55f0ec376e8961f08ebe6e3a36e087da48', class: classes.EPANEL_CLASSES.HEADER }, this.stateIcon && (index.h("i", { key: 'b5e771c34bd07bbcb0884bd12faad87f9403249d', class: `${classes.ICON_CLASS} ${classes.ICONS.SUCCESS} icon-circle-check ${classes.GENERIC_SIZE_CLASSES.SM_2} ${classes.EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? index.h("span", { class: classes.EPANEL_CLASSES.NUMBER }, this.step, ".") : '', index.h("div", { key: '42d6447ae8886f03db8921888e2e33014b7711ee', class: classes.EPANEL_CLASSES.TITLE }, this.epanelTitle), index.h("div", { key: 'b9f810800baff84a162d156aa280584bce671703', class: classes.EPANEL_CLASSES.CONTENT }, index.h("div", { key: '1a36e099b096d82b75dc508100949d1c8aa66d44', class: classes.EPANEL_CLASSES.COLLAPSE }, index.h("div", { key: 'bda88e7fac6253111ef69f92cb023b8f20e96abb', class: classes.EPANEL_CLASSES.DONE_ONLY }, index.h("slot", { key: '10b9bd96df8e4f440c06399eb49ec2874fb4c253', name: "done" })))), this.state === 'done' || this.state === 'active' ? (index.h("div", { class: classes.EPANEL_CLASSES.ACTION }, index.h("slot", { name: "change" }))) : ('')), index.h("div", { key: '3c291d88065e615736092b522fda8166872807a7', class: classes.EPANEL_CLASSES.COLLAPSE }, index.h("div", { key: '98dc8a3387fb10cec517f9923ef431363df9a187', class: classes.EPANEL_CLASSES.ACTIVE_ONLY }, index.h("div", { key: 'ee28c7e650094af9bcdbc5b6e2afd4bcda48887d', class: classes.EPANEL_CLASSES.BODY }, index.h("div", { key: '65d94522426faabd4a8e830e547c1680bf78f68f', class: classes.EPANEL_CLASSES.CONTENT }, index.h("slot", { key: '0d8c13c31a10a535ab25359eca09de527e1cd1ab', name: "active" })), index.h("div", { key: 'cdba110bdee6ca3cab9d442932d536b42831c844', class: `${classes.EPANEL_CLASSES.FOOTER} ${classes.UTILITY_CLASSES.JUSTIFY.END}` }, index.h("slot", { key: 'b4b8a581b8aaa9cb524336d2627c26d1c672971f', name: "footer" })))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

exports.chi_expansion_panel = ExpansionPanel;
