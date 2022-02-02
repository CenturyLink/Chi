<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      label(class="chi-label", for="range01") Range label
      input(class="chi-range-slider", id="range01", type="range", ref="range")
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
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="range01">Range label</label>
  <input class="chi-range-slider" type="range" id="range01">
</div>

<script>chi.rangeSlider(document.getElementById('range01'));<\/script>`,
      },
    };
  },
})
export default class Base extends Vue {
  mounted() {
    chi.rangeSlider(this.$refs.range);
  }
}
</script>
