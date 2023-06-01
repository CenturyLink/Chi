<template lang="pug">
  div
    <ComponentExample title="Column Wrapping" titleSize="h3" id="column-wrapping" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      p.-text(slot="example")
        | Grid containers can accommodate any number of columns, however, the 
        | grid system is restricted to a maximum of 12 column units per row. 
        | Overflowing the 12 column units will automatically wrap additional 
        | columns onto a new row. For example, the following layout is the 
        | result of having 24 column units in a single container:
      
      .chi-grid.-mb--2.-show--example(slot="example")
        .chi-col(v-for="i in grid4Columns" :key="i" class="-w--3")
        .chi-col(v-for="i in grid2Columns" :key="i" class="-w--6")
      
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
      grid4Columns: [1, 2, 3, 4],
      grid2Columns: [1, 2],
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
export default class ColumnWrapping extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint3Cols: this.generateHtml3Cols()
    };
  }
  generateHtml3Cols() {
    return `<div class="chi-grid">

  <!-- first 12 column units -->
${this.grid4Columns
  .map((item: string) => `  <div class="chi-col -w--3"></div>`)
  .join('\n')}

  <!-- ... and another row consisting of 12 more units -->
${this.grid2Columns
  .map((item: string) => `  <div class="chi-col -w--6"></div>`)
  .join('\n')}

</div>`;
  }
}
</script>
