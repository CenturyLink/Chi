<template lang="pug">
  <ComponentExample title="Column" id="column" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text Use <code>-flex--column</code> to display items vertically.
    template(#example)
      .-p--3.-d--flex.-flex--column.-show--example
        .-text.-p--2(v-for="i in 3" ) Item {{i}}
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
    };
  },
})
export default class Column extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    const content = Array(3)
      .fill(0)
      .map((_, i) => `  <div>Item ${i + 1}</div>`)
      .join('\n');

    return `<div class="-d--flex -flex--column">
${content}
</div>`;
  }
}
</script>
