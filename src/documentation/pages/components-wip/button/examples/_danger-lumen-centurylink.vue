<template lang="pug">
  <ComponentExample titleSize="h2" title="Danger" id="danger-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | For special cases, such as styling a destructive action in an application (e.g. Delete Account),
      | a Danger button may be used.
    template(#example)
      chi-button.-mr--2(color='danger')= 'Danger'
      chi-button.-mr--2(variant='outline', color='danger')= 'Danger'
      chi-button(variant='flat', color='danger')= 'Danger'

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
        webcomponent: `<chi-button color="danger">Danger</chi-button>
<chi-button color="danger" variant="outline">Danger</chi-button>
<chi-button color="danger" variant="flat">Danger</chi-button>`,
        htmlblueprint: `<button class="chi-button -danger">Danger</button>
<button class="chi-button -danger -outline">Danger</button>
<button class="chi-button -danger -flat">Danger</button>`,
      },
    };
  },
})
export default class DangerLumenCenturyLink extends Vue {}
</script>
