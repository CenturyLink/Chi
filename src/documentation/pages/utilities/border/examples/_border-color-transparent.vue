<template lang="pug">
  <ComponentExample title="Transparent" id="transparent" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Use the transparent border color as a method to hide an element's border without altering its size.
    template(#example)
      .chi-grid.-no-gutter.-text.-text--center
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--transparent.-bg--grey-10 Transparent
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
        htmlblueprint: `<div class="-b--1 -b--transparent"></div>`,
      },
    };
  },
})
export default class Transparent extends Vue {}
</script>
