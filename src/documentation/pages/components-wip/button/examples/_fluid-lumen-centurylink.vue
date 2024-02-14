<template lang="pug">
  <ComponentExample titleSize="h2" title="Fluid" id="fluid-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use Fluid buttons to stretch the full width of the parent container.
    template(#example)
      .chi-form__item
        button(class=`chi-button -fluid -mb--2`) Button
        button(class=`chi-button -fluid -justify-content--center`) Button
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
export default class FluidLumenCenturyLink extends Vue {}
</script>
