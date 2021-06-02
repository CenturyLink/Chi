import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';

@Component
export default class ColumnCustomizationAvailableColumns extends Vue {
  @Prop() data?: DataTableColumn[];

  render() {
    const options: [] = this.$props.data.map((column: DataTableColumn) => {
      return <option>{column.label || column.name}</option>;
    });

    return (
      <div style="height: 200px;">
        <div class="-text--bold">Available columns</div>
        <select name="" id="" multiple="multiple" style="height: 200px; width: 100%;">
          {options}
        </select>
      </div>
    );
  }
}
