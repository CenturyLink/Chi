<template lang="pug">
  <ComponentExample title="Checked" id="checked-lumen-centurylink" :tabs="exampleTabs">
    .p-text(slot="example-description" class="-mb--3 -text")
      | Use the <code>checked</code> boolean attribute to set the default value of
      | a toggle switch to true.
    .chi-form__item(slot="example")
      label(class="chi-label", for="range04") Range label
      .chi-input__wrapper
        input(class="chi-range-slider", id="range04", type="range", ref="range")
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
export default class CheckedLumenCenturyLink extends Vue {}
</script>
