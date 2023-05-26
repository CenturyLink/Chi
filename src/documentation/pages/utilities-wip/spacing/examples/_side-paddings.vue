<template lang="pug">
  <ComponentExample title="Side Paddings" id="side-paddings" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Apply padding to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
    .chi-grid.-no-gutter(slot="example")
      .-mr--3.example-spacing-padding(v-for="className in classNames" :class="className.name")
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
export default class SidePaddings extends Vue {
  classNames = [
    {
      name: '-pt--3',
      value: 'padding-top'
    },
    {
      name: '-pb--3',
      value: 'padding-bottom'
    },
    {
      name: '-pl--3',
      value: 'padding-left'
    },
    {
      name: '-pr--3',
      value: 'padding-right'
    },
    {
      name: '-px--3',
      value: 'padding-left and padding-right'
    },
    {
      name: '-py--3',
      value: 'padding-top and padding-bottom'
    }
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.classNames.map(({ name, value }) => {
      return (
        `<!-- ${value} -->
<div class="${name}"></div>`
      )
    }).join('\n');
  }
}
</script>
