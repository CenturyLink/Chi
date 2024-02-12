<template lang="pug">
  <ComponentExample titleSize="h4" title="Base" id="base" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | To render a button group, wrap a series of buttons in a div and apply the class <code>chi-button-group</code>.
    template(#example)
      .chi-button-group
        button(class=`chi-button` v-for="item in Array(3).fill(0)") Button
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Base extends Vue {
  exampleTabs = [
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
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`,
  };
}
</script>
