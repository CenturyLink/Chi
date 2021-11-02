import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';
import { UTILITY_CLASSES } from '@/constants/classes';
import { DATA_TABLE_EVENTS } from '@/constants/events';

@Component
export default class ColumnCustomizationAvailableColumns extends Vue {
  @Prop() availableColumns?: DataTableColumn[];

  _ColumnCustomizationContent?: ColumnCustomizationContent;
  _sortedColumns?: DataTableColumn[] = [];

  mounted() {
    const columnCustomizationModalContent = findComponent(this, 'ColumnCustomizationContent');

    if (columnCustomizationModalContent) {
      this._ColumnCustomizationContent = columnCustomizationModalContent as ColumnCustomizationContent;
      (columnCustomizationModalContent as ColumnCustomizationContent)._availableColumnsComponent = this;
    }
  }

  created() {
    this._sortAvailableColumns();
  }

  beforeDestroy() {
    if (this._ColumnCustomizationContent) {
      (this._ColumnCustomizationContent as ColumnCustomizationContent)._availableColumnsComponent = undefined;
    }
  }

  _sortAvailableColumns() {
    this._sortedColumns = [...this.$props.availableColumns];
    this._sortedColumns.sort((a: DataTableColumn, b: DataTableColumn) => {
      const firstValue = a.label.toLowerCase(),
        secondValue = b.label.toLowerCase();

      if (firstValue < secondValue) {
        return -1;
      }
      if (firstValue > secondValue) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    const options = this._sortedColumns?.map((column: DataTableColumn) => {
      return <option value={column.name}>{column.label || column.name}</option>;
    });

    return (
      <div>
        <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD}>Available Columns</div>
        <select
          class={`chi-select available-columns`}
          multiple
          ref="select"
          onchange={() => this.$emit(DATA_TABLE_EVENTS.AVAILABLE_COLUMNS_SELECTED)}>
          {options}
        </select>
      </div>
    );
  }
}
