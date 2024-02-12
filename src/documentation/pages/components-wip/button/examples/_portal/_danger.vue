<template lang="pug">
  <ComponentExample titleSize="h2" title="Danger" id="danger-portal" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | For special cases, such as styling a destructive action in an application (e.g. Delete Account),
      | a Danger button may be used.
    template(#example)
      chi-button.-mr--2(color='danger')= 'Button'
      chi-button.-mr--2(variant='outline', color='danger')= 'Button'
      chi-button(variant='outline', color='danger', size='xs')= 'Button'

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
        webcomponent: `<chi-button color="danger">Button</chi-button>
<chi-button color="danger" variant="outline">Button</chi-button>
<chi-button color="danger" variant="outline" size="xs">Button</chi-button>`,
        htmlblueprint: `<button class="chi-button -danger">Button</button>
<button class="chi-button -danger -outline">Button</button>
<button class="chi-button -danger -outline -xs">Button</button>`,
      },
    };
  },
})
export default class DangerPortal extends Vue {}
</script>
