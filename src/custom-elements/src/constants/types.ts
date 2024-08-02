import { CARDINAL_EXTENDED_POSITIONS } from './positions';
import { CountryCallingCode, CountryCode } from 'libphonenumber-js';

export interface Country {
  name: string;
  countryAbbr: CountryCode;
  dialCode: CountryCallingCode;
}
export interface ExtraCountry {
  country: string;
  country_code: CountryCode | string,
  formatNumber?: (country: string) => string
}
export const MARKETING_ICON_MODES = ['filled', 'outline'] as const;
export type ChiMarketingIconModes = typeof MARKETING_ICON_MODES[number];
export type GeneralPositionsExtended = typeof CARDINAL_EXTENDED_POSITIONS[number];
export type SearchInputModes = 'autocomplete';

export interface TabTrigger {
  children: TabTrigger[];
  parent?: TabTrigger;
  id: string;
  label?: string;
  overflow: boolean;
  target?: string;
  href?: string;
  visibleItems?: number;
}

export interface TabTriggerPosition {
  left: number;
  top: number;
}

export interface DropdownMenuItem {
  id?: string;
  title: string;
  href?: string;
}
export const DROPDOWN_SELECT_MODES = ['single', 'multi'] as const;
export type DropdownSelectModes = typeof DROPDOWN_SELECT_MODES[number];

export interface Time {
  hour: number;
  minute: number;
  second?: number;
  period: string;
}

export enum TabTriggerSizes {
  Height = 'height',
  Width = 'width'
}

export enum TabTriggerDirections {
  Left = 'left',
  Top = 'top'
}

export type FontWeight = 'normal';

// #region FormWrapper
export interface FormWrapperOption {
  label: string,
  name: string,
  disabled?: boolean,
  id: string
  // state: ChiStates
}

export interface FormWrapperCheckbox extends FormWrapperOption {
  checked: boolean | 'indeterminate',
}

export interface FormWrapperRadio extends FormWrapperOption {
  checked?: boolean,
}
// #endregion
