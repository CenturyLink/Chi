import { EventEmitter } from '../../stencil-public-runtime';
import { FormWrapperLayouts, FormWrapperTypes } from '../../constants/constants';
import { FormWrapperCheckbox, FormWrapperRadio } from '../../constants/types';
import { ChiStates } from '../../constants/states';
export declare class FormWrapper {
    el: HTMLElement;
    /**
     *  to set form element type { checkbox, radio }.
     */
    type: FormWrapperTypes;
    /**
     *  to set layout { stacked, inline }.
     */
    layout?: FormWrapperLayouts;
    /**
     * to set options
     */
    options: FormWrapperCheckbox[] | FormWrapperRadio[];
    /**
     * to set a lagend for all fields
     */
    label?: string;
    /**
     * To set state success, warning or danger
     */
    state?: ChiStates;
    /**
     * To set helper message
     */
    helperMessage?: string;
    chiChange: EventEmitter<FormWrapperCheckbox[] | FormWrapperRadio[]>;
    id: string;
    layoutValidation(newValue: string): void;
    typeValidation(newValue: string): void;
    stateValidation(newValue: ChiStates): void;
    componentWillLoad(): void;
    _getLabel(): any;
    _getItems(): any[];
    _getCheckbox(item: FormWrapperCheckbox): any;
    _getRadioButton(item: FormWrapperRadio): any;
    _getItemWrapperClasses(isLast: any): string;
    /**
     * @returns a given element in a form item wrapper with specified layout
     */
    _getFormItem(element: HTMLElement, isLast?: boolean): any;
    /**
     * Default change event handler
     */
    _onChange(ev: CustomEvent): void;
    _onRadioButtonChange(target: HTMLChiRadioButtonElement): void;
    _getFieldset(): any;
    render(): any;
}
