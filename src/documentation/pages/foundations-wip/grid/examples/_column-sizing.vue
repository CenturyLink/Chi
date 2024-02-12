<template lang="pug">
<ComponentExample title="Column Sizing" id="column-sizing" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#example-description)
    p.-text
      | You can specify the amount of horizontal space that a column may consume
      |  by adding size classes to your column markup. For example, to create a
      | layout with one column taking up 25% of the available space and the
      | second other column taking up 75% of the space, you can add
      | <code>-w--3</code> and <code>-w--9</code> to your each column, respectively:

  template(#example)
    .chi-grid.-show--example.-mb--2()
      .chi-col(v-for="item in gridCols" :key="item" :class="item")

  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")

</ComponentExample>

p.-text
  | Remember that the grid system consists of 12 columns, so each column unit is approximately 8.3% in width.
  | So, to achieve this layout we are using 3 grid column units (1 unit * 3, or 8.3% * 3) to claim 25% of the
  | width for the first column.
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class ColumnSizing extends Vue {
  gridCols = ['-w--3', '-w--9'];
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
    return `<div class="chi-grid">
${this.gridCols.map((item: string) => `  <div class="chi-col ${item}"></div>`).join('\n')}
</div>`;
  }
}
</script>
