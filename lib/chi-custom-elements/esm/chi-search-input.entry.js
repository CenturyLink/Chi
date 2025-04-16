import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-422a57bb.js';
import { c as TEXT_INPUT_SIZES } from './size-9d0c9884.js';
import { C as CHI_STATES } from './states-a5be3f93.js';
import { h as DROPDOWN_CLASSES } from './classes-d4369523.js';
import { b as cleanUndefinedProps } from './utils-48628cb4.js';
import { v as v4 } from './v4-a4ec28c0.js';

const searchInputCss = "chi-search-input.sc-chi-search-input-h{display:block;width:100%}";
const ChiSearchInputStyle0 = searchInputCss;

const SearchInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventChange = createEvent(this, "chiChange", 7);
        this.eventInput = createEvent(this, "chiInput", 7);
        this.eventFocus = createEvent(this, "chiFocus", 7);
        this.eventBlur = createEvent(this, "chiBlur", 7);
        this.eventClean = createEvent(this, "chiClean", 7);
        this.eventSearch = createEvent(this, "chiSearch", 7);
        this.eventItemSelected = createEvent(this, "chiSearchInputItemSelected", 7);
        /**
         * To define size of Search input
         */
        this.size = 'md';
        /**
         * To define value of Search input
         */
        this.value = '';
        /**
         * To disable Search input
         */
        this.disabled = false;
        /**
         * To disable Value attribute mutation
         */
        this.preventValueMutation = false;
        /**
         * To render Search Input in readonly mode
         */
        this.readonly = false;
        this._cleanButtonVisible = this.value && !this.disabled ? true : false;
        this.menuItemsFiltered = [];
        this._handleSelectItem = (ev, item) => {
            ev.preventDefault();
            const dropdown = this._getAutocompleteDropdown();
            const title = ev.target.innerText;
            const { href, id } = item !== null && item !== void 0 ? item : {};
            this.selectedItem = cleanUndefinedProps({ title, href, id });
            this.value = title;
            dropdown.hide();
            this._clearFilterMenuItems();
            this.eventItemSelected.emit(this.selectedItem);
        };
        this._clearInputField = () => {
            if (!this.readonly) {
                this._cleanInput();
            }
        };
    }
    sizeValidation(newValue) {
        const validValues = TEXT_INPUT_SIZES.join(', ');
        if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for input. If provided, valid values are: ${validValues}. `);
        }
    }
    updateValue(newValue, oldValue) {
        this._cleanButtonVisible = !!newValue;
        if (newValue !== oldValue) {
            this.value = newValue;
        }
    }
    stateValidation(newValue) {
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for input. If provided, valid values are: ${validValues}. `);
        }
    }
    /**
     * Show the autocomplete menu list
     */
    async showList() {
        const dropdown = this._getAutocompleteDropdown();
        const input = this.el.querySelector('input[type=search]');
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.show();
        input === null || input === void 0 ? void 0 : input.focus();
    }
    /**
     * Hide the autocomplete menu list
     */
    async hideList() {
        const dropdown = this._getAutocompleteDropdown();
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.hide();
    }
    //#region Lifecycle hooks
    connectedCallback() {
        this.menuItemsFiltered = this.menuItems;
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
        this.stateValidation(this.state);
    }
    //#endregion
    _handleValueInput(valueChange) {
        const newValue = valueChange.target.value;
        const isAutocomplete = this._isAutocomplete();
        if (!newValue) {
            this._resetSelection();
        }
        if (!this.preventValueMutation) {
            this.value = newValue;
        }
        this._cleanButtonVisible = !!newValue;
        this.eventInput.emit(newValue);
        if (!isAutocomplete) {
            return;
        }
        this._handleFilter(newValue);
    }
    _setHighlightedValue(list, text) {
        if (!text) {
            return list;
        }
        return list.map((item) => {
            const regex = new RegExp(text, 'gi');
            const newValue = item.title.replace(regex, (match) => `<span class="-text--normal">${match}</span>`);
            return Object.assign(Object.assign({}, item), { title: `<strong>${newValue}</strong>` });
        });
    }
    _clearFilterMenuItems() {
        const isAutocomplete = this._isAutocomplete();
        if (isAutocomplete) {
            this.menuItemsFiltered = this.menuItems;
        }
    }
    _getAutocompleteDropdown() {
        return this.el.querySelector('#dropdown-autocomplete');
    }
    _handleFilter(text) {
        var _a;
        const dropdown = this._getAutocompleteDropdown();
        const list = (_a = this.menuItems) === null || _a === void 0 ? void 0 : _a.filter((item) => {
            return item.title.toLowerCase().includes(text.toLowerCase());
        });
        if (!(list === null || list === void 0 ? void 0 : list.length)) {
            dropdown.hide();
            return;
        }
        const highlightedMenuItems = this._setHighlightedValue(list, text);
        this.menuItemsFiltered = highlightedMenuItems;
        dropdown.show();
    }
    _handleValueChange(valueChange) {
        const newValue = valueChange.target.value;
        this.eventChange.emit(newValue);
    }
    _handleFocus(ev) {
        const isAutocomplete = this._isAutocomplete();
        if (isAutocomplete) {
            const currentItem = ev.target.value;
            this._handleFilter(currentItem);
        }
        this.eventFocus.emit();
    }
    _isAutocomplete() {
        return this.mode === 'autocomplete';
    }
    _cleanInput() {
        const input = this.el.querySelector('input[type=search]');
        this.value = '';
        input.value = this.value;
        this._clearFilterMenuItems();
        input.focus();
        this._cleanButtonVisible = false;
        this.eventClean.emit();
        this._resetSelection();
    }
    _resetSelection() {
        if (!this._isAutocomplete()) {
            return;
        }
        const dropdown = this._getAutocompleteDropdown();
        this.selectedItem = undefined;
        dropdown.resetSelection();
    }
    _dropdownAutocomplete(trigger) {
        var _a, _b;
        const visibleItems = (_a = this.visibleItems) !== null && _a !== void 0 ? _a : null;
        return (h("chi-dropdown", { id: "dropdown-autocomplete", position: "bottom", preventItemSelected: true, fluid: true, visibleItems: visibleItems }, trigger, (_b = this.menuItemsFiltered) === null || _b === void 0 ? void 0 :
            _b.map((item) => {
                const uuid = v4();
                return (h("a", { key: `menu-item-${uuid}`, class: DROPDOWN_CLASSES.MENU_ITEM, href: item.href, slot: "menu", innerHTML: item.title, onClick: (ev) => this._handleSelectItem(ev, item) }));
            })));
    }
    _getHelperMessage() {
        return this.helperMessage && h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    _addHelperMessage(input) {
        return (h(Fragment, null, input, this._getHelperMessage()));
    }
    render() {
        const isAutocomplete = this._isAutocomplete();
        const searchInputElement = (h("input", { key: '3d563e22ada6ec28dfa35ca1ee534f9278e57a92', type: "search", class: `
          chi-input chi-search__input
          ${this.size ? `-${this.size}` : ''}
          ${this.state ? `-${this.state}` : ''}
          ${this._status ? `-${this._status}` : ''}
        `, placeholder: this.placeholder || '', value: this.value, name: this.name || '', disabled: this.disabled, id: this.el.id ? `${this.el.id}-control` : null, onFocus: (ev) => this._handleFocus(ev), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: (ev) => this._handleValueChange(ev), autocomplete: "off", "aria-label": "search input", readonly: this.readonly }));
        const searchXIcon = this._cleanButtonVisible ? (h("button", { class: "chi-button -icon -close -xs", onClick: this._clearInputField, onMouseDown: (e) => e.preventDefault(), "aria-label": "Clear" }, h("div", { class: "chi-button__content" }, h("i", { class: "chi-icon icon-x", "aria-hidden": "true" })))) : null;
        const searchIcon = (h("button", { key: 'ca32fd42c45c464cbe9e7b36e9767ee5409f8e29', class: `
        chi-button -icon -flat -bg--none
        ${this.size ? `-${this.size}` : ''}
        `, onClick: () => this.eventSearch.emit(this.value), "aria-label": "Search" }, h("div", { key: 'e764043830f209fff82d13642ac87ce03fc4341f', class: "chi-button__content" }, h("i", { key: '39a46fb2ad8cdde82103405eff134901e1ed49af', class: 'chi-icon icon-search', "aria-hidden": "true" }))));
        const input = (h("div", { key: '97378aa4a655c7fc9469fc6f8ede6b1aede79c5c', class: "chi-input__wrapper -icon--right", slot: "trigger" }, searchInputElement, searchXIcon, searchIcon));
        let searchInput = isAutocomplete ? this._dropdownAutocomplete(input) : input;
        if (this.helperMessage) {
            searchInput = this._addHelperMessage(searchInput);
        }
        return searchInput;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"],
        "value": ["updateValue"],
        "state": ["stateValidation"]
    }; }
};
SearchInput.style = ChiSearchInputStyle0;

export { SearchInput as chi_search_input };
