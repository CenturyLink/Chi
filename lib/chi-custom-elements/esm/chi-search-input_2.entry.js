import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-93bc7bbf.js';
import { c as TEXT_INPUT_SIZES } from './size-9d0c9884.js';
import { C as CHI_STATES } from './states-a5be3f93.js';
import { n as DROPDOWN_CLASSES } from './classes-6227bd8c.js';
import { b as cleanUndefinedProps } from './utils-48628cb4.js';
import { v as v4 } from './v4-08967a5a.js';
import { I as ICON_COLORS } from './color-b6e4748b.js';
import { h as TEXT_INPUT_TYPES, c as CLASSES } from './constants-0e68989c.js';
import { a as addMutationObserver } from './mutationObserver-b386bd11.js';

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
        const searchInputElement = (h("input", { key: 'fe328b09d9e9fd7bc88a135e00791fe6d27ff18b', type: "search", class: `
          chi-input chi-search__input
          ${this.size ? `-${this.size}` : ''}
          ${this.state ? `-${this.state}` : ''}
          ${this._status ? `-${this._status}` : ''}
        `, placeholder: this.placeholder || '', value: this.value, name: this.name || '', disabled: this.disabled, id: this.el.id ? `${this.el.id}-control` : null, onFocus: (ev) => this._handleFocus(ev), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: (ev) => this._handleValueChange(ev), autocomplete: "off", "aria-label": "search input", readonly: this.readonly }));
        const searchXIcon = this._cleanButtonVisible ? (h("button", { class: "chi-button -icon -close -xs", onClick: this._clearInputField, "aria-label": "Clear" }, h("div", { class: "chi-button__content" }, h("i", { class: "chi-icon icon-x", "aria-hidden": "true" })))) : null;
        const searchIcon = (h("button", { key: '6f502ecf0e504428ffd7735997f35dfb40f9b5dd', class: `
        chi-button -icon -flat -bg--none
        ${this.size ? `-${this.size}` : ''}
        `, onClick: () => this.eventSearch.emit(this.value), "aria-label": "Search" }, h("div", { key: 'b5dcd25dec7912efbbb3fc6c602650117697c777', class: "chi-button__content" }, h("i", { key: '6fa6e8ce0224410ae9b37c94adc0daf3457c0b75', class: 'chi-icon icon-search', "aria-hidden": "true" }))));
        const input = (h("div", { key: 'c129dc07f36606e86a296284347f6f317ad984e6', class: "chi-input__wrapper -icon--right", slot: "trigger" }, searchInputElement, searchXIcon, searchIcon));
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

const textInputCss = "chi-text-input.sc-chi-text-input-h{display:block;width:100%}";
const ChiTextInputStyle0 = textInputCss;

const TextInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventChange = createEvent(this, "chiChange", 7);
        this.eventInput = createEvent(this, "chiInput", 7);
        this.eventFocus = createEvent(this, "chiFocus", 7);
        this.eventBlur = createEvent(this, "chiBlur", 7);
        /**
         * To define type of Text input
         */
        this.type = 'text';
        /**
         * To define size of Text input
         */
        this.size = 'md';
        /**
         * To define value of Text input
         */
        this.value = '';
        /**
         * To disable Text input
         */
        this.disabled = false;
        /**
         * To prevent the Text input value from being changed
         */
        this.readonly = false;
        /**
         * To disable Value attribute mutation
         */
        this.preventValueMutation = false;
        /**
         * To render Text Input with Spinner
         */
        this.spinner = false;
        /**
         * To show copy text icon
         */
        this.copyText = false;
    }
    stateValidation(newValue) {
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for input. If provided, valid values are: ${validValues}. `);
        }
    }
    sizeValidation(newValue) {
        const validValues = TEXT_INPUT_SIZES.join(', ');
        if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for input. If provided, valid values are: ${validValues}. `);
        }
    }
    colorValidation(newValue) {
        const validValues = ICON_COLORS.join(', ');
        if (newValue && !ICON_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for icon. If provided, valid values are: ${validValues}. `);
        }
    }
    iconLeftColorValidation(newValue) {
        this.colorValidation(newValue);
    }
    iconRightColorValidation(newValue) {
        this.colorValidation(newValue);
    }
    typeValidation(newValue) {
        const validValues = TEXT_INPUT_TYPES.join(', ');
        if (newValue && !TEXT_INPUT_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for input. If provided, valid values are: ${validValues}. `);
        }
    }
    _handleValueInput(valueChange) {
        const newValue = valueChange.target.value;
        if (!this.preventValueMutation) {
            this.value = newValue;
        }
        this.eventInput.emit(newValue);
    }
    _handleValueChange(valueChange) {
        const newValue = valueChange.target.value;
        this.eventChange.emit(newValue);
    }
    componentWillLoad() {
        this.stateValidation(this.state);
        this.iconLeftColorValidation(this.iconLeftColor);
        this.iconRightColorValidation(this.iconRightColor);
        this.sizeValidation(this.size);
        this.typeValidation(this.type);
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    getInput() {
        return (h("input", { type: this.type, class: `chi-input
          ${this.state ? `-${this.state}` : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this._status ? `-${this._status}` : ''}
          ${this.extraClass ? this.extraClass : ''}
        `, placeholder: this.placeholder || '', value: this.value, name: this.name || '', disabled: this.disabled, readonly: this.readonly, id: this.el.id ? `${this.el.id}-control` : null, onFocus: () => this.eventFocus.emit(), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: (ev) => this._handleValueChange(ev) }));
    }
    _getIconLeft() {
        return this.iconLeft && h("chi-icon", { color: this.iconLeftColor || null, icon: this.iconLeft });
    }
    _getIconRight() {
        return this.iconRight && !this.spinner && h("chi-icon", { color: this.iconRightColor || null, icon: this.iconRight });
    }
    _getSpinner() {
        var _a;
        const spinnerSizeMapping = {
            sm: 'xs',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--3',
        };
        return this.spinner && h("chi-spinner", { size: (_a = spinnerSizeMapping[this.size]) !== null && _a !== void 0 ? _a : 'sm' });
    }
    _getHelperMessage() {
        return this.helperMessage && h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    _shouldWrapInput() {
        return Boolean(this.iconLeft || this.iconRight || this.spinner || this.helperMessage || this.copyText);
    }
    _addCopyText(input) {
        const copySizeMapping = {
            xs: 'xs',
            sm: 'xs',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--3',
        };
        return (h("div", { class: `${CLASSES.FLEX} ${CLASSES.ALIGN_ITEMS_CENTER}` }, input, h("chi-copy-text", { text: this.value, disabled: this.disabled, size: copySizeMapping[this.size] })));
    }
    _addHelperMessage(input) {
        return (h(Fragment, null, input, this._getHelperMessage()));
    }
    _getWrappedInput(input) {
        const inputClasses = [
            'chi-input__wrapper',
            this.iconLeft && '-icon--left',
            this.iconRight && '-icon--right',
            this.copyText && '-flex--grow1',
        ]
            .filter(Boolean)
            .join(' ');
        input = (h("div", { class: inputClasses }, input, this._getIconLeft(), this._getIconRight(), this._getSpinner()));
        if (this.copyText) {
            input = this._addCopyText(input);
        }
        if (this.helperMessage) {
            input = this._addHelperMessage(input);
        }
        return input;
    }
    render() {
        let input = this.getInput();
        if (this._shouldWrapInput()) {
            input = this._getWrappedInput(input);
        }
        return input;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "state": ["stateValidation"],
        "size": ["sizeValidation"],
        "iconLeftColor": ["iconLeftColorValidation"],
        "iconRightColor": ["iconRightColorValidation"],
        "type": ["typeValidation"]
    }; }
};
TextInput.style = ChiTextInputStyle0;

export { SearchInput as chi_search_input, TextInput as chi_text_input };
