import { IconColors } from '../../constants/color';
import { IconSizes } from '../../constants/size';
export declare class Icon {
    /**
     * OPTIONAL. Color of the Icon.
     */
    color?: IconColors;
    /**
     * Icon to be rendered.
     */
    icon: string;
    /**
     * OPTIONAL. Size of the Icon.
     */
    size: IconSizes;
    /**
     * OPTIONAL classes
     */
    extraClass?: string;
    validateColorAttribute(newValue: IconColors): void;
    validateSizeAttribute(newValue: IconSizes): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private getClass;
    private static _loadSprite;
    render(): any;
}
