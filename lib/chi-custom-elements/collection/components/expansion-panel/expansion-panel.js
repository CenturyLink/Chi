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
        return (h("div", { key: 'e21905b811f1779913fd9f9b9512b69b5dfde225', class: `${EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, h("div", { key: '86edc1668ccd524b15a84db684ba6eef0349a6ca', class: EPANEL_CLASSES.HEADER }, this.stateIcon && (h("i", { key: '01ec42d57cf749077d32200edabbbbc4dc4edbf8', class: `${ICON_CLASS} ${ICONS.SUCCESS} icon-circle-check ${GENERIC_SIZE_CLASSES.SM_2} ${EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? h("span", { class: EPANEL_CLASSES.NUMBER }, this.step, ".") : '', h("div", { key: 'add6831a26b4069c68fd543dd38cc742342fa824', class: EPANEL_CLASSES.TITLE }, this.epanelTitle), h("div", { key: 'f1956bfec6a5fa4de58a81d50ae389f554a2f22f', class: EPANEL_CLASSES.CONTENT }, h("div", { key: '4e55a61bf61d407a529f466f354aefed40da0754', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '37d3b9fe90f6a9a21b6c14cf5e6494f1f3dff292', class: EPANEL_CLASSES.DONE_ONLY }, h("slot", { key: '60655dd3fc8281f16e6f88dcb5370cac9cc7e239', name: "done" })))), this.state === 'done' || this.state === 'active' ? (h("div", { class: EPANEL_CLASSES.ACTION }, h("slot", { name: "change" }))) : ('')), h("div", { key: '9c892009095a308729ac4ef6623f6988fd99a2a4', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: 'e5efaec4e047e8fb792bebb3d9cca632b518aeb4', class: EPANEL_CLASSES.ACTIVE_ONLY }, h("div", { key: '92d62c720a878aab8dd468b37c56f6460ab7f4c1', class: EPANEL_CLASSES.BODY }, h("div", { key: '52c0ee26fda2b14a17632337917bc490f1e84484', class: EPANEL_CLASSES.CONTENT }, h("slot", { key: 'a51364648542137daa0a9c6f40fd35c65ef49a6e', name: "active" })), h("div", { key: 'b8fd8559c96dc656332765a39214ab125061e762', class: `${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}` }, h("slot", { key: 'ca131198fa8a50a0e7e29202a3bdb3fb3a3b600c', name: "footer" })))))));
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
