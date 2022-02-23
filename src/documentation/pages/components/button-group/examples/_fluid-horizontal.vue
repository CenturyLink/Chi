<template lang="pug">
  <ComponentExample titleSize="h4" title="Horizontal" id="fluid-horizontal" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      .-d--flex
        .-pr--2
          chi-button(color='primary' disabled) Button
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
        webcomponent: `<chi-button color="primary" disabled>Button</chi-button>`,
        htmlblueprint: `<!-- Disabled boolean attribute -->
<button class="chi-button -primary" disabled>Button</button>

<!-- Disabled class -->
<button class="chi-button -primary -disabled">Button</button>`,
      },
    };
  },
})
export default class FluidHorizontal extends Vue {}
</script>
