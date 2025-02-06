import { EventEmitter } from '../../stencil-public-runtime';
import { ChiStates } from '../../constants/states';
export declare class Checkbox {
    el: HTMLElement;
    /**
     * To provide checkbox label as a string
     */
    label: string;
    /**
     * To render the checkbox input with a respective name attribute
     */
    name: string;
    /**
     * To render the checkbox in checked state
     */
    checked?: boolean;
    /**
     * To add indeterminate state to checkbox
     */
    indeterminate?: boolean;
    /**
     * To disable the checkbox
     */
    disabled?: boolean;
    /**
     * To indicate which form field is required
     */
    required: boolean;
    /**
     * To indicate the state
     */
    state?: ChiStates;
    /**
     * To define -hover, -focus statuses
     */
    _status: string;
    /**
     * To indicate if info icon should be displayed.
     */
    infoIcon: boolean;
    /**
     * To provide message for info icon popover.
     */
    infoIconMessage: string;
    private input?;
    private helpButtonId;
    private helpPopoverId;
    id: string;
    /**
     * Triggered when the user selects or deselects the checkbox
     */
    chiChange: EventEmitter<string | boolean>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    toggle(ev: Event): void;
    _emitChange(checked: boolean): void;
    _updateIndeterminate(): void;
    updateIndeterminate(newValue: boolean, oldValue: boolean): void;
    toggleHelpPopover(): void;
    _getInfoIcon(): any;
    _getInput(): any;
    _getLabel(): any;
    render(): any;
}
