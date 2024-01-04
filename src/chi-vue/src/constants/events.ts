import { DataTableRow } from './types';

//#region Generic events
export const GENERIC_EVENTS = {
  CHANGE: 'chiChange',
  INPUT: 'chiInput',
  CANCEL: 'chiCancel',
};
//#endregion

//#region Data Table
// TODO: Remove deprecated events when major version is released
export const DATA_TABLE_EVENTS = {
  SELECTED_ROWS_CHANGE: 'chiSelectedRowsChange',
  SELECTED_ROW: 'chiRowSelected',
  DESELECTED_ROW: 'chiRowDeselected',
  SELECTED_ALL_DEPRECATED: 'chiSelectAll',
  SELECTED_ALL: 'chiSelectThisPage',
  SELECTED_ALL_PAGES: 'chiSelectAllPages',
  DESELECTED_ALL_DEPRECATED: 'chiDeselectAll',
  DESELECTED_ALL: 'chiDeselectThisPage',
  DESELECTED_ALL_PAGES: 'chiDeselectAllPages',
  DATA_SORTING: 'chiDataSorting',
  FILTERS_CHANGE: 'chiFiltersChange',
  COLUMNS_CHANGE: 'chiColumnsChange',
  COLUMNS_RESET: 'chiColumnsReset',
  ADVANCED_FILTERS_CHANGE: 'chiAdvancedFiltersChange',
  VIEWS_CHANGE: 'chiViewsChange',
  EMPTY_ACTIONABLE_LINK: 'chiEmptyActionableLink',
  TOOLBAR: {
    COLUMNS_CHANGE: 'chiToolbarColumnsChange',
    COLUMNS_RESET: 'chiToolbarColumnsReset',
    COLUMNS_SELECTED: 'chiToolbarColumnsSelected',
    FILTERS_CHANGE: 'chiToolbarFiltersChange',
    SEARCH: 'chiToolbarSearch',
    VIEWS_CHANGE: 'chiToolbarViewsChange',
  },
  BULK_ACTIONS: {
    SHOW_SELECTED_ONLY: 'chiShowSelectedRowsOnly',
  },
  EXPANSION: {
    EXPANDED: 'chiRowExpanded',
    COLLAPSED: 'chiRowCollapsed',
    EXPAND_ALL: 'chiExpandAll',
    COLLAPSE_ALL: 'chiCollapseAll',
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

//#region Advanced Filters
export const ADVANCED_FILTER_EVENTS = {
  CLEAR: 'chiFiltersClear',
  APPLY: 'chiFiltersApply',
};
//#endregion

//#region Save View
export const SAVE_VIEW_EVENTS = {
  SAVE: 'chiViewSave',
  DELETE: 'chiViewDelete',
  SHOWN: 'chiSaveViewShown',
  HIDE: 'chiSaveViewHide',
  HIDDEN: 'chiSaveViewHidden',
  SAVE_LINK: 'chiSaveLink',
  INPUT: 'chiSaveViewInput',
  DEFAULT: 'chiSaveViewDefault',
};
//#endregion

export const TRANSFER_LIST_EVENTS = {
  SAVE: 'chiTransferListSave',
};
