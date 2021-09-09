import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';
import { UTILITY_CLASSES } from '@/constants/classes';

@Component
export default class ColumnCustomizationAvailableColumns extends Vue {
  @Prop() availableColumns?: DataTableColumn[];
  @Prop() handleSelectColumn?: (column: DataTableColumn) => void;

  _ColumnCustomizationContent?: ColumnCustomizationContent;

  mounted() {
    const columnCustomizationModalContent = findComponent(this, 'ColumnCustomizationContent');

    if (columnCustomizationModalContent) {
      this._ColumnCustomizationContent = columnCustomizationModalContent as ColumnCustomizationContent;
      (columnCustomizationModalContent as ColumnCustomizationContent)._availableColumnsComponent = this;
    }
  }

  beforeDestroy() {
    if (this._ColumnCustomizationContent) {
      (this._ColumnCustomizationContent as ColumnCustomizationContent)._availableColumnsComponent = undefined;
    }
  }

  _triggerSelectRowState(column: DataTableColumn) {
    if (this.handleSelectColumn) {
      this.handleSelectColumn(column);
    }
  }

  render() {
    const options: [] = this.$props.availableColumns.map((column: DataTableColumn) => {
      return (
        <option
          onClick={() => {
            this._triggerSelectRowState(column);
          }}
          value={column.name}>
          {column.label || column.name}
        </option>
      );
    });

    return (
      <div class="-flex--grow1">
        <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD}>Available columns</div>
        <select class={`chi-select available-columns ${UTILITY_CLASSES.SIZING.W100}`} multiple ref="select">
          {options}
        </select>
      </div>
    );
  }
}
