<template lang="pug">
    <ComponentExample title="Empty" id="empty-portal-data-table" :tabs="exampleTabs">
      chi-data-table(:config='config', :data='table' slot="example")
      <Wrapper slot='code-vue'>
        .chi-tab__description
          | Use <code>noResultsMessage</code> config to customize the no results data message
        pre.language-html
          code(v-highlight="codeSnippets.vue" class="html")
      </Wrapper>
      pre.language-html(slot="code-htmlblueprint")
        code(v-highlight="codeSnippets.htmlblueprint" class="html")
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
        style: {
          portal: true,
          noBorder: false,
          bordered: false,
          hover: false,
          size: 'md',
          striped: true,
        },
        pagination: {
          activePage: 1,
          compact: true,
          firstLast: true,
          pageJumper: false,
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
      portal: true,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: true,
    },
    pagination: {
      activePage: 1,
      compact: true,
      firstLast: true,
      pageJumper: false,
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
  }
}`,
        htmlblueprint: `<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
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
    </div>
  </div>
</div>`,
      },
    };
  },
})
export default class DataTableEmptyPortal extends Vue { }
</script>
  