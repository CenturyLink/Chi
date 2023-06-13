import { Prop, Watch } from 'vue-property-decorator';
import {
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
} from '@/constants/types';
import {
  DATA_TABLE_NO_FILTERS_MESSAGE,
  DATA_TABLE_NO_RESULTS_MESSAGE,
  DATA_TABLE_SORT_ICONS,
  SCREEN_BREAKPOINTS,
} from '@/constants/constants';
import DataTableTooltip from './DataTableTooltip';
import Pagination from '../pagination/pagination';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';
import DataTableBulkActions from '../data-table-bulk-actions/DataTableBulkActions';
import arraySort from 'array-sort';
import { defaultConfig } from './default-config';
import { ICON_CLASSES } from '@/constants/icons';
import { alignmentUtilityClasses } from './constants/constants';
import { NormalizedScopedSlot } from 'vue/types/vnode';
import Checkbox from '../checkbox/Checkbox';
import { printElement } from '../../utils/utils';
import { ColumnResize } from './utils/Resize';
import Tooltip from '../tooltip/tooltip';
import { Component, Vue } from '@/build/vue-wrapper';
import DataTableEmpty from './DataTableEmpty';

declare const chi: any;

Vue.config.ignoredElements = ['chi-popover'];

let dataTableNumber = 0;
@Component({})
export default class DataTable extends Vue {
  @Prop() data!: DataTableData;
  @Prop() config!: DataTableConfig;

  accordionsExpanded: string[] = [];
  activePage =
    this.$props.config.pagination.activePage || this.$props.config.activePage || defaultConfig.pagination.activePage;
  resultsPerPage = this.$props.config.resultsPerPage || defaultConfig.resultsPerPage;
  selectedRows: string[] = [];
  slicedData: DataTableRow[] = [];
  mode = this.$props.config.mode || defaultConfig.mode;
  treeSelection = Object.prototype.hasOwnProperty.call(this.$props.config, 'treeSelection')
    ? this.$props.config.treeSelection
    : defaultConfig.treeSelection;
  cellWrap = Object.prototype.hasOwnProperty.call(this.$props.config, 'cellWrap')
    ? this.$props.config.cellWrap
    : defaultConfig.cellWrap;
  showExpandAll = Object.prototype.hasOwnProperty.call(this.$props.config, 'showExpandAll')
    ? this.$props.config.showExpandAll
    : defaultConfig.showExpandAll;
  showSelectAllDropdown = Object.prototype.hasOwnProperty.call(this.$props.config, 'showSelectAllDropdown')
    ? this.$props.config.showSelectAllDropdown
    : defaultConfig.showSelectAllDropdown;
  printMode = this.$props.config?.print?.mode || defaultConfig.print?.mode;
  emptyMessage = this.config.noFiltersMessage || defaultConfig.noFiltersMessage || DATA_TABLE_NO_FILTERS_MESSAGE;
  isDataEmpty = this.config.emptyConfig?.isDataEmpty || defaultConfig.emptyConfig?.isDataEmpty;
  _currentScreenBreakpoint?: DataTableScreenBreakpoints;
  _dataTableId?: string;
  _expandable!: boolean;
  _preventSortOnResize? = false;
  _resizeTimer?: number;
  _sortable = false;
  _sortedData?: DataTableRow[] = [];
  _sortConfig?: DataTableSortConfig;
  _serializedDataBody: DataTableRow[] = [];
  _showSelectedOnlyRowsData: DataTableRow[] = [];
  _toolbarComponent?: DataTableToolbar;
  _bulkActionsComponent?: DataTableBulkActions;
  _paginationListenersAdded = false;
  _showSelectedOnly = false;
  _printDisabledColsIndexes: number[] = [];
  _mapRows: {
    [rowId: string]: {
      level: number;
      parentRowId: string | null;
      rootLevelRowId: string | null;
    };
  } = {};
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
      const descriptionSlot = this.$scopedSlots[template];

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
              onClick={() => this.toggleAllRows(isExpanded ? 'collapse' : 'expand')}>
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

  _getHeadLabel(label: string) {
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
    const heads = Array.isArray(this.data.head) ? this.data.head : Object.keys(this.data.head);
    const infoPopovers: JSX.Element[] = [];

    heads.forEach((column: string | DataTableColumn, cellIndex: number) => {
      const columnIndex = String(Array.isArray(this.data.head) ? cellIndex : column);
      const columnName = Array.isArray(this.data.head) ? (column as DataTableColumn).name : column;
      const infoPopoverId = `info-popover-${this._dataTableNumber}-${columnName}`,
        buttonId = `info-popover-${this._dataTableNumber}-${columnName}-reference`,
        label = this.data.head[columnIndex].label || this.data.head[columnIndex],
        infoIcon = this.data.head[columnIndex].description ? (
          <chi-button
            id={buttonId}
            variant="flat"
            type="icon"
            alternative-text="Info icon"
            onChiClick={() => {
              this._toggleInfoPopover(infoPopoverId);
            }}>
            <i class={`${ICON_CLASS} -xs ${ICON_CLASSES.ICON_INFO}`} aria-hidden="true"></i>
          </chi-button>
        ) : null,
        infoPopover = this.data.head[columnIndex].description ? (
          <chi-popover
            id={infoPopoverId}
            reference=""
            position="top"
            title={(this.data.head[columnIndex].description as DataTableColumnDescription).title}
            arrow
            onChiPopoverHidden={() => {
              const popover = this._getInfoPopover(infoPopoverId);

              if (popover) {
                popover.reference = '';
              }
            }}>
            <div>
              {this._getDescription(this.data.head[columnIndex].description as string | DataTableColumnDescription)}
            </div>
          </chi-popover>
        ) : null,
        sortBy = this.data.head[columnIndex].sortBy,
        sortable = this.data.head[columnIndex].sortable,
        alignment = this._cellAlignment(this.data.head[columnIndex].align || 'left'),
        sortIcon = sortable ? (
          <chi-button variant="flat" type="icon" alternative-text="Sort icon">
            <i
              class={`
                ${ICON_CLASS} -xs ${
                this._sortConfig &&
                (this._sortConfig.key === this.data.head[columnIndex].sortBy || this._sortConfig.key === columnIndex)
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
            if (!this._preventSortOnResize && e.type !== '') {
              this.sortColumn(e);
            }
          }}
          style={`
              ${cellWidth === 0 ? 'display: none;' : ''}
              ${this.data.head[columnIndex].allowOverflow ? 'overflow: visible;' : ''}
              `}>
          {this._getHeadLabel(label as string)}
          {infoIcon}
          {sortIcon}
        </div>
      );
      const nonSortableColumnHead = (
        <div
          class={`${DATA_TABLE_CLASSES.CELL}
              ${alignment}
              ${cellWidth && cellWidth > 0 ? `-flex-basis--${cellWidth}` : ''}`}
          data-label={label}
          style={`
              ${cellWidth === 0 ? 'display: none;' : ''}
              ${this.data.head[columnIndex].allowOverflow ? 'overflow: visible;' : ''}
              `}>
          {this._getHeadLabel(label as string)}
          {infoIcon}
        </div>
      );

      tableHeadCells.push(sortable ? sortableColumnHead : nonSortableColumnHead);

      if (infoPopover) {
        infoPopovers.push(infoPopover as JSX.Element);
      }

      if (this.data.head[columnIndex].sortable && !this._sortable) {
        this._sortable = true;
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
    const slot = this.$scopedSlots['saveView'];

    return slot ? slot({}) : null;
  }

  _toolbar() {
    const slot = this.$scopedSlots['toolbar'];

    if (slot) {
      return <div>{slot({})}</div>;
    }
    return null;
  }

  _bulkActions() {
    const bulkActionSlot = this.$scopedSlots['bulkActions'] ? this.$scopedSlots['bulkActions']({}) : null;

    if (bulkActionSlot) {
      if (this.mode === DataTableModes.CLIENT) {
        return (
          <DataTableBulkActions uuid={this._dataTableNumber} selectedRows={this.selectedRows.length}>
            <template slot="start">{bulkActionSlot}</template>
          </DataTableBulkActions>
        );
      }

      return bulkActionSlot;
    }
    return null;
  }

  _getSelectedFirstLevelRowsCount() {
    const selectedRows = this._serializedDataBody.filter((row: DataTableRow) => {
      return this.selectedRows.includes(row.rowId);
    });

    return selectedRows.length;
  }

  _handleBulkActionsDeselection() {
    if (this._showSelectedOnly && this._bulkActionsComponent) {
      if (this.selectedRows.length > 0) {
        this._showSelectedOnlyRows();
      } else {
        this._showSelectedOnly = false;
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
        onClick={() => this.toggleRow(rowData)}>
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
    const selectedRowsData = this._serializedDataBody.filter((row: DataTableRow) => {
      return this.selectedRows.includes(row.rowId);
    });

    this.$emit(DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE, selectedRowsData);
  }

  _locateParentRow(rowData: DataTableRow) {
    const parentRowId = rowData.parentRowId;
    const rootLevelId = rowData.rootLevelRowId;

    if (rowData.level === 1) {
      return this._serializedDataBody.find((row: DataTableRow) => row.rowId === rootLevelId);
    } else if (rowData.level === 2) {
      const rootLevelRow = this._serializedDataBody.find((row: DataTableRow) => row.rowId === rootLevelId);

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
    const newRowData = {
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

    this.$emit(DATA_TABLE_EVENTS.SELECTED_ROW, newRowData);
    this._emitSelectedRows();
  }

  async deselectRow(rowData: DataTableRow) {
    const newRowData = {
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
    this.$emit(DATA_TABLE_EVENTS.DESELECTED_ROW, newRowData);
    this._emitSelectedRows();
  }

  _calculateNumberOfPages() {
    const serverSide = this.mode === DataTableModes.SERVER;
    const pages = this.$props.config.pagination.pages;

    if (serverSide && pages && typeof pages === 'number') {
      return pages;
    }

    const bodyLength = this._showSelectedOnly ? this._getSelectedFirstLevelRowsCount() : this.data.body.length;

    return Math.max(Math.ceil(bodyLength / this.resultsPerPage), 1);
  }

  _setData(selectAllPages: boolean | undefined) {
    const numberOfPages = this._calculateNumberOfPages();
    const allData = this._sortedData && this._sortedData.length > 0 ? this._sortedData : this._serializedDataBody;

    return selectAllPages || numberOfPages === 1 ? allData : this.slicedData;
  }

  async selectAllRows(action: 'select' | 'deselect', selectAllPages?: boolean) {
    const data = this._setData(selectAllPages);
    const dataToEmit = (data: DataTableRow[]) => {
      return data.filter((row: DataTableRow) => !row.selectionDisabled);
    };

    if (action === 'select') {
      // TODO: Change deprecated events when major version is released
      const event = selectAllPages ? DATA_TABLE_EVENTS.SELECTED_ALL_PAGES : DATA_TABLE_EVENTS.SELECTED_ALL;
      const eventData = selectAllPages ? dataToEmit(data) : dataToEmit(this.slicedData);

      data?.forEach((row: DataTableRow) => {
        if (!this.selectedRows.includes(row.rowId) && !row.selectionDisabled) {
          this.selectedRows.push(row.rowId);
          if (this.treeSelection) {
            this._toggleChildRowSelection(row, 'select');
          }
        }
      });
      this.$emit(event, eventData);
      this.$emit(DATA_TABLE_EVENTS.SELECTED_ALL_DEPRECATED, eventData);
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
      this.$emit(event, eventData);
      this.$emit(DATA_TABLE_EVENTS.DESELECTED_ALL_DEPRECATED, eventData);
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
          this._mapRows[selectedRowId]?.rootLevelRowId &&
          this.slicedData.find(
            (visibleRow: DataTableRow) => visibleRow.rowId === this._mapRows[selectedRowId].rootLevelRowId
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
          const grandChildren = Object.keys(this._mapRows).filter(
            (rowId: string) => this._mapRows[rowId].level === 2 && this._mapRows[rowId].rootLevelRowId === rowData.rowId
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
          data-position="bottom-start">
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

    if (selectAll || !!rowData) {
      const checkboxId =
        rowData && typeof rowData === 'object' && rowData.rowNumber
          ? `checkbox-select-${rowData?.rowId}`
          : selectAll
          ? `checkbox-${this._dataTableId}-select-all-rows`
          : '';
      const allVisibleRowsSelectionDisabled =
        this.slicedData.length > 0 && this.slicedData.every(row => row.selectionDisabled);

      return (
        <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.SELECTABLE}`}>
          <Checkbox
            disabled={rowData?.selectionDisabled || (selectAll && allVisibleRowsSelectionDisabled)}
            id={checkboxId}
            onChiChange={(ev: Event) => this._handleCheckboxChange(ev, selectAll, rowData)}
            selected={selected}
          />
          {selectAll && this.showSelectAllDropdown ? this._selectAllDropdown() : null}
        </div>
      );
    }
  }

  _radioButton(rowLevel: DataTableRowLevels, rowData: DataTableRow) {
    if (rowData) {
      const radioButtonId =
        rowData && typeof rowData === 'object' && rowData.rowNumber
          ? `radio-button-${this._rowId(rowData.rowNumber)}`
          : '';
      const radioButtonName = `radio-buttons-${this._dataTableId}`;
      const checkedState = this.selectedRows.includes(rowData.rowId);

      if (rowLevel !== 'parent') {
        return <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.SELECTABLE}`}></div>;
      } else {
        return (
          <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.SELECTABLE}`}>
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
    }
  }

  toggleRow(rowData: DataTableRow, action?: string) {
    const id = rowData.rowId.toString();

    if (this.accordionsExpanded.includes(id) || action === 'collapse') {
      const accordionIndex = this.accordionsExpanded.indexOf(id);

      if (accordionIndex !== -1) {
        this.accordionsExpanded.splice(accordionIndex, 1);

        if (!action) {
          this.$emit(DATA_TABLE_EVENTS.EXPANSION.COLLAPSED, rowData);
        }
      }
    } else {
      this.accordionsExpanded.push(id);

      if (!action) {
        this.$emit(DATA_TABLE_EVENTS.EXPANSION.EXPANDED, rowData);
      }
    }
  }

  toggleAllRows(action: 'expand' | 'collapse') {
    const toggleRows = (rows: DataTableRow[]) =>
      rows.forEach((row: DataTableRow) => {
        if (row.nestedContent) {
          const children = row.nestedContent.table?.data;

          this.toggleRow(row, action);
          if (children) {
            toggleRows(children);
          }
        }
      });

    this.$emit(
      action === 'expand' ? DATA_TABLE_EVENTS.EXPANSION.EXPAND_ALL : DATA_TABLE_EVENTS.EXPANSION.COLLAPSE_ALL,
      this.accordionsExpanded
    );
    toggleRows(this.slicedData);
  }

  _rowAccordionContent(accordionData: DataTableRowNestedContent, contentLevel: 'parent' | 'child') {
    if (accordionData.template) {
      const template: NormalizedScopedSlot | undefined = this.$scopedSlots[accordionData.template];

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

  row(bodyRow: DataTableRow, rowLevel: DataTableRowLevels = 'parent', striped = false) {
    const row = [],
      rowCells = [],
      rowAccordionContent = [],
      rowId = this._rowId(bodyRow.id || bodyRow.rowNumber),
      rowClass =
        rowLevel === 'grandChild'
          ? DATA_TABLE_CLASSES.ROW_GRAND_CHILD
          : rowLevel === 'child'
          ? DATA_TABLE_CLASSES.ROW_CHILD
          : DATA_TABLE_CLASSES.ROW;

    if (this.config.selectable) {
      rowCells.push(
        this.config.selectable === 'radio'
          ? this._radioButton(rowLevel, bodyRow)
          : this._selectRowCheckbox(false, bodyRow)
      );
    }

    if (this._expandable) {
      if (bodyRow.nestedContent) {
        if (rowLevel === 'grandChild' || rowLevel === 'child') {
          rowCells.push(<div class="chi-data-table__cell -expandable"></div>);
        } else {
          rowCells.push(this._expansionButtonCell(bodyRow));
        }
        rowAccordionContent.push(
          this._rowAccordionContent(bodyRow.nestedContent, rowLevel === 'child' ? 'child' : 'parent')
        );
      } else {
        rowCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`} role="cell" />);
      }
    }

    let cellIndex = 0;

    bodyRow.data.forEach((rowCell: any) => {
      const columnSettings = this.data.head[Object.keys(this.data.head)[cellIndex]];

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

        if (!!rowCell.template && !!this.$scopedSlots[rowCell.template]) {
          if (typeof rowCell === 'object' && rowCell.payload) {
            // eslint-disable-next-line
            const slot = this.$scopedSlots[rowCell.template]!(rowCell.payload);

            if (slot) {
              const text = slot[0].text;

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
          cellData = <DataTableTooltip textWrap={this.cellWrap} msg={rowCell} class="-w--100" />;
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
              ${alignment}
              ${cellWidth && cellWidth > 0 ? `-flex-basis--${cellWidth}` : ''}
              ${cellKey ? '-key' : ''}
              ${cellBold ? '-bold' : ''}`}
            data-label={cellLabel}
            role="cell"
            style={`
              ${cellWidth === 0 ? 'display: none' : ''}
              ${columnSettings.allowOverflow ? 'overflow: visible;' : ''}
              `}>
            {rowChildExpansion}
            {cellData}
          </div>
        );

        cellIndex++;
      }
    });

    row.push(
      <div
        id={rowId}
        data-rownumber={bodyRow.rowNumber}
        data-rowlevel={bodyRow.level}
        class={`
        ${rowClass}
        ${
          striped && (this.$props.config.style.striped || this.$props.config.style.portal)
            ? DATA_TABLE_CLASSES.STRIPED
            : ''
        }
        ${this.$props.config.style.portal ? `-${this.$props.config.style.size}` : ''}
        ${this.selectedRows.includes(bodyRow.rowId) || bodyRow.active ? ACTIVE_CLASS : ''}
        ${
          this._expandable && bodyRow.nestedContent
            ? `${this.accordionsExpanded.includes(rowId) ? EXPANDED_CLASS : COLLAPSED_CLASS}`
            : ''
        }
        `}
        role="row">
        {rowCells}
      </div>
    );

    if (bodyRow.nestedContent) {
      row.push(
        <transition name="slide-fade">
          <div v-show={this.accordionsExpanded.includes(rowId)} id={`${rowId}-content`}>
            {rowAccordionContent}
          </div>
        </transition>
      );
    }

    return row;
  }

  _body() {
    const getTableBodyRows = (): JSX.Element => {
      if (!this.data.body.length) {
        if (this.isDataEmpty) {
          return (
            <DataTableEmpty
              onChiChange={(ev: Event) => this.$emit(DATA_TABLE_EVENTS.EMPTY_LINK, ev)}
              config={this.$props.config.emptyConfig}
            />
          );
        } else {
          return (
            <div class={DATA_TABLE_CLASSES.EMPTY}>
              <chi-icon class="-mr--1" icon="search" color="dark"></chi-icon>
              {this.emptyMessage}
            </div>
          );
        }
      }

      return this.dataToRender().map((bodyRow: DataTableRow, index: number) => {
        const striped = index % 2 !== 0 && this.$props.config.style.striped;

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

  _addToolbarSearchEventListener() {
    if (!this._toolbarComponent) {
      this.emptyMessage =
        this.config.noResultsMessage || defaultConfig.noResultsMessage || DATA_TABLE_NO_RESULTS_MESSAGE;
      return;
    }

    (this._toolbarComponent as Vue).$on(DATA_TABLE_EVENTS.TOOLBAR.SEARCH, () => {
      this.emptyMessage =
        this.config.noResultsMessage || defaultConfig.noResultsMessage || DATA_TABLE_NO_RESULTS_MESSAGE;
    });
  }

  _addPaginationEventListener() {
    if (this.$refs.pagination) {
      if (!this._paginationListenersAdded) {
        (this.$refs.pagination as Vue).$on(PAGINATION_EVENTS.PAGE_SIZE, (ev: string) => {
          const data = this._sortedData && this._sortedData.length > 0 ? this._sortedData : this._serializedDataBody;

          this.resultsPerPage = ev === 'all' ? this._serializedDataBody.length : parseInt(ev);
          this.slicedData = this.sliceData(data);
          this.$emit(PAGINATION_EVENTS.PAGE_SIZE, this.slicedData);
        });

        (this.$refs.pagination as Vue).$on(PAGINATION_EVENTS.PAGE_CHANGE, (ev: number) => {
          const data = this._sortedData && this._sortedData.length > 0 ? this._sortedData : this._serializedDataBody;
          const numberOfPages = this._calculateNumberOfPages();

          if (ev >= 1 && ev <= numberOfPages) {
            const pageChangeEventData: DataTablePageChange = {
              page: ev,
            };

            if (this.mode === DataTableModes.CLIENT) {
              this.activePage = ev;
              this.slicedData = this.sliceData(data);
              if (this._showSelectedOnly) {
                const data = this._sortedData ? this._sortedData : this._serializedDataBody;
                const dataToShow = data.filter((row: DataTableRow) => {
                  return this.selectedRows.some(rowId => rowId === row.rowId);
                });
                this.slicedData = this.sliceData(dataToShow);
              }
              pageChangeEventData.data = this.slicedData;
            }
            this.$emit(PAGINATION_EVENTS.PAGE_CHANGE, pageChangeEventData);
          }
        });
        this._paginationListenersAdded = true;
      }
    } else {
      this._paginationListenersAdded = false;
    }
  }

  _pagination() {
    const pages = this._calculateNumberOfPages();
    const results =
      this.mode === DataTableModes.CLIENT
        ? this._showSelectedOnly
          ? this._getSelectedFirstLevelRowsCount()
          : this.data.body.length
        : this.config.pagination.results;

    if (
      (pages === 1 && this.config.pagination.hideOnSinglePage) ||
      (this.$props.data.body.length === 0 && this.mode === DataTableModes.CLIENT)
    ) {
      return null;
    } else {
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
          />
        </div>
      );
    }
  }

  sliceData(data: DataTableRow[]): DataTableRow[] {
    if (data.length > this.resultsPerPage) {
      const arrayStartIndex = (this.activePage - 1) * this.resultsPerPage,
        arrayEndIndex = (this.activePage - 1) * this.resultsPerPage + this.resultsPerPage;

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

      this._mapRows[rowId as string] = {
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

      if (rowObject.expanded && !this.accordionsExpanded.includes(rowObject.rowId)) {
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

    this._serializedDataBody = [];
    this.selectedRows = [];
    this._expandable =
      this.$props.config.reserveExpansionSlot ||
      !!this.data.body.find((row: { nestedContent: any }) => row.nestedContent);
    this.data.body.forEach(row => {
      this._serializedDataBody.push(serializeRow(row, rowNumber));
      rowNumber++;
    });
    this._printDisabledColsIndexes = [];
    Object.keys(this.data.head).forEach((column: string, columnIndex: number) => {
      if (this.data.head[column].isPrintDisabled) {
        this._printDisabledColsIndexes.push(columnIndex);
      }
    });
  }

  dataToRender() {
    let dataToRender: Record<string, any>;

    if (this.slicedData && this.slicedData.length > 0) {
      dataToRender = this.slicedData;
    } else if (this._sortedData && this._sortedData.length > 0) {
      dataToRender = this._sortedData;
    } else {
      dataToRender = this._serializedDataBody;
    }

    return dataToRender;
  }

  beforeMount() {
    this.detectScreenBreakpoint();
  }

  @Watch('data')
  dataChange() {
    this.serializeData();
    if (this.mode === DataTableModes.CLIENT) {
      if (this._sortConfig) {
        this.sortData(this._sortConfig.key, this._sortConfig.direction, this._sortConfig.sortBy);
      }
      this.slicedData = this.sliceData(
        this._sortedData && this._sortedData.length > 0 ? this._sortedData : this._serializedDataBody
      );
    } else {
      this.slicedData = this._serializedDataBody;
    }
  }

  @Watch('config')
  dataConfigChange() {
    this.activePage = this.$props.config.pagination.activePage || 1;
  }

  created() {
    dataTableNumber += 1;
    this._dataTableNumber = dataTableNumber;
    this._dataTableId = `dt-${this._dataTableNumber}`;

    if (
      this.$props.config.defaultSort &&
      this.$props.config.defaultSort.key &&
      this.$props.config.defaultSort.direction
    ) {
      this._sortConfig = {
        key: this.$props.config.defaultSort.key,
        direction: this.$props.config.defaultSort.direction,
        sortBy: this.$props.config.defaultSort.sortBy || undefined,
      };
    } else {
      this._sortConfig = undefined;
    }

    this._mapRows = {};
    this.serializeData();
    if (this._sortConfig && this.mode === DataTableModes.CLIENT) {
      this.sortData(this._sortConfig.key, this._sortConfig.direction, this._sortConfig.sortBy);
    }
    this.slicedData = this.sliceData(this._sortedData || this._serializedDataBody);
  }

  async _resolveRowsToRender() {
    if (this._sortConfig && this._sortedData) {
      await this.sortData(this._sortConfig.key, this._sortConfig.direction, this._sortConfig.sortBy);

      return this._sortedData;
    }
    return this._serializedDataBody;
  }

  async _showAllRows() {
    this._showSelectedOnlyRowsData = [];
    this.slicedData = this.sliceData(await this._resolveRowsToRender());
  }

  async _showSelectedOnlyRows() {
    const data = await this._resolveRowsToRender();
    const rowsToShow: DataTableRow[] = [];
    const rowIds = this._mapRows;
    const selectedFirstLevelRowIds = Object.keys(this._mapRows)
      .filter((rowId: string) => this.selectedRows.includes(rowId))
      .map(key => {
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

    this._showSelectedOnlyRowsData = rowsToShow;
    this.slicedData = this.sliceData(rowsToShow);
  }

  mounted() {
    const dataTableComponent = this.$refs.dataTable as HTMLElement;

    if (dataTableComponent && this.config.columnResize) {
      new ColumnResize(this);
    }

    if (this._bulkActionsComponent) {
      (this._bulkActionsComponent as Vue).$on(
        DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY,
        (isSelected: boolean) => {
          this._showSelectedOnly = isSelected;

          if (this.mode === DataTableModes.CLIENT) {
            if (this._showSelectedOnly) {
              this._showSelectedOnlyRows();
            } else {
              this._showAllRows();
            }
            this.activePage = 1;
          }
          this.$emit(DATA_TABLE_EVENTS.BULK_ACTIONS.SHOW_SELECTED_ONLY, isSelected);
        }
      );
      // TODO: Change deprecated events when major version is released
      (this._bulkActionsComponent as Vue).$on(DATA_TABLE_EVENTS.SELECTED_ALL_DEPRECATED, () => {
        this.selectAllRows('select');
      });
      (this._bulkActionsComponent as Vue).$on(GENERIC_EVENTS.CANCEL, () => {
        this.selectedRows = [];
        this._showSelectedOnly = false;
        this._showAllRows();
        this.$emit(GENERIC_EVENTS.CANCEL);
      });
    }

    this._initializeSelectAllDropdown();
    this._addPaginationEventListener();
    this._addToolbarSearchEventListener();
    window.addEventListener('resize', this.resizeHandler);
  }

  updated() {
    this._initializeSelectAllDropdown();
    this._addPaginationEventListener();
  }

  resizeHandler() {
    clearTimeout(this._resizeTimer);
    this._resizeTimer = setTimeout(this.detectScreenBreakpoint.bind(this), 0);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler, true);
    this._chiDropdownSelectAll?.dispose();
  }

  _headIndex(column: string) {
    if (Array.isArray(this.data.head) && isNaN(Number(column))) {
      return this.data.head.findIndex((col: DataTableColumn) => col.name === column);
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
      this._showSelectedOnlyRowsData && this._showSelectedOnlyRowsData.length > 0
        ? [...this._showSelectedOnlyRowsData]
        : [...this._serializedDataBody];
    const columnData = this.data.head[this._headIndex(column)];
    const ascending: boolean = direction === 'ascending';

    if (columnData) {
      const columnIndex = !Array.isArray(this.data.head)
        ? Object.keys(this.data.head).indexOf(column)
        : this._headIndex(column);
      const locateData = (data: DataTableRow, sortBy: string | undefined) => {
        return sortBy && data.data[columnIndex].payload && data.data[columnIndex].payload[sortBy]
          ? data.data[columnIndex].payload[sortBy]
          : data.data[columnIndex];
      };

      const sortedData = arraySort(copiedData, function(a, b) {
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

      this._sortedData = sortedData;
      if (this._showSelectedOnly) {
        this._showSelectedOnlyRowsData = sortedData;
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

      headSortColumnIcons.forEach(sortIcon => {
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
            sortingData.data = this._sortedData;
          }

          (sortIcon as HTMLElement).style.transform = 'rotate(180deg)';
          columnHeadSortButton.setAttribute('data-sort', 'descending');
          this.$emit(DATA_TABLE_EVENTS.DATA_SORTING, sortingData);
          this.activePage = 1;
          if (this._sortedData) {
            this.slicedData = this.sliceData(this._sortedData);
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
            if (this._sortedData) {
              this._sortedData.length = 0;
            }
            this.slicedData = this.sliceData(this._serializedDataBody);
          }
          this.$emit(DATA_TABLE_EVENTS.DATA_SORTING, sortingData);
          columnHeadCell?.classList.remove(ACTIVE_CLASS);
          this._sortConfig = undefined;
        } else {
          const sortingData: DataTableSorting = {
            column: columnName,
            direction: 'ascending',
          };

          if (this.mode === DataTableModes.CLIENT) {
            this.sortData(columnName, 'ascending', columnSortBy);
            sortingData.data = this._sortedData;
          }

          columnHeadSortButton.setAttribute('data-sort', 'ascending');
          this.$emit(DATA_TABLE_EVENTS.DATA_SORTING, sortingData);
          this.activePage = 1;
          if (this._sortedData) {
            this.slicedData = this.sliceData(this._sortedData);
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
          {Object.keys(this.data.head).map((column: string) => {
            return !this.data.head[column].isPrintDisabled && <th>{this.data.head[column].label}</th>;
          })}
        </tr>
      </thead>
    );
  }

  _printFooter() {
    const resultsCount =
      this.mode === DataTableModes.CLIENT
        ? this._showSelectedOnly
          ? this._getSelectedFirstLevelRowsCount()
          : this.data.body.length
        : this.config.pagination.results;

    return <div class={`${DATA_TABLE_CLASSES.PRINT_FOOTER}`}>{resultsCount} results</div>;
  }

  _printBody() {
    if (this.data.body.length > 0) {
      const bodyRows =
        this._showSelectedOnlyRowsData?.length > 0
          ? this._showSelectedOnlyRowsData
          : this._sortedData && this._sortedData.length > 0
          ? this._sortedData
          : this._serializedDataBody;

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
          <td colspan={Object.keys(this.data.head).length} class={DATA_TABLE_CLASSES.EMPTY}>
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
    const sublevelContent = [];

    if (
      this._expandable &&
      bodyRow.nestedContent &&
      !this.config.print?.isNestedContentPrintDisabled &&
      !bodyRow.print?.isNestedContentPrintDisabled
    ) {
      sublevelContent.push(
        this._printSublevelContent(bodyRow.nestedContent, rowLevel === 'child' ? 'child' : 'parent')
      );
    }
    bodyRow.data.forEach((rowCell: any, index: number) => {
      let cellData: any;
      if (!!rowCell.template && !!this.$scopedSlots[rowCell.template]) {
        if (typeof rowCell === 'object' && rowCell.payload) {
          const template: NormalizedScopedSlot | undefined = this.$scopedSlots[rowCell.template];

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
        if (!this._printDisabledColsIndexes.includes(index)) {
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
      const template = (this.$scopedSlots[sublevelData.template] as NormalizedScopedSlot)(sublevelData.payload);

      return (
        <tr>
          <td colspan={Object.keys(this.data.head).length} class={`${UTILITY_CLASSES.PADDING.LEFT[4]}`}>
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
        <td colspan={Object.keys(this.data.head).length} class={`${UTILITY_CLASSES.PADDING.LEFT[4]}`}>
          {sublevelData.value}
        </td>
      </tr>
    );
  }

  print(title: string) {
    printElement((this.$refs.dataTablePrint as HTMLElement).innerHTML, title);
  }

  render() {
    const classes = this._dataTableClasses(this.config.style, this._sortable),
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
