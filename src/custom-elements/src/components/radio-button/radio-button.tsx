import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { LABEL_CLASSES, RADIO_CLASSES } from '../../constants/classes';
import { ChiStates } from '../../constants/states';
import { addMutationObserver } from '../../utils/mutationObserver';
import { v4 as uuid4 } from 'uuid';

@Component({
  tag: 'chi-radio-button',
  scoped: true,
})
export class Checkbox {
  @Element() el: HTMLElement;
  /**
   * To provide radiobutton label as a string
   */
  @Prop() label: string;
  /**
   * To render the radiobutton input with a respective name attribute
   */
  @Prop() name: string;
  /**
   * To render the radiobutton in checked state
   */
  @Prop() checked?: boolean;
  /**
   * To disable the radiobutton
   */
  @Prop() disabled?: boolean;
  /**
   * To indicate the state
   */
  @Prop() state?: ChiStates;
  /**
   * To indicate if the element has the focus
   */
  @Prop() hasFocus?: boolean;
  /**
   * To indicate if info icon should be displayed.
   */
  @Prop({ reflect: true }) infoIcon = false;
  /**
   * To provide message for info icon popover.
   */
  @Prop({ reflect: true }) infoIconMessage = 'Helpful information goes here.';

  private id: string;
  private labelId: string;
  private helpButtonId: string;
  private helpPopoverId: string;

  /**
   * Triggered when the radio-button has lost focus
  */
 @Event() chiBlur: EventEmitter<string | boolean>;
 /**
  * Triggered when the user selects or deselects the radio-button
  */
 @Event() chiChange: EventEmitter<string | boolean>;
  /**
   * Triggered when the radio-button has the focus
   */
  @Event() chiFocus: EventEmitter<string | boolean>;

  connectedCallback() {
    this.id = this.el.getAttribute('id');
    addMutationObserver.call(this);
  }

  componentWillLoad() {
    this.helpButtonId = `help-button-${uuid4()}`;
    this.helpPopoverId = `help-popover-${uuid4()}`;
    this.id = `${uuid4()}-control`;
    this.labelId = `radio-label-${this.id}`;
  }

  blur() {
    this.hasFocus = false;
    this._emitBlur(this.hasFocus);
  }

  change(ev: Event) {
    this.checked = (ev.target as HTMLInputElement).checked;
    this._emitChange(this.checked);
  }

  focus() {
    this.hasFocus = true;
    this._emitFocus(this.hasFocus);
  }

  _emitBlur(hasFocus: boolean) {
    this.chiBlur.emit(hasFocus);
  }

  _emitChange(checked: boolean) {
    this.chiChange.emit(checked);
  }

  _emitFocus(hasFocus: boolean) {
    this.chiFocus.emit(hasFocus);
  }

  toggleHelpPopover(): void {
    const helpPopoverElement = document.getElementById(this.helpPopoverId) as HTMLChiPopoverElement;
    if (helpPopoverElement) {
        helpPopoverElement.toggle();
    }
  }

  _getInfoIcon() {
    return this.infoIcon ? (
      <div class={LABEL_CLASSES.HELP}>
        <chi-button
          id={this.helpButtonId}
          onChiClick={() => this.toggleHelpPopover()}
          type="icon"
          size="xs"
          variant="flat"
          alternative-text="Help"
        >
          <chi-icon icon="circle-info-outline" size="xs"></chi-icon>
        </chi-button>
        <chi-popover id={this.helpPopoverId} position="top" variant="text" arrow reference={`#${this.helpButtonId}`}>
          {this.infoIconMessage}
        </chi-popover>
      </div>
    ) : (
      ''
    );
  }

  render() {
    const infoIcon = this._getInfoIcon();
    const stateClass = this.state ? `-${this.state}` : '';

    return (
      <div class={RADIO_CLASSES.RADIO}>
        <input
          class={`
            ${RADIO_CLASSES.INPUT}
            ${stateClass}
          `}
          id={this.id}
          checked={this.checked}
          disabled={this.disabled}
          name={this.name}
          aria-checked={this.checked ? 'true' : 'false'}
          aria-labelledby={this.labelId}
          onBlur={() => this.blur()}
          onChange={(ev: Event) => this.change(ev)}
          onFocus={() => this.focus()}
          type="radio"
          role="radio"
        />
        <label
          id={this.labelId}
          class={`${RADIO_CLASSES.LABEL} ${stateClass}`}
          htmlFor={this.id}
        >
          {this.label}
          {infoIcon}
        </label>
      </div>
    );
  }
}
