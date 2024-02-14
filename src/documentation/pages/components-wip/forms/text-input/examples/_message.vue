<template lang="pug">
  <ComponentExample title="Message" id="message" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Add a message below an input to store descriptions, validation feedback, and other helpful information.
    template(#example)
      .chi-grid
        .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
          .chi-form__item
            chi-label(for='example__message') Label
            chi-text-input(id='example__message')
            .chi-label.-status Optional helper message
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
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__message">Label</chi-label>
  <chi-text-input id="example__message"></chi-text-input>
  <div class="chi-label -status">Optional helper message</div>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <input class="chi-input" id="example__message" type="text">
  <div class="chi-label -status">Optional helper message</div>
</div>`,
      },
    };
  },
})
export default class Message extends Vue {}
</script>
