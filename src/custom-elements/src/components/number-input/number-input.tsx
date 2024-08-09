import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';
import { CHI_STATES, ChiStates } from '../../constants/states';
import { addMutationObserver } from '../../utils/mutationObserver';

@Component({
  tag: 'chi-number-input',
  styleUrl: 'number-input.scss',
  scoped: true,
})
export class NumberInput {
  /**
   * used to store the initial value of the number input
   */
  @State() initialValue;

  /**
   * used to hold the value of the number input
   */
  @Prop({ mutable: true, reflect: true }) value: string;

  /**
   * used to set a step to indicate the expected granularity
   */
  @Prop({ reflect: true }) step = 1;

  /**
   * used to set a maximum allowed value
   */
  @Prop({ reflect: true }) max: number;

  /**
   * used to set a minimum allowed value
   */
  @Prop({ reflect: true }) min: number;

  /**
   * used to determine if component is disabled or not
   */
  @Prop({ reflect: true }) disabled?: boolean;

  /**
   * used to determine if component is required or not
   */
  @Prop({ reflect: true }) required?: boolean;

  /**
   * used to determine component's size
   */
  @Prop({ reflect: true }) size?: string;

  /**
   * used to set component's expanded mode
   */
  @Prop({ reflect: true }) expanded?: boolean;

  /**
   * used to provide an input style like 'danger'. Mostly used for testing purposes
   */
  @Prop() inputstyle?: ChiStates;

  /**
   * If set, component value won't be updated by itself.
   */
  @Prop({ reflect: true }) preventValueMutation: boolean;

  /**
   * used to provide an input state like 'hover' or 'focus'. Mostly used for testing purposes
   */
  @Prop() state?: string;

  /**
   * To display an additional helper text message below the Number Input
   */
  @Prop({ reflect: true }) helperMessage?: string;

  @Element() el: HTMLElement;

  /**
   * Triggered when an alteration to the element's value is committed by the user
   */
  @Event({ eventName: 'chiChange' }) chiChange: EventEmitter<string>;

  /**
   * Triggered when the user changed the element's value but did not commit the change yet
   */
  @Event({ eventName: 'chiInput' }) chiInput: EventEmitter<string>;

  /**
   * Triggered when the element's value committed by the user is an invalid number
   */
  @Event({ eventName: 'chiNumberInvalid' }) chiNumberInvalid: EventEmitter<void>;

  /**
   * Triggered when the user sets focus on the element.
   */
  @Event({ eventName: 'chiFocus' }) chiFocus: EventEmitter;

  /**
   * Triggered when the element has lost focus.
   */
  @Event({ eventName: 'chiBlur' }) chiBlur: EventEmitter;

  /**
   * Triggered when the user clicks on increment/decrement button.
   */
  @Event({ eventName: 'chiClick' }) chiClick: EventEmitter;

  @Watch('inputstyle')
  inputStyleValidation(newValue: ChiStates) {
    if (newValue && !CHI_STATES.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid inputstyle for number input. If provided, valid values are: ${CHI_STATES.join(
          ', '
        )}. `
      );
    }
  }

  _numberInput!: HTMLInputElement;

  connectedCallback() {
    addMutationObserver.call(this);
    this.initialValue = this.value;
  }

  handleChange(ev: Event) {
    ev.stopPropagation();
    this.chiChange.emit(this.value);
  }

  handleInput(ev: Event) {
    const input = ev.target as HTMLInputElement;

    ev.stopPropagation();

    this.value = input.value;
    this.chiInput.emit(this.value);

    if (!input.validity.valid) this.chiNumberInvalid.emit();
  }

  emitEventsOnClick(ev: Event) {
    this.chiInput.emit(this.value);
    this.chiChange.emit(this.value);
    this.chiClick.emit(ev);
  }

  private increment(clickEv: Event) {
    this.el.querySelector('input').focus();
    this._numberInput.stepUp();
    this.value = this._numberInput.value;

    this.emitEventsOnClick(clickEv);
  }

  private decrement(clickEv: Event) {
    this.el.querySelector('input').focus();
    this._numberInput.stepDown();
    this.value = this._numberInput.value;

    this.emitEventsOnClick(clickEv);
  }

  /**
   * Generates and returns input element
   */
  getInput(): HTMLInputElement {
    return (
      <input
        type="number"
        ref={(el) => (this._numberInput = el as HTMLInputElement)}
        class={`chi-input ${this.inputstyle ? `-${this.inputstyle}` : ''} ${this.state ? `-${this.state}` : ''}`}
        disabled={this.disabled}
        required={this.required}
        step={this.step}
        max={this.max}
        min={this.min}
        value={this.value}
        onClick={(ev) => this.chiClick.emit(ev)}
        onChange={(ev) => this.handleChange(ev)}
        onInput={(ev) => this.handleInput(ev)}
        onFocus={() => this.chiFocus.emit()}
        onBlur={() => this.chiBlur.emit()}
        id={this.el.id ? `${this.el.id}-control` : null}
      />
    );
  }

  getBaseNumberInput() {
    return (
      <div class={`chi-number-input ${this.size ? `-${this.size}` : ''}`}>
        {this.getInput()}
        <button
          disabled={this.isDecreaseDisabled()}
          onClick={(ev) => this.decrement(ev)}
          aria-label="Decrease"
        ></button>
        <button
          disabled={this.isIncreaseDisabled()}
          onClick={(ev) => this.increment(ev)}
          aria-label="Increase"
        ></button>
      </div>
    );
  }

  getExpandedNumberInput() {
    return (
      <div class={`chi-number-input -expanded ${this.size ? `-${this.size}` : ''}`}>
        {this.getInput()}
        <button
          class="chi-button -icon"
          disabled={this.isDecreaseDisabled()}
          onClick={(ev) => this.decrement(ev)}
          aria-label="Decrease"
        >
          <div class="chi-button__content">
            <chi-icon icon="minus" />
          </div>
        </button>
        <button
          class="chi-button -icon"
          disabled={this.isIncreaseDisabled()}
          onClick={(ev) => this.increment(ev)}
          aria-label="Increase"
        >
          <div class="chi-button__content">
            <chi-icon icon="plus" />
          </div>
        </button>
      </div>
    );
  }

  isDecreaseDisabled() {
    return !!(this.min && Number(this.value) <= this.min);
  }

  isIncreaseDisabled() {
    return !!(this.max && (Number(this.value) + this.step > this.max || Number(this.value) >= this.max));
  }

  getHelperMessage() {
    return <chi-helper-message state={this.inputstyle}>{this.helperMessage}</chi-helper-message>;
  }

  render() {
    let input = this.expanded ? this.getExpandedNumberInput() : this.getBaseNumberInput();

    if (this.helperMessage) {
      input = (
        <div class="chi-input__wrapper">
          {input}
          {this.getHelperMessage()}
        </div>
      );
    }

    return input;
  }
}
