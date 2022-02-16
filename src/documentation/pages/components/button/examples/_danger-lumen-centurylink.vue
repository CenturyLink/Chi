<template lang="pug">
  <ComponentExample title="Danger" id="danger-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | For special cases, such as styling a destructive action in an application (e.g. Delete Account),
      | a Danger button may be used.
    div(slot="example")
      chi-button.-mr--2(color='danger')= 'Danger'
      chi-button.-mr--2(variant='outline', color='danger')= 'Danger'
      chi-button(variant='flat', color='danger')= 'Danger'
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint',
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
