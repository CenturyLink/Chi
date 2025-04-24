import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { g as CHECKBOX_CLASSES, U as UTILITY_CLASSES, h as DROPDOWN_CLASSES, i as DIVIDER_CLASSES } from './classes-d4369523.js';
import { v as v4 } from './v4-a4ec28c0.js';

const DropdownSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventValueChanged = createEvent(this, "chiDropdownValueChanged", 7);
        /**
         * To set the active state of Dropdown-select
         */
        this.active = false;
        /**
         * To provide the value of base-style button as trigger of the Dropdown-select
         */
        this.button = 'Open dropdown';
        /**
         * To render a search-input in menu-header
         */
        this.search = false;
        /**
         * To render show-selected checkbox in menu-header
         */
        this.showSelected = false;
        /**
         * To apply multi select mode
         */
        this.multiple = false;
        /**
         * To disable Dropdown-select
         */
        this.disabled = false;
        this.currentItems = [];
        this.filteredItems = [];
        this.searchValue = '';
        this.showSelectedOnly = false;
        this.id = v4();
        this.currentDirtyItems = [];
        this.isSearchMode = this.search || this.showSelected;
    }
    componentDidLoad() {
        if (this.isSearchMode) {
            this.dropdownElement.retainSelection = false;
        }
        this.addSearchInputListeners();
        this.addCheckboxListeners();
    }
    addSearchInputListeners() {
        this.searchInputElement = this.el.querySelector('chi-search-input');
        if (this.searchInputElement) {
            this.handleSearchInput = (event) => {
                this.searchValue = event.detail;
                this.applyFilters();
            };
            this.handleSearchClean = () => {
                this.searchValue = '';
                this.applyFilters();
            };
            this.searchInputElement.addEventListener('chiInput', this.handleSearchInput);
            this.searchInputElement.addEventListener('chiClean', this.handleSearchClean);
        }
    }
    addCheckboxListeners() {
        this.selectOnlyCheckbox = this.el.querySelector('#checkbox-select');
        if (this.selectOnlyCheckbox) {
            this.handleCheckboxChange = (event) => {
                this.showSelectedOnly = event.detail;
                this.applyFilters();
            };
            this.selectOnlyCheckbox.addEventListener('chiChange', this.handleCheckboxChange);
        }
    }
    componentWillLoad() {
        this.setCurrentDirtyItems();
    }
    disconnectedCallback() {
        if (this.searchInputElement) {
            this.searchInputElement.removeEventListener('chiInput', this.handleSearchInput);
            this.searchInputElement.removeEventListener('chiClean', this.handleSearchClean);
        }
        if (this.selectOnlyCheckbox) {
            this.selectOnlyCheckbox.removeEventListener('chiChange', this.handleCheckboxChange);
        }
    }
    setCurrentDirtyItems() {
        var _a, _b;
        this.currentDirtyItems =
            (_b = (_a = this.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => (Object.assign(Object.assign({}, item), { id: item.id || this.id + '-' + index })))) !== null && _b !== void 0 ? _b : [];
        this.applyFilters();
    }
    resetFilters() {
        this.searchValue = '';
        this.searchInputElement && (this.searchInputElement.value = '');
        this.showSelectedOnly = false;
        this.selectOnlyCheckbox && this.selectOnlyCheckbox.removeAttribute('checked');
        this.filteredItems = [...this.currentDirtyItems];
    }
    applyFilters() {
        const searchQuery = this.searchValue || '';
        const searchLower = searchQuery.toLowerCase();
        this.filteredItems = this.currentDirtyItems.filter((item) => {
            const labelLower = item.label.toLowerCase();
            const isSearchValueFiltered = searchQuery === '' || labelLower.includes(searchLower);
            const isCheckedOnly = !this.showSelectedOnly || item.checked;
            return isSearchValueFiltered && isCheckedOnly;
        });
    }
    handleItemClick(ev, item) {
        ev.stopPropagation();
        item.checked = !item.checked;
        if (this.showSelectedOnly) {
            this.applyFilters();
        }
    }
    handleApply() {
        this.dropdownElement.hide();
        this.currentItems = this.currentDirtyItems.filter((item) => item.checked);
        this.resetFilters();
        this.eventValueChanged.emit(this.currentDirtyItems);
    }
    handleClear() {
        const checkedElements = Array.from(this.el.querySelectorAll(`${CHECKBOX_CLASSES.checkbox}[checked]`));
        checkedElements.forEach((el) => el.removeAttribute('checked'));
        this.currentDirtyItems.forEach((item) => (item.checked = false));
        this.showSelectedOnly = false;
        this.applyFilters();
        this.eventValueChanged.emit(this.currentDirtyItems);
    }
    getButtonContent() {
        return this.currentItems.length ? `(${this.currentItems.length}) ${this.button}` : this.button;
    }
    renderItems() {
        if (!this.isSearchMode || !this.currentDirtyItems.length)
            return null;
        if (!this.filteredItems.length) {
            return this.renderNoResults();
        }
        return this.renderFilteredItems();
    }
    renderNoResults() {
        return (h("div", { slot: "menu", class: `${DROPDOWN_CLASSES.MENU_ITEM} ${UTILITY_CLASSES.TYPOGRAPHY.TEXT_ITALIC}` }, "No results"));
    }
    renderFilteredItems() {
        return this.filteredItems.map((item) => this.renderCheckbox(item));
    }
    renderCheckbox(item) {
        return (h("chi-checkbox", { label: item.label, class: DROPDOWN_CLASSES.MENU_ITEM, checked: item.checked || null, name: `${this.id}-group`, id: item.id, key: item.id, slot: "menu", onChiChange: (ev) => this.handleItemClick(ev, item) }));
    }
    renderSearchModeFooter() {
        if (!this.filteredItems.length)
            return null;
        const buttonClasses = [
            UTILITY_CLASSES.DISPLAY.FLEX,
            UTILITY_CLASSES.JUSTIFY.END,
            UTILITY_CLASSES.PADDING[1],
            UTILITY_CLASSES.PADDING.RIGHT[2],
        ].join(' ');
        return [
            h("div", { slot: "menu-footer", class: DIVIDER_CLASSES.DIVIDER }),
            h("div", { slot: "menu-footer", class: buttonClasses }, h("chi-button", { size: "xs", class: UTILITY_CLASSES.MARGIN.RIGHT[1], onClick: () => this.handleClear() }, "Clear"), h("chi-button", { size: "xs", color: "primary", onClick: () => this.handleApply() }, "Apply")),
        ];
    }
    renderSearchModeElements() {
        if (!this.isSearchMode)
            return null;
        return [
            this.search && h("chi-search-input", { placeholder: "Search", slot: "menu-header" }),
            this.showSelected && (h("chi-checkbox", { class: DROPDOWN_CLASSES.MENU_ITEM, slot: "menu-header", id: "checkbox-select", label: "Show selected only" })),
            h("div", { class: "chi-divider", slot: "menu-header" }),
        ].filter(Boolean);
    }
    resetDirtyItems() {
        this.resetFilters();
        const selectedItems = this.currentItems.map((item) => item.id);
        this.currentDirtyItems.forEach((item) => {
            const checkboxElement = document.getElementById(item.id);
            const isSelected = selectedItems.includes(item.id);
            item.checked = isSelected;
            checkboxElement &&
                (isSelected ? checkboxElement.setAttribute('checked', '') : checkboxElement.removeAttribute('checked'));
        });
    }
    renderSlots() {
        return [h("slot", { name: "menu-header" }), h("slot", { name: "menu" }), h("slot", { name: "menu-footer" })];
    }
    render() {
        const baseProps = {
            id: this.id,
            active: this.active,
            disabled: this.disabled,
            size: this.size,
            state: this.state,
            visibleItems: this.visibleItems,
            helperMessage: this.helperMessage,
            button: this.getButtonContent(),
        };
        const searchModePropsAndEvents = {
            preventAutoHide: this.isSearchMode,
            preventItemSelected: this.isSearchMode,
            'select-mode': this.isSearchMode || this.multiple ? 'multi' : 'single',
            onChiDropdownHide: () => this.isSearchMode && this.resetDirtyItems(),
            onChiDropdownValueChanged: (ev) => this.isSearchMode && ev.stopPropagation(),
        };
        return (h("chi-dropdown", Object.assign({ key: 'dab6939fae57fb9e6236ff3093e83b13a54de743' }, baseProps, searchModePropsAndEvents, { ref: (el) => (this.dropdownElement = el) }), this.renderSearchModeElements(), this.renderItems(), this.renderSearchModeFooter(), this.renderSlots()));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "items": ["setCurrentDirtyItems"]
    }; }
};

export { DropdownSelect as chi_dropdown_select };
