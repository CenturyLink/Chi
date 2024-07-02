import { Component, Element, Event, EventEmitter, Method, Prop, h, Watch, State } from '@stencil/core';
import Popper, { Placement } from 'popper.js';
import {
  ACTIVE_CLASS,
  ANIMATE_CLASS,
  DROPDOWN_CLASSES,
  LIST_CLASS,
  FLUID_CLASS,
  UTILITY_CLASSES,
} from '../../constants/classes';
import { CARDINAL_EXTENDED_POSITIONS } from '../../constants/positions';
import { contains } from '../../utils/utils';
import { DROPDOWN_SELECT_MODES, DropdownSelectModes, FontWeight } from '../../constants/types';
import { addMutationObserver } from '../../utils/mutationObserver';
import { CHI_STATES, ChiStates } from '../../constants/states';

declare const chi: any;

@Component({
  tag: 'chi-dropdown',
  styleUrl: 'dropdown.scss',
  scoped: true,
})
export class Dropdown {
  /**
   * To set the state of Dropdown
   */
  @Prop({ mutable: true, reflect: true }) active = false;
  /**
   * To enable the description of Dropdown menu item
   */
  @Prop() description?: boolean;
  /**
   * To render Dropdowns that span the full width of the parent container
   */
  @Prop({ mutable: true }) fluid: boolean;
  /**
   * To configure activation on hover of the Dropdown with base-style button trigger
   */
  @Prop() hover: boolean;
  /**
   * To provide the value of base-style button as trigger of the Dropdown
   */
  @Prop() button?: string;
  /**
   * To provide the name of an icon to display as trigger of the Dropdown
   */
  @Prop() icon?: string;
  /**
   * To provide icon tooltip message
   */
  @Prop() iconTooltipMessage?: string;
  /**
   * To set the color of the button. The value is directly passed to
   * chi-button element if present  { primary, secondary, danger, dark, light }.
   */
  @Prop() color: string;
  /**
   * To set the variant of the button. The value is directly passed to
   * chi-button element if present { outline, flat }
   */
  @Prop() variant: string;
  /**
   *  to set button size { xs, sm, md, lg, xl }.
   */
  @Prop() size: string;
  /**
   *  to render a button with uppercase text.
   */
  @Prop() uppercase = false;
  /**
   *  to disable chi-button.
   */
  @Prop() disabled = false;
  /**
   * To animate the chevron of Dropdown
   */
  @Prop() animateChevron?: boolean;
  /**
   * To set position of the Dropdown
   */
  @Prop() position: Placement;
  /**
   *  To set weight of the button text { normal }.
   */
  @Prop({ reflect: true }) fontWeight?: FontWeight;
  /**
   * To provide selector of an external reference element
   */
  @Prop({ reflect: true }) reference: string;
  /**
   * To prevent hiding of the Dropdown when clicking outside its bounds
   */
  @Prop({ reflect: true }) preventAutoHide: boolean;
  /**
   * To prevent emitting the event chiDropdownItemSelected when an item is clicked
   */
  @Prop() preventItemSelected = false;
  /**
   * To provide number of items in the dropdown to be displayed, and apply scroll if needed
   */
  @Prop() visibleItems?: number;
  /**
   * To retain the selection of the menu item and display it as the trigger
   */
  @Prop({ mutable: true }) retainSelection?: boolean;
  /**
   * To apply select-like functionality and styles
   */
  @Prop({ reflect: true, mutable: true }) selectMode?: DropdownSelectModes;
  /**
   * To define state color of Dropdown
   */
  @Prop() state: ChiStates;
  /**
   * To display an additional helper text message below the Dropdown
   */
  @Prop() helperMessage: string;
  /**
   * Triggered when hiding the Dropdown
   */
  @Event({ eventName: 'chiDropdownHide' }) eventHide: EventEmitter;
  /**
   * Triggered when showing the Dropdown
   */
  @Event({ eventName: 'chiDropdownShow' }) eventShow: EventEmitter;
  /**
   * Triggered when press key to up/down the Dropdown menu items
   */
  @Event({ eventName: 'chiDropdownKeyDown' }) eventKeyDown: EventEmitter;
  /**
   * Triggered when select an item in the dropdown menu
   */
  @Event({ eventName: 'chiDropdownItemSelected' }) eventItemSelected: EventEmitter;
  /**
   * Triggered when an item is deselected in the dropdown menu
   */
  @Event({ eventName: 'chiDropdownItemDeselected' }) eventItemDeselected: EventEmitter;
  /**
   * Triggered when Dropdown's selection is reset
   */
  @Event({ eventName: 'chiDropdownSelectionReset' }) eventSelectionReset: EventEmitter;
  /**
   * Triggered when selected items have changed in the dropdown menu. Payload is an array
   * of strings.
   */
  @Event({ eventName: 'chiDropdownValueChanged' }) eventValueChanged: EventEmitter;

  @State() _menuHeader: boolean;
  @State() _menuFooter: boolean;
  @State() _forceRender: boolean;
  @State() _value: string[] = [];

  @Element() el: HTMLElement;

  private _componentLoaded = false;
  private _popper: any;
  private _referenceElement: any;
  private _dropdownMenuElement: any;
  private _dropdownMenuItemsWrapper: any;
  private _customTrigger: boolean;
  private _tooltip: any;
  private _fluidClass: string;

  //# region Lifecycle hooks
  connectedCallback() {
    const triggerSlotElement = this.el.querySelector('[slot="trigger"]');

    this._customTrigger = !!triggerSlotElement;
    if (this._customTrigger) {
      this._referenceElement = triggerSlotElement;
    } else if (this.reference) {
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
    setTimeout(() => this._createTooltip(), 100);
  }

  componentWillLoad() {
    this._getDropdownMenuSlots();
    this.validateSelectMode(this.selectMode);
    this._setSelectModeProps();
    this._updateFluidClass();
  }

  disconnectedCallback() {
    this._removeEventListeners();
    this._removeTooltip();
  }
  //#endregion

  //#region PropsWatchers and validations
  @Watch('position')
  positionValidation(newValue: string) {
    if (newValue && !CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid position for Dropdown. Valid values are ${CARDINAL_EXTENDED_POSITIONS.join(', ')}.`
      );
    }
    if (this._componentLoaded) {
      this._configureDropdownPopper();
    }
  }

  @Watch('active')
  updateActive(newActiveState: boolean, oldActiveState: boolean) {
    if (newActiveState !== oldActiveState) {
      if (newActiveState) {
        this.setDisplay('block');
      } else {
        this.setDisplay('none');
      }
    }
  }

  @Watch('state')
  stateValidation(newValue: ChiStates) {
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
    } else if (selectMode && !DROPDOWN_SELECT_MODES.includes(selectMode)) {
      throw new Error(
        `${selectMode} is not a valid select mode for Dropdown. Valid values are ${DROPDOWN_SELECT_MODES.join(', ')}.`
      );
    }
  }

  @Watch('selectMode')
  _setSelectModeProps() {
    if (this.selectMode) {
      this.retainSelection = true;
      this.fluid = true;
    }
  }

  @Watch('fluid')
  _updateFluidClass() {
    this._fluidClass = this.fluid ? FLUID_CLASS : '';
  }
  //#endregion

  @Method()
  async updatePopper() {
    this._forceRender = !this._forceRender;
  }

  handleKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['ArrowDown', 'ArrowUp'];

    if (!allowedKeys.includes(event.key) || !this.active || !contains(this.el, event.target as HTMLElement)) {
      return;
    }

    event.preventDefault();

    this._focusMenuItem(event.key);
    this.eventKeyDown.emit();
  }

  private _configureDropdownPopper() {
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

  _createTooltip() {
    if (!this.icon || !this.iconTooltipMessage) return;

    this._tooltip = chi.tooltip(this.el.querySelector('[data-tooltip]'));
  }

  _removeTooltip() {
    if (this._tooltip) {
      this._tooltip.dispose();
      this._tooltip = null;
    }
  }

  _getDropdownMenuSlots() {
    const menuHeader = this.el.querySelector('[slot=menu-header]');
    const menuFooter = this.el.querySelector('[slot=menu-footer]');

    if (menuHeader) {
      this._menuHeader = true;
    }

    if (menuFooter) {
      this._menuFooter = true;
    }
  }

  getPadding(direction: 'top' | 'bottom') {
    return parseInt(getComputedStyle(this._dropdownMenuElement).getPropertyValue(`padding-${direction}`), 10);
  }

  getTotalElementHeight(element: HTMLElement) {
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
      const menuItems = (
        this._dropdownMenuItemsWrapper ? this._dropdownMenuItemsWrapper.children : this._dropdownMenuElement.children
      ) as HTMLAnchorElement[];

      const itemsToShow = menuItems.length < this.visibleItems ? menuItems.length : this.visibleItems;
      let newHeight = 0;

      for (let i = 0; i < itemsToShow; i++) {
        newHeight += this.getTotalElementHeight(menuItems[i]);
      }

      if (this._menuFooter || this._menuHeader) {
        this._dropdownMenuItemsWrapper.style.height = `${newHeight}px`;
      } else {
        const padding = this.getPadding('top') + this.getPadding('bottom');

        this._dropdownMenuElement.style.height = `${newHeight + padding}px`;
      }
    }
  }

  setActiveClassOnMenuItem() {
    const menuItems = this._getDropdownMenuItems();

    menuItems.forEach((item: HTMLElement) => {
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

  setDisplay(display: 'block' | 'none') {
    this._dropdownMenuElement.style.display = display;
  }

  emitHide() {
    this.eventHide.emit();
  }

  emitShow() {
    this.eventShow.emit();
  }

  handlerClick = (e: MouseEvent) => {
    if (
      e.target !== document.body &&
      e.target !== null &&
      !contains(this.el, e.target as HTMLElement) &&
      !contains(this._referenceElement, e.target as HTMLElement) &&
      !this.preventAutoHide
    ) {
      this.hide();
    }
  };

  handlerSelectedMenuItem = (ev) => {
    this._updateValue(ev.target);

    if (this.retainSelection) {
      this.hide();
      this.setActiveClassOnMenuItem();
    }
  };

  /**
   * Either adds or removes a selected item from the value list.
   * Multiple values are only allowed if selectMode is multi.
   */
  _updateValue(target: HTMLElement) {
    target = (target.closest(`.${DROPDOWN_CLASSES.MENU_ITEM}`) || target) as HTMLElement;
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
    } else {
      this._value = this._value.filter((item) => item !== value);
      this.eventItemDeselected.emit(value);
    }

    this.eventValueChanged.emit(this._value);
  }

  handlerClickTrigger = () => {
    this.toggle();
  };

  handlerMouseEnter = () => {
    if (this.hover) {
      this.show();
    }
  };

  handlerMouseLeave = () => {
    if (this.hover) {
      this.hide();
    }
  };

  /**
   * Hides the dropdown
   */
  @Method()
  async hide() {
    this.setDisplay('none');
    this.active = false;
    this.emitHide();
  }

  /**
   * Shows the dropdown
   */
  @Method()
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
  @Method()
  async toggle() {
    this.active ? this.hide() : this.show();
  }

  /**
   * Resets selection
   */
  @Method()
  async resetSelection() {
    const menuItems = this._getDropdownMenuItems();

    this._value = [];

    menuItems.forEach((item: HTMLElement) => {
      item.classList.remove(ACTIVE_CLASS);
    });

    this.eventSelectionReset.emit();
  }

  _focusMenuItem(keyCode: string) {
    const menuItems = this._getDropdownMenuItems();
    const focusedElement = document.activeElement as HTMLElement;
    const currentIndex = menuItems.indexOf(focusedElement);
    let index = keyCode === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1;

    if (!menuItems.includes(focusedElement)) {
      const startIndex = keyCode === 'ArrowUp' ? menuItems.length - 1 : 0;

      return menuItems[startIndex].focus();
    }

    if (index === -1) {
      index = menuItems.length - 1;
    } else if (index === menuItems.length) {
      index = 0;
    }

    menuItems[index].focus();
  }

  _getDropdownMenuItems(): HTMLElement[] {
    let children = this._dropdownMenuElement.children as HTMLAnchorElement[];

    if (this._dropdownMenuItemsWrapper) {
      children = this._dropdownMenuItemsWrapper.children as HTMLAnchorElement[];
    }

    return Array.from(children).filter((item: HTMLElement) => item.classList.contains(DROPDOWN_CLASSES.MENU_ITEM));
  }

  _getButtonElement(): HTMLButtonElement {
    return this._referenceElement.querySelector('button');
  }

  _addEventListeners() {
    document.body.addEventListener('click', this.handlerClick.bind(this));
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));

    if (this.preventItemSelected) return;

    this._addClickEventListeners();
  }

  _removeEventListeners() {
    const menuItems = this._getDropdownMenuItems();

    document.body.removeEventListener('click', this.handlerClick);
    document.body.removeEventListener('keydown', this.handleKeyDown);

    if (this.preventItemSelected) return;

    menuItems.forEach((item: HTMLElement) => {
      item.removeEventListener('click', this.handlerSelectedMenuItem);
    });
  }

  _addClickEventListeners() {
    const menuItems = this._getDropdownMenuItems();

    menuItems?.forEach((item: HTMLElement) => {
      item.addEventListener('click', this.handlerSelectedMenuItem);
    });
  }

  _getButtonContent() {
    let buttonContent = this.button;

    if (this.icon) {
      buttonContent = <chi-icon icon={this.icon}></chi-icon>;
    } else if (this.retainSelection && this._value.length) {
      buttonContent = <span class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{this._value.join(' ; ')}</span>;
    }

    return buttonContent;
  }

  _getHelperMessage() {
    return this.helperMessage && <chi-helper-message state={this.state}>{this.helperMessage}</chi-helper-message>;
  }

  
  /**
   * Generates trigger button content, either default button text, selected value or icon
   */
  renderTrigger() {
    const buttonContent = this._getButtonContent();
    const color = this.color ?? '';
    const variant = this.variant ?? '';
    const size = this.size ?? '';
    const type = this.icon ? 'icon' : '';
    const tooltip = this.iconTooltipMessage ?? '';
    const isNotCustomTrigger = this.button || this.icon;
    const customTriggerElement = this._customTrigger ? <slot name="trigger" /> : null;

    return isNotCustomTrigger ? (
      <chi-button
        onChiClick={this.handlerClickTrigger}
        onChiMouseEnter={this.handlerMouseEnter}
        fluid={this.fluid || !!this.helperMessage}
        extra-class={this.getExtraClassForTriggerButton()}
        color={color}
        variant={variant}
        size={size}
        uppercase={this.uppercase}
        disabled={this.disabled}
        type={type}
        data-tooltip={tooltip}
        ref={(ref) => (this._referenceElement = ref)}
      >
        {buttonContent}
      </chi-button>
    ) : (
      customTriggerElement
    );
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
    ].filter(Boolean).join(' ');
  }

  renderDropdownMenuHeader() {
    return (
      this._menuHeader && (
        <div class={`${DROPDOWN_CLASSES.MENU_HEADER} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]}`}>
          <slot name="menu-header" />
        </div>
      )
    );
  }

  renderDropdownMenuFooter() {
    return (
      this._menuFooter && (
        <div class={`${DROPDOWN_CLASSES.MENU_FOOTER} ${UTILITY_CLASSES.MARGIN.TOP[1]}`}>
          <slot name="menu-footer" />
        </div>
      )
    );
  }

  renderDropdownMenuItems() {
    return this.visibleItems && (this._menuFooter || this._menuHeader) ? (
      <div class={DROPDOWN_CLASSES.MENU_ITEMS_WRAPPER} ref={(ref) => (this._dropdownMenuItemsWrapper = ref)}>
        <slot name="menu" />
      </div>
    ) : (
      <slot name="menu" />
    );
  }

  renderMenu() {
    return (
      <div
        class={`
          ${DROPDOWN_CLASSES.MENU}
          ${UTILITY_CLASSES.Z_INDEX.Z_10}
          ${this.active ? ACTIVE_CLASS : ''}
          ${this._fluidClass}
          ${this.description ? LIST_CLASS : ''}`}
        ref={(ref) => (this._dropdownMenuElement = ref)}
      >
        {this.renderDropdownMenuHeader()}
        {this.renderDropdownMenuItems()}
        {this.renderDropdownMenuFooter()}
      </div>
    );
  }

  render() {
    const trigger = this.renderTrigger();
    const menu = this.renderMenu();

    return trigger ? (
      <div
        class={`
        ${DROPDOWN_CLASSES.DROPDOWN}
        ${this.active ? ACTIVE_CLASS : ''}
        ${this._fluidClass}`
      }
        onMouseLeave={this.handlerMouseLeave}
      >
        {trigger}
        {this.helperMessage && this._getHelperMessage()}
        {menu}
      </div>
    ) : (
      menu
    );
  }
}
