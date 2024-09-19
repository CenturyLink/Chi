import { EventEmitter } from '../../stencil-public-runtime';
import { TextInputSizes } from '../../constants/size';
import { ChiStates } from '../../constants/states';
import { DropdownMenuItem, SearchInputModes } from '../../constants/types';
export declare class SearchInput {
    /**
     * To define size of Search input
     */
    size?: TextInputSizes;
    /**
     * To define placeholder of Search input
     */
    placeholder: string;
    /**
     * To define value of Search input
     */
    value: string;
    /**
     * To define name of Search input
     */
    name: string;
    /**
     * To disable Search input
     */
    disabled: boolean;
    /**
     * To disable Value attribute mutation
     */
    preventValueMutation: boolean;
    /**
     * To render Search Input in readonly mode
     */
    readonly: boolean;
    /**
     * To define -hover, -focus statuses
     */
    _status: string;
    /**
     * To set the mode to search input
     */
    mode?: SearchInputModes;
    /**
     * To provide number of items in the dropdown to be displayed, and apply scroll if needed
     */
    visibleItems?: number;
    /**
     * To set the list of items to be used in the dropdown menu in autocomplete mode
     */
    menuItems: DropdownMenuItem[];
    /**
     * To define state color of Search input
     */
    state: ChiStates;
    /**
     * To display an additional helper text message below the Text input
     */
    helperMessage: string;
    el: HTMLElement;
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
    /**
     * Triggered when the user clicked the X button.
     */
    eventClean: EventEmitter;
    /**
     * Triggered when the user clicked the Search button.
     */
    eventSearch: EventEmitter<string>;
    /**
     * Triggered when the user clicked in one of the autocomplete elements
     */
    eventItemSelected: EventEmitter<DropdownMenuItem>;
    _cleanButtonVisible: boolean;
    menuItemsFiltered: DropdownMenuItem[];
    selectedItem?: DropdownMenuItem;
    sizeValidation(newValue: TextInputSizes): void;
    updateValue(newValue: string, oldValue: string): void;
    stateValidation(newValue: ChiStates): void;
    /**
     * Show the autocomplete menu list
     */
    showList(): Promise<void>;
    /**
     * Hide the autocomplete menu list
     */
    hideList(): Promise<void>;
    connectedCallback(): void;
    componentWillLoad(): void;
    _handleValueInput(valueChange: Event): void;
    _setHighlightedValue(list: DropdownMenuItem[], text: string): DropdownMenuItem[];
    _clearFilterMenuItems(): void;
    _getAutocompleteDropdown(): HTMLChiDropdownElement;
    _handleFilter(text: string): void;
    _handleSelectItem: (ev: Event, item: DropdownMenuItem) => void;
    _handleValueChange(valueChange: Event): void;
    _handleFocus(ev: Event): void;
    _isAutocomplete(): boolean;
    _cleanInput(): void;
    _resetSelection(): void;
    _dropdownAutocomplete(trigger: HTMLElement): HTMLChiDropdownElement;
    _clearInputField: () => void;
    _getHelperMessage(): any;
    _addHelperMessage(input: HTMLElement): any;
    render(): any;
}
