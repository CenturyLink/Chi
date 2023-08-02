<template lang="pug">
  div  
    <ComponentExample title="Mixing Column Sizes w/Automatic Layout" id="mixing-column-sizes-w-automatic-layout" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      p.-text(slot="example-description")
        | When specifying a column size, it is often not necessary to assign an 
        | explicit size to each column. In the case above, we could have easily 
        | omitted the <code>-w--9</code> size class from the second column and 
        | the layout would remain the same.
        br
        br
        | For example, if we wanted to create a layout with 3 columns where the 
        | left and right columns are fixed in width and the middle column is 
        | flexible based on the amount of available space, we would end up 
        | with the following:
      
      .chi-grid.-mb--2.-show--example(slot="example")
        .chi-col(v-for="item in gridColumns" :key="item" :class="item")
      
      <pre class="language-html" slot="code-htmlblueprint" style="border:none;">
        <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </ComponentExample>

    p.-text Any columns that do not have an explicit size class associated with them will simply consume an equal amount of the leftover avaible space.
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
export default class MixingSizesAutomatic extends Vue {
  gridColumns = [' -w--2', '', ' -w--2'];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }

  generateHtml() {
    return `<div class="chi-grid">
${this.gridColumns
  .map(item => `  <div class="chi-col${item}"></div>`)
  .join('\n')}
</div>`;
  }
}
</script>
