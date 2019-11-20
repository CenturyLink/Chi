import {
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Watch,
  h
} from '@stencil/core';
import { CARDINAL_EXTENDED_POSITIONS } from '../../constants/positions';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import {
  ANIMATION_DURATION,
  CLASSES,
  ESCAPE_KEYCODE
} from '../../constants/constants';
import Popper, { Placement } from 'popper.js';

@Component({
  tag: 'chi-popover',
  styleUrl: 'popover.scss',
  scoped: true
})
export class Popover {
  /**
   * to set position of the popover { top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end }
   */
  @Prop({ reflect: true }) position: Placement = 'top';

  /**
   * to add an arrow between the popover and the reference element
   */
  @Prop({ reflect: true }) arrow: boolean;

  /**
   * to open or close the popover
   */
  @Prop({ reflect: true, mutable: true }) active: boolean;

  /**
   * CSS Selector to the reference Element. I.e. #id > p
   */
  @Prop({ reflect: true }) reference: string;

  /**
   * Prevents closing the popover when clicking out of its bounds
   */
  @Prop({ reflect: true }) preventAutoHide: boolean;

  /**
   * To define popover variant { text, custom }
   */
  @Prop({ reflect: true }) variant: string;

  /**
   * Status classes for the show/hide animation
   */
  @State() _animationClasses = '';

  /**
   *  To define popover title
   */
  @State() popoverTitle: string;

  @Element() el: HTMLElement;

  private currentAnimation: ThreeStepsAnimation;
  private _reference: HTMLElement;
  _popoverElement!: HTMLElement;
  private _popper: Popper;
  private _preAnimationTransformStyle: string;
  private _postAnimationTransformStyle: string;
  private _componentLoaded = false;
  private _didUpdateCallBackOnceQueue: (() => void)[] = [];
  private _closePrevented = false;
  private _closePreventedTimeout: number;
  private _documentClickHandler: () => void;
  private _documentKeyHandler: (event: KeyboardEvent) => void;

  @Watch('position')
  positionValidation(newValue: string) {
    if (newValue && !CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
      throw new Error(
        `Not valid position ${newValue} for popover. Valid values are top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start and left-end. `
      );
    }
    if (this._componentLoaded) {
      this._configurePopoverPopper();
    }
  }

  @Watch('reference')
  referenceElementChanged(newValue: string) {
    Popover.referenceElementValidation(newValue);
    this._reference = newValue
      ? (document.querySelector(newValue) as HTMLElement)
      : null;

    if (this._componentLoaded) {
      this._configurePopoverPopper();
    }
  }

  static referenceElementValidation(newValue: string) {
    if (newValue) {
      const referenceCandidates = document.querySelectorAll(newValue);
      if (referenceCandidates.length === 0) {
        throw new Error(`Reference element could not be found. `);
      }
      if (referenceCandidates.length > 1) {
        throw new Error(
          `Found ${referenceCandidates.length} reference candidates matching ${newValue}. Not able to discern which one is the preferred.`
        );
      }
    }
  }

  @Watch('arrow')
  arrowChanged(newValue: boolean, oldValue: boolean) {
    if (!!newValue !== !!oldValue && this._componentLoaded) {
      this._configurePopoverPopper();
    }
  }

  @Watch('active')
  statusChanged(newValue: boolean, oldValue: boolean) {
    // This weird double negation check is because of a stencil bug: https://github.com/ionic-team/stencil/issues/1238
    if (!!newValue !== !!oldValue) {
      if (newValue) {
        this.preventAutoClose();
        this._show();
      } else {
        this._hide();
      }
    }
  }

  /**
   * Toggles active state (show/hide)
   */
  @Method()
  async toggle() {
    if (this.active) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Shows the popover.
   */
  @Method()
  async show() {
    this.active = true;
  }

  /**
   * Hides the popover
   */
  @Method()
  async hide() {
    this.active = false;
  }

  /**
   * Popover show method has executed, but the showing animation has not started yet
   */
  @Event({ eventName: 'chiPopover:show' }) eventShow: EventEmitter;
  /**
   * Popover hide method has executed, but the closing animation has not started yet
   */
  @Event({ eventName: 'chiPopover:hide' }) eventHide: EventEmitter;
  /**
   * Popover has been shown to the user and is fully visible. The animation has completed.
   */
  @Event({ eventName: 'chiPopover:shown' }) eventShown: EventEmitter;
  /**
   * Popover has been hidden to the user. The animation has completed.
   */
  @Event({ eventName: 'chiPopover:hidden' }) eventHidden: EventEmitter;

  private _resetPopperPosition(): void {
    this._popper.update();
  }

  private _show(): void {
    if (this.currentAnimation && !this.currentAnimation.isStopped()) {
      this.currentAnimation.stop();
    }
    this._animationClasses = CLASSES.TRANSITIONING;

    // We need to run this code before _animationClasses have been updated in the DOM,
    // so we wait for the componentDidUpdate hook to run _resetPopperPosition.
    this._didUpdateCallBackOnceQueue.push(() => {
      const transition = this._popoverElement.style.transition;
      this._popoverElement.style.transition = 'none';
      // Because this popper method is asynchronous, cannot be done in step 1 of
      // animation, as it will be executed between step 1 and step 2.
      this._resetPopperPosition();
      this.currentAnimation = ThreeStepsAnimation.animationFactory(
        () => {
          this._popoverElement.style.transform = this._preAnimationTransformStyle;
        },
        () => {
          this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
          this._popoverElement.style.transition = transition;
          this._popoverElement.style.transform = this._postAnimationTransformStyle;
        },
        () => {
          this._animationClasses = CLASSES.ACTIVE;
        },
        ANIMATION_DURATION.SHORT
      );
    });
    this.eventShow.emit();
  }

  private _hide() {
    if (this.currentAnimation && !this.currentAnimation.isStopped()) {
      this.currentAnimation.stop();
    }

    this.currentAnimation = ThreeStepsAnimation.animationFactory(
      () => {
        this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
      },
      () => {
        this._animationClasses = CLASSES.TRANSITIONING;
        this._popoverElement.style.transform = this._preAnimationTransformStyle;
      },
      () => {
        this._animationClasses = '';
      },
      ANIMATION_DURATION.SHORT
    );

    this.eventHide.emit();
  }

  private _configurePopoverPopper() {
    if (!this._reference) {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      return;
    }

    const savePopperData = (data: any) => {
      this._preAnimationTransformStyle = null;
      this._postAnimationTransformStyle = data.styles.transform;
      if (data.placement.indexOf('top') === 0) {
        this._preAnimationTransformStyle = `translate3d(${
          data.popper.left
        }px, ${data.popper.top + 20}px, 0)`;
      } else if (data.placement.indexOf('right') === 0) {
        this._preAnimationTransformStyle = `translate3d(${data.popper.left -
          20}px, ${data.popper.top}px, 0)`;
      } else if (data.placement.indexOf('bottom') === 0) {
        this._preAnimationTransformStyle = `translate3d(${
          data.popper.left
        }px, ${data.popper.top - 20}px, 0)`;
      } else if (data.placement.indexOf('left') === 0) {
        this._preAnimationTransformStyle = `translate3d(${data.popper.left +
          20}px, ${data.popper.top}px, 0)`;
      } else {
        this._preAnimationTransformStyle = data.styles.transform;
      }
      return data;
    };

    this._popper = new Popper(this._reference, this._popoverElement, {
      modifiers: {
        applyStyle: { enabled: true },
        applyChiStyle: {
          enabled: true,
          fn: savePopperData,
          // Set order to run after popper applyStyle modifier
          // as we need data.styles to be filled.
          order: 875
        },
        arrow: {
          element: '.m-popover__arrow',
          enabled: this.arrow
        }
      },
      removeOnDestroy: false,
      placement: this.position
    });

    this._popper.update();
  }

  private _destroyPopper() {
    this._preAnimationTransformStyle = null;
    this._postAnimationTransformStyle = null;
    if (this._popper) {
      this._popper.destroy();
    }
  }

  componentWillLoad(): void {
    const target = this.el;
    const config = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['title']
    };

    const subscriberCallback = (mutations) => {
      mutations.forEach((mutation) => {
        this.popoverTitle = mutation.target.title;
      });
    }

    const observer = new MutationObserver(subscriberCallback);
    observer.observe(target, config);

    this.positionValidation(this.position);
    this.referenceElementChanged(this.reference);
    if (this.active) {
      this._animationClasses = CLASSES.ACTIVE;
    }

    if (target.getAttribute('title')) {
      this.popoverTitle = target.getAttribute('title');
    }
  }

  componentDidLoad(): void {
    this._documentClickHandler = () => {
      !this._closePrevented && !this.preventAutoHide && this.hide();
    };
    this._documentKeyHandler = e => {
      if (
        !this.preventAutoHide &&
        'key' in e &&
        (e.key === 'Escape' || e.key === 'Esc' || e.key === ESCAPE_KEYCODE)
      ) {
        this.hide();
      }
    };
    this._configurePopoverPopper();
    this._componentLoaded = true;
    document.addEventListener('click', this._documentClickHandler);
    document.addEventListener('keyup', this._documentKeyHandler);
  }

  componentDidUnload(): void {
    this._destroyPopper();
    if (this.currentAnimation && !this.currentAnimation.isStopped()) {
      this.currentAnimation.stop();
    }
    this.currentAnimation = null;
    this._componentLoaded = false;
    document.removeEventListener('click', this._documentClickHandler);
    document.removeEventListener('keyup', this._documentKeyHandler);
  }

  componentDidUpdate(): void {
    while (this._didUpdateCallBackOnceQueue.length) {
      const cb = this._didUpdateCallBackOnceQueue.shift();
      cb();
    }
  }

  preventAutoClose() {
    this._closePrevented = true;
    window.clearTimeout(this._closePreventedTimeout);
    this._closePreventedTimeout = window.setTimeout(() => {
      this._closePrevented = false;
    }, 100);
  }

  hostData() {
    return {
      'aria-hidden': this.active ? 'false' : 'true'
    };
  }

  render() {
    const popoverTitle = this.popoverTitle && <p class="m-popover__title">{this.popoverTitle}</p>;
    const slot = this.variant && this.variant === 'text' ? <p class="m-popover__text"><slot /></p> : <slot />;

    return (
      <div
        class={`m-popover
          ${CLASSES.ANIMATED}
          ${this.position ? `m-popover--${this.position}` : ''}
          ${this.arrow ? '' : '-no-arrow'}
          ${this._animationClasses}
          ${this._reference && this._reference.classList.contains('a-input') ? 'm-popover__input' : ''}
        `}
        ref={el => (this._popoverElement = el as HTMLElement)}
        aria-hidden={!this.active}
        onClick={() => this.preventAutoClose()}
      >
        <div class="m-popover__content">
          {popoverTitle}
          {slot}
        </div>
        {this.arrow && <div class="m-popover__arrow" />}
      </div>
    );
  }
}
