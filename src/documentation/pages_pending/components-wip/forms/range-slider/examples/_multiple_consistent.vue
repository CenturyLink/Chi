<template lang="pug">
  <ComponentExample title="Multiple Labels" id="multiple-labels" :tabs="exampleTabs">
    template(#example)
      .chi-form__item
        label(class="chi-label", for="range06") Range label
        .chi-input__wrapper.-d--flex
          span.-text.-mr--2 200GB
          .chi-input__wrapper.-w--100
            input(type="range", id="range06", class="chi-range-slider", ref="range")
            .chi-input__progress
            .chi-input__thumb
          span.-text.-ml--2 5TB
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
export default class MultipleConsistent extends Vue {
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
  <label class="chi-label" for="range06">Range label</label>
  <div class="chi-input__wrapper -d--flex">
    <span class="-text -mr--2">200GB</span>
    <div class="chi-input__wrapper -w--100">
      <input class="chi-range-slider" type="range" id="range06">
      <div class="chi-input__progress"></div>
      <div class="chi-input__thumb"></div>
    </div>
    <span class="-text -ml--2">5TB</span>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range06'));<\/script>`,
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
