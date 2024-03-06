<template lang="pug">
<ComponentExample title="Column-Specific Vertical Alignment" id="column-specific-vertical-alignment" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#example-description)
    p.-text
      | Changing the alignment of an individual column is as easy as applying
      | an alignment modifier to the column in question.
  template(#example)
    .chi-grid.-show--example.-mb--3(style="height: 160px" )
      .chi-col(v-for="item in gridCols" :class="item" :key="item")

  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class ColumnSpecificVerticalAlignment extends Vue {
  gridCols = ['-align--top', '-align--center', '-align--bottom'];
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
    return `<div class="chi-grid" style="height: 160px;">
${this.gridCols.map((item: string) => `  <div class="chi-col ${item}"></div>`).join('\n')}
</div>`;
  }
}
</script>
