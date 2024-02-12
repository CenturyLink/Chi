<template lang="pug">
  <ComponentExample title="Margins" id="margins" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | In this example, various margin classes have been applied to render margin
        | on all 4 sides of the blue squares. The margin can be visualized in blue.
    template(#example)
      .chi-grid.-no-gutter
        .-mr--3.example-spacing-margin(v-for="className in classNames")
          .example-spacing-margin__block(:class="className")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Margins extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  classNames = ['-m--2', '-m--4', '-m--6'];

  get codeSnippets() {
    return {
      htmlblueprint: this.classNames.map((className) => `<div class="${className}"></div>`).join('\n'),
    };
  }
}
</script>
