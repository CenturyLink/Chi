<template lang="pug">
  <ComponentExample title="Column reverse" id="column-reverse" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description") Use <code>-flex--column-reverse</code> to display the items vertically in reverse.
    .-p--3.-d--flex.-flex--column-reverse.-show--example(slot="example")
      .-text.-p--2(v-for="i in 3" ) Item {{i}}
    <pre class="language-html" slot="code-htmlblueprint">
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
      ],
    };
  }
})
export default class ColumnReverse extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    const content = Array(3).fill(0).map((_, i) => `  <div>Item ${i + 1}</div>`).join('\n');

    return (
      `<div class="-d--flex -flex--column-reverse">
${content}
</div>`)
  }
}
</script>
