<template lang="pug">
  <ComponentExample title="Padding" id="paddings" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | In this example, various padding classes have been applied to render padding
      | on all 4 sides of the blue squares. The padding can be visualized in yellow.
    .chi-grid.-no-gutter(slot="example")
      .-mr--3.example-spacing-padding(v-for="className in classNames" :class="className")
        .example-spacing-padding__block
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
export default class Paddings extends Vue {
  classNames = ['-p--2', '-p--4', '-p--6']

  get codeSnippets() {
    return {
      htmlblueprint: this.classNames.map(className => `<div class="${className}"></div>`).join('\n')
    }
  }
}
</script>
