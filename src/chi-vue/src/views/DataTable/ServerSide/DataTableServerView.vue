<template>
  <h2 class="-mt--10">Data Table Server Side Pagination</h2>
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
    @chiRowClick="(e) => chiRowClick(e)"
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
    <template #accordionContent="payload">
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
    <template v-slot:bulk-actions>
      <DataTableBulkActions uuid="example-server-side-uuid" :selectedRows="selectedFirstLevelRow.length">
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DataTable from '../../../components/data-table/DataTable';
import { exampleConfig, exampleTableHead, exampleTablePage1, exampleTablePage2 } from './fixtures';
import DataTableBulkActions from '@/components/data-table-bulk-actions/DataTableBulkActions';
import ExamplePopover from '../DataTableTemplates/example-popover.vue';
import { DataTableRow } from '@/constants/types';
import { DataTableSorting } from '@/constants/events';

const config = ref(exampleConfig);
const table = ref({
  head: exampleTableHead,
  body: exampleTablePage1,
});
const months = ref([
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
]);
const selectedFirstLevelRow = ref<DataTableRow[]>([]);

const mockApiCall = (page: number) => {
  return page === 1 ? exampleTablePage1 : page === 2 ? exampleTablePage2 : null;
};

const chiRowSelected = (rowData: DataTableRow) => {
  selectedFirstLevelRow.value.push(rowData);
  console.log('chiRowSelected', rowData);
};

const chiRowDeselected = (rowData: DataTableRow) => {
  const indexOfRow = selectedFirstLevelRow.value.findIndex((row: DataTableRow) => row.rowId === rowData.rowId);

  selectedFirstLevelRow.value.splice(indexOfRow, 1);
  console.log('chiRowDeselected', rowData);
};

const chiPageChange = (e) => {
  // A mock API call to swap the page respective data provided to the Data Table
  const apiResponsePageData = mockApiCall(e.page) as any;

  config.value = {
    ...config.value,
    pagination: {
      ...config.value.pagination,
      activePage: e.page,
    },
  };
  table.value = {
    ...table.value,
    body: apiResponsePageData,
  };
};

const chiDataSorting = (e: DataTableSorting) => {
  // Perform custom Server Side sorting based on the column and direction data you receive from data table event
  console.log('chiDataSorting', e);
};

const chiSelectAll = (e: DataTableRow[]) => {
  console.log('chiSelectAll', e);
};

const chiDeselectAll = (e: DataTableRow[]) => {
  console.log('chiDeselectAll', e);
};

const chiRowClick = (e) => {
  console.log('chiRowClick', e);
};

const chiSelectedRowsChange = (selectedRows: DataTableRow[]) => {
  const copiedTableBodyData = [...table.value.body];
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

  table.value = {
    ...table.value,
    body: copiedTableBodyData,
  };

  console.log('chiSelectedRowsChange', selectedRows);
};
</script>
