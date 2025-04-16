import { h } from "@stencil/core";
import { EPANEL_CLASSES, GENERIC_SIZE_CLASSES, ICON_CLASS, ICONS, UTILITY_CLASSES } from "../../constants/classes";
import { EPANEL_TOOLTIP_CONTENT } from "../../constants/constants";
import { addMutationObserver } from "../../utils/mutationObserver";
const EP_MODES = ['done', 'active', 'pending', 'disabled'];
export class ExpansionPanel {
    constructor() {
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
        return (h("div", { key: 'fe1d7130682c3ca617ac3d20f2692d7e3b580a8d', class: `${EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, h("div", { key: 'f397c52a355cb5509860e935720f240d7b38a29b', class: EPANEL_CLASSES.HEADER }, this.stateIcon && (h("i", { key: 'ade3f5ea318c063a41a2927a8abca2abeca2513e', class: `${ICON_CLASS} ${ICONS.SUCCESS} icon-circle-check ${GENERIC_SIZE_CLASSES.SM_2} ${EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? h("span", { class: EPANEL_CLASSES.NUMBER }, this.step, ".") : '', h("div", { key: '3bbba84c9ea1a678fc182f8079520d047ab5f82b', class: EPANEL_CLASSES.TITLE }, this.epanelTitle), h("div", { key: '242e9769dc0e48e46ed62de5f9ac52d086998520', class: EPANEL_CLASSES.CONTENT }, h("div", { key: '4fce4bed9354218e8e96a08ae9a079a42f7e39ba', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '1aae88e6136812c11241a0c40de8133a1c997dec', class: EPANEL_CLASSES.DONE_ONLY }, h("slot", { key: 'e38e974bc8b44f02b1f01a8cc4ff46364c8b4fb3', name: "done" })))), this.state === 'done' || this.state === 'active' ? (h("div", { class: EPANEL_CLASSES.ACTION }, h("slot", { name: "change" }))) : ('')), h("div", { key: '0f2111339633c6453bab4e21f51d928c40eddcee', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '8cf40aa233172265766333f9671fa56ad442b6a5', class: EPANEL_CLASSES.ACTIVE_ONLY }, h("div", { key: '5c0f22fa4a3c9e50dadcacba2956879a6f99cb59', class: EPANEL_CLASSES.BODY }, h("div", { key: '107b3ddcdb9e60cc90532fd32111a432b360b5a9', class: EPANEL_CLASSES.CONTENT }, h("slot", { key: '4819212103f1de9992d0bfdf1fc12d7d9eb25951', name: "active" })), h("div", { key: 'bde48dea2fefaa9ceb4423ff9439040997784435', class: `${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}` }, h("slot", { key: 'd5ae31121baa6c015db8b674aa167ff65ba9c2b4', name: "footer" })))))));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
