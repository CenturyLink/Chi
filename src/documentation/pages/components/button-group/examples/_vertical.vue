<template lang="pug">
  <ComponentExample titleSize="h4" title="Vertical" id="vertical" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | To render a series of buttons vertically, apply the class modifier <code>-vertical</code>.
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-button-group -vertical">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`,
      },
    };
  },
})
export default class Vertical extends Vue {}
</script>
