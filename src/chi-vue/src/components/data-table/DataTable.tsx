import { Component, Prop, Vue } from 'vue-property-decorator';
import Pagination from '../pagination/pagination';
import { uuid4 } from '../../../../custom-elements/src/utils/utils';
import { ACTIVE_CLASS, DATA_TABLE_CLASSES } from '@/constants/classes';
import { generateColumnResize } from './utils/_generateResize';
import { cellAlignment, dataTableClasses } from './utils/_cellAlignment';
import './data-table.scss';

@Component({})
export default class DataTable extends Vue {
  @Prop() data!: Record<string, any>;

  _uuid!: string;
  _dataTableElement?: HTMLElement;
  _expandable?: boolean;
  accordionShown: any = [];
  sortable = false;
  sortedData: any;

  created() {
    this._uuid = uuid4();
    this._expandable = this.data.body.find((row: { accordion: any; }) => row.accordion);
  }

  mounted() {
    const dataTableComponent = document.getElementById(this._uuid);

    if (dataTableComponent && this.data.config.columnResize) {
      generateColumnResize(dataTableComponent);
    }
  }

  sortData(column: string, direction: string, sortBy: string | undefined) {
    const copiedData = [...this.data.body];
    const sortDirection = direction === 'ascending' ? 1 : -1;

    this.sortedData = copiedData.sort((a, b) => {
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

    this.$forceUpdate();
  }

  sortColumn(e: Event) {
    let element: HTMLElement | null = e.target as HTMLElement,
      columnHeadCell,
      columnHeadSortButton;

    if (element) {
      while (element && !element.classList.contains(DATA_TABLE_CLASSES.HEAD)) {
        if (element) {
          if (element.nodeName === 'BUTTON') {
            columnHeadSortButton = element;
          }

          if (element.classList.contains(DATA_TABLE_CLASSES.CELL)) {
            columnHeadCell = element;
          }
        }

        element = element.parentElement;
      }
    }

    if (columnHeadSortButton) {
      const columnName = columnHeadSortButton.dataset.column,
        columnSort = columnHeadSortButton.dataset.sort,
        columnSortBy = columnHeadSortButton.dataset.sortBy,
        sortIcon = columnHeadSortButton.querySelector('i.chi-icon');

      if (columnName && sortIcon) {
        if (columnSort === 'ascending') {
          sortIcon.className = 'chi-icon icon-arrow-down';
          columnHeadSortButton.setAttribute('data-sort', 'descending');
          this.sortData(columnName, 'descending', columnSortBy);
          columnHeadCell?.classList.add(ACTIVE_CLASS);
        } else if (columnSort === 'descending') {
          sortIcon.className = 'chi-icon icon-arrow-sync';
          columnHeadSortButton.removeAttribute('data-sort');
          columnHeadSortButton.blur();
          this.sortedData.length = 0;
          columnHeadCell?.classList.remove(ACTIVE_CLASS);
          this.$forceUpdate();
        } else {
          sortIcon.className = 'chi-icon icon-arrow-up';
          columnHeadSortButton.setAttribute('data-sort', 'ascending');
          this.sortData(columnName, 'ascending', columnSortBy);
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
                   class="chi-button -icon -flat -sm"
                   aria-label="Sorting column"
                   onClick={(e: Event) => this.sortColumn(e)}>
      <div class="chi-button__content">
        <i class={`chi-icon icon-${icon}`}/>
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
        alignment = cellAlignment(this.data.head[column].align),
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

    return <div class="chi-data-table__cell -expandable">
      <button class="chi-button -icon -flat -sm" aria-label="Expand row" data-target={`#row-${rowId}-content`}
              onClick={() => this.toggleRow(rowId.toString())}>
        <div class="chi-button__content">
          <i class={`
            chi-icon
            icon-${this.accordionShown.includes(rowId) ? expansionIcons[iconStyle].expanded
            : expansionIcons[iconStyle].collapsed}
            `}/>
        </div>
      </button>
    </div>;
  };

  selectRowCheckbox(rowId?: string, selectAll?: boolean) {
    return <div class="chi-data-table__cell -selectable">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id={`row-${rowId}`}/>
        <label class="chi-checkbox__label" for={`row-${rowId}`}>
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

      return <div class="chi-data-table__row-child -p--2">
        {template}
      </div>;
    } else if (accordionData.table) {
      if (accordionData.table.data) {
        return accordionData.table.data.map((bodyRow: any) => {
          return this.row(bodyRow, true);
        });
      }
    } else {
      return <div class="chi-data-table__row-child -p--2">
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
      rowId = bodyRow.id ? bodyRow.id : uuid4(),
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
      const alignment = cellAlignment(rowCell.align);
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

    row.push(<div class={`${rowClass} ${this.accordionShown.includes(rowId) ? ACTIVE_CLASS : ''}`}>
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
      const dataToRender = this.sortedData && this.sortedData.length > 0 ?
        this.sortedData : this.data.body;

      console.log(this.sortedData);

      tableBodyRows = dataToRender.map((bodyRow: any) => {
        return this.row(bodyRow);
      });
    } else {
      const noResultsMessage = this.data.config.noResultsMessage ? this.data.config.noResultsMessage : 'No results found';

      tableBodyRows = <div class="chi-data-table__row-empty">
        <div>{noResultsMessage}</div>
      </div>;
    }

    return <div class={DATA_TABLE_CLASSES.BODY}>
      {tableBodyRows}
    </div>;
  }

  pagination() {
    return <Pagination
      compact={this.data.config.style.portal || this.data.config.pagination.compact}
      pages={10}
      currentPage={1}
      results={this.data.body.length}
      pageSize={!this.data.config.style.portal}
      pageJumper={!this.data.config.style.portal}/>;
  }

  render() {
    const classes = dataTableClasses(this.data.config.style, !!this.sortable);
    const head = this.head();
    const body = this.body();
    const pagination = this.pagination();

    return (
      <div class={classes} id={this._uuid}>
        {head}
        {body}
        <div class="chi-data-table__footer">
          {pagination}
        </div>
      </div>);
  }
}
