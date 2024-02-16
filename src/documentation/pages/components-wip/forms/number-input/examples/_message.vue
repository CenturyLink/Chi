<template lang="pug">
<ComponentExample title="Message" id="message" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Add a message below an input to store descriptions, validation feedback, and other helpful information.
  template(#example)
    .chi-form__item
      chi-label(for="unique-id-me1") Label
      chi-number-input#unique-id-me1(helper-message="Optional helper message.")
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
        webcomponent: `<chi-label for="unique-id-me1">Label</chi-label>
<chi-number-input id="unique-id-me1" helper-message="Optional helper message."></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="unique-id-me1">Label</label>
  <div class="chi-number-input">
    <input id="unique-id-me1" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-me1'));<\/script>`,
      },
    };
  },
})
export default class Message extends Vue { }
</script>
