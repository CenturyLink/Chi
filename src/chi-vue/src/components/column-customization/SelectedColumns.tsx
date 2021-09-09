import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import './column-customization.scss';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';
import { UTILITY_CLASSES } from '@/constants/classes';

@Component
export default class ColumnCustomizationSelectedColumns extends Vue {
  @Prop() standardColumns?: DataTableColumn[];
  @Prop() handleSelectColumn?: (column: DataTableColumn) => void;

  _ColumnCustomizationContent?: ColumnCustomizationContent;

  mounted() {
    const columnCustomizationModalContent = findComponent(this, 'ColumnCustomizationContent');

    if (columnCustomizationModalContent) {
      this._ColumnCustomizationContent = columnCustomizationModalContent as ColumnCustomizationContent;
      (columnCustomizationModalContent as ColumnCustomizationContent)._selectedColumnsComponent = this;
    }
  }

  _generateOptions(data: DataTableColumn[]) {
    return data?.map((column: DataTableColumn) => {
      return (
        <option
          onClick={() => {
            this._triggerSelectRowState(column);
          }}
          value={column.name}
          class={column.locked ? '-locked' : ''}>
          {column.label || column.name}
        </option>
      );
    });
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
    const standardOptions = this.$props.standardColumns ? this._generateOptions(this.$props.standardColumns) : null;

    return (
      <div>
        <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD}>Selected columns</div>
        <select class={`chi-select selected-columns ${UTILITY_CLASSES.SIZING.W100}`} ref="select" multiple>
          {standardOptions}
        </select>
      </div>
    );
  }
}
