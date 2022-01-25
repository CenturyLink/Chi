import { CountryCallingCode, CountryCode } from 'libphonenumber-js';

export interface Country {
  name: string;
  countryAbbr: CountryCode;
  dialCode: CountryCallingCode;
}
export const MARKETING_ICON_MODES = ['full-color', 'one-color'] as const;

export type ChiMarketingIconModes = typeof MARKETING_ICON_MODES[number];
