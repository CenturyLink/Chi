<template lang="pug">
  <ComponentExample titleSize="h2" title="Fluid" id="fluid-portal" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | Use Fluid buttons to stretch the full width of the parent container.
    template(#example)
      button(class=`chi-button -primary -fluid -justify-content--center -mb--2`) Primary
      button(class=`chi-button -fluid -justify-content--center`) Secondary

    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
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
