<template lang="pug">
<ComponentExample title="Auto margin" id="auto-margin" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text Apply margin auto to an element
  template(#example)
    .example-spacing-margin.-d--flex
      .-m--auto.example-spacing-padding
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
        htmlblueprint: `<div class="-m--auto"></div>`,
      },
    };
  },
})
export default class AutoMargin extends Vue { }
</script>
