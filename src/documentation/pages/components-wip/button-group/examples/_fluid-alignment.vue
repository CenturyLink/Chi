<template lang="pug">
  <ComponentExample titleSize="h4" title="Alignment" id="fluid-alignment" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Button text is centered by default. However, this behavior can change by applying the modifiers
      | <code>-align--left</code> or <code>-align--right</code>.
    .chi-button-group.-fluid(slot="example")
      button(class=`chi-button -align--left`) Button
      button(class=`chi-button`) Button
      button(class=`chi-button -align--right`) Button
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
  <button class="chi-button -align--left">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button -align--right">Button</button>
</div>`,
      },
    };
  },
})
export default class FluidAlignment extends Vue {}
</script>
