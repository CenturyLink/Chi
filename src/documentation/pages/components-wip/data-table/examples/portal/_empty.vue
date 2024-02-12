<template lang="pug">
<TitleAnchor title="Empty" />
<ComponentExample v-for="dataTable in emptyDataTables" :title="dataTable.title" titleSize="h4" :id="dataTable.id" :key="dataTable.id" :tabs="exampleTabs">
  template(#example)
    chi-data-table(:config="getConfig(dataTable.config)" :data='table')
      template(#code-vue)
        .chi-tab__description(v-if="dataTable.description" v-html="dataTable.description")
        Copy(lang="html" :code="getVueCode(dataTable.config)")

  template(#code-htmlblueprint)

    Copy(lang="html" :code="getHtmlCode(dataTable.config)")
</ComponentExample>
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
          description: 'Use <code>noFiltersMessage</code> config to customize the no filters data message',
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
          portal: true,
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
        ...config,
      };
    },
    getVueCode(config: ConfigType) {
      return `<!-- Vue component -->
<ChiDataTable :config="config" :data="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,${config.noFiltersMessage ? `\n    noFiltersMessage: '${config.noFiltersMessage}',` : ''}${config.noResultsMessage ? `\n    noResultsMessage: '${config.noResultsMessage}',` : ''
        }
    style: {
      portal: true,
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
      ${config.noResultsMessage ? `<div>${config.noResultsMessage}</div>` : ''}${config.noFiltersMessage ? `<i class="-mr--1 chi-icon icon-search"></i>\n      ${config.noFiltersMessage}` : ''
        }${config.emptyActionable
          ? `<i class="chi-icon icon-circle-plus-outline -icon--grey" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>`
          : ''
        }
    </div>
  </div>
</div>`;
    },
  },
})
export default class DataTableEmptyPortal extends Vue { }
</script>
