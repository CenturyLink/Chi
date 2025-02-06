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
        return (h("div", { key: '424cf74baaf88f475575770a408d7f45aaf6008f', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: 'eb22a7fa61de6596813c9be3d74da7313bf59570', icon: stateIcon }), h("slot", { key: '75d13f5dba221fa9f0cc0e59cc73893a2a4607db' })));
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
