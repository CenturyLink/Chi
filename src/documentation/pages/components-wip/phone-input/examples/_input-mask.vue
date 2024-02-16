<template lang="pug">
<ComponentExample title="Input Mask" id="input-mask" :tabs="exampleTabs">
  template(#example-description)
  p.-text
    | Use the <code>input-mask</code> boolean attribute to allow users to enter only digits in the phone input.
  template(#example)
    div(style="max-width: 18rem;")
      chi-label(for="phone-input-mask") Phone Number
      chi-phone-input(id="phone-input-mask" input-mask)
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="phone-input-mask">Phone Number</chi-label>
<chi-phone-input id="phone-input-mask" input-mask></chi-phone-input>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class InputMask extends Vue { }
</script>
