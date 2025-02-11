import { h } from "@stencil/core";
import { ICON_SIZES } from "../../constants/size";
const SPINNER_COLORS = ['primary', 'dark', 'success', 'warning', 'danger', 'muted', 'secondary', 'light'];
export class Spinner {
    constructor() {
        /**
         *  to set size of a spinner { xs, sm, sm--2, sm--3, md, lg, xl, xxl }.
         */
        this.size = 'sm';
    }
    sizeValidation(newValue) {
        if (newValue && !ICON_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for spinner. If provided, valid values are: xs, sm, sm--2, sm--3, md, lg, xl or xxl. `);
        }
    }
    colorValidation(newValue) {
        if (newValue && !SPINNER_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for spinner. If provided, valid values are: primary, dark, success, warning, danger, muted, secondary or light. `);
        }
    }
    backdropValidation(newValue) {
        if (newValue && !['', 'inverse', 'backdrop', 'true'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid backdrop for spinner. If provided, valid values are: inverse, backdrop or true. `);
        }
    }
    componentWillLoad() {
        this.colorValidation(this.color);
        this.sizeValidation(this.size);
        this.backdropValidation(this.backdrop);
    }
    render() {
        const spinner = (h("svg", { class: `chi-spinner
        ${this.color ? `-icon--${this.color}` : ''}
        ${this.size ? `-${this.size}` : ''}`, viewBox: "0 0 66 66" }, h("title", null, "Loading"), h("circle", { class: "path", cx: "33", cy: "33", r: "30", fill: "none", "stroke-width": "6" })));
        if (this.backdrop || this.backdrop === '') {
            return (h("div", { class: `chi-backdrop -center ${this.backdrop === 'inverse' && '-inverse'}` }, h("div", { class: "chi-backdrop__wrapper" }, spinner)));
        }
        else {
            return spinner;
        }
    }
    static get is() { return "chi-spinner"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["spinner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["spinner.css"]
        };
    }
    static get properties() {
        return {
            "size": {
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
                    "text": "to set size of a spinner { xs, sm, sm--2, sm--3, md, lg, xl, xxl }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'sm'"
            },
            "color": {
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
                    "text": "to set color of a spinner { primary, dark, success, warning, danger, muted }."
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": true
            },
            "backdrop": {
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
                    "text": "to render spinners on dark or light backgrounds."
                },
                "getter": false,
                "setter": false,
                "attribute": "backdrop",
                "reflect": true
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "sizeValidation"
            }, {
                "propName": "color",
                "methodName": "colorValidation"
            }, {
                "propName": "backdrop",
                "methodName": "backdropValidation"
            }];
    }
}
