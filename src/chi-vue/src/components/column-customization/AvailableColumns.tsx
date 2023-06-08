import { Prop } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';
import { UTILITY_CLASSES } from '@/constants/classes';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class ColumnCustomizationAvailableColumns extends Vue {
  @Prop() availableColumns!: DataTableColumn[];

  sortedColumns?: DataTableColumn[] = [];

  _ColumnCustomizationContent?: ColumnCustomizationContent;

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

  beforeUnmount() {
    if (this._ColumnCustomizationContent) {
      (this._ColumnCustomizationContent as ColumnCustomizationContent)._availableColumnsComponent = undefined;
    }
  }

  _sortAvailableColumns() {
    this.sortedColumns = [...this.availableColumns];
    this.sortedColumns.sort((a: DataTableColumn, b: DataTableColumn) => {
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
    const options = this.sortedColumns?.map((column: DataTableColumn) => {
      return <option value={column.name}>{column.label || column.name}</option>;
    });

    return (
      <div>
        <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD}>Available Columns</div>
        <select class={`chi-select available-columns`} multiple ref="select">
          {options}
        </select>
      </div>
    );
  }
}
