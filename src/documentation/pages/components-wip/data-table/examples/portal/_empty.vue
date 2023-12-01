<template lang="pug">
  div
    <TitleAnchor title="Empty" />
    <ComponentExample title="No Results" titleSize="h4" id="no-results-data-table" :tabs="exampleTabs">
      chi-data-table(:config="noResultsConfig" :data='table' slot="example")
      <Wrapper slot='code-vue'>
        .chi-tab__description
          | Use <code>noResultsMessage</code> config to customize the no results data message
        pre.language-html
          code(v-highlight="codeSnippets.noResults.vue" class="html")
      </Wrapper>
      pre.language-html(slot="code-htmlblueprint")
        code(v-highlight="codeSnippets.noResults.htmlblueprint" class="html")
    </ComponentExample>

    <ComponentExample title="No Filters" titleSize="h4" id="no-filters-data-table" :tabs="exampleTabs">
      chi-data-table(:config="noFiltersConfig" :data='table' slot="example")
      <Wrapper slot='code-vue'>
        .chi-tab__description
          | Use <code>noFiltersMessage</code> config to customize the no filters data message
        pre.language-html
          code(v-highlight="codeSnippets.noFilters.vue" class="html")
      </Wrapper>
      pre.language-html(slot="code-htmlblueprint")
        code(v-highlight="codeSnippets.noFilters.htmlblueprint" class="html")
    </ComponentExample>

    <ComponentExample title="Empty Actionable" titleSize="h4" id="empty-actionable-data-table" :tabs="exampleTabs">
      chi-data-table(:config="emptyActionableConfig" :data='table' slot="example")
      pre.language-html(slot='code-vue')
        code(v-highlight="codeSnippets.emptyActionable.vue" class="html")
      pre.language-html(slot="code-htmlblueprint")
        code(v-highlight="codeSnippets.emptyActionable.htmlblueprint" class="html")
    </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: false,
          id: 'webcomponent',
          label: 'Web Component',
          disabled: true
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
        }
      ],
      noResultsConfig: {
        columnResize: true,
        noResultsMessage: 'No matching results',
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
      noFiltersConfig: {
        columnResize: true,
        noFiltersMessage: "Search for or select at least one filter to get results",
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
      emptyActionableConfig: {
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
        emptyActionable: {
          isActionable: true,
        },
      },
      table: {
        head: {
          name: { label: 'Name' },
          id: { label: 'ID' },
          lastLogin: { label: 'Last Login' },
        },
        body: [],
      },
      codeSnippets: {
        noResults: {
          vue: `<!-- Vue component -->
  <ChiDataTable :config="config" :data="table"></ChiDataTable>
  
  <!-- Config and Data -->
  data: {
    config: {
      columnResize: true,
      noResultsMessage: 'No matching results',
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
      body: []
    }
  }`,
          htmlblueprint: `<div class="chi-data-table">
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
      <div class="chi-data-table__row-empty">
        <div>No matching results</div>
      </div>
    </div>
  </div>`
        },
        noFilters: {
          vue: `<!-- Vue component -->
<ChiDataTable :config="config" :data="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    noFiltersMessage: "Search for or select at least one filter to get results",
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
    body: []
  }
}`,
          htmlblueprint: `<div class="chi-data-table">
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
    <div class="chi-data-table__row-empty">
      <i class="-mr--1 chi-icon icon-search"></i>
      Search for or select at least one filter to get results
    </div>
  </div>
</div>`
        },
        emptyActionable: {
          vue: `<!-- Vue component -->
<ChiDataTable :config="config" :data="table"></ChiDataTable>

<!-- Config and Data -->
data: {
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
    emptyActionable: {
      isActionable: true,
    },
  },
  table: {
    head: {
      name: { label: 'Name' },
      id: { label: 'ID' },
      lastLogin: { label: 'Last Login' },
    },
    body: []
  }
}`,
          htmlblueprint: `<div class="chi-data-table">
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
    <div class="chi-data-table__row-empty -actionable">
      <div>
        <i class="chi-icon icon-circle-plus-outline -icon--grey" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>
      </div>
    </div>
  </div>
</div>`
        }
      },
    };
  },
})
export default class DataTableEmpty extends Vue { }
</script>
