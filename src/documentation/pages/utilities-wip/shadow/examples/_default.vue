<template lang="pug">
    <ComponentExample title="Default" titleSize="h4" id="default" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    .chi-grid.-text.-no-gutter.-text--center.-p--2(style="background:#F5F5F5;" slot="example")
      .-p--5.-m--2(style="background:#FFFFFF;" v-for="index in indexes" :class="'-s--' + index") -s--{{index}}
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
export default class Default extends Vue {
  indexes = [ 0, 1, 2, 3, 4, 5 ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.indexes.map((index: number) => `<div class="-s--${index}"></div>`).join('\n');
  }
}
</script>
