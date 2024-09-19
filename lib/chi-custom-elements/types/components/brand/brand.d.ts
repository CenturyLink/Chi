export declare class Brand {
    /**
     *  to set brand color { black, white, inverse }.
     */
    color: string;
    /**
     *  to set brand type { black, white, inverse }.
     */
    type: string;
    /**
     *  to set size of brand.
     */
    size: string;
    /**
     *  to set logo of brand { lumen, centurylink, brightspeed, colt }.
     */
    logo: string;
    sizeValidation(newValue: string): void;
    colorValidation(newValue: string): void;
    logoValidation(newValue: string): void;
    componentWillLoad(): void;
    _brandSVG(): any;
    render(): any;
}
