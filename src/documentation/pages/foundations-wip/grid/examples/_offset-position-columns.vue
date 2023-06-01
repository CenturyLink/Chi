<template lang="pug">
  div
    <ComponentExample title="Offset Positioning of Columns" titleSize="h3" id="offset-position-columns" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      p.-text(slot="example")
        | You may position columns with an offset of one or more column units 
        | by specifying an offset size class on your column.
      
      .chi-grid.-mb--2.-show--example(slot="example")
        .chi-col.-w--5.-o--1
        .chi-col.-w--3.-o--3
      
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
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }
  generateHtml() {
    return `<div class="chi-grid">
  <div class="chi-col -w--5 -o--1"></div>
  <div class="chi-col -w--3 -o--3"></div>
</div>`;
  }
}
</script>
