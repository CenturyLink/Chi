<template lang="pug">
  <ComponentExample title="Row reverse" id="row-reverse" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description") Use <code>-flex--row-reverse</code> to display the items horizontally in reverse.
    .-p--3.-d--flex.-flex--row-reverse.-show--example(slot="example")
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
export default class RowReverse extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    const content = Array(3).fill(0).map((_, i) => `  <div>Item ${i + 1}</div>`).join('\n');

    return (
      `<div class="-d--flex -flex--row-reverse">
${content}
</div>`)
  }
}
</script>
