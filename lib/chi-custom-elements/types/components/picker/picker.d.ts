import { EventEmitter } from '../../stencil-public-runtime';
import { PickerInputTypes, PickerOption } from '../../constants/types';
import { PickerPillSizes, PickerSizes } from '../../constants/size';
import { ChiStates } from '../../components';
export declare class Picker {
    el: HTMLElement;
    /**
     * To set options
     */
    options: PickerOption[];
    /**
     * Picker size { md, lg }.
     */
    size: PickerSizes | PickerPillSizes;
    /**
     * To set pill layout of options
     */
    pill: boolean;
    /**
     * To show checkbox or radio
     */
    showInput?: boolean;
    /**
     * To define input type, radio (single selection) or checkbox (multiple selection)
     */
    type: PickerInputTypes;
    /**
     * To set a legend for all fields
     */
    label?: string;
    /**
     * To indicate the form field is required.
     */
    required: boolean;
    /**
     * To indicate the form field is optional.
     */
    optional: boolean;
    /**
     * To indicate if info icon should be displayed.
     */
    infoIcon: boolean;
    /**
     * To provide message for info icon popover.
     */
    infoIconMessage: string;
    /**
     * To set helper message
     */
    helperMessage?: string;
    /**
     * To set state of helper message
     */
    state?: ChiStates;
    /**
     * Emitted when any option is selected or unselected
     */
    chiChange: EventEmitter<PickerOption[]>;
    id: string;
    typeValidation(newValue: PickerInputTypes): void;
    pillValidation(newValue: boolean): void;
    sizeValidation(newValue: PickerSizes | PickerPillSizes): void;
    componentWillLoad(): void;
    connectedCallback(): void;
    _isRadio(): boolean;
    _getLabel(): any;
    _getItem(item: PickerOption): any;
    _getItemLabel(item: PickerOption): any;
    _getComplexItemLabelContent(item: PickerOption, endSlot: any): any;
    _getContentStart(item: PickerOption, hasEndContent?: boolean): any;
    _getLabelContent(item: PickerOption): any;
    /**
     * Default change event handler
     */
    _onClick(item: PickerOption, ev: Event): void;
    _getOptions(): any;
    _getFieldset(): any;
    render(): any;
}
