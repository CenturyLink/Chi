import { EventEmitter } from '../../stencil-public-runtime';
import { Placement } from 'popper.js';
import { DropdownMenuMultiItem, DropdownSelectModes, FontWeight } from '../../constants/types';
import { ChiStates } from '../../constants/states';
export declare class Dropdown {
    /**
     * To set the state of Dropdown
     */
    active: boolean;
    /**
     * To enable the description of Dropdown menu item
     */
    description?: boolean;
    /**
     * To render Dropdowns that span the full width of the parent container
     */
    fluid: boolean;
    /**
     * To configure activation on hover of the Dropdown with base-style button trigger
     */
    hover: boolean;
    /**
     * To provide the value of base-style button as trigger of the Dropdown
     */
    button?: string;
    /**
     * To provide the name of an icon to display as trigger of the Dropdown
     */
    icon?: string;
    /**
     * To provide icon tooltip message
     */
    iconTooltipMessage?: string;
    /**
     * To set the color of the button. The value is directly passed to
     * chi-button element if present  { primary, secondary, danger, dark, light }.
     */
    color: string;
    /**
     * To set the variant of the button. The value is directly passed to
     * chi-button element if present { outline, flat }
     */
    variant: string;
    /**
     *  to set button size { xs, sm, md, lg, xl }.
     */
    size: string;
    /**
     *  to render a button with uppercase text.
     */
    uppercase: boolean;
    /**
     *  to disable chi-button.
     */
    disabled: boolean;
    /**
     * To animate the chevron of Dropdown
     */
    animateChevron?: boolean;
    /**
     * To set position of the Dropdown
     */
    position: Placement;
    /**
     *  To set weight of the button text { normal }.
     */
    fontWeight?: FontWeight;
    /**
     * To provide selector of an external reference element
     */
    reference: string;
    /**
     * To prevent hiding of the Dropdown when clicking outside its bounds
     */
    preventAutoHide: boolean;
    /**
     * To prevent emitting the event chiDropdownItemSelected when an item is clicked
     */
    preventItemSelected: boolean;
    /**
     * To provide number of items in the dropdown to be displayed, and apply scroll if needed
     */
    visibleItems?: number;
    /**
     * To retain the selection of the menu item and display it as the trigger
     */
    retainSelection?: boolean;
    /**
     * To apply select-like functionality and styles
     */
    selectMode?: DropdownSelectModes;
    /**
     * To define state color of Dropdown
     */
    state: ChiStates;
    /**
     * To display an additional helper text message below the Dropdown
     */
    helperMessage: string;
    /**
     * Dropdown menu items
     */
    items?: DropdownMenuMultiItem[];
    /**
     * Triggered when hiding the Dropdown
     */
    eventHide: EventEmitter;
    /**
     * Triggered when showing the Dropdown
     */
    eventShow: EventEmitter;
    /**
     * Triggered when press key to up/down the Dropdown menu items
     */
    eventKeyDown: EventEmitter;
    /**
     * Triggered when select an item in the dropdown menu
     */
    eventItemSelected: EventEmitter;
    /**
     * Triggered when an item is deselected in the dropdown menu
     */
    eventItemDeselected: EventEmitter;
    /**
     * Triggered when Dropdown's selection is reset
     */
    eventSelectionReset: EventEmitter;
    /**
     * Triggered when selected items have changed in the dropdown menu. Payload is an array
     * of strings.
     */
    eventValueChanged: EventEmitter;
    _menuHeader: boolean;
    _menuFooter: boolean;
    _forceRender: boolean;
    _value: string[];
    _selectAllState: boolean | string;
    _currentItems: DropdownMenuMultiItem[];
    el: HTMLElement;
    private _componentLoaded;
    private _popper;
    private _referenceElement;
    private _dropdownMenuElement;
    private _dropdownMenuItemsWrapper;
    private _customTrigger;
    private _fluidClass;
    private id;
    private _currentDirtyItems;
    connectedCallback(): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    positionValidation(newValue: string): void;
    updateActive(newActiveState: boolean, oldActiveState: boolean): void;
    stateValidation(newValue: ChiStates): void;
    /**
     * Validates select mode values and sets default value as single if property is used without value.
     * E.g. <chi-dropdown select-mode> <--> <chi-dropdown select-mode="single">
     */
    validateSelectMode(selectMode: any): void;
    _setSelectModeProps(): void;
    _updateFluidClass(): void;
    _updateMultiItems(): void;
    updatePopper(): Promise<void>;
    handleKeyDown(event: KeyboardEvent): void;
    private _configureDropdownPopper;
    private _triggerElement;
    _initializePopper(): void;
    _getDropdownMenuSlots(): void;
    getPadding(direction: 'top' | 'bottom'): number;
    getTotalElementHeight(element: HTMLElement): number;
    onMenuItemsChange(): void;
    setMenuHeight(): void;
    setActiveClassOnMenuItem(): void;
    setFixedWidth(): void;
    setDisplay(display: 'block' | 'none'): void;
    emitHide(): void;
    emitShow(): void;
    handlerClick: (e: MouseEvent) => void;
    handlerSelectedMenuItem: (ev: any) => void;
    /**
     * Either adds or removes a selected item from the value list.
     * Multiple values are only allowed if selectMode is multi.
     */
    _updateValue(target: HTMLElement): void;
    handlerClickTrigger: () => void;
    handlerMouseEnter: () => void;
    handlerMouseLeave: () => void;
    /**
     * Hides the dropdown
     */
    hide(): Promise<void>;
    /**
     * Shows the dropdown
     */
    show(): Promise<void>;
    /**
     * Toggles active state (show/hide)
     */
    toggle(): Promise<void>;
    /**
     * Resets selection
     */
    resetSelection(): Promise<void>;
    _focusMenuItem(keyCode: string): void;
    _isSelectMulti(): boolean;
    _getDropdownMenuItems(): HTMLElement[];
    _getButtonElement(): HTMLButtonElement;
    _addEventListeners(): void;
    _removeEventListeners(): void;
    _addClickEventListeners(): void;
    _getButtonContent(): string;
    _getHelperMessage(): any;
    /**
     * Generates trigger button content, either default button text, selected value or icon
     */
    renderTrigger(): any;
    getExtraClassForTriggerButton(): string;
    renderDropdownMenuHeader(isMultiItems: boolean): any;
    renderDropdownMenuFooter(isMultiItems: boolean): any;
    renderDropdownMenuItems(isMultiItems: boolean): any;
    renderMenu(): any;
    renderSelectMultiHeaderContent(): any;
    renderSelectMultiFooterContent(): any[];
    renderSelectMultiItems(): any[];
    onSelectMultiApply(): void;
    onSelectMultiClear(): void;
    onMultiItemsChanged(): void;
    _clearMultiItemsSelection(): void;
    _selectAllMultiItems(): void;
    _selectMultiItemClicked(ev: CustomEvent, item: DropdownMenuMultiItem): void;
    _onMultiSelectAllChanged(): void;
    _updateSelectAllCheckbox(): void;
    render(): any;
}
