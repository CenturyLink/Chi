<template lang="pug">
  <ComponentExample title="Examples" id="height-examples" :tabs="exampleTabs" titleSize="h2" :showSnippetTabs="false">
    template(#example)
      .-d--flex.-flex--row.-justify-content--around.-show--example(style="height: 500px;")
        .-text.-p--5.-m--1(v-for="{ value } in values" v-if="value !=='-auto'" :class="`-h-${value}`") -h-{{ value }}
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
      comment: 'height auto on all breakpoints',
      value: '-auto',
    },
    {
      comment: 'height 25% on all breakpoints',
      value: '-25',
    },
    {
      comment: 'height 50% on all breakpoints',
      value: '-50',
    },
    {
      comment: 'height 75% from md',
      value: 'md--75',
    },
    {
      comment: 'height 50% from xl',
      value: 'xl--50',
    },
    {
      comment: 'height 25% from lg',
      value: 'lg--25',
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
<div class="-h-${value}"></div>`;
      })
      .join('\n');
  }
}
</script>
