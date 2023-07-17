<template lang="pug">
  <ComponentExample title="Viewport-Specific Column Offsets" id="viewport-specific-column-offset" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | You may also use offsets on a per-viewport basis. For example, it 
      | may make sense to offset content on a desktop, but where space is 
      | limited on a mobile device you may want to have the content occupy 
      | more space. In the following example, the column will be offset by 
      | 50% when on medium viewports, but will not be offset on extra small 
      | or small viewports.
    
    .chi-grid.-show--example.-mb--3(slot="example")
      .chi-col.-o-md--6

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
export default class ColumnOffset extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }
  generateHtml() {
    return `<div class="chi-grid">
  <div class="chi-col -o-md--6"></div>
</div>`;
  }
}
</script>
