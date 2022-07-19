import {
  Component,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  h,
  Watch
} from '@stencil/core';
import Popper from 'popper.js';
import {
  ACTIVE_CLASS,
  ANIMATE_CLASS,
  DROPDOWN_CLASSES
} from '../../constants/classes';
import {} from '../../constants/constants';
import { CARDINAL_EXTENDED_POSITIONS } from '../../constants/positions';

@Component({
  tag: 'chi-dropdown',
  scoped: true
})
export class Dropdown {
  /**
   * To set the state of Dropdown
   */
  @Prop() active: boolean;
  /**
   * To configure activation of the Dropdown with hover
   */
  @Prop() hover: boolean;
  /**
   * To enable animation of the chevron icon
   */
  @Prop() animated: boolean;
  /**
   * To provide the value of the default trigger button
   */
  @Prop() baseButtonValue?: string;
  /**
   * To set position of the Dropdown
   */
  @Prop() position: string;
  /**
   *  
   */
  @State() activeState = false;
  /**
   * Triggered when the user navigates to another view
   */
  @Event() chiViewChange: EventEmitter<number>;

  private _shown = false;
  private _componentLoaded = false;
  private _popper: any;
  private _referenceElement: any;
  private _dropdownMenuElement: any;

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
        applyChiStyle: {
          enabled: true,
          // fn: savePopperData,
          // Set order to run after popper applyStyle modifier
          // as we need data.styles to be filled.
          order: 875
        },
        preventOverflow: {
          boundariesElement: "window"
        },
      },
      removeOnDestroy: false,
      placement: this.position || 'bottom',
    });
  }

  connectedCallback() {
    this.activeState = this.active;
  }

  componentDidLoad() {
    this._configureDropdownPopper();
    this._componentLoaded = true;
  }

  handlerClickTrigger = () => {
    this.activeState = !this.activeState;
  };

  @Method()
  async hide() {
    this.activeState = false;
    this._shown = false;
  }

  @Method()
  async show() {
    this.activeState = true;
    this._shown = true;
  }

  @Method()
  async toggle() {
    if (this._shown) {
      this.hide();
    } else {
      this.show();
    }
  }

  render() {
    const baseButtonValue = this.baseButtonValue ? (
      <chi-button
        onChiClick={this.handlerClickTrigger}
        extra-class={`${DROPDOWN_CLASSES.TRIGGER} ${
          this.activeState ? ACTIVE_CLASS : ''
        }`}
        ref={ref => this._referenceElement = ref}
      >
        {this.baseButtonValue}
      </chi-button>
    ) : null;
    const dropdownMenu = (
      <div
        class={`${DROPDOWN_CLASSES.MENU} ${
          this.activeState ? ACTIVE_CLASS : ''
        }`}
        ref={ref => this._dropdownMenuElement = ref}
      >
        <a class={DROPDOWN_CLASSES.MENU_ITEM} href="">Lorem ipsum chi rules</a>
      </div>
    );

    return (
      <div
        class={`${DROPDOWN_CLASSES.DROPDOWN} ${
          this.activeState ? ACTIVE_CLASS : ''
        } ${this.animated ? ANIMATE_CLASS : ''}`}
      >
        {baseButtonValue}
        {dropdownMenu}
      </div>
    );
  }
}
