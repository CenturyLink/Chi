import { h } from "@stencil/core";
import { PRICE_SIZES } from "../../constants/size";
import { PRICE_CLASSES } from "../../constants/classes";
export class Price {
    constructor() {
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
    static get is() { return "chi-price"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "value": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set the value of the Price"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true
            },
            "currency": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set the value of the Currency"
                },
                "getter": false,
                "setter": false,
                "attribute": "currency",
                "reflect": true,
                "defaultValue": "'$'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PriceSizes",
                    "resolved": "string",
                    "references": {
                        "PriceSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::PriceSizes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Price size { 'sm', 'md', 'lg' }"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'md'"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueValidation"
            }, {
                "propName": "size",
                "methodName": "sizeValidation"
            }];
    }
}
