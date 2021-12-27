import { DataTableConfig, DataTableModes } from '@/constants/types';

export const defaultConfig: DataTableConfig = {
  columnResize: false,
  mode: DataTableModes.CLIENT,
  noResultsMessage: 'No matches found. Please revise search criteria and try again.',
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
  selectedRow: 0,
};
