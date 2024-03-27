<template lang="pug">
TitleAnchor(title="Empty")
ComponentExample(v-for="dataTable in emptyDataTables" :title="dataTable.title" titleSize="h4" :id="dataTable.id" :key="dataTable.id" :tabs="exampleTabs")
  template(#example)
    ChiDataTable(:config="getConfig(dataTable.config)" :dataTableData='table')
  template(#code-htmlblueprint)
    Copy(lang="html" :code="getHtmlCode(dataTable.config)")
  template(#code-vue)
    .chi-tab__description(v-if="dataTable.description" v-html="dataTable.description")
    Copy(lang="html" :code="getVueCode(dataTable.config)")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

type ConfigType = {
  [key: string]: any;
};

@NuxtComponent({
  data: () => {
    return {
      emptyDataTables: [
        {
          title: 'No Results',
          id: 'no-results-data-table',
          description: 'Use <code>noResultsMessage</code> config to customize the no results data message',
          config: {
            noResultsMessage: 'No matching results',
          },
        },
        {
          title: 'No Filters',
          id: 'no-filters-data-table',
          description: 'Use <code>noFiltersMessage</code> config to customize the no filters data message.',
          config: {
            noFiltersMessage: 'Search for or select at least one filter to get results',
          },
        },
        {
          title: 'Empty Actionable',
          id: 'empty-actionable-data-table',
          description: null,
          config: {
            emptyActionable: {
              isActionable: true,
            },
          },
        },
      ],
      exampleTabs: [
        {
          active: false,
          id: 'webcomponent',
          label: 'Web Component',
          disabled: true,
        },
        {
          active: true,
          id: 'vue',
          label: 'Vue',
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      config: {
        columnResize: true,
        style: {
          portal: false,
          noBorder: false,
          bordered: false,
          hover: false,
          size: 'md',
          striped: false,
        },
        pagination: {
          activePage: 1,
          compact: false,
          firstLast: false,
          pageJumper: true,
        },
        resultsPerPage: 3,
      },
      table: {
        head: {
          name: { label: 'Name' },
          id: { label: 'ID' },
          lastLogin: { label: 'Last Login' },
        },
        body: [],
      },
    };
  },
  methods: {
    getConfig(config: ConfigType) {
      return {
        ...this.config,
        // change noFiltersMessage for noResultsMessage message to show the message without toolbar
        ...(config.noFiltersMessage ? {noResultsMessage: config.noFiltersMessage} : config)
      };
    },
    getTableEmptyRow(config: ConfigType) {
      return config.emptyActionable
        ? `<div>
        <i class="chi-icon icon-circle-plus-outline -icon--grey -lg" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>
      </div>`
      : `<i class="-mr--1 chi-icon icon-search"></i>
      <div>${config.noFiltersMessage || config.noResultsMessage}</div>`
    },
    getVueCode(config: ConfigType) {
      return `<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,${config.noFiltersMessage ? `\n    noFiltersMessage: '${config.noFiltersMessage}',` : ''}${config.noResultsMessage ? `\n    noResultsMessage: '${config.noResultsMessage}',` : ''
        }
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: false,
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },${config.emptyActionable
          ? `\n    emptyActionable: {
      isActionable: true,
    },`
          : ''
        }
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name' },
      id: { label: 'ID' },
      lastLogin: { label: 'Last Login' },
    },
    body: []
  }
}`;
    },
    getHtmlCode(config: ConfigType) {
      return `<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row-empty${config.emptyActionable ? ' -actionable' : ''}">
      ${this.getTableEmptyRow(config)}
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-1">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-1">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-1" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`;
    },
  },
})
export default class DataTableEmpty extends Vue { }
</script>
