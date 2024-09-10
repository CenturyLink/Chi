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
        return (h("div", { key: '29dcd9a7ce2eaf50ad22f9ba3c59852cf418c51b', class: `${EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? `-disabled` : ''}
        ${this.state === 'active' ? `-active` : ''}
        ${this.state === 'done' ? `-done` : ''}
        ${this.bordered ? EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}` }, h("div", { key: '54b34fcc97c294f83cdfd15d31c4424f3655ec03', class: EPANEL_CLASSES.HEADER }, this.stateIcon && (h("i", { key: '61fcceaeb84bc858c1755bfe465b07a25f46ab66', class: `${ICON_CLASS} ${ICONS.SUCCESS} icon-circle-check ${GENERIC_SIZE_CLASSES.SM_2} ${EPANEL_CLASSES.STATE}`, id: "state-icon-tooltip", "data-tooltip": this.stateIconTooltip })), this.step ? h("span", { class: EPANEL_CLASSES.NUMBER }, this.step, ".") : '', h("div", { key: '473cee4549bed58c28b349cea5119b10e88a75e0', class: EPANEL_CLASSES.TITLE }, this.epanelTitle), h("div", { key: '7314e6de13bc4d2c34e3ea016bea2b740d647a21', class: EPANEL_CLASSES.CONTENT }, h("div", { key: '2fa8b69a301bf532d073f79aa780a3b0d6eef1b1', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: '40d8a565802dc230274f9c9e45bc5b50aacc035d', class: EPANEL_CLASSES.DONE_ONLY }, h("slot", { key: 'a6f6b0e27b8c4617f197941168d1897d48b13154', name: "done" })))), this.state === 'done' || this.state === 'active' ? (h("div", { class: EPANEL_CLASSES.ACTION }, h("slot", { name: "change" }))) : ('')), h("div", { key: 'fdf9e15116f94575a67e3d5bc7b71072f83fe05c', class: EPANEL_CLASSES.COLLAPSE }, h("div", { key: 'd580578f89828a62ea8d069a2424a74e51a70663', class: EPANEL_CLASSES.ACTIVE_ONLY }, h("div", { key: '1e530f9ad63c5eaa18d0091f645d09411923510b', class: EPANEL_CLASSES.BODY }, h("div", { key: 'a6e390c41fbf6aa3f7d7562b0d52511f7c3f8204', class: EPANEL_CLASSES.CONTENT }, h("slot", { key: 'e6be455912e6e33bcc022bfc9d441a24727b9f80', name: "active" })), h("div", { key: 'aacf81dae64a74a3397defc44747b314bb1a166f', class: `${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}` }, h("slot", { key: '9d1584de2cf9d8219dd3f53ddc715f5a4341ef8f', name: "footer" })))))));
    }
    static get is() { return "chi-expansion-panel"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["expansion-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["expansion-panel.css"]
        };
    }
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
