<template>
  <div :class="DATA_TABLE_CLASSES.TOOLBAR">
    <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__header`">
      <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__start`">
        <slot
          name="start"
          :onChiSearch="onChiSearch"
          :onChiFiltersChange="onChiFiltersChange"
          :onChiViewsChange="onChiViewsChange"
        />
      </div>
      <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__end`"></div>
      <slot name="end" :onChiColumnsChange="onChiColumnsChange" :onChiColumnsReset="onChiColumnsReset" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { DATA_TABLE_CLASSES } from '@/constants/classes';
import { findComponent } from '@/utils/utils';
import DataTable from '../components/data-table/DataTable';
import { DATA_TABLE_EVENTS } from '@/constants/events';

@Component({
  data() {
    return {
      DATA_TABLE_CLASSES,
    };
  },
})
export default class DataTableToolbar extends Vue {
  mounted(): void {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._toolbarComponent = this;
    }
  }

  onChiSearch(ev: Event): void {
    this.$emit(DATA_TABLE_EVENTS.TOOLBAR.SEARCH, ev);
  }

  onChiFiltersChange(ev: Event): void {
    this.$emit(DATA_TABLE_EVENTS.TOOLBAR.FILTERS_CHANGE, ev);
  }

  onChiColumnsChange(ev: Event): void {
    this.$emit(DATA_TABLE_EVENTS.TOOLBAR.COLUMNS_CHANGE, ev);
  }

  onChiColumnsReset(ev: Event): void {
    this.$emit(DATA_TABLE_EVENTS.TOOLBAR.COLUMNS_RESET, ev);
  }

  onChiViewsChange(ev: Event): void {
    this.$emit(DATA_TABLE_EVENTS.TOOLBAR.VIEWS_CHANGE, ev);
  }
}
</script>
