export const GENERAL_POSITIONS = ['left', 'top', 'right', 'bottom'] as const;

export type DrawerPositions = typeof GENERAL_POSITIONS[number];

export type Backdrop = 'inverse' | '';

export const PAGINATION_SIZES = ['sm', 'md', 'lg', 'xl'] as const;

export type PaginationSizes = typeof PAGINATION_SIZES[number];

export type TooltipPositions = typeof GENERAL_POSITIONS[number];
