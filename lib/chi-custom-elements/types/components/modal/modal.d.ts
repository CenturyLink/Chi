import { EventEmitter } from '../../stencil-public-runtime';
export declare class Modal {
    el: HTMLElement;
    /**
     *  To define alert title
     */
    modalTitle?: string;
    /**
     *  To set Modal subtitle
     */
    subtitle: string;
    /**
     *  To set trigger active state
     */
    active: boolean;
    /**
     *  To set trigger button text
     */
    button: string;
    /**
     *  To set centered layout
     */
    center: boolean;
    /**
     *  To add close button
     */
    closable: boolean;
    /**
     *  To set scrollable content
     */
    contentHeight: number;
    /**
     *  To set scrollable modal
     */
    backdropHeight: number;
    /**
     *  To set inverse layout
     */
    inverse: boolean;
    /**
     *  To set animated layout
     */
    animated: boolean;
    /**
     *  To set no-bordered layout
     */
    noBorder: boolean;
    /**
     *  To delete header and footer from the Modal
     */
    simple: boolean;
    /**
     *  To provide id of an external reference element
     */
    reference: any;
    /**
     * Triggered when Modal show method has been executed, but the showing animation has not started yet.
     */
    chiModalShow: EventEmitter;
    /**
     * Triggered when Modal has been shown to the user and is fully visible. The animation has completed.
     */
    chiModalShown: EventEmitter;
    /**
     * Triggered when Modal hide method has been executed, but the closing animation has not started yet.
     */
    chiModalHide: EventEmitter;
    /**
     * Triggered when Modal has been hidden to the user. The animation has completed.
     */
    chiModalHidden: EventEmitter;
    /**
     * Triggered when user exists the Modal using Save or Action buttons.
     */
    chiModalAccept: EventEmitter;
    /**
     * Triggered when user exits the modal using Cancel or Close buttons.
     */
    chiModalCancel: EventEmitter;
    sectionAnimationClasses: string;
    backdropAnimationClasses: string;
    private isActive;
    private _uuid4;
    private _referenceElement;
    private _animation;
    sectionAnimationClassesChanged(): void;
    contentHeightValidation(newValue: number): void;
    backdropHeightValidation(newValue: number): void;
    private triggerValidation;
    private validateScrollValue;
    connectedCallback(): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    /**
     * Utility to handle animations for show and hide methods
     */
    private updateAnimationClasses;
    private getUpdateAnimationClasses;
    private handleAnimation;
    /**
     * Shows Modal
     */
    show(): Promise<void>;
    /**
     * Hides Modal
     */
    hide(): Promise<void>;
    /**
     * Toggles Modal
     */
    toggle(): Promise<void>;
    getCloseButton: () => HTMLElement;
    cancel: () => void;
    accept: () => void;
    getContent(): HTMLElement;
    getHeader(): HTMLElement;
    getFooter: () => HTMLElement;
    getTrigger(): HTMLElement;
    getBackdropClasses(): string;
    getSectionClasses(): string;
    getModal(): HTMLElement;
    render(): any;
}
