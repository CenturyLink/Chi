<template lang="pug">
  <ComponentExample title="Empty" id="empty-data-table" :tabs="exampleTabs">
    chi-data-table(:config='config', :data='table' slot="example")
    <Wrapper slot='code-vue'>
      .chi-tab__description
        | Use <code>noResultsMessage</code> config to customize the no results data message
      pre.language-html
        code(v-highlight="codeSnippets.vue" class="html")
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
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
      config: {
        columnResize: true,
        noResultsMessage: 'No matching results',
        style: {
          portal: false,
          noBorder: false,
          bordered: false,
          hover: false,
          size: 'md',
          striped: true,
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
      codeSnippets: {
        vue: `<!-- Vue component -->
<ChiDataTable :config="config" :data="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    noResultsMessage: 'No matching results',
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
</div>`,
      },
    };
  },
})
export default class DataTableEmpty extends Vue { }
</script>
