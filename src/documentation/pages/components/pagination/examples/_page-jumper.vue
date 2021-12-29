<template lang="pug">
  <ComponentExample title="Page Jumper" id="page_jumper" :tabs="exampleTabs" padding="-p--0">
    p.-text(slot="example-description")
      | Add a page jumper to allow users to jump to a specific page of results.
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .chi-col.-w--12
          .-p--3
            <chi-pagination pages="12" results="240" current-page="3" page-size page-jumper></chi-pagination>
        .chi-col.-w--12
          .-p--3.-bg--black
            <chi-pagination pages="12" results="240" current-page="3" page-size page-jumper inverse></chi-pagination>
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
     <Wrapper slot="code-vue">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.vue" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
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
<chi-pagination pages="12" results="240" current-page="3" page-size page-jumper></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="12" results="240" current-page="3" page-size page-jumper inverse></chi-pagination>`,
        htmlblueprint: `<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start">
      <div class="chi-pagination__results">
        <span class="chi-pagination__label">240 results</span>
      </div>
      <div class="chi-pagination__page-size">
        <select class="chi-input" aria-label="Number of result items per page">
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="80">80</option>
          <option value="all">All</option>
        </select>
        <span class="chi-pagination__label">per page</span>
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
      <div class="chi-pagination__end">
        <div class="chi-pagination__jumper">
          <label class="chi-pagination__label" for="jumper-input-1">Go to page:</label>
          <input class="chi-input" type="text" id="jumper-input-1">
        </div>
      </div>
    </div>
  </nav>

  <!-- For dark backgrounds -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start">
        <div class="chi-pagination__results">
          <span class="chi-pagination__label">240 results</span>
        </div>
        <div class="chi-pagination__page-size">
          <select class="chi-input" aria-label="Number of result items per page">
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="all">All</option>
          </select>
        <span class="chi-pagination__label">per page</span>
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
      <div class="chi-pagination__end">
        <div class="chi-pagination__jumper">
          <label class="chi-pagination__label" for="jumper-input-2">Go to page:</label>
          <input class="chi-input" type="text" id="jumper-input-2">
        </div>
      </div>
    </div>
  </nav>`,
        vue: `<!-- For light backgrounds -->
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :pageJumper="true" />

<!-- For dark backgrounds -->
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :pageJumper="true" />`
      }
    };
  }
})
export default class PageJumper extends Vue {}
</script>