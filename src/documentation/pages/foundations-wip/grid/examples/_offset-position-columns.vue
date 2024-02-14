<template lang="pug">
  <ComponentExample title="Offset Positioning of Columns" id="offset-position-columns" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
    template(#example-description)
      p.-text
        | You may position columns with an offset of one or more column units
        | by specifying an offset size class on your column.
    template(#example)
      .chi-grid.-mb--2.-show--example()
        .chi-col(v-for="item in gridColumns" :key="item" :class="item")

    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class OffsetPositionColumns extends Vue {
  gridColumns = ['-w--5 -o--1', '-w--3 -o--3'];
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
${this.gridColumns.map((item) => `  <div class="chi-col ${item}"></div>`).join('\n')}
</div>`;
  }
}
</script>
