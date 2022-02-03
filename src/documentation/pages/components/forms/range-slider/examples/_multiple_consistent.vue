<template lang="pug">
  <ComponentExample title="Multiple Labels" id="multiple-labels" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      label(class="chi-label", for="range06") Range label
      .chi-input__wrapper.-d--flex
        span.-text.-mr--2 200GB
        .chi-input__wrapper.-w--100
          input(type="range", id="range06", class="chi-range-slider", ref="range")
          .chi-input__progress
          .chi-input__thumb
        span.-text.-ml--2 5TB
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
      },
    };
  },
})
export default class MultipleConsistent extends Vue {
  rangeSlider: any;

  mounted() {
    chi.rangeSlider(this.$refs.range as HTMLElement);
  }

  beforeDestroy() {
    this.rangeSlider.dispose();
  }
}
</script>
