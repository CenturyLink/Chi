<template>
  <div id="tadataTableServerView">
    <h2>Data Table Server Side Pagination</h2>
    <ChiDataTable
      :data="table"
      :config="config"
      ref="dataTable"
      @chiDataSorting="e => sorting(e)"
      @chiPageChange="e => pagination(e)"
      @chiSelectedRowsChange="e => selection(e)"
      @chiRowSelected="e => rowSelected(e)"
      @chiRowDeselected="e => rowDeselected(e)"
    >
      <template #icon="payload">
        <i :class="`chi-icon icon-${payload.icon} -icon--${payload.color}`"></i>
      </template>
      <template #ticketId="payload">
        <TicketPopover :id="payload.id" />
      </template>
      <template #status="payload">
        <div :class="`chi-badge ${payload.status === 'active' ? '-primary' : ''}`">
          <span class="-text--truncate">{{ payload.status }}</span>
        </div>
      </template>
      <template #actions="payload">
        <Actions :id="payload.id" />
      </template>
      <template #accordionContent="payload">
        <div class="chi-alert -success" role="alert">
          <i class="chi-alert__icon chi-icon icon-circle-check"></i>
          <div class="chi-alert__content">
            <p class="chi-alert__text">
              Custom content rendered by the provided template. ID:
              <b>{{ payload.id }}</b>
            </p>
          </div>
        </div>
      </template>
      <template #date="payload">
        {{ `${payload.date.getDate()} ${months[payload.date.getMonth()]} ${payload.date.getFullYear()}` }}
      </template>
      <template #loadingSkeleton>
        <div class="-d--flex -flex--column -w--100">
          <div class="chi-skeleton -w--85 -w-md--75 -w-lg--50"></div>
          <div class="chi-skeleton -xs -w--90 -w-lg--70 -mt--2"></div>
          <div class="chi-skeleton -xs -w--95 -w-lg--80 -mt--1"></div>
          <div class="chi-skeleton -xs -w--55 -w-lg--55 -mt--1"></div>
        </div>
      </template>
    </ChiDataTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataTable from '../../../components/data-table/DataTable';
import Actions from '../DataTableTemplates/example-actions.vue';
import TicketPopover from '../DataTableTemplates/example-popover.vue';
import DataTableToolbar from '../../../components/data-table-toolbar/DataTableToolbar';
import SearchInput from '../../../components/search-input/SearchInput';
import DataTableFilters from '../../../components/data-table-filters/DataTableFilters';
import ColumnCustomization from '../../../components/column-customization/ColumnCustomization';
import { exampleConfig, exampleTableHead, exampleTablePage1, exampleTablePage2 } from './fixtures';
import { DataTablePageChange, DataTableSorting } from '../../../constants/events';
import { DataTableRow } from '../../../constants/types';

@Component({
  components: {
    ChiDataTable: DataTable,
    ChiDataTableToolbar: DataTableToolbar,
    ChiSearchInput: SearchInput,
    ChiDataTableFilters: DataTableFilters,
    ChiColumnCustomization: ColumnCustomization,
    Actions,
    TicketPopover,
  },
  data: () => {
    return {
      config: exampleConfig,
      table: {
        head: exampleTableHead,
        body: exampleTablePage1,
      },
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };
  },
})
export default class DataTableView extends Vue {
  fakeApiCall(page: number) {
    return page === 1 ? exampleTablePage1 : page === 2 ? exampleTablePage2 : null;
  }

  rowSelected(rowData: DataTableRow) {
    console.log('Row selected', rowData);
  }

  rowDeselected(rowData: DataTableRow) {
    console.log('Row deselected', rowData);
  }

  pagination(e: DataTablePageChange) {
    // A fake API call to swap the page respective data provided to the Data Table
    const apiResponsePageData = this.fakeApiCall(e.page);

    this.$data.config = {
      ...this.$data.config,
      pagination: {
        ...this.$data.config.pagination,
        activePage: e.page,
      },
    };
    this.$data.table = {
      ...this.$data.table,
      body: apiResponsePageData,
    };
  }

  sorting(e: DataTableSorting) {
    // Perform custom Server Side sorting based on the column and direction data you receive from data table event
    console.log(e);
  }

  selection(selectedRows: DataTableRow[]) {
    const copiedTableBodyData = [...this.$data.table.body];
    const flagRowSelection = (levelData: DataTableRow[], id: string, action: 'select' | 'deselect') => {
      const dataRow = levelData.find((row: DataTableRow) => row.id === id);

      if (dataRow) {
        const nestedRows =
          dataRow.nestedContent && dataRow.nestedContent.table && dataRow.nestedContent.table.data
            ? dataRow.nestedContent.table.data
            : undefined;

        dataRow.selected = action === 'select';

        if (nestedRows) {
          dataRow.nestedContent.table.data.forEach((subRow: DataTableRow) =>
            flagRowSelection(nestedRows, subRow.id, action)
          );
        }
      }
    };

    copiedTableBodyData.forEach((row: DataTableRow) => {
      const isSelected = selectedRows?.some((selectedRow: DataTableRow) => selectedRow.id === row.id);

      flagRowSelection(copiedTableBodyData, row.id, isSelected ? 'select' : 'deselect');
    });
    this.$data.table = {
      ...this.$data.table,
      body: copiedTableBodyData,
    };
  }
}
</script>

<style lang="scss"></style>
