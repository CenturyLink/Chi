<template lang="pug">
<ComponentExample title="-align--top" titleSize="h4" id="-align--top" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#example)
    .chi-grid.-align--top.-show--example.-mb--3(style="height: 160px")
      .chi-col(:key="item" v-for="item in gridCols")

  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class AlignTop extends Vue {
  gridCols = [1, 2, 3];
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return `<div class="chi-grid -align--top" style="height: 160px;">
${this.gridCols.map((_: any) => `  <div class="chi-col"></div>`).join('\n')}
</div>`;
  }
}
</script>
