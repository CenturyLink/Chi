import { CARDINAL_EXTENDED_POSITIONS } from './positions';
import { CountryCallingCode, CountryCode } from 'libphonenumber-js';

export interface Country {
  name: string;
  countryAbbr: CountryCode;
  dialCode: CountryCallingCode;
}
export const MARKETING_ICON_MODES = ['filled', 'outline'] as const;

export type ChiMarketingIconModes = typeof MARKETING_ICON_MODES[number];

export type GeneralPositionsExtended = typeof CARDINAL_EXTENDED_POSITIONS[number];

export interface TabTrigger {
  children: TabTrigger[];
  parent?: TabTrigger;
  id: string;
  label: string,
  overflow: boolean;
  target?: string;
}

export interface TabTriggerPosition {
  left: number;
  top: number;
}

export enum TabTriggerSizes {
  Height = 'height',
  Width = 'width'
};

export enum TabTriggerDirections {
  Left = 'left',
  Top = 'top'
};
