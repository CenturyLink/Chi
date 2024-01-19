import { Emit, Prop, Provide, Watch } from 'vue-property-decorator';
import {
  ACTIONS_CLASS,
  ACTIVE_CLASS,
  BUTTON_CLASSES,
  COLLAPSED_CLASS,
  DATA_TABLE_CLASSES,
  DROPDOWN_CLASSES,
  EXPANDED_CLASS,
  EXPAND_CLASS,
  GENERIC_SIZE_CLASSES,
  ICON_CLASS,
  ONE_LINK_TX,
  RADIO_CLASSES,
  SR_ONLY,
  TABLE_CLASSES,
  UTILITY_CLASSES,
} from '@/constants/classes';
import './data-table.scss';
import {
  DataTablePageChange,
  DataTableSorting,
  DATA_TABLE_EVENTS,
  GENERIC_EVENTS,
  PAGINATION_EVENTS,
} from '@/constants/events';
import {
  DataTableCellAlignment,
  DataTableConfig,
  DataTableData,
  DataTableRow,
  DataTableRowNestedContent,
  DataTableScreenBreakpoints,
  DataTableSortConfig,
  DataTableStyleConfig,
  DataTableModes,
  DataTableRowLevels,
  DataTableColumnDescription,
  DataTableColumn,
  ToolbarRef,
} from '@/constants/types';
import {
  DATA_TABLE_NO_FILTERS_MESSAGE,
  DATA_TABLE_NO_RESULTS_MESSAGE,
  DATA_TABLE_SORT_ICONS,
  SCREEN_BREAKPOINTS,
  CHI_VUE_KEYS,
} from '@/constants/constants';
import DataTableTooltip from './DataTableTooltip';
import Pagination from '../pagination/pagination';
import DataTableBulkActions from '../data-table-bulk-actions/DataTableBulkActions';
import arraySort from 'array-sort';
import { defaultConfig } from './default-config';
import { ICON_CLASSES } from '@/constants/icons';
import { alignmentUtilityClasses } from './constants/constants';
import Checkbox from '../checkbox/Checkbox';
import { printElement } from '../../utils/utils';
import { ColumnResize } from './utils/Resize';
import Tooltip from '../tooltip/tooltip';
import { Component, Vue } from '@/build/vue-wrapper';
import { Transition } from 'vue';
import DataTableEmptyActionable from './DataTableEmptyActionable';
import DataTableActions from './DatatableActions';
import { JSX } from 'vue/jsx-runtime';
import { Compare } from '@/utils/Compare';

declare const chi: any;

let dataTableNumber = 0;

@Component({})
export default class DataTable extends Vue {
  name = 'DataTable';

  @Prop() dataTableData!: DataTableData;
  @Prop() config!: DataTableConfig;

  @Provide({ to: CHI_VUE_KEYS.TOOLBAR_SEARCH_INPUT })
  toolbarSearch: ToolbarRef = {};

  @Emit(DATA_TABLE_EVENTS.EMPTY_ACTIONABLE_LINK)
  _emitEmptyActionableLink() {
    // This is intentional
  }

  @Emit(PAGINATION_EVENTS.PAGE_SIZE)
  _emitPaginationSize() {
    return this.slicedData;
  }

  @Emit(PAGINATION_EVENTS.PAGE_CHANGE)
  _emitPaginationChange(pageData: DataTablePageChange) {
    return pageData;
  }

  @Emit(DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY)
  _emitShowSelectedOnly(selected: boolean) {
    return selected;
  }

  @Emit(GENERIC_EVENTS.CANCEL)
  _emitChiBulkActionsCancel() {
    // This is intentional
  }

  @Emit(DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE)
  _emitSelectedRowsChange(selectedRowsData: DataTableRow[]) {
    return selectedRowsData;
  }

  @Emit(DATA_TABLE_EVENTS.SELECTED_ROW)
  _emitSelectedRow(newRowData: DataTableRow) {
    return newRowData;
  }

  @Emit(DATA_TABLE_EVENTS.DESELECTED_ROW)
  _emitDeselectedRow(newRowData: DataTableRow) {
    return newRowData;
  }

  @Emit(DATA_TABLE_EVENTS.SELECTED_ALL_PAGES)
  _emitSelectAllPages(rows: DataTableRow[]) {
    return rows;
  }

  @Emit(DATA_TABLE_EVENTS.SELECTED_ALL)
  _emitSelectAll(rows: DataTableRow[]) {
    return rows;
  }

  @Emit(DATA_TABLE_EVENTS.SELECTED_ALL_DEPRECATED)
  _emitSelectAllDeprecated(rows: DataTableRow[]) {
    return rows;
  }

  @Emit(DATA_TABLE_EVENTS.DESELECTED_ALL_PAGES)
  _emitDeselectAllPages(rows: DataTableRow[]) {
    return rows;
  }

  @Emit(DATA_TABLE_EVENTS.DESELECTED_ALL)
  _emitDeselectAll(rows: DataTableRow[]) {
    return rows;
  }

  @Emit(DATA_TABLE_EVENTS.DESELECTED_ALL_DEPRECATED)
  _emitDeselectAllDeprecated(rows: DataTableRow[]) {
    return rows;
  }

  @Emit(DATA_TABLE_EVENTS.EXPANSION.COLLAPSED)
  _emitCollapsedRow(row: DataTableRow) {
    return row;
  }

  @Emit(DATA_TABLE_EVENTS.EXPANSION.EXPANDED)
  _emitExpandedRow(row: DataTableRow) {
    return row;
  }

  @Emit(DATA_TABLE_EVENTS.EXPANSION.EXPAND_ALL)
  _emitExpandAllRows(rows: string[]) {
    return rows;
  }

  @Emit(DATA_TABLE_EVENTS.EXPANSION.COLLAPSE_ALL)
  _emitCollapseAllRows(rows: string[]) {
    return rows;
  }

  @Emit(DATA_TABLE_EVENTS.DATA_SORTING)
  _emitSortingData(data: DataTableSorting) {
    return data;
  }

  accordionsExpanded: string[] = [];
  activePage = defaultConfig.pagination.activePage || 1;
  resultsPerPage = defaultConfig.resultsPerPage || 10;
  selectedRows: string[] = [];
  slicedData: DataTableRow[] = [];
  mode = defaultConfig.mode;
  treeSelection = defaultConfig.treeSelection;
  cellWrap = defaultConfig.cellWrap;
  showExpandAll = defaultConfig.showExpandAll;
  showSelectAllDropdown = defaultConfig.showSelectAllDropdown;
  printMode = defaultConfig.print?.mode;
  emptyMessage = defaultConfig.noFiltersMessage;
  emptyActionableContent = defaultConfig.emptyActionable;
  preventSortOnResize? = false;
  actions = defaultConfig.actions;

  private sortable = false;
  private sortedData?: DataTableRow[] = [];
  private serializedDataBody: DataTableRow[] = [];
  private showSelectedOnlyRowsData: DataTableRow[] = [];
  private showSelectedOnly = false;
  private printDisabledColsIndexes: number[] = [];
  private mapRows: {
    [rowId: string]: {
      level: number;
      parentRowId: string | null;
      rootLevelRowId: string | null;
    };
  } = {};

  _currentScreenBreakpoint?: DataTableScreenBreakpoints;
  _dataTableId?: string;
  _expandable!: boolean;
  _resizeTimer?: any;
  _sortConfig?: DataTableSortConfig;
  _bulkActionsComponent?: DataTableBulkActions;
  _chiDropdownSelectAll: any;
  _dataTableNumber?: number;

  _toggleInfoPopover(infoPopoverId: string) {
    const popover = this._getInfoPopover(infoPopoverId);

    if (popover) {
      if (!popover.reference && !popover.active) {
        popover.reference = `#${infoPopoverId}-reference`;
      }

      popover.toggle();
    }
  }

  _getInfoPopover(infoPopoverId: string) {
    const dataTable = this.$refs.dataTable as HTMLElement;

    return dataTable.querySelector(`#${infoPopoverId}`) as any;
  }

  _getDescription(description: string | DataTableColumnDescription) {
    if (typeof description === 'string') {
      return description;
    }
    const template = (description as DataTableColumnDescription).template;

    if (template) {
      const descriptionSlot = this.$slots[template];

      if (descriptionSlot) {
        return descriptionSlot((description as DataTableColumnDescription).payload);
      }
    }
    return (description as DataTableColumnDescription).text;
  }

  _isExpandedRowInPage() {
    return this.slicedData.some((row: DataTableRow) => {
      const id = row.rowId.toString();

      return this.accordionsExpanded.includes(id);
    });
  }

  _headExpandable() {
    const isExpanded = this._isExpandedRowInPage();
    const expandableIcon = isExpanded ? 'minus' : 'plus';

    return (
      <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`}>
        {this.showExpandAll && (
          <Tooltip message={`${isExpanded ? 'Collapse' : 'Expand'} All`}>
            <button
              class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT} ${EXPAND_CLASS} ${GENERIC_SIZE_CLASSES.SM}`}
              aria-label="Expand All Rows"
              onClick={() => this.toggleAllRows(isExpanded ? 'collapse' : 'expand')}
            >
              <div class={BUTTON_CLASSES.CONTENT}>
                <i class={`${ICON_CLASS} icon-squares-${expandableIcon}-outline`} />
              </div>
              <span class={SR_ONLY}>Expand All Rows</span>
            </button>
          </Tooltip>
        )}
      </div>
    );
  }

  _getHeadContent(label: string, icon?: string) {
    if (icon) {
      return (
        <Tooltip message={label}>
          <chi-icon icon={icon} size="sm" color="dark" />
        </Tooltip>
      );
    }

    if (this.cellWrap) {
      return <DataTableTooltip textWrap={this.cellWrap} msg={label} class="-w--100" />;
    }

    if (this.config.truncation) {
      return <DataTableTooltip msg={label} header />;
    }

    return label;
  }

  _head() {
    const tableHeadCells = [
      this.config.selectable ? (
        this.config.selectable === 'radio' ? (
          <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.SELECTABLE}`}></div>
        ) : (
          this._selectRowCheckbox(true)
        )
      ) : null,
      this._expandable ? this._headExpandable() : null,
    ];

    const heads = Array.isArray(this.dataTableData.head)
      ? this.dataTableData.head
      : Object.keys(this.dataTableData.head);
    const infoPopovers: JSX.Element[] = [];

    heads.forEach((column: string | DataTableColumn, cellIndex: number) => {
      const columnIndex = String(Array.isArray(this.dataTableData.head) ? cellIndex : column);
      const columnName = Array.isArray(this.dataTableData.head) ? (column as DataTableColumn).name : column;
      const icon = this.dataTableData.head[columnIndex].icon;
      const infoPopoverId = `info-popover-${this._dataTableNumber}-${columnName}`,
        buttonId = `info-popover-${this._dataTableNumber}-${columnName}-reference`,
        label = this.dataTableData.head[columnIndex].label || this.dataTableData.head[columnIndex],
        infoIcon = this.dataTableData.head[columnIndex].description ? (
          <chi-button
            id={buttonId}
            variant="flat"
            type="icon"
            alternative-text="Info icon"
            onClick={() => {
              this._toggleInfoPopover(infoPopoverId);
            }}
          >
            <i class={`${ICON_CLASS} -xs ${ICON_CLASSES.ICON_INFO}`} aria-hidden="true"></i>
          </chi-button>
        ) : null,
        infoPopover = this.dataTableData.head[columnIndex].description ? (
          <chi-popover
            id={infoPopoverId}
            reference={`#${buttonId}`}
            position="top"
            title={(this.dataTableData.head[columnIndex].description as DataTableColumnDescription).title}
            arrow
            onChiPopoverHidden={() => {
              const popover = this._getInfoPopover(infoPopoverId);

              if (popover) {
                popover.reference = '';
              }
            }}
          >
            <div>
              {this._getDescription(
                this.dataTableData.head[columnIndex].description as string | DataTableColumnDescription
              )}
            </div>
          </chi-popover>
        ) : null,
        sortBy = this.dataTableData.head[columnIndex].sortBy,
        sortable = this.dataTableData.head[columnIndex].sortable,
        alignment = this._cellAlignment(this.dataTableData.head[columnIndex].align || 'left'),
        sortIcon = sortable ? (
          <chi-button variant="flat" type="icon" alternative-text="Sort icon">
            <i
              class={`
                ${ICON_CLASS} -xs ${
                  this._sortConfig &&
                  (this._sortConfig.key === this.dataTableData.head[columnIndex].sortBy ||
                    this._sortConfig.key === columnIndex)
                    ? DATA_TABLE_SORT_ICONS.ARROW
                    : DATA_TABLE_SORT_ICONS.SORT
                }`}
              style={`${
                this._sortConfig && this._sortConfig.direction === 'descending' ? 'transform: rotate(180deg)' : ''
              }`}
            />
          </chi-button>
        ) : (
          ''
        ),
        cellWidth =
          this.config.columnSizes && this._currentScreenBreakpoint
            ? this.config.columnSizes[this._currentScreenBreakpoint][cellIndex]
            : null;

      const sortableColumnHead = (
        <div
          aria-label={`Sort Column ${label}`}
          class={`${DATA_TABLE_CLASSES.CELL}
              ${alignment}
              ${sortable ? DATA_TABLE_CLASSES.SORTING : ''}
              ${cellWidth && cellWidth > 0 ? `-flex-basis--${cellWidth}` : ''}`}
          data-column={columnName}
          data-sort-by={sortBy}
          data-sort={this._sortConfig && this._sortConfig.direction ? this._sortConfig.direction : ''}
          data-label={label}
          onClick={(e: MouseEvent) => {
            if (!this.preventSortOnResize && e.type !== '') {
              this.sortColumn(e);
            }
          }}
          style={`
              ${cellWidth === 0 ? 'display: none;' : ''}
              ${this.dataTableData.head[columnIndex].allowOverflow ? 'overflow: visible;' : ''}
              `}
        >
          {this._getHeadContent(label as string, icon)}
          {infoIcon}
          {sortIcon}
        </div>
      );
      const nonSortableColumnHead = (
        <div
          class={`${DATA_TABLE_CLASSES.CELL}
              ${columnName === 'actions' ? ACTIONS_CLASS : ''}
              ${alignment}
              ${cellWidth && cellWidth > 0 ? `-flex-basis--${cellWidth}` : ''}`}
          data-label={label}
          style={`
              ${cellWidth === 0 ? 'display: none;' : ''}
              ${this.dataTableData.head[columnIndex].allowOverflow ? 'overflow: visible;' : ''}
          `}
        >
          {this._getHeadContent(label as string, icon)}
          {infoIcon}
        </div>
      );

      tableHeadCells.push(sortable ? sortableColumnHead : nonSortableColumnHead);

      if (infoPopover) {
        infoPopovers.push(infoPopover as JSX.Element);
      }

      if (this.dataTableData.head[columnIndex].sortable && !this.sortable) {
        this.sortable = true;
      }
    });

    return (
      <div class={`${DATA_TABLE_CLASSES.HEAD} ${ONE_LINK_TX}`} role="row">
        <div class={DATA_TABLE_CLASSES.ROW}>
          {tableHeadCells}
          {infoPopovers}
        </div>
      </div>
    );
  }

  _saveView() {
    const slot = this.$slots['save-view'];

    return slot ? slot({}) : null;
  }

  _toolbar() {
    const slot = this.$slots['toolbar'];

    if (slot) {
      return <div>{slot({})}</div>;
    }

    this.emptyMessage = this.config.noResultsMessage || defaultConfig.noResultsMessage || DATA_TABLE_NO_RESULTS_MESSAGE;
    return null;
  }

  _bulkActions() {
    const bulkActionSlot = this.$slots['bulk-actions'] ? this.$slots['bulk-actions']({}) : null;

    if (bulkActionSlot) {
      if (this.mode === DataTableModes.CLIENT) {
        return (
          <DataTableBulkActions
            uuid={this._dataTableNumber}
            selectedRows={this.selectedRows.length}
            onChiCancel={this.handleBulkActionsCancel}
            onChiShowSelectedRowsOnly={(e: boolean) => this.handleBulkActionsShowSelectedOnly(e)}
          >
            <div>{bulkActionSlot}</div>
          </DataTableBulkActions>
        );
      }

      return bulkActionSlot;
    }
    return null;
  }

  _getSelectedFirstLevelRowsCount() {
    const selectedRows = this.serializedDataBody.filter((row: DataTableRow) => {
      return this.selectedRows.includes(row.rowId);
    });

    return selectedRows.length;
  }

  _handleBulkActionsDeselection() {
    if (this.showSelectedOnly && this._bulkActionsComponent) {
      if (this.selectedRows.length > 0) {
        this._showSelectedOnlyRows();
      } else {
        this.showSelectedOnly = false;
        this._showAllRows();
      }
    }
  }

  _cellAlignment(align: DataTableCellAlignment): string {
    return align ? alignmentUtilityClasses[align] : '';
  }

  _dataTableClasses(style: DataTableStyleConfig, sortable: boolean) {
    return [
      DATA_TABLE_CLASSES.DATA_TABLE,
      style.portal ? DATA_TABLE_CLASSES.PORTAL : '',
      style.compact || style.portal ? DATA_TABLE_CLASSES.COMPACT : '',
      style.bordered ? DATA_TABLE_CLASSES.BORDERED : '',
      style.noBorder ? DATA_TABLE_CLASSES.NO_BORDER : '',
      style.hover ? DATA_TABLE_CLASSES.HOVER : '',
      style.striped ? DATA_TABLE_CLASSES.STRIPED : '',
      style.size && !style.portal ? `-${style.size}` : '',
      sortable ? DATA_TABLE_CLASSES.SORTING : '',
    ].join(' ');
  }

  _expansionButton(rowData: DataTableRow) {
    return (
      <button
        class={`
      ${BUTTON_CLASSES.BUTTON}
      ${BUTTON_CLASSES.ICON_BUTTON}
      ${BUTTON_CLASSES.FLAT}
      ${EXPAND_CLASS}
      ${GENERIC_SIZE_CLASSES.XS}
      `}
        aria-label="Expand row"
        data-target={`#${rowData.rowId}-content`}
        onClick={() => this.toggleRow({ rowId: rowData.id })}
      >
        <div class={BUTTON_CLASSES.CONTENT}>
          <i
            class={`
          ${ICON_CLASS}
          icon-${this.accordionsExpanded.includes(rowData.rowId) ? 'minus' : 'plus'}
          `}
          />
        </div>
        <span class={SR_ONLY}>Expand Row</span>
      </button>
    );
  }

  _expansionButtonCell(rowData: DataTableRow) {
    return (
      <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`} role="cell">
        {this._expansionButton(rowData)}
      </div>
    );
  }

  _emitSelectedRows() {
    const selectedRowsData = this.serializedDataBody.filter((row: DataTableRow) => {
      return this.selectedRows.includes(row.rowId);
    });

    this._emitSelectedRowsChange(selectedRowsData);
  }

  _locateParentRow(rowData: DataTableRow) {
    const parentRowId = rowData.parentRowId;
    const rootLevelId = rowData.rootLevelRowId;

    if (rowData.level === 1) {
      return this.serializedDataBody.find((row: DataTableRow) => row.rowId === rootLevelId);
    } else if (rowData.level === 2) {
      const rootLevelRow = this.serializedDataBody.find((row: DataTableRow) => row.rowId === rootLevelId);

      return rootLevelRow?.nestedContent.table.data.find((row: DataTableRow) => row.rowId === parentRowId);
    }
  }

  _toggleChildRowSelection(rowData: DataTableRow, action: 'select' | 'deselect') {
    if (rowData.nestedContent?.table?.data) {
      const childRows = rowData.nestedContent.table.data;
      const selectedRows = this.selectedRows;

      const toggleChildRow = (childRow: DataTableRow) => {
        if (action === 'select') {
          if (!childRow.selectionDisabled) {
            selectedRows.push(childRow.rowId);
          }
        } else if (action === 'deselect') {
          const indexOfRowIdIndex = selectedRows.indexOf(childRow.rowId);

          if (indexOfRowIdIndex !== -1) {
            if (!childRow.selectionDisabled) {
              selectedRows.splice(indexOfRowIdIndex, 1);
            }
          }
        }
        if (childRow.nestedContent?.table?.data) {
          const childRows = childRow.nestedContent.table.data;

          childRows.forEach((childRow: DataTableRow) => {
            toggleChildRow(childRow);
          });
        }
      };

      if (childRows.length > 0) {
        childRows.forEach((childRow: DataTableRow) => {
          toggleChildRow(childRow);
        });
      }
    }
  }

  selectRow(rowData: DataTableRow) {
    const newRowData: DataTableRow = {
      ...rowData,
      selected: true,
    };

    if (this.config.selectable === 'radio') {
      this.selectedRows.length = 0;
    }

    if (!this.selectedRows.includes(rowData.rowId)) {
      this.selectedRows.push(rowData.rowId);
    }

    if (this.treeSelection) {
      const parentRow = this._locateParentRow(rowData);

      if (parentRow?.nestedContent.table.data.every((row: DataTableRow) => this.selectedRows.includes(row.rowId))) {
        if (!parentRow.selectionDisabled) {
          this.selectedRows.push(parentRow.rowId);
        }

        if (rowData.level === 2) {
          const rootLevelRow = this._locateParentRow(parentRow);

          if (
            rootLevelRow?.nestedContent.table.data.every((row: DataTableRow) =>
              this.selectedRows.includes(row.rowId)
            ) &&
            !rootLevelRow.selectionDisabled
          ) {
            this.selectedRows.push(rootLevelRow.rowId);
          }
        }
      }
      this._toggleChildRowSelection(rowData, 'select');
    }

    this._emitSelectedRow(newRowData);
    this._emitSelectedRows();
  }

  async deselectRow(rowData: DataTableRow) {
    const newRowData: DataTableRow = {
      ...rowData,
      selected: false,
    };

    if (this.selectedRows.includes(rowData.rowId)) {
      const indexOfRowId = this.selectedRows.indexOf(rowData.rowId);

      this.selectedRows.splice(indexOfRowId, 1);
    }

    if (this.treeSelection) {
      const parentRow = this._locateParentRow(rowData);

      if (parentRow) {
        const indexOfSelectedParent = this.selectedRows.indexOf(parentRow.rowId);

        if (indexOfSelectedParent !== -1) {
          if (!parentRow.selectionDisabled) {
            this.selectedRows.splice(indexOfSelectedParent, 1);
          }
        }

        if (rowData.level === 2) {
          const rootLevelRow = this._locateParentRow(parentRow);

          if (rootLevelRow) {
            const indexOfParentRootLevelRowId = this.selectedRows.indexOf(rootLevelRow.rowId);

            if (
              indexOfParentRootLevelRowId !== -1 &&
              !rootLevelRow?.nestedContent.table.data.every((row: DataTableRow) =>
                this.selectedRows.includes(row.rowId)
              )
            ) {
              this.selectedRows.splice(indexOfParentRootLevelRowId, 1);
            }
          }
        }
      }
      this._toggleChildRowSelection(rowData, 'deselect');
    }

    this._handleBulkActionsDeselection();
    this._emitDeselectedRow(newRowData);
    this._emitSelectedRows();
  }

  _calculateNumberOfPages() {
    const serverSide = this.mode === DataTableModes.SERVER;
    const pages = this.config.pagination.pages;

    if (serverSide && pages && typeof pages === 'number') {
      return pages;
    }

    const bodyLength = this.showSelectedOnly ? this._getSelectedFirstLevelRowsCount() : this.dataTableData.body.length;

    return Math.max(Math.ceil(bodyLength / this.resultsPerPage), 1);
  }

  _setData(selectAllPages: boolean | undefined) {
    const numberOfPages = this._calculateNumberOfPages();
    const allData = this.sortedData && this.sortedData.length > 0 ? this.sortedData : this.serializedDataBody;

    return selectAllPages || numberOfPages === 1 ? allData : this.slicedData;
  }

  async selectAllRows(action: 'select' | 'deselect', selectAllPages?: boolean) {
    const data = this._setData(selectAllPages);
    const dataToEmit = (data: DataTableRow[]) => {
      return data.filter((row: DataTableRow) => !row.selectionDisabled);
    };

    if (action === 'select') {
      const eventData = selectAllPages ? dataToEmit(data) : dataToEmit(this.slicedData);

      data?.forEach((row: DataTableRow) => {
        if (!this.selectedRows.includes(row.rowId) && !row.selectionDisabled) {
          this.selectedRows.push(row.rowId);
          if (this.treeSelection) {
            this._toggleChildRowSelection(row, 'select');
          }
        }
      });

      if (selectAllPages) {
        this._emitSelectAllPages(eventData);
      } else {
        this._emitSelectAll(eventData);
      }

      // TODO: Change deprecated events when major version is released
      this._emitSelectAllDeprecated(eventData);
    } else {
      const selectedRows = data.filter((row: DataTableRow) => {
        return [...this.selectedRows].includes(row.rowId);
      });
      // TODO: Change deprecated events when major version is released
      const event = selectAllPages ? DATA_TABLE_EVENTS.DESELECTED_ALL_PAGES : DATA_TABLE_EVENTS.DESELECTED_ALL;
      const eventData = selectAllPages ? selectedRows : dataToEmit(this.slicedData);

      data?.forEach((row: DataTableRow) => {
        const rowIndex = this.selectedRows.indexOf(row.rowId);

        this.selectedRows.splice(rowIndex, 1);
        if (this.treeSelection) {
          this._toggleChildRowSelection(row, 'deselect');
        }
      });
      await this._handleBulkActionsDeselection();

      if (selectAllPages) {
        this._emitDeselectAllPages(eventData);
      } else {
        this._emitDeselectAll(eventData);
      }

      this._emitDeselectAllDeprecated(eventData);
    }

    this._chiDropdownSelectAll?.hide();
    this._emitSelectedRows();
  }

  _handleCheckboxChange(ev: Event, selectAll: boolean, rowData?: DataTableRow) {
    if (selectAll) {
      this.selectAllRows((ev.target as HTMLInputElement).checked ? 'select' : 'deselect');
    } else {
      if (rowData) {
        if (ev.target && (ev.target as HTMLInputElement).checked) {
          this.selectRow(rowData);
        } else {
          this.deselectRow(rowData);
        }
      }
    }
  }

  _getCheckboxState(selectAll: boolean, rowData: DataTableRow | undefined = undefined) {
    if (selectAll) {
      const isOnVisiblePage = (selectedRowId: string) => {
        return (
          this.mapRows[selectedRowId]?.rootLevelRowId &&
          this.slicedData.find(
            (visibleRow: DataTableRow) => visibleRow.rowId === this.mapRows[selectedRowId].rootLevelRowId
          )
        );
      };

      if (this.slicedData.length > 0 && this.slicedData.every(this._isRowSelected)) {
        return true;
      } else if (this.slicedData.some(this._isRowSelected) || this.selectedRows.some(isOnVisiblePage)) {
        return 'indeterminate';
      }

      return false;
    } else {
      const isRowSelected = rowData?.rowId && this.selectedRows.includes(rowData.rowId);

      if (isRowSelected) {
        return true;
      }

      if (rowData?.nestedContent?.table?.data) {
        const childRows = rowData.nestedContent.table.data;

        if (childRows.some(this._isRowSelected)) {
          return 'indeterminate';
        } else {
          const grandChildren = Object.keys(this.mapRows).filter(
            (rowId: string) => this.mapRows[rowId].level === 2 && this.mapRows[rowId].rootLevelRowId === rowData.rowId
          );
          const isGrandChildSelected = (rowId: string) => this.selectedRows.includes(rowId);

          if (
            (!grandChildren.every(isGrandChildSelected) && grandChildren.some(isGrandChildSelected)) ||
            (childRows.every(this._isRowSelectionDisabled) && grandChildren.some(isGrandChildSelected))
          ) {
            return 'indeterminate';
          }
        }
      }

      return false;
    }
  }

  _isRowSelectionDisabled(row: DataTableRow) {
    return row.selectionDisabled;
  }

  _isRowSelected(row: DataTableRow) {
    return this.selectedRows.includes(row.rowId);
  }

  _selectAllDropdown() {
    const pageSelectionMessage = 'Select all items, this page';
    const allPagesSelectionMessage = 'Select all items, all pages';
    const deselectAllSelectionMessage = 'Deselect all';

    return (
      <div class={DROPDOWN_CLASSES.DROPDOWN}>
        <button
          ref="selectAllDropdown"
          class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT}`}
          aria-label="Select All Dropdown"
          data-position="bottom-start"
        >
          <div class={BUTTON_CLASSES.CONTENT}>
            <i class={`${ICON_CLASS} icon-chevron-down ${GENERIC_SIZE_CLASSES.XS}`} aria-hidden="true"></i>
          </div>
        </button>
        <div class={DROPDOWN_CLASSES.MENU}>
          <a class={DROPDOWN_CLASSES.MENU_ITEM} onClick={() => this.selectAllRows('select')}>
            {pageSelectionMessage}
          </a>
          <a class={DROPDOWN_CLASSES.MENU_ITEM} onClick={() => this.selectAllRows('select', true)}>
            {allPagesSelectionMessage}
          </a>
          <a class={DROPDOWN_CLASSES.MENU_ITEM} onClick={() => this.selectAllRows('deselect', true)}>
            {deselectAllSelectionMessage}
          </a>
        </div>
      </div>
    );
  }

  _selectRowCheckbox(selectAll: boolean, rowData: DataTableRow | undefined = undefined) {
    const selected = this._getCheckboxState(selectAll, rowData);

    if (!selectAll && !rowData) {
      return;
    }

    const checkboxIds = {
      object: rowData?.rowNumber ? `checkbox-select-${rowData.rowId}` : '',
      boolean: selectAll ? `checkbox-${this._dataTableId}-select-all-rows` : '',
    };
    const checkboxId = checkboxIds[typeof rowData] || checkboxIds[typeof selectAll];
    const allVisibleRowsSelectionDisabled =
      this.slicedData.length > 0 && this.slicedData.every((row: DataTableRow) => row.selectionDisabled);
    const checkboxDisabled = rowData?.selectionDisabled || (selectAll && allVisibleRowsSelectionDisabled);
    const disabledTooltipMsg = checkboxDisabled && rowData?.selectableDisabledMessage;
    const popoverId = `${checkboxId}-popover`;
    const popover = disabledTooltipMsg ? (
      <chi-popover id={popoverId} reference={`#${checkboxId}`} position="top" arrow variant="text">
        {disabledTooltipMsg}
      </chi-popover>
    ) : null;

    return (
      <div
        class={this._getSelectableClasses(rowData as DataTableRow)}
        onMouseenter={() => popover && this._toggleInfoPopover(popoverId)}
        onMouseleave={() => popover && this._toggleInfoPopover(popoverId)}
      >
        {popover}
        <Checkbox
          disabled={checkboxDisabled}
          id={checkboxId}
          onChiChange={(ev: Event) => this._handleCheckboxChange(ev, selectAll, rowData)}
          selected={selected}
        />
        {selectAll && this.showSelectAllDropdown ? this._selectAllDropdown() : null}
      </div>
    );
  }

  _radioButton(rowLevel: DataTableRowLevels, rowData: DataTableRow) {
    if (!rowData) {
      return;
    }

    const radioButtonId =
      rowData && typeof rowData === 'object' && rowData.rowNumber
        ? `radio-button-${this._rowId(rowData.rowNumber)}`
        : '';
    const radioButtonName = `radio-buttons-${this._dataTableId}`;
    const checkedState = this.selectedRows.includes(rowData.rowId);

    if (rowLevel !== 'parent') {
      return <div class={this._getSelectableClasses(rowData as DataTableRow)}></div>;
    }

    const popoverId = `${radioButtonId}-popover`;
    const popover =
      rowData?.selectionDisabled && rowData?.selectableDisabledMessage ? (
        <chi-popover id={popoverId} reference={`#${radioButtonId}`} position="top" arrow variant="text">
          {rowData.selectableDisabledMessage}
        </chi-popover>
      ) : null;

    return (
      <div
        class={this._getSelectableClasses(rowData as DataTableRow)}
        onMouseenter={() => popover && this._toggleInfoPopover(popoverId)}
        onMouseleave={() => popover && this._toggleInfoPopover(popoverId)}
      >
        {popover}
        <div class={RADIO_CLASSES.RADIO}>
          <input
            class={RADIO_CLASSES.INPUT}
            type="radio"
            name={radioButtonName}
            id={radioButtonId}
            disabled={rowData?.selectionDisabled}
            onChange={() => {
              if (rowData) this.selectRow(rowData);
            }}
            checked={checkedState}
          />
          <label class={RADIO_CLASSES.LABEL} for={radioButtonId}>
            <div class={SR_ONLY}>Select row {radioButtonId}</div>
          </label>
        </div>
      </div>
    );
  }

  _getSelectableClasses(rowData: DataTableRow): string {
    if (!rowData?.autoExpandedAlignment) {
      return `${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.SELECTABLE}`;
    }

    return `${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.SELECTABLE} ${UTILITY_CLASSES.FLEX.ALIGN.START}`;
  }
  toggleRow(toggleInfo: { rowId: string; action?: 'expand' | 'collapse' }) {
    const rowData = this.dataTableData.body.find((row) => row.id === toggleInfo.rowId);
    const id = `row-dt-${this._dataTableNumber}-${toggleInfo.rowId}`;

    if (this.accordionsExpanded.includes(id) || toggleInfo.action === 'collapse') {
      const accordionIndex = this.accordionsExpanded.indexOf(id);

      if (accordionIndex !== -1) {
        this.accordionsExpanded.splice(accordionIndex, 1);

        if (rowData) {
          this._emitCollapsedRow(rowData);
        }
      }
    } else {
      this.accordionsExpanded.push(id);

      if (rowData) {
        this._emitExpandedRow(rowData);
      }
    }
  }

  toggleAllRows(action: 'expand' | 'collapse') {
    const toggleRows = (rows: DataTableRow[]) =>
      rows.forEach((row: DataTableRow) => {
        if (row.nestedContent) {
          const children = row.nestedContent.table?.data;

          this.toggleRow({ rowId: row.id, action });
          if (children) {
            toggleRows(children);
          }
        }
      });

    if (action === 'expand') {
      this._emitExpandAllRows(this.accordionsExpanded);
    } else {
      this._emitCollapseAllRows(this.accordionsExpanded);
    }

    toggleRows(this.slicedData);
  }

  _rowAccordionContent(accordionData: DataTableRowNestedContent, contentLevel: 'parent' | 'child') {
    if (accordionData.template) {
      const template: any | undefined = this.$slots[accordionData.template];

      if (!template) {
        throw Error(`No template with name ${accordionData.template} is provided.`);
      } else {
        const element = template(accordionData.payload);

        return (
          <div class={`${DATA_TABLE_CLASSES.ROW_CHILD} ${UTILITY_CLASSES.PADDING[2]}`} role="row">
            {element}
          </div>
        );
      }
    } else if (accordionData.table) {
      if (accordionData.table.data) {
        return accordionData.table.data.map((bodyRow: DataTableRow) => {
          return this.row(bodyRow, contentLevel === 'child' ? 'grandChild' : 'child');
        });
      }
    } else {
      return (
        <div class={`${DATA_TABLE_CLASSES.ROW_CHILD} ${UTILITY_CLASSES.PADDING[2]}`} role="row">
          {accordionData.value}
        </div>
      );
    }
  }

  _rowId(id: number | string) {
    return `row-${this._dataTableId}-${id}`;
  }

  _getRowClass(bodyRow: DataTableRow, rowLevel: DataTableRowLevels): string {
    if (bodyRow.autoExpandedAlignment) {
      return DATA_TABLE_CLASSES.ROW;
    }

    switch (rowLevel) {
      case 'grandChild':
        return DATA_TABLE_CLASSES.ROW_GRAND_CHILD;
      case 'child':
        return DATA_TABLE_CLASSES.ROW_CHILD;
      default:
        return DATA_TABLE_CLASSES.ROW;
    }
  }

  row(bodyRow: DataTableRow, rowLevel: DataTableRowLevels = 'parent', striped = false) {
    const row: JSX.Element[] = [];
    const rowCells: JSX.Element[] = [];
    const rowAccordionContent: (JSX.Element | JSX.Element[][])[] = [];
    const rowId = this._rowId(bodyRow.id || bodyRow.rowNumber);
    const rowClass = this._getRowClass(bodyRow, rowLevel);

    if (this.config.selectable) {
      const selectableRow =
        this.config.selectable === 'radio'
          ? this._radioButton(rowLevel, bodyRow)
          : this._selectRowCheckbox(false, bodyRow);

      if (selectableRow) {
        rowCells.push(selectableRow);
      }
    }

    if (this._expandable) {
      if (bodyRow.nestedContent) {
        if (rowLevel === 'grandChild' || rowLevel === 'child') {
          rowCells.push(<div class="chi-data-table__cell -expandable"></div>);
        } else {
          rowCells.push(this._expansionButtonCell(bodyRow));
        }

        const accordionContent = this._rowAccordionContent(
          bodyRow.nestedContent,
          rowLevel === 'child' ? 'child' : 'parent'
        );

        if (accordionContent) {
          rowAccordionContent.push(accordionContent);
        }
      } else if (rowLevel === 'parent' || !bodyRow.autoExpandedAlignment) {
        rowCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`} role="cell" />);
      }
    }

    let cellIndex = 0;
    const hasActions = !!this.actions?.length;

    bodyRow.data.forEach((rowCell: any) => {
      const columnSettings = this.dataTableData.head[Object.keys(this.dataTableData.head)[cellIndex]];

      if (columnSettings) {
        const alignment = this._cellAlignment(rowCell.align ? rowCell.align : columnSettings.align || null),
          cellLabel = rowCell.label || columnSettings.label,
          cellKey = columnSettings.key || cellIndex === 0,
          cellBold = columnSettings.bold || cellIndex === 0,
          cellWidth =
            this.config.columnSizes && this._currentScreenBreakpoint
              ? this.config.columnSizes[this._currentScreenBreakpoint][cellIndex]
              : null;
        let cellData;

        if (!!rowCell.template && !!this.$slots[rowCell.template]) {
          if (typeof rowCell === 'object' && rowCell.payload) {
            // eslint-disable-next-line
            const slot = this.$slots[rowCell.template]!(rowCell.payload);

            if (slot) {
              const isSlotText = (element) => element.type.toString() == 'Symbol(v-txt)';
              let text: string | undefined;
              let slotTextElement: any;

              if (slot.length > 1) {
                slotTextElement = slot.find((element) => isSlotText(element));
                text = slotTextElement?.children as string;
              } else if (isSlotText(slot[0])) {
                text = slot[0].children as string;
              }

              if (text) {
                cellData = <DataTableTooltip textWrap={this.cellWrap} msg={text} class="-w--100" />;
              } else {
                cellData = slot;
              }
            }
          }
        } else if (typeof rowCell === 'object' && !!rowCell.value) {
          cellData = <DataTableTooltip textWrap={this.cellWrap} msg={rowCell.value} class="-w--100" />;
        } else if (typeof rowCell === 'string' || typeof rowCell === 'number') {
          cellData = <DataTableTooltip textWrap={this.cellWrap} msg={rowCell as string} class="-w--100" />;
        } else {
          cellData = null;
        }

        const rowChildExpansion =
          rowLevel === 'child' && cellIndex === 0 && bodyRow.nestedContent ? this._expansionButton(bodyRow) : null;

        rowCells.push(
          <div
            aria-label={cellLabel}
            class={`
              ${DATA_TABLE_CLASSES.CELL}
              ${bodyRow.autoExpandedAlignment ? UTILITY_CLASSES.FLEX.ALIGN.START : ''}
              ${alignment}
              ${cellWidth && cellWidth > 0 ? `-flex-basis--${cellWidth}` : ''}
              ${cellKey ? '-key' : ''}
              ${cellBold ? '-bold' : ''}`}
            data-label={cellLabel}
            role="cell"
            style={`
              ${cellWidth === 0 ? 'display: none' : ''}
              ${columnSettings.allowOverflow ? 'overflow: visible;' : ''}
              `}
          >
            {rowChildExpansion}
            {cellData}
          </div>
        );

        cellIndex++;
      }
    });

    if (hasActions) {
      const cellWidth =
        this.config.columnSizes && this._currentScreenBreakpoint
          ? this.config.columnSizes[this._currentScreenBreakpoint][cellIndex]
          : null;
      const flexBasis = cellWidth ? `-flex-basis--${cellWidth}` : '';

      rowCells.push(
        <div
          class={`
          ${DATA_TABLE_CLASSES.CELL}
          ${flexBasis}
          ${bodyRow.autoExpandedAlignment ? UTILITY_CLASSES.FLEX.ALIGN.START : ''}
          -justify-content-md--end
          -key`}
          style="overflow: visible; position: initial"
        >
          <DataTableActions actions={this.actions} rowData={bodyRow} dataTableNumber={this._dataTableNumber} />
        </div>
      );
    }

    const isExpanded = this.accordionsExpanded.includes(rowId);
    const state = this._getRowState(bodyRow);
    const hasState = bodyRow.state || (state && !isExpanded);

    row.push(
      <div
        id={rowId}
        data-rownumber={bodyRow.rowNumber}
        data-rowlevel={bodyRow.level}
        class={`
        ${rowClass}
        ${striped && (this.config.style.striped || this.config.style.portal) ? DATA_TABLE_CLASSES.STRIPED : ''}
        ${this.config.style.portal ? `-${this.config.style.size}` : ''}
        ${this.selectedRows.includes(bodyRow.rowId) || bodyRow.active ? ACTIVE_CLASS : ''}
        ${
          (this._expandable || hasState) && bodyRow.nestedContent
            ? `${isExpanded ? EXPANDED_CLASS : COLLAPSED_CLASS}`
            : ''
        }
        ${hasState ? state : ''}
        `}
        role="row"
      >
        {rowCells}
      </div>
    );

    if (bodyRow.nestedContent) {
      row.push(
        <Transition name="slide-fade">
          <div v-show={this.accordionsExpanded.includes(rowId)} id={`${rowId}-content`}>
            {rowAccordionContent}
          </div>
        </Transition>
      );
    }

    return row;
  }

  _body() {
    const getTableBodyRows = (): JSX.Element => {
      const emptyActionable = this.dataTableEmptyActionable();
      const isEmptyActionable = this.emptyActionableContent?.isActionable;

      if (!this.dataTableData.body.length) {
        return (
          <div class={[DATA_TABLE_CLASSES.EMPTY, isEmptyActionable ? DATA_TABLE_CLASSES.EMPTY_ACTIONABLE : '']}>
            {isEmptyActionable
              ? emptyActionable
              : [<chi-icon class="-mr--1" icon="search" color="dark"></chi-icon>, <span>{this.emptyMessage}</span>]}
          </div>
        );
      }

      return this.dataToRender().map((bodyRow: DataTableRow, index: number) => {
        const striped = index % 2 !== 0 && this.config.style.striped;

        return this.row(bodyRow, 'parent', striped);
      });
    };

    if (this.config.selectable === 'radio') {
      return (
        <div class={DATA_TABLE_CLASSES.BODY}>
          <fieldset>
            <legend class={SR_ONLY}>Select row</legend>
            {getTableBodyRows()}
          </fieldset>
        </div>
      );
    }

    return <div class={DATA_TABLE_CLASSES.BODY}>{getTableBodyRows()}</div>;
  }

  dataTableEmptyActionable() {
    return (
      <DataTableEmptyActionable
        onChiEmptyActionableLink={() => this._emitEmptyActionableLink()}
        content={this.emptyActionableContent}
      />
    );
  }

  setEmptyMessage() {
    this.emptyMessage = this.config.noResultsMessage || defaultConfig.noResultsMessage || DATA_TABLE_NO_RESULTS_MESSAGE;
  }

  _handleChiPageSizeChange(ev) {
    const data = this.sortedData && this.sortedData.length > 0 ? this.sortedData : this.serializedDataBody;

    this.resultsPerPage = ev === 'all' ? this.serializedDataBody.length : parseInt(ev as string);
    this.slicedData = this.sliceData(data);
    this._emitPaginationSize();
  }

  _handleChiPageChange(ev) {
    const data = this.sortedData && this.sortedData.length > 0 ? this.sortedData : this.serializedDataBody;
    const numberOfPages = this._calculateNumberOfPages();
    const page = ev as number;

    if (page >= 1 && page <= numberOfPages) {
      const pageChangeEventData: DataTablePageChange = {
        page: page,
      };

      if (this.mode === DataTableModes.CLIENT) {
        this.activePage = page;
        this.slicedData = this.sliceData(data);
        if (this.showSelectedOnly) {
          const data = this.sortedData ? this.sortedData : this.serializedDataBody;
          const dataToShow = data.filter((row: DataTableRow) => {
            return this.selectedRows.some((rowId) => rowId === row.rowId);
          });
          this.slicedData = this.sliceData(dataToShow);
        }
        pageChangeEventData.data = this.slicedData;
      }
      this._emitPaginationChange(pageChangeEventData);
    }
  }

  _pagination() {
    const pages = this._calculateNumberOfPages();
    const results =
      this.mode === DataTableModes.CLIENT
        ? this.showSelectedOnly
          ? this._getSelectedFirstLevelRowsCount()
          : this.dataTableData.body.length
        : this.config.pagination.results;

    if (pages === 1 && this.config.pagination.hideOnSinglePage) {
      return null;
    }

    return (
      <div class={DATA_TABLE_CLASSES.FOOTER}>
        <Pagination
          ref="pagination"
          compact={this.config.style.portal || this.config.pagination.compact}
          firstLast={this.config.pagination.firstLast}
          currentPage={this.activePage}
          pages={pages}
          results={results}
          pageSize={!this.config.style.portal}
          pageJumper={this.config.pagination.pageJumper}
          portal={this.config.style.portal}
          size={this.config.style.portal ? 'xs' : 'md'}
          onChiPageSizeChange={this._handleChiPageSizeChange}
          onChiPageChange={this._handleChiPageChange}
        />
      </div>
    );
  }

  sliceData(data: DataTableRow[]): DataTableRow[] {
    const resultsPerPage = this.resultsPerPage;

    if (data.length > resultsPerPage) {
      const arrayStartIndex = (this.activePage - 1) * resultsPerPage,
        arrayEndIndex = (this.activePage - 1) * resultsPerPage + resultsPerPage;

      return data.slice(arrayStartIndex, arrayEndIndex);
    }
    return data;
  }

  detectScreenBreakpoint() {
    const currentScreenSize = window.innerWidth;
    let screenBreakpoint: DataTableScreenBreakpoints = 'xl';

    switch (true) {
      case currentScreenSize > SCREEN_BREAKPOINTS.LG:
        screenBreakpoint = 'xl';
        break;
      case currentScreenSize > SCREEN_BREAKPOINTS.MD + 1 && currentScreenSize <= SCREEN_BREAKPOINTS.LG:
        screenBreakpoint = 'lg';
        break;
      case currentScreenSize > SCREEN_BREAKPOINTS.SM + 1 && currentScreenSize <= SCREEN_BREAKPOINTS.MD:
        screenBreakpoint = 'md';
        break;
      case currentScreenSize > SCREEN_BREAKPOINTS.XS + 1 && currentScreenSize <= SCREEN_BREAKPOINTS.SM:
        screenBreakpoint = 'sm';
        break;
      case currentScreenSize < SCREEN_BREAKPOINTS.XS:
        screenBreakpoint = 'xs';
        break;
    }

    if (this._currentScreenBreakpoint !== screenBreakpoint) {
      this._currentScreenBreakpoint = screenBreakpoint;
      this.$forceUpdate();
    }
  }

  _getRowState(row: DataTableRow): string | null {
    let state: string | null = null;

    const findStateInChildren = (rowData: DataTableRow) => {
      const children = rowData.nestedContent?.table?.data;

      if (rowData.state) {
        state = `-row--${rowData.state}`;
      }

      children?.forEach((childRow: DataTableRow) => {
        findStateInChildren(childRow);
      });
    };

    findStateInChildren(row);

    return state;
  }

  serializeData() {
    const serializeRow = (
      row: DataTableRow,
      rowNumber: number,
      nestingLevel = 0,
      parentRowN: string | null = null,
      parentRowId: string | null = null,
      rootLevelRowId: string | null = null
    ) => {
      const rowId = this._rowId(row.id || rowNumber);
      const rowN = parentRowN !== null ? `${parentRowN}-${rowNumber}` : String(rowNumber);
      const rootLevelId = nestingLevel === 0 ? rowId : rootLevelRowId;
      const rowObject = {
        ...row,
        rowNumber: rowN,
        rowId: rowId,
        level: nestingLevel,
        parentRowId: parentRowId,
        rootLevelRowId: rootLevelId,
      };
      let subrowNumber = 0;

      this.mapRows[rowId as string] = {
        parentRowId: parentRowId,
        rootLevelRowId: rootLevelId,
        level: nestingLevel,
      };

      if (
        typeof row.nestedContent === 'object' &&
        typeof row.nestedContent.table === 'object' &&
        row.nestedContent.table.data
      ) {
        row.nestedContent.table.data = row.nestedContent.table.data.map((row: DataTableRow) => {
          const serialized = serializeRow(row, subrowNumber, nestingLevel + 1, rowN, rowId, rootLevelId);

          subrowNumber++;
          return serialized;
        });
      }

      const state = this._getRowState(row);
      const hasState = state && !row.state;
      const shouldExpand = rowObject.expanded && !this.accordionsExpanded.includes(rowObject.rowId);

      if (shouldExpand || hasState) {
        this.accordionsExpanded.push(rowObject.rowId);
      }

      if (
        rowObject.selected &&
        rowObject.selected !== 'indeterminate' &&
        !this.selectedRows.includes(rowObject.rowId)
      ) {
        this.selectedRows.push(rowObject.rowId);
      }

      return rowObject;
    };
    let rowNumber = 0;

    this.serializedDataBody = [];
    this.selectedRows = [];
    this._expandable =
      this.config.reserveExpansionSlot ||
      !!this.dataTableData.body.find((row: { nestedContent: any }) => row.nestedContent);
    this.dataTableData.body.forEach((row) => {
      this.serializedDataBody.push(serializeRow(row, rowNumber));
      rowNumber++;
    });
    this.printDisabledColsIndexes = [];
    Object.keys(this.dataTableData.head).forEach((column: string, columnIndex: number) => {
      if (this.dataTableData.head[column].isPrintDisabled) {
        this.printDisabledColsIndexes.push(columnIndex);
      }
    });
  }

  dataToRender() {
    let dataToRender: Record<string, any>;

    if (this.slicedData && this.slicedData.length > 0) {
      dataToRender = this.slicedData;
    } else if (this.sortedData && this.sortedData.length > 0) {
      dataToRender = this.sortedData;
    } else {
      dataToRender = this.serializedDataBody;
    }

    return dataToRender;
  }

  _initDataFromConfig(): void {
    this.activePage =
      this.config.pagination.activePage || this.config.activePage || defaultConfig.pagination.activePage || 1;
    this.resultsPerPage = this.config.resultsPerPage || defaultConfig.resultsPerPage || 10;
    this.mode = this.config.mode || defaultConfig.mode;
    this.treeSelection = Object.prototype.hasOwnProperty.call(this.config, 'treeSelection')
      ? this.config.treeSelection
      : defaultConfig.treeSelection;
    this.cellWrap = Object.prototype.hasOwnProperty.call(this.config, 'cellWrap')
      ? this.config.cellWrap
      : defaultConfig.cellWrap;
    this.showExpandAll = Object.prototype.hasOwnProperty.call(this.config, 'showExpandAll')
      ? this.config.showExpandAll
      : defaultConfig.showExpandAll;
    this.showSelectAllDropdown = Object.prototype.hasOwnProperty.call(this.config, 'showSelectAllDropdown')
      ? this.config.showSelectAllDropdown
      : defaultConfig.showSelectAllDropdown;
    this.printMode = this.config?.print?.mode || defaultConfig.print?.mode;
    this.emptyMessage = this.config.noFiltersMessage || defaultConfig.noFiltersMessage || DATA_TABLE_NO_FILTERS_MESSAGE;
    this.emptyActionableContent = Object.prototype.hasOwnProperty.call(this.config, 'emptyActionable')
      ? this.config.emptyActionable
      : defaultConfig.emptyActionable;
    this.actions = this.config?.actions || defaultConfig.actions || [];

    if (this.actions?.length) {
      this.dataTableData.head.actions = { label: 'Actions', align: 'right' };
    }
  }

  _initProvides(): void {
    this.toolbarSearch.callback = this.setEmptyMessage.bind(this);
  }

  beforeMount() {
    this._initDataFromConfig();
    this._initProvides();
    this.detectScreenBreakpoint();
  }

  @Watch('dataTableData')
  dataChange() {
    this.serializeData();
    if (this.mode === DataTableModes.CLIENT) {
      if (this._sortConfig) {
        this.sortData(this._sortConfig.key, this._sortConfig.direction, this._sortConfig.sortBy);
      }
      this.slicedData = this.sliceData(
        this.sortedData && this.sortedData.length > 0 ? this.sortedData : this.serializedDataBody
      );
    } else {
      this.slicedData = this.serializedDataBody;
    }
  }

  @Watch('config')
  dataConfigChange() {
    this.activePage = this.config.pagination.activePage || 1;
  }

  created() {
    dataTableNumber += 1;
    this._dataTableNumber = dataTableNumber;
    this._dataTableId = `dt-${this._dataTableNumber}`;

    if (this.config.defaultSort && this.config.defaultSort.key && this.config.defaultSort.direction) {
      this._sortConfig = {
        key: this.config.defaultSort.key,
        direction: this.config.defaultSort.direction,
        sortBy: this.config.defaultSort.sortBy || undefined,
      };
    } else {
      this._sortConfig = undefined;
    }

    this.mapRows = {};
    this.serializeData();
    if (this._sortConfig && this.mode === DataTableModes.CLIENT) {
      this.sortData(this._sortConfig.key, this._sortConfig.direction, this._sortConfig.sortBy);
    }
  }

  async _resolveRowsToRender() {
    if (this._sortConfig && this.sortedData) {
      await this.sortData(this._sortConfig.key, this._sortConfig.direction, this._sortConfig.sortBy);

      return this.sortedData;
    }
    return this.serializedDataBody;
  }

  async _showAllRows() {
    this.showSelectedOnlyRowsData = [];
    this.slicedData = this.sliceData(await this._resolveRowsToRender());
  }

  async _showSelectedOnlyRows() {
    const data = await this._resolveRowsToRender();
    const rowsToShow: DataTableRow[] = [];
    const rowIds = this.mapRows;
    const selectedFirstLevelRowIds = Object.keys(this.mapRows)
      .filter((rowId: string) => this.selectedRows.includes(rowId))
      .map((key) => {
        if (rowIds[key].level === 0) {
          return key;
        } else {
          const rootLevelRowData = rowIds[key].rootLevelRowId;

          if (rootLevelRowData) {
            return rootLevelRowData;
          }
        }
      });

    await data.forEach((row: DataTableRow) => {
      if (selectedFirstLevelRowIds.includes(row.rowId)) {
        rowsToShow.push(row);
      }
    });

    this.showSelectedOnlyRowsData = rowsToShow;
    this.slicedData = this.sliceData(rowsToShow);
  }

  handleBulkActionsCancel() {
    this.selectedRows = [];
    this.showSelectedOnly = false;
    this._showAllRows();
    this._emitChiBulkActionsCancel();
  }

  handleBulkActionsShowSelectedOnly(isSelected: boolean) {
    const selected = isSelected as boolean;

    this.showSelectedOnly = selected;
    if (this.mode === DataTableModes.CLIENT) {
      if (this.showSelectedOnly) {
        this._showSelectedOnlyRows();
      } else {
        this._showAllRows();
      }
      this.activePage = 1;
    }
    this._emitShowSelectedOnly(selected);
  }

  mounted() {
    const dataTableComponent = this.$refs.dataTable as HTMLElement;

    if (dataTableComponent && this.config.columnResize) {
      new ColumnResize(this);
    }

    const data = this._sortConfig && this.sortedData ? this.sortedData : this.serializedDataBody;

    this.slicedData = this.sliceData(data);

    this._initializeSelectAllDropdown();
    window.addEventListener('resize', this.resizeHandler);
  }

  updated() {
    this._initializeSelectAllDropdown();
  }

  resizeHandler() {
    clearTimeout(this._resizeTimer);
    this._resizeTimer = setTimeout(this.detectScreenBreakpoint.bind(this), 0);
  }

  beforeUnmount() {
    window.removeEventListener('resize', this.resizeHandler, true);
    this._chiDropdownSelectAll?.dispose();
  }

  _headIndex(column: string) {
    if (Array.isArray(this.dataTableData.head) && isNaN(Number(column))) {
      return this.dataTableData.head.findIndex((col: DataTableColumn) => col.name === column);
    }

    return column;
  }

  _initializeSelectAllDropdown() {
    const selectAllDropdownComponent = this.$refs.selectAllDropdown;

    if (!this._chiDropdownSelectAll && selectAllDropdownComponent) {
      this._chiDropdownSelectAll = chi.dropdown(selectAllDropdownComponent);
    }
  }

  sortData(column: string, direction: string, sortBy: string | undefined) {
    const copiedData =
      this.showSelectedOnlyRowsData && this.showSelectedOnlyRowsData.length > 0
        ? [...this.showSelectedOnlyRowsData]
        : [...this.serializedDataBody];
    const columnData = this.dataTableData.head[this._headIndex(column)];
    const ascending: boolean = direction === 'ascending';

    if (columnData) {
      const columnIndex = !Array.isArray(this.dataTableData.head)
        ? Object.keys(this.dataTableData.head).indexOf(column)
        : this._headIndex(column);
      const locateData = (data: DataTableRow, sortBy: string | undefined) => {
        return sortBy && data.data[columnIndex].payload && data.data[columnIndex].payload[sortBy]
          ? data.data[columnIndex].payload[sortBy]
          : data.data[columnIndex];
      };

      const sortedData = arraySort(copiedData, function (a, b) {
        const aData = locateData(a, sortBy);
        const bData = locateData(b, sortBy);

        if (columnData.sortDataType === 'number') {
          const aValue = Number(aData);
          const bValue = Number(bData);

          return ascending ? aValue - bValue : bValue - aValue;
        }

        if (columnData.sortDataType === 'date') {
          const aValue = new Date(aData);
          const bValue = new Date(bData);
          const aTime = aValue.getTime() || 0;
          const bTime = bValue.getTime() || 0;

          return ascending ? aTime - bTime : bTime - aTime;
        }

        if (aData.payload && bData.payload && aData.template && bData.template) {
          return ascending
            ? aData.payload[aData.template].localeCompare(bData.payload[bData.template])
            : bData.payload[bData.template].localeCompare(aData.payload[aData.template]);
        }

        return ascending ? aData.localeCompare(bData) : bData.localeCompare(aData);
      });

      this.sortedData = sortedData;
      if (this.showSelectedOnly) {
        this.showSelectedOnlyRowsData = sortedData;
      }
    }
  }

  sortColumn(e: Event) {
    let element: HTMLElement | null = e.target as HTMLElement,
      columnHeadCell,
      columnHeadSortButton;

    if (
      (element && element.nodeName === 'CHI-BUTTON' && element.querySelector(`.${ICON_CLASSES.ICON_INFO}`)) ||
      element.classList.contains(ICON_CLASSES.ICON_INFO)
    ) {
      e.stopPropagation();
      return false;
    }

    if (element) {
      while (element && !element.classList.contains(DATA_TABLE_CLASSES.HEAD)) {
        if (element.classList.contains(DATA_TABLE_CLASSES.SORTING)) {
          columnHeadSortButton = element;
        }

        if (element.classList.contains(DATA_TABLE_CLASSES.CELL)) {
          columnHeadCell = element;
        }

        element = element.parentElement;
      }
    }

    if (columnHeadSortButton) {
      const columnName = columnHeadSortButton.dataset.column,
        currentSort = this._sortConfig && this._sortConfig.direction,
        columnSortBy = columnHeadSortButton.dataset.sortBy,
        sortIcon = columnHeadSortButton.querySelector(`[aria-label="Sort icon"] i.${ICON_CLASS}`),
        headSortColumnIcons = (this.$refs.dataTable as HTMLElement).querySelectorAll(
          `.${DATA_TABLE_CLASSES.HEAD} [aria-label="Sort icon"] i.${GENERIC_SIZE_CLASSES.XS}.${ICON_CLASS}`
        );

      headSortColumnIcons.forEach((sortIcon) => {
        if (sortIcon.className !== `${ICON_CLASS} ${GENERIC_SIZE_CLASSES.XS} ${DATA_TABLE_SORT_ICONS.SORT}`) {
          let element = sortIcon;

          sortIcon.className = `${ICON_CLASS} ${GENERIC_SIZE_CLASSES.XS} ${DATA_TABLE_SORT_ICONS.SORT}`;
          while (element && !element.classList.contains(DATA_TABLE_CLASSES.HEAD)) {
            if (element.classList.contains(DATA_TABLE_CLASSES.CELL) && element.classList.contains(ACTIVE_CLASS)) {
              element.classList.remove(ACTIVE_CLASS);
            }
            if (element.classList.contains(DATA_TABLE_CLASSES.SORTING)) {
              element.removeAttribute('data-sort');
            }

            if (element.parentElement) {
              element = element.parentElement;
            }
          }
        }
      });

      if (columnName && sortIcon) {
        sortIcon.className = `${ICON_CLASS} ${GENERIC_SIZE_CLASSES.XS} ${DATA_TABLE_SORT_ICONS.ARROW}`;
        if (currentSort === 'ascending' && this._sortConfig && this._sortConfig.key === columnName) {
          const sortingData: DataTableSorting = {
            column: columnName,
            direction: 'descending',
          };

          if (this.mode === DataTableModes.CLIENT) {
            this.sortData(columnName, 'descending', columnSortBy);
            sortingData.data = this.sortedData;
          }

          (sortIcon as HTMLElement).style.transform = 'rotate(180deg)';
          columnHeadSortButton.setAttribute('data-sort', 'descending');
          this._emitSortingData(sortingData);
          this.activePage = 1;
          if (this.sortedData) {
            this.slicedData = this.sliceData(this.sortedData);
          }
          columnHeadCell?.classList.add(ACTIVE_CLASS);
          this._sortConfig = {
            key: columnName,
            direction: 'descending',
            sortBy: columnSortBy || undefined,
          };
        } else if (
          this.config.unsorted &&
          currentSort === 'descending' &&
          this._sortConfig &&
          this._sortConfig.key === columnName
        ) {
          const sortingData: DataTableSorting = {
            column: undefined,
            direction: undefined,
          };

          if (this.mode === DataTableModes.CLIENT) {
            sortingData.data = undefined;
          }

          sortIcon.className = `${ICON_CLASS} ${GENERIC_SIZE_CLASSES.XS} ${DATA_TABLE_SORT_ICONS.SORT}`;
          columnHeadSortButton.removeAttribute('data-sort');
          (sortIcon as HTMLElement).removeAttribute('style');
          columnHeadSortButton.blur();
          if (this.mode === DataTableModes.CLIENT) {
            if (this.sortedData) {
              this.sortedData.length = 0;
            }
            this.slicedData = this.sliceData(this.serializedDataBody);
          }
          this._emitSortingData(sortingData);
          columnHeadCell?.classList.remove(ACTIVE_CLASS);
          this._sortConfig = undefined;
        } else {
          const sortingData: DataTableSorting = {
            column: columnName,
            direction: 'ascending',
          };

          if (this.mode === DataTableModes.CLIENT) {
            this.sortData(columnName, 'ascending', columnSortBy);
            sortingData.data = this.sortedData;
          }

          columnHeadSortButton.setAttribute('data-sort', 'ascending');
          this._emitSortingData(sortingData);
          this.activePage = 1;
          if (this.sortedData) {
            this.slicedData = this.sliceData(this.sortedData);
          }
          columnHeadCell?.classList.add(ACTIVE_CLASS);
          this._sortConfig = {
            key: columnName,
            direction: 'ascending',
            sortBy: columnSortBy || undefined,
          };
        }
      }
    }
  }

  _printHead() {
    return (
      <thead>
        <tr>
          {Object.keys(this.dataTableData.head).map((column: string) => {
            return !this.dataTableData.head[column].isPrintDisabled && <th>{this.dataTableData.head[column].label}</th>;
          })}
        </tr>
      </thead>
    );
  }

  _printFooter() {
    const resultsCount =
      this.mode === DataTableModes.CLIENT
        ? this.showSelectedOnly
          ? this._getSelectedFirstLevelRowsCount()
          : this.dataTableData.body.length
        : this.config.pagination.results;

    return <div class={`${DATA_TABLE_CLASSES.PRINT_FOOTER}`}>{resultsCount} results</div>;
  }

  _printBody() {
    if (this.dataTableData.body.length > 0) {
      const bodyRowsMappings = {
        selected: !Compare.isEmptyArray(this.showSelectedOnlyRowsData) ? this.showSelectedOnlyRowsData : null,
        sorted: !Compare.isEmptyArray(this.sortedData) ? this.sortedData : null,
        default: this.serializedDataBody ?? [],
      };
      const bodyRows = bodyRowsMappings['selected'] || bodyRowsMappings['sorted'] || bodyRowsMappings['default'];

      return (
        <tbody>
          {bodyRows?.map((bodyRow: DataTableRow) => {
            return this._printRow(bodyRow, 'parent');
          })}
        </tbody>
      );
    }

    return (
      <tbody>
        <tr>
          <td colspan={Object.keys(this.dataTableData.head).length} class={DATA_TABLE_CLASSES.EMPTY}>
            <chi-icon class="-mr--1" icon="search" color="dark"></chi-icon>
            {this.emptyMessage}
          </td>
        </tr>
      </tbody>
    );
  }

  _printRow(bodyRow: DataTableRow, rowLevel: DataTableRowLevels = 'parent') {
    const row: JSX.Element[] = [];
    const rowCells: JSX.Element[] = [];
    const sublevelContent: JSX.Element[] = [];

    if (
      this._expandable &&
      bodyRow.nestedContent &&
      !this.config.print?.isNestedContentPrintDisabled &&
      !bodyRow.print?.isNestedContentPrintDisabled
    ) {
      sublevelContent.push(
        this._printSublevelContent(bodyRow.nestedContent, rowLevel === 'child' ? 'child' : 'parent') as JSX.Element[] &
          JSX.Element
      );
    }
    bodyRow.data.forEach((rowCell: any, index: number) => {
      let cellData: any;
      if (!!rowCell.template && !!this.$slots[rowCell.template]) {
        if (typeof rowCell === 'object' && rowCell.payload) {
          const template: any | undefined = this.$slots[rowCell.template];

          if (!template) {
            throw Error(`No template with name ${rowCell.template} is provided.`);
          } else {
            cellData = template(rowCell.payload);
          }
        }
      } else if (typeof rowCell === 'object' && !!rowCell.value) {
        cellData = rowCell.value;
      } else if (typeof rowCell === 'string' || typeof rowCell === 'number') {
        cellData = rowCell;
      } else {
        cellData = null;
      }
      if (index === 0 && rowLevel === 'grandChild') {
        rowCells.push(<td class={`${UTILITY_CLASSES.PADDING.LEFT[6]}`}>{cellData}</td>);
      } else if (index === 0 && rowLevel === 'child') {
        rowCells.push(<td class={`${UTILITY_CLASSES.PADDING.LEFT[4]}`}>{cellData}</td>);
      } else {
        if (!this.printDisabledColsIndexes.includes(index)) {
          rowCells.push(<td>{cellData}</td>);
        }
      }
    });
    row.push((<tr>{rowCells}</tr>) as JSX.Element[] & JSX.Element);
    if (bodyRow.nestedContent) {
      row.push(sublevelContent as JSX.Element[] & JSX.Element);
    }
    return row;
  }

  _printSublevelContent(sublevelData: DataTableRowNestedContent, contentLevel: 'parent' | 'child') {
    if (sublevelData.template) {
      const template = (this.$slots[sublevelData.template] as any)(sublevelData.payload);

      return (
        <tr>
          <td colspan={Object.keys(this.dataTableData.head).length} class={`${UTILITY_CLASSES.PADDING.LEFT[4]}`}>
            {template}
          </td>
        </tr>
      );
    } else if (sublevelData.table && sublevelData.table.data) {
      return sublevelData.table.data.map((bodyRow: DataTableRow) => {
        return this._printRow(bodyRow, contentLevel === 'child' ? 'grandChild' : 'child');
      });
    }

    return (
      <tr>
        <td colspan={Object.keys(this.dataTableData.head).length} class={`${UTILITY_CLASSES.PADDING.LEFT[4]}`}>
          {sublevelData.value}
        </td>
      </tr>
    );
  }

  print(title: string) {
    printElement((this.$refs.dataTablePrint as HTMLElement).innerHTML, title);
  }

  render() {
    const classes = this._dataTableClasses(this.config.style, this.sortable),
      head = this._head(),
      toolbar = this._toolbar(),
      bulkActions = this._bulkActions(),
      body = this._body(),
      pagination = this._pagination(),
      printHead = this._printHead(),
      printBody = this._printBody(),
      printFooter = this._printFooter(),
      saveView = this._saveView(),
      screen =
        this.printMode === 'screenonly' || this.printMode === 'full' ? (
          <div class={`${UTILITY_CLASSES.DISPLAY.SCREEN_ONLY}`}>
            {toolbar}
            {saveView}
            {bulkActions}
            {head}
            {body}
            {pagination}
          </div>
        ) : null,
      print =
        this.printMode === 'printonly' || this.printMode === 'full' ? (
          <div ref="dataTablePrint" class={`${UTILITY_CLASSES.DISPLAY.PRINT_ONLY}`}>
            <table class={`${TABLE_CLASSES.TABLE}`}>
              {printHead}
              {printBody}
            </table>
            {printFooter}
          </div>
        ) : null;

    return (
      <div class={classes} role="table" ref="dataTable" data-table-number={this._dataTableNumber}>
        {screen}
        {print}
      </div>
    );
  }
}
