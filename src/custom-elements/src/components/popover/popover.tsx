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
import { Drag } from '../../utils/Drag';
import {
  ANIMATION_DURATION,
  CLASSES,
  ESCAPE_KEYCODE
} from '../../constants/constants';
import Popper, { Placement } from 'popper.js';
import { POPOVER_CLASSES } from '../../constants/classes';

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
   * to add a close button to the popover
   */
  @Prop({ reflect: true }) closable = false;

  /**
   * to allow the user to manually change the position of the popover
   */
  @Prop({ reflect: true }) drag = false;
  /**
   * to open or close the popover
   */
  @Prop({ reflect: true, mutable: true }) active: boolean;

  /**
   * CSS Selector to the reference Element. I.e. #id > p
   */
  @Prop({ reflect: true }) reference: string;

  // TODO: To be removed when all µApp's Chi version is higher than v5.0

  /**
   * To define portal style of the Popover
   */
  @Prop({ reflect: true }) portal: boolean;

  /**
   * To define modal style of the Popover
   */
  @Prop({ reflect: true }) modal: boolean;

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

  /**
   *  To define popover footer
   */
  @State() popoverFooter: boolean;

  @Element() el: HTMLElement;

  private currentAnimation: ThreeStepsAnimation;
  private _reference: HTMLElement;
  _popoverElement!: HTMLElement;
  _popoverHeader!: HTMLElement;
  private _popper: Popper;
  private _preAnimationTransformStyle: string;
  private _postAnimationTransformStyle: string;
  private _componentLoaded = false;
  private _didUpdateCallBackOnceQueue: (() => void)[] = [];
  private _closePrevented = false;
  private _closePreventedTimeout: number;
  private _documentClickHandler: () => void;
  private _documentKeyHandler: (event: KeyboardEvent) => void;
  private mutationObserver;
  private _drag: Drag;

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
    if (!!newValue !== !!oldValue) {
      if (newValue) {
        this.preventAutoClose();
        this._show();
      } else {
        this._hide();
      }
    }
  }

  @Watch('drag')
  dragUpdated(newVal: boolean) {
    if (newVal && !this._drag) {
      this._drag = new Drag(this._popoverHeader, this._popoverElement, this);
    } else if (!newVal && this._drag) {
      this._drag.dispose();
      this._drag = undefined;
      // To-do Recover Popper with auto-hide functionality
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
  @Event({ eventName: 'chiPopoverShow' }) eventShow: EventEmitter;
  /**
   * Popover hide method has executed, but the closing animation has not started yet
   */
  @Event({ eventName: 'chiPopoverHide' }) eventHide: EventEmitter;
  /**
   * Popover has been shown to the user and is fully visible. The animation has completed.
   */
  @Event({ eventName: 'chiPopoverShown' }) eventShown: EventEmitter;
  /**
   * Popover has been hidden to the user. The animation has completed.
   */
  @Event({ eventName: 'chiPopoverHidden' }) eventHidden: EventEmitter;

  private _resetPopperPosition(): void {
    this._popper.update();
  }

  private _show(): void {
    if (!this._popper) this._initializePopper();
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
          this.eventShown.emit();
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
        if (!this._popper) {
          this._initializePopper();
        }
        this.eventHidden.emit();
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

    this._initializePopper();
    this._popper.update();
  }

  private _initializePopper() {
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
          element: `.${POPOVER_CLASSES.ARROW}`,
          enabled: this.arrow
        },
        preventOverflow: {
          boundariesElement: "window"
        },
      },
      removeOnDestroy: false,
      placement: this.position,
    });
  }

  private _destroyPopper() {
    this._preAnimationTransformStyle = null;
    this._postAnimationTransformStyle = null;
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
  }

  connectedCallback() {
    const observerTarget = this.el;
    const mutationObserverConfig = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['title']
    };

    if (!this.mutationObserver) {
      const subscriberCallback = (mutations) => {
        mutations.forEach((mutation) => {
          this.popoverTitle = mutation.target.title;
        });
      };

      this.mutationObserver = new MutationObserver(subscriberCallback);
    }

    this.mutationObserver.observe(observerTarget, mutationObserverConfig);
  }

  componentWillLoad(): void {
    this.positionValidation(this.position);
    this.referenceElementChanged(this.reference);
    if (this.active) {
      this._animationClasses = CLASSES.ACTIVE;
    }

    if (this.el.getAttribute('title')) {
      this.popoverTitle = this.el.getAttribute('title');
    }

    if (Array.from(this.el.querySelectorAll(`[slot=${POPOVER_CLASSES.FOOTER}]`)).length > 0) {
      this.popoverFooter = true;
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

    if (this.drag) {
      this.dragUpdated(this.drag);
    } else {
      document.addEventListener('click', this._documentClickHandler);
      document.addEventListener('keyup', this._documentKeyHandler);
    }
  }

  disconnectedCallback(): void {
    this._destroyPopper();
    if (this.currentAnimation && !this.currentAnimation.isStopped()) {
      this.currentAnimation.stop();
    }
    if (this._drag) {
      this._drag.dispose();
      this._drag = undefined;
    }
    this.currentAnimation = null;
    this._componentLoaded = false;
    document.removeEventListener('click', this._documentClickHandler);
    document.removeEventListener('keyup', this._documentKeyHandler);
    this.mutationObserver.disconnect();
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
    const closeButton = this.closable ? <chi-button size="xs" onClick={() => this.hide()} type="close" /> : null;
    const popoverHeader = this.popoverTitle && <header ref={el => (this._popoverHeader = el as HTMLElement)} class={POPOVER_CLASSES.HEADER}><h2 class={POPOVER_CLASSES.TITLE}>{this.popoverTitle}</h2></header>;
    const slot = this.variant && this.variant === 'text' ? <p class={POPOVER_CLASSES.TEXT}><slot /></p> : <slot />;
    const chiFooter = this.popoverFooter && <div class={POPOVER_CLASSES.FOOTER}><slot name={POPOVER_CLASSES.FOOTER}></slot></div>;

    return (
      <section
        class={`
          ${POPOVER_CLASSES.POPOVER}
          ${CLASSES.ANIMATED}
          ${this.position ? `chi-popover--${this.position}` : ''}
          ${this.arrow ? '' : POPOVER_CLASSES.NO_ARROW}
          ${this._animationClasses}
          ${this._reference && this._reference.classList.contains('chi-input') ? POPOVER_CLASSES.INPUT : ''}
          ${this.closable ? POPOVER_CLASSES.CLOSABLE : ''}
          ${this.drag ? POPOVER_CLASSES.DRAGGABLE : ''}
          ${this.portal ? '-portal' : ''}
          ${this.modal ? POPOVER_CLASSES.MODAL : ''}
        `}
        ref={el => (this._popoverElement = el as HTMLElement)}
        onClick={() => this.preventAutoClose()}
        role="dialog"
        aria-modal="true"
        aria-label={this.popoverTitle}
        aria-hidden={!this.active}
      >
        {closeButton}
        {popoverHeader}
        <div class={POPOVER_CLASSES.CONTENT}>
          {slot}
        </div>
        {chiFooter}
        {this.arrow && <div class={POPOVER_CLASSES.ARROW} />}
      </section>
    );
  }
}
