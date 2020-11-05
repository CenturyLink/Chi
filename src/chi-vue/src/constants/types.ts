export const DRAWER_POSITION = ["left", "top", "right", "bottom"];

export type DrawerPositions = typeof DRAWER_POSITION[number];

export type Backdrop = "inverse" | "";

export const PAGINATION_SIZES = ['sm', 'md', 'lg', 'xl'] as const;

export type PaginationSizes = typeof PAGINATION_SIZES[number];
