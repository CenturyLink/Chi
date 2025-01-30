'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');
const classes = require('./classes-2a12a2f5.js');
const constants = require('./constants-be8ca4ba.js');
const mutationObserver = require('./mutationObserver-7cc6af59.js');

const EP_MODES = ['done', 'active', 'pending', 'disabled'];
const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.state = 'pending';
        this.step = undefined;
        this.bordered = undefined;
        this.epanelTitle = undefined;
        this.stateIcon = false;
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
        return (index.h("div", { key: 'cb27c22da18f58a0ff22563c0d9f0c5fd97da804', class: `${classes.EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? classes.EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? classes.EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, index.h("div", { key: 'aa298b24c5e0a06412ce116a7b20c4082304e35f', class: classes.EPANEL_CLASSES.HEADER }, this.stateIcon && (index.h("i", { key: '478433365e514a90a29927b705586339413b32db', class: `${classes.ICON_CLASS} ${classes.ICONS.SUCCESS} icon-circle-check ${classes.GENERIC_SIZE_CLASSES.SM_2} ${classes.EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? index.h("span", { class: classes.EPANEL_CLASSES.NUMBER }, this.step, ".") : '', index.h("div", { key: '151c0107011b2aa2e999e8f4c917e0dd5cf073f7', class: classes.EPANEL_CLASSES.TITLE }, this.epanelTitle), index.h("div", { key: 'bfbfb51e320f78b3a49ec258731b349fc5bcaa17', class: classes.EPANEL_CLASSES.CONTENT }, index.h("div", { key: 'e50d5028875294acd54828e1217d03213148ee58', class: classes.EPANEL_CLASSES.COLLAPSE }, index.h("div", { key: '2baac32036f1a588614ed95f904d558694bf9205', class: classes.EPANEL_CLASSES.DONE_ONLY }, index.h("slot", { key: '8d2e4ea2f88b84f2ff7f5167de8c6de9910eeac3', name: "done" })))), this.state === 'done' || this.state === 'active' ? (index.h("div", { class: classes.EPANEL_CLASSES.ACTION }, index.h("slot", { name: "change" }))) : ('')), index.h("div", { key: '4b388829952fbaf28bacd0eab20332f785dd7281', class: classes.EPANEL_CLASSES.COLLAPSE }, index.h("div", { key: '5a4e1c4edeca6c32b01b41ad4e435f8c36356803', class: classes.EPANEL_CLASSES.ACTIVE_ONLY }, index.h("div", { key: 'a239f4df3bced0be70c1209373c3375d45bd8bfa', class: classes.EPANEL_CLASSES.BODY }, index.h("div", { key: '4748a91c152b000300e1e1d6d9a46ff5f13d210c', class: classes.EPANEL_CLASSES.CONTENT }, index.h("slot", { key: '5e4f22df26ce059bd062d8502c8cfd472cecca20', name: "active" })), index.h("div", { key: 'bae79639b3f9e91fcde117d3b74d048e57fb7055', class: `${classes.EPANEL_CLASSES.FOOTER} ${classes.UTILITY_CLASSES.JUSTIFY.END}` }, index.h("slot", { key: '4f69e76508e3c9cdadbdce7b78e327b0e1f1f45c', name: "footer" })))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

exports.chi_expansion_panel = ExpansionPanel;
