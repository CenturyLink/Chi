//#region Common
export const ACTIVE_CLASS = '-active';
export const CLOSE_CLASS = '-close';
export const CLOSED_CLASS = '-closed';
export const LIGHT_CLASS = '-light';
export const DISABLED_CLASS = '-disabled';
export const DISABLED_SCROLL = '-disable-scroll';
export const INVERSE_CLASS = '-inverse';
export const ANIMATED_CLASS = '-animated';
export const PORTAL_CLASS = '-portal';
export const TRANSITIONING_CLASS = '-transitioning';
export const SR_ONLY = '-sr--only';
export const EXPANDED_CLASS = '-expanded';
export const COLLAPSED_CLASS = '-collapsed';
export const ONE_LINK_TX = 'OneLinkTx';
//#endregion

//#region Accordion
export const ACCORDION_CLASSES = {
  ACCORDION: 'chi-accordion',
  CONTENT: 'chi-accordion__content',
  ITEM: 'chi-accordion__item',
  TRIGGER: 'chi-accordion__trigger',
  TITLE: 'chi-accordion__title',
};
//#region

//#region Backdrop
export const BACKDROP_CLASSES = {
  BACKDROP: 'chi-backdrop',
  WRAPPER: 'chi-backdrop__wrapper',
};
//#endregion

//#region Button
export const BUTTON_CLASSES = {
  BG_NONE: '-bg--none',
  BUTTON: 'chi-button',
  ICON_BUTTON: '-icon',
  CONTENT: 'chi-button__content',
  FLAT: '-flat',
  NO_HOVER: '-no-hover',
  PRIMARY: '-primary',
  OUTLINE: '-outline',
  SIZES: {
    XS: '-xs',
    SM: '-sm',
    MD: '-md',
    LG: '-lg',
    XL: '-xl',
  },
};
//#endregion

//#region Button Group
export const BUTTON_GROUP_CLASSES = 'chi-button-group';
//#endregion

//#region Checkbox
export const CHECKBOX_CLASSES = {
  checkbox: 'chi-checkbox',
  INPUT: 'chi-checkbox__input',
  LABEL: 'chi-checkbox__label',
};
//#endregion

//#region Data Table
export const DATA_TABLE_CLASSES = {
  DATA_TABLE: 'chi-data-table',
  TOOLBAR: 'chi-toolbar',
  VIEWS: 'chi-toolbar__views',
  FILTERS: 'chi-toolbar__filters',
  ACTIONS: 'chi-toolbar__actions',
  COLUMNS: 'chi-data-table__columns',
  SEARCH: 'chi-toolbar__search',
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
  TRUNCATED: '-truncated',
};
//#endregion

//#region Drawer
export const DRAWER_CLASSES = {
  DRAWER: 'chi-drawer',
  HEADER: 'chi-drawer__header',
  TITLE: 'chi-drawer__title',
  CONTENT: 'chi-drawer__content',
  TRIGGER: 'chi-drawer__trigger',
};
//#endregion

//#region Form
export const FORM_CLASSES = {
  FORM_ITEM: 'chi-form__item',
  LABEL: 'chi-label',
};
//#endregion

//#region Form
export const MODAL_CLASSES = {
  FOOTER: 'chi-modal__footer',
  MODAL: 'chi-modal',
  HEADER: 'chi-modal__header',
  CONTENT: 'chi-modal__content',
  TITLE: 'chi-modal__title',
};
//#endregion

//#region Generic
export const GENERIC_SIZE_CLASSES = {
  XS: '-xs',
  SM: '-sm',
  MD: '-md',
  LG: '-lg',
  XL: '-xl',
};
//#endregion

//#region Icon
export const ICON_CLASS = 'chi-icon';
//#endregion

//#region Input
export const INPUT_CLASSES = {
  INPUT: 'chi-input',
  WRAPPER: 'chi-input__wrapper',
  ICON: {
    RIGHT: '-icon--right',
  },
};
//#endregion

//#region Pagination
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
  JUMPER: 'chi-pagination__jumper',
};
//#endregion

//#region Search Input
export const SEARCH_INPUT_CLASSES = {
  SEARCH_INPUT: 'chi-search__input',
};
//#endregion

//#region Search Input
export const SELECT_CLASSES = {
  SELECT: 'chi-select',
};
//#endregion

//#region Tooltip
export const TOOLTIP_CLASSES = {
  TOOLTIP_ELEMENT: 'chi-tooltip',
};
//#endregion

//#region Utility Classes
export const UTILITY_CLASSES = {
  ALIGN_ITEMS: {
    CENTER: '-align-items--center',
  },
  ALIGN_SELF: {
    CENTER: '-align-self--center',
    LEFT: '-align-self--left',
  },
  DISPLAY: {
    FLEX: '-d--flex',
  },
  FLEX: {
    FLEX_GROW1: '-flex--grow1',
    COLUMN: '-flex--column',
  },
  JUSTIFY: {
    CENTER: '-justify-content--center',
    MD_START: '-justify-content-md--start',
    MD_CENTER: '-justify-content-md--center',
    MD_END: '-justify-content-md--end',
  },
  TYPOGRAPHY: {
    TEXT_TRUNCATE: '-text--truncate',
    TEXT_NORMAL: '-text--normal',
    TEXT_BOLD: '-text--bold',
  },
  POSITION: {
    RELATIVE: '-position--relative',
    ABSOLUTE: '-position--absolute',
  },
  SIZING: {
    W100: '-w--100',
  },
  PADDING: {
    1: '-p--1',
    2: '-p--2',
    3: '-p--3',
    4: '-p--4',
    X: {
      0: '-px--0',
      1: '-px--1',
      2: '-px--2',
      3: '-px--3',
      4: '-px--4',
    },
    Y: {
      1: '-py--1',
      2: '-py--2',
      3: '-py--3',
      4: '-py--4',
    },
    LEFT: {
      1: '-pl--1',
      2: '-pl--2',
      3: '-pl--3',
      4: '-pl--4',
    },
    RIGHT: {
      1: '-pr--1',
      2: '-pr--2',
      3: '-pr--3',
      4: '-pr--4',
    },
    TOP: {
      1: '-pt--1',
      2: '-pt--2',
      3: '-pt--3',
      4: '-pt--4',
    },
    BOTTOM: {
      1: '-pb--1',
      2: '-pb--2',
      3: '-pb--3',
      4: '-pb--4',
    },
  },
  MARGIN: {
    1: '-m--1',
    2: '-m--2',
    3: '-m--3',
    4: '-m--4',
    X: {
      1: '-mx--1',
      2: '-mx--2',
      3: '-mx--3',
      4: '-mx--4',
    },
    Y: {
      1: '-my--1',
      2: '-my--2',
      3: '-my--3',
      4: '-my--4',
    },
    LEFT: {
      1: '-ml--1',
      2: '-ml--2',
      3: '-ml--3',
      4: '-ml--4',
    },
    RIGHT: {
      1: '-mr--1',
      2: '-mr--2',
      3: '-mr--3',
      4: '-mr--4',
    },
    TOP: {
      1: '-mt--1',
      2: '-mt--2',
      3: '-mt--3',
      4: '-mt--4',
    },
    BOTTOM: {
      1: '-mb--1',
      2: '-mb--2',
      3: '-mb--3',
      4: '-mb--4',
    },
  },
};
//#endregion
