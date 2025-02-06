import { PriceSizes } from '../../constants/size';
export declare class Price {
    /**
     * To set the value of the Price
     */
    value: string | number;
    /**
     * To set the value of the Currency
     */
    currency?: string;
    /**
     * Price size { 'sm', 'md', 'lg' }
     */
    size?: PriceSizes;
    private pricePattern;
    private _isValidPrice;
    private _formatValuePrice;
    valueValidation(newValue: number | string): void;
    sizeValidation(newValue: PriceSizes): void;
    get formattedPrice(): [string, string];
    componentWillLoad(): void;
    render(): any;
}
