import { Component, Prop, Vue } from 'vue-property-decorator';
import Pagination from '../pagination/pagination';
import { uuid4 } from '../../../../custom-elements/src/utils/utils';
import {
  ACTIVE_CLASS,
  DATA_TABLE_CLASSES
} from '@/constants/classes';
import { generateColumnResize } from './utils/_generateResize';
import { cellAlignment, dataTableClasses } from './utils/_cellAlignment';
import './data-table.scss';

@Component({
})
export default class DataTable extends Vue {
  @Prop() data!: Record<string, any>;

  _uuid!: string;
  _dataTableElement?: HTMLElement;
  _expandable?: boolean;
  accordionShown: any = [];
  sortable = false;
  sortedColumn = {};

  created() {
    this._uuid = uuid4();
    this._expandable = this.data.body.find((row: { accordion: any; }) => row.accordion);
    this.sortedColumn = {};
  }

  mounted() {
    const dataTableComponent = document.getElementById(this._uuid);

    if (dataTableComponent && this.data.config.columnResize) {
      generateColumnResize(dataTableComponent);
    }
  }

  sort(e: Event) {
    let element: HTMLElement | null = e.target as HTMLElement;
    let columnHeadCell;
    let columnHeadSortButton;

    if (element) {
      while (element && !element.classList.contains(DATA_TABLE_CLASSES.HEAD)) {
        element = element.parentElement;

        if (element) {
          if (element.nodeName === 'BUTTON') {
            columnHeadSortButton = element;
          }

          if (element.classList.contains(DATA_TABLE_CLASSES.CELL)) {
            columnHeadCell = element;
          }
        }
      }
    }

    if (columnHeadSortButton) {
      const columnName = columnHeadSortButton.dataset.column;
      const columnSort = columnHeadSortButton.getAttribute('data-sort');
      const sortIcon = columnHeadSortButton.querySelector('i.chi-icon');

      columnHeadCell?.classList.add(ACTIVE_CLASS);

      if (sortIcon) {
        if (columnHeadSortButton.getAttribute('data-sort') === 'ascending') {
          sortIcon.className = 'chi-icon icon-arrow-down';
          columnHeadSortButton.setAttribute('sort', 'descending');
        } else if (columnHeadSortButton.getAttribute('data-sort') === 'descending') {
          sortIcon.className = 'chi-icon icon-arrow-up';
          columnHeadSortButton.setAttribute('sort', 'ascending');
        } else {
          sortIcon.className = 'chi-icon icon-arrow-down';
          columnHeadSortButton.setAttribute('data-sort', 'descending');
          console.log(columnHeadSortButton);
        }
      }
    }
  }

  sortingIcon(column: string) {
    const icon = this.data.sortIcon ?
      this.data.sortIcon === 'ascending' ? `ascending` : `descending`
      : 'arrow-sync';

    return <button data-column={column} data-sort="" class="chi-button -icon -flat -sm" aria-label="Sorting column" onClick={(e: Event) => this.sort(e)}>
      <div class="chi-button__content">
        <i class={`chi-icon icon-${icon}`}></i>
      </div>
    </button>
  }

  head() {
    const tableHeadCells = [
      this._expandable ? <div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`}></div> : null,
      this.data.config.selectable ? this.selectRowCheckbox(undefined, true) : null
    ];

    Object.keys(this.data.head).forEach((column: string) => {
      const label = this.data.head[column].label ? this.data.head[column].label : this.data.head[column];
      const alignment = cellAlignment(this.data.head[column].align);
      const sortIcon = this.data.head[column].sortable ?
        this.sortingIcon(column) : '';

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
      <button class="chi-button -icon -flat -sm" aria-label="Expand row" data-target={`#row-${rowId}-content`} onClick={(e: Event) => this.toggleRow(rowId.toString())}>
        <div class="chi-button__content">
          <i class={`
            chi-icon
            icon-${this.accordionShown.includes(rowId) ? expansionIcons[iconStyle].expanded
              : expansionIcons[iconStyle].collapsed}
            `}></i>
        </div>
      </button>
    </div>;
  };

  selectRowCheckbox(rowId?: string, selectAll?: boolean) {
    return <div class="chi-data-table__cell -selectable">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id={`row-${rowId}`} />
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
        const childBodyRows = accordionData.table.data.map((bodyRow: any) => {
          return this.row(bodyRow, true);
        });

        return childBodyRows;
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
    const row: any = [];
    const rowCells: any = [];
    const rowAccordionContent: any = [];
    const rowId = bodyRow.id ? bodyRow.id : uuid4();
    const rowClass = rowChild ? DATA_TABLE_CLASSES.ROW_CHILD : DATA_TABLE_CLASSES.ROW;

    if (this._expandable) {
      if (bodyRow.accordion) {
        rowCells.push(this.expansionButton(rowId));
        rowAccordionContent.push(this.rowAccordionContent(bodyRow.accordion));
      } else {
        rowCells.push(<div class="chi-data-table__cell -expandable"></div>);
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
      tableBodyRows = this.data.body.map((bodyRow: any) => {
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
      pageJumper={!this.data.config.style.portal} />;
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
