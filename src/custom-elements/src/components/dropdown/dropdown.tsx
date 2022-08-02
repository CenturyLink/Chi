import {
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  h,
  Watch
} from '@stencil/core';
import Popper, { Placement } from 'popper.js';
import {
  ACTIVE_CLASS,
  ANIMATE_CLASS,
  DROPDOWN_CLASSES
} from '../../constants/classes';
import { DROPDOWN_EVENTS } from '../../constants/events';
import { CARDINAL_EXTENDED_POSITIONS } from '../../constants/positions';
import { contains } from '../../utils/utils';

@Component({
  tag: 'chi-dropdown',
  styleUrl: 'dropdown.scss',
  scoped: true
})
export class Dropdown {
  /**
   * To set the state of Dropdown
   */
  @Prop() active: boolean;
  /**
   * To configure activation on hover of the Dropdown with base-style button trigger
   */
  @Prop() hover: boolean;
  /**
   * To provide the value of base-style button as trigger of the Dropdown
   */
  @Prop() button?: string;
  /**
   * To animate the chevron of Dropdown
   */
  @Prop() animateChevron?: boolean;
  /**
   * To set position of the Dropdown
   */
  @Prop() position: Placement;
  /**
   * To provide selector of an external reference element
   */
  @Prop() reference: string;
  /**
   * To prevent hiding of the Dropdown when clicking outside its bounds
   */
  @Prop({ reflect: true }) preventAutoHide: boolean;
  /**
   * Triggered when hiding the Dropdown
   */
  @Event({ eventName: DROPDOWN_EVENTS.HIDE }) eventHide: EventEmitter;
  /**
   * Triggered when showing the Dropdown
   */
  @Event({ eventName: DROPDOWN_EVENTS.SHOW }) eventShow: EventEmitter;

  @Element() el: HTMLElement;

  private _componentLoaded = false;
  private _popper: any;
  private _referenceElement: any;
  private _dropdownMenuElement: any;
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
    document.body.addEventListener('click', this.handlerClick);
  }

  componentDidUnload() {
    document.body.removeEventListener('click', this.handlerClick);
  }

  @Watch('position')
  positionValidation(newValue: string) {
    if (newValue && !CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid position for Dropdown. Valid values are ${CARDINAL_EXTENDED_POSITIONS.join(
          ', '
        )}.`
      );
    }
    if (this._componentLoaded) {
      this._configureDropdownPopper();
    }
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
    this._popper = new Popper(
      this._referenceElement,
      this._dropdownMenuElement,
      {
        modifiers: {
          applyStyle: { enabled: true },
          preventOverflow: {
            boundariesElement: 'window'
          }
        },
        removeOnDestroy: true,
        placement: this.position || 'bottom'
      }
    );
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

  @Method()
  async hide() {
    this._dropdownMenuElement.style.display = 'none';
    this.active = false;
    this.emitHide();
  }

  @Method()
  async show() {
    this._dropdownMenuElement.style.display = 'block';
    this.active = true;
    if (this._popper) {
      this._popper.update();
    }
    this.emitShow();
  }

  @Method()
  async toggle() {
    if (this.active) {
      this.hide();
    } else {
      this.show();
    }
  }

  render() {
    const trigger = this.button ? (
      <chi-button
        onChiClick={this.handlerClickTrigger}
        onChiMouseEnter={this.handlerMouseEnter}
        extra-class={`${DROPDOWN_CLASSES.TRIGGER} ${
          this.active ? ACTIVE_CLASS : ''
        } ${this.animateChevron ? ANIMATE_CLASS : ''}`}
        ref={ref => (this._referenceElement = ref)}
      >
        {this.button}
      </chi-button>
    ) : this._customTrigger ? (
      <slot name="trigger" />
    ) : null;
    const menu = (
      <div
        class={`${DROPDOWN_CLASSES.MENU} ${this.active ? ACTIVE_CLASS : ''}`}
        ref={ref => (this._dropdownMenuElement = ref)}
      >
        <slot name="menu" />
      </div>
    );

    if (trigger) {
      return (
        <div
          class={`${DROPDOWN_CLASSES.DROPDOWN} ${
            this.active ? ACTIVE_CLASS : ''
          }`}
          onMouseLeave={this.handlerMouseLeave}
        >
          {trigger}
          {menu}
        </div>
      );
    }

    return menu;
  }
}
