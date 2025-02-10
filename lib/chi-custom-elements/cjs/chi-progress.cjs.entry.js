'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c2d46a0.js');
const color = require('./color-04a49847.js');

const Progress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.value = undefined;
        this.max = 100;
        this.state = 'info';
    }
    stateValidation(newValue) {
        if (newValue && !color.SEMANTIC_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for progress. If provided, valid values are: info, warning, danger or success. If not, info will be set. `);
        }
    }
    componentWillLoad() {
        this.stateValidation(this.state);
    }
    render() {
        return (index.h("progress", { key: 'f2cc71c3c43d360951e63fee2a2db1e8ff512e6e', "aria-valuenow": this.value || undefined, "aria-valuemax": this.max || undefined, "aria-valuemin": 0, class: this.state ? `-${this.state}` : '', max: this.max || undefined, role: "progressbar", value: this.value }));
    }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

exports.chi_progress = Progress;
