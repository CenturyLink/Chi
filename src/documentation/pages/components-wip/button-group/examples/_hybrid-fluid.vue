<template lang="pug">
  <ComponentExample :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Hybrid buttons also support fluid rendering.
    .chi-button-group.-fluid(slot="example")
      button(class=`chi-button`) Button
      button(class=`chi-button -icon -no-fluid`, aria-label="Button action")
        .chi-button__content
          i.chi-icon.icon-atom(aria-hidden="true")
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
      htmlblueprint: `<div class="chi-button-group -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button -icon -no-fluid" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`,
      },
    };
  },
})
export default class HybridFluid extends Vue {}
</script>
