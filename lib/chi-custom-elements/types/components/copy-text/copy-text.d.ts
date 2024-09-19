import { EventEmitter } from '../../stencil-public-runtime';
import { IconSizes } from '../../constants/size';
import { IconColors } from '../../constants/color';
export declare class CopyText {
    el: HTMLElement;
    /**
     * Text to be copied to clipboard
     */
    text: string;
    /**
     * Size of the icon
     */
    size?: IconSizes;
    /**
     * Color of the Icon.
     */
    color?: IconColors;
    /**
     * To disable the copy button
     */
    disabled?: boolean;
    /**
     * Triggered when the user clicks on copy
     */
    chiCopy: EventEmitter<string>;
    private tooltip;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    createTooltip(): void;
    removeTooltip(): void;
    handlerClick(): void;
    /**
     * Sets message to show in the tooltip
     */
    setTooltipMsg(message: string): void;
    render(): any;
}
