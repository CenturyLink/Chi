import { h } from "@stencil/core";
import { SEMANTIC_COLORS } from "../../constants/color";
export class Progress {
    constructor() {
        /**
         *  to set the max value of a progress bar.
         */
        this.max = 100;
        /**
         *  to indicate a progress bar state { info, warning, danger, success }.
         */
        this.state = 'info';
    }
    stateValidation(newValue) {
        if (newValue && !SEMANTIC_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for progress. If provided, valid values are: info, warning, danger or success. If not, info will be set. `);
        }
    }
    componentWillLoad() {
        this.stateValidation(this.state);
    }
    render() {
        return (h("progress", { key: '21c4b23a8e28e5e54bbb385ed1a95cd3001c84bf', "aria-valuenow": this.value || undefined, "aria-valuemax": this.max || undefined, "aria-valuemin": 0, class: this.state ? `-${this.state}` : '', max: this.max || undefined, role: "progressbar", value: this.value }));
    }
    static get is() { return "chi-progress"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "value": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set the value of a progress bar."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set the max value of a progress bar."
                },
                "getter": false,
                "setter": false,
                "attribute": "max",
                "reflect": true,
                "defaultValue": "100"
            },
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
                    "text": "to indicate a progress bar state { info, warning, danger, success }."
                },
                "getter": false,
                "setter": false,
                "attribute": "state",
                "reflect": true,
                "defaultValue": "'info'"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "state",
                "methodName": "stateValidation"
            }];
    }
}
