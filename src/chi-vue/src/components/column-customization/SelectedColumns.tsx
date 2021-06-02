import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableColumn } from '@/constants/types';
import './column-customization.scss';

@Component
export default class ColumnCustomizationSelectedColumns extends Vue {
  @Prop() data?: DataTableColumn[];

  render() {
    const options: [] = this.$props.data.map((column: DataTableColumn) => {
      return <option class={column.locked ? '-locked' : ''}>{column.label || column.name}</option>;
    });

    return (
      <div>
        <div class="-text--bold">Selected columns</div>
        <select name="" id="" multiple style="height: 200px; width: 100%;">
          {options}
        </select>
      </div>
    );
  }
}
