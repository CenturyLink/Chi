<template lang="pug">
  <ComponentExample title="Results Label" id="results_label_lumen_centurylink" :tabs="exampleTabs" padding="-p--0">
    p.-text(slot="example-description")
      | Add a label to indicate the total number of results.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12
        .-p--3
          <chi-pagination pages="12" current-page="3" results="240"></chi-pagination>
      .chi-col.-w--12
        .-p--3.-bg--black
          <chi-pagination pages="12" current-page="3" results="240" inverse></chi-pagination>
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
        webcomponent: `<!-- For light backgrounds -->
<chi-pagination pages="12" current-page="3" results="240"></chi-pagination>

<!-- For light backgrounds -->
<chi-pagination pages="12" current-page="3" results="240" inverse></chi-pagination>`,
        htmlblueprint: `<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start">
      <div class="chi-pagination__results">
        <span class="chi-pagination__label">240 Results</span>
      </div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
          <div class="chi-button -flat" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- For dark backgrounds -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start">
        <div class="chi-pagination__results">
          <span class="chi-pagination__label">240 Results</span>
        </div>
      </div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
          <div class="chi-button -flat -light" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat -light" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,
        vue: `<!-- For light backgrounds -->
<ChiPagination :pages="12" :currentPage="3" :results="240" />

<!-- For light backgrounds -->
<ChiPagination :pages="12" :currentPage="3" :results="240" :inverse="true" />`
      }
    };
  }
})
export default class ResultsLabelLumenCenturylink extends Vue {}
</script>
