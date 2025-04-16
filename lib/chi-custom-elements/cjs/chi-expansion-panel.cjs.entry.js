'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const classes = require('./classes-301d799e.js');
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
        return (index.h("div", { key: 'fe1d7130682c3ca617ac3d20f2692d7e3b580a8d', class: `${classes.EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? classes.EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? classes.EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, index.h("div", { key: 'f397c52a355cb5509860e935720f240d7b38a29b', class: classes.EPANEL_CLASSES.HEADER }, this.stateIcon && (index.h("i", { key: 'ade3f5ea318c063a41a2927a8abca2abeca2513e', class: `${classes.ICON_CLASS} ${classes.ICONS.SUCCESS} icon-circle-check ${classes.GENERIC_SIZE_CLASSES.SM_2} ${classes.EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? index.h("span", { class: classes.EPANEL_CLASSES.NUMBER }, this.step, ".") : '', index.h("div", { key: '3bbba84c9ea1a678fc182f8079520d047ab5f82b', class: classes.EPANEL_CLASSES.TITLE }, this.epanelTitle), index.h("div", { key: '242e9769dc0e48e46ed62de5f9ac52d086998520', class: classes.EPANEL_CLASSES.CONTENT }, index.h("div", { key: '4fce4bed9354218e8e96a08ae9a079a42f7e39ba', class: classes.EPANEL_CLASSES.COLLAPSE }, index.h("div", { key: '1aae88e6136812c11241a0c40de8133a1c997dec', class: classes.EPANEL_CLASSES.DONE_ONLY }, index.h("slot", { key: 'e38e974bc8b44f02b1f01a8cc4ff46364c8b4fb3', name: "done" })))), this.state === 'done' || this.state === 'active' ? (index.h("div", { class: classes.EPANEL_CLASSES.ACTION }, index.h("slot", { name: "change" }))) : ('')), index.h("div", { key: '0f2111339633c6453bab4e21f51d928c40eddcee', class: classes.EPANEL_CLASSES.COLLAPSE }, index.h("div", { key: '8cf40aa233172265766333f9671fa56ad442b6a5', class: classes.EPANEL_CLASSES.ACTIVE_ONLY }, index.h("div", { key: '5c0f22fa4a3c9e50dadcacba2956879a6f99cb59', class: classes.EPANEL_CLASSES.BODY }, index.h("div", { key: '107b3ddcdb9e60cc90532fd32111a432b360b5a9', class: classes.EPANEL_CLASSES.CONTENT }, index.h("slot", { key: '4819212103f1de9992d0bfdf1fc12d7d9eb25951', name: "active" })), index.h("div", { key: 'bde48dea2fefaa9ceb4423ff9439040997784435', class: `${classes.EPANEL_CLASSES.FOOTER} ${classes.UTILITY_CLASSES.JUSTIFY.END}` }, index.h("slot", { key: 'd5ae31121baa6c015db8b674aa167ff65ba9c2b4', name: "footer" })))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

exports.chi_expansion_panel = ExpansionPanel;
