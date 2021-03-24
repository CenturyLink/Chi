import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';
import { TEXT_INPUT_SIZES, TextInputSizes } from '../../constants/size';

@Component({
  tag: 'chi-search-input',
  styleUrl: 'search-input.scss',
  scoped: true
})

export class SearchInput {
  /**
   * To define size of Search input
   */
  @Prop({ reflect: true }) size ?: TextInputSizes = 'md';
  /**
   * To define placeholder of Search input
   */
  @Prop({ reflect: true }) placeholder: string;
  /**
   * To define value of Search input
   */
  @Prop({ mutable: true, reflect: true }) value = '';
  /**
   * To define name of Search input
   */
  @Prop({ reflect: true }) name: string;
  /**
   * To disable Search input
   */
  @Prop({ reflect: true }) disabled = false;
  /**
   * To disable Value attribute mutation
   */
  @Prop({ reflect: true }) preventValueMutation = false;
  /**
   * To define -hover, -focus statuses
   */
  @Prop() _status: string;

  @Element() el: HTMLElement;

  @State() _cleanButtonVisible = (this.value && !this.disabled) ? true : false;

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
  /**
   * Triggered when the user clicked the X button.
   */
  @Event({ eventName: 'chiClean' }) eventClean: EventEmitter;
  /**
   * Triggered when the user clicked the Search button.
   */
   @Event({ eventName: 'chiSearch' }) eventSearch: EventEmitter;

  @Watch('size')
  sizeValidation(newValue: TextInputSizes) {
    const validValues = TEXT_INPUT_SIZES.join(', ');

    if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for input. If provided, valid values are: ${validValues}. `);
    }
  }

  _handleValueInput(valueChange: Event) {
    const newValue = (valueChange.target as HTMLInputElement).value;

    if (!this.preventValueMutation) {
      this.value = newValue;
    }

    if (newValue === "") {
      this._cleanButtonVisible = false;
    } else {
      this._cleanButtonVisible = true;
    }
    this.eventInput.emit(newValue);
  }

  _handleValueChange(valueChange: Event) {
    const newValue = (valueChange.target as HTMLInputElement).value;

    this.eventChange.emit(newValue);
  }

  _cleanInput() {
    const input = this.el.querySelector('input[type=search]');

    this.value = '';
    (input as HTMLInputElement).focus();
    this._cleanButtonVisible = false;
    this.eventClean.emit();
  }

  componentWillLoad() {
    this.sizeValidation(this.size);
  }

  render() {
    const searchInputElement = <input
      type="search"
      class={`
        chi-input chi-search__input
        ${this.size ? `-${this.size}` : ''}
        ${this._status ? `-${this._status}` : ''}
      `}
      placeholder={this.placeholder || ''}
      value={this.value}
      name={this.name || ''}
      disabled={this.disabled}
      id={this.el.id ? `${this.el.id}-control` : null}
      onFocus={() => this.eventFocus.emit()}
      onBlur={() => this.eventBlur.emit()}
      onInput={(ev) => this._handleValueInput(ev)}
      onChange={(ev) => this._handleValueChange(ev)}
      autocomplete="off"
      aria-label="search input"
    />;

    const searchXIcon = this._cleanButtonVisible ?
      <button class="chi-button -icon -close -sm"
        onClick={() => this._cleanInput()}
        aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x"></i>
        </div>
      </button> : null;

    const searchIcon = <button
      class={`
        chi-button -icon -flat -bg--none
        ${this.size === 'sm' ? '-sm' : ''}
        `}
        onClick={() => this.eventSearch.emit(this.value)}
        aria-label="Search">
          <div class="chi-button__content">
            <i class="chi-icon icon-search"></i>
          </div>
      </button>;

    const input = <div
      class="chi-input__wrapper -icon--right">
        {searchInputElement}
        {searchXIcon}
        {searchIcon}
    </div>;

    return input;
  }
}
