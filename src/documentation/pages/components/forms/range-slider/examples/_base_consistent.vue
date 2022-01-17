<template lang="pug">
  <ComponentExample title="Base" id="base-consistent" padding="-p--0" :tabs="exampleTabs">
    .-p--3(slot="example")
      .chi-form__item
        label(class="chi-label", for="range04") Range label
        .chi-input__wrapper
          input(class="chi-range-slider", type="range", id="range04")
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
  <label class="chi-label" for="range04">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" id="range04">
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range04'));<\/script>`,
      },
    };
  },
})
export default class BaseConsistent extends Vue {}
</script>
