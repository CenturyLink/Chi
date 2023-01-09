<template lang="pug">
  <ComponentExample titleSize="h4" title="Horizontal" id="fluid-horizontal" :tabs="exampleTabs">
    .chi-button-group.-fluid(slot="example")
      button(class=`chi-button` v-for="item in Array(3).fill(0)") Button
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
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-button-group -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`,
      },
    };
  },
})
export default class FluidHorizontal extends Vue {}
</script>
