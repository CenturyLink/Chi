import { r as registerInstance, h } from './index-cde0ed0d.js';
import { S as SEMANTIC_COLORS } from './color-b6e4748b.js';

const Progress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = undefined;
        this.max = 100;
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
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

export { Progress as chi_progress };
