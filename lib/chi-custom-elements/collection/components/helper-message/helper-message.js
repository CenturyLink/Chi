import { h } from "@stencil/core";
import { STATES } from "../../constants/states";
import { FORM_CLASSES, STATUS_CLASS } from "../../constants/classes";
import { addMutationObserver } from "../../utils/mutationObserver";
export class HelperMessage {
    connectedCallback() {
        addMutationObserver.call(this);
    }
    render() {
        const stateIcon = this.state ? STATES[this.state].icon : null;
        const stateClass = this.state ? STATES[this.state].class : null;
        return (h("div", { key: '05082bea3ccb19c83a037e6c8defb428c72a5e62', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: '5407601997a820b3acbb0ac650b076e7131dafa1', icon: stateIcon }), h("slot", { key: 'dd5938e0f95951140eded4a7a0a72106ae6df23b' })));
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
                "getter": false,
                "setter": false,
                "attribute": "state",
                "reflect": true
            }
        };
    }
    static get elementRef() { return "el"; }
}
