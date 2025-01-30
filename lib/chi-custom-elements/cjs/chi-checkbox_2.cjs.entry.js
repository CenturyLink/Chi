'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');
const classes = require('./classes-2a12a2f5.js');
const mutationObserver = require('./mutationObserver-7cc6af59.js');
const v4 = require('./v4-d3836773.js');
const popper = require('./popper-a24029a2.js');
const positions = require('./positions-97fc6bdc.js');
const utils = require('./utils-7f208c7f.js');
const types = require('./types-d1afcd1d.js');
const states = require('./states-47b0ca3a.js');

const Checkbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiChange = index.createEvent(this, "chiChange", 7);
        this.label = undefined;
        this.name = undefined;
        this.checked = undefined;
        this.indeterminate = undefined;
        this.disabled = undefined;
        this.required = false;
        this.state = undefined;
        this._status = undefined;
        this.infoIcon = false;
        this.infoIconMessage = '';
    }
    connectedCallback() {
        var _a;
        this.id = (_a = this.el.getAttribute('id')) !== null && _a !== void 0 ? _a : v4.v4();
        mutationObserver.addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.helpButtonId = `help-button-${v4.v4()}`;
        this.helpPopoverId = `help-popover-${v4.v4()}`;
    }
    componentDidLoad() {
        this._updateIndeterminate();
    }
    toggle(ev) {
        this.checked = ev.target.checked;
        this.indeterminate = false;
        this._emitChange(this.checked);
    }
    _emitChange(checked) {
        this.chiChange.emit(checked);
    }
    _updateIndeterminate() {
        this.input.indeterminate = this.indeterminate;
    }
    updateIndeterminate(newValue, oldValue) {
        if (newValue !== oldValue) {
            this._updateIndeterminate();
        }
    }
    toggleHelpPopover() {
        this.el.querySelector(`#${this.helpPopoverId}`).toggle();
    }
    _getInfoIcon() {
        return this.infoIcon ? (index.h("div", { class: `${classes.LABEL_CLASSES.HELP} ${classes.UTILITY_CLASSES.DISPLAY.BLOCK}` }, index.h("chi-button", { id: this.helpButtonId, onChiClick: () => this.toggleHelpPopover(), type: "icon", size: "xs", variant: "flat", "alternative-text": "Help" }, index.h("chi-icon", { icon: "circle-info-outline", size: "xs" })), index.h("chi-popover", { id: this.helpPopoverId, position: "top", variant: "text", arrow: true, reference: `#${this.helpButtonId}` }, this.infoIconMessage))) : null;
    }
    _getInput() {
        return (index.h("input", { class: `
          ${classes.CHECKBOX_CLASSES.INPUT}
          ${this.indeterminate && classes.CHECKBOX_CLASSES.INDETERMINATE}
          ${this._status ? `-${this._status}` : ''}
        `, checked: this.checked, disabled: this.disabled, id: `${this.id}-control`, name: this.name, ref: (el) => (this.input = el), onChange: (ev) => this.toggle(ev), type: "checkbox" }));
    }
    _getLabel() {
        const infoIcon = this._getInfoIcon();
        const requiredField = this.required ? (index.h("abbr", { class: "chi-label__required", "aria-label": "Required field" }, "*")) : null;
        return (index.h("label", { class: `${classes.CHECKBOX_CLASSES.LABEL} ${this.state ? `-${this.state}` : ''}`, htmlFor: `${this.id}-control` }, this.label, index.h("div", { class: classes.SR_ONLY }, "Select ", this.label || this.name, " ", this.id), requiredField, infoIcon));
    }
    render() {
        const input = this._getInput();
        const label = this._getLabel();
        return (index.h("div", { key: '26b36f0c334fcdfc3bccd6dd75f52ea4de423c0a', class: classes.CHECKBOX_CLASSES.checkbox }, input, label, index.h("slot", { key: '7ea83b0572b87fc21789340c2f47e9b7fb31ead8', name: "chi-checkbox__help" })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "indeterminate": ["updateIndeterminate"]
    }; }
};

const dropdownCss = "chi-dropdown.sc-chi-dropdown-h{display:-ms-flexbox;display:flex}";
const ChiDropdownStyle0 = dropdownCss;

const Dropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.eventHide = index.createEvent(this, "chiDropdownHide", 7);
        this.eventShow = index.createEvent(this, "chiDropdownShow", 7);
        this.eventKeyDown = index.createEvent(this, "chiDropdownKeyDown", 7);
        this.eventItemSelected = index.createEvent(this, "chiDropdownItemSelected", 7);
        this.eventItemDeselected = index.createEvent(this, "chiDropdownItemDeselected", 7);
        this.eventSelectionReset = index.createEvent(this, "chiDropdownSelectionReset", 7);
        this.eventValueChanged = index.createEvent(this, "chiDropdownValueChanged", 7);
        this._componentLoaded = false;
        this.id = v4.v4();
        this._currentDirtyItems = [];
        this.handlerClick = (e) => {
            if (e.target !== document.body &&
                e.target !== null &&
                !utils.contains(this.el, e.target) &&
                !utils.contains(this._referenceElement, e.target) &&
                !this.preventAutoHide &&
                this.active) {
                this.hide();
            }
        };
        this.handlerSelectedMenuItem = (ev) => {
            this._updateValue(ev.target);
            if (this.retainSelection) {
                if (this.selectMode !== 'multi') {
                    this.hide();
                }
                this.setActiveClassOnMenuItem();
            }
        };
        this.handlerClickTrigger = () => {
            this.toggle();
        };
        this.handlerMouseEnter = () => {
            if (this.hover) {
                this.show();
            }
        };
        this.handlerMouseLeave = () => {
            if (this.hover) {
                this.hide();
            }
        };
        this.active = false;
        this.description = undefined;
        this.fluid = undefined;
        this.hover = undefined;
        this.button = undefined;
        this.icon = undefined;
        this.iconTooltipMessage = undefined;
        this.color = undefined;
        this.variant = undefined;
        this.size = undefined;
        this.uppercase = false;
        this.disabled = false;
        this.animateChevron = undefined;
        this.position = undefined;
        this.fontWeight = undefined;
        this.reference = undefined;
        this.preventAutoHide = undefined;
        this.preventItemSelected = false;
        this.visibleItems = undefined;
        this.retainSelection = undefined;
        this.selectMode = undefined;
        this.state = undefined;
        this.helperMessage = undefined;
        this.items = undefined;
        this._menuHeader = undefined;
        this._menuFooter = undefined;
        this._forceRender = undefined;
        this._value = [];
        this._selectAllState = undefined;
        this._currentItems = [];
    }
    //# region Lifecycle hooks
    connectedCallback() {
        const triggerSlotElement = this.el.querySelector('[slot="trigger"]');
        this._customTrigger = !!triggerSlotElement;
        if (this._customTrigger) {
            this._referenceElement = triggerSlotElement;
        }
        else if (this.reference) {
            const reference = document.querySelector(this.reference);
            if (reference) {
                this._referenceElement = reference;
            }
        }
    }
    componentDidLoad() {
        this._configureDropdownPopper();
        this._componentLoaded = true;
        this._addEventListeners();
        this.setFixedWidth();
        this.setMenuHeight();
        mutationObserver.addMutationObserver.call(this, this.onMenuItemsChange, {
            childList: true,
            subtree: true,
        });
    }
    componentWillLoad() {
        this._getDropdownMenuSlots();
        this.validateSelectMode(this.selectMode);
        this._setSelectModeProps();
        this._updateFluidClass();
    }
    disconnectedCallback() {
        this._removeEventListeners();
    }
    //#endregion
    //#region PropsWatchers and validations
    positionValidation(newValue) {
        if (newValue && !positions.CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid position for Dropdown. Valid values are ${positions.CARDINAL_EXTENDED_POSITIONS.join(', ')}.`);
        }
        if (this._componentLoaded) {
            this._configureDropdownPopper();
        }
    }
    updateActive(newActiveState, oldActiveState) {
        if (newActiveState !== oldActiveState) {
            if (newActiveState) {
                this.setDisplay('block');
            }
            else {
                this.setDisplay('none');
            }
        }
    }
    stateValidation(newValue) {
        const validValues = states.CHI_STATES.join(', ');
        if (newValue && !states.CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for input. If provided, valid values are: ${validValues}. `);
        }
    }
    /**
     * Validates select mode values and sets default value as single if property is used without value.
     * E.g. <chi-dropdown select-mode> <--> <chi-dropdown select-mode="single">
     */
    validateSelectMode(selectMode) {
        if (selectMode === '') {
            this.selectMode = 'single';
        }
        else if (selectMode && !types.DROPDOWN_SELECT_MODES.includes(selectMode)) {
            throw new Error(`${selectMode} is not a valid select mode for Dropdown. Valid values are ${types.DROPDOWN_SELECT_MODES.join(', ')}.`);
        }
    }
    _setSelectModeProps() {
        if (this.selectMode) {
            this.retainSelection = true;
            this.fluid = true;
        }
        if (this._isSelectMulti()) {
            this.preventAutoHide = true;
            this.preventItemSelected = true;
            this.fluid = false;
            this.retainSelection = false;
            this._updateMultiItems();
            this._updateSelectAllCheckbox();
        }
    }
    _updateFluidClass() {
        this._fluidClass = this.fluid ? classes.FLUID_CLASS : '';
    }
    _updateMultiItems() {
        var _a, _b, _c, _d;
        this._currentItems =
            (_b = (_a = this.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => (Object.assign(Object.assign({}, item), { id: item.id || this.id + '-' + index })))) !== null && _b !== void 0 ? _b : [];
        this._currentDirtyItems =
            (_d = (_c = this._currentItems) === null || _c === void 0 ? void 0 : _c.map((item) => (Object.assign({}, item)))) !== null && _d !== void 0 ? _d : [];
    }
    //#endregion
    async updatePopper() {
        this._forceRender = !this._forceRender;
    }
    handleKeyDown(event) {
        const allowedKeys = ['ArrowDown', 'ArrowUp'];
        if (!allowedKeys.includes(event.key) || !this.active || !utils.contains(this.el, event.target)) {
            return;
        }
        event.preventDefault();
        this._focusMenuItem(event.key);
        this.eventKeyDown.emit();
    }
    _configureDropdownPopper() {
        if (!this._referenceElement) {
            if (this._popper) {
                this._popper.destroy();
                this._popper = null;
            }
            return;
        }
        this._initializePopper();
        this._popper.update();
    }
    _triggerElement(element) {
        var _a;
        const tooltipMessage = (_a = this.iconTooltipMessage) === null || _a === void 0 ? void 0 : _a.trim();
        return this.icon && tooltipMessage ? (index.h("chi-tooltip", { wrapper: true, message: tooltipMessage }, element)) : (element);
    }
    _initializePopper() {
        this._popper = new popper.Popper(this._referenceElement, this._dropdownMenuElement, {
            modifiers: {
                applyStyle: { enabled: true },
                preventOverflow: {
                    boundariesElement: 'window',
                },
            },
            removeOnDestroy: true,
            placement: this.position || 'bottom',
        });
    }
    _getDropdownMenuSlots() {
        const isSelectMulti = this._isSelectMulti();
        const menuHeader = isSelectMulti || this.el.querySelector('[slot=menu-header]');
        const menuFooter = isSelectMulti || this.el.querySelector('[slot=menu-footer]');
        if (menuHeader) {
            this._menuHeader = true;
        }
        if (menuFooter) {
            this._menuFooter = true;
        }
    }
    getPadding(direction) {
        return parseInt(getComputedStyle(this._dropdownMenuElement).getPropertyValue(`padding-${direction}`), 10);
    }
    getTotalElementHeight(element) {
        const computedStyle = getComputedStyle(element);
        const styles = ['height', 'margin-top', 'margin-bottom'];
        return styles.reduce((totalHeight, prop) => totalHeight + parseInt(computedStyle.getPropertyValue(prop), 10), 0);
    }
    onMenuItemsChange() {
        this.setMenuHeight();
        this._addClickEventListeners();
        this.setActiveClassOnMenuItem();
    }
    setMenuHeight() {
        if (this.visibleItems) {
            const menuItems = (this._dropdownMenuItemsWrapper ? this._dropdownMenuItemsWrapper.children : this._dropdownMenuElement.children);
            const itemsToShow = menuItems.length < this.visibleItems ? menuItems.length : this.visibleItems;
            let newHeight = 0;
            for (let i = 0; i < itemsToShow; i++) {
                newHeight += this.getTotalElementHeight(menuItems[i]);
            }
            if (this._menuFooter || this._menuHeader) {
                this._dropdownMenuItemsWrapper.style.height = `${newHeight}px`;
            }
            else {
                const padding = this.getPadding('top') + this.getPadding('bottom');
                this._dropdownMenuElement.style.height = `${newHeight + padding}px`;
            }
        }
    }
    setActiveClassOnMenuItem() {
        const menuItems = this._getDropdownMenuItems();
        menuItems.forEach((item) => {
            const isActive = this._value.includes(item.textContent);
            item.classList.toggle(classes.ACTIVE_CLASS, isActive);
        });
    }
    setFixedWidth() {
        if (this.retainSelection && this._referenceElement && !this.fluid) {
            const button = this._getButtonElement();
            button.style.width = `${this._referenceElement.offsetWidth}px`;
            button.classList.add(classes.UTILITY_CLASSES.DISPLAY.FLEX, classes.UTILITY_CLASSES.JUSTIFY.BETWEEN);
        }
    }
    setDisplay(display) {
        this._dropdownMenuElement.style.display = display;
    }
    emitHide() {
        this.eventHide.emit();
    }
    emitShow() {
        this.eventShow.emit();
    }
    /**
     * Either adds or removes a selected item from the value list.
     * Multiple values are only allowed if selectMode is multi.
     */
    _updateValue(target) {
        target = (target.closest(`.${classes.DROPDOWN_CLASSES.MENU_ITEM}`) || target);
        const value = target.innerText;
        if (this.selectMode !== 'multi') {
            this._value = [value];
            this.eventItemSelected.emit(value);
            return;
        }
        const valueIndex = this._value.indexOf(value);
        if (valueIndex === -1) {
            this._value = [...this._value, value];
            this.eventItemSelected.emit(value);
        }
        else {
            this._value = this._value.filter((item) => item !== value);
            this.eventItemDeselected.emit(value);
        }
        this.eventValueChanged.emit(this._value);
    }
    /**
     * Hides the dropdown
     */
    async hide() {
        this.setDisplay('none');
        this.active = false;
        this.emitHide();
    }
    /**
     * Shows the dropdown
     */
    async show() {
        this.setDisplay('block');
        this.active = true;
        if (this._popper) {
            this._popper.update();
        }
        this.emitShow();
    }
    /**
     * Toggles active state (show/hide)
     */
    async toggle() {
        if (this.active) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * Resets selection
     */
    async resetSelection() {
        const menuItems = this._getDropdownMenuItems();
        this._value = [];
        menuItems.forEach((item) => {
            item.classList.remove(classes.ACTIVE_CLASS);
        });
        this.eventSelectionReset.emit();
    }
    _focusMenuItem(keyCode) {
        const menuItems = this._getDropdownMenuItems();
        const focusedElement = document.activeElement;
        const currentIndex = menuItems.indexOf(focusedElement);
        let index = keyCode === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1;
        if (!menuItems.includes(focusedElement)) {
            const startIndex = keyCode === 'ArrowUp' ? menuItems.length - 1 : 0;
            return menuItems[startIndex].focus();
        }
        if (index === -1) {
            index = menuItems.length - 1;
        }
        else if (index === menuItems.length) {
            index = 0;
        }
        menuItems[index].focus();
    }
    _isSelectMulti() {
        var _a;
        return Boolean(this.selectMode === 'multi' && ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length));
    }
    _getDropdownMenuItems() {
        let children = this._dropdownMenuElement.children;
        if (this._dropdownMenuItemsWrapper) {
            children = this._dropdownMenuItemsWrapper.children;
        }
        return Array.from(children).filter((item) => item.classList.contains(classes.DROPDOWN_CLASSES.MENU_ITEM));
    }
    _getButtonElement() {
        return this._referenceElement.querySelector('button');
    }
    _addEventListeners() {
        document.body.addEventListener('click', this.handlerClick.bind(this));
        document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
        if (this.preventItemSelected)
            return;
        this._addClickEventListeners();
    }
    _removeEventListeners() {
        const menuItems = this._getDropdownMenuItems();
        document.body.removeEventListener('click', this.handlerClick);
        document.body.removeEventListener('keydown', this.handleKeyDown);
        if (this.preventItemSelected)
            return;
        menuItems.forEach((item) => {
            item.removeEventListener('click', this.handlerSelectedMenuItem);
        });
    }
    _addClickEventListeners() {
        const menuItems = this._getDropdownMenuItems();
        menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach((item) => {
            item.addEventListener('click', this.handlerSelectedMenuItem);
        });
    }
    _getButtonContent() {
        let buttonContent = this.button;
        const multiItemsSelected = this._currentItems.filter((item) => item.checked).length;
        if (this.icon) {
            buttonContent = index.h("chi-icon", { icon: this.icon });
        }
        else if (multiItemsSelected) {
            buttonContent = `(${multiItemsSelected}) ${buttonContent}`;
        }
        else if (this.retainSelection && this._value.length) {
            buttonContent = index.h("span", { class: classes.UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE }, this._value.join(' ; '));
        }
        return buttonContent;
    }
    _getHelperMessage() {
        return this.helperMessage && index.h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    /**
     * Generates trigger button content, either default button text, selected value or icon
     */
    renderTrigger() {
        var _a, _b, _c;
        const buttonContent = this._getButtonContent();
        const color = (_a = this.color) !== null && _a !== void 0 ? _a : '';
        const variant = (_b = this.variant) !== null && _b !== void 0 ? _b : '';
        const size = (_c = this.size) !== null && _c !== void 0 ? _c : '';
        const type = this.icon ? 'icon' : '';
        const isNotCustomTrigger = this.button || this.icon;
        const customTriggerElement = this._customTrigger ? index.h("slot", { name: "trigger" }) : null;
        const renderedButton = (index.h("chi-button", { onChiClick: this.handlerClickTrigger, onChiMouseEnter: this.handlerMouseEnter, fluid: this.fluid || !!this.helperMessage, "extra-class": this.getExtraClassForTriggerButton(), alternativeText: this.icon, color: color, variant: variant, size: size, uppercase: this.uppercase, disabled: this.disabled, type: type, ref: (ref) => (this._referenceElement = ref) }, buttonContent));
        return isNotCustomTrigger ? this._triggerElement(renderedButton) : customTriggerElement;
    }
    getExtraClassForTriggerButton() {
        return [
            classes.DROPDOWN_CLASSES.TRIGGER,
            this.fontWeight && `-text--${this.fontWeight}`,
            this.active && classes.ACTIVE_CLASS,
            this.animateChevron && classes.ANIMATE_CLASS,
            this.icon && classes.DROPDOWN_CLASSES.ICON,
            this.selectMode && classes.DROPDOWN_CLASSES.SELECT_MODE,
            this.state && `-b--${this.state}`,
        ]
            .filter(Boolean)
            .join(' ');
    }
    renderDropdownMenuHeader(isMultiItems) {
        const headerContent = isMultiItems ? this.renderSelectMultiHeaderContent() : index.h("slot", { name: "menu-header" });
        return (this._menuHeader && (index.h("div", { class: `${classes.DROPDOWN_CLASSES.MENU_HEADER} ${classes.UTILITY_CLASSES.MARGIN.BOTTOM[1]}` }, headerContent)));
    }
    renderDropdownMenuFooter(isMultiItems) {
        const footerContent = isMultiItems ? this.renderSelectMultiFooterContent() : index.h("slot", { name: "menu-footer" });
        return (this._menuFooter && (index.h("div", { class: `${classes.DROPDOWN_CLASSES.MENU_FOOTER} ${classes.UTILITY_CLASSES.MARGIN.TOP[1]}` }, footerContent)));
    }
    renderDropdownMenuItems(isMultiItems) {
        const menuItems = isMultiItems ? this.renderSelectMultiItems() : index.h("slot", { name: "menu" });
        return this.visibleItems && (this._menuFooter || this._menuHeader) ? (index.h("div", { class: classes.DROPDOWN_CLASSES.MENU_ITEMS_WRAPPER, ref: (ref) => (this._dropdownMenuItemsWrapper = ref) }, menuItems)) : (menuItems);
    }
    renderMenu() {
        const isMultiItems = this._isSelectMulti();
        return (index.h("div", { class: `
          ${classes.DROPDOWN_CLASSES.MENU}
          ${classes.UTILITY_CLASSES.Z_INDEX.Z_10}
          ${this.active ? classes.ACTIVE_CLASS : ''}
          ${this._fluidClass}
          ${this.description ? classes.LIST_CLASS : ''}`, ref: (ref) => (this._dropdownMenuElement = ref) }, this.renderDropdownMenuHeader(isMultiItems), this.renderDropdownMenuItems(isMultiItems), this.renderDropdownMenuFooter(isMultiItems)));
    }
    //#region SelectModeMulti
    renderSelectMultiHeaderContent() {
        const indeterminate = this._selectAllState === 'indeterminate';
        const checked = !!this._selectAllState;
        return (index.h("div", { class: classes.UTILITY_CLASSES.PADDING.X[1] }, index.h("div", { class: classes.UTILITY_CLASSES.PADDING.LEFT[1] }, index.h("chi-checkbox", { label: "Select all", checked: checked, indeterminate: indeterminate, onChiChange: () => this._onMultiSelectAllChanged() })), index.h("div", { class: classes.DIVIDER_CLASSES.DIVIDER })));
    }
    renderSelectMultiFooterContent() {
        const buttonClasses = [
            classes.UTILITY_CLASSES.DISPLAY.FLEX,
            classes.UTILITY_CLASSES.JUSTIFY.END,
            classes.UTILITY_CLASSES.PADDING[1],
            classes.UTILITY_CLASSES.PADDING.RIGHT[2],
        ].join(' ');
        return [
            index.h("div", { class: classes.DIVIDER_CLASSES.DIVIDER }),
            index.h("div", { class: buttonClasses }, index.h("chi-button", { size: "xs", class: classes.UTILITY_CLASSES.MARGIN.RIGHT[1], onClick: () => this.onSelectMultiClear() }, "Clear"), index.h("chi-button", { size: "xs", color: "primary", onClick: () => this.onSelectMultiApply() }, "Apply")),
        ];
    }
    renderSelectMultiItems() {
        return this._currentDirtyItems.map((item) => (index.h("chi-checkbox", { label: item.label, class: classes.DROPDOWN_CLASSES.MENU_ITEM, checked: item.checked || null, name: `${this.id}-group`, id: item.id, onChiChange: (ev) => this._selectMultiItemClicked(ev, item) })));
    }
    onSelectMultiApply() {
        this.hide();
        this._currentItems = this._currentDirtyItems;
        this._currentDirtyItems = this._currentItems.map((item) => (Object.assign({}, item)));
        this.onMultiItemsChanged();
    }
    onSelectMultiClear() {
        this._clearMultiItemsSelection();
        this._currentItems = this._currentDirtyItems.map((item) => (Object.assign({}, item)));
        this.onMultiItemsChanged();
    }
    onMultiItemsChanged() {
        this.eventValueChanged.emit(this._currentItems);
    }
    _clearMultiItemsSelection() {
        const checkedElements = Array.from(this.el.querySelectorAll('chi-checkbox[checked]'));
        this._currentDirtyItems.forEach((item) => (item.checked = false));
        checkedElements.forEach((el) => el.removeAttribute('checked'));
        this._updateSelectAllCheckbox();
    }
    _selectAllMultiItems() {
        this._currentDirtyItems.forEach((item) => (item.checked = true));
        this._updateSelectAllCheckbox();
    }
    _selectMultiItemClicked(ev, item) {
        ev.stopPropagation();
        item.checked = !item.checked;
        this._updateSelectAllCheckbox();
    }
    _onMultiSelectAllChanged() {
        if (this._selectAllState) {
            this._clearMultiItemsSelection();
        }
        else {
            this._selectAllMultiItems();
        }
    }
    _updateSelectAllCheckbox() {
        const itemsSelected = this._currentDirtyItems.filter((item) => item.checked).length;
        const indeterminate = itemsSelected && itemsSelected < this._currentDirtyItems.length;
        const checked = itemsSelected === this._currentDirtyItems.length;
        this._selectAllState = indeterminate ? 'indeterminate' : checked;
    }
    //#endregion
    //#region Render
    render() {
        const trigger = this.renderTrigger();
        const menu = this.renderMenu();
        return trigger ? (index.h("div", { class: `
        ${classes.DROPDOWN_CLASSES.DROPDOWN}
        ${this.active ? classes.ACTIVE_CLASS : ''}
        ${this._fluidClass}`, onMouseLeave: this.handlerMouseLeave }, trigger, this.helperMessage && this._getHelperMessage(), menu)) : (menu);
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "position": ["positionValidation"],
        "active": ["updateActive"],
        "state": ["stateValidation"],
        "selectMode": ["_setSelectModeProps"],
        "fluid": ["_updateFluidClass"],
        "items": ["_updateMultiItems"]
    }; }
};
Dropdown.style = ChiDropdownStyle0;

exports.chi_checkbox = Checkbox;
exports.chi_dropdown = Dropdown;
