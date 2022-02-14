import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  State,
  h
} from '@stencil/core';
import { CallbackQueue } from '../../utils/CallbackQueue';

@Component({
  tag: 'chi-number-input',
  styleUrl: 'number-input.scss',
  scoped: true
})
export class NumberInput {
  /**
   * used to enqueue the value changes events
   */
  @State() _didUpdateCallBackOnceQueue: (() => void)[] = [];

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
  @Prop({ reflect: true }) max: number = Number.MAX_SAFE_INTEGER;

  /**
   * used to set a minimum allowed value
   */
  @Prop({ reflect: true }) min: number = Number.MIN_SAFE_INTEGER;

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
  @Prop() inputstyle?: string;

  /**
   * If set, component value won't be updated by itself.
   */
  @Prop({ reflect: true }) preventValueMutation: boolean;

  /**
   * used to provide an input state like 'hover' or 'focus'. Mostly used for testing purposes
   */
  @Prop() state?: string;

  /**
   * used to show a fixed amount of decimal digits after the decimal point.
   */
  @Prop({ reflect: true }) decimals?: number;

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
  @Event({ eventName: 'chiNumberInvalid' }) chiNumberInvalid: EventEmitter<
    void
  >;

  connectedCallback() {
    this.initialValue = this.value;
  }

  componentDidUpdate() {
    CallbackQueue.queueProcess(this._didUpdateCallBackOnceQueue);
  }

  handleChange(ev: Event) {
    ev.stopPropagation();

    if (!this.preventValueMutation) {
      this._didUpdateCallBackOnceQueue.push(() => {
        this.chiChange.emit(this.value);
      });
    } else {
      this.chiChange.emit(this.value);
    }
  }

  handleInput(ev: Event) {
    const input = ev.target as HTMLInputElement;

    ev.stopPropagation();

    this.value = input.value;
    this.chiInput.emit(this.value);

    if (!input.validity.valid) this.chiNumberInvalid.emit();
  }

  private increment() {
    const input = this.el.id
      ? (document.getElementById(`${this.el.id}-control`) as HTMLInputElement)
      : (this.el.children[0].children[0] as HTMLInputElement);

    input.stepUp();
    this.value = this.setNewValue(input.value);

    if (input.valueAsNumber <= this.max) {
      this._didUpdateCallBackOnceQueue.push(() => {
        this.chiChange.emit(this.value);
      });
    }
  }

  private decrement() {
    const input = this.el.id
      ? (document.getElementById(`${this.el.id}-control`) as HTMLInputElement)
      : (this.el.children[0].children[0] as HTMLInputElement);

    input.stepDown();
    this.value = this.setNewValue(input.value);

    if (input.valueAsNumber >= this.min) {
      this._didUpdateCallBackOnceQueue.push(() => {
        this.chiChange.emit(this.value);
      });
    }
  }

  private formatNumber(number: string): string {
    return parseFloat(number).toFixed(this.decimals);
  }

  private setNewValue(number: string): string {
    return this.decimals ? this.formatNumber(number) : number;
  }

  render() {
    const input = (
      <input
        type="number"
        class={`chi-input ${this.inputstyle ? `-${this.inputstyle}` : ''} ${
          this.state ? `-${this.state}` : ''
        }`}
        disabled={this.disabled}
        required={this.required}
        step={this.step}
        max={this.max}
        min={this.min}
        value={this.value}
        onChange={ev => this.handleChange(ev)}
        onInput={ev => this.handleInput(ev)}
        id={this.el.id ? `${this.el.id}-control` : null}
      />
    );

    const base = (
      <div class={`chi-number-input ${this.size ? `-${this.size}` : ''}`}>
        {input}
        <button
          disabled={+this.value <= this.min}
          onClick={() => this.decrement()}
          aria-label="Decrease"
        ></button>
        <button
          disabled={
            +this.value + this.step > this.max || +this.value >= this.max
          }
          onClick={() => this.increment()}
          aria-label="Increase"
        ></button>
      </div>
    );

    const expanded = (
      <div
        class={`chi-number-input -expanded ${this.size ? `-${this.size}` : ''}`}
      >
        {input}
        <button
          class="chi-button -icon"
          disabled={+this.value <= this.min}
          onClick={() => this.decrement()}
          aria-label="Decrease"
        >
          <div class="chi-button__content">
            <chi-icon icon="minus" />
          </div>
        </button>
        <button
          class="chi-button -icon"
          disabled={
            +this.value + this.step > this.max || +this.value >= this.max
          }
          onClick={() => this.increment()}
          aria-label="Increase"
        >
          <div class="chi-button__content">
            <chi-icon icon="plus" />
          </div>
        </button>
      </div>
    );

    if (this.expanded) {
      return expanded;
    } else {
      return base;
    }
  }
}
