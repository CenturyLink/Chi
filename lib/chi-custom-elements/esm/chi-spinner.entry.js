import { r as registerInstance, h } from './index-422a57bb.js';
import { I as ICON_SIZES } from './size-9d0c9884.js';

const spinnerCss = "chi-spinner.sc-chi-spinner-h{display:inline-block}chi-spinner[backdrop].sc-chi-spinner-h .chi-backdrop.sc-chi-spinner{position:absolute}";
const ChiSpinnerStyle0 = spinnerCss;

const SPINNER_COLORS = ['primary', 'dark', 'success', 'warning', 'danger', 'muted', 'secondary', 'light'];
const Spinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    static get watchers() { return {
        "size": ["sizeValidation"],
        "color": ["colorValidation"],
        "backdrop": ["backdropValidation"]
    }; }
};
Spinner.style = ChiSpinnerStyle0;

export { Spinner as chi_spinner };
