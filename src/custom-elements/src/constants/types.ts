import { CountryCallingCode, CountryCode } from 'libphonenumber-js';

export interface Country {
  name: string;
  countryAbbr: CountryCode;
  dialCode: CountryCallingCode;
}
export const MARKETING_ICON_MODES = ['filled', 'outline'] as const;

export type ChiMarketingIconModes = typeof MARKETING_ICON_MODES[number];
