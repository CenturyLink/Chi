import { EventEmitter } from '../../stencil-public-runtime';
export declare class Drawer {
    el: any;
    /**
     * to set position of the drawer { top, right, bottom or left }
     */
    position: string;
    /**
     * to add a backdrop behind the drawer, which covers the viewport
     */
    backdrop: string;
    /**
     * to open or close the drawer
     */
    active: boolean;
    /**
     * To render Drawer without a close button
     */
    nonClosable: boolean;
    /**
     * to remove the space for the header
     */
    noHeader: boolean;
    /**
     * to prevent closing when the user clicked outside the Drawer
     */
    preventAutoHide: boolean;
    /**
     * to define portal style of the Drawer header
     */
    portal: boolean;
    /**
     * Status classes for the show/hide animation
     */
    _animationClasses: string;
    /**
     * Status classes for the show/hide animation
     */
    _backdropAnimationClasses: string;
    /**
     *  To define drawer title. Not compatible with noHeader
     */
    drawerTitle: string;
    private animation;
    positionValidation(newValue: string): void;
    backdropValidation(newValue: string): void;
    statusChanged(newValue: boolean, oldValue: boolean): void;
    /**
     * Toggles active state (show/hide)
     */
    toggle(): Promise<void>;
    /**
     * Shows the drawer.
     */
    show(): Promise<void>;
    /**
     * Hides the drawer
     */
    hide(): Promise<void>;
    /**
     * Drawer show method has executed, but the showing animation has not started yet
     */
    eventShow: EventEmitter;
    /**
     * Drawer hide method has executed, but the closing animation has not started yet
     */
    eventHide: EventEmitter;
    /**
     * Drawer has been shown to the user and is fully visible. The animation has completed.
     */
    eventShown: EventEmitter;
    /**
     * Drawer has been hidden to the user. The animation has completed.
     */
    eventHidden: EventEmitter;
    private _show;
    private _hide;
    connectedCallback(): void;
    private _documentClickHandler;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
