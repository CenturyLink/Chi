<template lang="pug">
  <ComponentExample title="Text" id="text" :tabs="exampleTabs" padding="-p--2">
    template(#example-description)
      p.-text
        | The <code>text</code> attribute is required and its value contains the text that the user wants to copy. Click on the button to copy the text into the clipboard. 
    template(#example)
      span.-text
        | This is an example text
      chi-copy-text(text="This is an example text")
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Text extends Vue {
  exampleTabs = [
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
  ];
  codeSnippets = {
    webcomponent: `<chi-copy-text text="This is an example text"></chi-copy-text>`,
    htmlblueprint: ``,
  };
}
</script>
