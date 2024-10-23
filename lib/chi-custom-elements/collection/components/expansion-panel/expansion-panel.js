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
        return (h("div", { key: 'b509c5f01cb4779c6aee698041fa10454a0e5625', class: `${EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? '-disabled' : ''}
        ${this.state === 'active' ? '-active' : ''}
        ${this.state === 'done' ? '-done' : ''}
        ${this.bordered ? EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, h("div", { key: 'b6ff1db0c3f976717debf9aaa4b532925ef9802f', class: EPANEL_CLASSES.HEADER }, this.stateIcon && (h("i", { key: '76583445edad26a239da40730069aea79c75167d', class: `${ICON_CLASS} ${ICONS.SUCCESS} icon-circle-check ${GENERIC_SIZE_CLASSES.SM_2} ${EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? h("span", { class: EPANEL_CLASSES.NUMBER }, this.step, ".") : '', h("div", { key: '124e4367b3e867ce09295e6b39231c4a122fcf81', class: EPANEL_CLASSES.TITLE }, this.epanelTitle), h("div", { key: '789b02f76e797a4fa5c61176aeebd0c345e915c3', class: EPANEL_CLASSES.CONTENT }, h("div", { key: '07179c12caa0eb6c507a62a46ea51c4d5386095c', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '06eb0d00b8006ee0efd3043332c82ebe7d11f997', class: EPANEL_CLASSES.DONE_ONLY }, h("slot", { key: 'f38851152acd3cb13ed8ab01da69bd0a63688c53', name: "done" })))), this.state === 'done' || this.state === 'active' ? (h("div", { class: EPANEL_CLASSES.ACTION }, h("slot", { name: "change" }))) : ('')), h("div", { key: 'ba0e4cd41941e894b6c3d297cd6a65f2b6a3d22b', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '854bf6c6e7caa031fbbb72c778f595c37277f3f8', class: EPANEL_CLASSES.ACTIVE_ONLY }, h("div", { key: '86d2edd43fe70ec2625f9468d8467b90559a6ce5', class: EPANEL_CLASSES.BODY }, h("div", { key: 'f84a5cb5ecf6291ef9cf7abf57769b50bbe09004', class: EPANEL_CLASSES.CONTENT }, h("slot", { key: '0be3a13ff0b9ce90e25329219d999735cadda62d', name: "active" })), h("div", { key: 'cbc61136ad273b69a2e491b7ac8580354d7c1702', class: `${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}` }, h("slot", { key: 'b76783ce7c0aad42edf16ead7581d6be951df905', name: "footer" })))))));
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
