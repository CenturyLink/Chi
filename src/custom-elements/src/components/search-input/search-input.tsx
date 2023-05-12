import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h
} from '@stencil/core';
import { TEXT_INPUT_SIZES, TextInputSizes } from '../../constants/size';
import { DROPDOWN_CLASSES } from '../../constants/classes';
import { AutocompleteItems, SearchInputModes } from '../../constants/types';

@Component({
  tag: 'chi-search-input',
  styleUrl: 'search-input.scss',
  scoped: true
})
export class SearchInput {
  /**
   * To define size of Search input
   */
  @Prop({ reflect: true }) size?: TextInputSizes = 'md';
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
   * To render Search Input in readonly mode
   */
  @Prop({ reflect: true }) readonly = false;
  /**
   * To define -hover, -focus statuses
   */
  @Prop() _status: string;

  @Element() el: HTMLElement;

  @State() _cleanButtonVisible = this.value && !this.disabled ? true : false;

  /**
   * To set the mode to search input
   */
  @Prop({ reflect: true }) mode?: SearchInputModes;

  /**
   * To set the list of items to be used in the dropdown menu in autocomplete mode
   */
  @Prop({ mutable: true, reflect: true }) menuItems: AutocompleteItems[];

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
      throw new Error(
        `${newValue} is not a valid size for input. If provided, valid values are: ${validValues}. `
      );
    }
  }

  @Watch('value')
  updateValue(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.value = newValue;
    }
  }

  //#region Lifecycle hooks
  componentWillLoad(): void {
    this.sizeValidation(this.size);
  }

  componentDidLoad(): void {
    document.addEventListener('click', this._handleClickInDocument.bind(this));
  }

  disconnectedCallback(): void {
    document.removeEventListener('click', this._handleClickInDocument);
  }
  //#endregion

  _handleValueInput(valueChange: Event): void {
    const newValue = (valueChange.target as HTMLInputElement).value;

    if (!this.preventValueMutation) {
      this.value = newValue;
    }

    if (newValue === '') {
      this._cleanButtonVisible = false;
    } else {
      this._cleanButtonVisible = true;
    }
    this.eventInput.emit(newValue);
  }

  _handleValueChange(valueChange: Event): void {
    const newValue = (valueChange.target as HTMLInputElement).value;

    this.eventChange.emit(newValue);
  }

  _handleFocus(): void {
    const isAutocomplete = this._isAutocomplete();
    const dropdown = this.el.querySelector(
      '#dropdown-autocomplete'
    ) as HTMLChiDropdownElement;

    if (isAutocomplete) {
      dropdown.show();
    }

    this.eventFocus.emit();
  }

  _handleClickInDocument(event: Event): void {
    const isAutocomplete = this._isAutocomplete();

    if (isAutocomplete) {
      const isClickInsideSearchInput = this.el.contains(
        event.target as HTMLElement
      );
      const dropdown = this.el.querySelector(
        '#dropdown-autocomplete'
      ) as HTMLChiDropdownElement;

      if (!isClickInsideSearchInput) {
        dropdown.hide();
      }
    }
  }

  _isAutocomplete(): boolean {
    return this.mode === 'autocomplete';
  }

  _cleanInput(): void {
    const input = this.el.querySelector('input[type=search]');

    this.value = '';
    (input as HTMLInputElement).focus();
    this._cleanButtonVisible = false;
    this.eventClean.emit();
  }

  _dropdownAutocomplete(): HTMLChiDropdownElement {
    return (
      <chi-dropdown
        id="dropdown-autocomplete"
        position="bottom"
        prevent-auto-hide
      >
        {this.menuItems?.map(item => (
          <a class={DROPDOWN_CLASSES.MENU_ITEM} href={item.href} slot="menu">
            {item.title}
          </a>
        ))}
      </chi-dropdown>
    );
  }

  render() {
    const isAutocomplete = this._isAutocomplete();
    const autocomplete = isAutocomplete ? 'on' : 'off';
    const searchInputElement = (
      <input
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
        onFocus={() => this._handleFocus()}
        onBlur={() => this.eventBlur.emit()}
        onInput={ev => this._handleValueInput(ev)}
        onChange={ev => this._handleValueChange(ev)}
        autocomplete={autocomplete}
        aria-label="search input"
        readonly={this.readonly}
      />
    );

    const searchXIcon = this._cleanButtonVisible ? (
      <button
        class="chi-button -icon -close -xs"
        onClick={() => {
          if (!this.readonly) {
            this._cleanInput();
          }
        }}
        aria-label="Clear"
      >
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
    ) : null;

    const searchIcon = (
      <button
        class={`
        chi-button -icon -flat -bg--none
        ${this.size ? `-${this.size}` : ''}
        `}
        onClick={() => this.eventSearch.emit(this.value)}
        aria-label="Search"
      >
        <div class="chi-button__content">
          <i class={`chi-icon icon-search`} aria-hidden="true"></i>
        </div>
      </button>
    );

    const input = (
      <div class="chi-input__wrapper -icon--right">
        {searchInputElement}
        {searchXIcon}
        {searchIcon}
      </div>
    );

    const dropdown = isAutocomplete ? this._dropdownAutocomplete() : null;

    return (
      <Host>
        {input}
        {dropdown}
      </Host>
    );
  }
}
