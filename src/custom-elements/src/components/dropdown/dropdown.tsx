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
import { FontWeight } from '../../constants/types';
import { addMutationObserver } from '../../utils/mutationObserver';

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
  @Prop() fluid: boolean;
  /**
   * To configure activation on hover of the Dropdown with base-style button trigger
   */
  @Prop() hover: boolean;
  /**
   * To provide the value of base-style button as trigger of the Dropdown
   */
  @Prop() button?: string;
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
  @Prop() retainSelection?: boolean;
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
  @Event({ eventName: 'chiDropdownItemSelected' })
  eventItemSelected: EventEmitter;

  @State() _menuHeader: boolean;
  @State() _menuFooter: boolean;
  @State() _forceRender: boolean;
  @State() _value: string;

  @Element() el: HTMLElement;

  private _componentLoaded = false;
  private _popper: any;
  private _referenceElement: any;
  private _dropdownMenuElement: any;
  private _dropdownMenuItemsWrapper: any;
  private _customTrigger: boolean;

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
    addMutationObserver.call(this, this.setMenuHeight, { childList: true, subtree: true });
  }

  componentWillLoad() {
    this._getDropdownMenuSlots();
  }

  disconnectedCallback() {
    this._removeEventListeners();
  }

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
      const isActive = item.textContent === this._value;
      item.classList.toggle(ACTIVE_CLASS, isActive);
    });
  }

  setFixedWidth() {
    if (this.retainSelection && this._referenceElement) {
      const button = this._referenceElement.getElementsByTagName('button')[0];
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

  handlerSelectedMenuItem = (item) => {
    this.eventItemSelected.emit(item.text);

    if (this.retainSelection) {
      this._value = item.textContent;
      this.hide();
      this.truncateButtonText();
      this.setActiveClassOnMenuItem();
    }
  };

  truncateButtonText() {
    const button = this._referenceElement.getElementsByTagName('button')[0];
    const span = document.createElement('span');

    button.textContent = '';
    span.textContent = this._value;
    span.classList.add(UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE);
    button.appendChild(span);
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

  _addEventListeners() {
    const menuItems = this._getDropdownMenuItems();

    document.body.addEventListener('click', this.handlerClick.bind(this));
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));

    if (this.preventItemSelected) return;

    menuItems.forEach((item: HTMLElement) => {
      item.addEventListener('click', this.handlerSelectedMenuItem.bind(this, item));
    });
  }

  _removeEventListeners() {
    const menuItems = this._getDropdownMenuItems();

    document.body.removeEventListener('click', this.handlerClick);
    document.body.removeEventListener('keydown', this.handleKeyDown);

    if (this.preventItemSelected) return;

    menuItems.forEach((item: HTMLElement) => {
      item.removeEventListener('click', this.handlerSelectedMenuItem.bind(this, item));
    });
  }

  renderTrigger() {
    const itemSelected = (this.retainSelection && this._value) ?? this.button;

    return this.button ? (
      <chi-button
        onChiClick={this.handlerClickTrigger}
        onChiMouseEnter={this.handlerMouseEnter}
        class={`
        ${this.fluid ? FLUID_CLASS : ''}
      `}
        extra-class={this.getExtraClassForTriggerButton()}
        color={`${this.color || ''}`}
        variant={`${this.variant || ''}`}
        size={`${this.size || ''}`}
        uppercase={this.uppercase}
        disabled={this.disabled}
        ref={(ref) => (this._referenceElement = ref)}
      >
        {itemSelected}
      </chi-button>
    ) : this._customTrigger ? (
      <slot name="trigger" />
    ) : null;
  }

  getExtraClassForTriggerButton() {
    return `
      ${DROPDOWN_CLASSES.TRIGGER}
      ${this.fontWeight ? `-text--${this.fontWeight}` : ''}
      ${this.active ? ACTIVE_CLASS : ''}
      ${this.fluid ? FLUID_CLASS : ''}
      ${this.animateChevron ? ANIMATE_CLASS : ''}
    `;
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
          ${this.fluid ? FLUID_CLASS : ''}
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
        class={`${DROPDOWN_CLASSES.DROPDOWN} ${this.active ? ACTIVE_CLASS : ''} ${this.fluid ? FLUID_CLASS : ''}`}
        onMouseLeave={this.handlerMouseLeave}
      >
        {trigger}
        {menu}
      </div>
    ) : (
      menu
    );
  }
}
