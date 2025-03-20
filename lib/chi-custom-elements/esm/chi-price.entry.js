import { r as registerInstance, h } from './index-422a57bb.js';
import { b as PRICE_SIZES } from './size-9d0c9884.js';
import { t as PRICE_CLASSES } from './classes-26189a5f.js';

const Price = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * To set the value of the Currency
         */
        this.currency = '$';
        /**
         * Price size { 'sm', 'md', 'lg' }
         */
        this.size = 'md';
        this.pricePattern = /^-?[0-9]+(\.[0-9]{1,2})?$/;
    }
    _isValidPrice(price) {
        if (price === null || price === undefined || Number.isNaN(price))
            return false;
        return this.pricePattern.test(price.toString());
    }
    _formatValuePrice(value) {
        const valueStr = value.toString();
        const formattedValues = valueStr.split('.');
        const integral = Number(formattedValues[0]).toString();
        let fractional = formattedValues[1] || '00';
        if (fractional.length === 1) {
            fractional += '0';
        }
        return [integral, fractional];
    }
    valueValidation(newValue) {
        if (!this._isValidPrice(newValue)) {
            throw new Error(`'${newValue}' is not a valid Price format.`);
        }
    }
    sizeValidation(newValue) {
        if (!PRICE_SIZES.includes(newValue)) {
            throw new Error(`'${newValue}' is not a valid size for Price. Valid values are sm, md or lg.`);
        }
    }
    get formattedPrice() {
        if (!this._isValidPrice(this.value))
            return null;
        return this._formatValuePrice(this.value);
    }
    componentWillLoad() {
        this.valueValidation(this.value);
        this.sizeValidation(this.size);
    }
    render() {
        const formattedPrice = this.formattedPrice;
        if (!formattedPrice)
            return null;
        const [integral, fractional] = formattedPrice;
        return (h("div", { class: {
                [PRICE_CLASSES.PRICE]: true,
                [`-${this.size}`]: !!this.size,
            }, "aria-label": `Price: ${this.currency || ''}${integral}${fractional || ''}` }, this.currency && h("sup", { "aria-hidden": "true" }, this.currency), integral, fractional && h("sup", { "aria-hidden": "true" }, fractional)));
    }
    static get watchers() { return {
        "value": ["valueValidation"],
        "size": ["sizeValidation"]
    }; }
};

export { Price as chi_price };
