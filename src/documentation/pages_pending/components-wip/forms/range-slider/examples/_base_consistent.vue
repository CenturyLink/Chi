<template lang="pug">
  <ComponentExample title="Base" id="base-consistent" :tabs="exampleTabs">
    template(#example)
      .chi-form__item
        label(class="chi-label", for="range04") Range label
        .chi-input__wrapper
          input(class="chi-range-slider", id="range04", type="range", ref="range")
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

declare const chi: any;

@NuxtComponent({})
export default class BaseConsistent extends Vue {
  exampleTabs = [
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
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="range04">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" id="range04">
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range04'));<\/script>`,
  }
  rangeSlider: any;

  mounted() {
    this.rangeSlider = chi.rangeSlider(this.$refs.range as HTMLElement);
  }

  beforeDestroy() {
    this.rangeSlider.dispose();
  }
}
</script>
