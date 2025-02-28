'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const color = require('./color-04a49847.js');

const Progress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        if (newValue && !color.SEMANTIC_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for progress. If provided, valid values are: info, warning, danger or success. If not, info will be set. `);
        }
    }
    componentWillLoad() {
        this.stateValidation(this.state);
    }
    render() {
        return (index.h("progress", { key: 'a0044eaf67a11fbcf0982bafe361c570d80d5a35', "aria-valuenow": this.value || undefined, "aria-valuemax": this.max || undefined, "aria-valuemin": 0, class: this.state ? `-${this.state}` : '', max: this.max || undefined, role: "progressbar", value: this.value }));
    }
    static get watchers() { return {
        "state": ["stateValidation"]
    }; }
};

exports.chi_progress = Progress;
