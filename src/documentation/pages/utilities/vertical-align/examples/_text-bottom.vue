<template lang="pug">
  <ComponentExample padding="-p--2" title="Text bottom" id="vertical-align-text-bottom" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Use <code>-vertical-align--text-bottom</code> to align the bottom of an element with the bottom of the parent element's font.
    template(#example)
      .-d--flex.-flex--wrap.-p--1.-text
        .-position--relative.-w--100.example-vertical-align
          span.-d--inline-block.-bg--secondary.-vertical-align--text-bottom.-mr--1.example-vertical-align__block
          span text-bottom
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
        htmlblueprint: '<span class="-vertical-align--text-bottom">...</span>',
      },
    };
  },
})
export default class TextBottom extends Vue {}
</script>
