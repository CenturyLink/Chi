<template lang="pug">
  div
    <ComponentExample title="Reordering Columns" id="reordering-columns" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      p.-text(slot="example")
        | To display a column or columns in an order that is different than 
        | that which they appear in the markup, you may apply a 
        | reordering modifier class.
      
      .test-reordering.-w--100(slot="example")
        .chi-grid.-mb--2.-show--example
          .chi-col(v-for="item in grid3Columns" :key="item" :class="`-n--${item}ㅤ`")
      
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
      grid3Columns: [1, 2, 3],
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
  get codeSnippets() {
    return {
      htmlblueprint3Cols: this.generateHtml3Cols()
    };
  }
  generateHtml3Cols() {
    return `<div class="chi-grid">
  <div class="chi-col -n--1"></div> <!-- displayed last -->
  <div class="chi-col -n--2"></div> <!-- displayed first -->
  <div class="chi-col -n--3"></div> <!-- displayed between -->
</div>`;
  }
}
</script>
