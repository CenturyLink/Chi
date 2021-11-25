import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import './column-customization.scss';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';
import { SELECT_CLASSES, UTILITY_CLASSES } from '@/constants/classes';
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
        <option disabled={column.locked} value={column.name} class={column.locked ? '-locked' : ''}>
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

  render() {
    const standardOptions = this.$props.standardColumns ? this._generateOptions(this.$props.standardColumns) : null;

    return (
      <div>
        <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD}>Selected Columns</div>
        <select
          class={`${SELECT_CLASSES.SELECT} ${SELECT_CLASSES.SELECTED_COLUMNS}`}
          ref="select"
          multiple
          onchange={(e: Event) =>
            this.$emit(
              DATA_TABLE_EVENTS.COLUMNS_SELECTED,
              Array.from((e.target as HTMLSelectElement).selectedOptions).map(
                (option: HTMLOptionElement) => option.value
              )
            )
          }>
          {standardOptions}
        </select>
      </div>
    );
  }
}
