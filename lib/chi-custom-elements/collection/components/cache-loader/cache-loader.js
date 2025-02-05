import { h } from "@stencil/core";
export class CacheLoader {
    constructor() {
        this.type = 'pulse';
        this.muted = false;
        this.noInteraction = false;
    }
    typeValidation(newValue) {
        if (newValue && !['', 'pulse', 'bar'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid cache loader type. Valid values are pulse, bar, and ''. `);
        }
    }
    componentWillLoad() {
        this.typeValidation(this.type);
    }
    render() {
        return (h("div", { key: 'd5200364b30ad8365b59c56b2ebcc92beb4a9996', class: `chi-cache-loader
          ${this.muted ? '-muted' : ''}
          ${this.noInteraction ? '-no-interaction' : ''}
          ${this.type ? `-${this.type}` : ''}` }, h("slot", { key: 'bb36112ccd71b0707ab12f063562c8e926fe668b' })));
    }
    static get is() { return "chi-cache-loader"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "type": {
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
                    "text": "to set type of cache loader { pulse, bar }."
                },
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'pulse'"
            },
            "muted": {
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
                    "text": "to visually de-emphasize by muting colors."
                },
                "attribute": "muted",
                "reflect": true,
                "defaultValue": "false"
            },
            "noInteraction": {
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
                    "text": "to disable user interaction."
                },
                "attribute": "no-interaction",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "typeValidation"
            }];
    }
}
