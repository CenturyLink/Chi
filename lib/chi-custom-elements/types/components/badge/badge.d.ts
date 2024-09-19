export declare class Badge {
    slotBadgeContent: boolean;
    el: HTMLElement;
    /**
     *  to set variant of a badge { outline, flat }.
     */
    variant: string;
    /**
     *  to set color of a badge { primary, success, warning, danger, dark, muted, secondary, light, accent-1, accent-2, accent-3, accent-4, accent-5 }.
     */
    color: string;
    /**
     *  to transform the badge text { uppercase, lowercase, capitalize }.
     */
    textTransform: string;
    /**
     *  to set weight of the badge text { normal, semi-bold, bold }.
     */
    textWeight: string;
    /**
     *  to set size of a badge { xs or sm }.
     */
    size: string;
    sizeValidation(newValue: string): void;
    colorValidation(newValue: string): void;
    variantValidation(newValue: string): void;
    componentWillLoad(): void;
    connectedCallback(): void;
    render(): any;
}
