import { CARDINAL_EXTENDED_POSITIONS, CARDINAL_POSITIONS } from './positions';
import { CountryCallingCode, CountryCode } from 'libphonenumber-js';
export interface Country {
    name: string;
    countryAbbr: CountryCode;
    dialCode: CountryCallingCode;
}
export interface ExtraCountry {
    country: string;
    country_code: CountryCode | string;
    formatNumber?: (country: string) => string;
}
export declare const MARKETING_ICON_MODES: readonly ["filled", "outline"];
export type ChiMarketingIconModes = (typeof MARKETING_ICON_MODES)[number];
export type GeneralPositionsExtended = (typeof CARDINAL_EXTENDED_POSITIONS)[number];
export type GeneralPositions = (typeof CARDINAL_POSITIONS)[number];
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
export declare const DROPDOWN_SELECT_MODES: readonly ["single", "multi"];
export type DropdownSelectModes = (typeof DROPDOWN_SELECT_MODES)[number];
export interface Time {
    hour: number;
    minute: number;
    second?: number;
    period: string;
}
export declare enum TabTriggerSizes {
    Height = "height",
    Width = "width"
}
export declare enum TabTriggerDirections {
    Left = "left",
    Top = "top"
}
export type FontWeight = 'normal';
export interface FormWrapperOption {
    label: string;
    name: string;
    disabled?: boolean;
    id: string;
}
export interface FormWrapperCheckbox extends FormWrapperOption {
    checked: boolean | 'indeterminate';
}
export interface FormWrapperRadio extends FormWrapperOption {
    checked?: boolean;
}
