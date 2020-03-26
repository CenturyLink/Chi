import { Component, Element, Prop, Watch, h } from '@stencil/core';

const VALID_STATES = ['', 'success', 'warning', 'danger'];
const VALID_SIZES = ['', 'sm', 'md', 'lg', 'xl'];

@Component({
  tag: 'chi-text-input',
  styleUrl: 'text-input.scss',
  scoped: true
})

export class TextInput {
  @Element() el: HTMLInputElement;
  /**
   * To define state color of Text input
   */
  @Prop() state: string;
  /**
   * To add a left positioned icon
   */
  @Prop() leftIcon: string;
  /**
   * To add a right positioned icon
   */
  @Prop() rightIcon: string;
  /**
   * To define color of left icon
   */
  @Prop() leftIconColor: string;
  /**
   * To define color of right icon
   */
  @Prop() rightIconColor: string;
  /**
   * To define size of Text input
   */
  @Prop() size: string;
  /**
   * To define palceholder of Text input
   */
  @Prop() placeholder: string;
  /**
   * To define value of Text input
   */
  @Prop() value: string;
  /**
   * To disable Text input
   */
  @Prop() disabled: boolean;
  /**
   * To define -active, -hover, -focus statuses
   */
  @Prop() status: string;

  @Watch('state')
  stateValidation(newValue: string) {
    if (newValue && !VALID_STATES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid state for input. Valid values are success, warning, danger or ''. `);
    }
  }

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !VALID_SIZES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for input. Valid values are sm, md, lg, xl, ''. `);
    }
  }

  componentWillLoad() {
    this.stateValidation(this.state);
    this.sizeValidation(this.size);
  }

  render() {
    const inputElement = <input
      type="text"
      class={
        `chi-input
        ${this.state ? `-${this.state}` : ''}
        ${this.size ? `-${this.size}` : ''}
        ${this.status ? `-${this.status}` : ''}`}
      placeholder={this.placeholder ? this.placeholder : ''}
      value={this.value ? this.value : ''}
      disabled={this.disabled}
    />;
    const iconClasses = `
      ${this.leftIcon ? '-icon--left ' : ''}
      ${this.rightIcon ? '-icon--right' : ''}
    `;
    const leftIcon = this.leftIcon ? <chi-icon color={this.leftIconColor ? this.leftIconColor : ''} icon={this.leftIcon} /> : '';
    const rightIcon = this.rightIcon ? <chi-icon color={this.rightIconColor ? this.rightIconColor : ''} icon={this.rightIcon} /> : '';

    const input = this.leftIcon || this.rightIcon ?
      <div class={`chi-input__wrapper ${iconClasses}`}>
        {inputElement}
        {leftIcon}
        {rightIcon}
      </div> : inputElement;

    return input;
  }
}
