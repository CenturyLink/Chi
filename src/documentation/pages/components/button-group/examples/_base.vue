<template lang="pug">
  <ComponentExample titleSize="h4" title="Base" id="base" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | To render a button group, wrap a series of buttons in a div and apply the class <code>chi-button-group</code>.
    div(slot="example")
      chi-button(type='close')
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
        webcomponent: `<chi-button type="close"></chi-button>`,
        htmlblueprint: `<button class="chi-button -icon -close" aria-label="Close">
  <div class="chi-button__content">
    <i class="chi-icon icon-x" aria-hidden="true"></i>
  </div>
</button>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
