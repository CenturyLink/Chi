<template lang="pug">
  <ComponentExample title="Border Sides" id="border-sides" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Apply borders to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
    .chi-grid.-text.-no-gutter.-text--center(slot="example")
      .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in borders")
        .-m--1.-p--1.-py--5.-bg--grey-10(:class="border") {{ border }}
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
export default class BorderSides extends Vue {
  borders = ['-bt--1', '-br--1', '-bb--1', '-bl--1', '-bx--1', '-by--1']

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.borders.map(item => {
      return (
        `<div class="${item}"></div>`
      )
    }).join('\n');
  }
}
</script>
