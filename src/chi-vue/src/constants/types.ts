export const GENERAL_POSITIONS = ['left', 'top', 'right', 'bottom'] as const;

export type DrawerPositions = typeof GENERAL_POSITIONS[number];

export type Backdrop = 'inverse' | '';

export const PAGINATION_SIZES = ['sm', 'md', 'lg', 'xl'] as const;

export type PaginationSizes = typeof PAGINATION_SIZES[number];

export type TooltipPositions = typeof GENERAL_POSITIONS[number];

export const TOOLTIP_COLORS = ['light', ''] as const;

export type TooltipColors = typeof TOOLTIP_COLORS[number];

export const DATA_TABLE_SIZE = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type DataTableSizes = typeof DATA_TABLE_SIZE[number];

export const DATA_TABLE_EXPANSION_ICON_STYLES = ['portal', 'base'] as const;

export interface DataTableExpansionIcons {
  portal: {
    expanded: string;
    collapsed: string;
  };
  base: {
    expanded: string;
    collapsed: string;
  };
}

export type DataTableExpansionIconStyles = typeof DATA_TABLE_EXPANSION_ICON_STYLES[number];

export const DATA_TABLE_SCREEN_BREAKPOINTS = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
] as const;

export type DataTableScreenBreakpoints = typeof DATA_TABLE_SCREEN_BREAKPOINTS[number];

export interface DataTableStyleConfig {
  portal: boolean;
  bordered: boolean;
  noBorder: boolean;
  hover: boolean;
  striped: boolean;
  size: DataTableSizes;
}

export interface DataTableRow {
  active: boolean;
  data: Record<string, any>;
  nestedContent: {
    template: string;
    value: string;
    payload: any;
  };
  id: string;
}

export interface DataTableData {
  head: any;
  body: DataTableRow[];
}

export interface DataTableConfig {
  columnResize: boolean;
  noResultsMessage: string;
  activePage: number;
  style: DataTableStyleConfig;
  selectable: boolean;
  columnSizes: {
    xs: number[];
    sm: number[];
    md: number[];
    lg: number[];
    xl: number[];
  };
  pagination: {
    compact: boolean;
    firstLast: boolean;
    pageJumper: boolean;
  };
}
