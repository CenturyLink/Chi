import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';
import { UTILITY_CLASSES } from '@/constants/classes';

@Component
export default class ColumnCustomizationAvailableColumns extends Vue {
  @Prop() availableColumns?: DataTableColumn[];

  mounted() {
    const columnCustomizationModalContent = findComponent(this, 'ColumnCustomizationContent');

    if (columnCustomizationModalContent) {
      (columnCustomizationModalContent as ColumnCustomizationContent)._availableColumnsComponent = this;
    }
  }

  render() {
    const options: [] = this.$props.availableColumns.map((column: DataTableColumn) => {
      return <option value={column.name}>{column.label || column.name}</option>;
    });

    return (
      <div class="-flex--grow1">
        <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD}>Available columns</div>
        <select available-columns multiple ref="select" style="height: 200px;" class="-w--100">
          {options}
        </select>
      </div>
    );
  }
}
