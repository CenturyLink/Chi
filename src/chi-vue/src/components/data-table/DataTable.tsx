import { Component, Prop, Vue } from 'vue-property-decorator';
import Pagination from '../pagination/pagination';
import { uuid4 } from '../../../../custom-elements/src/utils/utils';
import {
  ACTIVE_CLASS,
  BUTTON_CLASSES,
  CHECKBOX_CLASSES,
  DATA_TABLE_CLASSES,
  ICON_CLASS,
  UTILITY_CLASSES
} from '@/constants/classes';
import './data-table.scss';
import { PAGINATION_EVENTS } from '../../constants/events';

@Component({})
export default class DataTable extends Vue {
  @Prop() data!: Record<string, any>;

  _uuid!: string;
  _expandable?: boolean;
  accordionShown: any = [];
  sortable = false;
  sortedData: any;
  slicedData: any;
  resultsPerPage = 20;
  currentPage = 1;

  sortColumn(e: Event) {
    const sortData = (column: string, direction: string, sortBy: string | undefined) => {
      const copiedData = [...this.data.body],
        sortDirection = direction === 'ascending' ? 1 : -1;
      const sortedData = copiedData.sort((a, b) => {
        const aDataColumn = a.data.find((columnData: { label: string }) => columnData.label === column),
          bDataColumn = b.data.find((columnData: { label: string }) => columnData.label === column);
        let aValue;
        let bValue;

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
        }

        return (aValue > bValue) ? 1 * sortDirection : -1 * sortDirection;
      });

      this.sortedData = sortedData;
      this.currentPage = 1;
      this.slicedData = this.sliceData(this.sortedData);
      this.$forceUpdate();
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
        sortIcon = columnHeadSortButton.querySelector(`i.${ICON_CLASS}`);

      if (columnName && sortIcon) {
        if (currentSort === 'ascending') {
          sortIcon.className = `${ICON_CLASS} icon-arrow-down`;
          columnHeadSortButton.setAttribute('data-sort', 'descending');
          sortData(columnName, 'descending', columnSortBy);
          columnHeadCell?.classList.add(ACTIVE_CLASS);
        } else if (currentSort === 'descending') {
          sortIcon.className = `${ICON_CLASS} icon-arrow-sync`;
          columnHeadSortButton.removeAttribute('data-sort');
          columnHeadSortButton.blur();
          this.slicedData = this.sliceData(this.data.body);
          columnHeadCell?.classList.remove(ACTIVE_CLASS);
          this.$forceUpdate();
        } else {
          sortIcon.className = `${ICON_CLASS} icon-arrow-up`;
          columnHeadSortButton.setAttribute('data-sort', 'ascending');
          sortData(columnName, 'ascending', columnSortBy);
          columnHeadCell?.classList.add(ACTIVE_CLASS);
        }
      }
    }
  }

  sortingIcon(column: string, sortBy: string) {
    const icon = this.data.sortIcon ?
      this.data.sortIcon === 'ascending' ? `ascending` : `descending`
      : 'arrow-sync';

    return <button data-column={column}
      data-sort-by={sortBy}
      data-sort=""
      class={`
        ${BUTTON_CLASSES.BUTTON}
        ${BUTTON_CLASSES.ICON_BUTTON}
        ${BUTTON_CLASSES.FLAT}
      `}
      aria-label="Sorting column"
      onClick={(e: Event) => this.sortColumn(e)}>
      <div class={BUTTON_CLASSES.CONTENT}>
        <i class={`${ICON_CLASS} icon-${icon}`}/>
      </div>
    </button>;
  }

  head() {
    const tableHeadCells = [
      this._expandable ? <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`}/> : null,
      this.data.config.selectable ? this.selectRowCheckbox(undefined, true) : null
    ];

    Object.keys(this.data.head).forEach((column: string) => {
      const label = this.data.head[column].label ? this.data.head[column].label : this.data.head[column],
        sortBy = this.data.head[column].sortBy,
        alignment = this.cellAlignment(this.data.head[column].align),
        sortIcon = this.data.head[column].sortable ?
          this.sortingIcon(label, sortBy) : '';

      tableHeadCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${alignment}`} data-label={label}>
        {label}
        {sortIcon}
      </div>);

      if (this.data.head[column].sortable && !this.sortable) {
        this.sortable = true;
      }
    });

    return <div class={DATA_TABLE_CLASSES.HEAD}>
      <div class={DATA_TABLE_CLASSES.ROW}>
        {tableHeadCells}
      </div>
    </div>;
  }

  generateColumnResize(elem: HTMLElement) {
    const columnHeaders = elem.querySelectorAll(`.${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL}`);
    let thElm: any;
    let startOffset: any;

    Array.prototype.forEach.call(
      columnHeaders,
      function(th) {
        th.style.position = 'relative';
        const grip = document.createElement('div');
        grip.innerHTML = '&nbsp;';
        grip.style.top = '0';
        grip.style.right = '0';
        grip.style.bottom = '0';
        grip.style.width = '5px';
        grip.style.position = 'absolute';
        grip.style.cursor = 'col-resize';
        grip.classList.add('resize-handle');
        grip.addEventListener('mousedown', function(e) {
          thElm = th;
          startOffset = th.offsetWidth - e.pageX;
        });
        th.appendChild(grip);
      });
    document.addEventListener('mousemove', function(e) {
      let columnCellsToResize;
      if (thElm) {
        thElm.setAttribute('style', `width: ${startOffset + e.pageX + 'px'} !important; flex: none !important;`);
        for (let i = 0; i < columnHeaders.length; ++i) {
          if (columnHeaders[i] === thElm) {
            columnCellsToResize = elem
              .querySelectorAll(`.${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW} .${DATA_TABLE_CLASSES.CELL}:nth-child(${i + 1})`);
          }
        }
        Array.prototype.forEach.call(
          columnCellsToResize,
          function(column) {
            column.setAttribute('style', `width: ${thElm.style.width} !important; flex: none !important`);
          });
      }
    });
    document.addEventListener('mouseup', function() {
      thElm = undefined;
    });
  };

  cellAlignment(align: string) {
    const alignmentUtilityClasses: any = {
      left: UTILITY_CLASSES.JUSTIFY.START,
      center: UTILITY_CLASSES.JUSTIFY.CENTER,
      right: UTILITY_CLASSES.JUSTIFY.END
    };

    if (align) {
      return alignmentUtilityClasses[align];
    }

    return;
  };

  dataTableClasses(style: any, sortable: boolean) {
    return [
      DATA_TABLE_CLASSES.DATA_TABLE,
      DATA_TABLE_CLASSES.COMPACT,
      style.portal ? DATA_TABLE_CLASSES.COMPACT : null,
      style.bordered ? DATA_TABLE_CLASSES.BORDERED : null,
      style.noBorder ? DATA_TABLE_CLASSES.NO_BORDER : null,
      style.hover ? DATA_TABLE_CLASSES.HOVER : null,
      style.striped ? DATA_TABLE_CLASSES.STRIPED : null,
      style.size ? `-${style.size}` : null,
      sortable ? DATA_TABLE_CLASSES.SORTING : null
    ].join(' ');
  };

  expansionButton(rowId: string) {
    const expansionIcons: any = {
      portal: {
        expanded: 'minus',
        collapsed: 'plus'
      },
      base: {
        expanded: 'chevron-up',
        collapsed: 'chevron-right'
      }
    };
    const iconStyle: string = this.data.config.style.portal ? 'portal' : 'base';

    return <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`}>
      <button class={`
        ${BUTTON_CLASSES.BUTTON}
        ${BUTTON_CLASSES.ICON_BUTTON}
        ${BUTTON_CLASSES.FLAT}
        -sm
        `}
          aria-label="Expand row"
          data-target={`#row-${rowId}-content`}
          onClick={() => this.toggleRow(rowId.toString())}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`
            ${ICON_CLASS}
            icon-${this.accordionShown.includes(rowId) ? expansionIcons[iconStyle].expanded
            : expansionIcons[iconStyle].collapsed}
            `}/>
        </div>
      </button>
    </div>;
  };

  selectRowCheckbox(rowId?: string, selectAll?: boolean) {
    return <div class={`
        ${DATA_TABLE_CLASSES.CELL}
        ${DATA_TABLE_CLASSES.SELECTABLE}
      `}>
      <div class={CHECKBOX_CLASSES}>
        <input type="checkbox" class={CHECKBOX_CLASSES.INPUT} id={`row-${rowId}`} />
        <label class={CHECKBOX_CLASSES.LABEL} for={`row-${rowId}`}>
          <div class="-sr--only">Select row {rowId}</div>
        </label>
      </div>
    </div>;
  }

  toggleRow(id: string) {
    if (this.accordionShown.includes(id)) {
      this.accordionShown.splice(this.accordionShown.indexOf(id), 1);
    } else {
      this.accordionShown.push(id);
    }
  };

  rowAccordionContent(accordionData: any) {
    if (accordionData.template) {
      const template = this.$scopedSlots[accordionData.template]!(accordionData.payload);

      return <div class={`${DATA_TABLE_CLASSES.ROW_CHILD} -p--2`}>
        {template}
      </div>;
    } else if (accordionData.table) {
      if (accordionData.table.data) {
        return accordionData.table.data.map((bodyRow: any) => {
          return this.row(bodyRow, true);
        });
      }
    } else {
      return <div class={`${DATA_TABLE_CLASSES.ROW_CHILD} -p--2`}>
        {accordionData.value}
      </div>;
    }
  }

  row(bodyRow: {
    active: boolean,
    data: string[],
    accordion: {
      template: any,
      value: any,
      payload: any
    }, id: string
  }, rowChild = false) {
    const row: any = [],
      rowCells: any = [],
      rowAccordionContent: any = [],
      rowId = bodyRow.id ? bodyRow.id : `row-${uuid4()}`,
      rowClass = rowChild ? DATA_TABLE_CLASSES.ROW_CHILD : DATA_TABLE_CLASSES.ROW;

    if (this._expandable) {
      if (bodyRow.accordion) {
        rowCells.push(this.expansionButton(rowId));
        rowAccordionContent.push(this.rowAccordionContent(bodyRow.accordion));
      } else {
        rowCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`}/>);
      }
    }

    if (this.data.config.selectable) {
      rowCells.push(this.selectRowCheckbox(rowId));
    }

    bodyRow.data.map((rowCell: any) => {
      const alignment = this.cellAlignment(rowCell.align);
      let cellData;

      if (rowCell.template && this.$scopedSlots[rowCell.template]) {
        if (rowCell.payload) {
          cellData = this.$scopedSlots[rowCell.template]!(rowCell.payload);
        }
      } else if (typeof rowCell === 'string') {
        cellData = rowCell;
      } else {
        cellData = rowCell.value;
      }
      rowCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${alignment}`} data-label={rowCell.label}>
        {cellData}
      </div>);
    });

    row.push(<div class={`${rowClass}`}>
      {rowCells}
    </div>);

    if (bodyRow.accordion) {
      row.push(
        <transition name="slide-fade">
          <div v-show={this.accordionShown.includes(rowId)} id={`row-${rowId}-content`}>{rowAccordionContent}</div>
        </transition>
      );
    }

    return row;
  };

  body() {
    let tableBodyRows: JSX.Element;

    if (this.data.body.length > 0) {
      const dataToRender = this.dataToRender();

      tableBodyRows = dataToRender.map((bodyRow: any) => {
        return this.row(bodyRow);
      });
    } else {
      const noResultsMessage = this.data.config.noResultsMessage ? this.data.config.noResultsMessage : 'No results found';

      tableBodyRows = <div class={DATA_TABLE_CLASSES.EMPTY}>
        <div>{noResultsMessage}</div>
      </div>;
    }

    return <div class={DATA_TABLE_CLASSES.BODY}>
      {tableBodyRows}
    </div>;
  }

  pagination() {
    const results = this.data.body.length,
      pages = Math.floor(results / this.resultsPerPage) + 1;

    return <Pagination
      ref="pagination"
      compact={this.data.config.style.portal || this.data.config.pagination.compact}
      currentPage={this.currentPage}
      pages={pages}
      results={results}
      pageSize={!this.data.config.style.portal}
      pageJumper={!this.data.config.style.portal}/>;
  }

  sliceData(data: Record<string, any>) {
    if (data.length > this.resultsPerPage) {
      const arrayStartIndex = (this.currentPage - 1) * this.resultsPerPage;
      const arrayEndIndex = ((this.currentPage - 1) * this.resultsPerPage) + this.resultsPerPage;

      return data.slice(arrayStartIndex, arrayEndIndex);
    }
  }

  created() {
    this._uuid = `dt-${uuid4()}`;
    this._expandable = this.data.body.find((row: { accordion: any; }) => row.accordion);
    this.slicedData = this.sliceData(this.data.body);
  }

  dataToRender() {
    let dataToRender: Record<string, any>;

    if (this.slicedData && this.slicedData.length > 0) {
      dataToRender = this.slicedData;
    } else if (this.sortedData && this.sortedData.length > 0) {
      dataToRender = this.sortedData;
    } else {
      dataToRender = this.data.body;
    }

    return dataToRender;
  }

  mounted() {
    const dataTableComponent = document.getElementById(this._uuid);

    if (dataTableComponent && this.data.config.columnResize) {
      this.generateColumnResize(dataTableComponent);
    }

    (this.$refs.pagination as Vue).$on(PAGINATION_EVENTS.PAGE_SIZE, (ev: number) => {
      const data = this.sortedData && this.sortedData.length > 0 ? this.sortedData : this.data.body;

      this.resultsPerPage = ev;
      this.slicedData = this.sliceData(data);
    });

    (this.$refs.pagination as Vue).$on(PAGINATION_EVENTS.PAGE_CHANGE, (ev: number) => {
      const data = this.sortedData && this.sortedData.length > 0 ? this.sortedData : this.data.body;

      this.currentPage = ev;
      this.slicedData = this.sliceData(data);
    });
  }

  render() {
    const classes = this.dataTableClasses(this.data.config.style, this.sortable),
      head = this.head(),
      body = this.body(),
      pagination = this.pagination();

    return (
      <div class={classes} id={this._uuid}>
        {head}
        {body}
        <div class={DATA_TABLE_CLASSES.FOOTER}>
          {pagination}
        </div>
      </div>);
  }
}
