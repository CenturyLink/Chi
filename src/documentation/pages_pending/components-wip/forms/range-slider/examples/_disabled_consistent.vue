<template lang="pug">
  <ComponentExample title="Disabled" id="disabled-consistent" :tabs="exampleTabs">
    template(#example)
      .chi-form__item
        label(class="chi-label", for="range05") Range label
        .chi-input__wrapper
          input(class="chi-range-slider", type="range", id="range05", disabled)
          .chi-input__progress
          .chi-input__thumb
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
  <label class="chi-label" for="range05">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" id="range05" disabled>
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range05'));<\/script>`,
      },
    };
  },
})
export default class DisabledConsistent extends Vue {}
</script>
