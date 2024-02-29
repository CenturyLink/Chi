<template lang="pug">
<ComponentExample title="Inline Flexbox container" id="flexbox-container" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example)
    .-p--3.-show--example
      .-text.-p--2.-m--1.-d--inline-flex -d--inline-flex
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
        htmlblueprint: `<div class="-d--inline-flex"></div>`,
      },
    };
  },
})
export default class InlineFlexboxContainer extends Vue {}
</script>
