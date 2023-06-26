import {
  DATA_TABLE_EMPTY_ACTIONABLE_ICON,
  DATA_TABLE_EMPTY_ACTIONABLE_MESSAGE_LINK,
  DATA_TABLE_EMPTY_ACTIONABLE_MESSAGE_TEXT,
  DATA_TABLE_NO_FILTERS_MESSAGE,
  DATA_TABLE_NO_RESULTS_MESSAGE,
} from '@/constants/constants';
import { DataTableConfig, DataTableModes } from '@/constants/types';

export const defaultConfig: DataTableConfig = {
  columnResize: false,
  mode: DataTableModes.CLIENT,
  noResultsMessage: DATA_TABLE_NO_RESULTS_MESSAGE,
  noFiltersMessage: DATA_TABLE_NO_FILTERS_MESSAGE,
  pagination: {
    activePage: 1,
    compact: false,
    firstLast: false,
    hideOnSinglePage: false,
    pageJumper: false,
  },
  resultsPerPage: 10,
  style: {
    portal: false,
    compact: false,
    bordered: false,
    noBorder: false,
    hover: true,
    striped: false,
    size: 'md',
  },
  selectable: false,
  print: {
    mode: 'full',
    isNestedContentPrintDisabled: false,
  },
  treeSelection: true,
  cellWrap: false,
  showExpandAll: false,
  showSelectAllDropdown: false,
  emptyActionable: {
    isActionable: false,
    icon: DATA_TABLE_EMPTY_ACTIONABLE_ICON,
    message: {
      actionLink: DATA_TABLE_EMPTY_ACTIONABLE_MESSAGE_LINK,
      text: DATA_TABLE_EMPTY_ACTIONABLE_MESSAGE_TEXT,
    },
  },
};
