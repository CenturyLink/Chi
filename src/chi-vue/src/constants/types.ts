//#region GENERAL
export const GENERAL_POSITIONS = ['left', 'top', 'right', 'bottom'] as const;
//#endregion

//#region Data Table
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
export const DATA_TABLE_SCREEN_BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type DataTableScreenBreakpoints = typeof DATA_TABLE_SCREEN_BREAKPOINTS[number];
export interface DataTableStyleConfig {
  portal: boolean;
  compact: boolean;
  bordered: boolean;
  noBorder: boolean;
  hover: boolean;
  striped: boolean;
  size: DataTableSizes;
}
export interface DataTableRowNestedContent {
  table: {
    data: DataTableRow[];
  };
  template: string;
  value: string;
  payload: any;
}
export interface DataTableRow {
  active: boolean;
  expanded: boolean;
  data: Record<string, any>;
  nestedContent: DataTableRowNestedContent;
  id: string;
  rowId: string;
  rowNumber: string;
}
export interface DataTableData {
  head: any;
  body: DataTableRow[];
}
export interface DataTableSortConfig {
  key: string;
  sortBy?: string;
  direction: 'ascending' | 'descending';
}
export interface DataTableConfig {
  columnResize: boolean;
  noResultsMessage: string;
  activePage: number;
  resultsPerPage: number;
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
    hideOnSinglePage: boolean;
    compact: boolean;
    firstLast: boolean;
    pageJumper: boolean;
  };
  defaultSort: DataTableSortConfig;
}
export interface DataTableFilter {
  name: string;
  label: string;
  type: 'select' | 'input' | 'checkbox' | 'textarea' | 'template';
  options?: [
    {
      value: string;
      label: string;
      selected: true;
    }
  ];
  value?: string;
  checked?: boolean;
  defaultValue?: string;
  placeholder: string;
  advanced?: true;
  template?: string;
}
export interface DataTableColumn {
  name: string;
  label: string;
  selected: boolean;
  locked: true;
}
export interface DataTableColumnsData {
  columns: DataTableColumn[];
}
export interface DataTableFiltersData {
  filters: DataTableFilter[];
}
export interface DataTableColumnsData {
  columns: DataTableColumn[];
}
export type DataTableFormElementFilters = 'select' | 'input' | 'textarea' | 'checkbox';
export interface DataTableView {
  name: string;
  columns: string[];
  searchString: string;
  filters: DataTableFilter[];
}
export interface DataTableViews {
  views: DataTableView[];
  defaultView: DataTableView;
  selectedView: DataTableView;
}
export type DataTableCellAlignment = 'left' | 'center' | 'right';
//#endregion

//#region Drawer
export type DrawerPositions = typeof GENERAL_POSITIONS[number];
export type Backdrop = 'inverse' | '';
//#endregion

//#region Pagination
export const PAGINATION_SIZES = ['sm', 'md', 'lg', 'xl'] as const;
export type PaginationSizes = typeof PAGINATION_SIZES[number];
//#endregion

//#region Search Input
export const SEARCH_INPUT_SIZES = ['sm', 'md', 'lg', 'xl'] as const;
export type SearchInputSizes = typeof SEARCH_INPUT_SIZES[number];
//#endregion

//#region Tooltip
export type TooltipPositions = typeof GENERAL_POSITIONS[number];
export const TOOLTIP_COLORS = ['light', ''] as const;
export type TooltipColors = typeof TOOLTIP_COLORS[number];
//#endregion
