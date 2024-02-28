<template lang="pug">
<ComponentExample title="Inline Inputs" id="inline-inputs" :tabs="exampleTabs">
  template(#example)
    .-d--flex
      .chi-form__item.-inline.-flex--grow1
        chi-label(for='example__inline-input01') Label
        chi-text-input(id='example__inline-input01')
      .chi-form__item.-inline.-flex--grow1
        chi-label(for='example__inline-input02') Label
        chi-text-input(id='example__inline-input02')
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
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
        webcomponent: `<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input01">Label</chi-label>
    <chi-text-input id="example__inline-input01"></chi-text-input>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input02">Label</chi-label>
    <chi-text-input id="example__inline-input02"></chi-text-input>
  </div>
</div>`,
        htmlblueprint: `<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input01">Label</label>
    <input class="chi-input" type="text" id="example__inline-input01">
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input02">Label</label>
    <input class="chi-input" type="text" id="example__inline-input02">
  </div>
</div>`,
      },
    };
  },
})
export default class InlineInputs extends Vue {}
</script>
