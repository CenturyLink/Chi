import Vue from 'vue';
import { library } from '@centurylink/chi-vue';

const components = {
  ChiPagination: library.components['ChiPagination'],
  ChiDataTableToolbar: library.components['ChiDataTableToolbar'],
  ChiDataTable: library.components['ChiDataTable'],
  ChiDataTableBulkActions: library.components['ChiDataTableBulkActions'],
  ChiDataTableFilters: library.components['ChiDataTableFilters'],
  ChiDataTableViews: library.components['ChiDataTableViews'],
  ChiDrawer: library.components['ChiDrawer'],
  ChiSearchInput: library.components['ChiSearchInput'],
  ChiTooltip: library.components['ChiTooltip'],
  ChiColumnCustomization: library.components['ChiColumnCustomization'],
  ChiSaveView: library.components['ChiSaveView'],
  ChiExpansionPanel: library.components['ChiExpansionPanel'],
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});

Vue.use(library);
