import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class DataCell extends Vue {
  @Prop() label!: boolean;
  @Prop({default: 'left'}) align?: string;

  render() {
    let cellAlign;

    if (this.align) {
      switch(this.align) {
        case 'left':
          cellAlign = '-justify-content-md--start';
          break;
        case 'center':
          cellAlign = '-justify-content-md--center';
          break;
        case 'right':
          cellAlign = '-justify-content-md--end';
          break;
      }
    }

    return (<div class={`chi-data-table__cell ${cellAlign}`} data-label={this.label}>
      {this.$slots.default}
    </div>);
  }
}
