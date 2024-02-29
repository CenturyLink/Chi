<template lang="pug">
<ComponentExample title="Flexbox container" id="flexbox-container" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example)
    .-p--3.-show--example
      .-text.-p--2.-m--1.-d--flex -d--flex
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
        htmlblueprint: `<div class="-d--flex"></div>`,
      },
    };
  },
})
export default class FlexboxContainer extends Vue {}
</script>
