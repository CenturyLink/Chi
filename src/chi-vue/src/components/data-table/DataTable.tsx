import { Component, Prop, Vue } from 'vue-property-decorator';
import DataHead from './DataHead';
import DataBody from './DataBody';
import DataRow from './DataRow';
import DataCell from './DataCell';
import Pagination from '../pagination/pagination';
import { uuid4 } from '../../../../custom-elements/src/utils/utils';

@Component({
})
export default class DataTable extends Vue {
  @Prop() data!: Record<string, any>;

  _uuid!: string;

  created() {
    this._uuid = uuid4();
  }

  mounted() {
    const dataTableComponent = document.getElementById(this._uuid);

    const columnResize = (elem: HTMLElement) => {
      const columnHeaders = elem.querySelectorAll(".chi-data-table__head .chi-data-table__cell");
      let thElm: any;
      let startOffset: any;

      Array.prototype.forEach.call(
        columnHeaders,
        function(th) {
          th.style.position = 'relative';
          const grip = document.createElement('div');
          grip.innerHTML = "&nbsp;";
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
                .querySelectorAll(`.chi-data-table__body .chi-data-table__row .chi-data-table__cell:nth-child(${i + 1})`);
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

    if (dataTableComponent && this.data.config.columnResize) {
      columnResize(dataTableComponent);
    }
  }

  render() {
    const tableHeadCells: any = [];
    let tableBodyRows;
    const styleClasses = [
      this.data.config.style.portal ? '-portal' : null,
      this.data.config.style.bordered ? '-bordered' : null,
      this.data.config.style.noBorder ? '-no-border' : null,
      this.data.config.style.hover ? '-hover' : null,
      this.data.config.style.striped ? '-striped' : null,
      this.data.config.style.size ? `-${this.data.config.style.size}` : null,
    ].join(' ');
    const expandable = this.data.body.find((row: { accordion: any; }) => row.accordion);

    if (this.data.body.length > 0) {
      tableBodyRows = this.data.body.map((bodyRow: { active: boolean, data: string[], accordion: boolean }) => {
        const rowCells: any = [];

        if (expandable) {
          if (bodyRow.accordion) {
            const expandIcon = <i class={`chi-icon icon-${this.data.config.style.portal ? 'plus' : 'chevron-right'}`}></i>;

            rowCells.push(<div class="chi-data-table__cell -expandable">
              <button class="chi-button -icon -flat -sm" aria-label="Expand row">
                <div class="chi-button__content">
                  {expandIcon}
                </div>
              </button>
            </div>);
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
          rowCells.push(<DataCell align={rowCell.align} label={rowCell.label}>{cellData}</DataCell>);
        });
        return <DataRow active={bodyRow.active}>
          {rowCells}
        </DataRow>
      });
    } else {
      const noResultsMessage = this.data.config.noResultsMessage ? this.data.config.noResultsMessage : 'No results found';

      tableBodyRows = <div class="chi-data-table__row-empty">
        <div>{noResultsMessage}</div>
      </div>;
    }

    if (expandable) {
      tableHeadCells.push(<div class="chi-data-table__cell -expandable"></div>);
    }
    if (this.data.config.selectable) {
      tableHeadCells.push(<div class="chi-data-table__cell -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba1" />
          <label class="chi-checkbox__label" for="checkbox-ba1">
            <div class="-sr--only">Label</div>
          </label>
        </div>
      </div>);
    }
    Object.keys(this.data.head).forEach((column: string) => {
      const label = this.data.head[column].label ? this.data.head[column].label : this.data.head[column];

      tableHeadCells.push(<DataCell align={this.data.head[column].align}>{label}</DataCell>);
    });

    return (
      <div class={`chi-data-table ${styleClasses}`} id={this._uuid}>
        <DataHead>
          <DataRow>
            {tableHeadCells}
          </DataRow>
        </DataHead>
        <DataBody>
          {tableBodyRows}
        </DataBody>
        <div class="chi-data-table__footer">
          <Pagination
            compact={this.data.config.style.portal || this.data.config.pagination.compact}
            pages={10}
            currentPage={1}
            results={this.data.body.length}
            pageSize={!this.data.config.style.portal}
            pageJumper={!this.data.config.style.portal} />
        </div>
      </div>);
  }
}
