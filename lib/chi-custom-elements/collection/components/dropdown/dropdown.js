import { h } from "@stencil/core";
import Popper from "popper.js";
import { ACTIVE_CLASS, ANIMATE_CLASS, DROPDOWN_CLASSES, LIST_CLASS, FLUID_CLASS, UTILITY_CLASSES, DIVIDER_CLASSES, } from "../../constants/classes";
import { CARDINAL_EXTENDED_POSITIONS } from "../../constants/positions";
import { contains } from "../../utils/utils";
import { DROPDOWN_SELECT_MODES } from "../../constants/types";
import { addMutationObserver } from "../../utils/mutationObserver";
import { CHI_STATES } from "../../constants/states";
import { v4 as uuid4 } from "uuid";
export class Dropdown {
    constructor() {
        /**
         * To set the state of Dropdown
         */
        this.active = false;
        /**
         *  to render a button with uppercase text.
         */
        this.uppercase = false;
        /**
         *  to disable chi-button.
         */
        this.disabled = false;
        /**
         * To prevent emitting the event chiDropdownItemSelected when an item is clicked
         */
        this.preventItemSelected = false;
        this._value = [];
        this._currentItems = [];
        this._componentLoaded = false;
        this.id = uuid4();
        this._currentDirtyItems = [];
        this.handlerClick = (e) => {
            if (e.target !== document.body &&
                e.target !== null &&
                !contains(this.el, e.target) &&
                !contains(this._referenceElement, e.target) &&
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
        addMutationObserver.call(this, this.onMenuItemsChange, {
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
        if (newValue && !CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid position for Dropdown. Valid values are ${CARDINAL_EXTENDED_POSITIONS.join(', ')}.`);
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
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
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
        else if (selectMode && !DROPDOWN_SELECT_MODES.includes(selectMode)) {
            throw new Error(`${selectMode} is not a valid select mode for Dropdown. Valid values are ${DROPDOWN_SELECT_MODES.join(', ')}.`);
        }
    }
    _setSelectModeProps() {
        if (this.selectMode) {
            this.retainSelection = true;
            this.fluid = true;
            this.animateChevron = true;
        }
        if (this._isSelectMulti()) {
            this.preventAutoHide = true;
            this.preventItemSelected = true;
            this.retainSelection = false;
            this._updateMultiItems();
        }
    }
    _updateFluidClass() {
        this._fluidClass = this.fluid ? FLUID_CLASS : '';
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
        if (!allowedKeys.includes(event.key) || !this.active || !contains(this.el, event.target)) {
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
        return this.icon && tooltipMessage ? (h("chi-tooltip", { wrapper: true, message: tooltipMessage }, element)) : (element);
    }
    _initializePopper() {
        this._popper = new Popper(this._referenceElement, this._dropdownMenuElement, {
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
        const menuHeader = this.el.querySelector('[slot=menu-header]');
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
            item.classList.toggle(ACTIVE_CLASS, isActive);
        });
    }
    setFixedWidth() {
        if (this.retainSelection && this._referenceElement && !this.fluid) {
            const button = this._getButtonElement();
            button.style.width = `${this._referenceElement.offsetWidth}px`;
            button.classList.add(UTILITY_CLASSES.DISPLAY.FLEX, UTILITY_CLASSES.JUSTIFY.BETWEEN);
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
        target = (target.closest(`.${DROPDOWN_CLASSES.MENU_ITEM}`) || target);
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
            item.classList.remove(ACTIVE_CLASS);
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
        return Array.from(children).filter((item) => item.classList.contains(DROPDOWN_CLASSES.MENU_ITEM));
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
            buttonContent = h("chi-icon", { icon: this.icon });
        }
        else if (multiItemsSelected) {
            buttonContent = `(${multiItemsSelected}) ${buttonContent}`;
        }
        else if (this.retainSelection && this._value.length) {
            buttonContent = h("span", { class: UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE }, this._value.join(' ; '));
        }
        return buttonContent;
    }
    _getHelperMessage() {
        return this.helperMessage && h("chi-helper-message", { state: this.state }, this.helperMessage);
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
        const customTriggerElement = this._customTrigger ? h("slot", { name: "trigger" }) : null;
        const renderedButton = (h("chi-button", { onChiClick: this.handlerClickTrigger, onChiMouseEnter: this.handlerMouseEnter, fluid: this.fluid || !!this.helperMessage, "extra-class": this.getExtraClassForTriggerButton(), alternativeText: this.icon, color: color, variant: variant, size: size, uppercase: this.uppercase, disabled: this.disabled, type: type, ref: (ref) => (this._referenceElement = ref) }, buttonContent));
        return isNotCustomTrigger ? this._triggerElement(renderedButton) : customTriggerElement;
    }
    getExtraClassForTriggerButton() {
        return [
            DROPDOWN_CLASSES.TRIGGER,
            this.fontWeight && `-text--${this.fontWeight}`,
            this.active && ACTIVE_CLASS,
            this.animateChevron && ANIMATE_CLASS,
            this.icon && DROPDOWN_CLASSES.ICON,
            this.selectMode && DROPDOWN_CLASSES.SELECT_MODE,
            this.state && `-b--${this.state}`,
        ]
            .filter(Boolean)
            .join(' ');
    }
    renderDropdownMenuHeader() {
        const headerContent = h("slot", { name: "menu-header" });
        return (this._menuHeader && (h("div", { class: `${DROPDOWN_CLASSES.MENU_HEADER} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]}` }, headerContent)));
    }
    renderDropdownMenuFooter(isMultiItems) {
        const footerContent = isMultiItems ? this.renderSelectMultiFooterContent() : h("slot", { name: "menu-footer" });
        return (this._menuFooter && (h("div", { class: `${DROPDOWN_CLASSES.MENU_FOOTER} ${UTILITY_CLASSES.MARGIN.TOP[1]}` }, footerContent)));
    }
    renderDropdownMenuItems(isMultiItems) {
        const menuItems = isMultiItems ? this.renderSelectMultiItems() : h("slot", { name: "menu" });
        return this.visibleItems && (this._menuFooter || this._menuHeader) ? (h("div", { class: DROPDOWN_CLASSES.MENU_ITEMS_WRAPPER, ref: (ref) => (this._dropdownMenuItemsWrapper = ref) }, menuItems)) : (menuItems);
    }
    renderMenu() {
        const isMultiItems = this._isSelectMulti();
        return (h("div", { class: `
          ${DROPDOWN_CLASSES.MENU}
          ${UTILITY_CLASSES.Z_INDEX.Z_10}
          ${this.active ? ACTIVE_CLASS : ''}
          ${this._fluidClass}
          ${this.description ? LIST_CLASS : ''}`, ref: (ref) => (this._dropdownMenuElement = ref) }, this.renderDropdownMenuHeader(), this.renderDropdownMenuItems(isMultiItems), this.renderDropdownMenuFooter(isMultiItems)));
    }
    //#region SelectModeMulti
    renderSelectMultiFooterContent() {
        const buttonClasses = [
            UTILITY_CLASSES.DISPLAY.FLEX,
            UTILITY_CLASSES.JUSTIFY.END,
            UTILITY_CLASSES.PADDING[1],
            UTILITY_CLASSES.PADDING.RIGHT[2],
        ].join(' ');
        return [
            h("div", { class: DIVIDER_CLASSES.DIVIDER }),
            h("div", { class: buttonClasses }, h("chi-button", { size: "xs", class: UTILITY_CLASSES.MARGIN.RIGHT[1], onClick: () => this.onSelectMultiClear() }, "Clear"), h("chi-button", { size: "xs", color: "primary", onClick: () => this.onSelectMultiApply() }, "Apply")),
        ];
    }
    renderSelectMultiItems() {
        return this._currentDirtyItems.map((item) => (h("chi-checkbox", { label: item.label, class: DROPDOWN_CLASSES.MENU_ITEM, checked: item.checked || null, name: `${this.id}-group`, id: item.id, onChiChange: (ev) => this._selectMultiItemClicked(ev, item) })));
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
    }
    _selectMultiItemClicked(ev, item) {
        ev.stopPropagation();
        item.checked = !item.checked;
    }
    //#endregion
    //#region Render
    render() {
        const trigger = this.renderTrigger();
        const menu = this.renderMenu();
        return trigger ? (h("div", { class: `
        ${DROPDOWN_CLASSES.DROPDOWN}
        ${this.active ? ACTIVE_CLASS : ''}
        ${this._fluidClass}`, onMouseLeave: this.handlerMouseLeave }, trigger, this.helperMessage && this._getHelperMessage(), menu)) : (menu);
    }
    static get is() { return "chi-dropdown"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown.css"]
        };
    }
    static get properties() {
        return {
            "active": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set the state of Dropdown"
                },
                "getter": false,
                "setter": false,
                "attribute": "active",
                "reflect": true,
                "defaultValue": "false"
            },
            "description": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To enable the description of Dropdown menu item"
                },
                "getter": false,
                "setter": false,
                "attribute": "description",
                "reflect": false
            },
            "fluid": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To render Dropdowns that span the full width of the parent container"
                },
                "getter": false,
                "setter": false,
                "attribute": "fluid",
                "reflect": false
            },
            "hover": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To configure activation on hover of the Dropdown with base-style button trigger"
                },
                "getter": false,
                "setter": false,
                "attribute": "hover",
                "reflect": false
            },
            "button": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To provide the value of base-style button as trigger of the Dropdown"
                },
                "getter": false,
                "setter": false,
                "attribute": "button",
                "reflect": false
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To provide the name of an icon to display as trigger of the Dropdown"
                },
                "getter": false,
                "setter": false,
                "attribute": "icon",
                "reflect": false
            },
            "iconTooltipMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To provide icon tooltip message"
                },
                "getter": false,
                "setter": false,
                "attribute": "icon-tooltip-message",
                "reflect": false
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set the color of the button. The value is directly passed to\nchi-button element if present  { primary, secondary, danger, dark, light }."
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": false
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set the variant of the button. The value is directly passed to\nchi-button element if present { outline, flat }"
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set button size { xs, sm, md, lg, xl }."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false
            },
            "uppercase": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to render a button with uppercase text."
                },
                "getter": false,
                "setter": false,
                "attribute": "uppercase",
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to disable chi-button."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "animateChevron": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To animate the chevron of Dropdown"
                },
                "getter": false,
                "setter": false,
                "attribute": "animate-chevron",
                "reflect": false
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "popper.js",
                            "id": "node_modules::Placement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set position of the Dropdown"
                },
                "getter": false,
                "setter": false,
                "attribute": "position",
                "reflect": false
            },
            "fontWeight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FontWeight",
                    "resolved": "\"normal\"",
                    "references": {
                        "FontWeight": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::FontWeight"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set weight of the button text { normal }."
                },
                "getter": false,
                "setter": false,
                "attribute": "font-weight",
                "reflect": true
            },
            "reference": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To provide selector of an external reference element"
                },
                "getter": false,
                "setter": false,
                "attribute": "reference",
                "reflect": true
            },
            "preventAutoHide": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To prevent hiding of the Dropdown when clicking outside its bounds"
                },
                "getter": false,
                "setter": false,
                "attribute": "prevent-auto-hide",
                "reflect": true
            },
            "preventItemSelected": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To prevent emitting the event chiDropdownItemSelected when an item is clicked"
                },
                "getter": false,
                "setter": false,
                "attribute": "prevent-item-selected",
                "reflect": false,
                "defaultValue": "false"
            },
            "visibleItems": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To provide number of items in the dropdown to be displayed, and apply scroll if needed"
                },
                "getter": false,
                "setter": false,
                "attribute": "visible-items",
                "reflect": false
            },
            "retainSelection": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To retain the selection of the menu item and display it as the trigger"
                },
                "getter": false,
                "setter": false,
                "attribute": "retain-selection",
                "reflect": false
            },
            "selectMode": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "DropdownSelectModes",
                    "resolved": "\"multi\" | \"single\"",
                    "references": {
                        "DropdownSelectModes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::DropdownSelectModes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To apply select-like functionality and styles"
                },
                "getter": false,
                "setter": false,
                "attribute": "select-mode",
                "reflect": true
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChiStates",
                    "resolved": "\"danger\" | \"success\" | \"warning\"",
                    "references": {
                        "ChiStates": {
                            "location": "import",
                            "path": "../../constants/states",
                            "id": "src/constants/states.ts::ChiStates"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define state color of Dropdown"
                },
                "getter": false,
                "setter": false,
                "attribute": "state",
                "reflect": false
            },
            "helperMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To display an additional helper text message below the Dropdown"
                },
                "getter": false,
                "setter": false,
                "attribute": "helper-message",
                "reflect": false
            },
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DropdownMenuMultiItem[]",
                    "resolved": "DropdownMenuMultiItem[]",
                    "references": {
                        "DropdownMenuMultiItem": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::DropdownMenuMultiItem"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Dropdown menu items"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "_menuHeader": {},
            "_menuFooter": {},
            "_forceRender": {},
            "_value": {},
            "_selectAllState": {},
            "_currentItems": {}
        };
    }
    static get events() {
        return [{
                "method": "eventHide",
                "name": "chiDropdownHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when hiding the Dropdown"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventShow",
                "name": "chiDropdownShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when showing the Dropdown"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventKeyDown",
                "name": "chiDropdownKeyDown",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when press key to up/down the Dropdown menu items"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventItemSelected",
                "name": "chiDropdownItemSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when select an item in the dropdown menu"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventItemDeselected",
                "name": "chiDropdownItemDeselected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when an item is deselected in the dropdown menu"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventSelectionReset",
                "name": "chiDropdownSelectionReset",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when Dropdown's selection is reset"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventValueChanged",
                "name": "chiDropdownValueChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when selected items have changed in the dropdown menu. Payload is an array\nof strings."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "updatePopper": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Hides the dropdown",
                    "tags": []
                }
            },
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Shows the dropdown",
                    "tags": []
                }
            },
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles active state (show/hide)",
                    "tags": []
                }
            },
            "resetSelection": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Resets selection",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "position",
                "methodName": "positionValidation"
            }, {
                "propName": "active",
                "methodName": "updateActive"
            }, {
                "propName": "state",
                "methodName": "stateValidation"
            }, {
                "propName": "selectMode",
                "methodName": "_setSelectModeProps"
            }, {
                "propName": "fluid",
                "methodName": "_updateFluidClass"
            }, {
                "propName": "items",
                "methodName": "_updateMultiItems"
            }];
    }
}
