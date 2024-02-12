<template lang="pug">
  <ComponentExample padding="-p--2" title="Top" id="vertical-align-top" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Use <code>-vertical-align--top</code> to align the top of the element and its descendants with the top of the entire line.
    template(#example)
      .-d--flex.-flex--wrap.-p--1.-text
        .-position--relative.-w--100.example-vertical-align
          span.-d--inline-block.-bg--secondary.-vertical-align--top.-mr--1.example-vertical-align__block
          span top
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
        htmlblueprint: '<span class="-vertical-align--top">...</span>',
      },
    };
  },
})
export default class Top extends Vue {}
</script>
