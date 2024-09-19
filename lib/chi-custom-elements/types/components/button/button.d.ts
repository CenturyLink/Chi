import { EventEmitter } from '../../stencil-public-runtime';
export declare class Button {
    el: HTMLButtonElement;
    slotBtnContent: boolean;
    /**
     *  to set button type { float, close, icon }.
     */
    type: string;
    /**
     *  to set variant of a button { outline, flat }.
     */
    variant: string;
    /**
     *  to disable chi-button.
     */
    disabled: boolean;
    /**
     *  to set button color { primary, secondary, danger, dark, light }.
     */
    color: string;
    /**
     *  to set button size { xs, sm, md, lg, xl }.
     */
    size: string;
    /**
     *  to render a button to fill the parent space.
     */
    fluid: boolean;
    /**
     *  to render a button with uppercase text.
     */
    uppercase: boolean;
    /**
     *  to center align the text.
     */
    center: boolean;
    /**
     *  to provide alternative text in case of icon buttons.
     */
    alternativeText: string;
    extraClass: string;
    /**
     *  to emit a custom event when button is clicked.
     */
    chiClick: EventEmitter<any>;
    /**
     *  to emit a custom event when the mouse pointer is moved onto the button.
     */
    chiMouseEnter: EventEmitter<any>;
    /**
     *  to emit a custom event when the mouse pointer is moved out of the button.
     */
    chiMouseLeave: EventEmitter<any>;
    sizeValidation(newValue: string): void;
    colorValidation(newValue: string): void;
    buttonTypeValidation(newValue: string): void;
    variantValidation(newValue: string): void;
    componentWillLoad(): void;
    connectedCallback(): void;
    _buttonClicked(): void;
    _buttonMouseEnter(): void;
    _buttonMouseLeave(): void;
    render(): any;
}
