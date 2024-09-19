import { EventEmitter } from '../../stencil-public-runtime';
import { ChiStates } from '../../constants/states';
import { IconColors } from '../../constants/color';
import { TextInputSizes } from '../../constants/size';
export declare class Textarea {
    el: HTMLChiTextareaElement;
    /**
     * To define state color of Textarea
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
     * To define size of Textarea
     */
    size?: TextInputSizes;
    /**
     * To define placeholder of Textarea
     */
    placeholder: string;
    /**
     * To display an additional helper text message below the Textarea
     */
    helperMessage: string;
    /**
     * To read value of Textarea
     */
    value: string;
    /**
     * To define name of Textarea
     */
    name: string;
    /**
     * To disable Textarea
     */
    disabled: boolean;
    /**
     * To prevent Textarea value from being changed
     */
    readonly: boolean;
    /**
     * To show copy text icon
     */
    copyText: boolean;
    /**
     * To define -hover, -focus statuses
     */
    _status: '-hover' | '-focus';
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
    _handleValueInput(valueChange: Event): void;
    _handleValueChange(): void;
    componentWillLoad(): void;
    connectedCallback(): void;
    _getTextAreaElement(): HTMLTextAreaElement;
    _getHelperMessage(): any;
    _getIconsData(): {
        classes: string;
        iconRight: any;
        iconLeft: any;
    };
    _shouldWrapTextarea(): boolean;
    _getWrappedTextarea(textareaElement: HTMLTextAreaElement): HTMLTextAreaElement;
    _addCopyText(textareaElement: HTMLElement): any;
    render(): HTMLTextAreaElement;
}
