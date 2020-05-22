import { Component, Element, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';
import { CHI_STATES, ChiStates } from '../../constants/states';
import { ICON_COLORS, IconColors } from '../../constants/color';
import { TEXT_INPUT_SIZES, TextInputSizes } from '../../constants/size';

@Component({
  tag: 'chi-textarea',
  styleUrl: 'textarea.scss',
  scoped: true
})

export class Textarea {
  @Element() el: HTMLChiTextareaElement;
  /**
   * To define state color of Textarea
   */
  @Prop({ reflect: true }) state: ChiStates;
  /**
   * To add a left positioned icon
   */
  @Prop({ reflect: true }) iconLeft: string;
  /**
   * To add a right positioned icon
   */
  @Prop({ reflect: true }) iconRight: string;
  /**
   * To define color of left icon
   */
  @Prop({ reflect: true }) iconLeftColor: IconColors;
  /**
   * To define color of right icon
   */
  @Prop({ reflect: true }) iconRightColor: IconColors;
  /**
   * To define size of Textarea
   */
  @Prop({ reflect: true }) size ?: TextInputSizes = 'md';
  /**
   * To read value of Textarea
   */
  @Prop({ attribute: null, mutable: true }) value = '';
  /**
   * To define name of Textarea
   */
  @Prop({ reflect: true }) name: string;
  /**
   * To disable Textarea
   */
  @Prop({ reflect: true }) disabled = false;
  /**
   * To define -hover, -focus statuses
   */
  @Prop() _status: '-hover' | '-focus';
  /**
   * Triggered when an alteration to the element's value is committed by the user
   */
  @Event({ eventName: 'chiChange' }) eventChange: EventEmitter<string>;
  /**
   * Triggered when the user changed the element's value but did not commit the change yet
   */
  @Event({ eventName: 'chiInput' }) eventInput: EventEmitter<string>;
  /**
   * Triggered when the user sets focus on the element.
   */
  @Event({ eventName: 'chiFocus' }) eventFocus: EventEmitter;
  /**
   * Triggered when the element has lost focus.
   */
  @Event({ eventName: 'chiBlur' }) eventBlur: EventEmitter;

  @Watch('state')
  stateValidation(newValue: ChiStates) {
    const validValues = CHI_STATES.join(', ');

    if (newValue && !CHI_STATES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid state for textarea. If provided, valid values are: ${validValues}. `);
    }
  }

  @Watch('size')
  sizeValidation(newValue: TextInputSizes) {
    const validValues = TEXT_INPUT_SIZES.join(', ');

    if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for textarea. If provided, valid values are: ${validValues}. `);
    }
  }

  colorValidation(newValue: IconColors) {
    const validValues = ICON_COLORS.join(', ');

    if (newValue && !ICON_COLORS.includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for icon. If provided, valid values are: ${validValues}. `);
    }
  }

  @Watch('iconLeftColor')
  iconLeftColorValidation(newValue: IconColors) {
    this.colorValidation(newValue);
  }

  @Watch('iconRightColor')
  iconRightColorValidation(newValue: IconColors) {
    this.colorValidation(newValue);
  }

  _handleValueInput(valueChange: Event) {
    this.value = (valueChange.target as HTMLInputElement).value;
    this.eventInput.emit(this.value);
  }

  _handleValueChange() {
    this.eventChange.emit(this.value);
  }

  componentWillLoad() {
    this.stateValidation(this.state);
    this.iconLeftColorValidation(this.iconLeftColor);
    this.iconRightColorValidation(this.iconRightColor);
    this.sizeValidation(this.size);
  }

  render() {
    const textareaElement = <textarea
      class={
        `chi-input
        ${this.state ? `-${this.state}` : ''}
        ${this.size ? `-${this.size}` : ''}
        ${this._status ? `-${this._status}` : ''}
        `}
      name={this.name || ''}
      disabled={this.disabled}
      id={this.el.id ? `${this.el.id}-control` : null}
      onFocus={() => this.eventFocus.emit()}
      onBlur={() => this.eventBlur.emit()}
      onInput={(ev) => this._handleValueInput(ev)}
      onChange={() => this._handleValueChange()}
    ><slot></slot></textarea>;
    const iconClasses = `
      ${this.iconLeft ? '-icon--left' : ''}
      ${this.iconRight ? '-icon--right' : ''}
    `;
    const iconLeft = this.iconLeft && <chi-icon color={this.iconLeftColor || ''} icon={this.iconLeft} />;
    const iconRight = this.iconRight && <chi-icon color={this.iconRightColor || ''} icon={this.iconRight} />;

    const textarea = this.iconLeft || this.iconRight ?
      <div class={`chi-input__wrapper ${iconClasses}`}>
        {textareaElement}
        {iconLeft}
        {iconRight}
      </div> : textareaElement;

    return textarea;
  }
}
