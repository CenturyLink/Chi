<template lang="pug">
  <ComponentExample title="Examples" id="display-examples" :tabs="exampleTabs" :showSnippetTabs="false" titleSize="h2">
    .-show--example(slot="example")
      .-text.-p--3.-m--1(
        v-for="{ className } in examples"
        :class="className") {{ className }}
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
      codeSnippets: {
        htmlblueprint: `<!-- hidden on all breakpoints except xl -->
<div class="-d--none -d-xl--inline-flex"></div>
<!-- hidden on sm breakpoints -->
<div class="-d-sm--none"></div>
<!-- inline-flex on all breakpoints -->
<div class="-d--inline-flex"></div>
<!-- flex on all breakpoints -->
<div class="-d--flex"></div>`
      }
    };
  }
})
export default class DisplayExamples extends Vue {
  examples = [
    {
      className: '-d--none -d-xl--inline-flex',
      comment: 'hidden on all breakpoints except xl'
    }, {
      className: '-d-sm--none',
      comment: 'hidden on sm breakpoints'
    }, {
      className: '-d--inline-flex',
      comment: 'inline-flex on all breakpoints'
    }, {
      className: '-d--flex',
      comment: 'flex on all breakpoints'
    }
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.examples.map(({ className, comment }) => {
      return (
        `<!-- ${ comment } -->
<div class="${ className }"></div>`
      )
    }).join('\n');
  }
}
</script>
