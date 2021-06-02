import { Component, Prop, Vue } from 'vue-property-decorator';
import SelectedColumns from './SelectedColumns';
import AvailableColumns from './AvailableColumns';
import { DataTableColumn } from '@/constants/types';

@Component
export default class ColumnCustomizationContent extends Vue {
  @Prop() columnsData?: DataTableColumn[];

  _availableColumns?: DataTableColumn[] = [];
  _selectedColumns?: DataTableColumn[] = [];

  beforeCreate() {
    this._availableColumns = [];
    this._selectedColumns = [];
  }

  created() {
    this.$props.columnsData.forEach((column: DataTableColumn) => {
      if (column.selected && this._selectedColumns) {
        this._selectedColumns.push(column);
      } else {
        if (this._availableColumns) {
          this._availableColumns.push(column);
        }
      }
    });
  }

  render() {
    return (
      <div class="-d--flex">
        <div class="-flex--grow1">
          <AvailableColumns data={this._availableColumns} />
        </div>
        <div class="-px--1 -d--flex -align-items--center">
          <div class="-d--flex -flex--column">
            <button class="chi-button -icon -flat" aria-label="Button action">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right"></i>
              </div>
            </button>
            <button class="chi-button -icon -flat -mt--1" aria-label="Button action">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="-flex--grow1">
          <SelectedColumns data={this._selectedColumns} />
        </div>
        <div class="-px--1 -d--flex -align-items--center">
          <div class="-d--flex -flex--column">
            <button class="chi-button -icon -flat" aria-label="Button action">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-up"></i>
              </div>
            </button>
            <button class="chi-button -icon -flat -mt--1" aria-label="Button action">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-down"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
