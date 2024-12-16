<template lang="pug">
<ComponentExample title="Left + Right Aligned" id="left-right-aligned-portal" :tabs="exampleTabs">
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
          chi-label(for="example__portal-icon-left-right-aligned") Label
          chi-text-input(
            icon-left='search',
            icon-right='check',
            value="Sample Text"
            id="example__portal-icon-left-right-aligned"
          )
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
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
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__portal-icon-left-right-aligned">Label</chi-label>
  <chi-text-input icon-left="search" icon-right="check" value="Sample Text" id="example__portal-icon-left-right-aligned"></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__portal-icon-left-right-aligned">Label</label>
  <div class="chi-input__wrapper -icon--left -icon--right">
    <input type="text" class="chi-input" value="Sample text" id="example__portal-icon-left-right-aligned">
    <i class="chi-icon icon-search" aria-hidden="true"></i>
    <i class="chi-icon icon-check" aria-hidden="true"></i>
  </div>
</div>`,
      },
    };
  },
})
export default class LeftRightAlignedPortal extends Vue {}
</script>
