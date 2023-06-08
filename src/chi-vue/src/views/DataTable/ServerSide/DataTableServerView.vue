<template>
  <div id="dataTableServerView">
    <h2>Data Table Server Side Pagination</h2>
    <DataTable
      ref="dataTableServer"
      :dataTableData="table"
      :config="config"
      @chiDataSorting="(e) => chiDataSorting(e)"
      @chiPageChange="(e) => chiPageChange(e)"
      @chiSelectedRowsChange="(e) => chiSelectedRowsChange(e)"
      @chiRowSelected="(e) => chiRowSelected(e)"
      @chiRowDeselected="(e) => chiRowDeselected(e)"
      @chiSelectAll="(e) => chiSelectAll(e)"
      @chiDeselectAll="(e) => chiDeselectAll(e)"
    >
      <template v-slot:icon="payload">
        <i :class="`chi-icon icon-${payload.icon} -icon--${payload.color}`" aria-hidden="true"></i>
      </template>
      <template v-slot:ticketId="payload">
        <ExamplePopover :id="payload.id" />
      </template>
      <template v-slot:status="payload">
        <div :class="`chi-badge ${payload.status === 'active' ? '-primary' : ''}`">
          <span class="-text--truncate">{{ payload.status }}</span>
        </div>
      </template>
      <template v-slot:actions="payload">
        <ExampleDesktopActions :id="payload.id" />
        <ExampleMobileActions :id="payload.id" />
      </template>
      <template v-slot:accordionContent="payload">
        <div class="chi-alert -success" role="alert">
          <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
          <div class="chi-alert__content">
            <p class="chi-alert__text">
              Custom content rendered by the provided template. ID:
              <strong>{{ payload.id }}</strong>
            </p>
          </div>
        </div>
      </template>
      <template v-slot:date="payload">
        {{ `${payload.date.getDate()} ${months[payload.date.getMonth()]} ${payload.date.getFullYear()}` }}
      </template>
      <template v-slot:bulkActions>
        <DataTableBulkActions uuid="example-server-side-uuid" :selectedRows="selectedFirstLevelRows.length">
          <template v-slot:start>
            <div class="chi-bulk-actions__buttons">
              <div class="chi-bulk-actions__buttons-mobile -z--40">
                <chi-button variant="flat" type="icon" aria-label="Edit">
                  <chi-icon icon="edit"></chi-icon>
                </chi-button>
                <chi-button variant="flat" type="icon" aria-label="Compose">
                  <chi-icon icon="compose"></chi-icon>
                </chi-button>
                <chi-button variant="flat" type="icon" aria-label="Delete">
                  <chi-icon icon="delete"></chi-icon>
                </chi-button>
                <chi-button variant="flat" type="icon" aria-label="Print">
                  <chi-icon icon="print"></chi-icon>
                </chi-button>
              </div>
              <div class="chi-bulk-actions__buttons-desktop">
                <chi-button size="xs" aria-label="Download">
                  <chi-icon icon="arrow-to-bottom"></chi-icon>
                  <span> Download </span>
                </chi-button>
                <chi-button size="xs" aria-label="Compose">
                  <chi-icon icon="arrow-to-bottom"></chi-icon>
                  <span> Compose </span>
                </chi-button>
                <chi-button size="xs" aria-label="Delete">
                  <chi-icon icon="arrow-to-bottom"></chi-icon>
                  <span> Delete </span>
                </chi-button>
                <chi-button size="xs" aria-label="Print">
                  <chi-icon icon="arrow-to-bottom"></chi-icon>
                  <span> Print </span>
                </chi-button>
              </div>
            </div>
          </template>
        </DataTableBulkActions>
      </template>
      <template v-slot:loadingSkeleton>
        <div class="-d--flex -flex--column -w--100">
          <div class="chi-skeleton -w--85 -w-md--75 -w-lg--50"></div>
          <div class="chi-skeleton -xs -w--90 -w-lg--70 -mt--2"></div>
          <div class="chi-skeleton -xs -w--95 -w-lg--80 -mt--1"></div>
          <div class="chi-skeleton -xs -w--55 -w-lg--55 -mt--1"></div>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { DataTableRow } from '@/constants/types';
import { DataTablePageChange, DataTableSorting } from '@/constants/events';
import { exampleConfig, exampleTableHead, exampleTablePage1, exampleTablePage2 } from './fixtures';
import DataTable from '@/components/data-table/DataTable';
import DataTableBulkActions from '@/components/data-table-bulk-actions/DataTableBulkActions';
import ExampleDesktopActions from '../DataTableTemplates/example-desktop-actions.vue';
import ExampleMobileActions from '../DataTableTemplates/example-mobile-actions.vue';
import ExamplePopover from '../DataTableTemplates/example-popover.vue';

@Component({
  components: {
    // Chi Vue Components
    DataTable,
    DataTableBulkActions,
    // Custom Vue components
    ExamplePopover,
    ExampleDesktopActions,
    ExampleMobileActions,
  },
})
export default class DataTableServerView extends Vue {
  config = exampleConfig;
  table = {
    head: exampleTableHead,
    body: exampleTablePage1,
  };
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  selectedFirstLevelRows: DataTableRow[] = [];

  mockApiCall(page: number) {
    return page === 1 ? exampleTablePage1 : page === 2 ? exampleTablePage2 : null;
  }

  chiRowSelected(rowData: DataTableRow) {
    this.selectedFirstLevelRows.push(rowData);
    console.log('chiRowSelected', rowData);
  }

  chiRowDeselected(rowData: DataTableRow) {
    const indexOfRow = this.selectedFirstLevelRows.findIndex((row: DataTableRow) => row.rowId === rowData.rowId);

    this.selectedFirstLevelRows.splice(indexOfRow, 1);
    console.log('chiRowDeselected', rowData);
  }

  chiPageChange(e: DataTablePageChange) {
    // A mock API call to swap the page respective data provided to the Data Table
    const apiResponsePageData = this.mockApiCall(e.page) as any;

    this.config = {
      ...this.config,
      pagination: {
        ...this.config.pagination,
        activePage: e.page,
      },
    };
    this.table = {
      ...this.table,
      body: apiResponsePageData,
    };
  }

  chiDataSorting(e: DataTableSorting) {
    // Perform custom Server Side sorting based on the column and direction data you receive from data table event
    console.log('chiDataSorting', e);
  }

  chiSelectAll(e: DataTableRow[]) {
    console.log('chiSelectAll', e);
  }

  chiDeselectAll(e: DataTableRow[]) {
    console.log('chiDeselectAll', e);
  }

  chiSelectedRowsChange(selectedRows: DataTableRow[]) {
    const copiedTableBodyData = [...this.table.body];
    const flagRowSelection = (levelData: any[], id: string, action: 'select' | 'deselect') => {
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

    copiedTableBodyData.forEach((row: any) => {
      const isSelected = selectedRows?.some((selectedRow: DataTableRow) => selectedRow.id === row.id);

      flagRowSelection(copiedTableBodyData, row.id, isSelected ? 'select' : 'deselect');
    });

    this.table = {
      ...this.table,
      body: copiedTableBodyData,
    };

    console.log('chiSelectedRowsChange', selectedRows);
  }
}
</script>
