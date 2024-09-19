import { h } from "@stencil/core";
import { EPANEL_CLASSES, GENERIC_SIZE_CLASSES, ICON_CLASS, ICONS, UTILITY_CLASSES } from "../../constants/classes";
import { EPANEL_TOOLTIP_CONTENT } from "../../constants/constants";
import { addMutationObserver } from "../../utils/mutationObserver";
const EP_MODES = ['done', 'active', 'pending', 'disabled'];
export class ExpansionPanel {
    constructor() {
        this.state = 'pending';
        this.step = undefined;
        this.bordered = undefined;
        this.epanelTitle = undefined;
        this.stateIcon = false;
        this.stateIconTooltip = EPANEL_TOOLTIP_CONTENT;
    }
    el;
    tooltip;
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
        return (h("div", { key: 'cb27c22da18f58a0ff22563c0d9f0c5fd97da804', class: `${EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, h("div", { key: 'aa298b24c5e0a06412ce116a7b20c4082304e35f', class: EPANEL_CLASSES.HEADER }, this.stateIcon && (h("i", { key: '478433365e514a90a29927b705586339413b32db', class: `${ICON_CLASS} ${ICONS.SUCCESS} icon-circle-check ${GENERIC_SIZE_CLASSES.SM_2} ${EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? h("span", { class: EPANEL_CLASSES.NUMBER }, this.step, ".") : '', h("div", { key: '151c0107011b2aa2e999e8f4c917e0dd5cf073f7', class: EPANEL_CLASSES.TITLE }, this.epanelTitle), h("div", { key: 'bfbfb51e320f78b3a49ec258731b349fc5bcaa17', class: EPANEL_CLASSES.CONTENT }, h("div", { key: 'e50d5028875294acd54828e1217d03213148ee58', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '2baac32036f1a588614ed95f904d558694bf9205', class: EPANEL_CLASSES.DONE_ONLY }, h("slot", { key: '8d2e4ea2f88b84f2ff7f5167de8c6de9910eeac3', name: "done" })))), this.state === 'done' || this.state === 'active' ? (h("div", { class: EPANEL_CLASSES.ACTION }, h("slot", { name: "change" }))) : ('')), h("div", { key: '4b388829952fbaf28bacd0eab20332f785dd7281', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '5a4e1c4edeca6c32b01b41ad4e435f8c36356803', class: EPANEL_CLASSES.ACTIVE_ONLY }, h("div", { key: 'a239f4df3bced0be70c1209373c3375d45bd8bfa', class: EPANEL_CLASSES.BODY }, h("div", { key: '4748a91c152b000300e1e1d6d9a46ff5f13d210c', class: EPANEL_CLASSES.CONTENT }, h("slot", { key: '5e4f22df26ce059bd062d8502c8cfd472cecca20', name: "active" })), h("div", { key: 'bae79639b3f9e91fcde117d3b74d048e57fb7055', class: `${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}` }, h("slot", { key: '4f69e76508e3c9cdadbdce7b78e327b0e1f1f45c', name: "footer" })))))));
    }
    static get is() { return "chi-expansion-panel"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set expansion panel state. Possible values are: {'done', 'active', 'pending' (default value), and 'disabled'}"
                },
                "attribute": "state",
                "reflect": true,
                "defaultValue": "'pending'"
            },
            "step": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set a step number next to the title of the panel"
                },
                "attribute": "step",
                "reflect": true
            },
            "bordered": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set the panel style to bordered"
                },
                "attribute": "bordered",
                "reflect": true
            },
            "epanelTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set the title of the panel"
                },
                "attribute": "title",
                "reflect": true
            },
            "stateIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to render a state icon within the panel"
                },
                "attribute": "state-icon",
                "reflect": true,
                "defaultValue": "false"
            },
            "stateIconTooltip": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to render a state tooltip"
                },
                "attribute": "state-icon-tooltip",
                "reflect": true,
                "defaultValue": "EPANEL_TOOLTIP_CONTENT"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "state",
                "methodName": "stateValidation"
            }];
    }
}
