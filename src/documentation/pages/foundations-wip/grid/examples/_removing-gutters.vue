<template lang="pug">
  <ComponentExample title="Removing Gutters" titleSize="h3" id="removing-gutters" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example")
      | Columns are rendered with a consistent amount of spacing between them. 
      | To collapse these margins, you may use the <code>-no-gutter</code> 
      | modifier class on the grid container.
    
    .chi-grid.-no-gutter.-mb--2.-show--example(slot="example")
      each i in [1, 2, 3]
        .chi-col
    
    <pre class="language-html" slot="code-htmlblueprint" style="border:none;">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { grid3Columns } from '../../../../fixtures/fixtures';

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
export default class RemovingGutters extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }
  generateHtml() {
    return `<!-- grid container with collapsed margins -->
<div class="chi-grid -no-gutter">
${grid3Columns.map((item: string) => `  <div class=${item}></div>`).join('\n')}
</div>`;
  }
}
</script>
