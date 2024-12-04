import { h } from "@stencil/core";
import { STATES } from "../../constants/states";
import { FORM_CLASSES, STATUS_CLASS } from "../../constants/classes";
import { addMutationObserver } from "../../utils/mutationObserver";
export class HelperMessage {
    constructor() {
        this.state = undefined;
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    render() {
        const stateIcon = this.state ? STATES[this.state].icon : null;
        const stateClass = this.state ? STATES[this.state].class : null;
        return (h("div", { key: '4f97ffb91716d87e9579c7d2bf34526f3687ab7c', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: '04987918ca3c9e2155391ce7de3adc23581ad218', icon: stateIcon }), h("slot", { key: '145fc9738feadfbc66ed1955df3d86f957a91263' })));
    }
    static get is() { return "chi-helper-message"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["helper-message.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["helper-message.css"]
        };
    }
    static get properties() {
        return {
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChiStates",
                    "resolved": "\"danger\" | \"success\" | \"warning\"",
                    "references": {
                        "ChiStates": {
                            "location": "import",
                            "path": "../../constants/states",
                            "id": "src/constants/states.ts::ChiStates"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To define state color of message text"
                },
                "attribute": "state",
                "reflect": true
            }
        };
    }
    static get elementRef() { return "el"; }
}
