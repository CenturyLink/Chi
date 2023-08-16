export const ACTIVE_CLASS = '-active';
export const ACTIVE_ATTR = 'active';
export const EXPANDED_CLASS = '-expanded';
export const PORTAL_CLASS = '-portal';
export const ICON_BUTTON = '-icon';
export const ICON_CLASS = 'chi-icon';
export const BUTTON_CLASS = 'chi-button';
export const INFO_ICON_CLASS = 'icon-circle-info-outline';
export const ARROW_UP_CLASS = 'icon-arrow-up';
export const ARROW_SORT_CLASS = 'icon-arrow-sort';
export const CLOSE_CLASS = '-close';
export const CHI_BUTTON_CONTENT = 'chi-button__content';
export const CHI_DROPDOWN = 'chi-dropdown';
export const CHI_DROPDOWN_MENU = 'chi-dropdown__menu';
export const DATA_TABLE_CLASSES = {
  DATA_TABLE: 'chi-data-table',
  TOOLBAR: 'chi-data-table__toolbar',
  FILTERS: 'chi-data-table__filters',
  COLUMNS: 'chi-data-table__columns',
  HEAD: 'chi-data-table__head',
  BODY: 'chi-data-table__body',
  ROW: 'chi-data-table__row',
  ROW_CHILD: 'chi-data-table__row-child',
  ROW_GRAND_CHILD: 'chi-data-table__row-grand-child',
  EMPTY: 'chi-data-table__row-empty',
  CELL: 'chi-data-table__cell',
  FOOTER: 'chi-data-table__footer',
  EXPANDABLE: '-expandable',
  SELECTABLE: '-selectable',
  PORTAL: '-portal',
  BORDERED: '-bordered',
  NO_BORDER: '-no-border',
  HOVER: '-hover',
  STRIPED: '-striped',
  SORTING: '-sorting',
  COMPACT: '-compact',
  TRUNCATED: '-truncated'
};
export const RADIO_CLASSES = {
  RADIO: 'chi-radio'
};
export const PAGINATION_CLASSES = {
  PAGINATION: 'chi-pagination',
  RESULTS: 'chi-pagination__results',
  COMPACT: '-compact',
  CONTENT: 'chi-pagination__content',
  LABEL: 'chi-pagination__label',
  PAGE_SIZE: 'chi-pagination__page-size',
  START: 'chi-pagination__start',
  CENTER: 'chi-pagination__center',
  END: 'chi-pagination__end',
  JUMPER: 'chi-pagination__jumper'
};
export const DATA_TABLE_EVENTS = {
  SELECTED_ROWS_CHANGE: 'chiSelectedRowsChange',
  DATA_SORTING: 'chiDataSorting',
  FILTERS_CHANGE: 'chiFiltersChange',
  COLUMNS_CHANGE: 'chiColumnsChange',
  ADVANCED_FILTERS_CHANGE: 'chiAdvancedFiltersChange',
  TOOLBAR: {
    COLUMNS_CHANGE: 'chiToolbarColumnsChange',
    FILTERS_CHANGE: 'chiToolbarFiltersChange',
    SEARCH: 'chiToolbarSearch'
  },
  EXPANSION: {
    EXPANDED: 'chiRowExpanded',
    COLLAPSED: 'chiRowCollapsed'
  },
  BULK_ACTIONS: {
    SHOW_SELECTED_ONLY: 'chiShowSelectedRowsOnly',
    CANCEL: 'chiCancel'
  }
};
export const PAGINATION_EVENTS = {
  PAGE_CHANGE: 'chiPageChange',
  PAGE_SIZE: 'chiPageSizeChange'
};
export const UTILITY_CLASSES = {
  TYPOGRAPHY: {
    TEXT_TRUNCATE: '-text--truncate'
  }
};
export const TOOLTIP_CLASSES = {
  TOOLTIP: 'chi-tooltip'
};
export const BULK_ACTIONS_CLASSES = {
  BULK_ACTIONS: 'chi-bulk-actions',
  START: 'chi-bulk-actions__start',
  END: 'chi-bulk-actions__end',
  BUTTONS: 'chi-bulk-actions__buttons',
  BUTTONS_DESKTOP: 'chi-bulk-actions__buttons-desktop',
  BUTTONS_MOBILE: 'chi-bulk-actions__buttons-mobile',
  LABEL: 'chi-bulk-actions__label'
};
export const CHECKBOXES_CLASSES = {
  LABEL: 'chi-checkbox__label'
};

export const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

export const checkStatusSorting = statuses => {
  statuses.forEach((status, index) => {
    cy.get('@rows')
      .eq(index)
      .should('contain', status);
  });
};

export const checkDateSorting = dates => {
  dates.forEach((date, index) => {
    cy.get('@rows')
      .eq(index)
      .should('contain', date);
  });
};

export const isSelected = elements => {
  elements.forEach(el => expect(el.selected).to.be.true);
};

export const isNotSelected = elements => {
  elements.forEach(el => expect(el.selected).to.be.false);
};