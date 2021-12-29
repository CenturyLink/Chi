<template lang="pug">
  <ComponentExample title="Base" id="base_compact_portal" :tabs="exampleTabs" padding="-p--0" titleSize="h4">
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .chi-col.-w--12
          .-p--3
            <chi-pagination pages="3" current-page="2" size="xs" compact first-last></chi-pagination>
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
<chi-pagination pages="3" current-page="2" size="xs" compact first-last></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="3" current-page="2" size="xs" compact inverse></chi-pagination>`,
        htmlblueprint: `<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -xs" aria-label="Previous page" type="button">
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
        vue: `<ChiPagination :pages="3" :currentPage="2" :compact="true" :firstLast="true" size="xs" />`
      }
    };
  }
})
export default class Base extends Vue {}
</script>