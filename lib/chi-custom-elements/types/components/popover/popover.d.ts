import { EventEmitter } from '../../stencil-public-runtime';
import { Placement } from 'popper.js';
export declare class Popover {
    /**
     * to set position of the popover { top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end }
     */
    position: Placement;
    /**
     * to add an arrow between the popover and the reference element
     */
    arrow: boolean;
    /**
     * to add a close button to the popover
     */
    closable: boolean;
    /**
     * to allow the user to manually change the position of the popover
     */
    drag: boolean;
    /**
     * to open or close the popover
     */
    active: boolean;
    /**
     * CSS Selector to the reference Element. I.e. #id > p
     */
    reference: string;
    /**
     * To define portal style of the Popover
     */
    portal: boolean;
    /**
     * To define modal style of the Popover
     */
    modal: boolean;
    /**
     * Prevents closing the popover when clicking out of its bounds
     */
    preventAutoHide: boolean;
    /**
     * To define popover variant { text, custom }
     */
    variant: string;
    /**
     * Status classes for the show/hide animation
     */
    _animationClasses: string;
    /**
     *  To define popover title
     */
    popoverTitle: string;
    /**
     *  To define popover footer
     */
    popoverFooter: boolean;
    el: HTMLElement;
    private currentAnimation;
    private _reference;
    _popoverElement: HTMLElement;
    _popoverHeader: HTMLElement;
    private _popper;
    private _preAnimationTransformStyle;
    private _postAnimationTransformStyle;
    private _componentLoaded;
    private _didUpdateCallBackOnceQueue;
    private _closePrevented;
    private _closePreventedTimeout;
    private _documentClickHandler;
    private _documentKeyHandler;
    private _drag;
    positionValidation(newValue: string): void;
    referenceElementChanged(newValue: string): void;
    static referenceElementValidation(newValue: string): void;
    arrowChanged(newValue: boolean, oldValue: boolean): void;
    statusChanged(newValue: boolean, oldValue: boolean): void;
    dragUpdated(newVal: boolean): void;
    /**
     * Toggles active state (show/hide)
     */
    toggle(): Promise<void>;
    /**
     * Shows the popover.
     */
    show(): Promise<void>;
    /**
     * Hides the popover
     */
    hide(): Promise<void>;
    /**
     * Popover show method has executed, but the showing animation has not started yet
     */
    eventShow: EventEmitter;
    /**
     * Popover hide method has executed, but the closing animation has not started yet
     */
    eventHide: EventEmitter;
    /**
     * Popover has been shown to the user and is fully visible. The animation has completed.
     */
    eventShown: EventEmitter;
    /**
     * Popover has been hidden to the user. The animation has completed.
     */
    eventHidden: EventEmitter;
    private _resetPopperPosition;
    private _show;
    private _hide;
    private _configurePopoverPopper;
    private _initializePopper;
    private _destroyPopper;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    componentDidUpdate(): void;
    preventAutoClose(): void;
    hostData(): {
        'aria-hidden': string;
    };
    render(): any;
}
