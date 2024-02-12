<template lang="pug">
<ComponentExample title="Message" id="message" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Add a message below a textarea to store descriptions, validation feedback, and other helpful information.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for='example__message') Label
          chi-textarea(id='example__message')
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
  <chi-textarea id="example__message"></chi-textarea>
  <div class="chi-label -status">Optional helper message</div>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <textarea class="chi-input" id="example__message"></textarea>
  <div class="chi-label -status">Optional helper message</div>
</div>`,
      },
    };
  },
})
export default class Message extends Vue {}
</script>
