<template lang="pug">
  <ComponentExample titleSize="h2" title="Fluid" id="fluid-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use Fluid buttons to stretch the full width of the parent container.
    <Wrapper slot="example">
      button(class=`chi-button -primary -fluid -justify-content--center -mb--2`) Primary
      button(class=`chi-button -fluid -justify-content--center`) Secondary
    </Wrapper>
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
        webcomponent: `<chi-button color="primary" fluid center>Primary</chi-button>
<chi-button color="primary" variant="outline" fluid center>Secondary</chi-button>`,
        htmlblueprint: `<button class="chi-button -primary -fluid -justify-content--center">Primary</button>
<button class="chi-button -fluid -justify-content--center">Secondary</button>`,
      },
    };
  },
})
export default class FluidPortal extends Vue {}
</script>
