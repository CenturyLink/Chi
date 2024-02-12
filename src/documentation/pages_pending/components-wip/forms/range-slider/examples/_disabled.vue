<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    template(#example)
      .chi-form__item
        label(class="chi-label", for="range02") Range label
        input(class="chi-range-slider", type="range", id="range02" disabled)
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="range02">Range label</label>
  <input class="chi-range-slider" type="range" id="range02" disabled>
</div>

<script>chi.rangeSlider(document.getElementById('range02'));<\/script>`,
      },
    };
  },
})
export default class Disabled extends Vue { }
</script>
