<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    template(#example)
      .chi-form__item
        label(class="chi-label", for="range01") Range label
        input(class="chi-range-slider", id="range01", type="range", ref="range")
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
export default class Base extends Vue {
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
  <label class="chi-label" for="range01">Range label</label>
  <input class="chi-range-slider" type="range" id="range01">
</div>

<script>chi.rangeSlider(document.getElementById('range01'));<\/script>`,
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
