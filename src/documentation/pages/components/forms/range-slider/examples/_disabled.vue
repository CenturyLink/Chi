<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      label(class="chi-label", for="range02") Range label
      input(class="chi-range-slider", type="range", id="range02" disabled)
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
  <label class="chi-label" for="range02">Range label</label>
  <input class="chi-range-slider" type="range" id="range02" disabled>
</div>

<script>chi.rangeSlider(document.getElementById('range02'));<\/script>`,
      },
    };
  },
})
export default class Disabled extends Vue {}
</script>
