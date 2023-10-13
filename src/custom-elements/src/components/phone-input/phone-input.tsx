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
import { EXTRA_COUNTRIES } from '../../constants/constants';
import { ChiStates, CHI_STATES } from '../../constants/states';
import { uuid4 } from '../../utils/utils';
import { TextInputSizes } from '../../constants/size';
import {
  ACTIVE_CLASS,
  BUTTON_CLASSES,
  DROPDOWN_CLASSES,
  PHONE_INPUT_CLASSES
} from '../../constants/classes';
import { Country, ExtraCountry } from '../../constants/types';

@Component({
  tag: 'chi-phone-input',
  scoped: true
})
export class ChiPhoneInput {
  /**
   * To set a default country as a two letter ISO country code
   */
  @Prop({ reflect: true }) defaultCountry: CountryCode = 'US';
  /**
   * To disable Phone input
   */
  @Prop({ reflect: true }) disabled = false;
  /**
   * To define placeholder of Phone input
   */
  @Prop({ reflect: true }) placeholder?: string;
  /**
   * To define size of Phone input
   */
  @Prop({ reflect: true }) size: TextInputSizes = 'md';
  /**
   * To define state color of Phone input
   */
  @Prop({ reflect: true }) state?: ChiStates;
  /**
   * To define value of Phone input
   */
  @Prop({ mutable: true, reflect: true }) value: string;
  /**
   * To define dynamic value of Phone input
   */
  @Prop({ reflect: true }) dynamicValue: boolean = false;
  /**
   * To set numbers only mode on Phone input
   */
  @Prop({ reflect: true }) inputMask: boolean = false;
  /**
   * To define two letter ISO country codes to exclude from Phone input dropdown
   */
  @Prop({ mutable: true, reflect: true }) excludedCountries?: string;

  /**
   * Triggered when an alteration to the element's value is committed by the user
   */
  @Event({ eventName: 'chiChange' }) chiChange: EventEmitter<string>;
  /**
   * Triggered when the user changed the element's value but did not commit the change yet
   */
  @Event({ eventName: 'chiInput' }) chiInput: EventEmitter<string>;
  /**
   * Triggered when the element's value committed by the user is an invalid phone number for the selected prefix
   */
  @Event({ eventName: 'chiNumberInvalid' }) chiNumberInvalid: EventEmitter<
    void
  >;

  @Element() el: HTMLElement;

  @State() _clickedOnComponent = false;
  @State() _countries: Country[] = [];
  @State() _country: Country;
  @State() _isDropdownActive = false;
  @State() _prefix: string;
  @State() _search = '';
  @State() _suffix = '';
  @State() _uuid: string;

  private _extraCountryCodes: string[] = EXTRA_COUNTRIES.map(item => item.country_code);
  private excludedCountriesArray: CountryCode[];

  componentWillLoad(): void {
    this._setCountries(this.excludedCountries);
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

  @Watch('value')
  valueChanged(newValue: string, oldValue: string): void {
    if (newValue && newValue !== oldValue) {
      this.value = newValue;

      if (this.dynamicValue) {
        this._initCountry();
        return;
      }

      this._formatPhoneNumber();
    }
  }

  @Watch('excludedCountries')
  excludedCountriesChanged(newValue: string, oldValue: string): void {
    if (newValue && newValue !== oldValue) {
      this._setCountries(newValue);
    }
  }

  _basicNumberFormatting(value: string): string {
    if (value.length <= 9) {
      const formattedNumbers = [
        value.substring(0, 2),
        value.substring(2, 5),
        value.substring(5, 7),
        value.substring(7, 9)
      ];

      return formattedNumbers.join(' ').trim();
    }
    return value;
  }

  _isSpecialNumber() {
    return this._extraCountryCodes.includes(this._country.countryAbbr);
  }

  _formatPhoneNumber(): void {
    const suffix = this.value?.split('-')[1] || '';

    if (this._isSpecialNumber()) {
      const specialCountry: ExtraCountry = EXTRA_COUNTRIES.find(
        country => this._country.countryAbbr === country.country_code
      );

      this._suffix = specialCountry?.formatNumber
        ? specialCountry.formatNumber(suffix)
        : this._basicNumberFormatting(suffix)
    } else {
      this._suffix = new AsYouType(this._country.countryAbbr).input(suffix)
    }
  }

  _isPhoneNumberValid(suffix: string): boolean {
    if (this._isSpecialNumber()) {
      return suffix.replace(/\s/g, '').length === 9;
    }

    return isValidPhoneNumber(suffix, this._country.countryAbbr)
  }

  _getCorrectCountryList(): ExtraCountry[] {
    return [...country.countryList(), ...EXTRA_COUNTRIES].sort((a, b) => a.country.localeCompare(b.country));
  }

  _setCountries(excludedCountries: string): void {
    const countryObjs = this._getCorrectCountryList();
    const dialCodes = this._getCountryList(excludedCountries);
    const countries = [];

    countryObjs.forEach(
      (countryObj: { country: string; country_code: CountryCode }) => {
        if (dialCodes.find(code => code === countryObj.country_code)) {
          const country: Country = {
            name: countryObj.country,
            countryAbbr: countryObj.country_code as CountryCode,
            dialCode: getCountryCallingCode(
              countryObj.country_code as CountryCode
            )
          };

          countries.push(country);
        }
      }
    );

    this._countries = countries;
  }

  _getCountryList(excludedCountries: string | undefined): CountryCode[] {
    let dialCodes: CountryCode[] = getCountries();

    if (excludedCountries) {
      this.excludedCountriesArray = excludedCountries
        .replace(/[^A-Z,]+/g, '')
        .split(',')
        .filter(item => item !== this.defaultCountry) as CountryCode[];
      if (this.excludedCountriesArray) {
        dialCodes = dialCodes.filter(code => !this.excludedCountriesArray.includes(code));
      }
    }

    return dialCodes;
  }

  _setCountry(prefix: string) {
    if (this.dynamicValue) {
      this._checkCountry(prefix);
    } else if (isSupportedCountry(this.defaultCountry)) {
      this._checkCountry(this.defaultCountry);
    }
  }

  _checkCountry(prefix: string) {
    const prevCountry = this._country;

    this._country = this._countries.find(country =>
      this.dynamicValue
        ? country.dialCode === prefix
        : country.countryAbbr === prefix
    );

    if (prevCountry && this._country.dialCode === prevCountry.dialCode) {
      this._country = prevCountry;
      return;
    }

    if (this._country.dialCode == '1' && this.dynamicValue) {
      this._country = this._countries.find(
        country => country.countryAbbr === 'US'
      );
    }

    if (!isSupportedCountry(this._country.countryAbbr)) {
      throw new Error(
        `"${this._country.countryAbbr}" is not a valid country for phone input.`
      );
    }
  }

  _initCountry() {
    const prefix = this.value?.split('-')[0].replace('+', '') || '1';

    this._setCountry(prefix);
    this._prefix = `+${this._country.dialCode}`;
    this._formatPhoneNumber();

    if (`+${prefix}` !== this._prefix) {
      throw new Error(
        `Country code prefix of the provided value (+${prefix}) does not match the provided default country's prefix (${this._prefix}).`
      );
    }
  }

  _suffixInputChangeHandler = (event: Event): void => {
    event.stopPropagation();
    const suffix = (event.target as HTMLInputElement).value;

    this._suffix = suffix;

    if (!this._isPhoneNumberValid(suffix)) {
      this.chiNumberInvalid.emit();
    }

    this.value = this._getValue();
    this.chiChange.emit(this.value);
  };

  _inputHandler = (event: Event): void => {
    event.stopPropagation();

    this.chiInput.emit(
      this._prefix + '-' + (event.target as HTMLInputElement).value
    );
  };

  _pasteHandler = (event: ClipboardEvent): void => {
    if(!this.inputMask) return;

    const phoneNumberRegex = new RegExp('^[0-9()+-_ ]+$');
    const clipboardData = event.clipboardData.getData('text');
    const containsOnlyAllowedChars = phoneNumberRegex.test(clipboardData);

    if (!containsOnlyAllowedChars) {
      event.preventDefault();
    }
  }

  _keyPressHandler = (event: KeyboardEvent): void => {
    if(!this.inputMask) return;
    
    const onlyNumbersRegex = new RegExp('^[0-9]+$');
    const isKeyNumber = onlyNumbersRegex.test(event.key);

    if (event.key === 'Enter') {
      return;
    }

    if (!isKeyNumber) {
      event.preventDefault();
    }
  }

  _prefixChangeHandler(event: Event, country: Country): void {
    event.preventDefault();
    this._prefix = `+${country.dialCode}`;
    this._country = country;
    this.value = this._getValue();
    this._isDropdownActive = false;
    this.chiChange.emit(this.value);
  }

  _dropdownTriggerHandler(): void {
    this._isDropdownActive = !this._isDropdownActive;
    if (this._isDropdownActive) {
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
      : (this._isDropdownActive = false);
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
        onChiInput={(e: Event) =>
          (this._search = (e.target as HTMLInputElement).value)
        }
        onChiClean={() => (this._search = '')}
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
            href="#"
            class={`${DROPDOWN_CLASSES.MENU_ITEM} ${
              this._country.countryAbbr === country.countryAbbr
                ? ACTIVE_CLASS
                : ''
            }`}
            onClick={(e: Event) => this._prefixChangeHandler(e, country)}
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
          <span>{`+${this._country.dialCode}`}</span>
        </button>
        <div
          class={`${DROPDOWN_CLASSES.MENU} ${
            this._isDropdownActive ? ACTIVE_CLASS : ''
          }`}
        >
          {searchInput}
          {countries}
        </div>
      </div>
    );
  }

  renderTextInput(commonProps: Record<string, any>): JSX.Element {
    return (
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
        {...commonProps}
      />
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
          onKeyPress={this._keyPressHandler}
          onPaste={this._pasteHandler}
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
