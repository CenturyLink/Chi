import { EventEmitter } from '../../stencil-public-runtime';
import { DropdownMenuMultiItem } from '../../constants/types';
import { ChiStates } from '../../constants/states';
import { ButtonSizes } from '../../constants/size';
export declare class DropdownSelect {
    /**
     * To set the active state of Dropdown-select
     */
    active: boolean;
    /**
     * To provide the value of base-style button as trigger of the Dropdown-select
     */
    button: string;
    /**
     * To set button size { xs, sm, md, lg, xl }.
     */
    size: ButtonSizes;
    /**
     * To render a search-input in menu-header
     */
    search: boolean;
    /**
     * To render show-selected checkbox in menu-header
     */
    showSelected: boolean;
    /**
     * To apply multi select mode
     */
    multiple: boolean;
    /**
     * To disable Dropdown-select
     */
    disabled: boolean;
    /**
     * To provide number of items in the Dropdown-select to be displayed, and apply scroll if needed
     */
    visibleItems?: number;
    /**
     * To define state color of Dropdown-select
     */
    state: ChiStates;
    /**
     * To display an additional helper text message below the Dropdown-select
     */
    helperMessage: string;
    /**
     * Dropdown menu items
     */
    items?: DropdownMenuMultiItem[];
    /**
     * Triggered when selected items have changed in the dropdown menu. Payload is an array
     * of strings.
     */
    eventValueChanged: EventEmitter;
    private currentItems;
    private filteredItems;
    private searchValue;
    private showSelectedOnly;
    el: HTMLElement;
    private id;
    private currentDirtyItems;
    private dropdownElement;
    private searchInputElement;
    private selectOnlyCheckbox;
    private isSearchMode;
    private handleSearchInput;
    private handleSearchClean;
    private handleCheckboxChange;
    componentDidLoad(): void;
    private addSearchInputListeners;
    private addCheckboxListeners;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private setCurrentDirtyItems;
    private resetFilters;
    private applyFilters;
    private handleItemClick;
    private handleApply;
    private handleClear;
    private getButtonContent;
    private renderItems;
    private renderNoResults;
    private renderFilteredItems;
    private renderCheckbox;
    private renderSearchModeFooter;
    private renderSearchModeElements;
    private resetDirtyItems;
    private renderSlots;
    render(): any;
}
