import { Component, Vue } from 'vue-property-decorator';
import { findComponent } from '@/utils/utils';
import SearchInput from '../../components/search-input/SearchInput';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import DataTableViews from '@/components/data-table-views/DataTableViews';
import { DATA_TABLE_CLASSES } from '@/constants/classes';

@Component({})
export default class DataTableToolbar extends Vue {
  _searchComponent?: SearchInput;
  _filters?: DataTableFilters;
  _views?: DataTableViews;

  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      // eslint-disable-next-line
      // @ts-ignore
      dataTableComponent._toolbarComponent = this;
    }

    if (this._searchComponent) {
      this._searchComponent.$on('chiSearch', () => {
        this.$emit('chiToolbarSearch');
      });
    }

    if (this._filters) {
      this._filters.$on('chiFiltersChange', (ev: Event) => {
        this.$emit('chiToolbarFiltersChange', ev);
      });
    }

    if (this._views) {
      this._views.$on('chiViewsChange', () => {
        this.$emit('chiToolbarViewsChange');
      });
    }
  }

  render() {
    return <div class={DATA_TABLE_CLASSES.TOOLBAR}>{this.$slots.default}</div>;
  }
}
