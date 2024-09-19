import { EventEmitter } from '../../stencil-public-runtime';
import { ChiStates } from '../../constants/states';
import { IconColors } from '../../constants/color';
import { TextInputSizes } from '../../constants/size';
import { TextInputTypes } from '../../constants/constants';
export declare class TextInput {
    el: HTMLChiTextInputElement;
    /**
     * To define type of Text input
     */
    type: TextInputTypes;
    /**
     * To define state color of Text input
     */
    state: ChiStates;
    /**
     * To add a left positioned icon
     */
    iconLeft: string;
    /**
     * To add a right positioned icon
     */
    iconRight: string;
    /**
     * To define color of left icon
     */
    iconLeftColor: IconColors;
    /**
     * To define color of right icon
     */
    iconRightColor: IconColors;
    /**
     * To define size of Text input
     */
    size?: TextInputSizes;
    /**
     * To define placeholder of Text input
     */
    placeholder: string;
    /**
     * To display an additional helper text message below the Text input
     */
    helperMessage: string;
    /**
     * To define value of Text input
     */
    value: string;
    /**
     * To define name of Text input
     */
    name: string;
    /**
     * To disable Text input
     */
    disabled: boolean;
    /**
     * To prevent the Text input value from being changed
     */
    readonly: boolean;
    /**
     * To disable Value attribute mutation
     */
    preventValueMutation: boolean;
    /**
     * To render Text Input with Spinner
     */
    spinner: boolean;
    /**
     * To show copy text icon
     */
    copyText: boolean;
    /**
     * To define -hover, -focus statuses
     */
    _status: string;
    /**
     * Extra classes to apply to input
     */
    extraClass: string;
    /**
     * Triggered when an alteration to the element's value is committed by the user
     */
    eventChange: EventEmitter<string>;
    /**
     * Triggered when the user changed the element's value but did not commit the change yet
     */
    eventInput: EventEmitter<string>;
    /**
     * Triggered when the user sets focus on the element.
     */
    eventFocus: EventEmitter;
    /**
     * Triggered when the element has lost focus.
     */
    eventBlur: EventEmitter;
    stateValidation(newValue: ChiStates): void;
    sizeValidation(newValue: TextInputSizes): void;
    colorValidation(newValue: IconColors): void;
    iconLeftColorValidation(newValue: IconColors): void;
    iconRightColorValidation(newValue: IconColors): void;
    typeValidation(newValue: TextInputTypes): void;
    _handleValueInput(valueChange: Event): void;
    _handleValueChange(valueChange: Event): void;
    componentWillLoad(): void;
    connectedCallback(): void;
    getInput(): HTMLInputElement;
    _getIconLeft(): any;
    _getIconRight(): any;
    _getSpinner(): any;
    _getHelperMessage(): any;
    _shouldWrapInput(): boolean;
    _addCopyText(input: HTMLElement): any;
    _addHelperMessage(input: HTMLElement): any;
    _getWrappedInput(input: HTMLInputElement): HTMLInputElement;
    render(): HTMLInputElement;
}
