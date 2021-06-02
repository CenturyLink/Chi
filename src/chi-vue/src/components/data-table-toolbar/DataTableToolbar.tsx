import { Component, Vue } from 'vue-property-decorator';
import { findComponent } from '@/utils/utils';
import { DATA_TABLE_CLASSES } from '@/constants/classes';
import SearchInput from '../../components/search-input/SearchInput';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import DataTable from '../data-table/DataTable';
import { DATA_TABLE_EVENTS, SEARCH_INPUT_EVENTS } from '@/constants/events';

@Component({})
export default class DataTableToolbar extends Vue {
  _searchComponent?: SearchInput;
  _filters?: DataTableFilters;

  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._toolbarComponent = this;
    }

    if (this._searchComponent) {
      this._searchComponent.$on(SEARCH_INPUT_EVENTS.SEARCH, (ev: Event) => {
        this.$emit(DATA_TABLE_EVENTS.TOOLBAR.SEARCH, ev);
      });
    }

    if (this._filters) {
      this._filters.$on(DATA_TABLE_EVENTS.FILTERS_CHANGE, (ev: Event) => {
        this.$emit(DATA_TABLE_EVENTS.TOOLBAR.FILTERS_CHANGE, ev);
      });
    }
  }

  render() {
    return <div class={DATA_TABLE_CLASSES.TOOLBAR}>{this.$slots.default}</div>;
  }
}
