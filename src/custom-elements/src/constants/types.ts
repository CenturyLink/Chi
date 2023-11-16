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
}

export interface TabTriggerPosition {
  left: number;
  top: number;
}

export interface DropdownMenuItem {
  title: string;
  href: string;
}

export enum TabTriggerSizes {
  Height = 'height',
  Width = 'width'
}

export enum TabTriggerDirections {
  Left = 'left',
  Top = 'top'
}
