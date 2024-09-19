import { EventEmitter } from '../../stencil-public-runtime';
import { ChiStates } from '../../constants/states';
export declare class NumberInput {
    /**
     * used to store the initial value of the number input
     */
    initialValue: any;
    /**
     * used to hold the value of the number input
     */
    value: string;
    /**
     * used to set a step to indicate the expected granularity
     */
    step: number;
    /**
     * used to set a maximum allowed value
     */
    max: number;
    /**
     * used to set a minimum allowed value
     */
    min: number;
    /**
     * used to determine if component is disabled or not
     */
    disabled?: boolean;
    /**
     * used to determine if component is required or not
     */
    required?: boolean;
    /**
     * used to determine component's size
     */
    size?: string;
    /**
     * used to set component's expanded mode
     */
    expanded?: boolean;
    /**
     * used to provide an input style like 'danger'. Mostly used for testing purposes
     */
    inputstyle?: ChiStates;
    /**
     * If set, component value won't be updated by itself.
     */
    preventValueMutation: boolean;
    /**
     * used to provide an input state like 'hover' or 'focus'. Mostly used for testing purposes
     */
    state?: string;
    /**
     * To display an additional helper text message below the Number Input
     */
    helperMessage?: string;
    el: HTMLElement;
    /**
     * Triggered when an alteration to the element's value is committed by the user
     */
    chiChange: EventEmitter<string>;
    /**
     * Triggered when the user changed the element's value but did not commit the change yet
     */
    chiInput: EventEmitter<string>;
    /**
     * Triggered when the element's value committed by the user is an invalid number
     */
    chiNumberInvalid: EventEmitter<void>;
    /**
     * Triggered when the user sets focus on the element.
     */
    chiFocus: EventEmitter;
    /**
     * Triggered when the element has lost focus.
     */
    chiBlur: EventEmitter;
    /**
     * Triggered when the user clicks on increment/decrement button.
     */
    chiClick: EventEmitter;
    inputStyleValidation(newValue: ChiStates): void;
    _numberInput: HTMLInputElement;
    connectedCallback(): void;
    handleChange(ev: Event): void;
    handleInput(ev: Event): void;
    emitEventsOnClick(ev: Event): void;
    private increment;
    private decrement;
    /**
     * Generates and returns input element
     */
    getInput(): HTMLInputElement;
    getBaseNumberInput(): any;
    getExpandedNumberInput(): any;
    isDecreaseDisabled(): boolean;
    isIncreaseDisabled(): boolean;
    getHelperMessage(): any;
    render(): any;
}
