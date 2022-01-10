<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs" padding="-p--0">
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .chi-col.-w--12.-w-md--6
          .-p--3
            <chi-pagination pages="5" current-page="3"></chi-pagination>
        .chi-col.-w--12.-w-md--6
          .-p--3.-bg--black
            <chi-pagination pages="5" current-page="3" inverse></chi-pagination>
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        span
          | Use the class <code>chi-pagination</code> to render a pagination component.
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
<chi-pagination pages="5" current-page="3"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="5" current-page="3" inverse></chi-pagination>`,
        htmlblueprint: `<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
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
    <div class="chi-pagination__start"></div>
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
        <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,
        vue: `<!-- For light backgrounds -->
<ChiPagination :pages="5" :currentPage="3" />

<!-- For dark backgrounds -->
<ChiPagination :pages="5" :currentPage="3" :inverse="true" />`
      }
    };
  }
})
export default class Base extends Vue {}
</script>