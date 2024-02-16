<template lang="pug">
<ComponentExample title="Reordering Columns" id="reordering-columns" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#example-description)
    p.-text
      | To display a column or columns in an order that is different than
      | that which they appear in the markup, you may apply a
      | reordering modifier class.
  template(#example)
    .test-reordering.-w--100()
      .chi-grid.-mb--2.-show--example
        .chi-col(v-for="{className} in gridColumns" :key="className" :class="className")

  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint3Cols" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class ReorderingColumns extends Vue {
  gridColumns = [
    {
      className: '-n--3',
      comment: '<!-- displayed last -->',
    },
    {
      className: '-n--1',
      comment: '<!-- displayed first -->',
    },
    {
      className: '-n--2',
      comment: '<!-- displayed between -->',
    },
  ];

  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint3Cols: this.generateHtml3Cols(),
    };
  }

  generateHtml3Cols() {
    return `<div class="chi-grid">
${this.gridColumns
  .map(
    (item: { className: string; comment: string }) => `  <div class="chi-col ${item.className}"></div> ${item.comment}`
  )
  .join('\n')}
</div>`;
  }
}
</script>
