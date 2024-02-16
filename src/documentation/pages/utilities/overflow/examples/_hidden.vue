<template lang="pug">
<ComponentExample title="Hidden" id="hidden" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--2">
  template(#example-description)
    p.-text
      | Use <code>-overflow--hidden</code> to hide content that overflows its box. No scrollbars are shown.
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--6.-w-md--4.-p--1
        .-overflow--hidden.-b--1.-p--1(style="height:4rem;")
          p.-text.-m--0
            | This is an example of an element with a defined height
            | using <code>-overflow--hidden</code> to hide its overflow.
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
        htmlblueprint: `<div class="-overflow--hidden">...</div>`,
      },
    };
  },
})
export default class Hidden extends Vue { }
</script>
