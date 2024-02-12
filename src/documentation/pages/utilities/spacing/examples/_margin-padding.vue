<template lang="pug">
  <ComponentExample title="Margin + Padding" id="margin-padding" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text Apply both margin and padding to an element by adding both class names.
    template(#example)
      .chi-grid.-no-gutter
        .example-spacing-margin
          .-m--3.-p--3.example-spacing-padding
            .example-spacing-padding__block
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
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-m--3 -p--3"></div>`,
      },
    };
  },
})
export default class MarginPadding extends Vue {}
</script>
