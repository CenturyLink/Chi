<template lang="pug">
  <ComponentExample title="Disabled" id="radio-disabled" padding="-p--0" :tabs="exampleTabs">
    .-p--3(slot="example")
      .chi-form__item
        label(class="chi-label", for="range08") Range label
        .chi-input__wrapper
          input(class="chi-range-slider", type="range", min="0", max="4", step="1", id="range08", disabled)
          .chi-input__tick-bar
            div
              .chi-input__tick
              .chi-input__tick-label Monthly
            div
              .chi-input__tick
              .chi-input__tick-label 1 year
            div
              .chi-input__tick
              .chi-input__tick-label 2 years
            div
              .chi-input__tick
              .chi-input__tick-label 3 years
            div
              .chi-input__tick
              .chi-input__tick-label > 3 years
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
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="range08">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" min="0" max="4" step="1" id="range08" disabled>
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

<script>chi.rangeSlider(document.getElementById('range08'));<\/script>`,
      },
    };
  },
})
export default class RadioDisabled extends Vue {}
</script>
