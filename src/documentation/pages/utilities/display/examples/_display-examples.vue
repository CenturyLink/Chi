<template lang="pug">
<ComponentExample title="Examples" id="display-examples" :tabs="exampleTabs" :showSnippetTabs="false" titleSize="h2">
  template(#example)
    .-show--example
      .-text.-p--3.-m--1(
        v-for="{ className } in examples"
        :class="className") {{ className }}
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class DisplayExamples extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  examples = [
    {
      className: '-d--none -d-xl--inline-flex',
      comment: 'hidden on all breakpoints except xl',
    },
    {
      className: '-d-sm--none',
      comment: 'hidden on sm breakpoints',
    },
    {
      className: '-d--inline-flex',
      comment: 'inline-flex on all breakpoints',
    },
    {
      className: '-d--flex',
      comment: 'flex on all breakpoints',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.examples
      .map(({ className, comment }) => {
        return `<!-- ${comment} -->
<div class="${className}"></div>`;
      })
      .join('\n');
  }
}
</script>
