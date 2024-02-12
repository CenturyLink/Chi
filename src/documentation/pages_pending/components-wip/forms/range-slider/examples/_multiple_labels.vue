<template lang="pug">
  <ComponentExample title="Multiple Labels" id="multiple-labels" :tabs="exampleTabs">
    template(#example)
      .chi-form__item
        label(class="chi-label", for="range03") Range label
        .chi-input__wrapper.-d--flex
          span.-text.-mr--2 200GB
          input(type="range", id="range03", class="chi-range-slider", ref="range")
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
export default class MultipleLabels extends Vue {
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
  <label class="chi-label" for="range03">Range label</label>
  <div class="chi-input__wrapper -d--flex">
    <span class="-text">200GB</span>
    <input class="chi-range-slider -mx--2" type="range" id="range03">
    <span class="-text">5TB</span>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range03'));<\/script>`,
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
