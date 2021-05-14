import { Component, Prop, Vue } from 'vue-property-decorator';
import Pagination from '../pagination/pagination';
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
  DataTableConfig,
  DataTableData,
  DataTableExpansionIcons,
  DataTableExpansionIconStyles,
  DataTableRow,
  DataTableRowNestedContent,
  DataTableScreenBreakpoints,
  DataTableStyleConfig,
} from '@/constants/types';
import { DATA_TABLE_SORT_ICONS, SCREEN_BREAKPOINTS } from '@/constants/constants';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';

let dataTableNumber = 0;
@Component({})
export default class DataTable extends Vue {
  @Prop() data!: DataTableData;
  @Prop() config!: DataTableConfig;

  accordionsShown: string[] = [];
  currentPage = this.config.activePage || 1;
  resultsPerPage = this.config.resultsPerPage || 20;
  selectedRows: DataTableRow[] = [];
  slicedData: DataTableRow[] = [];
  sortable = false;
  sortedData?: DataTableRow[] = [];
  _serializedDataBody: DataTableRow[] = [];
  _expandable!: boolean;
  _currentScreenBreakpoint?: DataTableScreenBreakpoints;
  _resizeTimer?: number;
  _dataTableId?: string;
  _preventSortOnResize? = false;
  _toolbarComponent?: DataTableToolbar;
  ribbonVisible = false;

  head() {
    const tableHeadCells = [
      this._expandable ? (
        <div
          class={`
        ${DATA_TABLE_CLASSES.CELL}
        ${DATA_TABLE_CLASSES.EXPANDABLE}`}
        />
      ) : null,
      this.config.selectable ? this.selectRowCheckbox(true) : null,
    ];

    let cellIndex = 0;

    Object.keys(this.data.head).forEach((column: string) => {
      const label = this.data.head[column].label || this.data.head[column],
        sortBy = this.data.head[column].sortBy,
        sortable = this.data.head[column].sortable,
        alignment = this.cellAlignment(this.data.head[column].align),
        sortButton = sortable ? <i class={`${ICON_CLASS} -xs ${DATA_TABLE_SORT_ICONS.SORT}`} /> : '',
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
          data-sort=""
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
          {sortButton}
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

      if (this.data.head[column].sortable && !this.sortable) {
        this.sortable = true;
      }

      cellIndex++;
    });

    return (
      <div class={DATA_TABLE_CLASSES.HEAD} role="row">
        <div class={DATA_TABLE_CLASSES.ROW}>{tableHeadCells}</div>
      </div>
    );
  }

  toolbar() {
    if (this.$scopedSlots['toolbar']) {
      return <div class="">{this.$scopedSlots['toolbar']({})}</div>;
    }
    return null;
  }

  ribbon() {
    if (this.ribbonVisible) {
      return <div class="-bg--info-light -p--2">Ribbon goes here</div>;
    }
    return null;
  }

  generateColumnResize(elem: HTMLElement) {
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

  cellAlignment(align: string): string {
    // eslint-disable-next-line
    const alignmentUtilityClasses: any = {
      left: UTILITY_CLASSES.JUSTIFY.MD_START,
      center: UTILITY_CLASSES.JUSTIFY.MD_CENTER,
      right: UTILITY_CLASSES.JUSTIFY.MD_END,
    };

    if (align) {
      return alignmentUtilityClasses[align];
    }

    return '';
  }

  dataTableClasses(style: DataTableStyleConfig, sortable: boolean) {
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

  expansionButton(rowId: string) {
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
              this.accordionsShown.includes(rowId)
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

  emitSelectedRows() {
    this.$emit(DATA_TABLE_EVENTS.SELECTED_ROWS_CHANGE, this.selectedRows);
  }

  selectRow(rowData: DataTableRow) {
    const row = this.selectedRows.find(selectedRow => selectedRow.rowNumber === rowData.rowNumber);

    if (!row) {
      this.selectedRows.push(rowData);
    } else {
      const indexOfRowId = this.selectedRows.indexOf(row);

      this.selectedRows.splice(indexOfRowId, 1);
    }

    this.emitSelectedRows();
  }

  calculateNumberOfPages() {
    return Math.max(Math.ceil(this.data.body.length / this.resultsPerPage), 1);
  }

  selectAllRows(action: 'select' | 'deselect') {
    const numberOfPages = this.calculateNumberOfPages();
    const data =
      numberOfPages === 1
        ? this.sortedData && this.sortedData.length > 0
          ? this.sortedData
          : this._serializedDataBody
        : this.slicedData;

    if (action === 'select') {
      data.forEach((row: DataTableRow) => {
        if (!this.selectedRows.includes(row)) {
          this.selectedRows.push(row);
        }
      });
    } else {
      data.forEach((row: DataTableRow) => {
        const rowIndex = this.selectedRows.indexOf(row);

        this.selectedRows.splice(rowIndex, 1);
      });
    }

    this.emitSelectedRows();
  }

  selectRowCheckbox(selectAll: boolean, rowData: DataTableRow | null = null) {
    const checkedState = rowData && rowData.rowNumber && this.selectedRows.includes(rowData);

    if (selectAll || !!rowData) {
      const checkboxId =
        rowData && typeof rowData === 'object' && rowData.rowNumber
          ? `checkbox-select-${this.rowId(rowData.rowNumber)}`
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
    if (this.accordionsShown.includes(id)) {
      this.accordionsShown.splice(this.accordionsShown.indexOf(id), 1);
    } else {
      this.accordionsShown.push(id);
    }
  }

  rowAccordionContent(accordionData: DataTableRowNestedContent) {
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

  rowId(id: number | string) {
    return `row-${this._dataTableId}-${id}`;
  }

  row(bodyRow: DataTableRow, rowChild = false, striped = false) {
    const row = [],
      rowCells = [],
      rowAccordionContent = [],
      rowId = this.rowId(bodyRow.rowNumber),
      rowClass = rowChild ? DATA_TABLE_CLASSES.ROW_CHILD : DATA_TABLE_CLASSES.ROW;

    if (this._expandable) {
      if (bodyRow.nestedContent) {
        rowCells.push(this.expansionButton(rowId));
        rowAccordionContent.push(this.rowAccordionContent(bodyRow.nestedContent));
      } else {
        rowCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`} role="cell" />);
      }
    }

    if (this.config.selectable) {
      rowCells.push(this.selectRowCheckbox(false, bodyRow));
    }

    let cellIndex = 0;

    // eslint-disable-next-line
    bodyRow.data.forEach((rowCell: any) => {
      const columnSettings = this.data.head[Object.keys(this.data.head)[cellIndex]],
        alignment = this.cellAlignment(rowCell.align ? rowCell.align : columnSettings.align || null),
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
        cellData = <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{rowCell.value}</div>;
      } else if (typeof rowCell === 'string' || typeof rowCell === 'number') {
        cellData = <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{rowCell}</div>;
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
        ${this.selectedRows.includes(bodyRow) ? ACTIVE_CLASS : ''}
        ${this.accordionsShown.includes(rowId) ? EXPANDED_CLASS : ''}
        `}
        role="row">
        {rowCells}
      </div>
    );

    if (bodyRow.nestedContent) {
      row.push(
        <transition name="slide-fade">
          <div v-show={this.accordionsShown.includes(rowId)} id={`${rowId}-content`}>
            {rowAccordionContent}
          </div>
        </transition>
      );
    }

    return row;
  }

  body() {
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

  pagination() {
    const pages = this.calculateNumberOfPages();

    return (
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
    );
  }

  checkSelectAllCheckbox() {
    const selectAllCheckbox = document.querySelector(
      `.${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL} input`
    ) as HTMLInputElement;

    if (selectAllCheckbox) {
      const isSelected = (row: DataTableRow) => this.selectedRows.includes(row);

      if (this.slicedData) {
        selectAllCheckbox.checked = this.slicedData.every(isSelected);
      }
    }
  }

  // eslint-disable-next-line
  sliceData(data: Record<string, any>) {
    if (data.length > this.resultsPerPage) {
      const arrayStartIndex = (this.currentPage - 1) * this.resultsPerPage,
        arrayEndIndex = (this.currentPage - 1) * this.resultsPerPage + this.resultsPerPage;

      return data.slice(arrayStartIndex, arrayEndIndex);
    }
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

  created() {
    const serializeRow = (row: DataTableRow, rowNumber: number, parentRowId: string | null) => {
      const rowN = parentRowId !== null ? `${parentRowId}-${rowNumber}` : String(rowNumber);
      const rowObject = {
        ...row,
        rowNumber: rowN,
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
    this.slicedData = this.sliceData(this._serializedDataBody);
    this._dataTableId = `dt-${dataTableNumber}`;
    dataTableNumber += 1;
  }

  dataToRender() {
    // eslint-disable-next-line
    let dataToRender: Record<string, any>;

    if (this.slicedData && this.slicedData.length > 0) {
      dataToRender = this.slicedData;
    } else if (this.sortedData && this.sortedData.length > 0) {
      dataToRender = this.sortedData;
    } else {
      dataToRender = this._serializedDataBody;
    }

    return dataToRender;
  }

  beforeMount() {
    this.detectScreenBreakpoint();
  }

  mounted() {
    const dataTableComponent = this.$refs.dataTable as HTMLElement;

    if (dataTableComponent && this.config.columnResize) {
      this.generateColumnResize(dataTableComponent);
    }

    (this.$refs.pagination as Vue).$on(PAGINATION_EVENTS.PAGE_SIZE, (ev: string) => {
      const data = this.sortedData && this.sortedData.length > 0 ? this.sortedData : this._serializedDataBody;

      if (ev === 'all') {
        this.resultsPerPage = this._serializedDataBody.length;
      } else {
        this.resultsPerPage = parseInt(ev);
      }
      this.slicedData = this.sliceData(data);
      this.$emit(PAGINATION_EVENTS.PAGE_SIZE, this.slicedData);
    });

    (this.$refs.pagination as Vue).$on(PAGINATION_EVENTS.PAGE_CHANGE, (ev: number) => {
      const data = this.sortedData && this.sortedData.length > 0 ? this.sortedData : this._serializedDataBody;
      const numberOfPages = this.calculateNumberOfPages();

      if (ev >= 1 && ev <= numberOfPages) {
        this.currentPage = ev;
        this.slicedData = this.sliceData(data);
        this.$emit(PAGINATION_EVENTS.PAGE_CHANGE, this.slicedData);
        this.checkSelectAllCheckbox();
      }
    });
    window.addEventListener('resize', this.resizeHandler);
    if (this._toolbarComponent) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self = this;

      this._toolbarComponent.$on('chiToolbarSearch', () => {
        self.ribbonVisible = true;
      });

      this._toolbarComponent.$on('chiToolbarFiltersChange', () => {
        self.ribbonVisible = true;
      });

      this._toolbarComponent.$on('chiToolbarViewsChange', () => {
        self.ribbonVisible = true;
      });
    }
  }

  resizeHandler() {
    clearTimeout(this._resizeTimer);
    this._resizeTimer = setTimeout(this.detectScreenBreakpoint.bind(this), 0);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler, true);
  }

  sortColumn(e: Event) {
    const sortData = (column: string, direction: string, sortBy: string | undefined) => {
      const columnTitle = Object.keys(this.data.head).find(columnTitle => columnTitle === column),
        sortDirection = direction === 'ascending' ? 1 : -1;

      if (columnTitle) {
        const columnIndex = Object.keys(this.data.head).indexOf(columnTitle);
        const copiedData = [...this._serializedDataBody];

        this.sortedData = copiedData.sort((a: DataTableRow, b: DataTableRow) => {
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
                aValue = String(aValue);
                bValue = String(bValue);
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
        this.$emit(DATA_TABLE_EVENTS.DATA_SORTING, this.sortedData);
        this.currentPage = 1;
        if (this.sortedData) {
          this.slicedData = this.sliceData(this.sortedData);
        }
      }
    };
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
        currentSort = columnHeadSortButton.dataset.sort,
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
        if (currentSort === 'ascending') {
          (sortIcon as HTMLElement).style.transform = 'rotate(180deg)';
          columnHeadSortButton.setAttribute('data-sort', 'descending');
          sortData(columnName, 'descending', columnSortBy);
          columnHeadCell?.classList.add(ACTIVE_CLASS);
        } else if (currentSort === 'descending') {
          sortIcon.className = `${ICON_CLASS} -xs ${DATA_TABLE_SORT_ICONS.SORT}`;
          columnHeadSortButton.removeAttribute('data-sort');
          (sortIcon as HTMLElement).removeAttribute('style');
          columnHeadSortButton.blur();
          if (this.sortedData) {
            this.sortedData.length = 0;
          }
          this.slicedData = this.sliceData(this._serializedDataBody);
          columnHeadCell?.classList.remove(ACTIVE_CLASS);
        } else {
          columnHeadSortButton.setAttribute('data-sort', 'ascending');
          sortData(columnName, 'ascending', columnSortBy);
          columnHeadCell?.classList.add(ACTIVE_CLASS);
        }
      }

      this.checkSelectAllCheckbox();
    }
  }

  render() {
    const classes = this.dataTableClasses(this.config.style, this.sortable),
      head = this.head(),
      toolbar = this.toolbar(),
      ribbon = this.ribbon(),
      body = this.body(),
      pagination = this.pagination();

    return (
      <div class={classes} role="table" ref="dataTable">
        {toolbar}
        {ribbon}
        {head}
        {body}
        <div class={DATA_TABLE_CLASSES.FOOTER}>{pagination}</div>
      </div>
    );
  }
}
