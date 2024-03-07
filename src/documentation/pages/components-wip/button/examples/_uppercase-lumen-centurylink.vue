<template lang="pug">
<ComponentExample titleSize="h2" title="Uppercase" id="uppercase-lumen-centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Uppercase buttons style button text with <code>text-transform: uppercase;</code>
      | to further emphasize button text labels and distinguish them from surrounding content.
      span.-d--block.-mt--2
      | <strong>Note:</strong> Uppercase styled text can cause rendering issues in certain locales.
  template(#example)
    .-d--flex
      .-pr--2
        button(class=`chi-button -uppercase`) Button
      .-pr--2
        button(class=`chi-button -primary -uppercase`) Button
      .-pr--2
        button(class=`chi-button -outline -primary -uppercase`) Button
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
        webcomponent: `<chi-button uppercase>Button</chi-button>
<chi-button color="primary" uppercase>Button</chi-button>
<chi-button color="primary" variant="outline" uppercase>Button</chi-button>`,
        htmlblueprint: `<button class="chi-button -uppercase">Button</button>
<button class="chi-button -primary -uppercase">Button</button>
<button class="chi-button -primary -outline -uppercase">Button</button>`,
      },
    };
  },
})
export default class UppercaseLumenCenturyLink extends Vue {}
</script>
