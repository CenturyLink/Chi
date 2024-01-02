<template>
  <div class="-d--flex -justify-content--between -align-items--baseline">
    <h2>Data Table</h2>
    <chi-button color="primary" @click="changeEmptyActionable(true)">REMOVE ALL DATA</chi-button>
  </div>

  <DataTable
    ref="dataTableClient"
    :dataTableData="table"
    :config="config"
    @chiSelectedRowsChange="(e) => chiSelectedRowsChange(e)"
    @chiPageChange="(e) => chiPageChange(e)"
    @chiPageSizeChange="(e) => chiPageSizeChange(e)"
    @chiDataSorting="(e) => chiDataSorting(e)"
    @chiRowExpanded="(e) => chiRowExpanded(e)"
    @chiRowCollapsed="(e) => chiRowCollapsed(e)"
    @chiRowSelected="(e) => chiRowSelected(e)"
    @chiRowDeselected="(e) => chiRowDeselected(e)"
    @chiSelectAll="(e) => chiSelectAll(e)"
    @chiSelectThisPage="(e) => chiSelectThisPage(e)"
    @chiSelectAllPages="(e) => chiSelectAllPages(e)"
    @chiDeselectAll="(e) => chiDeselectAll(e)"
    @chiDeselectThisPage="(e) => chiDeselectThisPage(e)"
    @chiDeselectAllPages="(e) => chiDeselectAllPages(e)"
    @chiExpandAll="(e) => chiExpandAll(e)"
    @chiCollapseAll="(e) => chiCollapseAll(e)"
    @chiEmptyActionableLink="() => chiEmptyActionableLink()"
  >
    <template v-slot:alertsDesc="payload">
      <i :class="`chi-icon icon-${payload.success.icon} -icon--${payload.success.color}`" aria-hidden="true"></i>
      <br />
      <i :class="`chi-icon icon-${payload.warning.icon} -icon--${payload.warning.color}`" aria-hidden="true"></i>
    </template>
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
    <template v-slot:toolbar>
      <DataTableToolbar
        @chiToolbarFiltersChange="(e) => chiToolbarFiltersChange(e)"
        @chiToolbarSearch="(e) => chiToolbarSearch(e)"
        @chiToolbarColumnsChange="(e) => chiToolbarColumnsChange(e)"
        @chiToolbarColumnsReset="(e) => chiToolbarColumnsReset(e)"
        @chiToolbarViewsChange="(e) => chiToolbarViewsChange(e)"
      >
        <template v-slot:start>
          <SearchInput :portal="true" :dataTableSearch="true" />
          <div class="chi-divider -vertical"></div>
          <DataTableViews :views="toolbar.viewsData" defaultView="view-2" />
          <div class="chi-divider -vertical"></div>
          <DataTableFilters :portal="true" :filtersData="toolbar.filtersData" :customItems="toolbar.customItems">
            <template v-slot:customAdvanced>
              <div class="chi-form__item">
                <chi-label for="input-1">City</chi-label>
                <chi-text-input id="input-1" @chiChange="(e) => chiChangeInputOne(e)"></chi-text-input>
                <chi-label for="input-2">Zip Code</chi-label>
                <chi-text-input id="input-2" @chiChange="(e) => chiChangeInputTwo(e)"></chi-text-input>
              </div>
            </template>
            <template v-slot:customAdvanced2>
              <chi-date-picker @chiDateChange="(e) => chiDateChange(e)" />
            </template>
            <template v-slot:customAdvanced3>
              <chi-time-picker />
            </template>
            <template v-slot:customAdvanced4>
              <chi-number-input />
            </template>
            <template v-slot:customAdvanced5>
              <input type="file" class="chi-file-input" id="file01" aria-label="Choose file" />
              <label for="file01">No file chosen</label>
            </template>
          </DataTableFilters>
        </template>
        <template v-slot:end>
          <div class="chi-toolbar__actions-desktop">
            <DownloadButtonIcon />
            <ColumnCustomization
              @chiColumnsReset="(e) => chiToolbarColumnsReset(e)"
              :columnsData="toolbar.columnsData"
            />
          </div>
          <div :class="`chi-toolbar__actions-mobile`">
            <button
              class="chi-button -portal -icon -primary -flat chi-drawer__trigger"
              data-target="#drawer-2"
              aria-label="Customize columns Open"
            >
              <div class="chi-button__content">
                <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </template>
      </DataTableToolbar>
    </template>
    <template v-slot:loadingSkeleton>
      <div class="-d--flex -flex--column -w--100">
        <div class="chi-skeleton -w--85 -w-md--75 -w-lg--50"></div>
        <div class="chi-skeleton -xs -w--90 -w-lg--70 -mt--2"></div>
        <div class="chi-skeleton -xs -w--95 -w-lg--80 -mt--1"></div>
        <div class="chi-skeleton -xs -w--55 -w-lg--55 -mt--1"></div>
      </div>
    </template>
    <template v-slot:bulk-actions>
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
    <template v-slot:save-view>
      <SaveView :config="saveViewConfig">
        <template v-slot:info-icon>
          <button
            id="chi-save-view__info-trigger"
            class="chi-button -light -icon -flat -xs"
            aria-label="Edit"
            @click="() => toggleInfoPopover()"
          >
            <div class="chi-button__content">
              <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
            </div>
          </button>
        </template>
        <template v-slot:info-popover>
          <chi-popover
            :active.prop="isInfoPopoverActive"
            position="right-start"
            title="Popover title"
            variant="text"
            arrow
            reference="#chi-save-view__info-trigger"
            @chiPopoverHidden="() => (isInfoPopoverActive = false)"
          >
            Lorem ipsum test test
          </chi-popover>
        </template>
        <template v-slot:custom-actions>
          <div class="-d--flex -ml--2">
            <chi-switch id="toggle-save-view" label="Toogle" size="xs"></chi-switch>
          </div>
        </template>
      </SaveView>
    </template>
  </DataTable>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DataTable from '../../../components/data-table/DataTable';
import DownloadButtonIcon from '../DataTableTemplates/example-download.vue';
import DataTableToolbar from '../../../components/data-table-toolbar/DataTableToolbar';
import SearchInput from '../../../components/search-input/SearchInput';
import DataTableFilters from '../../../components/data-table-filters/DataTableFilters';
import { DataTableRow } from '../../../constants/types';
import ColumnCustomization from '../../../components/column-customization/ColumnCustomization';
import { exampleConfig, exampleSaveViewConfig, exampleToolbar, exampleTableHead, exampleTableBody } from './fixtures';
import DataTableViews from '../../../components/data-table-views/DataTableViews';
import SaveView from '../../../components/data-table-save-view/SaveView';
import ExamplePopover from '../DataTableTemplates/example-popover.vue';

const dataTableClient = ref(DataTable);
const config = ref(exampleConfig);
const table = ref({
  head: exampleTableHead,
  body: exampleTableBody,
});
const toolbar = ref(exampleToolbar);
const saveViewConfig = ref(exampleSaveViewConfig);
const isInfoPopoverActive = ref(false);
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

const toggleInfoPopover = () => {
  isInfoPopoverActive.value = !isInfoPopoverActive.value;
};

const changeEmptyActionable = (state: boolean) => {
  config.value = {
    ...config.value,
    emptyActionable: {
      isActionable: state,
    },
  };

  table.value = {
    ...table.value,
    body: state ? [] : exampleTableBody,
  };
};

const chiToolbarColumnsChange = (e) => {
  console.log('chiToolbarColumnsChange', e);
};

const chiToolbarColumnsReset = (e) => {
  console.log('chiToolbarColumnsReset', e);
};

const chiColumnsReset = (e) => {
  console.log('chiColumnsReset', e);
};

const chiSelectedRowsChange = (e) => {
  console.log('chiSelectedRowsChange', e);
};

const chiShowSelectedRowsOnly = (e) => {
  console.log('chiColumnsReset', e);
};

const chiDeselectAll = (e) => {
  console.log('chiDeselectAll', e);
};

const chiDeselectThisPage = (e) => {
  console.log('chiDeselectThisPage', e);
};

const chiDeselectAllPages = (e) => {
  console.log('chiDeselectAllPages', e);
};

const chiSelectAll = (e) => {
  console.log('chiSelectAll', e);
};

const chiSelectThisPage = (e) => {
  console.log('chiSelectThisPage', e);
};

const chiSelectAllPages = (e) => {
  console.log('chiSelectAllPages', e);
};

const chiPageChange = (e) => {
  console.log('chiPageChange', e);
};

const chiPageSizeChange = (e) => {
  console.log('chiPageSizeChange', e);
};

const chiDataSorting = (e) => {
  console.log('chiDataSorting', e);
};

const chiToolbarSearch = (e) => {
  console.log('chiToolbarSearch', e);
};

const chiToolbarFiltersChange = (e) => {
  console.log('chiToolbarFiltersChange', e);
};

const chiToolbarViewsChange = (e) => {
  console.log('chiToolbarViewsChange', e);
};

const chiRowExpanded = (e) => {
  console.log('chiRowExpanded', e);
};

const chiRowCollapsed = (e) => {
  console.log('chiRowCollapsed', e);
};

const chiRowSelected = (rowData: DataTableRow) => {
  console.log('chiRowSelected', rowData);
};

const chiRowDeselected = (rowData: DataTableRow) => {
  console.log('chiRowDeselected', rowData);
};

const chiDateChange = (e) => {
  console.log('chiDateChange', e);
};

const chiChangeInputOne = (e) => {
  console.log('chiChange: Input 1', e);
};

const chiChangeInputTwo = (e) => {
  console.log('chiChange: Input 2', e);
};

const printTable = () => {
  // dataTableClient.value.print('DataTable Client - Print');
};

const chiExpandAll = (e) => {
  console.log('chiExpandAll', e);
};

const chiCollapseAll = (e) => {
  console.log('chiCollapseAll', e);
};

const chiEmptyActionableLink = () => {
  console.log('chiEmptyActionableLink');
  changeEmptyActionable(false);
};
</script>
