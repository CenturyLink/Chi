<template lang="pug">
  <ComponentExample title="First and Last page buttons" id="compact_first_last_page_buttons_lumen_centurylink" :tabs="exampleTabs" padding="-p--0" titleSize="h4">
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-w-md--6
        .-p--3
          <chi-pagination pages="3" current-page="2" compact="compact" page-jumper first-last></chi-pagination>
      .chi-col.-w--12.-w-md--6
        .-p--3.-bg--black
          <chi-pagination pages="3" current-page="2" compact page-jumper first-last inverse></chi-pagination>
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
<chi-pagination pages="3" current-page="2" compact="compact" page-jumper first-last></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="3" current-page="2" compact page-jumper first-last inverse></chi-pagination>`,
        htmlblueprint: `<!-- For light backgrounds -->
<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat" aria-label="First page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-page-first" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__label">
        <strong>2</strong>
        <span>of</span>
        <strong>3</strong>
      </div>
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -icon -flat" aria-label="Last page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-page-last" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- For dark backgrounds -->
<nav class="chi-pagination -compact -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__jumper">
        <input type="text" class="chi-input" id="compact-jumper-input-2" aria-label="Page 2" value="2">
        <div class="chi-pagination__label">
          <strong>2</strong>
          <span>of</span>
          <strong>3</strong>
        </div>
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -icon -flat -light" aria-label="Last page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-page-last" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,
        vue: `<!-- For light backgrounds -->
<ChiPagination :pages="3" :currentPage="2" :compact="true" :pageJumper="true" :firstLast="true" />

<!-- For dark backgrounds -->
<ChiPagination :pages="3" :currentPage="2" :compact="true" :pageJumper="true" :firstLast="true" :inverse="true" />`
      }
    };
  }
})
export default class CompactFirstLastPageButtonsLumenCenturylink extends Vue {}
</script>