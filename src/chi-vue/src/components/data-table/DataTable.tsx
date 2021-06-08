import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {
  ACTIVE_CLASS,
  BUTTON_CLASSES,
  CHECKBOX_CLASSES,
  DATA_TABLE_CLASSES,
  EXPANDED_CLASS,
  ICON_CLASS,
  SR_ONLY,
  UTILITY_CLASSES,
} from '@/constants/classes';
import './data-table.scss';
import { DATA_TABLE_EVENTS, PAGINATION_EVENTS } from '@/constants/events';
import {
  DataTableCellAlignment,
  DataTableConfig,
  DataTableData,
  DataTableExpansionIcons,
  DataTableExpansionIconStyles,
  DataTableRow,
  DataTableRowNestedContent,
  DataTableScreenBreakpoints,
  DataTableSortConfig,
  DataTableStyleConfig,
} from '@/constants/types';
import { DATA_TABLE_SORT_ICONS, SCREEN_BREAKPOINTS } from '@/constants/constants';
import Tooltip from '../tooltip/tooltip';
import Pagination from '../pagination/pagination';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';

let dataTableNumber = 0;
@Component({})
export default class DataTable extends Vue {
  @Prop() data!: DataTableData;
  @Prop() config!: DataTableConfig;

  accordionsExpanded: string[] = [];
  currentPage = this.config.activePage || 1;
  resultsPerPage = this.config.resultsPerPage || 20;
  selectedRows: string[] = [];
  slicedData: DataTableRow[] = [];
  _currentScreenBreakpoint?: DataTableScreenBreakpoints;
  _dataTableId?: string;
  _expandable!: boolean;
  _preventSortOnResize? = false;
  _resizeTimer?: number;
  _sortable = false;
  _sortedData?: DataTableRow[] = [];
  _sortConfig?: DataTableSortConfig;
  _serializedDataBody: DataTableRow[] = [];
  _toolbarComponent?: DataTableToolbar;

  _head() {
    const tableHeadCells = [
      this._expandable ? (
        <div
          class={`
        ${DATA_TABLE_CLASSES.CELL}
        ${DATA_TABLE_CLASSES.EXPANDABLE}`}
        />
      ) : null,
      this.config.selectable ? this._selectRowCheckbox(true) : null,
    ];

    let cellIndex = 0;

    Object.keys(this.data.head).forEach((column: string) => {
      const label = this.data.head[column].label || this.data.head[column],
        sortBy = this.data.head[column].sortBy,
        sortable = this.data.head[column].sortable,
        alignment = this._cellAlignment(this.data.head[column].align),
        sortIcon = sortable ? (
          <i
            class={`${ICON_CLASS} -xs ${
              this._sortConfig &&
              (this._sortConfig.key === this.data.head[column].sortBy || this._sortConfig.key === column)
                ? DATA_TABLE_SORT_ICONS.ARROW
                : DATA_TABLE_SORT_ICONS.SORT
            }`}
            style={`${
              this._sortConfig && this._sortConfig.direction === 'descending' ? 'transform: rotate(180deg)' : ''
            }`}
          />
        ) : (
          ''
        ),
        cellWidth =
          this.config.columnSizes && this._currentScreenBreakpoint
            ? this.config.columnSizes[this._currentScreenBreakpoint][cellIndex]
            : null;
      const sortableColumnHead = (
        <button
          aria-label={`Sort Column ${label}`}
          class={`${DATA_TABLE_CLASSES.CELL}
            ${alignment}
            ${sortable ? DATA_TABLE_CLASSES.SORTING : ''}
            ${cellWidth && cellWidth > 0 ? `-flex-basis--${cellWidth}` : ''}`}
          data-column={column}
          data-sort-by={sortBy}
          data-sort={this._sortConfig && this._sortConfig.direction ? this._sortConfig.direction : ''}
          data-label={label}
          onclick={(e: Event) => {
            if (!this._preventSortOnResize) {
              this.sortColumn(e);
            }
          }}
          style={`
            ${cellWidth === 0 ? 'display: none;' : ''}
            ${this.data.head[column].allowOverflow ? 'overflow: visible;' : ''}
            `}>
          <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{label}</div>
          {sortIcon}
        </button>
      );
      const nonSortableColumnHead = (
        <div
          aria-label={label}
          class={`${DATA_TABLE_CLASSES.CELL}
            ${alignment}
            ${cellWidth && cellWidth > 0 ? `-flex-basis--${cellWidth}` : ''}`}
          data-label={label}
          style={`
            ${cellWidth === 0 ? 'display: none;' : ''}
            ${this.data.head[column].allowOverflow ? 'overflow: visible;' : ''}
            `}>
          <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{label}</div>
        </div>
      );

      tableHeadCells.push(sortable ? sortableColumnHead : nonSortableColumnHead);

      if (this.data.head[column].sortable && !this._sortable) {
        this._sortable = true;
      }

      cellIndex++;
    });

    return (
      <div class={DATA_TABLE_CLASSES.HEAD} role="row">
        <div class={DATA_TABLE_CLASSES.ROW}>{tableHeadCells}</div>
      </div>
    );
  }

  _toolbar() {
    if (this.$scopedSlots['toolbar']) {
      return <div class="">{this.$scopedSlots['toolbar']({})}</div>;
    }
    return null;
  }

  _generateColumnResize(elem: HTMLElement) {
    const columnHeaders = elem.querySelectorAll(`.${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL}`);
    let thElm: HTMLElement | null;
    let startOffset: number;

    columnHeaders.forEach(th => {
      const grip = document.createElement('div');

      th.classList.add(UTILITY_CLASSES.POSITION.RELATIVE);
      grip.innerHTML = '&nbsp;';
      grip.style.top = '0';
      grip.style.right = '0';
      grip.style.bottom = '0';
      grip.style.width = '1rem';
      grip.classList.add(UTILITY_CLASSES.POSITION.ABSOLUTE);
      grip.style.cursor = 'col-resize';
      grip.classList.add('resize-handle');
      grip.addEventListener('mousedown', e => {
        this._preventSortOnResize = true;
        thElm = th as HTMLElement;
        startOffset = (th as HTMLElement).offsetWidth - e.pageX;
      });
      th.appendChild(grip);
    });
    (this.$refs.dataTable as HTMLElement).addEventListener('mousemove', e => {
      let columnCellsToResize: HTMLElement[] = [];

      if (thElm) {
        thElm.setAttribute('style', `width: ${startOffset + e.pageX + 'px'} !important; flex: none !important;`);
        for (let i = 0; i < columnHeaders.length; ++i) {
          if (columnHeaders[i] === thElm) {
            columnCellsToResize = Array.from(
              elem.querySelectorAll(
                `.${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW} .${DATA_TABLE_CLASSES.CELL}:nth-child(${i + 1})`
              )
            );
          }
        }

        columnCellsToResize.forEach(column => {
          if (thElm) {
            column.setAttribute('style', `width: ${thElm.style.width} !important; flex: none !important`);
          }
        });
      }
    });
    (this.$refs.dataTable as HTMLElement).addEventListener('mouseup', () => {
      setTimeout(() => {
        this._preventSortOnResize = false;
      }, 0);
      thElm = null;
    });
  }

  _cellAlignment(align: DataTableCellAlignment): string {
    const alignmentUtilityClasses: {
      left: string;
      center: string;
      right: string;
    } = {
      left: UTILITY_CLASSES.JUSTIFY.MD_START,
      center: UTILITY_CLASSES.JUSTIFY.MD_CENTER,
      right: UTILITY_CLASSES.JUSTIFY.MD_END,
    };

    if (align) {
      return alignmentUtilityClasses[align];
    }

    return '';
  }

  _dataTableClasses(style: DataTableStyleConfig, sortable: boolean) {
    return [
      DATA_TABLE_CLASSES.DATA_TABLE,
      style.portal ? DATA_TABLE_CLASSES.PORTAL : '',
      style.bordered ? DATA_TABLE_CLASSES.BORDERED : '',
      style.noBorder ? DATA_TABLE_CLASSES.NO_BORDER : '',
      style.hover ? DATA_TABLE_CLASSES.HOVER : '',
      style.striped ? DATA_TABLE_CLASSES.STRIPED : '',
      style.size ? `-${style.size}` : '',
      sortable ? DATA_TABLE_CLASSES.SORTING : '',
    ].join(' ');
  }

  _expansionButton(rowId: string) {
    const expansionIcons: DataTableExpansionIcons = {
      portal: {
        expanded: 'minus',
        collapsed: 'plus',
      },
      base: {
        expanded: 'chevron-up',
        collapsed: 'chevron-right',
      },
    };
    const iconStyle: DataTableExpansionIconStyles = this.config.style.portal ? 'portal' : 'base';

    return (
      <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`} role="cell">
        <button
          class={`
        ${BUTTON_CLASSES.BUTTON}
        ${BUTTON_CLASSES.ICON_BUTTON}
        ${BUTTON_CLASSES.FLAT}
        -sm
        `}
          aria-label="Expand row"
          data-target={`#${rowId}-content`}
          onClick={() => this.toggleRow(rowId.toString())}>
          <div class={BUTTON_CLASSES.CONTENT}>
            <i
              class={`
            ${ICON_CLASS}
            icon-${
              this.accordionsExpanded.includes(rowId)
                ? expansionIcons[iconStyle].expanded
                : expansionIcons[iconStyle].collapsed
            }
            `}
            />
          </div>
          <span class={SR_ONLY}>Expand Row</span>
        </button>
      </div>
    );
  }

  _emitSelectedRows() {
    const selectedRowsData = this._serializedDataBody.filter((row: DataTableRow) => {
      return this.selectedRows.includes(row.id);
    });

    this.$emit(DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE, selectedRowsData);
  }

  selectRow(rowData: DataTableRow) {
    const rowId = this.selectedRows.find(rowId => rowId === rowData.id);

    if (!rowId) {
      this.selectedRows.push(rowData.id);
    } else {
      const indexOfRowId = this.selectedRows.indexOf(rowData.id);

      this.selectedRows.splice(indexOfRowId, 1);
    }

    this._emitSelectedRows();
  }

  _calculateNumberOfPages() {
    return Math.max(Math.ceil(this.data.body.length / this.resultsPerPage), 1);
  }

  selectAllRows(action: 'select' | 'deselect') {
    const numberOfPages = this._calculateNumberOfPages();
    const data =
      numberOfPages === 1
        ? this._sortedData && this._sortedData.length > 0
          ? this._sortedData
          : this._serializedDataBody
        : this.slicedData;

    if (action === 'select') {
      data.forEach((row: DataTableRow) => {
        if (!this.selectedRows.includes(row.id)) {
          this.selectedRows.push(row.id);
        }
      });
    } else {
      data.forEach((row: DataTableRow) => {
        const rowIndex = this.selectedRows.indexOf(row.id);

        this.selectedRows.splice(rowIndex, 1);
      });
    }

    this._emitSelectedRows();
  }

  _selectRowCheckbox(selectAll: boolean, rowData: DataTableRow | null = null) {
    const checkedState = rowData && rowData.rowNumber && this.selectedRows.includes(rowData.id);

    if (selectAll || !!rowData) {
      const checkboxId =
        rowData && typeof rowData === 'object' && rowData.rowNumber
          ? `checkbox-select-${this._rowId(rowData.rowNumber)}`
          : selectAll
          ? `checkbox-select-all-rows`
          : '';

      return (
        <div
          class={`
        ${DATA_TABLE_CLASSES.CELL}
        ${DATA_TABLE_CLASSES.SELECTABLE}
      `}>
          <div class={CHECKBOX_CLASSES.checkbox}>
            <input
              type="checkbox"
              class={CHECKBOX_CLASSES.INPUT}
              id={checkboxId}
              onChange={(ev: Event) => {
                if (selectAll) {
                  this.selectAllRows((ev.target as HTMLInputElement).checked ? 'select' : 'deselect');
                } else {
                  if (rowData) {
                    this.selectRow(rowData);
                  }
                }
              }}
              checked={checkedState}
            />
            <label class={CHECKBOX_CLASSES.LABEL} for={checkboxId}>
              <div class={SR_ONLY}>Select row {checkboxId}</div>
            </label>
          </div>
        </div>
      );
    }
  }

  toggleRow(id: string) {
    const rowData = this._serializedDataBody.find((row: DataTableRow) => row.id === id);

    if (this.accordionsExpanded.includes(id)) {
      this.accordionsExpanded.splice(this.accordionsExpanded.indexOf(id), 1);
      this.$emit(DATA_TABLE_EVENTS.EXPANSION.COLLAPSED, rowData);
    } else {
      this.accordionsExpanded.push(id);
      this.$emit(DATA_TABLE_EVENTS.EXPANSION.EXPANDED, rowData);
    }
  }

  _rowAccordionContent(accordionData: DataTableRowNestedContent) {
    if (accordionData.template) {
      // eslint-disable-next-line
      const template = this.$scopedSlots[accordionData.template]!(accordionData.payload);

      return (
        <div class={`${DATA_TABLE_CLASSES.ROW_CHILD} -p--2`} role="row">
          {template}
        </div>
      );
    } else if (accordionData.table) {
      if (accordionData.table.data) {
        return accordionData.table.data.map((bodyRow: DataTableRow) => {
          return this.row(bodyRow, true);
        });
      }
    } else {
      return (
        <div class={`${DATA_TABLE_CLASSES.ROW_CHILD} -p--2`} role="row">
          {accordionData.value}
        </div>
      );
    }
  }

  _rowId(id: number | string) {
    return `row-${this._dataTableId}-${id}`;
  }

  row(bodyRow: DataTableRow, rowChild = false, striped = false) {
    const row = [],
      rowCells = [],
      rowAccordionContent = [],
      rowId = this._rowId(bodyRow.rowNumber),
      rowClass = rowChild ? DATA_TABLE_CLASSES.ROW_CHILD : DATA_TABLE_CLASSES.ROW;

    if (this._expandable) {
      if (bodyRow.nestedContent) {
        rowCells.push(this._expansionButton(rowId));
        rowAccordionContent.push(this._rowAccordionContent(bodyRow.nestedContent));
      } else {
        rowCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`} role="cell" />);
      }
    }

    if (this.config.selectable) {
      rowCells.push(this._selectRowCheckbox(false, bodyRow));
    }

    let cellIndex = 0;

    // eslint-disable-next-line
    bodyRow.data.forEach((rowCell: any) => {
      const columnSettings = this.data.head[Object.keys(this.data.head)[cellIndex]],
        alignment = this._cellAlignment(rowCell.align ? rowCell.align : columnSettings.align || null),
        cellLabel = rowCell.label || columnSettings.label,
        cellWidth =
          this.config.columnSizes && this._currentScreenBreakpoint
            ? this.config.columnSizes[this._currentScreenBreakpoint][cellIndex]
            : null;
      let cellData;

      if (!!rowCell.template && !!this.$scopedSlots[rowCell.template]) {
        if (typeof rowCell === 'object' && rowCell.payload) {
          // eslint-disable-next-line
          cellData = this.$scopedSlots[rowCell.template]!(rowCell.payload);
        }
      } else if (typeof rowCell === 'object' && !!rowCell.value) {
        cellData = (
          <Tooltip message={rowCell} class="-w--100">
            <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{rowCell.value}</div>
          </Tooltip>
        );
      } else if (typeof rowCell === 'string' || typeof rowCell === 'number') {
        cellData = (
          <Tooltip message={rowCell} class="-w--100">
            <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{rowCell}</div>
          </Tooltip>
        );
      } else {
        cellData = null;
      }

      rowCells.push(
        <div
          aria-label={cellLabel}
          class={`
            ${DATA_TABLE_CLASSES.CELL}
            ${alignment}
            ${cellWidth && cellWidth > 0 ? `-flex-basis--${cellWidth}` : ''}`}
          data-label={cellLabel}
          role="cell"
          style={`
            ${cellWidth === 0 ? 'display: none' : ''}
            ${columnSettings.allowOverflow ? 'overflow: visible;' : ''}
            `}>
          {cellData}
        </div>
      );

      cellIndex++;
    });

    row.push(
      <div
        id={rowId}
        data-rownumber={bodyRow.rowNumber}
        class={`
        ${rowClass}
        ${striped ? DATA_TABLE_CLASSES.STRIPED : ''}
        ${this.selectedRows.includes(bodyRow.id) || bodyRow.active ? ACTIVE_CLASS : ''}
        ${this.accordionsExpanded.includes(rowId) || bodyRow.expanded ? EXPANDED_CLASS : ''}
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
    let tableBodyRows: JSX.Element;

    if (this.data.body.length > 0) {
      const dataToRender = this.dataToRender();

      let i = 0;
      tableBodyRows = dataToRender.map((bodyRow: DataTableRow) => {
        const striped = !(i % 2 === 0);

        i++;

        return this.row(bodyRow, false, striped);
      });
    } else {
      const noResultsMessage = this.config.noResultsMessage ? this.config.noResultsMessage : 'No results found';

      tableBodyRows = (
        <div class={DATA_TABLE_CLASSES.EMPTY}>
          <div>{noResultsMessage}</div>
        </div>
      );
    }

    return <div class={DATA_TABLE_CLASSES.BODY}>{tableBodyRows}</div>;
  }

  _pagination() {
    const pages = this._calculateNumberOfPages();

    if (pages === 1 && this.config.pagination.hideOnSinglePage) {
      return null;
    } else {
      return (
        <div class={DATA_TABLE_CLASSES.FOOTER}>
          <Pagination
            ref="pagination"
            compact={this.config.style.portal || this.config.pagination.compact}
            firstLast={this.config.pagination.firstLast}
            currentPage={this.currentPage}
            pages={pages}
            results={this.data.body.length}
            pageSize={!this.config.style.portal}
            pageJumper={this.config.pagination.pageJumper}
          />
        </div>
      );
    }
  }

  _checkSelectAllCheckbox() {
    const selectAllCheckbox = document.querySelector(
      `.${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL} input`
    ) as HTMLInputElement;

    if (selectAllCheckbox) {
      const isSelected = (row: DataTableRow) => this.selectedRows.includes(row.id);

      if (this.slicedData) {
        selectAllCheckbox.checked = this.slicedData.every(isSelected);
      }
    }
  }

  sliceData(data: DataTableRow[]): DataTableRow[] {
    if (data.length > this.resultsPerPage) {
      const arrayStartIndex = (this.currentPage - 1) * this.resultsPerPage,
        arrayEndIndex = (this.currentPage - 1) * this.resultsPerPage + this.resultsPerPage;

      return data.slice(arrayStartIndex, arrayEndIndex);
    }
    return [];
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
    const serializeRow = (row: DataTableRow, rowNumber: number, parentRowId: string | null) => {
      const rowId = this._rowId(rowNumber);
      const rowN = parentRowId !== null ? `${parentRowId}-${rowNumber}` : String(rowNumber);
      const rowObject = {
        ...row,
        rowNumber: rowN,
        id: rowId,
      };
      let subrowNumber = 0;

      if (
        typeof row.nestedContent === 'object' &&
        typeof row.nestedContent.table === 'object' &&
        row.nestedContent.table.data
      ) {
        // eslint-disable-next-line
        row.nestedContent.table.data = row.nestedContent.table.data.map((row: any) => {
          const serialized = serializeRow(row, subrowNumber, rowN);

          subrowNumber++;
          return serialized;
        });
      }
      return rowObject;
    };
    let rowNumber = 0;

    this._serializedDataBody = [];
    // eslint-disable-next-line
    this._expandable = !!this.data.body.find((row: { nestedContent: any }) => row.nestedContent);
    this.data.body.forEach(row => {
      this._serializedDataBody.push(serializeRow(row, rowNumber, null));
      rowNumber++;
    });
  }

  dataToRender() {
    // eslint-disable-next-line
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
    if (this._sortConfig) {
      this.sortData(this._sortConfig.key, this._sortConfig.direction, this._sortConfig.sortBy);
    }
    this.slicedData = this.sliceData(this._sortedData || this._serializedDataBody);
  }

  created() {
    this._dataTableId = `dt-${dataTableNumber}`;
    dataTableNumber += 1;
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

    this.serializeData();
    if (this._sortConfig) {
      this.sortData(this._sortConfig.key, this._sortConfig.direction, this._sortConfig.sortBy);
    }
    this.slicedData = this.sliceData(this._sortedData || this._serializedDataBody);
  }

  mounted() {
    const dataTableComponent = this.$refs.dataTable as HTMLElement;

    if (dataTableComponent && this.config.columnResize) {
      this._generateColumnResize(dataTableComponent);
    }

    (this.$refs.pagination as Vue).$on(PAGINATION_EVENTS.PAGE_SIZE, (ev: string) => {
      const data = this._sortedData && this._sortedData.length > 0 ? this._sortedData : this._serializedDataBody;

      if (ev === 'all') {
        this.resultsPerPage = this._serializedDataBody.length;
      } else {
        this.resultsPerPage = parseInt(ev);
      }
      this.slicedData = this.sliceData(data);
      this.$emit(PAGINATION_EVENTS.PAGE_SIZE, this.slicedData);
    });

    (this.$refs.pagination as Vue).$on(PAGINATION_EVENTS.PAGE_CHANGE, (ev: number) => {
      const data = this._sortedData && this._sortedData.length > 0 ? this._sortedData : this._serializedDataBody;
      const numberOfPages = this._calculateNumberOfPages();

      if (ev >= 1 && ev <= numberOfPages) {
        this.currentPage = ev;
        this.slicedData = this.sliceData(data);
        this.$emit(PAGINATION_EVENTS.PAGE_CHANGE, this.slicedData);
        this._checkSelectAllCheckbox();
      }
    });
    window.addEventListener('resize', this.resizeHandler);
    // Todo - replace with Ribbon management visibility once available
    // if (this._toolbarComponent) {
    //   this._toolbarComponent.$on('chiToolbarSearch', (ev: Event) => {
    //   });
    //   this._toolbarComponent.$on('chiToolbarFiltersChange', (ev: Event) => {
    //   });
    // }
  }

  resizeHandler() {
    clearTimeout(this._resizeTimer);
    this._resizeTimer = setTimeout(this.detectScreenBreakpoint.bind(this), 0);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler, true);
  }

  sortData(column: string, direction: string, sortBy: string | undefined) {
    const columnTitle = Object.keys(this.data.head).find(columnTitle => columnTitle === column),
      sortDirection = direction === 'ascending' ? 1 : -1;

    if (columnTitle) {
      const columnIndex = Object.keys(this.data.head).indexOf(columnTitle);
      const copiedData = [...this._serializedDataBody];

      this._sortedData = copiedData.sort((a: DataTableRow, b: DataTableRow) => {
        const aDataColumn = a.data[columnIndex],
          bDataColumn = b.data[columnIndex];
        let aValue, bValue;

        if (sortBy) {
          if (aDataColumn[sortBy]) {
            aValue = aDataColumn[sortBy];
          } else if (aDataColumn.payload[sortBy]) {
            aValue = aDataColumn.payload[sortBy];
          }
          if (bDataColumn[sortBy]) {
            bValue = bDataColumn[sortBy];
          } else if (bDataColumn.payload[sortBy]) {
            bValue = bDataColumn.payload[sortBy];
          }
        } else {
          aValue = aDataColumn;
          bValue = bDataColumn;
        }

        if (typeof this.data.head === 'object') {
          switch (this.data.head[column].sortDataType) {
            case 'string':
              aValue = String(aValue).toLowerCase();
              bValue = String(bValue).toLowerCase();
              break;
            case 'number':
              aValue = Number(aValue);
              bValue = Number(bValue);
              break;
            case 'date':
              aValue = Date.parse(aDataColumn);
              bValue = Date.parse(bDataColumn);
              break;
          }
        }

        if (!aValue && !bValue) {
          return 0;
        }
        if (!aValue) {
          return -sortDirection;
        }
        if (!bValue) {
          return sortDirection;
        }

        return aValue > bValue ? sortDirection : -sortDirection;
      });
    }
  }

  sortColumn(e: Event) {
    let element: HTMLElement | null = e.target as HTMLElement,
      columnHeadCell,
      columnHeadSortButton;

    if (element) {
      while (element && !element.classList.contains(DATA_TABLE_CLASSES.HEAD)) {
        if (element.nodeName === 'BUTTON') {
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
        sortIcon = columnHeadSortButton.querySelector(`i.${ICON_CLASS}`),
        headSortColumnIcons = (this.$refs.dataTable as HTMLElement).querySelectorAll(
          `.${DATA_TABLE_CLASSES.HEAD} i.${ICON_CLASS}`
        );

      headSortColumnIcons.forEach(sortIcon => {
        if (sortIcon.className !== `${ICON_CLASS} -xs ${DATA_TABLE_SORT_ICONS.SORT}`) {
          let element = sortIcon;

          sortIcon.className = `${ICON_CLASS} -xs ${DATA_TABLE_SORT_ICONS.SORT}`;
          while (element && !element.classList.contains(DATA_TABLE_CLASSES.HEAD)) {
            if (element.classList.contains(DATA_TABLE_CLASSES.CELL) && element.classList.contains(ACTIVE_CLASS)) {
              element.classList.remove(ACTIVE_CLASS);
            }
            if (element.nodeName === 'BUTTON') {
              element.removeAttribute('data-sort');
            }

            if (element.parentElement) {
              element = element.parentElement;
            }
          }
        }
      });

      if (columnName && sortIcon) {
        sortIcon.className = `${ICON_CLASS} -xs ${DATA_TABLE_SORT_ICONS.ARROW}`;
        if (currentSort === 'ascending' && this._sortConfig && this._sortConfig.key === columnName) {
          (sortIcon as HTMLElement).style.transform = 'rotate(180deg)';
          columnHeadSortButton.setAttribute('data-sort', 'descending');
          this.sortData(columnName, 'descending', columnSortBy);
          this.$emit(DATA_TABLE_EVENTS.DATA_SORTING, this._sortedData);
          this.currentPage = 1;
          if (this._sortedData) {
            this.slicedData = this.sliceData(this._sortedData);
          }
          columnHeadCell?.classList.add(ACTIVE_CLASS);
          this._sortConfig = {
            key: columnName,
            direction: 'descending',
            sortBy: columnSortBy || columnName,
          };
        } else if (currentSort === 'descending' && this._sortConfig && this._sortConfig.key === columnName) {
          sortIcon.className = `${ICON_CLASS} -xs ${DATA_TABLE_SORT_ICONS.SORT}`;
          columnHeadSortButton.removeAttribute('data-sort');
          (sortIcon as HTMLElement).removeAttribute('style');
          columnHeadSortButton.blur();
          if (this._sortedData) {
            this._sortedData.length = 0;
          }
          this.slicedData = this.sliceData(this._serializedDataBody);
          columnHeadCell?.classList.remove(ACTIVE_CLASS);
          this._sortConfig = undefined;
        } else {
          columnHeadSortButton.setAttribute('data-sort', 'ascending');
          this.sortData(columnName, 'ascending', columnSortBy);
          this.$emit(DATA_TABLE_EVENTS.DATA_SORTING, this._sortedData);
          this.currentPage = 1;
          if (this._sortedData) {
            this.slicedData = this.sliceData(this._sortedData);
          }
          columnHeadCell?.classList.add(ACTIVE_CLASS);
          this._sortConfig = {
            key: columnName,
            direction: 'ascending',
            sortBy: columnSortBy || columnName,
          };
        }
      }

      this._checkSelectAllCheckbox();
    }
  }

  render() {
    const classes = this._dataTableClasses(this.config.style, this._sortable),
      head = this._head(),
      toolbar = this._toolbar(),
      body = this._body(),
      pagination = this._pagination();

    return (
      <div class={classes} role="table" ref="dataTable">
        {toolbar}
        {head}
        {body}
        {pagination}
      </div>
    );
  }
}
