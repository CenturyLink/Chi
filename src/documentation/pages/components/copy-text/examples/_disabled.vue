<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs" padding="-p--2">
    template(#example-description)
      p.-text
        | Use the <code>disabled</code> attribute to disable the copy-text button.
    template(#example)
      span.-text
        | This is an example text
      chi-copy-text(text="This is an example text" disabled)
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-copy-text text="This is an example text" disabled></chi-copy-text>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Disabled extends Vue {}
</script>
