import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';

@Component
export default class ColumnCustomizationAvailableColumns extends Vue {
  @Prop() data?: DataTableColumn[];

  mounted() {
    const columnCustomizationModalContent = findComponent(this, 'ColumnCustomizationContent');

    if (columnCustomizationModalContent) {
      (columnCustomizationModalContent as ColumnCustomizationContent)._availableColumnsComponent = this;
    }
  }

  _emitAvailableOptionsChange() {
    this.$emit('availableOptionsChange', (this.$refs.select as HTMLSelectElement).selectedOptions);
  }

  _controlButton(icon: string, action: Function) {
    const icons = ['chevron-up', 'chevron-down', 'chevron-left', 'chevron-right'];

    if (icons.includes(icon)) {
      return (
        <button onclick={() => action()} class="chi-button -icon -flat" aria-label="Button action">
          <div class="chi-button__content">
            <i class={`chi-icon icon-${icon}`} />
          </div>
        </button>
      );
    }
    return null;
  }

  render() {
    const options: [] = this.$props.data.map((column: DataTableColumn) => {
      return <option value={column.name}>{column.label || column.name}</option>;
    });

    return (
      <div class="-flex--grow1">
        <div style="height: 200px;">
          <div class="-text--bold">Available columns</div>
          <select
            available-columns
            multiple="multiple"
            onChange={() => this._emitAvailableOptionsChange()}
            ref="select"
            style="height: 200px; width: 100%;">
            {options}
          </select>
        </div>
      </div>
    );
  }
}
