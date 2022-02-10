<template lang="pug">
  <ComponentExample titleSize="h2" title="Sizes" id="sizes-portal" :tabs="exampleTabs">
    .p-text(slot="example-description" class="-mb--3 -text")
      | Toggle switch supports different sizes: <code>xs</code>, <code>sm</code>.
      | The default size is <code>sm</code>.
    .chi-form__item(slot="example")
      label(class="chi-label", for="range07") Range label
      .chi-input__wrapper
        input(class="chi-range-slider", id="range07" type="range", min="0", max="4", step="1", ref="range")
        .chi-input__tick-bar
          div(v-for="range in rangeLabel")
            div
            .chi-input__tick
            .chi-input__tick-label {{ range }}
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
      rangeLabel: ['Monthly', '1 year', '2 years', '3 years', '> 3 years'],
      codeSnippets: {
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
      },
    };
  },
})
export default class SizesPortal extends Vue {}
</script>
