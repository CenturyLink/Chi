<template lang="pug">
<ComponentExample title="Radio buttons as range slider" id="radio-slider" :tabs="exampleTabs">
  template(#example-description)
    .p-text(class="-mb--3 -text")
      | Enable range sliders to function like radio buttons.
  template(#example)
    .chi-form__item
      label(class="chi-label", for="range07") Range label
      .chi-input__wrapper
        input(class="chi-range-slider", id="range07" type="range", min="0", max="4", step="1", ref="range")
        .chi-input__tick-bar
          div(v-for="range in rangeLabel")
            div
            .chi-input__tick
            .chi-input__tick-label {{ range }}
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
export default class RadioSlider extends Vue {
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
  rangeLabel: ['Monthly', '1 year', '2 years', '3 years', '> 3 years']
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="range07">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" min="0" max="4" step="1" id="range07">
    <div class="chi-input__tick-bar">
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">Monthly</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">1 year</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">2 years</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">3 years</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">&gt; 3 years</div>
      </div>
    </div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range07'));<\/script>`,
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
