import { r as registerInstance, h } from './index-ef94cfce.js';

const CacheLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         *  to set type of cache loader { pulse, bar }.
         */
        this.type = 'pulse';
        /**
         *  to visually de-emphasize by muting colors.
         */
        this.muted = false;
        /**
         *  to disable user interaction.
         */
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
    static get watchers() { return {
        "type": ["typeValidation"]
    }; }
};

export { CacheLoader as chi_cache_loader };
