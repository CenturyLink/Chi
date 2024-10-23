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
        return (h("div", { key: 'dacfbd306eb97bec4320fccd5c9c6ec0b0093f93', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: '4a18df41f653806cb9623d7ee9ac7080f44fab78', icon: stateIcon }), h("slot", { key: '56c37396e4b4bd049d48a7be2876003e9fc7a103' })));
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
