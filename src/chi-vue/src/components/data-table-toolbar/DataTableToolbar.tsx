import { Component, Vue } from 'vue-property-decorator';
import { EventBus, findComponent } from '@/utils/utils';
import { DATA_TABLE_CLASSES, PORTAL_CLASS } from '@/constants/classes';
import SearchInput from '../../components/search-input/SearchInput';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import DataTableColumns from '@/components/column-customization/ColumnCustomization';
import DataTable from '../data-table/DataTable';
import { DATA_TABLE_EVENTS, SEARCH_INPUT_EVENTS } from '@/constants/events';
import DataTableViews from '../data-table-views/DataTableViews';

@Component({})
export default class DataTableToolbar extends Vue {
  _searchComponent?: SearchInput;
  _filters?: DataTableFilters;
  _columns?: DataTableColumns;
  _views?: DataTableViews;

  created() {
    EventBus.$on('searchInputMounted', () => {
      if (this._searchComponent) {
        this._searchComponent.$on(SEARCH_INPUT_EVENTS.SEARCH, (ev: Event) => {
          this.$emit(DATA_TABLE_EVENTS.TOOLBAR.SEARCH, ev);
        });
      }
    });
    EventBus.$on('filtersMounted', () => {
      if (this._filters) {
        this._filters.$on(DATA_TABLE_EVENTS.FILTERS_CHANGE, (ev: Event) => {
          this.$emit(DATA_TABLE_EVENTS.TOOLBAR.FILTERS_CHANGE, ev);
        });
      }
    });
    EventBus.$on('columnsMounted', () => {
      if (this._columns) {
        this._columns.$on(DATA_TABLE_EVENTS.COLUMNS_CHANGE, (ev: Event) => {
          this.$emit(DATA_TABLE_EVENTS.TOOLBAR.COLUMNS_CHANGE, ev);
        });
        this._columns.$on(DATA_TABLE_EVENTS.COLUMNS_RESET, (ev: Event) => {
          this.$emit(DATA_TABLE_EVENTS.TOOLBAR.COLUMNS_CHANGE, ev);
        });
      }
    });
    EventBus.$on('viewsMounted', () => {
      if (this._views) {
        this._views.$on(DATA_TABLE_EVENTS.VIEWS_CHANGE, (ev: Event) => {
          this.$emit(DATA_TABLE_EVENTS.TOOLBAR.VIEWS_CHANGE, ev);
        });
      }
    });
  }

  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._toolbarComponent = this;
    }
  }

  render() {
    return (
      <div class={`${DATA_TABLE_CLASSES.TOOLBAR} ${PORTAL_CLASS}`}>
        <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__header`}>
          <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__start`}>{this.$slots.start}</div>
          <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__end`}>{this.$slots.end}</div>
        </div>
      </div>
    );
  }
}
