<template lang="pug">
<ComponentExample title="Base" id="base-expanded" :tabs="exampleTabs">
  template(#example)
    .chi-form__item
      chi-label(for="example__base-expanded") Label
      chi-number-input(expanded=true)#example__base-expanded
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="example__base-expanded">Label</chi-label>
<chi-number-input expanded id="example__base-expanded"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__base-expanded">Label</label>
  <div class="chi-number-input -expanded">
    <input id="example__base-expanded" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content">
        <i class="chi-icon icon-minus" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content">
        <i class="chi-icon icon-plus" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__base-expanded'));<\/script>`,
      },
    };
  },
})
export default class BaseExpanded extends Vue {}
</script>
