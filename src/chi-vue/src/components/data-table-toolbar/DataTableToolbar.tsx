import { findComponent } from '@/utils/utils';
import { DATA_TABLE_CLASSES } from '@/constants/classes';
import SearchInput from '../../components/search-input/SearchInput';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import DataTableColumns from '@/components/column-customization/ColumnCustomization';
import DataTable from '../data-table/DataTable';
import { DATA_TABLE_EVENTS, SEARCH_INPUT_EVENTS } from '@/constants/events';
import DataTableViews from '../data-table-views/DataTableViews';
import { Component, Vue } from '@/build/vue-wrapper';
import EventBus from '../../utils/EventBus';
import { Emit } from 'vue-property-decorator';

@Component({})
export default class DataTableToolbar extends Vue {
  name = 'DataTableToolbar';

  _searchComponent?: SearchInput;
  _filters?: DataTableFilters;
  _columns?: DataTableColumns;
  _views?: DataTableViews;

  @Emit(DATA_TABLE_EVENTS.TOOLBAR.SEARCH)
  _emitToolbarSearch(value) {
    return value;
  }

  @Emit(DATA_TABLE_EVENTS.TOOLBAR.FILTERS_CHANGE)
  _emitToolbarFiltersChange(filters) {
    return filters;
  }

  @Emit(DATA_TABLE_EVENTS.TOOLBAR.COLUMNS_CHANGE)
  _emitToolbarColumnsChange(columns) {
    return columns;
  }

  @Emit(DATA_TABLE_EVENTS.TOOLBAR.VIEWS_CHANGE)
  _emitToolbarViewsChange(views) {
    return views;
  }

  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._toolbarComponent = this;
    }

    if (this._searchComponent) {
      EventBus.on(SEARCH_INPUT_EVENTS.SEARCH, (searchValue) => this._emitToolbarSearch(searchValue));
    }

    if (this._filters) {
      EventBus.on(DATA_TABLE_EVENTS.FILTERS_CHANGE, (filters) => this._emitToolbarFiltersChange(filters));
    }

    if (this._columns) {
      EventBus.on(DATA_TABLE_EVENTS.COLUMNS_CHANGE, (columns) => this._emitToolbarColumnsChange(columns));
      EventBus.on(DATA_TABLE_EVENTS.COLUMNS_RESET, (columns) => this._emitToolbarColumnsChange(columns));
    }

    if (this._views) {
      EventBus.on(DATA_TABLE_EVENTS.VIEWS_CHANGE, (views) => this._emitToolbarViewsChange(views));
    }
  }

  render() {
    const slots = {
      start: this.$slots.start ? this.$slots.start({}) : null,
      end: this.$slots.end ? this.$slots.end({}) : null,
    };

    return (
      <div class={`${DATA_TABLE_CLASSES.TOOLBAR}`}>
        <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__header`}>
          <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__start`}>{slots.start}</div>
          <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__end`}>{slots.end}</div>
        </div>
      </div>
    );
  }
}
