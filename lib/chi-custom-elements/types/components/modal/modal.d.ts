import { EventEmitter } from '../../stencil-public-runtime';
import { ModalScrollableTypes } from '../../constants/types';
export declare class Modal {
    el: HTMLElement;
    /**
     *  To set Modal title
     */
    modalTitle: string;
    /**
     *  To set Modal subtitle
     */
    subtitle: string;
    /**
     *  To set trigger button text
     */
    button: string;
    /**
     *  To set cenetered layout
     */
    center: boolean;
    /**
     *  To set scrollable layout
     */
    scrollable: ModalScrollableTypes;
    /**
     *  To set inverse layout
     */
    inverse: boolean;
    /**
     *  To add back button in header
     */
    multiStep: boolean;
    /**
     *  To set animated layout
     */
    animated: boolean;
    /**
     *  To set no-bordered layout
     */
    noBorder: boolean;
    /**
     *  To set simple layout
     */
    simple: boolean;
    /**
     *  To set target to serve as Modal trigger
     */
    target: any;
    /**
     *  To set alert layout
     */
    alert: boolean;
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
     * Triggered when user click Back button on multi-step mode.
     */
    chiModalBack: EventEmitter;
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
    private _animation;
    sectionAnimationClassesChanged(): void;
    scrollableValidation(newValue: ModalScrollableTypes): void;
    triggerValidation(): void;
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
    getAlertContent: () => HTMLElement;
    getSimpleContent: () => HTMLElement;
    getDefaultContent: () => HTMLElement;
    getContent(): HTMLElement;
    getHeader(): HTMLElement;
    getFooter: () => HTMLElement;
    getTrigger(): HTMLElement;
    getBackdropClasses(): string;
    getSectionClasses(): string;
    render(): any;
}
