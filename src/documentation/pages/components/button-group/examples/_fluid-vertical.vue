<template lang="pug">
  <ComponentExample titleSize="h4" title="Vertical" id="fluid-vertical" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      button(class=`chi-button -fluid -mb--2`) Button
      button(class=`chi-button -fluid -justify-content--center`) Button
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
        webcomponent: `<!-- left aligned content -->
<chi-button fluid>Button</chi-button>

<!-- center aligned content -->
<chi-button fluid center>Button</chi-button>`,
        htmlblueprint: `<!-- left aligned content -->
<button class="chi-button -fluid">Button</button>

<!-- center aligned content -->
<button class="chi-button -fluid -justify-content--center">Button</button>`,
      },
    };
  },
})
export default class FluidVertical extends Vue {}
</script>
