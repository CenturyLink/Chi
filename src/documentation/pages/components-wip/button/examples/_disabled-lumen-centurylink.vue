<template lang="pug">
<ComponentExample titleSize="h2" title="Disabled" id="disabled-lumen-centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Make buttons appear inactive by adding the <code>disabled</code> boolean attribute
      | or <code>-disabled</code> class.
  template(#example)
    chi-button(color='primary' disabled) Button
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
        webcomponent: `<chi-button color="primary" disabled>Button</chi-button>`,
        htmlblueprint: `<!-- Disabled boolean attribute -->
<button class="chi-button -primary" disabled>Button</button>

<!-- Disabled class -->
<button class="chi-button -primary -disabled">Button</button>`,
      },
    };
  },
})
export default class DisabledLumenCenturyLink extends Vue { }
</script>
