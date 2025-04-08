import { r as registerInstance, h } from './index-422a57bb.js';
import { S as SEMANTIC_COLORS } from './color-b6e4748b.js';

const Progress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("progress", { key: 'b822b74e7f63fae2903f5576788fec67afba7e19', "aria-valuenow": this.value || undefined, "aria-valuemax": this.max || undefined, "aria-valuemin": 0, class: this.state ? `-${this.state}` : '', max: this.max || undefined, role: "progressbar", value: this.value }));
    }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

export { Progress as chi_progress };
