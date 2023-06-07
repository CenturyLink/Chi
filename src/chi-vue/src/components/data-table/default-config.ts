import { DATA_TABLE_NO_FILTERS_MESSAGE, DATA_TABLE_NO_RESULTS_MESSAGE } from '@/constants/constants';
import { DataTableConfig, DataTableEmptyConfig, DataTableModes } from '@/constants/types';

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
  emptyConfig: {
    isDataEmpty: true,
    icon: 'circle-plus-outline',
    message: {
      actionLink: 'Add a new or existing service',
      text: ', then manage here.',
    },
  },
};
