<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs" padding="-p--0">
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .chi-col.-w--12.-w-md--6
          .-p--3
            p.-text--bold Disabled previous button
            <chi-pagination pages="5" current-page="1"></chi-pagination>
            p.-text--bold Disabled next button
            <chi-pagination pages="5" current-page="5"></chi-pagination>
        .chi-col.-w--12.-w-md--6
          .-p--3.-bg--black
            p.-text--bold.-text--white Disabled previous button
            <chi-pagination pages="5" current-page="1" inverse></chi-pagination>
            p.-text--bold.-text--white Disabled next button
            <chi-pagination chi-pagination pages="5" current-page="5" inverse></chi-pagination>
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        span
          | <code>chi-pagination</code> automatically disables previous / next pages if current page is first or last
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-vue">
      .chi-tab__description
        span
          | <code>ChiPagination</code> automatically disables previous / next pages if current page is first or last
      <pre class="language-html" >
        <code v-highlight="$data.codeSnippets.vue" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        span
          | Add the attribute <code>disabled</code> to any button to render in a disabled state.
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
<chi-pagination pages="5" current-page="1"></chi-pagination>
<chi-pagination pages="5" current-page="5"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="5" current-page="1" inverse></chi-pagination>
<chi-pagination pages="5" current-page="5" inverse></chi-pagination>`,
        htmlblueprint: `<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat" aria-label="Previous page" aria-disabled="true" type="button" disabled>
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -active" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
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
          <button class="chi-button -icon -flat -light -disabled" aria-label="Previous page" aria-disabled="true" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light -active" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
          <button class="chi-button -icon -flat -light" aria-label="Next page">
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
<ChiPagination :pages="5" :currentPage="1" />
<ChiPagination :pages="5" :currentPage="5" />

<!-- For dark backgrounds -->
<ChiPagination :pages="5" :currentPage="1" :inverse="true" />
<ChiPagination :pages="5" :currentPage="5" :inverse="true" />`
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
