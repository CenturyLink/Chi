<template lang="pug">
  <ComponentExample title="Margins" id="margins" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | In this example, various margin classes have been applied to render margin
      | on all 4 sides of the blue squares. The margin can be visualized in blue.
    .chi-grid.-no-gutter(slot="example")
      .-mr--3.example-spacing-margin(v-for="className in classNames")
        .example-spacing-margin__block(:class="className")
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
      ]
    };
  }
})
export default class Margins extends Vue {
  classNames = ['-m--2', '-m--4', '-m--6']

  get codeSnippets() {
    return {
      htmlblueprint: this.classNames.map(className => `<div class="${className}"></div>`).join('\n')
    }
  }
}
</script>
