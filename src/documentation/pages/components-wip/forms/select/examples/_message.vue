<template lang="pug">
<ComponentExample title="Message" id="message" :tabs="exampleTabs">
  template(#example-description)
    p.-text Add a message below a select to store descriptions, validation feedback, and other helpful information.
  template(#example)
    .chi-form__item(style="max-width:20rem")
      label(class="chi-label" for="example-me1") Label
      select(class="chi-select" id="example-me1")
        option(value="") - Select -
        option Option 1
        option Option 2
        option Option 3
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example-me1">Label</label>
  <select class="chi-select" id="example-me1">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status">Optional helper message</div>
</div>`,
      },
    };
  },
})
export default class Message extends Vue { }
</script>
