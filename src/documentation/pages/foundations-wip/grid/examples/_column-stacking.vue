<template lang="pug">
  div
    <ComponentExample title="Column Stacking" titleSize="h3" id="column-stacking" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      p.-text(slot="example")
        | On extra small (xs) viewports you can make columns stack by specifying 
        | the column with the <code>-w-sm</code> or any <code>-w-sm--*</code> 
        | size modifier classes. Columns will start out stacked until viewed 
        | in the small viewport, at which point they will display horizontally 
        | in the row according to automatic layout or its assigned viewport size class.
      
      .chi-grid.-show--example(slot="example")
        .chi-col.-mb--3(v-for="i in smallViewport" :key="i" :class="`${i}`")
      .chi-grid.-show--example(slot="example")
        .chi-col.-mb--3(v-for="i in normalViewport" :key="i" :sclass="`${i}`")

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
      smallViewport: ['-w-sm--2', '-w-sm--4', '-w-sm'],
      normalViewport: ['-w-sm', '-w-sm', '-w-sm'],
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
export default class ColumnStacking extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }
  generateHtml() {
    return `<div class="chi-grid">
${this.smallViewport
  .map((item: string) => `  <div class="chi-col ${item}"></div>`)
  .join('\n')}
</div>`;
  }
}
</script>
