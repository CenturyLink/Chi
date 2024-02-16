<template lang="pug">
<ComponentExample padding="-p--2" title="Text top" id="vertical-align-text-top" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Use <code>-vertical-align--text-top</code> to align the top of an element with the top of the parent element's font.
  template(#example)
    .-d--flex.-flex--wrap.-p--1.-text
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--text-top.-mr--1.example-vertical-align__block
        span text-top
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
        htmlblueprint: '<span class="-vertical-align--text-top">...</span>',
      },
    };
  },
})
export default class TextTop extends Vue { }
</script>
