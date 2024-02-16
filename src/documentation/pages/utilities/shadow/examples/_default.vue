<template lang="pug">
<ComponentExample title="Default" id="default" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example)
    .chi-grid.-text.-no-gutter.-text--center.-p--2.-bg--grey-15
      .-p--5.-m--2.-bg--white(v-for="index in indexes" :class="'-s--' + index") -s--{{index}}
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Default extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  indexes = [0, 1, 2, 3, 4, 5];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.indexes.map((index: number) => `<div class="-s--${index}"></div>`).join('\n');
  }
}
</script>
