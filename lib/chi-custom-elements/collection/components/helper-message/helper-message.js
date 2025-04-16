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
        return (h("div", { key: '7ad60db424e3a5be097a44aef866fdaa1bebb3f4', class: `${FORM_CLASSES.LABEL} ${STATUS_CLASS} ${stateClass}` }, stateIcon && h("chi-icon", { key: '6ef754095d356d606b6f9945174e669478286416', icon: stateIcon }), h("slot", { key: 'd343f485e98d3ff4efbc2229aa70a15ba72257be' })));
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
