import { h } from "@stencil/core";
import { AsYouType, getCountries, getCountryCallingCode, isSupportedCountry, isValidPhoneNumber, } from "libphonenumber-js";
import country from "all-country-data";
import { EXTRA_COUNTRIES } from "../../constants/constants";
import { CHI_STATES } from "../../constants/states";
import { v4 as uuid4 } from "uuid";
import { ACTIVE_CLASS, BUTTON_CLASSES, DROPDOWN_CLASSES, PHONE_INPUT_CLASSES } from "../../constants/classes";
export class ChiPhoneInput {
    constructor() {
        this._extraCountryCodes = EXTRA_COUNTRIES.map((item) => item.country_code);
        this._suffixInputChangeHandler = (event) => {
            event.stopPropagation();
            const suffix = event.target.value;
            this._suffix = suffix;
            if (!this._isPhoneNumberValid(suffix)) {
                this.chiNumberInvalid.emit();
            }
            this.value = this._getValue();
            this.chiChange.emit(this.value);
        };
        this._inputHandler = (event) => {
            event.stopPropagation();
            this.chiInput.emit(this._prefix + '-' + event.target.value);
        };
        this._pasteHandler = (event) => {
            if (!this.inputMask)
                return;
            const phoneNumberRegex = new RegExp('^[0-9()+-_ ]+$');
            const clipboardData = event.clipboardData.getData('text');
            const containsOnlyAllowedChars = phoneNumberRegex.test(clipboardData);
            if (!containsOnlyAllowedChars) {
                event.preventDefault();
            }
        };
        this._keyPressHandler = (event) => {
            if (!this.inputMask)
                return;
            const onlyNumbersRegex = new RegExp('^[0-9]+$');
            const isKeyNumber = onlyNumbersRegex.test(event.key);
            if (event.key === 'Enter') {
                return;
            }
            if (!isKeyNumber) {
                event.preventDefault();
            }
        };
        this._closeDropdown = () => {
            if (this._clickedOnComponent) {
                this._clickedOnComponent = false;
                return;
            }
            this._isDropdownActive = false;
        };
        this.defaultCountry = 'US';
        this.disabled = false;
        this.placeholder = undefined;
        this.size = 'md';
        this.state = undefined;
        this.value = undefined;
        this.dynamicValue = false;
        this.inputMask = false;
        this.excludedCountries = undefined;
        this.helperMessage = undefined;
        this._clickedOnComponent = false;
        this._countries = [];
        this._country = undefined;
        this._isDropdownActive = false;
        this._prefix = undefined;
        this._search = '';
        this._suffix = '';
        this._uuid = undefined;
    }
    componentWillLoad() {
        this._setCountries(this.excludedCountries);
        document.addEventListener('click', this._closeDropdown);
        this.stateValidation(this.state);
        this._initCountry();
        this._uuid = this.el.id ? this.el.id : `dp-${uuid4()}`;
    }
    disconnectedCallback() {
        document.removeEventListener('click', this._closeDropdown);
    }
    stateValidation(state) {
        const validValues = CHI_STATES.join(', ');
        if (state && !CHI_STATES.includes(state)) {
            throw new Error(`${state} is not a valid state for phone input. If provided, valid values are: ${validValues}. `);
        }
    }
    valueChanged(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            this.value = newValue;
            if (this.dynamicValue) {
                this._initCountry();
                return;
            }
            this._formatPhoneNumber();
        }
    }
    excludedCountriesChanged(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            this._setCountries(newValue);
        }
    }
    _basicNumberFormatting(value) {
        if (value.length <= 9) {
            const formattedNumbers = [
                value.substring(0, 2),
                value.substring(2, 5),
                value.substring(5, 7),
                value.substring(7, 9),
            ];
            return formattedNumbers.join(' ').trim();
        }
        return value;
    }
    _isSpecialNumber() {
        return this._extraCountryCodes.includes(this._country.countryAbbr);
    }
    _formatPhoneNumber() {
        var _a;
        const suffix = ((_a = this.value) === null || _a === void 0 ? void 0 : _a.split('-')[1]) || '';
        if (this._isSpecialNumber()) {
            const specialCountry = EXTRA_COUNTRIES.find((country) => this._country.countryAbbr === country.country_code);
            this._suffix = (specialCountry === null || specialCountry === void 0 ? void 0 : specialCountry.formatNumber)
                ? specialCountry.formatNumber(suffix)
                : this._basicNumberFormatting(suffix);
        }
        else {
            this._suffix = new AsYouType(this._country.countryAbbr).input(suffix);
        }
    }
    _isPhoneNumberValid(suffix) {
        if (this._isSpecialNumber()) {
            return suffix.replace(/\s/g, '').length === 9;
        }
        return isValidPhoneNumber(suffix, this._country.countryAbbr);
    }
    _getCorrectCountryList() {
        return [...country.countryList(), ...EXTRA_COUNTRIES].sort((a, b) => a.country.localeCompare(b.country));
    }
    _setCountries(excludedCountries) {
        const countryObjs = this._getCorrectCountryList();
        const dialCodes = this._getCountryList(excludedCountries);
        const countries = [];
        countryObjs.forEach((countryObj) => {
            if (dialCodes.find((code) => code === countryObj.country_code)) {
                const country = {
                    name: countryObj.country,
                    countryAbbr: countryObj.country_code,
                    dialCode: getCountryCallingCode(countryObj.country_code),
                };
                countries.push(country);
            }
        });
        this._countries = countries;
    }
    _getCountryList(excludedCountries) {
        let dialCodes = getCountries();
        if (excludedCountries) {
            this.excludedCountriesArray = excludedCountries
                .replace(/[^A-Z,]+/g, '')
                .split(',')
                .filter((item) => item !== this.defaultCountry);
            if (this.excludedCountriesArray) {
                dialCodes = dialCodes.filter((code) => !this.excludedCountriesArray.includes(code));
            }
        }
        return dialCodes;
    }
    _setCountry(prefix) {
        if (this.dynamicValue) {
            this._checkCountry(prefix);
        }
        else if (isSupportedCountry(this.defaultCountry)) {
            this._checkCountry(this.defaultCountry);
        }
    }
    _checkCountry(prefix) {
        const prevCountry = this._country;
        this._country = this._countries.find((country) => this.dynamicValue ? country.dialCode === prefix : country.countryAbbr === prefix);
        if (prevCountry && this._country.dialCode === prevCountry.dialCode) {
            this._country = prevCountry;
            return;
        }
        if (this._country.dialCode == '1' && this.dynamicValue) {
            this._country = this._countries.find((country) => country.countryAbbr === 'US');
        }
        if (!isSupportedCountry(this._country.countryAbbr)) {
            throw new Error(`"${this._country.countryAbbr}" is not a valid country for phone input.`);
        }
    }
    _initCountry() {
        var _a;
        const prefix = ((_a = this.value) === null || _a === void 0 ? void 0 : _a.split('-')[0].replace('+', '')) || '1';
        this._setCountry(prefix);
        this._prefix = `+${this._country.dialCode}`;
        this._formatPhoneNumber();
        if (`+${prefix}` !== this._prefix) {
            throw new Error(`Country code prefix of the provided value (+${prefix}) does not match the provided default country's prefix (${this._prefix}).`);
        }
    }
    _prefixChangeHandler(event, country) {
        event.preventDefault();
        this._prefix = `+${country.dialCode}`;
        this._country = country;
        this.value = this._getValue();
        this._isDropdownActive = false;
        this.chiChange.emit(this.value);
    }
    _dropdownTriggerHandler() {
        this._isDropdownActive = !this._isDropdownActive;
        if (this._isDropdownActive) {
            setTimeout(() => {
                this.el.querySelector('input[type=search]').focus();
            }, 50);
        }
    }
    _getValue() {
        return `${this._prefix}-${this._suffix.replace(/[- )(]/g, '')}`;
    }
    _renderDropdown() {
        const searchInput = (h("chi-search-input", { size: "sm", placeholder: "Search", value: this._search, onChiInput: (e) => (this._search = e.target.value), onChiClean: () => (this._search = '') }));
        const filteredCountries = this._countries.filter((country) => {
            return (country.name.toLowerCase().indexOf(this._search.toLowerCase()) > -1 ||
                country.dialCode.indexOf(this._search) > -1 ||
                ('+' + country.dialCode).indexOf(this._search) > -1);
        });
        const countries = (h("div", { class: `${DROPDOWN_CLASSES.MENU_CONTENT}` }, filteredCountries.map((country) => (h("a", { href: "#", class: `${DROPDOWN_CLASSES.MENU_ITEM} ${this._country.countryAbbr === country.countryAbbr ? ACTIVE_CLASS : ''}`, onClick: (e) => this._prefixChangeHandler(e, country) }, h("span", null, country.name), h("span", { class: `${PHONE_INPUT_CLASSES.CODE}` }, `+${country.dialCode}`))))));
        return (h("div", { class: `${DROPDOWN_CLASSES.DROPDOWN}`, onClick: () => (this._clickedOnComponent = true) }, h("button", { disabled: this.disabled, class: `${BUTTON_CLASSES.BUTTON} ${DROPDOWN_CLASSES.TRIGGER} -${this.size}`, onClick: () => this._dropdownTriggerHandler() }, h("span", null, `+${this._country.dialCode}`)), h("div", { class: `${DROPDOWN_CLASSES.MENU} ${this._isDropdownActive ? ACTIVE_CLASS : ''}` }, searchInput, countries)));
    }
    render() {
        const dropdown = this._renderDropdown();
        const textInput = (h("chi-text-input", { key: '09b262c905a6ed011f1e41fee51bf965c2265d0a', id: `${this._uuid}`, type: "tel", state: this.state ? this.state : null, size: this.size, helperMessage: this.helperMessage, disabled: this.disabled, placeholder: this.placeholder, value: this._suffix, onChiChange: this._suffixInputChangeHandler, onChiInput: this._inputHandler, onKeyPress: this._keyPressHandler, onPaste: this._pasteHandler }));
        return (h("div", { key: '3d05254ba81ceb39d969f5b8b2e23bb216e28035', class: `${PHONE_INPUT_CLASSES.PHONE_INPUT}` }, dropdown, textInput));
    }
    static get is() { return "chi-phone-input"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "defaultCountry": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CountryCode",
                    "resolved": "\"AC\" | \"AD\" | \"AE\" | \"AF\" | \"AG\" | \"AI\" | \"AL\" | \"AM\" | \"AO\" | \"AR\" | \"AS\" | \"AT\" | \"AU\" | \"AW\" | \"AX\" | \"AZ\" | \"BA\" | \"BB\" | \"BD\" | \"BE\" | \"BF\" | \"BG\" | \"BH\" | \"BI\" | \"BJ\" | \"BL\" | \"BM\" | \"BN\" | \"BO\" | \"BQ\" | \"BR\" | \"BS\" | \"BT\" | \"BW\" | \"BY\" | \"BZ\" | \"CA\" | \"CC\" | \"CD\" | \"CF\" | \"CG\" | \"CH\" | \"CI\" | \"CK\" | \"CL\" | \"CM\" | \"CN\" | \"CO\" | \"CR\" | \"CU\" | \"CV\" | \"CW\" | \"CX\" | \"CY\" | \"CZ\" | \"DE\" | \"DJ\" | \"DK\" | \"DM\" | \"DO\" | \"DZ\" | \"EC\" | \"EE\" | \"EG\" | \"EH\" | \"ER\" | \"ES\" | \"ET\" | \"FI\" | \"FJ\" | \"FK\" | \"FM\" | \"FO\" | \"FR\" | \"GA\" | \"GB\" | \"GD\" | \"GE\" | \"GF\" | \"GG\" | \"GH\" | \"GI\" | \"GL\" | \"GM\" | \"GN\" | \"GP\" | \"GQ\" | \"GR\" | \"GT\" | \"GU\" | \"GW\" | \"GY\" | \"HK\" | \"HN\" | \"HR\" | \"HT\" | \"HU\" | \"ID\" | \"IE\" | \"IL\" | \"IM\" | \"IN\" | \"IO\" | \"IQ\" | \"IR\" | \"IS\" | \"IT\" | \"JE\" | \"JM\" | \"JO\" | \"JP\" | \"KE\" | \"KG\" | \"KH\" | \"KI\" | \"KM\" | \"KN\" | \"KP\" | \"KR\" | \"KW\" | \"KY\" | \"KZ\" | \"LA\" | \"LB\" | \"LC\" | \"LI\" | \"LK\" | \"LR\" | \"LS\" | \"LT\" | \"LU\" | \"LV\" | \"LY\" | \"MA\" | \"MC\" | \"MD\" | \"ME\" | \"MF\" | \"MG\" | \"MH\" | \"MK\" | \"ML\" | \"MM\" | \"MN\" | \"MO\" | \"MP\" | \"MQ\" | \"MR\" | \"MS\" | \"MT\" | \"MU\" | \"MV\" | \"MW\" | \"MX\" | \"MY\" | \"MZ\" | \"NA\" | \"NC\" | \"NE\" | \"NF\" | \"NG\" | \"NI\" | \"NL\" | \"NO\" | \"NP\" | \"NR\" | \"NU\" | \"NZ\" | \"OM\" | \"PA\" | \"PE\" | \"PF\" | \"PG\" | \"PH\" | \"PK\" | \"PL\" | \"PM\" | \"PR\" | \"PS\" | \"PT\" | \"PW\" | \"PY\" | \"QA\" | \"RE\" | \"RO\" | \"RS\" | \"RU\" | \"RW\" | \"SA\" | \"SB\" | \"SC\" | \"SD\" | \"SE\" | \"SG\" | \"SH\" | \"SI\" | \"SJ\" | \"SK\" | \"SL\" | \"SM\" | \"SN\" | \"SO\" | \"SR\" | \"SS\" | \"ST\" | \"SV\" | \"SX\" | \"SY\" | \"SZ\" | \"TA\" | \"TC\" | \"TD\" | \"TG\" | \"TH\" | \"TJ\" | \"TK\" | \"TL\" | \"TM\" | \"TN\" | \"TO\" | \"TR\" | \"TT\" | \"TV\" | \"TW\" | \"TZ\" | \"UA\" | \"UG\" | \"US\" | \"UY\" | \"UZ\" | \"VA\" | \"VC\" | \"VE\" | \"VG\" | \"VI\" | \"VN\" | \"VU\" | \"WF\" | \"WS\" | \"XK\" | \"YE\" | \"YT\" | \"ZA\" | \"ZM\" | \"ZW\"",
                    "references": {
                        "CountryCode": {
                            "location": "import",
                            "path": "libphonenumber-js",
                            "id": "node_modules::CountryCode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set a default country as a two letter ISO country code"
                },
                "attribute": "default-country",
                "reflect": true,
                "defaultValue": "'US'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To disable Phone input"
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To define placeholder of Phone input"
                },
                "attribute": "placeholder",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TextInputSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "TextInputSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::TextInputSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define size of Phone input"
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'md'"
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChiStates",
                    "resolved": "\"danger\" | \"success\" | \"warning\"",
                    "references": {
                        "ChiStates": {
                            "location": "import",
                            "path": "../../constants/states",
                            "id": "src/constants/states.ts::ChiStates"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To define state color of Phone input"
                },
                "attribute": "state",
                "reflect": true
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define value of Phone input"
                },
                "attribute": "value",
                "reflect": true
            },
            "dynamicValue": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define dynamic value of Phone input"
                },
                "attribute": "dynamic-value",
                "reflect": true,
                "defaultValue": "false"
            },
            "inputMask": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set only numbers in the Phone Input"
                },
                "attribute": "input-mask",
                "reflect": true,
                "defaultValue": "false"
            },
            "excludedCountries": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To define two letter ISO country codes to exclude from Phone input dropdown"
                },
                "attribute": "excluded-countries",
                "reflect": true
            },
            "helperMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To display an additional helper text message below the Phone input"
                },
                "attribute": "helper-message",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "_clickedOnComponent": {},
            "_countries": {},
            "_country": {},
            "_isDropdownActive": {},
            "_prefix": {},
            "_search": {},
            "_suffix": {},
            "_uuid": {}
        };
    }
    static get events() {
        return [{
                "method": "chiChange",
                "name": "chiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when an alteration to the element's value is committed by the user"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "chiInput",
                "name": "chiInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user changed the element's value but did not commit the change yet"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "chiNumberInvalid",
                "name": "chiNumberInvalid",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the element's value committed by the user is an invalid phone number for the selected prefix"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "state",
                "methodName": "stateValidation"
            }, {
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "excludedCountries",
                "methodName": "excludedCountriesChanged"
            }];
    }
}
