<template lang="pug">
  <ComponentExample title="Padding" id="paddings" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | In this example, various padding classes have been applied to render padding
        | on all 4 sides of the blue squares. The padding can be visualized in yellow.
    template(#example)
      .chi-grid.-no-gutter
        .-mr--3.example-spacing-padding(v-for="className in classNames" :class="className")
          .example-spacing-padding__block
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Paddings extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  classNames = ['-p--2', '-p--4', '-p--6'];

  get codeSnippets() {
    return {
      htmlblueprint: this.classNames.map((className) => `<div class="${className}"></div>`).join('\n'),
    };
  }
}
</script>
