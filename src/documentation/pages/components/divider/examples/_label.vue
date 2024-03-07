<template lang="pug">
<ComponentExample title="Label" id="label" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Add text to a divider and apply the class <code>-label</code> to include a label.
      | This method is especially useful for login and sign up forms.
      | Label text size can be changed by applying text utility classes such as <code>-text</code>, <code>-text--sm</code>, or <code>-text--lg</code>.
  template(#example)
    .chi-divider.-text.-label or
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Label extends Vue {
  exampleTabs = [
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
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-divider -label">or</div>`,
  };
}
</script>
