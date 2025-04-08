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
    disabled?: boolean;
}
export interface TabTriggerPosition {
    left: number;
    top: number;
}
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
export interface PickerOption {
    label: string;
    id?: string;
    description?: string;
    checked?: boolean;
    disabled?: boolean;
    endLabel?: string;
}
export declare const PICKER_INPUT_TYPES: string[];
export type PickerInputTypes = (typeof PICKER_INPUT_TYPES)[number];
export interface AccordionItem {
    title: string;
    text?: string;
    template?: string;
    expanded?: boolean;
    disabled?: boolean;
}
export declare const ACCORDION_TYPES: string[];
export type AccordionTypes = (typeof ACCORDION_TYPES)[number];
export interface IconType {
    fillRule?: 'evenodd' | 'nonzero';
    path: string | string[];
}
export interface DropdownMenuItem {
    id?: string;
    title: string;
    href?: string;
}
export interface DropdownMenuMultiItem {
    label: string;
    checked?: boolean;
    id?: string;
}
export declare const DROPDOWN_SELECT_MODES: readonly ["single", "multi"];
export type DropdownSelectModes = (typeof DROPDOWN_SELECT_MODES)[number];
export declare const SKELETON_TYPES: readonly ["square", "rounded", "circle", "rounded-square"];
export type SkeletonTypes = (typeof SKELETON_TYPES)[number];
export interface Tag {
    name: string;
}
export declare const CARD_FOOTER_ALIGN_TYPES: string[];
export type CardFooterAlignTypes = (typeof CARD_FOOTER_ALIGN_TYPES)[number];
export declare const CARD_NO_BORDER_TYPES: readonly ["card", "header", "footer"];
export type CardNoBorderTypes = (typeof CARD_NO_BORDER_TYPES)[number];
