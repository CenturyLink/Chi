export const ICON_SIZES = ['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl'];

export const TEXT_INPUT_SIZES = ['sm', 'md', 'lg', 'xl'] as const;
export type TextInputSizes = typeof TEXT_INPUT_SIZES[number];
