export declare class Spinner {
    /**
     *  to set size of a spinner { xs, sm, sm--2, sm--3, md, lg, xl, xxl }.
     */
    size: string;
    /**
     *  to set color of a spinner { primary, dark, success, warning, danger, muted }.
     */
    color: string;
    /**
     *  to render spinners on dark or light backgrounds.
     */
    backdrop: string;
    sizeValidation(newValue: string): void;
    colorValidation(newValue: string): void;
    backdropValidation(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
