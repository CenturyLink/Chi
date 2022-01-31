<template lang="pug">
  <ComponentExample title="Consistent rendering in WebKit browsers" id="radio-consistent" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      label(class="chi-label", id="range-label", for="range09") Range label
      .chi-input__wrapper
        input(class="chi-range-slider", type="range", min="0", max="4", step="1", ref="range")
        .chi-input__tick-bar
          div(v-for="range in rangeLabel")
            div
            .chi-input__tick
            .chi-input__tick-label {{ range }}
        .chi-input__progress
        .chi-input__thumb
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      rangeLabel: ['Monthly', '1 year', '2 years', '3 years', '> 3 years'],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="range09">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" min="0" max="4" step="1" id="range09">
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
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range09'));<\/script>`,
      },
    };
  },
})
export default class RadioConsistent extends Vue {
  mounted() {
    chi.rangeSlider(this.$refs.range);
  }
}
</script>
