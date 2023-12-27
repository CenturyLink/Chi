<template lang="pug">
  <ComponentExample title="Examples" id="height-examples" :tabs="exampleTabs" titleSize="h2" :showSnippetTabs="false">
    .-d--flex.-flex--row.-justify-content--around.-show--example(slot="example" style="height: 500px;")
      .-text.-p--5.-m--1(v-for="{ value } in values" v-if="value !=='-auto'" :class="`-h-${value}`") -h-{{ value }}
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
          label: 'HTML Blueprint',
        }
      ]
    }
  }
})
export default class WidthExamples extends Vue {
  values = [
    {
      comment: 'height auto on all breakpoints',
      value: '-auto'
    },
    {
      comment: 'height 25% on all breakpoints',
      value: '-25'
    },
    {
      comment: 'height 50% on all breakpoints',
      value: '-50'
    },
    {
      comment: 'height 75% from md',
      value: 'md--75'
    },
    {
      comment: 'height 50% from xl',
      value: 'xl--50'
    },
    {
      comment: 'height 25% from lg',
      value: 'lg--25'
    },
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.values.map(({ comment, value }) => {
      return (
        `<!-- ${comment} -->
<div class="-h-${value}"></div>`
      )
    }).join('\n');
  }
}
</script>
