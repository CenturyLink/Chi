import { DataTableRow } from './types';

//#region Data Table
export const DATA_TABLE_EVENTS = {
  SELECTED_ROWS_CHANGE: 'chiSelectedRowsChange',
  SELECTED_ROWS_ONLY: 'chiShowSelectedRowsOnly',
  SELECTED_ROW: 'chiRowSelected',
  DESELECTED_ROW: 'chiRowDeselected',
  SELECTED_ALL: 'chiSelectAll',
  DESELECTED_ALL: 'chiDeselectAll',
  DATA_SORTING: 'chiDataSorting',
  FILTERS_CHANGE: 'chiFiltersChange',
  COLUMNS_CHANGE: 'chiColumnsChange',
  COLUMNS_RESET: 'chiColumnsReset',
  ADVANCED_FILTERS_CHANGE: 'chiAdvancedFiltersChange',
  VIEWS_CHANGE: 'chiViewsChange',
  MOBILE_CANCEL: 'chiMobileCancel',
  TOOLBAR: {
    COLUMNS_CHANGE: 'chiToolbarColumnsChange',
    COLUMNS_RESET: 'chiToolbarColumnsReset',
    COLUMNS_SELECTED: 'chiToolbarColumnsSelected',
    FILTERS_CHANGE: 'chiToolbarFiltersChange',
    SEARCH: 'chiToolbarSearch',
    VIEWS_CHANGE: 'chiToolbarViewsChange',
  },
  EXPANSION: {
    EXPANDED: 'chiRowExpanded',
    COLLAPSED: 'chiRowCollapsed',
  },
};

export interface DataTableSorting {
  column: string | undefined;
  direction: 'ascending' | 'descending' | undefined;
  data?: DataTableRow[];
}
export interface DataTablePageChange {
  page: number;
  data?: DataTableRow[];
}
//#endregion

//#region Drawer
export const DRAWER_EVENTS = {
  SHOW: 'chiDrawerShow',
  HIDE: 'chiDrawerHide',
  SHOWN: 'chiDrawerShown',
  HIDDEN: 'chiDrawerHidden',
  CLICK_OUTSIDE: 'chiDrawerClickOutside',
};
//#endregion

//#region Pagination
export const PAGINATION_EVENTS = {
  PAGE_CHANGE: 'chiPageChange',
  PAGE_SIZE: 'chiPageSizeChange',
};
//#endregion

//#region Search Input
export const SEARCH_INPUT_EVENTS = {
  BLUR: 'chiBlur',
  CHANGE: 'chiChange',
  CLEAN: 'chiClean',
  FOCUS: 'chiFocus',
  INPUT: 'chiInput',
  SEARCH: 'chiSearch',
};
//#endregion

//#region Tooltip
export const TOOLTIP_EVENTS = {
  SHOW: 'chiTooltipShow',
  HIDE: 'chiTooltipHide',
  SHOWN: 'chiTooltipShown',
  HIDDEN: 'chiTooltipHidden',
};
//#endregion
