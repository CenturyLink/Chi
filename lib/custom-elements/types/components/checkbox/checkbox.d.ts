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
    private input?;
    id: string;
    /**
     * Triggered when the user selects or deselects the checkbox
     */
    chiChange: EventEmitter<string | boolean>;
    connectedCallback(): void;
    toggle(ev: Event): void;
    _emitChange(checked: boolean): void;
    _updateIndeterminate(): void;
    updateIndeterminate(newValue: boolean, oldValue: boolean): void;
    componentDidLoad(): void;
    render(): any;
}
