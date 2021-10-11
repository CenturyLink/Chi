import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import './column-customization.scss';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';
import { UTILITY_CLASSES } from '@/constants/classes';
import { DATA_TABLE_EVENTS } from '@/constants/events';

@Component
export default class ColumnCustomizationSelectedColumns extends Vue {
  @Prop() standardColumns?: DataTableColumn[];

  _ColumnCustomizationContent?: ColumnCustomizationContent;

  mounted() {
    const columnCustomizationModalContent = findComponent(this, 'ColumnCustomizationContent');

    if (columnCustomizationModalContent) {
      this._ColumnCustomizationContent = columnCustomizationModalContent as ColumnCustomizationContent;
      (columnCustomizationModalContent as ColumnCustomizationContent)._selectedColumnsComponent = this;
    }

    if (this._ColumnCustomizationContent?._preSelection) {
      (this.$refs.select as HTMLSelectElement).value = this._ColumnCustomizationContent._preSelection.value;
    }
  }

  _generateOptions(data: DataTableColumn[]) {
    return data?.map((column: DataTableColumn) => {
      return (
        <option
          disabled={column.locked}
          onClick={() => this._triggerSelectRowState()}
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

  _triggerSelectRowState() {
    this.$emit(DATA_TABLE_EVENTS.TOOLBAR.COLUMNS_SELECTED);
  }

  render() {
    const standardOptions = this.$props.standardColumns ? this._generateOptions(this.$props.standardColumns) : null;

    return (
      <div>
        <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD}>Selected Columns</div>
        <select class={`chi-select selected-columns`} ref="select" multiple>
          {standardOptions}
        </select>
      </div>
    );
  }
}
