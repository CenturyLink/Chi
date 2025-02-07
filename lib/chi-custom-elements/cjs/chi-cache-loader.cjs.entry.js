'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c2d46a0.js');

const CacheLoader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: 'd5200364b30ad8365b59c56b2ebcc92beb4a9996', class: `chi-cache-loader
          ${this.muted ? '-muted' : ''}
          ${this.noInteraction ? '-no-interaction' : ''}
          ${this.type ? `-${this.type}` : ''}` }, index.h("slot", { key: 'bb36112ccd71b0707ab12f063562c8e926fe668b' })));
    }
    static get watchers() { return {
        "type": ["typeValidation"]
    }; }
};

exports.chi_cache_loader = CacheLoader;
