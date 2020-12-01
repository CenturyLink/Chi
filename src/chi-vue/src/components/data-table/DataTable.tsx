import { Component, Prop, Vue } from 'vue-property-decorator';
import Pagination from '../pagination/pagination';
import { uuid4 } from '../../../../custom-elements/src/utils/utils';
import { DATA_TABLE_CLASSES } from '@/constants/classes';
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

  head() {
    const expandable = this.data.body.find((row: { accordion: any; }) => row.accordion);
    const selectable = this.data.config.selectable;
    const tableHeadCells = [];

    if (expandable) {
      tableHeadCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.EXPANDABLE}`}></div>);
    }
    if (selectable) {
      tableHeadCells.push(<div class={`${DATA_TABLE_CLASSES.CELL} ${DATA_TABLE_CLASSES.SELECTABLE}`}>
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba1" />
          <label class="chi-checkbox__label" for="checkbox-ba1">
            <div class="-sr--only">Select All</div>
          </label>
        </div>
      </div>);
    }
    Object.keys(this.data.head).forEach((column: string) => {
      const label = this.data.head[column].label ? this.data.head[column].label : this.data.head[column];
      const alignment = cellAlignment(this.data.head[column].align);

      tableHeadCells.push(<div class={`chi-data-table__cell ${alignment}`} data-label={label}>
        {label}
      </div>);
    });

    return <div class={DATA_TABLE_CLASSES.HEAD}>
      <div class="chi-data-table__row">
        {tableHeadCells}
      </div>
    </div>;
  }

  toggleRow = (id: string) => {
    if (this.accordionShown.includes(id)) {
      this.accordionShown.splice(this.accordionShown.indexOf(id), 1);
    } else {
      this.accordionShown.push(id);
    }
  };

  body() {
    const expandable = this.data.body.find((row: { accordion: any; }) => row.accordion);
    let tableBodyRows: JSX.Element;

    if (this.data.body.length > 0) {
      tableBodyRows = this.data.body.map((bodyRow: { active: boolean, data: string[], accordion: { template: any, value: any, payload: any }, id: number | undefined }) => {
        const row: any = [];
        const rowCells: any = [];
        const rowAccordionContent: any = [];
        const rowId = bodyRow.id ? bodyRow.id : uuid4();

        if (expandable) {
          if (bodyRow.accordion) {
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

            rowCells.push(<div class="chi-data-table__cell -expandable">
              <button class="chi-button -icon -flat -sm" aria-label="Expand row" data-target={`#row-${rowId}-content`} onClick={(e: Event) => this.toggleRow(rowId.toString())}>
                <div class="chi-button__content">
                  <i class={`
                    chi-icon
                    icon-${this.accordionShown.includes(rowId) ? expansionIcons[iconStyle].expanded
                      : expansionIcons[iconStyle].collapsed}
                    `}></i>
                </div>
              </button>
            </div>);

            if (bodyRow.accordion.template) {
              const template = this.$scopedSlots[bodyRow.accordion.template]!(bodyRow.accordion.payload);

              rowAccordionContent.push(<div class="chi-data-table__row-child">
                {template}
              </div>);
            } else {
              rowAccordionContent.push(<div class="chi-data-table__row-child">
                {bodyRow.accordion.value}
              </div>);
            }
          } else {
            rowCells.push(<div class="chi-data-table__cell -expandable"></div>);
          }
        }

        if (this.data.config.selectable) {
          rowCells.push(<div class="chi-data-table__cell -selectable">
            <div class="chi-checkbox">
              <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba1" />
              <label class="chi-checkbox__label" for="checkbox-ba1">
                <div class="-sr--only">Label</div>
              </label>
            </div>
          </div>);
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
          rowCells.push(<div class={`chi-data-table__cell ${alignment}`} data-label={rowCell.label}>
            {cellData}
          </div>);
        });

        row.push(<div class={`chi-data-table__row ${this.accordionShown.includes(rowId) ? '-active' : ''}`}>
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
    const classes = dataTableClasses(this.data.config.style);
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
