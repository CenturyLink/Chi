import { Component, Event, EventEmitter, Method, Prop, State, Watch, h, Element } from '@stencil/core';
import { CARDINAL_POSITIONS } from '../../constants/positions';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { ANIMATION_DURATION, CLASSES } from '../../constants/constants';
import { contains } from '../../utils/utils';

@Component({
  tag: 'chi-drawer',
  styleUrl: 'drawer.scss',
  scoped: true
})
export class Drawer {

  @Element() el;

  /**
   * to set position of the drawer { top, right, bottom or left }
   */
  @Prop({ reflect: true }) position: string;

  /**
   * to add a backdrop behind the drawer, which covers the viewport
   */
  @Prop({ reflect: true }) backdrop: string;

  /**
   * to open or close the drawer
   */
  @Prop({ reflect: true, mutable: true }) active: boolean;

  /**
   * To render Drawer without a close button
   */
  @Prop({ reflect: true }) nonClosable = false;

  /**
   * to remove the space for the header
   */
  @Prop({ reflect: true }) noHeader: boolean;

  /**
   * to prevent closing when the user clicked outside the Drawer
   */
  @Prop({ reflect: true }) preventAutoHide = false;

  /**
   * Status classes for the show/hide animation
   */
  @State() _animationClasses: string;

  /**
   * Status classes for the show/hide animation
   */
  @State() _backdropAnimationClasses: string;

  /**
   *  To define drawer title. Not compatible with noHeader
   */
  @State() drawerTitle: string;

  private animation: ThreeStepsAnimation;

  private mutationObserver;

  @Watch('position')
  positionValidation(newValue: string) {
    if (newValue && !CARDINAL_POSITIONS.includes(newValue)) {
      throw new Error(`Not valid position ${newValue} for drawer. Valid values are top, right, bottom or left. `);
    }
  }

  @Watch('backdrop')
  backdropValidation(newValue: string) {
    if (newValue && newValue !== 'inverse' && newValue !== 'backdrop') {
      throw new Error(`Not valid backdrop ${newValue} for drawer. Valid values are inverse, backdrop, empty or true. `);
    }
  }

  @Watch('active')
  statusChanged(newValue: boolean, oldValue: boolean) {
    // This weird double negation check is because of a stencil bug: https://github.com/ionic-team/stencil/issues/1238
    if (!!newValue !== !!oldValue) {
      if (newValue) {
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
   * Shows the drawer.
   */
  @Method()
  async show() {
    this.active = true;
  }

  /**
   * Hides the drawer
   */
  @Method()
  async hide() {
    this.active = false;
  }

  /**
   * Drawer show method has executed, but the showing animation has not started yet
   */
  @Event({ eventName: 'chiDrawerShow' }) eventShow: EventEmitter;
  /**
   * Drawer hide method has executed, but the closing animation has not started yet
   */
  @Event({ eventName: 'chiDrawerHide' }) eventHide: EventEmitter;
  /**
   * Drawer has been shown to the user and is fully visible. The animation has completed.
   */
  @Event({ eventName: 'chiDrawerShown' }) eventShown: EventEmitter;
  /**
   * Drawer has been hidden to the user. The animation has completed.
   */
  @Event({ eventName: 'chiDrawerHidden' }) eventHidden: EventEmitter;

  private _show() {
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    if (this._backdropAnimationClasses !== '' || this._animationClasses !== CLASSES.ACTIVE) {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._animationClasses = CLASSES.TRANSITIONING;
          this._backdropAnimationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.CLOSED}`;
        },
        () => {
          this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
          this._backdropAnimationClasses = CLASSES.TRANSITIONING;
        },
        () => {
          this._animationClasses = CLASSES.ACTIVE;
          this._backdropAnimationClasses = '';
          this.eventShown.emit();
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.eventShow.emit();
  }

  private _hide() {
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    if (this._backdropAnimationClasses !== CLASSES.CLOSED || this._animationClasses !== '') {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
          this._backdropAnimationClasses = CLASSES.TRANSITIONING;
        },
        () => {
          this._animationClasses = CLASSES.TRANSITIONING;
          this._backdropAnimationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.CLOSED}`;
        },
        () => {
          this._animationClasses = '';
          this._backdropAnimationClasses = CLASSES.CLOSED;
          this.eventHidden.emit();
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.eventHide.emit();
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
          this.drawerTitle = mutation.target.title;
        });
      };

      this.mutationObserver = new MutationObserver(subscriberCallback);
    }

    this.mutationObserver.observe(observerTarget, mutationObserverConfig);
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }

  private _documentClickHandler = (ev): void => {
    const drawerElement = this.el.querySelector('.chi-drawer');
    const drawerCloseButton = this.nonClosable ? null : drawerElement.querySelector('button.-close');
    const clickTarget = ev.target as HTMLElement;

    if (!this.preventAutoHide) {
      if (drawerElement.classList.contains('-active')) {
        const clickOnCloseButton = drawerCloseButton &&
          clickTarget === drawerCloseButton ||
          contains(drawerCloseButton, clickTarget);

        this.active = contains(drawerElement, clickTarget) &&
          !clickOnCloseButton;
      }
    }
  };

  componentWillLoad(): void {
    if (this.el.getAttribute('title')) {
      this.drawerTitle = this.el.getAttribute('title');
    }

    this.positionValidation(this.position);
    this._animationClasses = this.active ? CLASSES.ACTIVE : '';
    this._backdropAnimationClasses = this.active ? '' : CLASSES.CLOSED;
  }

  componentDidLoad() {
    document.addEventListener('click', this._documentClickHandler);
  }

  componentDidUnload() {
    document.removeEventListener('click', this._documentClickHandler);
  }

  render() {
    // TODO: change this into <chi-button/> element.
    const closeButton = <button class="chi-button -icon -close" onClick={() => this.hide()} aria-label="Close">
      <div class="chi-button__content">
        <chi-icon icon="x"></chi-icon>
      </div>
    </button>;

    const drawer = (
      <div
        class={`chi-drawer -animated
        ${this.position ? `-${this.position}` : ''}
        ${this._animationClasses}
      `}>
        {this.noHeader
          ? !this.nonClosable
            ? [
              closeButton,
              <slot></slot>
            ]
            : <slot></slot>
          : !this.nonClosable
            ? [
              <div class="chi-drawer__header">
                <span class="chi-drawer__title">{this.drawerTitle}</span>
                {closeButton}
              </div>,
              <div class="chi-drawer__content">
                <slot></slot>
              </div>
            ]
            : [
              <div class="chi-drawer__header">
                <span class="chi-drawer__title">{this.drawerTitle}</span>
              </div>,
              <div class="chi-drawer__content">
                <slot></slot>
              </div>
            ]
        }
      </div>
    );

    if (this.backdrop || this.backdrop === '') {
      return (
        <div class={`chi-backdrop -animated
          ${this.backdrop === 'inverse' ? '-inverse' : ''}
          ${this._backdropAnimationClasses}
        `}>
          <div class="chi-backdrop__wrapper">
            {drawer}
          </div>
        </div>
      );
    } else {
      return drawer;
    }
  }
}
