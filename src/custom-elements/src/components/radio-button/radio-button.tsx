import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { RADIO_CLASSES } from '../../constants/classes';
import { ChiStates } from '../../constants/states';
import { addMutationObserver } from '../../utils/mutationObserver';
import { v4 as uuid4 } from 'uuid';

@Component({
  tag: 'chi-radio-button',
  scoped: true,
})
export class RadioButton {
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
  @Prop({ mutable: true }) checked?: boolean;
  /**
   * To disable the radiobutton
   */
  @Prop() disabled?: boolean;
  /**
   * To indicate the state
   */
  @Prop() state?: ChiStates;

  private id: string;
  private labelId: string;
  private hasFocus: boolean;

  /**
   * Triggered when the radio-button has lost the focus
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
    this.id = `${uuid4()}`;
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

  render() {
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
          aria-checked={this.checked}
          aria-labelledby={this.labelId}
          onBlur={() => this.blur()}
          onChange={(ev: Event) => this.change(ev)}
          onFocus={() => this.focus()}
          type="radio"
        />
        <label id={this.labelId} class={RADIO_CLASSES.LABEL} htmlFor={this.id}>
          {this.label}
        </label>
      </div>
    );
  }
}
