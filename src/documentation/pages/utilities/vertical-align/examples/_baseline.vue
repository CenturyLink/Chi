<template lang="pug">
  <ComponentExample padding="-p--2" title="Baseline" id="vertical-align-baseline" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Use <code>-vertical-align--baseline</code> to align the baseline of an element with the baseline of its parent.
    template(#example)
      .-d--flex.-flex--wrap.-p--1.-text
        .-position--relative.-w--100.example-vertical-align
          span.-d--inline-block.-bg--secondary.-vertical-align--baseline.-mr--1.example-vertical-align__block
          span baseline
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
      codeSnippets: { htmlblueprint: '<span class="-vertical-align--baseline">...</span>' },
    };
  },
})
export default class Baseline extends Vue {}
</script>
