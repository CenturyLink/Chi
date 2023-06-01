<template lang="pug">
  <ComponentExample title="Column-Specific Vertical Alignment" titleSize="h3" id="column-specific-vertical-alignment" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example")
      | Changing the alignment of an individual column is as easy as applying 
      | an alignment modifier to the column in question.
      
    .chi-grid.-show--example.-mb--3(style="height: 160px" slot="example")
      .chi-col(v-for="i in gridCols" :class="`${i}`" :key="i")

    <pre class="language-html" slot="code-htmlblueprint" style="border:none;">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      gridCols: ['-align--top', '-align--center', '-align--bottom'],
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
export default class ColumnSpecificVerticalAlignment extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }
  generateHtml() {
    return `<div class="chi-grid -align--top" style="height: 160px;">
${this.gridCols
  .map((item: string) => `  <div class="chi-col ${item}"></div>`)
  .join('\n')}
</div>`;
  }
}
</script>
