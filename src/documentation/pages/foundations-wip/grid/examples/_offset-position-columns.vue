<template lang="pug">
  <ComponentExample title="Offset Positioning of Columns" id="offset-position-columns" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | You may position columns with an offset of one or more column units 
      | by specifying an offset size class on your column.
    
    .chi-grid.-mb--2.-show--example(slot="example")
      .chi-col(v-for="item in gridColumns" :key="item" :class="item")
    
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
export default class OffsetPositionColumns extends Vue {
  gridColumns = ['-w--5 -o--1', '-w--3 -o--3'];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }

  generateHtml() {
    return `<div class="chi-grid">
${this.gridColumns
  .map(item => `  <div class="chi-col ${item}"></div>`)
  .join('\n')}
</div>`;
  }
}
</script>
