declare module 'vue' {
  interface ComponentCustomProps {
    // DataTableActions
    actions?: DataTableAction[] | undefined;
    rowData?: DataTableRow;
    dataTableNumber?: number;

    // DataTableTooltip
    msg?: string;
    header?: boolean;
    textWrap?: boolean;

    // DataTableBulkActions
    selectedRows?: number;
    uuid?: number | string;
    onChiShowSelectedRowsOnly?: (e: any) => void;

    // DataTableEmptyActionable
    content?: DataTableEmptyActionableContent;
    onChiEmptyActionableLink?: () => void;

    // ColumnCustomization
    availableColumns?: DataTableColumn[];
    selectedColumns?: DataTableColumn[];
    onChiColumnsChange?: (ev: DataTableColumn[]) => void;

    // ColumnCustomizationModalContent
    onChiToolbarColumnsSelected?: () => void;

    // AdvancedFilters
    mobile?: boolean;
    advancedFiltersData?: DataTableFilter[];
    customItems?: DataTableFilter[];
    onChiAdvancedFiltersChange?: () => void;

    // AdvancedFiltersPopoverFooter
    disabledButtons?: boolean;
    onChiFiltersClear?: () => void;
    onChiCancel?: () => void;
    onChiFiltersApply?: () => void;

    // Drawer
    position?: string;
    backdrop?: boolean;
    active?: boolean;
    onChiDrawerHide?: () => void;
    onChiDrawerClickOutside?: () => void;

    // Checkbox
    disabled?: boolean;
    selected?: boolean | 'indeterminate';
    id?: string;
    onChiChange?: (ev: Event) => void;

    // Pagination
    compact?: boolean;
    firstLast?: boolean;
    currentPage?: number;
    pages?: number;
    results?: number;
    pageSize?: boolean;
    pageJumper?: boolean;
    portal?: boolean;
    size?: string;
    onChiPageSizeChange?: (ev: Event) => void;
    onChiPageChange?: (ev: Event) => void;

    // Tooltip
    message?: string;
  }

  interface Window {
    '@centurylink/vue-wrapper': {
      Component: typeof Component;
    };
  }
}

export {};
