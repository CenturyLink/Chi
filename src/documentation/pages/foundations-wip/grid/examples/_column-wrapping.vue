<template lang="pug">
  <ComponentExample title="Column Wrapping" id="column-wrapping" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | Grid containers can accommodate any number of columns, however, the 
      | grid system is restricted to a maximum of 12 column units per row. 
      | Overflowing the 12 column units will automatically wrap additional 
      | columns onto a new row. For example, the following layout is the 
      | result of having 24 column units in a single container:
    
    .chi-grid.-mb--2.-show--example(slot="example")
      .chi-col(v-for="item in grid4Columns" :key="item" class="-w--3")
      .chi-col(v-for="item in grid2Columns" :key="item" class="-w--6")
    
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
export default class ColumnWrapping extends Vue {
  grid2Columns = Array(2).fill('chi-col');
  grid4Columns = Array(4).fill('chi-col');

  get codeSnippets() {
    return {
      htmlblueprint3Cols: this.generateHtml()
    };
  }

  generateHtml() {
    return `<div class="chi-grid">

  <!-- first 12 column units -->
${this.generateHtmlList(this.grid4Columns, '3')}

  <!-- ... and another row consisting of 12 more units -->
${this.generateHtmlList(this.grid2Columns, '6')}

</div>`;
  }

  generateHtmlList(array: string[], length: string) {
    return `${array
      .map(() => `<div class="chi-col -w--${length}"></div>`)
      .join('\n')}
</div>`;
  }
}
</script>
