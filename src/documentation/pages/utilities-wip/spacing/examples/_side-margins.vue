<template lang="pug">
  <ComponentExample title="Side Margins" id="side-margins" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Apply margin to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
    .chi-grid.-no-gutter(slot="example")
      .-mr--3.example-spacing-margin(v-for="className in classNames")
        .example-spacing-margin__block(:class="className.name")
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
export default class SideMargins extends Vue {
  classNames = [
    {
      name: '-mt--3',
      value: 'margin-top'
    },
    {
      name: '-mb--3',
      value: 'margin-bottom'
    },
    {
      name: '-ml--3',
      value: 'margin-left'
    },
    {
      name: '-mr--3',
      value: 'margin-right'
    },
    {
      name: '-mx--3',
      value: 'margin-left and margin-right'
    },
    {
      name: '-my--3',
      value: 'margin-top and margin-bottom'
    }
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.classNames.map(({name, value}) => {
      return (
        `<!-- ${value} -->
<div class="${name}"></div>`
      )
    }).join('\n');
  }
}
</script>
