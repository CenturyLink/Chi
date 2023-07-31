<template lang="pug">
  <ComponentExample title="-align--bottom" titleSize="h4" id="-align--bottom" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    .chi-grid.-align--bottom.-show--example.-mb--3(style="height: 160px" slot="example")
      .chi-col(:key="item" v-for="item in gridCols")

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
export default class AlignBottom extends Vue {
  gridCols = [1, 2, 3];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }
  generateHtml() {
    return `<div class="chi-grid -align--bottom" style="height: 160px;">
${this.gridCols.map((_: any) => `  <div class="chi-col"></div>`).join('\n')}
</div>`;
  }
}
</script>
