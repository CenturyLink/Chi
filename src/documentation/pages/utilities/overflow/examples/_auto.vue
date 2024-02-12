<template lang="pug">
  <ComponentExample title="Auto" id="auto" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--2">
    template(#example-description)
      p.-text
        | Use <code>-overflow--auto</code> to show scrollbars if content overflows its box.
        | If content fits within its box, no scrollbars are shown.
    template(#example)
      .chi-grid.-no-gutter
        .chi-col.-w--6.-w-md--4.-p--1
          .-overflow--auto.-b--1.-p--1(style="height:4rem;")
            p.-text.-m--0
              | This is an example of an element with a defined height
              | using <code>-overflow--auto</code> to scroll the content overflowing its box.
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
        htmlblueprint: `<div class="-overflow--auto">...</div>`,
      },
    };
  },
})
export default class Auto extends Vue {}
</script>
