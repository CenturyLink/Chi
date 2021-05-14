import { Component, Prop, Vue } from 'vue-property-decorator';
import { findComponent } from '@/utils/utils';

@Component
export default class DataTableViews extends Vue {
  // eslint-disable-next-line
  @Prop() viewsData?: any;

  mounted() {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

    if (dataTableToolbarComponent) {
      // eslint-disable-next-line
      // @ts-ignore
      dataTableToolbarComponent._views = this;
    }
  }

  viewsChange(ev: Event) {
    this.$emit('chiViewsChange', ev);
  }

  render() {
    return (
      <div class="chi-data-table__views">
        <div class="chi-form__item" ref="views">
          <select class="chi-select -lg" onChange={(ev: Event) => this.viewsChange(ev)}>
            <option value="">- Views -</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
    );
  }
}
