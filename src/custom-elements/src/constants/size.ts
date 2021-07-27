export const ICON_SIZES = ['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl'];
export const MARKETING_ICON_SIZES = ['xs', 'sm', 'md', 'lg'];
export const TEXT_INPUT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type TextInputSizes = typeof TEXT_INPUT_SIZES[number];
export type IconSizes = typeof ICON_SIZES[number];
export type MarketingIconSizes = typeof MARKETING_ICON_SIZES[number];
