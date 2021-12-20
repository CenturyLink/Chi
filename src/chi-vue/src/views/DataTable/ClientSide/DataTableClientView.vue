<template>
  <div id="tadataTableClientView">
    <h2>Data Table</h2>
    <ChiDataTable
      :data="table"
      :config="config"
      @chiSelectedRowsChange="e => this.chiSelectedRowsChange(e)"
      @chiPageChange="e => this.pageChange(e)"
      @chiPageSizeChange="e => this.pageSizeChange(e)"
      @chiDataSorting="e => this.dataSorting(e)"
      @chiRowExpanded="e => this.rowExpanded(e)"
      @chiRowCollapsed="e => this.rowCollapsed(e)"
      @chiRowSelected="e => this.rowSelected(e)"
      @chiRowDeselected="e => this.rowDeselected(e)"
    >
      <template #icon="payload">
        <i :class="`chi-icon icon-${payload.icon} -icon--${payload.color}`" aria-hidden="true"></i>
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
          <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
          <div class="chi-alert__content">
            <p class="chi-alert__text">
              Custom content rendered by the provided template. ID:
              <strong>{{ payload.id }}</strong>
            </p>
          </div>
        </div>
      </template>
      <template #date="payload">
        {{ `${payload.date.getDate()} ${months[payload.date.getMonth()]} ${payload.date.getFullYear()}` }}
      </template>
      <template #toolbar>
        <ChiDataTableToolbar
          @chiToolbarFiltersChange="e => chiToolbarFiltersChange(e)"
          @chiToolbarSearch="e => chiToolbarSearch(e)"
          @chiToolbarColumnsChange="e => chiToolbarColumnsChange(e)"
          @chiToolbarColumnsReset="e => chiToolbarColumnsReset(e)"
          @chiToolbarViewsChange="e => chiToolbarViewsChange(e)"
        >
          <template v-slot:start>
            <ChiSearchInput :portal="true" :dataTableSearch="true" />
            <div class="chi-divider -vertical"></div>
            <ChiDataTableViews :views="toolbar.viewsData" defaultView="view-2" />
            <div class="chi-divider -vertical"></div>
            <ChiDataTableFilters :portal="true" :filtersData="toolbar.filtersData" :customItems="toolbar.customItems">
              <template #customAdvanced>
                <div class="chi-form__item">
                  <chi-label for="input-1">City</chi-label>
                  <chi-text-input id="input-1" @chiChange="e => inputOneChangeHandler(e)"></chi-text-input>
                  <chi-label for="input-2">Zip Code</chi-label>
                  <chi-text-input id="input-2" @chiChange="e => inputTwoChangeHandler(e)"></chi-text-input>
                </div>
              </template>
              <template #customAdvanced2>
                <chi-date-picker @chiDateChange="e => dateChangeHandler(e)" />
              </template>
            </ChiDataTableFilters>
          </template>
          <template v-slot:end>
            <div class="chi-toolbar__actions-desktop">
              <ChiColumnCustomization
                @chiColumnsReset="e => chiToolbarColumnsReset(e)"
                :columnsData="toolbar.columnsData"
              />
            </div>
            <div :class="`chi-toolbar__actions-mobile`">
              <button
                class="chi-button -portal -icon -primary -flat chi-drawer__trigger"
                data-target="#drawer-2"
                aria-label="Column Customization Open"
              >
                <div class="chi-button__content">
                  <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
                </div>
              </button>
            </div>
          </template>
        </ChiDataTableToolbar>
      </template>
      <template #bulkActions>
        <ChiDataTableBulkActions
          :bulkActionConfig="bulkActionConfig"
          @chiShowSelectedOnly="e => chiShowSelectedOnly(e)"
          @chiMobileSelectedAll="e => chiMobileSelectedAll(e)"
          @chiMobileClear="e => chiMobileClear(e)"
        >
        </ChiDataTableBulkActions>
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
import DataTableBulkActions from '../../../components/data-table-bulk-actions/DataTableBulkActions';
import DataTableToolbar from '../../../components/data-table-toolbar/DataTableToolbar';
import SearchInput from '../../../components/search-input/SearchInput';
import DataTableFilters from '../../../components/data-table-filters/DataTableFilters';
import { DataTableRow } from '../../../constants/types';
import ColumnCustomization from '../../../components/column-customization/ColumnCustomization';
import { exampleConfig, exampleToolbar, exampleTableHead, exampleTableBody, bulkActionConfig } from './fixtures';
import DataTableViews from '../../../components/data-table-views/DataTableViews';

const MOCK_API_RESPONSE_DELAY = 5000;

@Component({
  components: {
    ChiDataTable: DataTable,
    ChiDataTableToolbar: DataTableToolbar,
    ChiSearchInput: SearchInput,
    ChiDataTableBulkActions: DataTableBulkActions,
    ChiDataTableFilters: DataTableFilters,
    ChiColumnCustomization: ColumnCustomization,
    Actions,
    TicketPopover,
    ChiDataTableViews: DataTableViews,
  },
  methods: {
    chiToolbarColumnsChange: e => {
      console.log('chiToolbarColumnsChange', e);
    },
    chiToolbarColumnsReset: e => {
      console.log('chiToolbarColumnsReset', e);
    },
    chiColumnsReset: e => {
      console.log('chiColumnsReset', e);
    },
    chiSelectedRowsChange(data) {
      this.$data.bulkActionConfig = {
        ...this.$data.bulkActionConfig,
        showBulkActions: true,
        selectedRow: data,
      };
    },
    chiShowSelectedOnly: e => {
      console.log('chiColumnsReset', e);
    },
    chiMobileSelectedAll: e => {
      console.log('chiMobileSelectedAll', e);
    },
    chiMobileClear: e => {
      console.log('chiMobileClear', e);
    },
    pageChange: e => {
      console.log('chiPageChange', e);
    },
    pageSizeChange: e => {
      console.log('chiPageSizeChange', e);
    },
    dataSorting: e => {
      console.log('chiDataSorting', e);
    },
    chiToolbarSearch: e => {
      console.log('chiToolbarSearch', e);
    },
    chiToolbarFiltersChange: e => {
      console.log('chiToolbarFiltersChange', e);
    },
    chiToolbarViewsChange: e => {
      console.log('chiToolbarViewsChange', e);
    },
    rowExpanded: e => {
      console.log('chiRowExpanded', e);
    },
    rowCollapsed: e => {
      console.log('chiRowCollapsed', e);
    },
    rowSelected(rowData: DataTableRow) {
      console.log('chiRowSelected', rowData);
    },
    rowDeselected(rowData: DataTableRow) {
      console.log('chiRowDeselected', rowData);
    },
    dateChangeHandler: e => {
      console.log('dateChangeHandler', e);
    },
    inputOneChangeHandler: e => {
      console.log('inputOneChangeHandler', e);
    },
    inputTwoChangeHandler: e => {
      console.log('inputTwoChangeHandler', e);
    },
  },
  data: () => {
    return {
      config: exampleConfig,
      toolbar: exampleToolbar,
      table: {
        head: exampleTableHead,
        body: exampleTableBody,
      },
      bulkActionConfig,
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };
  },
})
export default class DataTableView extends Vue {
  mounted() {
    setTimeout(() => {
      // This example is present to demonstrate asynchronous updating of the data

      const newData = [
        { template: 'ticketId', payload: { id: 'NTM000021063' } },
        {
          template: 'icon',
          payload: { icon: 'circle-check', color: 'success' },
        },
        { template: 'status', payload: { status: 'active' } },
        'Colocation',
        0,
        { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
        'SVUJW034781A',
        {
          template: 'actions',
          payload: { id: 'NTM000021063' },
          align: 'right',
        },
      ];
      this.$data.table = {
        ...this.$data.table,
        body: this.$data.table.body.map((row: DataTableRow, index: number) =>
          index === 0
            ? {
                ...row,
                nestedContent: {
                  value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
                },
                data: newData,
              }
            : row
        ),
      };
    }, MOCK_API_RESPONSE_DELAY);
  }
}
</script>

<style lang="scss"></style>
