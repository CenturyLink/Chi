import { EventEmitter } from '../../stencil-public-runtime';
import { ChiStates } from '../../constants/states';
export declare class RadioButton {
    el: HTMLElement;
    /**
     * To provide radiobutton label as a string
     */
    label: string;
    /**
     * To render the radiobutton input with a respective name attribute
     */
    name: string;
    /**
     * To render the radiobutton in checked state
     */
    checked?: boolean;
    /**
     * To disable the radiobutton
     */
    disabled?: boolean;
    /**
     * To indicate the state
     */
    state?: ChiStates;
    private id;
    private labelId;
    private hasFocus;
    /**
     * Triggered when the radio-button has lost the focus
     */
    chiBlur: EventEmitter<string | boolean>;
    /**
     * Triggered when the user selects or deselects the radio-button
     */
    chiChange: EventEmitter<string | boolean>;
    /**
     * Triggered when the radio-button has the focus
     */
    chiFocus: EventEmitter<string | boolean>;
    connectedCallback(): void;
    componentWillLoad(): void;
    blur(): void;
    change(ev: Event): void;
    focus(): void;
    _emitBlur(hasFocus: boolean): void;
    _emitChange(checked: boolean): void;
    _emitFocus(hasFocus: boolean): void;
    render(): any;
}
