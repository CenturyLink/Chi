import { DataTableConfig, DataTableModes } from '@/constants/types';

export const defaultConfig: DataTableConfig = {
  activePage: 1,
  columnResize: false,
  mode: DataTableModes.CLIENT,
  noResultsMessage: 'No matches found. Please revise search criteria and try again.',
  pagination: {
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
  treeSelection: true,
};
