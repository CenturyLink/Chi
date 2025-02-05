import { EventEmitter } from '../../stencil-public-runtime';
import { TooltipColors } from '../../constants/color';
import { GeneralPositions } from '../../constants/types';
export declare class Tooltip {
    el: HTMLElement;
    /**
     *  to set the tooltip message to display { string }.
     */
    message: string;
    /**
     *  to set the background color of the tooltip { base, light }.
     */
    color?: TooltipColors;
    /**
     *  to set position of the tooltip { top, right, bottom, left }.
     */
    position?: GeneralPositions;
    /**
     *  to set the class chi-tooltip__wrapper
     */
    wrapper?: boolean;
    /**
     * triggered when the Tooltip show method has been executed.
     */
    tooltipShow: EventEmitter<void>;
    /**
     * triggered when the Tooltip hide method has been executed.
     */
    tooltipHide: EventEmitter<void>;
    /**
     * shows if the Tooltip is visible
     */
    tooltipVisible: boolean;
    private _popper;
    private _tooltipRef;
    private _tooltipElementNode;
    private _id;
    messageChanged(): void;
    positionChanged(): void;
    componentWillLoad(): void;
    private _showTooltipHandler;
    private _hideTooltipHandler;
    /**
     * Shows the tooltip
     */
    show(): Promise<void>;
    /**
     * Hides the tooltip
     */
    hide(): Promise<void>;
    private toggle;
    private initializePopper;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
