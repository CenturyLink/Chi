<template lang="pug">
  <ComponentExample title="Reordering Columns" id="reordering-columns" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | To display a column or columns in an order that is different than 
      | that which they appear in the markup, you may apply a 
      | reordering modifier class.
    
    .test-reordering.-w--100(slot="example")
      .chi-grid.-mb--2.-show--example
        .chi-col(v-for="{className} in gridColumns" :key="className" :class="className")
    
    <pre class="language-html" slot="code-htmlblueprint" style="border:none;">
      <code v-highlight="codeSnippets.htmlblueprint3Cols" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ]
    };
  }
})
export default class ReorderingColumns extends Vue {
  gridColumns = [
    {
      className: '-n--3',
      comment: '<!-- displayed last -->'
    },
    {
      className: '-n--1',
      comment: '<!-- displayed first -->'
    },
    {
      className: '-n--2',
      comment: '<!-- displayed between -->'
    }
  ];

  get codeSnippets() {
    return {
      htmlblueprint3Cols: this.generateHtml3Cols()
    };
  }

  generateHtml3Cols() {
    return `<div class="chi-grid">
${this.gridColumns
  .map(
    (item: { className: string; comment: string }) =>
      `  <div class="chi-col ${item.className}"></div> ${item.comment}`
  )
  .join('\n')}
</div>`;
  }
}
</script>
