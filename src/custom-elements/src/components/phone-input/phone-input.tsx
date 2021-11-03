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
  CountryCallingCode,
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
  @State() _prefixLiteral: string;
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
    this.changedPrefix();
    this.stateValidation(this.state);
    this._uuid = this.el.id ? this.el.id : `dp-${uuid4()}`;
  }

  componentDidUnload(): void {
    document.removeEventListener('click', this._closeDropdown);
  }

  @Watch('_prefixLiteral')
  changedPrefix(): void {
    if (this._prefixLiteral) {
      const code: CountryCallingCode = this._prefixLiteral.trim().substr(1);
      const selectedCountry: Country = this._countries.find(
        country => country.dialCode === code
      );

      if (selectedCountry) {
        this._country = selectedCountry;
      }
    } else if (this.defaultCountry && isSupportedCountry(this.defaultCountry)) {
      this._country = this._countries.find(
        country => country.countryAbbr === this.defaultCountry
      );
    }
  }

  @Watch('state')
  stateValidation(newValue: ChiStates): void {
    const validValues = CHI_STATES.join(', ');

    if (newValue && !CHI_STATES.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid state for phone input. If provided, valid values are: ${validValues}. `
      );
    }
  }

  _closeDropdown = (): void => {
    this._clickedOnComponent
      ? (this._clickedOnComponent = false)
      : (this._dropdownActive = false);
  };

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
    this._suffix && this._suffix.trim()
      ? this.chiChange.emit(`${this._prefixLiteral}${this._suffix}`)
      : this.chiChange.emit('');
  };

  _inputHandler = (event: Event): void => {
    event.stopPropagation();
    const value = (event.target as HTMLInputElement).value;

    this._isNumberInvalid = false;
    this._suffix = this._country
      ? new AsYouType(this._country.countryAbbr).input(value)
      : value;
    this._suffix && this._suffix.trim()
      ? this.chiInput.emit(`${this._prefixLiteral}${this._suffix}`)
      : this.chiInput.emit('');
  };

  prefixChangeHandler(country: Country): void {
    this._prefixLiteral = `+${country.dialCode}`;
    this._country = country;
    this.chiChange.emit(`${this._prefixLiteral}${this._suffix}`);
    this._dropdownActive = false;
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
            onClick={() => this.prefixChangeHandler(country)}
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
        onClick={(): void => {
          this._clickedOnComponent = true;
        }}
      >
        <button
          disabled={this.disabled}
          class={`${BUTTON_CLASSES.BUTTON} ${DROPDOWN_CLASSES.TRIGGER} -${this.size}`}
          onClick={(): void => {
            this._dropdownActive = !this._dropdownActive;
          }}
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
