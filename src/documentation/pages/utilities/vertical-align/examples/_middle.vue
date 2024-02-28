<template lang="pug">
<ComponentExample padding="-p--2" title="Middle" id="vertical-align-middle" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Use <code>-vertical-align--middle</code> to align the middle of an element with the baseline plus half the x-height of the parent.
  template(#example)
    .-d--flex.-flex--wrap.-p--1.-text
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--middle.-mr--1.example-vertical-align__block
        span middle
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
        htmlblueprint: '<span class="-vertical-align--middle">...</span>',
      },
    };
  },
})
export default class Middle extends Vue {}
</script>
