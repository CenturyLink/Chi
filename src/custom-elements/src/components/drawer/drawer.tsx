import { Component, Event, EventEmitter, Method, Prop, State, Watch, h } from '@stencil/core';
import { CARDINAL_POSITIONS } from '../../constants/positions';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { ANIMATION_DURATION, CLASSES } from '../../constants/constants';

@Component({
  tag: 'chi-drawer',
  styleUrl: 'drawer.scss',
  scoped: true
})
export class Drawer {

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
   * adds a close button
   */
  @Prop({ reflect: true }) collapsible: boolean;

  /**
   * to remove the space for the header
   */
  @Prop({ reflect: true }) headless: boolean;

  /**
   * header title. Not compatible with headless
   */
  @Prop({ reflect: true }) headerTitle: string;

  /**
   * Status classes for the show/hide animation
   */
  @State() _animationClasses: string;

  /**
   * Status classes for the show/hide animation
   */
  @State() _backdropAnimationClasses: string;

  private animation: ThreeStepsAnimation;

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
  @Event({eventName: 'chiDrawerShow'}) eventShow: EventEmitter;
  /**
   * Drawer hide method has executed, but the closing animation has not started yet
   */
  @Event({eventName: 'chiDrawerHide'}) eventHide: EventEmitter;
  /**
   * Drawer has been shown to the user and is fully visible. The animation has completed.
   */
  @Event({eventName: 'chiDrawerShown'}) eventShown: EventEmitter;
  /**
   * Drawer has been hidden to the user. The animation has completed.
   */
  @Event({eventName: 'chiDrawerHidden'}) eventHidden: EventEmitter;

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

  componentWillLoad(): void {
    this.positionValidation(this.position);
    this._animationClasses = this.active ? CLASSES.ACTIVE : '';
    this._backdropAnimationClasses = this.active ? '' : CLASSES.CLOSED;
  }

  render() {

    // TODO: change this into <chi-button/> element.
    const closeButton = <button class="a-btn -icon -close" onClick={() => this.hide()} aria-label="Close">
      <div class="a-btn__content">
        <chi-icon icon="x"></chi-icon>
      </div>
    </button>;

    const drawer = (
      <div
        class={`m-drawer -animated
        ${this.position ? `-${this.position}` : ''}
        ${this._animationClasses}
      `}>
        {this.headless
          ? this.collapsible
            ? [
              closeButton,
              <slot></slot>
            ]
            : <slot></slot>
          : this.collapsible
            ? [
              <div class="m-drawer__header">
                <span class="m-drawer__title">{this.headerTitle}</span>
                {closeButton}
              </div>,
              <div class="m-drawer__content">
                <slot></slot>
              </div>
            ]
            : [
              <div class="m-drawer__header">
                <span class="m-drawer__title">{this.headerTitle}</span>
              </div>,
              <div class="m-drawer__content">
                <slot></slot>
              </div>
            ]
        }
      </div>
    );

    if (this.backdrop || this.backdrop === '') {
      return (
        <div class={`m-backdrop -animated
          ${this.backdrop === 'inverse' ? '-inverse' : ''}
          ${this._backdropAnimationClasses}
        `}>
          <div class="m-backdrop__wrapper">
            {drawer}
          </div>
        </div>
      );
    } else {
      return drawer;
    }
  }
}
