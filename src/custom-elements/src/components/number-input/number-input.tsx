import { Component, Event, EventEmitter, Prop, State, h, Element } from '@stencil/core';
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
  @Prop({ mutable: true, reflect: true }) value = '0';

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

  @Element() el: HTMLElement;

  @Event() chiChange: EventEmitter<string>;

  componentDidLoad() {
    this.initialValue = this.value;
  }

  componentDidUpdate() {
    CallbackQueue.queueProcess(this._didUpdateCallBackOnceQueue);
  }

  static isNumeric(n: string | number) {
    return (
      (typeof n === 'number' || typeof n === 'string') &&
      !isNaN(+n - parseFloat(`${n}`))
    );
  }

  _setNewValue(newValue: string) {
    if (!this.preventValueMutation) {
      this.value = newValue;
      this._didUpdateCallBackOnceQueue.push(() => {
        this.chiChange.emit(newValue);
      });
    } else {
      this.chiChange.emit(newValue);
    }
  }

  handleChange(ev: Event) {
    ev.stopPropagation();

    let newValue = !!ev.target
      ? (ev.target as HTMLInputElement).value.toString()
      : null;
    newValue = NumberInput.isNumeric(newValue) ? newValue : null;

    if (newValue !== null) {
      let steppedValue =
        Math.round(10000 * ((+newValue - this.initialValue) / this.step)) /
        10000;
      const steppedMax =
        Math.round(
          10000 * Math.floor((+this.max - this.initialValue) / this.step)
        ) / 10000;
      const steppedMin =
        Math.round(
          10000 * Math.ceil((+this.min - this.initialValue) / this.step)
        ) / 10000;

      steppedValue = Math.max(Math.min(steppedValue, steppedMax), steppedMin);
      newValue = (
        Math.round(steppedValue) * this.step +
        +this.initialValue
      ).toString();
    }

    if (newValue !== this.value) {
      this._setNewValue(newValue);
    }
  }

  private increment() {
    const step = this.step;
    const newValue = Math.round((+this.value + step) * 10000) / 10000;

    if (newValue <= this.max) {
      this.value = newValue.toString();
      this._didUpdateCallBackOnceQueue.push(() => {
        this.chiChange.emit(this.value);
      });
    }
  }

  private decrement() {
    const step = this.step;
    const newValue = Math.round((+this.value - step) * 10000) / 10000;

    if (newValue >= this.min) {
      this.value = newValue.toString();
      this._didUpdateCallBackOnceQueue.push(() => {
        this.chiChange.emit(this.value);
      });
    }
  }

  render() {
    const input = (
      <input
        type="number"
        class={`chi-input ${this.size ? `-${this.size}` : ''} ${
          this.inputstyle ? `-${this.inputstyle}` : ''
        } ${this.state ? `-${this.state}` : ''}`}
        disabled={this.disabled}
        value={this.value}
        step={this.step}
        max={this.max}
        min={this.min}
        onChange={ev => this.handleChange(ev)}
        id={this.el.id ? `${this.el.id}-control` : null}
      />
    );

    const base = (
      <div class="chi-input__wrapper">
        {input}
        <button
          disabled={+this.value - this.step < this.min}
          onClick={() => this.decrement()}
          aria-label="Decrease"
        ></button>
        <button
          disabled={+this.value + this.step > this.max}
          onClick={() => this.increment()}
          aria-label="Increase"
        ></button>
      </div>
    );

    const expanded = (
      <div
        class={`m-inputNumber ${this.size ? `-${this.size}` : ''}`}
      >
        {input}
        <button
          class={`chi-btn -icon ${this.size ? `-${this.size}` : ''}`}
          disabled={+this.value - this.step < this.min}
          onClick={() => this.decrement()}
          aria-label="Decrease"
        >
          <div class="chi-btn__content">
            <chi-icon icon="minus" />
          </div>
        </button>
        <button
          class={`chi-btn -icon ${this.size ? `-${this.size}` : ''}`}
          disabled={+this.value + this.step > this.max}
          onClick={() => this.increment()}
          aria-label="Increase"
        >
          <div class="chi-btn__content">
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
