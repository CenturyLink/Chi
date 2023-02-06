import { DataTableConfig, DataTableModes } from '@/constants/types';

export const defaultConfig: DataTableConfig = {
  columnResize: false,
  mode: DataTableModes.CLIENT,
  messages: {
    isSearch: false,
    noResultsMessage: 'No matching results',
    noFiltersMessage: 'Search for or select at least one filter to get results',
  },
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
};
