<template lang="pug">
  <ComponentExample title="Danger" id="danger-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | For special cases, such as styling a destructive action in an application (e.g. Delete Account),
      | a Danger button may be used.
    div(slot="example")
      chi-button.-mr--2(color='danger')= 'Button'
      chi-button.-mr--2(variant='outline', color='danger')= 'Button'
      chi-button(variant='outline', color='danger', size='xs')= 'Button'
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
