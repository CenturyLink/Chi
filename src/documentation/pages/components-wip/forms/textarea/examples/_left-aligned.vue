<template lang="pug">
  <ComponentExample titleSize="h4" title="Left Aligned" id="left-aligned" :tabs="exampleTabs">
    template(#example)
      .chi-grid
        .chi-col.-w--12.-w-sm--8.-w-md--6
          .chi-form__item
            chi-label(for="example__icon-left") Label
            chi-textarea(id="example__icon-left", icon-left="map-marker", icon-left-color="muted") Sample text
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
  <chi-label for="example__icon-left">Label</chi-label>
  <chi-textarea id="example__icon-left" icon-left="map-marker" icon-left-color="muted">Sample text</chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left">Label</label>
  <div class="chi-input__wrapper -icon--left">
    <textarea class="chi-input" id="example__icon-left">Sample text</textarea>
    <i class="chi-icon icon-map-marker -icon--muted" aria-hidden="true"></i>
  </div>
</div>`,
      },
    };
  },
})
export default class LeftAligned extends Vue {}
</script>
