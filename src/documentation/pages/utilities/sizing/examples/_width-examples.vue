<template lang="pug">
<ComponentExample title="Examples" id="width-examples" :tabs="exampleTabs" titleSize="h2" :showSnippetTabs="false">
  template(#example)
    .-show--example
      .-text.-p--3.-m--1(v-for="{ value } in values" :class="`-w-${value}`") -w-{{ value }}
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class WidthExamples extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  values = [
    {
      comment: 'width auto on all breakpoints',
      value: '-auto',
    },
    {
      comment: 'width 25% on all breakpoints',
      value: '-25',
    },
    {
      comment: 'width 50% on all breakpoints',
      value: '-50',
    },
    {
      comment: 'width 75% from md',
      value: 'md--75',
    },
    {
      comment: 'width 50% from xl',
      value: 'xl--50',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.values
      .map(({ comment, value }) => {
        return `<!-- ${comment} -->
<div class="-w-${value}"></div>`;
      })
      .join('\n');
  }
}
</script>
