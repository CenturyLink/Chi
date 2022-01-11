<template lang="pug">
  <ComponentExample title="Results Label" id="results_label_portal" :tabs="exampleTabs" padding="-p--0">
    p.-text(slot="example-description")
      | Add a label to indicate the total number of results.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12
        .-p--3
          <chi-pagination pages="12" current-page="3" results="240" size="xs"></chi-pagination>
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
         {
          id: 'vue',
          label: 'Vue'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-pagination pages="12" current-page="3" results="240" size="xs"></chi-pagination>`,
        htmlblueprint: `<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start">
      <div class="chi-pagination__results">
        <span class="chi-pagination__label">240 Results</span>
      </div>
    </div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -xs" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__label">
        <strong>3</strong>
        <span>of</span>
        <strong>12</strong>
      </div>
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -xs" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>`,
        vue: `<ChiPagination :pages="3" :results="240" :currentPage="2" :compact="true" :firstLast="true" size="xs" />`
      }
    };
  }
})
export default class ResultsLabelPortal extends Vue {}
</script>