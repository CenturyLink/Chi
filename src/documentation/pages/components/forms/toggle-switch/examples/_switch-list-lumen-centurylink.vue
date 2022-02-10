<template lang="pug">
  <ComponentExample title="Switch list" id="switch-list-lumen-centurylink" :tabs="exampleTabs">
    .p-text(slot="example-description" class="-mb--3 -text")
      | Switch lists are used to wrap a series of switches in a list.
      | To render, apply the class <code>-list</code> to <code>chi-form__item</code>.
    .chi-form__item(slot="example")
      label(class="chi-label", for="range03") Range label
      .chi-input__wrapper.-d--flex
        span.-text.-mr--2 200GB
        input(type="range", id="range03", class="chi-range-slider", ref="range")
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
  <label class="chi-label" for="range03">Range label</label>
  <div class="chi-input__wrapper -d--flex">
    <span class="-text">200GB</span>
    <input class="chi-range-slider -mx--2" type="range" id="range03">
    <span class="-text">5TB</span>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range03'));<\/script>`,
      },
    };
  },
})
export default class SwitchListLumenCenturyLink extends Vue {}
</script>
