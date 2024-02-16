<template lang="pug">
<ComponentExample title="Base" id="base-compact-portal" :tabs="exampleTabs" padding="-p--0" titleSize="h4">
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12
        .-p--3
          chi-pagination(pages="3" current-page="2" size="xs" compact first-last)
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-vue)
    Copy(lang="html" :code="codeSnippets.vue" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'vue',
          label: 'Vue',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
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
        vue: `<ChiPagination :pages="3" :currentPage="2" :compact="true" :firstLast="true" size="xs" />`,
      },
    };
  },
})
export default class CompactBasePortal extends Vue { }
</script>
