<template lang="pug">
  <ComponentExample titleSize="h2" title="Uppercase" id="uppercase-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Uppercase buttons style button text with <code>text-transform: uppercase;</code>
      | to further emphasize button text labels and distinguish them from surrounding content.
      span.-d--block.-mt--2
        | <strong>Note:</strong> Uppercase styled text can cause rendering issues in certain locales.
    .-d--flex(slot="example")
      .-pr--2
        button(class=`chi-button -uppercase`) Button
      .-pr--2
        button(class=`chi-button -primary -uppercase`) Button
      .-pr--2
        button(class=`chi-button -outline -primary -uppercase`) Button
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
        webcomponent: `<chi-button uppercase>Button</chi-button>
<chi-button color="primary" uppercase>Button</chi-button>
<chi-button color="primary" variant="outline" uppercase>Button</chi-button>`,
      htmlblueprint: `<button class="chi-button -uppercase">Button</button>
<button class="chi-button -primary -uppercase">Button</button>
<button class="chi-button -primary -outline -uppercase">Button</button>`,
      },
    };
  },
})
export default class UppercaseLumenCenturyLink extends Vue {}
</script>
