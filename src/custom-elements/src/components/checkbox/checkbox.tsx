import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  h,
  Watch
} from '@stencil/core';
import { CHECKBOX_CLASSES, SR_ONLY } from '../../constants/classes';
import { ChiStates } from '../../constants/states';

@Component({
  tag: 'chi-checkbox',
  scoped: true
})
export class Checkbox {
  @Element() el: HTMLElement;
  /**
   * To provide checkbox label as a string
   */
  @Prop() label: string;
  /**
   * To render the checkbox input with a respective name attribute
   */
  @Prop() name: string;
  /**
   * To render the checkbox in checked state
   */
  @Prop() checked?: boolean;
  /**
   * To add indeterminate state to checkbox
   */
  @Prop() indeterminate?: boolean;
  /**
   * To disable the checkbox
   */
  @Prop() disabled?: boolean;
  /**
   * To indicate which form field is required.
   */
  @Prop() required = false;
  /**
   * To indicate the state.
   */
  @Prop() state?: ChiStates;

  private input?: HTMLInputElement;
  id: string;

  /**
   * Triggered when the user selects or deselects the chechbox
   */
  @Event() chiChange: EventEmitter<string | boolean>;

  connectedCallback() {
    this.id = this.el.getAttribute('id');
  }

  toggle(ev: Event) {
    this.checked = (ev.target as HTMLInputElement).checked;
    this.indeterminate = false;
    this._emitChange(this.checked);
  }

  _emitChange(checked: boolean) {
    this.chiChange.emit(checked);
  }

  _updateIndeterminate() {
    this.input.indeterminate = this.indeterminate;
  }

  @Watch('indeterminate')
  updateIndeterminate(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this._updateIndeterminate();
    }
  }

  componentDidLoad() {
    this._updateIndeterminate();
  }

  render() {
    const requiredField = this.required ? <abbr class="chi-label__required" title="Required field">*</abbr> : null;

    return (
      <div class={CHECKBOX_CLASSES.checkbox}>
        <input
          class={`${CHECKBOX_CLASSES.INPUT} ${this.indeterminate &&
            CHECKBOX_CLASSES.INDETERMINATE}`}
          checked={this.checked}
          disabled={this.disabled}
          id={`${this.id}-control`}
          name={this.name}
          ref={el => (this.input = el)}
          onChange={(ev: Event) => this.toggle(ev)}
          type="checkbox"
        />
        <label class={`${CHECKBOX_CLASSES.LABEL} ${this.state ? `-${this.state}` : ''}`} htmlFor={`${this.id}-control`}>
          {this.label}
          <div class={SR_ONLY}>
            Select {this.label || this.name} {this.id}
          </div>
          {requiredField}
        </label>
        <slot name="chi-checkbox__help"></slot>
      </div>
    );
  }
}
