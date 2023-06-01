<template lang="pug">
  <ComponentExample title="-align--center" titleSize="h4" id="-align--center" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    .chi-grid.-align--center.-show--example.-mb--3(style="height: 160px")(slot="example")
      each i in [1, 2, 3]
        .chi-col

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
      gridCols: [1, 2, 3],
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
export default class AlignCenter extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }
  generateHtml() {
    return `<div class="chi-grid -align--center" style="height: 160px;">
${this.gridCols.map((item: number) => `<div class="chi-col"></div>`)}
</div>`;
  }
}
</script>
