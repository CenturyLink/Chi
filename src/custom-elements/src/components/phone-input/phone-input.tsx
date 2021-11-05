import {
  Component,
  Event,
  EventEmitter,
  Prop,
  h,
  JSX,
  State,
  Watch,
  Element
} from '@stencil/core';
import {
  AsYouType,
  CountryCode,
  getCountries,
  getCountryCallingCode,
  isSupportedCountry,
  isValidPhoneNumber
} from 'libphonenumber-js';
import country from 'all-country-data';
import { ChiStates, CHI_STATES } from '../../constants/states';
import { uuid4 } from '../../utils/utils';
import { TextInputSizes } from '../../constants/size';
import {
  ACTIVE_CLASS,
  BUTTON_CLASSES,
  DROPDOWN_CLASSES,
  PHONE_INPUT_CLASSES
} from '../../constants/classes';
import { Country } from '../../constants/types';

@Component({
  tag: 'chi-phone-input',
  scoped: true
})
export class ChiPhoneInput {
  /**
   * To disable Phone input
   */
  @Prop({ reflect: true }) disabled = false;
  /**
   * To set a default country as a two letter ISO country code
   */
  @Prop({ reflect: true }) defaultCountry: CountryCode = 'US';
  /**
   * To define size of Phone input
   */
  @Prop({ reflect: true }) size: TextInputSizes = 'md';
  /**
   * To define placeholder of Phone input
   */
  @Prop({ reflect: true }) placeholder?: string;
  /**
   * To define state color of Phone input
   */
  @Prop({ reflect: true }) state?: ChiStates;
  /**
   * To define value of Phone input
   */
  @Prop({ mutable: true, reflect: true }) value = '';

  /**
   * Triggered when an alteration to the element's value is committed by the user
   */
  @Event({ eventName: 'chiChange' }) chiChange: EventEmitter<string>;
  /**
   * Triggered when the element's value committed by the user is an invalid phone number for the selected prefix
   */
  @Event({ eventName: 'chiNumberInvalid' }) chiNumberInvalid: EventEmitter<
    void
  >;
  /**
   * Triggered when the user changed the element's value but did not commit the change yet
   */
  @Event({ eventName: 'chiInput' }) chiInput: EventEmitter<string>;

  @Element() el: HTMLElement;

  @State() _isNumberInvalid = false;
  @State() _prefix: string;
  @State() _suffix = '';
  @State() _dropdownActive = false;
  @State() _search = '';
  @State() _country: Country;

  _countries: Country[] = [];
  _clickedOnComponent = false;
  _uuid: string;

  componentWillLoad(): void {
    const countryObjs = country.countryList();
    const dialCodes = getCountries();

    countryObjs.forEach(
      (countryObj: { country: string; country_code: CountryCode }) => {
        if (dialCodes.find(code => code === countryObj.country_code)) {
          const country: Country = {
            name: countryObj.country,
            countryAbbr: countryObj.country_code,
            dialCode: getCountryCallingCode(countryObj.country_code)
          };

          this._countries.push(country);
        }
      }
    );
    document.addEventListener('click', this._closeDropdown);
    this.stateValidation(this.state);
    this._initCountry();
    this._uuid = this.el.id ? this.el.id : `dp-${uuid4()}`;
  }

  componentDidUnload(): void {
    document.removeEventListener('click', this._closeDropdown);
  }

  @Watch('state')
  stateValidation(state: ChiStates): void {
    const validValues = CHI_STATES.join(', ');

    if (state && !CHI_STATES.includes(state)) {
      throw new Error(
        `${state} is not a valid state for phone input. If provided, valid values are: ${validValues}. `
      );
    }
  }

  _initCountry(): void {
    if (isSupportedCountry(this.defaultCountry)) {
      this._country = this._countries.find(
        country => country.countryAbbr === this.defaultCountry
      );
      this._prefix = `+${this._country.dialCode}`;

      if (this.value) {
        this._suffix = new AsYouType(this._country.countryAbbr).input(
          this.value.substring(this.value.indexOf('-') + 1)
        );
      }
    }
  }

  _suffixInputChangeHandler = (event: Event): void => {
    event.stopPropagation();
    this._suffix = (event.target as HTMLInputElement).value;
    if (
      this._country &&
      !isValidPhoneNumber(this._suffix, this._country.countryAbbr)
    ) {
      this._isNumberInvalid = true;
      this.chiNumberInvalid.emit();
    }
    this.value = this._getValue();
    this.chiChange.emit(this.value);
  };

  _inputHandler = (event: Event): void => {
    event.stopPropagation();
    this._isNumberInvalid = false;
    this._suffix = new AsYouType(this._country.countryAbbr).input(
      (event.target as HTMLInputElement).value
    );
    this.value = this._getValue();
    this.chiInput.emit(this.value);
  };

  _prefixChangeHandler(country: Country): void {
    this._prefix = `+${country.dialCode}`;
    this._country = country;
    this.value = this._getValue();
    this.chiChange.emit(this.value);
    this._dropdownActive = false;
  }

  _dropdownTriggerHandler(): void {
    this._dropdownActive = !this._dropdownActive;
    if (this._dropdownActive) {
      setTimeout(() => {
        (this.el.querySelector(
          'input[type=search]'
        ) as HTMLInputElement).focus();
      }, 50);
    }
  }

  _closeDropdown = (): void => {
    this._clickedOnComponent
      ? (this._clickedOnComponent = false)
      : (this._dropdownActive = false);
  };

  _getValue(): string {
    return `${this._prefix}-${this._suffix.replace(/[- )(]/g, '')}`;
  }

  _renderDropdown(): JSX.Element {
    const searchInput = (
      <chi-search-input
        size="sm"
        placeholder="Search"
        value={this._search}
        onChiInput={(ev): void => {
          this._search = (ev.target as HTMLInputElement).value;
        }}
        onChiClean={(): void => {
          this._search = '';
        }}
      ></chi-search-input>
    );
    const filteredCountries = this._countries.filter(country => {
      return (
        country.name.toLowerCase().indexOf(this._search.toLowerCase()) > -1 ||
        country.dialCode.indexOf(this._search) > -1 ||
        ('+' + country.dialCode).indexOf(this._search) > -1
      );
    });
    const countries = (
      <div class={`${DROPDOWN_CLASSES.MENU_CONTENT}`}>
        {filteredCountries.map(country => (
          <a
            href="javascript:void(0);"
            class={`${DROPDOWN_CLASSES.MENU_ITEM} ${
              this._country.countryAbbr === country.countryAbbr
                ? ACTIVE_CLASS
                : ''
            }`}
            onClick={() => this._prefixChangeHandler(country)}
          >
            <span>{country.name}</span>
            <span
              class={`${PHONE_INPUT_CLASSES.CODE}`}
            >{`+${country.dialCode}`}</span>
          </a>
        ))}
      </div>
    );

    return (
      <div
        class={`${DROPDOWN_CLASSES.DROPDOWN}`}
        onClick={() => (this._clickedOnComponent = true)}
      >
        <button
          disabled={this.disabled}
          class={`${BUTTON_CLASSES.BUTTON} ${DROPDOWN_CLASSES.TRIGGER} -${this.size}`}
          onClick={() => this._dropdownTriggerHandler()}
        >
          {this._country ? <span>{`+${this._country.dialCode}`}</span> : 'US'}
        </button>
        <div
          class={`${DROPDOWN_CLASSES.MENU} ${
            this._dropdownActive ? ACTIVE_CLASS : ''
          }`}
        >
          {searchInput}
          {countries}
        </div>
      </div>
    );
  }

  render(): JSX.Element {
    const dropdown = this._renderDropdown();
    const textInput = (
      <chi-text-input
        id={`${this._uuid}`}
        type="tel"
        state={this.state ? this.state : null}
        size={this.size}
        disabled={this.disabled}
        placeholder={this.placeholder}
        value={this._suffix}
        onChiChange={this._suffixInputChangeHandler}
        onChiInput={this._inputHandler}
      />
    );

    return (
      <div class={`${PHONE_INPUT_CLASSES.PHONE_INPUT}`}>
        {dropdown}
        {textInput}
      </div>
    );
  }
}
