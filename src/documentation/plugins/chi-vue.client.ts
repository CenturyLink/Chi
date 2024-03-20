/**
 * Import all chi-vue components
 */
import * as ChiVueLibrary from '@centurylink/chi-vue';

const components = [
  'ChiPagination',
  'ChiDataTableToolbar',
  'ChiDataTable',
  'ChiDataTableBulkActions',
  'ChiDataTableFilters',
  'ChiDataTableViews',
  'ChiDrawer',
  'ChiSearchInput',
  'ChiTooltip',
  'ChiColumnCustomization',
  'ChiSaveView',
  'ChiExpansionPanel',
];

export default defineNuxtPlugin((nuxtApp) => {
  components.forEach((name) => {
    nuxtApp.vueApp.component(name, ChiVueLibrary[name]);
  });
});
