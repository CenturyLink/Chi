import {Component, Event, EventEmitter, Method, Prop, State, Watch} from '@stencil/core';
import { CARDINAL_EXTENDED_POSITIONS } from '../../models/positions';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';
import { ANIMATION_DURATION, CLASSES } from '../../models/Constants';

@Component({
  tag: 'chi-popover',
  styleUrl: 'popover.scss',
  scoped: true
})
export class Popover {

  /**
   * to set position of the popover { top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end }
   */
  @Prop({ reflectToAttr: true }) position = 'top';

  /**
   * to add an arrow between the popover and the reference element
   */
  @Prop({ reflectToAttr: true }) arrow: false;

  /**
   * to open or close the popover
   */
  @Prop({ reflectToAttr: true, mutable: true }) active: boolean;

  /**
   * CSS Selector to the reference Element. I.e. #id > p
   */
  @Prop({ reflectToAttr: true }) reference: string;

  /**
   * Prevents closing the popover when clicking out of its bounds
   */
  @Prop({ reflectToAttr: true }) preventAutoHide: boolean;

  /**
   * Status classes for the show/hide animation
   */
  @State() _animationClasses = '';

  @Prop() rel: string;

  private animation: ThreeStepsAnimation;

  private _reference: Element;

  @Watch('position')
  positionValidation(newValue: string) {
    if (newValue && !CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
      throw new Error(`Not valid position ${newValue} for popover. Valid values are top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start and left-end. `);
    }
  }

  @Watch('reference')
  referenceElementChanged(newValue: string, oldValue: string) {
    this.referenceElementValidation(newValue, oldValue);
    const reference = document.querySelectorAll(newValue);
    this._reference = reference[0];
  }

  referenceElementValidation(newValue: string, oldValue: string) {
    if (!newValue && !this._reference) {
      throw new Error(`No reference were specified. `);
    }

    if (newValue === oldValue) {
      return;
    }

    if (newValue) {
      const referenceCandidates = document.querySelectorAll(newValue);
      if (referenceCandidates.length === 0) {
        throw new Error(`Reference element could not be found. `);
      }
      if (referenceCandidates.length > 1) {
        throw new Error(`More than one reference candidates were found. Not able to discern which one is the preferred. `);
      }
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
  toggle() {
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
  show() {
    this.active = true;
  }

  /**
   * Hides the popover
   */
  @Method()
  hide() {
    this.active = false;
  }

  /**
   * Popover show method has executed, but the showing animation has not started yet
   */
  @Event({eventName: 'chi:show'}) eventShow: EventEmitter;
  /**
   * Popover hide method has executed, but the closing animation has not started yet
   */
  @Event({eventName: 'chi:hide'}) eventHide: EventEmitter;
  /**
   * Popover has been shown to the user and is fully visible. The animation has completed.
   */
  @Event({eventName: 'chi:shown'}) eventShown: EventEmitter;
  /**
   * Popover has been hidden to the user. The animation has completed.
   */
  @Event({eventName: 'chi:hidden'}) eventHidden: EventEmitter;

  private _show() {
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
    }

    if (this._animationClasses !== CLASSES.ACTIVE) {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._animationClasses = CLASSES.TRANSITIONING;
        },
        () => {
          this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
        },
        () => {
          this._animationClasses = CLASSES.ACTIVE;
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

    if (this._animationClasses !== '') {
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
        },
        () => {
          this._animationClasses = CLASSES.TRANSITIONING;
        },
        () => {
          this._animationClasses = '';
          this.eventHidden.emit();
        },
        ANIMATION_DURATION.MEDIUM
      );
    }

    this.eventHide.emit();
  }

  componentWillLoad(): void {
    this.positionValidation(this.position);
    this.referenceElementChanged(this.reference, '');
  }

  render() {
    return (
      <div class={`m-popover
        ${this.position ? `m-popover--${this.position}` : ''}
        ${this._animationClasses}
        ${this.active ? '-active' : ''}
      `}>
        <slot></slot>
        {this.arrow && <div class="a-arrow"></div>}
      </div>
    );
  }
}
