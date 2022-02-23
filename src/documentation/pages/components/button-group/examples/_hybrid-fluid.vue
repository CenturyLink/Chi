<template lang="pug">
  <ComponentExample id="hybrid-fluid" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Hybrid buttons also support fluid rendering.
    .div(slot="example")
      .-d--flex
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
export default class HybridFluid extends Vue {}
</script>
