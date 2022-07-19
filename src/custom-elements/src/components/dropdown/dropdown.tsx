import {
  Component,
  Element,
  Event,
  EventEmitter,
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
  @Element() el: HTMLElement;
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
  @Prop() position: '';
  /**
   *  View
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
  dropdownMenuElement: any;

  @Watch('position')
  positionValidation(newValue: string) {
    if (newValue && !CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
      throw new Error(
        `Not valid position ${newValue} for Dropdown. Valid values are ${CARDINAL_EXTENDED_POSITIONS.join(', ')}.`
      );
    }
    if (this._componentLoaded) {
      this._configurePopoverPopper();
    }
  }

  private _configurePopoverPopper() {
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
    this._popper = new Popper(this._referenceElement, this.dropdownMenuElement, {
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

  componentWillLoad() {
    this.activeState = this.active;
  }

  componentDidLoad(): void {
    // this._documentClickHandler = () => {
    //   !this._closePrevented && !this.preventAutoHide && this.hide();
    // };
    // this._documentKeyHandler = e => {
    //   if (
    //     !this.preventAutoHide &&
    //     'key' in e &&
    //     (e.key === 'Escape' || e.key === 'Esc' || e.key === ESCAPE_KEYCODE)
    //   ) {
    //     this.hide();
    //   }
    // };
    this._configurePopoverPopper();
    this._componentLoaded = true;
  }

  handlerClickTrigger = () => {
    this.activeState = !this.activeState;
  };

  hide() {}

  show() {}

  toggle() {
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
        ref={ref => this.dropdownMenuElement = ref}
      >
        <a class={DROPDOWN_CLASSES.MENU_ITEM} href="">Lorem ipsum chi rules</a>
      </div>
    );

    console.log(this.activeState);
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
