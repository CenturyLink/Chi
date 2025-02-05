import { EventEmitter, JSX } from '../../stencil-public-runtime';
import { CountryCode } from 'libphonenumber-js';
import { ChiStates } from '../../constants/states';
import { TextInputSizes } from '../../constants/size';
import { Country, ExtraCountry } from '../../constants/types';
export declare class ChiPhoneInput {
    /**
     * To set a default country as a two letter ISO country code
     */
    defaultCountry: CountryCode;
    /**
     * To disable Phone input
     */
    disabled: boolean;
    /**
     * To define placeholder of Phone input
     */
    placeholder?: string;
    /**
     * To define size of Phone input
     */
    size: TextInputSizes;
    /**
     * To define state color of Phone input
     */
    state?: ChiStates;
    /**
     * To define value of Phone input
     */
    value: string;
    /**
     * To define dynamic value of Phone input
     */
    dynamicValue: boolean;
    /**
     * To set only numbers in the Phone Input
     */
    inputMask: boolean;
    /**
     * To define two letter ISO country codes to exclude from Phone input dropdown
     */
    excludedCountries?: string;
    /**
     * To display an additional helper text message below the Phone input
     */
    helperMessage?: string;
    /**
     * Triggered when an alteration to the element's value is committed by the user
     */
    chiChange: EventEmitter<string>;
    /**
     * Triggered when the user changed the element's value but did not commit the change yet
     */
    chiInput: EventEmitter<string>;
    /**
     * Triggered when the element's value committed by the user is an invalid phone number for the selected prefix
     */
    chiNumberInvalid: EventEmitter<void>;
    /**
     * Triggered when the user selected a country in the dropdown
     */
    chiCountrySelected: EventEmitter<Country>;
    el: HTMLElement;
    _clickedOnComponent: boolean;
    _countries: Country[];
    _country: Country;
    _isDropdownActive: boolean;
    _prefix: string;
    _search: string;
    _suffix: string;
    _uuid: string;
    private _extraCountryCodes;
    private excludedCountriesArray;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    stateValidation(state: ChiStates): void;
    valueChanged(newValue: string, oldValue: string): void;
    excludedCountriesChanged(newValue: string, oldValue: string): void;
    _handleDynamicValue(): void;
    _basicNumberFormatting(value: string): string;
    _isSpecialNumber(): boolean;
    _formatPhoneNumber(): void;
    _isPhoneNumberValid(suffix: string): boolean;
    _getCorrectCountryList(): ExtraCountry[];
    _setCountries(excludedCountries: string): void;
    _getCountryList(excludedCountries: string | undefined): CountryCode[];
    _setCountry(prefix: string): void;
    _checkCountry(prefix: string): void;
    _initCountry(): void;
    _suffixInputChangeHandler: (event: Event) => void;
    _changeValueHandler: () => void;
    _inputHandler: (event: Event) => void;
    _pasteHandler: (event: ClipboardEvent) => void;
    _keyPressHandler: (event: KeyboardEvent) => void;
    _prefixChangeHandler(event: Event, country: Country): void;
    _dropdownTriggerHandler(): void;
    _closeDropdown: () => void;
    _getValue(): string;
    _renderDropdown(): JSX.Element;
    render(): JSX.Element;
}
