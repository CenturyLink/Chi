import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import './column-customization.scss';
import { findComponent } from '@/utils/utils';
import ColumnCustomizationContent from '@/components/column-customization/ColumnCustomizationModalContent';

@Component
export default class ColumnCustomizationSelectedColumns extends Vue {
  @Prop() data?: DataTableColumn[];

  _lockedColumns?: DataTableColumn[] = [];
  _standardColumns?: DataTableColumn[] = [];

  beforeCreate() {
    this._lockedColumns = [];
    this._standardColumns = [];
  }

  created() {
    this._splitOptions();
  }

  @Watch('data')
  _splitOptions() {
    this._lockedColumns = [];
    this._standardColumns = [];
    this.$props.data.forEach((column: DataTableColumn) => {
      if (column.locked) {
        this._lockedColumns?.push(column);
      } else {
        this._standardColumns?.push(column);
      }
    });
    this.$forceUpdate();
  }

  mounted() {
    const columnCustomizationModalContent = findComponent(this, 'ColumnCustomizationContent');

    if (columnCustomizationModalContent) {
      (columnCustomizationModalContent as ColumnCustomizationContent)._selectedColumnsComponent = this;
    }
  }

  _emitSelectedOptionsChange() {
    this.$emit('selectedOptionsChange', (this.$refs.select as HTMLSelectElement).selectedOptions);
  }

  _moveItem(arr: DataTableColumn[], from: number, to: number) {
    const item = arr.splice(from, 1);

    arr.splice(to, 0, item[0]);
  }

  // _moveDown() {
  //
  // }

  _generateOptions(data: DataTableColumn[]) {
    return data?.map((column: DataTableColumn) => {
      return (
        <option value={column.name} class={column.locked ? '-locked' : ''} disabled={column.locked}>
          {column.label || column.name}
        </option>
      );
    });
  }

  render() {
    const lockedOptions = this._lockedColumns ? this._generateOptions(this._lockedColumns) : null;
    const standardOptions = this._standardColumns ? this._generateOptions(this._standardColumns) : null;

    return (
      <div>
        <div class="-text--bold">Selected columns</div>
        <select
          multiple
          onChange={() => this._emitSelectedOptionsChange()}
          ref="select"
          style="height: 200px; width: 100%;">
          {lockedOptions}
          {standardOptions}
        </select>
      </div>
    );
  }
}
