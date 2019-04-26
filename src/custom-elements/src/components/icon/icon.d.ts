import '../../../../../dist/js/ce/types/stencil.core';
export declare class Icon {
    /**
     * OPTIONAL. Color of the icon. Accepts any color the text-utility supports {primary, success, warning, danger, inverse, muted}
     */
    color: string;
    /**
     * Icon to be rendered. View accepted values on text documentation.
     */
    icon: string;
    /**
     * OPTIONAL. Size of the Icon. {xs, sm, sm--2, sm--3, md, lg, xl, xxl}
     */
    size: string;
    validateColorAttribute(newValue: string): void;
    validateSizeAttribute(newValue: string): void;
    componentWillLoad(): void;
    componentDidUnload(): void;
    private getClass;
    private static _loadSprite;
    render(): JSX.Element;
}
