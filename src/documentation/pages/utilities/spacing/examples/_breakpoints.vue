<template lang="pug">
<ComponentExample title="Breakpoints" id="breakpoints" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text Target specific breakpoints with responsive classes.
  template(#example)
    .chi-grid.-no-gutter
      .example-spacing-margin
        .-mx--0.-px--0.-mx-lg--6.-px-lg--6.example-spacing-padding
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
        htmlblueprint: `<div class="-mx--0 -px--0 -mx-lg--6 -px-lg--6"></div>`,
      },
    };
  },
})
export default class Breakpoints extends Vue { }
</script>
