import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class DataRow extends Vue {
  @Prop({ default: false }) active!: boolean;

  constructor() {
    super();
  }

  render() {
    const rowClasses = [
      'chi-data-table__row',
      this.active ? '-active' : null
    ].join(' ');

    return (<div class={rowClasses}>
        {this.$slots.default}
      </div>);
  }
}
