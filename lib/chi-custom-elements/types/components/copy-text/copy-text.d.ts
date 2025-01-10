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
     * The message showed in the tooltip
     */
    tooltipMessage: string;
    /**
     * Triggered when the user clicks on copy
     */
    chiCopy: EventEmitter<string>;
    handlerClick(): void;
    setTooltipMsg(message: string): void;
    render(): any;
}
